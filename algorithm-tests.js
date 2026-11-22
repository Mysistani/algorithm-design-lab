const fs = require("fs");
const path = require("path");
const vm = require("vm");

const appPath = path.join(__dirname, "app.js");
const source = fs.readFileSync(appPath, "utf8").replace(/\nreset\(\);\s*$/, "\n");

function makeElement(selector = "") {
  const element = {
    selector,
    value: "",
    textContent: "",
    innerHTML: "",
    hidden: false,
    checked: false,
    dataset: {},
    style: {},
    className: "",
    width: 800,
    height: 520,
    clientWidth: 800,
    clientHeight: 520,
    classList: {
      add() {},
      remove() {},
      toggle() {},
      contains() { return false; },
    },
    addEventListener() {},
    removeEventListener() {},
    append() {},
    appendChild(child) { return child; },
    before() {},
    after() {},
    setAttribute() {},
    removeAttribute() {},
    getBoundingClientRect() {
      return { left: 0, top: 0, width: this.clientWidth, height: this.clientHeight };
    },
    querySelector(childSelector) {
      return makeElement(`${selector} ${childSelector}`);
    },
    querySelectorAll() {
      return [];
    },
    getContext() {
      return canvasContext;
    },
  };
  return element;
}

const canvasContext = new Proxy({}, {
  get(target, prop) {
    if (!(prop in target)) target[prop] = () => {};
    return target[prop];
  },
  set(target, prop, value) {
    target[prop] = value;
    return true;
  },
});

const elements = new Map();
const documentStub = {
  querySelector(selector) {
    if (!elements.has(selector)) elements.set(selector, makeElement(selector));
    return elements.get(selector);
  },
  querySelectorAll() {
    return [];
  },
  createElement(tag) {
    const element = makeElement(tag);
    element.tagName = tag.toUpperCase();
    return element;
  },
  addEventListener() {},
};

const context = {
  console,
  document: documentStub,
  window: {
    addEventListener() {},
    setTimeout,
    clearTimeout,
    requestAnimationFrame: (callback) => setTimeout(callback, 0),
    devicePixelRatio: 1,
  },
  setTimeout,
  clearTimeout,
  prompt: () => "1",
  confirm: () => true,
  performance: { now: () => 0 },
};

const testSource = `
(() => {
  const tests = [];
  const add = (name, fn) => tests.push({ name, fn });
  const last = (generator) => {
    let frame;
    for (const item of generator) frame = item;
    return frame;
  };
  const assert = (condition, message) => {
    if (!condition) throw new Error(message || "Assertion failed");
  };
  const eq = (actual, expected, message) => {
    const left = JSON.stringify(actual);
    const right = JSON.stringify(expected);
    if (left !== right) throw new Error((message || "Values differ") + "\\nactual: " + left + "\\nexpected: " + right);
  };
  const includesText = (value, text, message) => {
    assert(String(value).includes(text), message || ("Expected " + value + " to include " + text));
  };
  const throws = (fn, text) => {
    let message = "";
    try {
      fn();
    } catch (error) {
      message = error.message;
    }
    assert(message, "Expected an exception");
    if (text) includesText(message, text, "Unexpected exception message");
  };
  const graph = (matrix, source = 1, target = matrix.length) => graphFromMatrix(matrix, source, target);
  const weightedGraph = {
    nodes: ["A", "B", "C", "D"].map((id, index) => ({ id, x: 0.2 + index * 0.18, y: 0.5 })),
    edges: [["A", "B", 1], ["A", "C", 4], ["B", "C", 2], ["B", "D", 5], ["C", "D", 1]],
    source: "A",
    target: "D",
    directed: true,
  };
  const undirectedGraph = { ...weightedGraph, directed: false };
  const tspMatrix = [
    [0, 10, 15, 20],
    [10, 0, 35, 25],
    [15, 35, 0, 30],
    [20, 25, 30, 0],
  ];
  const hamiltonianMatrix = [
    [0, 1, 1, 0],
    [1, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 0],
  ];

  add("sorting algorithms finish sorted", () => {
    const input = [5, -1, 3, 3, 0, 9, 2];
    const expected = [-1, 0, 2, 3, 3, 5, 9];
    for (const [name, fn] of Object.entries({
      bubbleSortSteps,
      selectionSortSteps,
      insertionSortSteps,
      mergeSortSteps,
      quickSortSteps,
      heapSortSteps,
    })) {
      const frame = last(fn(input));
      eq(frame.array, expected, name);
      assert(frame.done === true, name + " did not finish");
    }
  });

  add("search algorithms report found and not-found states", () => {
    assert(last(linearSearchSteps([4, 9, 12], 9)).note === "Found", "linear found");
    assert(last(linearSearchSteps([4, 9, 12], 7)).note === "Not found", "linear not found");
    assert(last(binarySearchSteps([10, 4, 8, 2], 8)).note === "Found", "binary found");
    assert(last(binarySearchSteps([10, 4, 8, 2], 7)).note === "Not found", "binary not found");
  });

  add("shortest path and traversal graph algorithms are correct", () => {
    eq(last(bfsSteps(weightedGraph)).finalPath, ["A", "B", "D"], "BFS path by edges");
    eq(last(bfsSteps(weightedGraph)).finalCost, 2, "BFS edge distance");
    eq(last(dijkstraSteps(weightedGraph)).finalPath, ["A", "B", "C", "D"], "Dijkstra path");
    eq(last(dijkstraSteps(weightedGraph)).finalCost, 4, "Dijkstra cost");
    const dfsFrame = last(dfsSteps(weightedGraph));
    assert(dfsFrame.finalPath[0] === "A" && dfsFrame.finalPath.at(-1) === "D", "DFS reaches target");
  });

  add("Bellman-Ford handles negative edges and negative cycles", () => {
    const negativeEdgeGraph = graph([[0, 4, 5], [0, 0, -2], [0, 0, 0]], 1, 3);
    eq(last(bellmanFordSteps(negativeEdgeGraph)).finalCost, 2, "Bellman-Ford negative edge");
    const negativeCycleGraph = graph([[0, 1, 0], [0, 0, -2], [0, -2, 0]], 1, 3);
    assert(last(bellmanFordSteps(negativeCycleGraph)).negativeCycle === true, "negative cycle flag");
    assert(last(dijkstraSteps(negativeEdgeGraph)).invalid === true, "Dijkstra rejects negative edge");
  });

  add("MST and all-pairs graph algorithms are correct", () => {
    assert(last(kruskalSteps(undirectedGraph)).finalCost === 4, "Kruskal MST cost");
    assert(last(primSteps(undirectedGraph)).finalCost === 4, "Prim MST cost");
    const floyd = last(floydWarshallSteps(weightedGraph));
    assert(floyd.table[0][3] === 4, "Floyd-Warshall A to D");
  });

  add("tree algorithms finish with expected states", () => {
    eq(last(treeTraversalSteps([50, 30, 70, 20, 40, 60, 80], "in")).result, "20, 30, 40, 50, 60, 70, 80", "inorder");
    assert(last(bstSearchSteps([50, 30, 70, 20, 40, 60, 80], 60)).note === "Found", "BST search");
    assert(last(bstInsertSteps([50, 30, 70], 65)).note.includes("Insert"), "BST insert");
    assert(last(bstDeleteSteps([50, 30, 70, 20], 30)).note.includes("Delete"), "BST delete");
    assert(last(heapifySteps([3, 10, 5, 1, 7])).result === 10, "heapify max");
    assert(last(heapInsertSteps([10, 7, 5], 12)).result === 12, "heap insert max");
    assert(last(heapDeleteSteps([10, 7, 5, 1])).result === 10, "heap delete max");
  });

  add("divide and conquer algorithms return correct values", () => {
    assert(last(minMaxDivideSteps([18, 7, 3, 21, 12])).result === "min 3, max 21", "min/max");
    assert(last(binarySearchSteps([18, 7, 3, 21, 12], 12)).note === "Found", "divide binary search behavior");
    assert(last(bigMultiplySteps("1234", "5678")).result === String(1234n * 5678n), "big multiply");
    assert(last(karatsubaSteps("1234", "5678")).result === String(1234n * 5678n), "karatsuba");
    eq(last(strassenSteps([[1, 2], [3, 4]], [[5, 6], [7, 8]])).table, [[19, 22], [43, 50]], "strassen");
  });

  add("tournament schedules are valid for even and odd team counts", () => {
    const validate = (teamCount) => {
      const frame = last(tournamentScheduleSteps(teamCount));
      assert(frame.done === true, "tournament done " + teamCount);
      assert(frame.table.length === teamCount, "rows " + teamCount);
      const pairs = new Set();
      for (let team = 0; team < teamCount; team++) {
        const played = new Set();
        for (let day = 0; day < frame.table[team].length; day++) {
          const opponent = frame.table[team][day];
          if (opponent === "-") continue;
          assert(Number.isInteger(opponent), "numeric opponent");
          assert(opponent !== team + 1, "no self match");
          assert(frame.table[opponent - 1][day] === team + 1, "mirrored match");
          played.add(opponent);
          if (team + 1 < opponent) pairs.add((team + 1) + "-" + opponent);
        }
        assert(played.size === teamCount - 1, "all opponents " + teamCount);
      }
      assert(pairs.size === teamCount * (teamCount - 1) / 2, "all pairs " + teamCount);
    };
    for (let n = 2; n <= 16; n++) validate(n);
  });

  add("dynamic programming algorithms return correct reconstructed answers", () => {
    assert(last(matrixChainSteps([10, 30, 5, 60])).result === 4500, "matrix chain");
    const items = [{ weight: 2, value: 6 }, { weight: 3, value: 10 }, { weight: 5, value: 12 }];
    includesText(last(knapsackDpSteps({ items, capacity: 5 })).result, "value 16", "0/1 knapsack dp");
    includesText(last(knapsackMemoSteps({ items, capacity: 5 })).result, "value 16", "0/1 knapsack memo");
    includesText(last(unboundedKnapsackSteps({ items, capacity: 7 })).result, "value 22", "unbounded knapsack");
    assert(last(lcsSteps("ABCBDAB", "BDCABA")).result.length === 4, "LCS length");
    assert(last(lisSteps([10, 22, 9, 33, 21, 50, 41, 60])).result.split(", ").length === 5, "LIS length");
    includesText(last(maxTreePathSumSteps([10, 2, 10, 20, 1, -25, 3, 4])).result, "49", "max tree path");
  });

  add("greedy algorithms return expected choices and costs", () => {
    const activities = [
      { start: 1, finish: 4 },
      { start: 3, finish: 5 },
      { start: 0, finish: 6 },
      { start: 5, finish: 7 },
      { start: 3, finish: 9 },
      { start: 5, finish: 9 },
      { start: 6, finish: 10 },
      { start: 8, finish: 11 },
      { start: 8, finish: 12 },
      { start: 2, finish: 14 },
      { start: 12, finish: 16 },
    ];
    assert(last(activityGreedySteps(activities)).selected.length === 4, "activity greedy");
    includesText(last(fractionalKnapsackSteps({ items: [{ weight: 10, value: 60 }, { weight: 20, value: 100 }, { weight: 30, value: 120 }], capacity: 50 })).result, "240.00", "fractional knapsack");
    includesText(last(jobSequencingSteps([{ id: "A", deadline: 2, profit: 100 }, { id: "B", deadline: 1, profit: 19 }, { id: "C", deadline: 2, profit: 27 }, { id: "D", deadline: 1, profit: 25 }, { id: "E", deadline: 3, profit: 15 }])).result, "profit 142", "job sequencing");
    includesText(last(huffmanSteps([{ symbol: "a", freq: 5 }, { symbol: "b", freq: 9 }, { symbol: "c", freq: 12 }, { symbol: "d", freq: 13 }, { symbol: "e", freq: 16 }, { symbol: "f", freq: 45 }])).result, "root 100", "huffman root");
    includesText(last(tspNearestNeighborSteps(tspMatrix, 1)).result, "80", "nearest neighbor TSP");
    assert(last(tspNearestNeighborSteps([[0, 1, 0], [1, 0, 0], [0, 0, 0]], 1)).result === "no tour", "nearest neighbor no tour");
  });

  add("backtracking and branch-and-bound algorithms find expected states", () => {
    const queen = last(nQueenSteps(4));
    assert(queen.solutionCount === 2, "N-Queen total solutions");
    assert(queen.queens.length === 4, "N-Queen first solution shown");
    includesText(last(subsetSumSteps([3, 34, 4, 12, 5, 2], 9)).result, "2 solution", "subset sum");
    assert(last(hamiltonianCycleSteps(hamiltonianMatrix, 1)).bestPath.length === 5, "hamiltonian backtracking");
    assert(last(hamiltonianBruteSteps(hamiltonianMatrix, 1)).bestPath.length === 5, "hamiltonian brute");
    assert(last(tspBacktrackingSteps(tspMatrix, 1)).bestCost === 80, "TSP backtracking");
    assert(last(tspBranchBoundSteps(tspMatrix, 1)).bestCost === 80, "TSP branch bound");
    includesText(last(knapsackBranchBoundSteps({ items: [{ weight: 10, value: 60 }, { weight: 20, value: 100 }, { weight: 30, value: 120 }], capacity: 50 })).result, "value 220", "knapsack branch bound");
  });

  add("recursive algorithms return correct final values", () => {
    const hanoi = last(hanoiSteps(4));
    assert(hanoi.moves === 15 && hanoi.towers.C.length === 4, "Hanoi");
    assert(last(gcdSteps(70, 33)).result === 1, "GCD");
    assert(last(factorialSteps(5)).result === 120, "factorial");
    assert(last(fibRecursiveSteps(6)).result === 8, "recursive fibonacci");
    assert(last(fibMemoSteps(10)).result === 55, "memo fibonacci");
  });

  add("input parsers and validation throw useful exceptions", () => {
    assert(parseArrayInput("1, x, 3").error, "array parser reports invalid number");
    throws(() => readIntegerInput({ value: "abc" }, 1, 8, "Hanoi disks"), "Hanoi disks");
    throws(() => readBigIntegerInput({ value: "12a" }, "Big number A"), "digits only");
    throws(() => parseMatrixInput("1,2;3,4;5,6", "Matrix A"), "2x2");
    throws(() => parseItemsInput("2:-5"), "weight");
    throws(() => parseActivitiesInput("4-1"), "finish greater");
    throws(() => parseJobsInput("A:0:10"), "Jobs");
    throws(() => parseHuffmanInput("a:5"), "at least two");
    throws(() => parseSquareMatrixInput("0,1;1", "Graph matrix"), "square");
    throws(() => readShortTextInput({ value: "" }, "LCS string A"), "cannot be empty");
  });

  add("app reset smoke test renders without throwing", () => {
    reset();
    assert(state.runners.length > 0, "reset should create runners for the default topic");
    assert(state.topic === "sorting", "default topic should remain sorting");
  });

  add("each topic defaults to one selected algorithm", () => {
    state.selectedAlgorithms = {};
    for (const topic of topics.filter((item) => item.algorithms.length)) {
      ensureAlgorithmSelection(topic);
      eq(state.selectedAlgorithms[topic.id], [topic.algorithms[0]], topic.id + " default selection");
    }
  });

  add("comparison panel compares selected algorithms only on comparable topics", () => {
    state.topic = "dynamic";
    state.selectedAlgorithms = {};
    reset();
    assert(els.comparisonPanel.hidden === false, "comparison should be visible on dynamic topic");
    assert(els.comparisonPanel.innerHTML.includes("complexity-table"), "comparison table should render");
    assert(els.comparisonPanel.innerHTML.includes("Matrix Chain Order"), "comparison should include the selected dynamic method");
    assert(!els.comparisonPanel.innerHTML.includes("Longest Common Subsequence"), "comparison should not include unselected dynamic methods");
    state.topic = "graph";
    reset();
    assert(els.comparisonPanel.hidden === true, "comparison should be hidden on graph topic");
  });

  const results = [];
  for (const test of tests) {
    try {
      test.fn();
      results.push({ name: test.name, ok: true });
    } catch (error) {
      results.push({ name: test.name, ok: false, message: error.message });
    }
  }
  globalThis.__algorithmTestResults = results;
})();
`;

vm.createContext(context);
vm.runInContext(source + "\n" + testSource, context, { filename: "app.js" });

const results = context.__algorithmTestResults || [];
const failed = results.filter((result) => !result.ok);
for (const result of results) {
  const marker = result.ok ? "PASS" : "FAIL";
  console.log(`${marker} ${result.name}`);
  if (!result.ok) console.log(result.message);
}
console.log(`${results.length - failed.length}/${results.length} tests passed`);
if (failed.length) process.exitCode = 1;
