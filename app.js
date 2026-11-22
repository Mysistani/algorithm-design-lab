const state = {
  topic: "sorting",
  running: false,
  timer: null,
  speed: 5,
  size: 20,
  dataset: "random",
  sync: true,
  seed: 41,
  customArray: [18, 7, 3, 21, 12, 9, 1, 15],
  treeInputs: {
    values: [50, 30, 70, 20, 40, 60, 80],
    searchValue: 60,
    insertValue: 65,
    deleteValue: 30,
  },
  searchInputs: {
    values: [4, 9, 12, 17, 23, 31, 38, 44, 52, 68],
    target: 31,
  },
  divideInputs: {
    values: [18, 7, 3, 21, 12, 9, 1, 15],
    target: 12,
    bigA: "12345678",
    bigB: "87654321",
    matrixA: [[1, 2], [3, 4]],
    matrixB: [[5, 6], [7, 8]],
    teams: 8,
  },
  dynamicInputs: {
    matrixDimensions: [10, 30, 5, 60],
    lcsA: "ABCBDAB",
    lcsB: "BDCABA",
    lisValues: [10, 22, 9, 33, 21, 50, 41, 60],
    treeValues: [10, 2, 10, 20, 1, -25, 3, 4],
    capacity: 14,
    items: [
      { weight: 2, value: 6 },
      { weight: 3, value: 10 },
      { weight: 5, value: 12 },
      { weight: 6, value: 18 },
      { weight: 7, value: 22 },
      { weight: 4, value: 14 },
    ],
  },
  greedyInputs: {
    activities: [
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
    ],
    items: [
      { weight: 10, value: 60 },
      { weight: 20, value: 100 },
      { weight: 30, value: 120 },
    ],
    capacity: 50,
    jobs: [
      { id: "A", deadline: 2, profit: 100 },
      { id: "B", deadline: 1, profit: 19 },
      { id: "C", deadline: 2, profit: 27 },
      { id: "D", deadline: 1, profit: 25 },
      { id: "E", deadline: 3, profit: 15 },
    ],
    huffman: [
      { symbol: "a", freq: 5 },
      { symbol: "b", freq: 9 },
      { symbol: "c", freq: 12 },
      { symbol: "d", freq: 13 },
      { symbol: "e", freq: 16 },
      { symbol: "f", freq: 45 },
    ],
    tspMatrix: [
      [0, 10, 15, 20],
      [10, 0, 35, 25],
      [15, 35, 0, 30],
      [20, 25, 30, 0],
    ],
    tspStart: 1,
  },
  compareInputs: {
    activities: [
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
    ],
    items: [
      { weight: 10, value: 60 },
      { weight: 20, value: 100 },
      { weight: 30, value: 120 },
    ],
    capacity: 50,
    graphMatrix: [
      [0, 1, 4, 0],
      [0, 0, 2, 7],
      [0, 0, 0, 3],
      [0, 0, 0, 0],
    ],
    graphSource: 1,
    graphTarget: 4,
    tspMatrix: [
      [0, 10, 15, 20],
      [10, 0, 35, 25],
      [15, 35, 0, 30],
      [20, 25, 30, 0],
    ],
    tspStart: 1,
    hamiltonianMatrix: [
      [0, 1, 1, 0, 1],
      [1, 0, 1, 1, 1],
      [1, 1, 0, 1, 0],
      [0, 1, 1, 0, 1],
      [1, 1, 0, 1, 0],
    ],
  },
  branchBoundInputs: {
    items: [
      { weight: 10, value: 60 },
      { weight: 20, value: 100 },
      { weight: 30, value: 120 },
    ],
    capacity: 50,
    tspMatrix: [
      [0, 10, 15, 20],
      [10, 0, 35, 25],
      [15, 35, 0, 30],
      [20, 25, 30, 0],
    ],
    tspStart: 1,
  },
  backtrackingInputs: {
    nQueenSize: 4,
    subsetValues: [3, 34, 4, 12, 5, 2],
    subsetTarget: 9,
    hamiltonianMatrix: [
      [0, 1, 1, 0, 1],
      [1, 0, 1, 1, 1],
      [1, 1, 0, 1, 0],
      [0, 1, 1, 0, 1],
      [1, 1, 0, 1, 0],
    ],
    tspMatrix: [
      [0, 10, 15, 20],
      [10, 0, 35, 25],
      [15, 35, 0, 30],
      [20, 25, 30, 0],
    ],
    tspStart: 1,
  },
  recursionInputs: {
    hanoiDisks: 3,
    gcdA: 70,
    gcdB: 33,
    factorialN: 5,
    fibRecursiveN: 6,
    fibMemoN: 10,
  },
  customGraph: null,
  graphDirected: true,
  graphResult: null,
  graphEditor: {
    dragging: null,
    connecting: null,
    selectedNode: null,
    selectedEdge: null,
    fullscreen: false,
    zoom: 100,
    dragOffsetX: 0,
    dragOffsetY: 0,
  },
  timeline: {
    snapshots: [],
    index: 0,
  },
  lessonFlyoutOpen: false,
  selectedAlgorithms: {},
  baseData: null,
  runners: [],
};

const topics = [
  {
    id: "sorting",
    title: "Sorting",
    subtitle: "Compare sorting algorithms live",
    icon: "S",
    algorithms: ["bubbleSort", "selectionSort", "insertionSort", "mergeSort", "quickSort", "heapSort"],
  },
  {
    id: "graph",
    title: "Graphs",
    subtitle: "Shortest paths and networks",
    icon: "G",
    algorithms: ["bfs", "dfs", "dijkstra", "bellmanFord", "kruskal", "prim", "floydWarshall", "tspNearestNeighbor", "hamiltonianCycle", "hamiltonianBrute", "tspBacktracking", "tspBranchBound"],
  },
  {
    id: "trees",
    title: "Trees",
    subtitle: "Traversals, BST operations, and heaps",
    icon: "T",
    algorithms: ["preorderTraversal", "inorderTraversal", "postorderTraversal", "bstSearch", "bstInsert", "bstDelete", "heapifyTree", "heapInsert", "heapDelete"],
  },
  {
    id: "searches",
    title: "Searches",
    subtitle: "Find values with linear and sorted search strategies",
    icon: "Q",
    algorithms: ["linearSearch", "binarySearch"],
  },
  {
    id: "divide",
    title: "Divide & Conquer",
    subtitle: "Split, solve, and combine",
    icon: "D",
    algorithms: ["dcBinarySearch", "dcMinMax", "bigMultiply", "karatsuba", "strassen", "tournamentSchedule"],
  },
  {
    id: "dynamic",
    title: "Dynamic Programming",
    subtitle: "Tables, states, and optimal substructure",
    icon: "P",
    algorithms: ["matrixChainOrder", "knapsackDp", "knapsackMemo", "unboundedKnapsack", "lcs", "lis", "maxTreePathSum"],
  },
  {
    id: "greedy",
    title: "Greedy",
    subtitle: "Algorithms built around local choices",
    icon: "Y",
    algorithms: ["activityGreedy", "fractionalKnapsack", "jobSequencing", "huffmanCoding", "tspNearestNeighbor"],
  },
  {
    id: "compare",
    title: "Comparisons",
    subtitle: "Same problem, different methods",
    icon: "C",
    algorithms: ["activityGreedy", "activityBrute", "knapsackDp", "knapsackMemo", "unboundedKnapsack", "fractionalKnapsack", "knapsackBranchBound", "bfs", "dijkstra", "bellmanFord", "tspNearestNeighbor", "tspBacktracking", "tspBranchBound", "hamiltonianCycle", "hamiltonianBrute"],
  },
  {
    id: "backtracking",
    title: "Backtracking",
    subtitle: "Explore, reject, and undo choices",
    icon: "B",
    algorithms: ["nQueen", "subsetSum", "hamiltonianCycle", "tspBacktracking"],
  },
  {
    id: "branchBound",
    title: "Branch & Bound",
    subtitle: "Exact search with pruning bounds",
    icon: "B&B",
    algorithms: ["knapsackBranchBound", "tspBranchBound"],
  },
  {
    id: "recursion",
    title: "Recursion",
    subtitle: "Call trees and stack flow",
    icon: "R",
    algorithms: ["hanoi", "gcdRecursive", "factorialRecursive", "fibRecursive", "fibMemo"],
  },
  {
    id: "about",
    title: "About",
    subtitle: "Programmer profile",
    icon: "i",
    algorithms: [],
  },
];

const algorithmInfo = {
  bubbleSort: {
    title: "Bubble Sort",
    badge: "O(n^2)",
    type: "bars",
    complexity: { best: "O(n)", average: "O(n^2)", worst: "O(n^2)", space: "O(1)", stable: "Yes", inPlace: "Yes" },
  },
  selectionSort: {
    title: "Selection Sort",
    badge: "O(n^2)",
    type: "bars",
    complexity: { best: "O(n^2)", average: "O(n^2)", worst: "O(n^2)", space: "O(1)", stable: "No", inPlace: "Yes" },
  },
  insertionSort: {
    title: "Insertion Sort",
    badge: "O(n^2)",
    type: "bars",
    complexity: { best: "O(n)", average: "O(n^2)", worst: "O(n^2)", space: "O(1)", stable: "Yes", inPlace: "Yes" },
  },
  mergeSort: {
    title: "Merge Sort",
    badge: "O(n log n)",
    type: "bars",
    complexity: { best: "O(n log n)", average: "O(n log n)", worst: "O(n log n)", space: "O(n)", stable: "Yes", inPlace: "No" },
  },
  quickSort: {
    title: "Quick Sort",
    badge: "Average O(n log n)",
    type: "bars",
    complexity: { best: "O(n log n)", average: "O(n log n)", worst: "O(n^2)", space: "O(log n)", stable: "No", inPlace: "Yes" },
  },
  heapSort: {
    title: "Heap Sort",
    badge: "O(n log n)",
    type: "bars",
    complexity: { best: "O(n log n)", average: "O(n log n)", worst: "O(n log n)", space: "O(1)", stable: "No", inPlace: "Yes" },
  },
  dijkstra: {
    title: "Dijkstra",
    badge: "Non-negative weights",
    type: "graph",
    family: "shortestPath",
    complexity: { requirement: "Weighted graph without negative edges", time: "O(V^2 + E)", space: "O(V)", note: "Finalize nearest unfinished vertex" },
  },
  bellmanFord: {
    title: "Bellman-Ford",
    badge: "Edge relaxation",
    type: "graph",
    family: "shortestPath",
    complexity: { requirement: "Weighted graph, negative edges allowed", time: "O(VE)", space: "O(V)", note: "Relax all edges V - 1 times" },
  },
  bfs: {
    title: "BFS",
    badge: "Unweighted shortest path",
    type: "graph",
    family: "shortestPath",
    group: "traversal",
    complexity: { requirement: "Unweighted graph", time: "O(V + E)", space: "O(V)", note: "Explore by levels using a queue" },
  },
  dfs: { title: "DFS", badge: "Depth-first traversal", type: "graph", family: "traversal", group: "traversal" },
  kruskal: { title: "Kruskal MST", badge: "Minimum spanning tree", type: "graph", family: "mst" },
  prim: { title: "Prim MST", badge: "Vertex expansion", type: "graph", family: "mst" },
  floydWarshall: { title: "Floyd-Warshall", badge: "All-pairs shortest paths", type: "matrix", family: "allPairs" },
  preorderTraversal: { title: "Preorder Traversal", badge: "Root-left-right", type: "tree" },
  inorderTraversal: { title: "Inorder Traversal", badge: "Left-root-right", type: "tree" },
  postorderTraversal: { title: "Postorder Traversal", badge: "Left-right-root", type: "tree" },
  bstSearch: { title: "BST Search", badge: "O(h)", type: "tree" },
  bstInsert: { title: "BST Insert", badge: "O(h)", type: "tree" },
  bstDelete: { title: "BST Delete", badge: "O(h)", type: "tree" },
  heapifyTree: { title: "Heapify", badge: "O(n)", type: "tree" },
  heapInsert: { title: "Heap Insert", badge: "O(log n)", type: "tree" },
  heapDelete: { title: "Heap Delete Max", badge: "O(log n)", type: "tree" },
  linearSearch: {
    title: "Linear Search",
    badge: "O(n)",
    type: "bars",
    complexity: { requirement: "Any array", best: "O(1)", average: "O(n)", worst: "O(n)", space: "O(1)" },
  },
  binarySearch: {
    title: "Binary Search",
    badge: "O(log n)",
    type: "bars",
    complexity: { requirement: "Sorted array", best: "O(1)", average: "O(log n)", worst: "O(log n)", space: "O(1)" },
  },
  dcBinarySearch: {
    title: "Binary Search",
    badge: "Divide & conquer",
    type: "bars",
    complexity: { requirement: "Sorted copy", time: "O(log n)", space: "O(1)", note: "Halves the search range each step" },
  },
  dcMinMax: {
    title: "Min / Max",
    badge: "3n/2 comparisons",
    type: "tree",
    complexity: { requirement: "Array", time: "O(n)", space: "O(log n)", note: "Pairs results from left and right halves" },
  },
  bigMultiply: {
    title: "Big Integer Multiply",
    badge: "Grade-school",
    type: "tree",
    complexity: { requirement: "Decimal integers", time: "O(n^2)", space: "O(n)", note: "One partial product per digit" },
  },
  karatsuba: {
    title: "Karatsuba Multiply",
    badge: "O(n^1.585)",
    type: "tree",
    complexity: { requirement: "Decimal integers", time: "O(n^1.585)", space: "O(n)", note: "Uses 3 recursive multiplications" },
  },
  strassen: {
    title: "Strassen 2x2",
    badge: "7 multiplications",
    type: "matrix",
    complexity: { requirement: "2x2 matrices", time: "O(n^2.807)", space: "O(n^2)", note: "Shows the classic seven products" },
  },
  tournamentSchedule: {
    title: "Tournament Scheduling",
    badge: "Round robin",
    type: "matrix",
    complexity: { requirement: "2-16 teams", time: "O(n^2 log n)", space: "O(n^2)", note: "Educational divide-and-conquer plan with validated fallback" },
  },
  matrixChainOrder: {
    title: "Matrix Chain Order",
    badge: "O(n^3)",
    type: "matrix",
    complexity: { requirement: "Matrix dimensions", time: "O(n^3)", space: "O(n^2)", note: "Stores best split cost for each interval" },
  },
  knapsackDp: {
    title: "0/1 Knapsack Bottom-up",
    badge: "O(nW)",
    type: "matrix",
    complexity: { requirement: "Weights, values, capacity", time: "O(nW)", space: "O(nW)", note: "Each item is used at most once" },
  },
  knapsackMemo: {
    title: "0/1 Knapsack Memoized",
    badge: "O(nW)",
    type: "matrix",
    complexity: { requirement: "Weights, values, capacity", time: "O(nW)", space: "O(nW)", note: "Top-down states are cached" },
  },
  unboundedKnapsack: {
    title: "Unbounded Knapsack",
    badge: "O(nW)",
    type: "matrix",
    complexity: { requirement: "Weights, values, capacity", time: "O(nW)", space: "O(nW)", note: "An item can be reused" },
  },
  lcs: {
    title: "Longest Common Subsequence",
    badge: "O(mn)",
    type: "matrix",
    complexity: { requirement: "Two strings", time: "O(mn)", space: "O(mn)", note: "Reconstructs the common subsequence" },
  },
  lis: {
    title: "Longest Increasing Subsequence",
    badge: "O(n^2)",
    type: "matrix",
    complexity: { requirement: "Number sequence", time: "O(n^2)", space: "O(n)", note: "Stores previous index for reconstruction" },
  },
  maxTreePathSum: {
    title: "Maximum Tree Path Sum",
    badge: "O(n)",
    type: "tree",
    complexity: { requirement: "Level-order tree values", time: "O(n)", space: "O(h)", note: "DP gain from each subtree" },
  },
  activityGreedy: {
    title: "Activity Selection",
    badge: "O(n log n)",
    type: "timeline",
    complexity: { requirement: "Activity intervals", time: "O(n log n)", space: "O(n)", note: "Pick earliest finishing compatible activity" },
  },
  activityBrute: {
    title: "Activity Exhaustive Check",
    badge: "O(2^n)",
    type: "timeline",
    complexity: { requirement: "Activity intervals", time: "O(2^n)", space: "O(n)", note: "Tries all subsets; comparison only, not greedy" },
  },
  fractionalKnapsack: {
    title: "Fractional Knapsack",
    badge: "O(n log n)",
    type: "matrix",
    complexity: { requirement: "Weights, values, capacity", time: "O(n log n)", space: "O(n)", note: "Sorts by value/weight ratio" },
  },
  knapsackBranchBound: {
    title: "0/1 Knapsack Branch & Bound",
    badge: "Pruned exact search",
    type: "matrix",
    complexity: { requirement: "Weights, values, capacity", time: "O(2^n) worst", space: "O(2^n)", note: "Use fractional upper bound to prune states" },
  },
  jobSequencing: {
    title: "Job Sequencing",
    badge: "O(nD)",
    type: "matrix",
    complexity: { requirement: "Jobs with deadlines/profits", time: "O(nD)", space: "O(D)", note: "Place each job in latest free slot" },
  },
  huffmanCoding: {
    title: "Huffman Coding",
    badge: "O(n log n)",
    type: "matrix",
    complexity: { requirement: "Symbol frequencies", time: "O(n log n)", space: "O(n)", note: "Repeatedly merge two smallest frequencies" },
  },
  tspNearestNeighbor: {
    title: "TSP Nearest Neighbor",
    badge: "Greedy heuristic",
    type: "matrix",
    family: "cycles",
    complexity: { requirement: "Distance matrix", time: "O(n^2)", space: "O(n)", note: "Move to nearest unvisited city" },
  },
  hanoi: { title: "Tower of Hanoi", badge: "O(2^n)", type: "hanoi" },
  nQueen: {
    title: "N-Queen",
    badge: "Backtracking",
    type: "backtrack",
    complexity: { requirement: "Board size n", time: "O(n!)", space: "O(n)", note: "Place one queen per row and reject unsafe columns" },
  },
  subsetSum: {
    title: "Subset Sum",
    badge: "O(2^n)",
    type: "backtrack",
    complexity: { requirement: "Values and target", time: "O(2^n)", space: "O(n)", note: "Branch on include/exclude for each value" },
  },
  hamiltonianCycle: {
    title: "Hamiltonian Cycle",
    badge: "O(n!)",
    type: "backtrack",
    family: "cycles",
    complexity: { requirement: "0/1 adjacency matrix", time: "O(n!)", space: "O(n)", note: "Try each unused vertex and backtrack on dead ends" },
  },
  tspBacktracking: {
    title: "TSP Backtracking",
    badge: "Exact search",
    type: "backtrack",
    family: "cycles",
    complexity: { requirement: "Distance matrix", time: "O(n!)", space: "O(n)", note: "Enumerates tours and keeps the lowest cost" },
  },
  tspBranchBound: {
    title: "TSP Branch & Bound",
    badge: "Exact with pruning",
    type: "backtrack",
    family: "cycles",
    complexity: { requirement: "Distance matrix", time: "O(n!) worst", space: "O(n)", note: "Prune tours whose lower bound cannot beat best" },
  },
  hamiltonianBrute: {
    title: "Hamiltonian Brute Force",
    badge: "Permutation check",
    type: "backtrack",
    family: "cycles",
    complexity: { requirement: "0/1 adjacency matrix", time: "O(n!)", space: "O(n)", note: "Try vertex permutations until a cycle is found" },
  },
  gcdRecursive: { title: "Recursive GCD", badge: "O(log n)", type: "tree" },
  factorialRecursive: { title: "Recursive Factorial", badge: "O(n)", type: "tree" },
  fibRecursive: { title: "Recursive Fibonacci", badge: "Exponential", type: "tree" },
  fibMemo: { title: "Memoized Fibonacci", badge: "O(n)", type: "tree" },
};

const algorithmLessonContent = {
  bubbleSort: {
    idea: "Repeatedly compare adjacent items and swap them when they are in the wrong order.",
    steps: [
      "Scan the array from left to right.",
      "Compare each pair of neighbors.",
      "Swap the pair if the left value is greater than the right value.",
      "After each full pass, the largest unsorted value reaches its final position.",
    ],
    use: "Useful for teaching comparisons and swaps. It is simple, stable, and in-place, but too slow for large arrays.",
  },
  selectionSort: {
    idea: "Repeatedly select the smallest value from the unsorted part and move it to the front.",
    steps: [
      "Start at the first unsorted position.",
      "Find the minimum value in the remaining array.",
      "Swap that minimum value into the current position.",
      "Move the boundary between sorted and unsorted values one step to the right.",
    ],
    use: "Good when the number of writes should stay small. It is in-place, but it is not stable and always takes quadratic time.",
  },
  insertionSort: {
    idea: "Build a sorted prefix by inserting each new value into its correct place.",
    steps: [
      "Treat the first value as already sorted.",
      "Take the next value as the key.",
      "Shift larger sorted values one position to the right.",
      "Place the key in the opened position.",
    ],
    use: "Excellent for small or nearly sorted arrays. It is stable, in-place, and can run in linear time when the input is already sorted.",
  },
  mergeSort: {
    idea: "Divide the array into halves, sort each half, then merge the sorted halves.",
    steps: [
      "Split the array into two smaller arrays.",
      "Recursively sort the left and right halves.",
      "Compare the heads of both halves.",
      "Copy the smaller value into the output until both halves are merged.",
    ],
    use: "Reliable for large data because its time complexity stays O(n log n). It is stable, but it needs extra memory for merging.",
  },
  quickSort: {
    idea: "Choose a pivot, partition values around it, then recursively sort both sides.",
    steps: [
      "Pick a pivot value.",
      "Move smaller values before the pivot and larger values after it.",
      "The pivot reaches its final sorted position.",
      "Repeat the same process for the left and right partitions.",
    ],
    use: "Very fast in practice and in-place on average. Its worst case is quadratic when pivots split the array badly.",
  },
  heapSort: {
    idea: "Turn the array into a heap, then repeatedly move the maximum value to the end.",
    steps: [
      "Build a max heap from the array.",
      "Swap the root with the last unsorted value.",
      "Shrink the heap size by one.",
      "Restore the heap property and repeat until sorted.",
    ],
    use: "Useful when guaranteed O(n log n) time and O(1) extra space are important. It is in-place, but not stable.",
  },
  bfs: {
    idea: "Explores a graph level by level from the start vertex.",
    use: "Best for unweighted shortest paths, reachability, and finding vertices by distance from the source.",
  },
  dfs: {
    idea: "Explores as deep as possible along one branch before backtracking.",
    use: "Useful for traversal, connected components, cycle checks, and backtracking-style graph exploration.",
  },
  dijkstra: {
    idea: "Finds the shortest path from one source to other vertices when all edge weights are non-negative.",
    use: "Use it for routing and weighted graphs without negative edges.",
  },
  bellmanFord: {
    idea: "Finds single-source shortest paths by repeatedly relaxing every edge.",
    use: "Works with negative edge weights and can detect a negative-weight cycle.",
  },
  kruskal: {
    idea: "Builds a minimum spanning tree by adding the cheapest safe edge each time.",
    use: "Useful when the graph is edge-focused or sparse. It does not find shortest paths.",
  },
  prim: {
    idea: "Builds a minimum spanning tree by growing one connected tree from a start vertex.",
    use: "Useful for connecting all vertices with minimum total cost. It does not find shortest paths.",
  },
  floydWarshall: {
    idea: "Computes the shortest distance between every pair of vertices.",
    use: "Best for small to medium dense graphs when all-pairs distances are needed.",
  },
  preorderTraversal: {
    idea: "Visits the root first, then the left subtree, then the right subtree.",
    use: "Often used to copy or serialize a tree structure.",
  },
  inorderTraversal: {
    idea: "Visits the left subtree, then the root, then the right subtree.",
    use: "In a binary search tree, it returns values in sorted order.",
  },
  postorderTraversal: {
    idea: "Visits the left subtree, then the right subtree, then the root.",
    use: "Useful when child nodes must be processed before their parent.",
  },
  bstSearch: {
    idea: "Searches a binary search tree by choosing left or right based on the target value.",
    use: "Fast when the tree is balanced; slow when the tree becomes skewed.",
  },
  bstInsert: {
    idea: "Adds a new value to the correct position while preserving the binary search tree property.",
    use: "Demonstrates how ordered tree structures grow dynamically.",
  },
  bstDelete: {
    idea: "Removes a value from a BST while preserving the search-tree order.",
    use: "Shows the three deletion cases: leaf, one child, and two children.",
  },
  heapifyTree: {
    idea: "Rearranges values so every parent satisfies the heap property.",
    use: "Used before heap sort or priority queue operations.",
  },
  heapInsert: {
    idea: "Adds a value to a heap and bubbles it up until the heap property is restored.",
    use: "Core operation in priority queues.",
  },
  heapDelete: {
    idea: "Removes the maximum value from a max heap and restores the heap property.",
    use: "Used when repeatedly extracting highest-priority items.",
  },
  linearSearch: {
    idea: "Checks values one by one until the target is found or the array ends.",
    use: "Works on any array and is simplest when data is unsorted.",
  },
  binarySearch: {
    idea: "Repeatedly halves a sorted array to find a target value.",
    use: "Very efficient, but the input must be sorted.",
  },
  dcBinarySearch: {
    idea: "Solves search by splitting the possible range in half at each step.",
    use: "A classic divide and conquer example with logarithmic time.",
  },
  dcMinMax: {
    idea: "Finds minimum and maximum by dividing the array and combining each half's result.",
    use: "Reduces comparisons compared with checking min and max separately.",
  },
  bigMultiply: {
    idea: "Multiplies large integers using the classic digit-by-digit method.",
    use: "Good baseline for comparing with faster multiplication methods.",
  },
  karatsuba: {
    idea: "Multiplies large numbers by splitting them and using three recursive multiplications.",
    use: "Faster than grade-school multiplication for large inputs.",
  },
  strassen: {
    idea: "Multiplies matrices using fewer recursive multiplications than the standard method.",
    use: "Introduces faster matrix multiplication through divide and conquer.",
  },
  tournamentSchedule: {
    idea: "Creates a round-robin schedule where teams are paired across days.",
    use: "Shows how divide and conquer can fill a structured schedule matrix.",
  },
  matrixChainOrder: {
    idea: "Finds the cheapest order for multiplying a chain of matrices.",
    use: "Minimizes scalar multiplications without changing the final mathematical result.",
  },
  knapsackDp: {
    idea: "Builds a table to choose the best 0/1 item set within a capacity.",
    use: "Gives the exact optimal answer when each item can be used once.",
  },
  knapsackMemo: {
    idea: "Solves 0/1 knapsack top-down and stores repeated subproblem answers.",
    use: "Shows recursion plus caching for dynamic programming.",
  },
  knapsackBranchBound: {
    idea: "Solves 0/1 knapsack exactly by exploring choices while pruning branches that cannot improve the best answer.",
    use: "Useful for comparing exact search with DP and greedy bounds.",
  },
  unboundedKnapsack: {
    idea: "Solves knapsack when each item can be used multiple times.",
    use: "Useful when choices can repeat, such as coin/change-like variants.",
  },
  lcs: {
    idea: "Finds the longest sequence that appears in both strings in the same order.",
    use: "Useful for text comparison, diff tools, and sequence similarity.",
  },
  lis: {
    idea: "Finds the longest increasing subsequence inside a number sequence.",
    use: "Demonstrates DP with reconstruction of the selected answer.",
  },
  maxTreePathSum: {
    idea: "Finds the highest-sum path inside a binary tree.",
    use: "Uses subtree gains to decide which branches improve the final path.",
  },
  activityGreedy: {
    idea: "Selects the maximum number of compatible activities by choosing earliest finishing activities.",
    use: "A standard greedy problem where the local choice is provably optimal.",
  },
  activityBrute: {
    idea: "Checks all possible activity subsets and keeps the largest compatible set.",
    use: "Useful for comparison against the greedy method, but grows exponentially.",
  },
  fractionalKnapsack: {
    idea: "Chooses items by value-to-weight ratio and can take fractions of an item.",
    use: "Greedy is optimal only because fractional items are allowed.",
  },
  jobSequencing: {
    idea: "Schedules profitable jobs before their deadlines to maximize total profit.",
    use: "A greedy scheduling example based on profit and available slots.",
  },
  huffmanCoding: {
    idea: "Builds a prefix code by repeatedly merging the two least frequent symbols.",
    use: "Used to teach greedy compression and optimal prefix codes.",
  },
  tspNearestNeighbor: {
    idea: "Builds a TSP tour by always going to the nearest unvisited city.",
    use: "Fast heuristic, but it does not guarantee the optimal tour.",
  },
  hanoi: {
    idea: "Moves disks between pegs by solving the smaller tower first.",
    use: "Classic recursion example with exponential growth.",
  },
  gcdRecursive: {
    idea: "Computes the greatest common divisor using Euclid's recursive rule.",
    use: "Shows how a problem shrinks quickly through remainders.",
  },
  factorialRecursive: {
    idea: "Computes n! by multiplying n by the factorial of n - 1.",
    use: "Simple example for base case and recursive step.",
  },
  fibRecursive: {
    idea: "Computes Fibonacci by recursively expanding into two smaller Fibonacci calls.",
    use: "Good for showing repeated work and why naive recursion can be slow.",
  },
  fibMemo: {
    idea: "Computes Fibonacci recursively while storing already solved values.",
    use: "Shows how memoization turns repeated recursion into linear work.",
  },
  nQueen: {
    idea: "Places queens row by row and rejects positions that attack each other.",
    use: "A classic backtracking problem for constraint checking.",
  },
  subsetSum: {
    idea: "Searches for a subset of numbers whose sum equals the target.",
    use: "Demonstrates include/exclude branching and pruning.",
  },
  hamiltonianCycle: {
    idea: "Searches for a cycle that visits every vertex exactly once and returns to the start.",
    use: "A hard graph backtracking problem; useful for showing exhaustive search.",
  },
  tspBacktracking: {
    idea: "Enumerates possible tours and keeps the minimum-cost complete tour.",
    use: "Exact TSP solving for small graphs; too expensive for large inputs.",
  },
  tspBranchBound: {
    idea: "Searches TSP tours exactly, but cuts off partial tours whose lower bound is already worse than the best known tour.",
    use: "Shows how bounds reduce exhaustive search while still preserving exactness.",
  },
  hamiltonianBrute: {
    idea: "Checks vertex permutations until it finds one that forms a Hamiltonian cycle.",
    use: "Useful as a baseline for comparing with smarter backtracking.",
  },
};

const algorithmLessonDetails = {
  bubbleSort: "Bubble Sort works by gradually pushing larger values toward the end of the array, like bubbles rising to the top. Each pass reduces the unsorted part because the largest remaining value becomes fixed, so the visualization should be read as repeated local comparisons that slowly create a sorted suffix.",
  selectionSort: "Selection Sort separates the array into a sorted left part and an unsorted right part. Instead of swapping many adjacent values, it searches the unsorted region for the minimum value and performs one final swap for that position, which makes the number of writes predictable but keeps comparisons high.",
  insertionSort: "Insertion Sort behaves like sorting cards in your hand: every new item is inserted into the already sorted part. It is especially efficient when the input is nearly sorted because only a few shifts are needed before each item reaches its correct position.",
  mergeSort: "Merge Sort is based on the divide and conquer idea: split the problem until each part is trivially sorted, then combine the answers. The important work happens during merging, where two sorted halves are scanned from left to right and copied into a new sorted sequence.",
  quickSort: "Quick Sort organizes the array around a pivot value. After partitioning, every value on the left side is smaller than the pivot and every value on the right side is larger, so the pivot is already in its final position and the same logic can be applied recursively to both sides.",
  heapSort: "Heap Sort first converts the array into a max heap, where the largest value is always at the root. It repeatedly swaps that root with the last unsorted position, shrinks the heap, and restores the heap property, producing a sorted array from the end backward.",
  bfs: "Breadth-First Search uses a queue to remember which vertices should be visited next. Because it explores all vertices at distance 1 before distance 2, then distance 3, it naturally finds the shortest path in an unweighted graph.",
  dfs: "Depth-First Search uses a stack-like behavior, either explicitly or through recursion. It follows one path as far as possible, then returns to the last unfinished vertex, which makes it useful for discovering graph structure and detecting dead ends.",
  dijkstra: "Dijkstra's algorithm keeps the best known distance from the source to every vertex and repeatedly finalizes the closest unfinished vertex. Once a vertex is finalized, its distance is guaranteed to be optimal, but this guarantee only holds when edge weights are not negative.",
  bellmanFord: "Bellman-Ford relaxes all edges repeatedly, allowing distance improvements to travel across paths one edge at a time. After at most V - 1 rounds every shortest path without a cycle has been considered, and one extra round reveals whether a negative cycle exists.",
  kruskal: "Kruskal's algorithm sorts all edges by weight and adds them one by one if they do not create a cycle. The key idea is that a minimum spanning tree is built from safe edges, so the algorithm needs a cycle-checking structure such as union-find.",
  prim: "Prim's algorithm grows one tree instead of sorting the whole edge list first. At every step it chooses the cheapest edge that connects the current tree to a new vertex, so the tree expands outward until every vertex is included.",
  floydWarshall: "Floyd-Warshall treats every vertex as a possible intermediate point between two other vertices. The distance matrix is updated again and again: if going from i to j through k is cheaper than the current route, the algorithm replaces the old distance.",
  preorderTraversal: "Preorder traversal processes a node before its children. This makes the root of every subtree appear before the subtree content, which is helpful when the structure itself must be saved or rebuilt later.",
  inorderTraversal: "Inorder traversal processes the left side, then the node, then the right side. In a binary search tree this matches the natural ordering of values, so the traversal becomes a simple way to read the tree as a sorted list.",
  postorderTraversal: "Postorder traversal waits until both children are processed before visiting the parent. This is useful for delete, cleanup, expression evaluation, and any situation where a parent depends on results from its subtrees.",
  bstSearch: "BST Search compares the target with the current node and discards half of the remaining tree directionally. If the target is smaller it moves left; if larger it moves right, so the quality of the tree shape directly affects performance.",
  bstInsert: "BST Insert follows the same left-or-right decisions as search until it reaches an empty child position. The new value is placed there, preserving the BST ordering rule without rearranging the rest of the tree.",
  bstDelete: "BST Delete must preserve the tree order after removal. The easiest cases are leaf and one-child nodes; for a node with two children, the algorithm usually replaces it with its inorder successor or predecessor.",
  heapifyTree: "Heapify transforms an unordered array into a valid heap by fixing parent-child relationships from the bottom upward. Starting from the last internal node is efficient because leaves already satisfy the heap rule.",
  heapInsert: "Heap Insert places the new value at the end of the heap to preserve the complete-tree shape. Then it compares the value with its parent and swaps upward until the heap property becomes true again.",
  heapDelete: "Heap Delete Max removes the root, because the root stores the maximum value in a max heap. The last value is moved to the root and pushed downward until both children are smaller, restoring the heap structure.",
  linearSearch: "Linear Search does not assume anything about the data. It simply checks each element in order, so it is easy to understand and always works, but it may need to inspect every value.",
  binarySearch: "Binary Search depends on sorted data. By comparing the target with the middle element, it can discard the left or right half immediately, making the search range shrink very quickly.",
  dcBinarySearch: "As a divide and conquer algorithm, binary search divides the search space into two parts but only continues into one of them. This is why its recursion tree has only one active branch at each level.",
  dcMinMax: "The divide and conquer min/max method asks each half for its minimum and maximum, then combines those two answers. The combine step is small, but the split structure helps explain how larger array problems can be reduced to smaller ones.",
  bigMultiply: "Grade-school multiplication breaks a large number multiplication into digit multiplications and shifted partial products. The visualization should show that the final answer is built by accumulating many small products.",
  karatsuba: "Karatsuba improves multiplication by reducing four recursive multiplications to three. It uses algebra to compute the middle term indirectly, which lowers the asymptotic cost for very large numbers.",
  strassen: "Strassen's method reduces the number of recursive matrix multiplications from eight to seven. The tradeoff is that it performs more additions and subtractions, so it is mainly valuable for larger matrices.",
  tournamentSchedule: "Tournament scheduling fills a match table so each team plays the correct opponents across days. The divide and conquer pattern builds smaller valid schedules and combines them into a larger structured schedule.",
  matrixChainOrder: "Matrix Chain Order does not multiply the matrices; it decides where parentheses should go. Different parenthesizations produce the same final matrix but can require very different numbers of scalar multiplications.",
  knapsackDp: "0/1 Knapsack DP creates states based on item index and remaining capacity. Each state decides between skipping the item or taking it once, and the table stores the best value found for that exact subproblem.",
  knapsackMemo: "Memoized Knapsack solves the same states as the bottom-up table, but it starts from the final question and recursively asks smaller questions only when needed. Cached answers prevent the recursion tree from recomputing identical subproblems.",
  knapsackBranchBound: "Knapsack Branch and Bound builds a decision tree where each level decides whether to take or skip an item. Before expanding a node, it estimates the best possible value reachable from that node using a fractional bound; if that estimate is not better than the current best solution, the branch is discarded.",
  unboundedKnapsack: "Unbounded Knapsack changes the decision rule because an item can be used again after it is chosen. This makes the transition different from 0/1 knapsack and allows repeated use of high-value items.",
  lcs: "LCS compares two strings through a grid of prefixes. When characters match, the answer extends diagonally; when they differ, the algorithm keeps the better result from removing one character from either string.",
  lis: "LIS looks for an increasing order, not necessarily adjacent values. The DP version stores the best subsequence ending at each position and uses previous smaller values to extend the current answer.",
  maxTreePathSum: "Maximum Tree Path Sum computes the best gain each subtree can contribute upward. At every node, the algorithm also checks whether joining left gain, node value, and right gain creates a better complete path.",
  activityGreedy: "Activity Selection works because choosing the activity that finishes earliest leaves the most room for future activities. The algorithm sorts by finish time and accepts the next activity only when it starts after the last chosen one ends.",
  activityBrute: "The exhaustive activity method tries every subset and checks whether the chosen activities are compatible. It is useful as a correctness comparison because it can find the optimal answer, but its exponential growth makes it impractical for large inputs.",
  fractionalKnapsack: "Fractional Knapsack ranks items by value per unit weight. Since fractions are allowed, taking the best ratio first is safe: even if the last item does not fully fit, the algorithm can take only the useful fraction.",
  jobSequencing: "Job Sequencing chooses high-profit jobs first and places each one as late as possible before its deadline. Scheduling late preserves earlier slots for jobs with tighter deadlines.",
  huffmanCoding: "Huffman Coding gives shorter codes to more frequent symbols. By repeatedly merging the two least frequent nodes, it builds a binary tree where common symbols end up closer to the root.",
  tspNearestNeighbor: "Nearest Neighbor for TSP makes a quick local decision at each city: visit the closest unvisited city next. It is easy to visualize and fast to run, but local choices can block a globally better tour.",
  hanoi: "Tower of Hanoi is solved by moving n - 1 disks out of the way, moving the largest disk, then moving the smaller tower onto it. The same pattern repeats recursively, which is why the number of moves doubles quickly.",
  gcdRecursive: "Recursive GCD uses the fact that gcd(a, b) is the same as gcd(b, a mod b). Each call replaces the problem with a smaller one until the remainder becomes zero.",
  factorialRecursive: "Recursive Factorial reduces n! to n times (n - 1)!. The base case is essential: once n reaches 0 or 1, the recursion stops and the multiplications return back up the call stack.",
  fibRecursive: "Naive Fibonacci branches into fib(n - 1) and fib(n - 2). This creates many repeated calls, so it is a good visual example of why recursion without caching can become expensive.",
  fibMemo: "Memoized Fibonacci keeps the recursive definition but remembers answers that were already computed. When the same value is requested again, the algorithm reads it from memory instead of expanding another call tree.",
  nQueen: "N-Queen places one queen per row and checks whether the new queen conflicts with earlier queens by column or diagonal. When a row has no legal placement, the algorithm backtracks and changes a previous decision.",
  subsetSum: "Subset Sum explores a decision tree where each number is either included or excluded. The algorithm succeeds when the selected values reach the target, and it can prune branches that can no longer lead to a valid answer.",
  hamiltonianCycle: "Hamiltonian Cycle builds a path by choosing an unused neighboring vertex at each step. A solution is accepted only if every vertex is visited exactly once and the last vertex connects back to the start.",
  tspBacktracking: "TSP Backtracking enumerates possible city orders while tracking the cost of the current partial route. Whenever a complete tour returns to the start, the algorithm compares its cost with the best tour found so far.",
  tspBranchBound: "TSP Branch and Bound also explores tours, but it attaches a lower-bound estimate to each partial path. If the current cost plus the cheapest possible remaining edges cannot beat the best complete tour, that branch is rejected before all permutations are generated.",
  hamiltonianBrute: "Hamiltonian Brute Force treats the problem as a permutation check. It fixes a start vertex, tries every possible order of the remaining vertices, and accepts the first order where every consecutive pair and the return edge exist.",
};

const algorithmFamilies = {
  traversal: {
    title: "Traversal",
    description: "Explore vertices and edges",
  },
  shortestPath: {
    title: "Shortest Path",
    description: "Find a route from start to target",
  },
  mst: {
    title: "Minimum Spanning Tree",
    description: "Connect all vertices with minimum total edge cost",
  },
  allPairs: {
    title: "All-Pairs",
    description: "Compare distances between every pair of vertices",
  },
  cycles: {
    title: "Cycles & Tours",
    description: "Search graph cycles and exact tours",
  },
};

const els = {
  categoryList: document.querySelector("#categoryList"),
  topicLabel: document.querySelector("#topicLabel"),
  topicTitle: document.querySelector("#topicTitle"),
  visualGrid: document.querySelector("#visualGrid"),
  metricsBand: document.querySelector("#metricsBand"),
  algorithmPanel: document.querySelector("#algorithmPanel"),
  comparisonPanel: document.querySelector("#comparisonPanel"),
  controlStrip: document.querySelector("#controlStrip"),
  aboutPanel: document.querySelector("#aboutPanel"),
  sortingPanel: document.querySelector("#sortingPanel"),
  recursionPanel: document.querySelector("#recursionPanel"),
  treePanel: document.querySelector("#treePanel"),
  searchPanel: document.querySelector("#searchPanel"),
  dividePanel: document.querySelector("#dividePanel"),
  dynamicPanel: document.querySelector("#dynamicPanel"),
  greedyPanel: document.querySelector("#greedyPanel"),
  comparePanel: document.querySelector("#comparePanel"),
  backtrackingPanel: document.querySelector("#backtrackingPanel"),
  branchBoundPanel: document.querySelector("#branchBoundPanel"),
  graphPanel: document.querySelector("#graphPanel"),
  graphEditorCanvas: document.querySelector("#graphEditorCanvas"),
  speedField: document.querySelector("#speedField"),
  sizeField: document.querySelector("#sizeField"),
  sizeLabel: document.querySelector("#sizeLabel"),
  datasetField: document.querySelector("#datasetField"),
  syncField: document.querySelector("#syncField"),
  graphSourceSelect: document.querySelector("#graphSourceSelect"),
  graphTargetSelect: document.querySelector("#graphTargetSelect"),
  graphDirectionSelect: document.querySelector("#graphDirectionSelect"),
  graphSampleButton: document.querySelector("#graphSampleButton"),
  graphRandomButton: document.querySelector("#graphRandomButton"),
  graphAddNodeButton: document.querySelector("#graphAddNodeButton"),
  graphDeleteButton: document.querySelector("#graphDeleteButton"),
  graphClearButton: document.querySelector("#graphClearButton"),
  graphFullscreenButton: document.querySelector("#graphFullscreenButton"),
  graphZoomInput: document.querySelector("#graphZoomInput"),
  graphApplyButton: document.querySelector("#graphApplyButton"),
  graphStatus: document.querySelector("#graphStatus"),
  customArrayInput: document.querySelector("#customArrayInput"),
  applyArrayButton: document.querySelector("#applyArrayButton"),
  sampleArrayButton: document.querySelector("#sampleArrayButton"),
  arrayHint: document.querySelector("#arrayHint"),
  theoryButton: document.querySelector("#theoryButton"),
  lessonBackdrop: document.querySelector("#lessonBackdrop"),
  lessonFlyout: document.querySelector("#lessonFlyout"),
  lessonCloseButton: document.querySelector("#lessonCloseButton"),
  lessonFlyoutTitle: document.querySelector("#lessonFlyoutTitle"),
  lessonAlgorithmSelect: document.querySelector("#lessonAlgorithmSelect"),
  lessonContent: document.querySelector("#lessonContent"),
  treeValuesInput: document.querySelector("#treeValuesInput"),
  treeSearchInput: document.querySelector("#treeSearchInput"),
  treeInsertInput: document.querySelector("#treeInsertInput"),
  treeDeleteInput: document.querySelector("#treeDeleteInput"),
  applyTreeButton: document.querySelector("#applyTreeButton"),
  sampleTreeButton: document.querySelector("#sampleTreeButton"),
  treeHint: document.querySelector("#treeHint"),
  searchArrayInput: document.querySelector("#searchArrayInput"),
  searchTargetInput: document.querySelector("#searchTargetInput"),
  applySearchButton: document.querySelector("#applySearchButton"),
  sampleSearchButton: document.querySelector("#sampleSearchButton"),
  searchHint: document.querySelector("#searchHint"),
  divideArrayInput: document.querySelector("#divideArrayInput"),
  divideTargetInput: document.querySelector("#divideTargetInput"),
  bigAInput: document.querySelector("#bigAInput"),
  bigBInput: document.querySelector("#bigBInput"),
  matrixAInput: document.querySelector("#matrixAInput"),
  matrixBInput: document.querySelector("#matrixBInput"),
  teamsInput: document.querySelector("#teamsInput"),
  applyDivideButton: document.querySelector("#applyDivideButton"),
  sampleDivideButton: document.querySelector("#sampleDivideButton"),
  divideHint: document.querySelector("#divideHint"),
  matrixChainInput: document.querySelector("#matrixChainInput"),
  knapsackItemsInput: document.querySelector("#knapsackItemsInput"),
  knapsackCapacityInput: document.querySelector("#knapsackCapacityInput"),
  lcsAInput: document.querySelector("#lcsAInput"),
  lcsBInput: document.querySelector("#lcsBInput"),
  lisInput: document.querySelector("#lisInput"),
  maxPathTreeInput: document.querySelector("#maxPathTreeInput"),
  applyDynamicButton: document.querySelector("#applyDynamicButton"),
  sampleDynamicButton: document.querySelector("#sampleDynamicButton"),
  dynamicHint: document.querySelector("#dynamicHint"),
  greedyActivitiesInput: document.querySelector("#greedyActivitiesInput"),
  greedyItemsInput: document.querySelector("#greedyItemsInput"),
  greedyCapacityInput: document.querySelector("#greedyCapacityInput"),
  greedyJobsInput: document.querySelector("#greedyJobsInput"),
  huffmanInput: document.querySelector("#huffmanInput"),
  tspMatrixInput: document.querySelector("#tspMatrixInput"),
  tspStartInput: document.querySelector("#tspStartInput"),
  applyGreedyButton: document.querySelector("#applyGreedyButton"),
  sampleGreedyButton: document.querySelector("#sampleGreedyButton"),
  greedyHint: document.querySelector("#greedyHint"),
  compareActivitiesInput: document.querySelector("#compareActivitiesInput"),
  compareItemsInput: document.querySelector("#compareItemsInput"),
  compareCapacityInput: document.querySelector("#compareCapacityInput"),
  compareGraphMatrixInput: document.querySelector("#compareGraphMatrixInput"),
  compareGraphSourceInput: document.querySelector("#compareGraphSourceInput"),
  compareGraphTargetInput: document.querySelector("#compareGraphTargetInput"),
  compareTspMatrixInput: document.querySelector("#compareTspMatrixInput"),
  compareTspStartInput: document.querySelector("#compareTspStartInput"),
  compareHamiltonianMatrixInput: document.querySelector("#compareHamiltonianMatrixInput"),
  applyCompareButton: document.querySelector("#applyCompareButton"),
  sampleCompareButton: document.querySelector("#sampleCompareButton"),
  compareHint: document.querySelector("#compareHint"),
  nQueenSizeInput: document.querySelector("#nQueenSizeInput"),
  subsetValuesInput: document.querySelector("#subsetValuesInput"),
  subsetTargetInput: document.querySelector("#subsetTargetInput"),
  hamiltonianMatrixInput: document.querySelector("#hamiltonianMatrixInput"),
  tspBacktrackingMatrixInput: document.querySelector("#tspBacktrackingMatrixInput"),
  tspBacktrackingStartInput: document.querySelector("#tspBacktrackingStartInput"),
  applyBacktrackingButton: document.querySelector("#applyBacktrackingButton"),
  sampleBacktrackingButton: document.querySelector("#sampleBacktrackingButton"),
  backtrackingHint: document.querySelector("#backtrackingHint"),
  branchBoundItemsInput: document.querySelector("#branchBoundItemsInput"),
  branchBoundCapacityInput: document.querySelector("#branchBoundCapacityInput"),
  branchBoundTspMatrixInput: document.querySelector("#branchBoundTspMatrixInput"),
  branchBoundTspStartInput: document.querySelector("#branchBoundTspStartInput"),
  applyBranchBoundButton: document.querySelector("#applyBranchBoundButton"),
  sampleBranchBoundButton: document.querySelector("#sampleBranchBoundButton"),
  branchBoundHint: document.querySelector("#branchBoundHint"),
  hanoiDisksInput: document.querySelector("#hanoiDisksInput"),
  gcdAInput: document.querySelector("#gcdAInput"),
  gcdBInput: document.querySelector("#gcdBInput"),
  factorialInput: document.querySelector("#factorialInput"),
  fibRecursiveInput: document.querySelector("#fibRecursiveInput"),
  fibMemoInput: document.querySelector("#fibMemoInput"),
  applyRecursionButton: document.querySelector("#applyRecursionButton"),
  sampleRecursionButton: document.querySelector("#sampleRecursionButton"),
  recursionHint: document.querySelector("#recursionHint"),
  runButton: document.querySelector("#runButton"),
  runIcon: document.querySelector("#runIcon"),
  runLabel: document.querySelector("#runLabel"),
  runbarTopic: document.querySelector("#runbarTopic"),
  runbarState: document.querySelector("#runbarState"),
  bottomRunbar: document.querySelector("#bottomRunbar"),
  resetButton: document.querySelector("#resetButton"),
  stepBackButton: document.querySelector("#stepBackButton"),
  stepButton: document.querySelector("#stepButton"),
  speedInput: document.querySelector("#speedInput"),
  sizeInput: document.querySelector("#sizeInput"),
  datasetSelect: document.querySelector("#datasetSelect"),
  syncToggle: document.querySelector("#syncToggle"),
};

function mulberry32(seed) {
  return function next() {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle(values, rng) {
  const next = values.slice();
  for (let i = next.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

function makeArray(size, mode) {
  if (state.topic === "sorting" && state.customArray?.length) return state.customArray.slice();
  const base = Array.from({ length: size }, (_, index) => index + 1);
  const rng = mulberry32(state.seed + size * 17);
  if (mode === "reverse") return base.reverse();
  if (mode === "almost") {
    const almost = base.slice();
    const swaps = Math.max(2, Math.floor(size / 6));
    for (let i = 0; i < swaps; i++) {
      const a = Math.floor(rng() * size);
      const b = Math.floor(rng() * size);
      [almost[a], almost[b]] = [almost[b], almost[a]];
    }
    return almost;
  }
  return shuffle(base, rng);
}

function parseArrayInput(value) {
  const normalized = normalizeDigits(value).replace(/[\u060c;]/g, ",").replace(/\s+/g, ",");
  const parts = normalized.split(",").map((part) => part.trim()).filter(Boolean);
  const numbers = parts.map(Number);
  if (numbers.length < 2) return { error: "Enter at least two numbers." };
  if (numbers.length > 64) return { error: "Use at most 64 numbers so the animation stays readable." };
  if (numbers.some((number) => !Number.isFinite(number))) return { error: "Only numbers are allowed. Use commas or spaces as separators." };
  return { numbers };
}

function normalizeDigits(value) {
  const persian = "۰۱۲۳۴۵۶۷۸۹";
  const arabic = "٠١٢٣٤٥٦٧٨٩";
  return value.replace(/[۰-۹٠-٩]/g, (digit) => {
    const persianIndex = persian.indexOf(digit);
    if (persianIndex >= 0) return String(persianIndex);
    return String(arabic.indexOf(digit));
  });
}

function formatArrayInput(values) {
  return values.join(", ");
}

function makeGraph() {
  const nodes = [
    { id: "A", x: 0.12, y: 0.42 },
    { id: "B", x: 0.3, y: 0.18 },
    { id: "C", x: 0.31, y: 0.68 },
    { id: "D", x: 0.52, y: 0.31 },
    { id: "E", x: 0.59, y: 0.76 },
    { id: "F", x: 0.78, y: 0.2 },
    { id: "G", x: 0.86, y: 0.62 },
  ];
  const edges = [
    ["A", "B", 4],
    ["A", "C", 2],
    ["B", "D", 5],
    ["B", "F", 10],
    ["C", "D", 1],
    ["C", "E", 7],
    ["D", "E", 3],
    ["D", "F", 6],
    ["E", "G", 4],
    ["F", "G", 2],
  ];
  return { nodes, edges, source: "A", target: "G", directed: true };
}

function cloneGraph(graph) {
  return {
    nodes: graph.nodes.map((node) => ({ ...node })),
    edges: graph.edges.map((edge) => edge.slice()),
    source: graph.source,
    target: graph.target,
    directed: graph.directed ?? true,
  };
}

function graphFromMatrix(matrix, sourceOneBased = 1, targetOneBased = matrix.length) {
  const n = matrix.length;
  const radius = 0.34;
  const nodes = Array.from({ length: n }, (_, index) => {
    const angle = -Math.PI / 2 + (Math.PI * 2 * index) / n;
    return {
      id: String.fromCharCode(65 + index),
      x: 0.5 + Math.cos(angle) * radius,
      y: 0.5 + Math.sin(angle) * radius,
    };
  });
  const edges = [];
  for (let from = 0; from < n; from++) {
    for (let to = 0; to < n; to++) {
      if (from !== to && matrix[from][to] !== 0) edges.push([nodes[from].id, nodes[to].id, matrix[from][to]]);
    }
  }
  const sourceIndex = clamp(sourceOneBased - 1, 0, n - 1);
  const targetIndex = clamp(targetOneBased - 1, 0, n - 1);
  return { nodes, edges, source: nodes[sourceIndex].id, target: nodes[targetIndex].id, directed: true };
}

function getWorkingGraph() {
  if (!state.customGraph) state.customGraph = cloneGraph(makeGraph());
  state.customGraph.directed = state.graphDirected;
  if (!state.customGraph.source && state.customGraph.nodes[0]) state.customGraph.source = state.customGraph.nodes[0].id;
  if (!state.customGraph.target && state.customGraph.nodes.at(-1)) state.customGraph.target = state.customGraph.nodes.at(-1).id;
  return state.customGraph;
}

function backtrackingInputsFromGraph(graph) {
  const labels = graph.nodes.map((node) => node.id);
  const index = Object.fromEntries(labels.map((id, i) => [id, i]));
  const adjacency = Array.from({ length: labels.length }, () => Array(labels.length).fill(0));
  const weights = Array.from({ length: labels.length }, () => Array(labels.length).fill(0));
  for (const [from, to, weight] of relaxationEdges(graph)) {
    const fromIndex = index[from];
    const toIndex = index[to];
    if (fromIndex === undefined || toIndex === undefined || fromIndex === toIndex) continue;
    adjacency[fromIndex][toIndex] = 1;
    if (!weights[fromIndex][toIndex] || weight < weights[fromIndex][toIndex]) weights[fromIndex][toIndex] = weight;
  }
  const sourceIndex = Math.max(0, labels.indexOf(graph.source));
  return {
    labels,
    hamiltonianMatrix: adjacency,
    tspMatrix: weights,
    tspStart: sourceIndex + 1,
  };
}

function makeKnapsack() {
  return {
    capacity: 14,
    items: [
      { weight: 2, value: 6 },
      { weight: 3, value: 10 },
      { weight: 5, value: 12 },
      { weight: 6, value: 18 },
      { weight: 7, value: 22 },
      { weight: 4, value: 14 },
    ],
  };
}

function makeActivities() {
  return [
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
}

function* bubbleSortSteps(input) {
  const a = input.slice();
  let comparisons = 0;
  let writes = 0;
  for (let end = a.length - 1; end > 0; end--) {
    let swapped = false;
    for (let i = 0; i < end; i++) {
      comparisons++;
      yield { array: a.slice(), active: [i, i + 1], sorted: range(end + 1, a.length - 1), comparisons, writes, note: "Compare neighbors" };
      if (a[i] > a[i + 1]) {
        [a[i], a[i + 1]] = [a[i + 1], a[i]];
        writes += 2;
        swapped = true;
        yield { array: a.slice(), active: [i, i + 1], sorted: range(end + 1, a.length - 1), comparisons, writes, note: "Swap" };
      }
    }
    yield { array: a.slice(), active: [end], sorted: range(end, a.length - 1), comparisons, writes, note: "Largest placed" };
    if (!swapped) break;
  }
  yield { array: a.slice(), active: [], sorted: range(0, a.length - 1), comparisons, writes, done: true, note: "Done" };
}

function* selectionSortSteps(input) {
  const a = input.slice();
  let comparisons = 0;
  let writes = 0;
  for (let i = 0; i < a.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < a.length; j++) {
      comparisons++;
      if (a[j] < a[min]) min = j;
      yield { array: a.slice(), active: [i, min, j], sorted: range(0, i - 1), comparisons, writes, note: "Find minimum" };
    }
    if (min !== i) {
      [a[i], a[min]] = [a[min], a[i]];
      writes += 2;
      yield { array: a.slice(), active: [i, min], sorted: range(0, i), comparisons, writes, note: "Place minimum" };
    }
  }
  yield { array: a.slice(), active: [], sorted: range(0, a.length - 1), comparisons, writes, done: true, note: "Done" };
}

function* insertionSortSteps(input) {
  const a = input.slice();
  let comparisons = 0;
  let writes = 0;
  for (let i = 1; i < a.length; i++) {
    const key = a[i];
    let j = i - 1;
    yield { array: a.slice(), active: [i], sorted: range(0, i - 1), comparisons, writes, note: `Key ${key}` };
    while (j >= 0 && a[j] > key) {
      comparisons++;
      a[j + 1] = a[j];
      writes++;
      yield { array: a.slice(), active: [j, j + 1], sorted: range(0, i), comparisons, writes, note: "Shift right" };
      j--;
    }
    a[j + 1] = key;
    writes++;
    yield { array: a.slice(), active: [j + 1], sorted: range(0, i), comparisons, writes, note: "Insert" };
  }
  yield { array: a.slice(), active: [], sorted: range(0, a.length - 1), comparisons, writes, done: true, note: "Done" };
}

function* mergeSortSteps(input) {
  const a = input.slice();
  const aux = input.slice();
  let comparisons = 0;
  let writes = 0;

  function* sort(lo, hi) {
    if (hi <= lo) return;
    const mid = Math.floor((lo + hi) / 2);
    yield* sort(lo, mid);
    yield* sort(mid + 1, hi);
    for (let k = lo; k <= hi; k++) aux[k] = a[k];
    let i = lo;
    let j = mid + 1;
    for (let k = lo; k <= hi; k++) {
      comparisons++;
      if (i > mid) a[k] = aux[j++];
      else if (j > hi) a[k] = aux[i++];
      else if (aux[j] < aux[i]) a[k] = aux[j++];
      else a[k] = aux[i++];
      writes++;
      yield { array: a.slice(), active: [k, i, j].filter((x) => x >= lo && x <= hi), sorted: range(lo, hi), comparisons, writes, note: "Merge" };
    }
  }

  yield* sort(0, a.length - 1);
  yield { array: a.slice(), active: [], sorted: range(0, a.length - 1), comparisons, writes, done: true, note: "Done" };
}

function* quickSortSteps(input) {
  const a = input.slice();
  let comparisons = 0;
  let writes = 0;

  function* partition(lo, hi) {
    const pivot = a[hi];
    let i = lo;
    for (let j = lo; j < hi; j++) {
      comparisons++;
      yield { array: a.slice(), active: [j, hi], sorted: [], comparisons, writes, note: `Pivot ${pivot}` };
      if (a[j] <= pivot) {
        [a[i], a[j]] = [a[j], a[i]];
        writes += 2;
        yield { array: a.slice(), active: [i, j], sorted: [], comparisons, writes, note: "Partition" };
        i++;
      }
    }
    [a[i], a[hi]] = [a[hi], a[i]];
    writes += 2;
    yield { array: a.slice(), active: [i, hi], sorted: [i], comparisons, writes, pivotIndex: i, note: "Place pivot" };
    return i;
  }

  function* sort(lo, hi) {
    if (lo >= hi) return;
    const pivotIndex = yield* partition(lo, hi);
    yield* sort(lo, pivotIndex - 1);
    yield* sort(pivotIndex + 1, hi);
  }

  yield* sort(0, a.length - 1);
  yield { array: a.slice(), active: [], sorted: range(0, a.length - 1), comparisons, writes, done: true, note: "Done" };
}

function* heapSortSteps(input) {
  const a = input.slice();
  let comparisons = 0;
  let writes = 0;

  function* heapify(n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    if (left < n) {
      comparisons++;
      if (a[left] > a[largest]) largest = left;
    }
    if (right < n) {
      comparisons++;
      if (a[right] > a[largest]) largest = right;
    }
    yield { array: a.slice(), active: [i, left, right].filter((x) => x < n), sorted: range(n, a.length - 1), comparisons, writes, note: "heapify" };
    if (largest !== i) {
      [a[i], a[largest]] = [a[largest], a[i]];
      writes += 2;
      yield { array: a.slice(), active: [i, largest], sorted: range(n, a.length - 1), comparisons, writes, note: "Swap" };
      yield* heapify(n, largest);
    }
  }

  for (let i = Math.floor(a.length / 2) - 1; i >= 0; i--) yield* heapify(a.length, i);
  for (let i = a.length - 1; i > 0; i--) {
    [a[0], a[i]] = [a[i], a[0]];
    writes += 2;
    yield { array: a.slice(), active: [0, i], sorted: range(i, a.length - 1), comparisons, writes, note: "Extract max" };
    yield* heapify(i, 0);
  }
  yield { array: a.slice(), active: [], sorted: range(0, a.length - 1), comparisons, writes, done: true, note: "Done" };
}

function* dijkstraSteps(graph) {
  const ids = graph.nodes.map((node) => node.id);
  if (hasNegativeEdge(graph)) {
    yield {
      graph,
      dist: Object.fromEntries(ids.map((id) => [id, id === graph.source ? 0 : Infinity])),
      prev: {},
      visited: [],
      current: null,
      activeEdges: graph.edges.filter(([, , weight]) => weight < 0).map(([from, to]) => [from, to]),
      finalPath: [],
      finalCost: Infinity,
      invalid: true,
      relaxations: 0,
      done: true,
      note: "Dijkstra requires non-negative weights",
    };
    return;
  }
  const dist = Object.fromEntries(ids.map((id) => [id, Infinity]));
  const prev = {};
  const visited = new Set();
  dist[graph.source] = 0;
  let relaxations = 0;
  while (visited.size < ids.length) {
    let current = null;
    for (const id of ids) {
      if (!visited.has(id) && (current === null || dist[id] < dist[current])) current = id;
    }
    if (current === null || dist[current] === Infinity) break;
    visited.add(current);
    yield { graph, dist: { ...dist }, prev: { ...prev }, visited: [...visited], current, activeEdges: [], relaxations, note: `Select ${current}` };
    for (const [from, to, weight] of outgoingEdges(graph, current)) {
      relaxations++;
      if (dist[from] + weight < dist[to]) {
        dist[to] = dist[from] + weight;
        prev[to] = from;
      }
      yield { graph, dist: { ...dist }, prev: { ...prev }, visited: [...visited], current: to, activeEdges: [[from, to]], relaxations, note: `Relax ${from}->${to}` };
    }
  }
  yield {
    graph,
    dist,
    prev,
    visited: ids,
    current: null,
    activeEdges: [],
    finalPath: buildPath(prev, graph.source, graph.target),
    finalCost: dist[graph.target],
    relaxations,
    done: true,
    note: "Done",
  };
}

function* bellmanFordSteps(graph) {
  const ids = graph.nodes.map((node) => node.id);
  const dist = Object.fromEntries(ids.map((id) => [id, Infinity]));
  const prev = {};
  dist[graph.source] = 0;
  let relaxations = 0;
  for (let pass = 1; pass < ids.length; pass++) {
    let changed = false;
    for (const [from, to, weight] of relaxationEdges(graph)) {
      relaxations++;
      if (dist[from] + weight < dist[to]) {
        dist[to] = dist[from] + weight;
        prev[to] = from;
        changed = true;
      }
      yield { graph, dist: { ...dist }, prev: { ...prev }, visited: [], current: to, activeEdges: [[from, to]], relaxations, pass, note: `Pass ${pass}` };
    }
    if (!changed) break;
  }
  const negativeEdge = relaxationEdges(graph).find(([from, to, weight]) => dist[from] !== Infinity && dist[from] + weight < dist[to]);
  if (negativeEdge) {
    const [from, to] = negativeEdge;
    yield {
      graph,
      dist,
      prev,
      visited: ids,
      current: to,
      activeEdges: [[from, to]],
      finalPath: [],
      finalCost: -Infinity,
      negativeCycle: true,
      relaxations,
      done: true,
      note: "Negative cycle detected",
    };
    return;
  }
  yield {
    graph,
    dist,
    prev,
    visited: ids,
    current: null,
    activeEdges: [],
    finalPath: buildPath(prev, graph.source, graph.target),
    finalCost: dist[graph.target],
    relaxations,
    done: true,
    note: "Done",
  };
}

function hasNegativeEdge(graph) {
  return graph.edges.some(([, , weight]) => weight < 0);
}

function* bfsSteps(graph) {
  const ids = graph.nodes.map((node) => node.id);
  const visited = new Set([graph.source]);
  const queue = [graph.source];
  const prev = {};
  const dist = Object.fromEntries(ids.map((id) => [id, Infinity]));
  dist[graph.source] = 0;
  let checks = 0;
  while (queue.length) {
    const current = queue.shift();
    yield {
      graph,
      dist: { ...dist },
      prev: { ...prev },
      visited: [...visited],
      current,
      activeEdges: [],
      relaxations: checks,
      note: `Visit ${current}`,
    };
    if (current === graph.target) break;
    for (const [from, to] of outgoingEdges(graph, current)) {
      checks++;
      const newlyVisited = !visited.has(to);
      if (newlyVisited) {
        visited.add(to);
        prev[to] = from;
        dist[to] = dist[from] + 1;
        queue.push(to);
      }
      yield {
        graph,
        dist: { ...dist },
        prev: { ...prev },
        visited: [...visited],
        current: to,
        activeEdges: [[from, to]],
        relaxations: checks,
        note: newlyVisited ? `Discover ${to}` : `Seen ${to}`,
      };
    }
  }
  const finalPath = buildPath(prev, graph.source, graph.target);
  graph.weightedResultLabel = "Edges";
  yield {
    graph,
    dist,
    prev,
    visited: [...visited],
    current: null,
    activeEdges: [],
    finalPath,
    finalCost: finalPath.length ? finalPath.length - 1 : Infinity,
    relaxations: checks,
    done: true,
    note: "Done",
  };
}

function* dfsSteps(graph) {
  const ids = graph.nodes.map((node) => node.id);
  const visited = new Set();
  const prev = {};
  const dist = Object.fromEntries(ids.map((id) => [id, Infinity]));
  const stack = [[graph.source, null, 0]];
  let checks = 0;
  while (stack.length) {
    const [current, parent, depth] = stack.pop();
    if (visited.has(current)) continue;
    visited.add(current);
    if (parent) prev[current] = parent;
    dist[current] = depth;
    yield {
      graph,
      dist: { ...dist },
      prev: { ...prev },
      visited: [...visited],
      current,
      activeEdges: parent ? [[parent, current]] : [],
      relaxations: checks,
      note: `Enter ${current}`,
    };
    if (current === graph.target) break;
    const neighbors = outgoingEdges(graph, current).slice().reverse();
    for (const [from, to] of neighbors) {
      checks++;
      if (!visited.has(to)) stack.push([to, from, depth + 1]);
      yield {
        graph,
        dist: { ...dist },
        prev: { ...prev },
        visited: [...visited],
        current: to,
        activeEdges: [[from, to]],
        relaxations: checks,
        note: `Explore ${from}->${to}`,
      };
    }
  }
  const finalPath = buildPath(prev, graph.source, graph.target);
  graph.weightedResultLabel = "Edges";
  yield {
    graph,
    dist,
    prev,
    visited: [...visited],
    current: null,
    activeEdges: [],
    finalPath,
    finalCost: finalPath.length ? finalPath.length - 1 : Infinity,
    relaxations: checks,
    done: true,
    note: "Done",
  };
}

function* kruskalSteps(graph) {
  const parent = Object.fromEntries(graph.nodes.map((node) => [node.id, node.id]));
  const rank = Object.fromEntries(graph.nodes.map((node) => [node.id, 0]));
  const sortedEdges = undirectedWeightedEdges(graph);
  const mstEdges = [];
  let total = 0;
  let checks = 0;
  const directionNote = graph.directed !== false ? " (direction ignored)" : "";

  function find(id) {
    if (parent[id] !== id) parent[id] = find(parent[id]);
    return parent[id];
  }

  function union(a, b) {
    const rootA = find(a);
    const rootB = find(b);
    if (rootA === rootB) return false;
    if (rank[rootA] < rank[rootB]) parent[rootA] = rootB;
    else if (rank[rootA] > rank[rootB]) parent[rootB] = rootA;
    else {
      parent[rootB] = rootA;
      rank[rootA]++;
    }
    return true;
  }

  for (const { from, to, weight } of sortedEdges) {
    checks++;
    const accepted = union(from, to);
    if (accepted) {
      mstEdges.push([from, to]);
      total += weight;
    }
    yield {
      graph,
      visited: [...new Set(mstEdges.flat())],
      current: to,
      activeEdges: [[from, to]],
      finalEdges: mstEdges.slice(),
      finalCost: total,
      undirectedResult: true,
      relaxations: checks,
      note: accepted ? `Accept ${from}-${to}${directionNote}` : `Reject ${from}-${to}${directionNote}`,
    };
    if (mstEdges.length === graph.nodes.length - 1) break;
  }

  yield {
    graph,
    visited: graph.nodes.map((node) => node.id),
    current: null,
    activeEdges: [],
    finalEdges: mstEdges,
    finalCost: mstEdges.length === Math.max(0, graph.nodes.length - 1) ? total : Infinity,
    disconnected: mstEdges.length !== Math.max(0, graph.nodes.length - 1),
    undirectedResult: true,
    relaxations: checks,
    done: true,
    note: mstEdges.length === Math.max(0, graph.nodes.length - 1)
      ? `Done${directionNote}`
      : "Graph is disconnected",
  };
}

function* primSteps(graph) {
  const ids = graph.nodes.map((node) => node.id);
  const start = ids.includes(graph.source) ? graph.source : ids[0];
  const edges = undirectedWeightedEdges(graph);
  const visited = new Set(start ? [start] : []);
  const mstEdges = [];
  let total = 0;
  let checks = 0;
  const directionNote = graph.directed !== false ? " (direction ignored)" : "";

  if (!start) {
    yield {
      graph,
      visited: [],
      current: null,
      activeEdges: [],
      finalEdges: [],
      finalCost: 0,
      undirectedResult: true,
      relaxations: 0,
      done: true,
      note: "Empty graph",
    };
    return;
  }

  yield {
    graph,
    visited: [...visited],
    current: start,
    activeEdges: [],
    finalEdges: [],
    finalCost: 0,
    undirectedResult: true,
    relaxations: checks,
    note: `Start from ${start}${directionNote}`,
  };

  while (visited.size < ids.length) {
    let best = null;
    for (const edge of edges) {
      const fromVisited = visited.has(edge.from);
      const toVisited = visited.has(edge.to);
      if (fromVisited === toVisited) continue;
      const from = fromVisited ? edge.from : edge.to;
      const to = fromVisited ? edge.to : edge.from;
      checks++;
      if (!best || edge.weight < best.weight) best = { from, to, weight: edge.weight };
      yield {
        graph,
        visited: [...visited],
        current: to,
        activeEdges: [[from, to]],
        finalEdges: mstEdges.slice(),
        finalCost: total,
        undirectedResult: true,
        relaxations: checks,
        note: `Check ${from}-${to}`,
      };
    }

    if (!best) {
      yield {
        graph,
        visited: [...visited],
        current: null,
        activeEdges: [],
        finalEdges: mstEdges,
        finalCost: Infinity,
        disconnected: true,
        undirectedResult: true,
        relaxations: checks,
        done: true,
        note: "Graph is disconnected",
      };
      return;
    }

    visited.add(best.to);
    mstEdges.push([best.from, best.to]);
    total += best.weight;
    yield {
      graph,
      visited: [...visited],
      current: best.to,
      activeEdges: [[best.from, best.to]],
      finalEdges: mstEdges.slice(),
      finalCost: total,
      undirectedResult: true,
      relaxations: checks,
      note: `Accept ${best.from}-${best.to}${directionNote}`,
    };
  }

  yield {
    graph,
    visited: [...visited],
    current: null,
    activeEdges: [],
    finalEdges: mstEdges,
    finalCost: total,
    disconnected: false,
    undirectedResult: true,
    relaxations: checks,
    done: true,
    note: `Done${directionNote}`,
  };
}

function* floydWarshallSteps(graph) {
  const ids = graph.nodes.map((node) => node.id);
  const n = ids.length;
  const index = Object.fromEntries(ids.map((id, i) => [id, i]));
  const dist = Array.from({ length: n }, () => Array(n).fill(Infinity));
  const next = Array.from({ length: n }, () => Array(n).fill(null));
  for (let i = 0; i < n; i++) {
    dist[i][i] = 0;
    next[i][i] = ids[i];
  }
  for (const [from, to, weight] of relaxationEdges(graph)) {
    const i = index[from];
    const j = index[to];
    if (i === undefined || j === undefined) continue;
    if (weight < dist[i][j]) {
      dist[i][j] = weight;
      next[i][j] = to;
    }
  }

  let checks = 0;
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        checks++;
        if (dist[i][k] !== Infinity && dist[k][j] !== Infinity && dist[i][k] + dist[k][j] < dist[i][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
          next[i][j] = next[i][k];
        }
        yield {
          table: cloneMatrix(dist),
          active: [i, j],
          pivot: k,
          labels: ids,
          graph,
          writes: checks,
          note: `k=${ids[k]}`,
        };
      }
    }
  }

  const negativeCycle = dist.some((row, i) => row[i] < 0);
  const sourceIndex = index[graph.source];
  const targetIndex = index[graph.target];
  const finalCost = sourceIndex === undefined || targetIndex === undefined ? Infinity : dist[sourceIndex][targetIndex];
  const finalPath = negativeCycle ? [] : buildFloydPath(next, ids, sourceIndex, targetIndex);
  yield {
    table: cloneMatrix(dist),
    active: sourceIndex !== undefined && targetIndex !== undefined ? [sourceIndex, targetIndex] : [0, 0],
    labels: ids,
    graph,
    finalPath,
    finalCost,
    negativeCycle,
    writes: checks,
    done: true,
    note: negativeCycle ? "Negative cycle detected" : "Done",
  };
}

function buildFloydPath(next, ids, sourceIndex, targetIndex) {
  if (sourceIndex === undefined || targetIndex === undefined) return [];
  if (!next[sourceIndex][targetIndex]) return [];
  const path = [ids[sourceIndex]];
  let current = sourceIndex;
  const seen = new Set();
  while (current !== targetIndex) {
    if (seen.has(current)) return [];
    seen.add(current);
    const nextId = next[current][targetIndex];
    current = ids.indexOf(nextId);
    if (current < 0) return [];
    path.push(ids[current]);
  }
  return path;
}

function buildPath(prev, source, target) {
  if (!source || !target) return [];
  const path = [];
  let current = target;
  const seen = new Set();
  while (current && !seen.has(current)) {
    path.unshift(current);
    if (current === source) return path;
    seen.add(current);
    current = prev[current];
  }
  return source === target ? [source] : [];
}

function outgoingEdges(graph, nodeId) {
  if (graph.directed !== false) return graph.edges.filter(([from]) => from === nodeId);
  const edges = [];
  for (const [from, to, weight] of graph.edges) {
    if (from === nodeId) edges.push([from, to, weight]);
    if (to === nodeId) edges.push([to, from, weight]);
  }
  return edges;
}

function relaxationEdges(graph) {
  if (graph.directed !== false) return graph.edges;
  return graph.edges.flatMap(([from, to, weight]) => [
    [from, to, weight],
    [to, from, weight],
  ]);
}

function undirectedWeightedEdges(graph) {
  const nodeIds = new Set(graph.nodes.map((node) => node.id));
  const edgeMap = new Map();
  graph.edges.forEach(([from, to, weight], index) => {
    if (!nodeIds.has(from) || !nodeIds.has(to) || from === to) return;
    const [a, b] = [from, to].sort();
    const key = `${a}-${b}`;
    const existing = edgeMap.get(key);
    if (!existing || weight < existing.weight) edgeMap.set(key, { from, to, weight, index });
  });
  return [...edgeMap.values()].sort((a, b) => a.weight - b.weight || a.index - b.index);
}

function* matrixChainSteps(dimensions) {
  const n = dimensions.length - 1;
  const table = Array.from({ length: n }, () => Array(n).fill(null));
  const splits = Array.from({ length: n }, () => Array(n).fill(null));
  for (let i = 0; i < n; i++) table[i][i] = 0;
  let writes = n;
  yield { table: cloneMatrix(table), active: [0, 0], writes, labels: range(1, n).map((value) => `A${value}`), note: "Base cost = 0" };
  for (let length = 2; length <= n; length++) {
    for (let i = 0; i <= n - length; i++) {
      const j = i + length - 1;
      table[i][j] = Infinity;
      for (let k = i; k < j; k++) {
        const cost = table[i][k] + table[k + 1][j] + dimensions[i] * dimensions[k + 1] * dimensions[j + 1];
        writes++;
        if (cost < table[i][j]) {
          table[i][j] = cost;
          splits[i][j] = k;
        }
        yield {
          table: cloneMatrix(table),
          active: [i, j],
          writes,
          labels: range(1, n).map((value) => `A${value}`),
          result: table[0][n - 1],
          note: `Try split k=${k + 1}`,
        };
      }
    }
  }
  yield {
    table,
    active: [0, n - 1],
    writes,
    labels: range(1, n).map((value) => `A${value}`),
    result: table[0][n - 1],
    splits,
    done: true,
    note: "Optimal cost",
  };
}

function* knapsackDpSteps(data) {
  const { items, capacity } = data;
  const table = Array.from({ length: items.length + 1 }, () => Array(capacity + 1).fill(0));
  let writes = 0;
  for (let i = 1; i <= items.length; i++) {
    for (let w = 0; w <= capacity; w++) {
      const item = items[i - 1];
      const skip = table[i - 1][w];
      const take = item.weight <= w ? table[i - 1][w - item.weight] + item.value : -Infinity;
      table[i][w] = Math.max(skip, take);
      writes++;
      yield { table: cloneMatrix(table), active: [i, w], items, capacity, writes, note: `Item ${i}` };
    }
  }
  const reconstruction = reconstructZeroOneKnapsack(table, items, capacity);
  yield {
    table,
    active: [items.length, capacity],
    items,
    capacity,
    writes,
    result: `value ${table[items.length][capacity]} | items ${formatSelectedItems(reconstruction.items)}`,
    pathCells: reconstruction.cells,
    done: true,
    note: "Reconstructed answer",
  };
}

function* knapsackMemoSteps(data) {
  const { items, capacity } = data;
  const table = Array.from({ length: items.length + 1 }, () => Array(capacity + 1).fill(null));
  let calls = 0;
  const stack = [[items.length, capacity, false]];
  while (stack.length) {
    const [i, w, resolving] = stack.pop();
    calls++;
    if (table[i][w] !== null) {
      yield { table: cloneMatrix(table), active: [i, w], items, capacity, writes: calls, note: "Memo hit" };
      continue;
    }
    if (i === 0 || w === 0) {
      table[i][w] = 0;
      yield { table: cloneMatrix(table), active: [i, w], items, capacity, writes: calls, note: "Base case" };
      continue;
    }
    const item = items[i - 1];
    if (resolving) {
      const skip = table[i - 1][w] ?? 0;
      const take = item.weight <= w ? (table[i - 1][w - item.weight] ?? 0) + item.value : -Infinity;
      table[i][w] = Math.max(skip, take);
      yield { table: cloneMatrix(table), active: [i, w], items, capacity, writes: calls, note: "Store" };
      continue;
    }
    stack.push([i, w, true]);
    stack.push([i - 1, w, false]);
    if (item.weight <= w) stack.push([i - 1, w - item.weight, false]);
    yield { table: cloneMatrix(table), active: [i, w], items, capacity, writes: calls, note: "Call" };
  }
  const reconstruction = reconstructZeroOneKnapsack(table, items, capacity);
  yield {
    table,
    active: [items.length, capacity],
    items,
    capacity,
    writes: calls,
    result: `value ${table[items.length][capacity]} | items ${formatSelectedItems(reconstruction.items)}`,
    pathCells: reconstruction.cells,
    done: true,
    note: "Reconstructed answer",
  };
}

function* knapsackBranchBoundSteps(data) {
  const originalItems = data.items;
  const items = originalItems
    .map((item, index) => ({ ...item, index, ratio: item.value / item.weight }))
    .sort((a, b) => b.ratio - a.ratio);
  const capacity = data.capacity;
  let checks = 0;
  let bestValue = 0;
  let bestTaken = [];
  const queue = [{ level: 0, weight: 0, value: 0, taken: [], bound: 0, decision: "root" }];
  const rows = [];

  const bound = (node) => {
    if (node.weight > capacity) return 0;
    let value = node.value;
    let weight = node.weight;
    for (let i = node.level; i < items.length; i++) {
      const item = items[i];
      if (weight + item.weight <= capacity) {
        weight += item.weight;
        value += item.value;
      } else {
        value += (capacity - weight) * item.ratio;
        break;
      }
    }
    return Math.round(value * 100) / 100;
  };

  queue[0].bound = bound(queue[0]);
  const makeTable = () => rows.slice(-9).map((row) => [row.step, row.decision, row.level, row.weight, row.value, row.bound, row.status]);
  const emit = (row, note, done = false) => {
    rows.push(row);
    return {
      table: makeTable(),
      colLabels: ["Step", "Decision", "Level", "Weight", "Value", "Bound", "Status"],
      active: [Math.min(rows.length, 9) - 1, 6],
      writes: checks,
      result: bestTaken.length ? `value ${bestValue} | items ${formatSelectedItems(bestTaken)}` : bestValue,
      done,
      note,
    };
  };

  yield emit({ step: 0, decision: "root", level: 0, weight: 0, value: 0, bound: queue[0].bound, status: "open" }, "Start with fractional upper bound");
  while (queue.length) {
    queue.sort((a, b) => b.bound - a.bound);
    const node = queue.shift();
    checks++;
    const expandable = node.bound > bestValue && node.level < items.length;
    yield emit({ step: checks, decision: node.decision, level: node.level, weight: node.weight, value: node.value, bound: node.bound, status: expandable ? "expand" : "prune" }, expandable ? "Expand best bound" : "Prune by bound");
    if (!expandable) continue;

    const item = items[node.level];
    const take = {
      level: node.level + 1,
      weight: node.weight + item.weight,
      value: node.value + item.value,
      taken: [...node.taken, item.index],
      decision: `take ${item.index + 1}`,
    };
    take.bound = bound(take);
    checks++;
    if (take.weight <= capacity && take.value > bestValue) {
      bestValue = take.value;
      bestTaken = take.taken.slice().sort((a, b) => a - b);
    }
    const takeStatus = take.weight > capacity ? "overweight" : take.bound <= bestValue && take.value < bestValue ? "prune" : "open";
    yield emit({ step: checks, decision: take.decision, level: take.level, weight: take.weight, value: take.value, bound: take.bound, status: takeStatus }, takeStatus === "overweight" ? "Reject overweight branch" : "Evaluate take branch");
    if (take.weight <= capacity && take.bound > bestValue) queue.push(take);

    const skip = {
      level: node.level + 1,
      weight: node.weight,
      value: node.value,
      taken: node.taken.slice(),
      decision: `skip ${item.index + 1}`,
    };
    skip.bound = bound(skip);
    checks++;
    const skipStatus = skip.bound <= bestValue ? "prune" : "open";
    yield emit({ step: checks, decision: skip.decision, level: skip.level, weight: skip.weight, value: skip.value, bound: skip.bound, status: skipStatus }, skipStatus === "prune" ? "Prune skip branch" : "Evaluate skip branch");
    if (skip.bound > bestValue) queue.push(skip);
  }

  const bestWeight = bestTaken.reduce((sum, index) => sum + originalItems[index].weight, 0);
  yield emit({ step: checks + 1, decision: "best", level: items.length, weight: bestWeight, value: bestValue, bound: bestValue, status: "done" }, "Optimal 0/1 solution found", true);
}

function* unboundedKnapsackSteps(data) {
  const { items, capacity } = data;
  const table = Array.from({ length: items.length + 1 }, () => Array(capacity + 1).fill(0));
  let writes = 0;
  for (let i = 1; i <= items.length; i++) {
    const item = items[i - 1];
    for (let w = 0; w <= capacity; w++) {
      const skip = table[i - 1][w];
      const take = item.weight <= w ? table[i][w - item.weight] + item.value : -Infinity;
      table[i][w] = Math.max(skip, take);
      writes++;
      yield { table: cloneMatrix(table), active: [i, w], items, capacity, writes, note: item.weight <= w ? "Reuse allowed" : "Skip item" };
    }
  }
  const reconstruction = reconstructUnboundedKnapsack(table, items, capacity);
  yield {
    table,
    active: [items.length, capacity],
    items,
    capacity,
    writes,
    result: `value ${table[items.length][capacity]} | items ${formatSelectedItems(reconstruction.items)}`,
    pathCells: reconstruction.cells,
    done: true,
    note: "Reconstructed answer",
  };
}

function reconstructZeroOneKnapsack(table, items, capacity) {
  const selected = [];
  const cells = [];
  let i = items.length;
  let w = capacity;
  while (i > 0 && w >= 0) {
    cells.push([i, w]);
    if (table[i][w] !== table[i - 1][w]) {
      selected.push(i);
      w -= items[i - 1].weight;
    }
    i--;
  }
  cells.push([0, Math.max(0, w)]);
  return { items: selected.reverse(), cells };
}

function reconstructUnboundedKnapsack(table, items, capacity) {
  const selected = [];
  const cells = [];
  let i = items.length;
  let w = capacity;
  while (i > 0 && w > 0) {
    cells.push([i, w]);
    const item = items[i - 1];
    const canTake = item.weight <= w && table[i][w] === table[i][w - item.weight] + item.value;
    if (canTake) {
      selected.push(i);
      w -= item.weight;
    } else {
      i--;
    }
  }
  cells.push([Math.max(0, i), Math.max(0, w)]);
  return { items: selected, cells };
}

function formatSelectedItems(items) {
  return items.length ? items.map((item) => `#${item}`).join(", ") : "none";
}

function* lcsSteps(a, b) {
  const rows = a.length + 1;
  const cols = b.length + 1;
  const table = Array.from({ length: rows }, () => Array(cols).fill(0));
  const rowLabels = ["0", ...a.split("")];
  const colLabels = ["0", ...b.split("")];
  let writes = 0;
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (a[i - 1] === b[j - 1]) table[i][j] = table[i - 1][j - 1] + 1;
      else table[i][j] = Math.max(table[i - 1][j], table[i][j - 1]);
      writes++;
      yield { table: cloneMatrix(table), active: [i, j], rowLabels, colLabels, writes, note: a[i - 1] === b[j - 1] ? "Match" : "Best neighbor" };
    }
  }
  let i = a.length;
  let j = b.length;
  const sequence = [];
  const cells = [];
  while (i > 0 && j > 0) {
    cells.push([i, j]);
    if (a[i - 1] === b[j - 1]) {
      sequence.push(a[i - 1]);
      i--;
      j--;
    } else if (table[i - 1][j] >= table[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }
  yield {
    table,
    active: [a.length, b.length],
    rowLabels,
    colLabels,
    writes,
    result: sequence.reverse().join("") || "empty",
    pathCells: cells,
    done: true,
    note: "Reconstructed LCS",
  };
}

function* lisSteps(values) {
  const n = values.length;
  const dp = Array(n).fill(1);
  const prev = Array(n).fill(-1);
  let writes = 0;
  const makeTable = () => [
    values.slice(),
    dp.slice(),
    prev.map((value) => (value < 0 ? "-" : value)),
  ];
  for (let i = 0; i < n; i++) {
    yield { table: makeTable(), active: [1, i], rowLabels: ["value", "dp", "prev"], colLabels: range(0, n - 1).map(String), writes, note: `Start ${i}` };
    for (let j = 0; j < i; j++) {
      writes++;
      if (values[j] < values[i] && dp[j] + 1 > dp[i]) {
        dp[i] = dp[j] + 1;
        prev[i] = j;
      }
      yield { table: makeTable(), active: [1, i], rowLabels: ["value", "dp", "prev"], colLabels: range(0, n - 1).map(String), writes, pathCells: [[0, j], [0, i]], note: values[j] < values[i] ? "Can extend" : "Cannot extend" };
    }
  }
  let best = 0;
  for (let i = 1; i < n; i++) if (dp[i] > dp[best]) best = i;
  const indices = [];
  for (let current = best; current !== -1; current = prev[current]) indices.push(current);
  indices.reverse();
  yield {
    table: makeTable(),
    active: [1, best],
    rowLabels: ["value", "dp", "prev"],
    colLabels: range(0, n - 1).map(String),
    writes,
    pathCells: indices.flatMap((index) => [[0, index], [1, index]]),
    result: indices.map((index) => values[index]).join(", "),
    done: true,
    note: "Reconstructed LIS",
  };
}

function* maxTreePathSumSteps(values) {
  const nodes = treeNodesFromLevelOrder(values);
  let calls = 0;
  let best = -Infinity;
  let bestPath = [];
  const byId = new Map(nodes.map((node) => [node.id, node]));

  function mark(active = null, path = []) {
    const pathSet = new Set(path);
    return nodes.map((node) => ({
      ...node,
      status: pathSet.has(node.id) ? "done" : node.gain !== undefined ? "memo" : "idle",
      active: node.id === active,
      result: node.gain,
    }));
  }

  function* solve(id) {
    const node = byId.get(id);
    if (!node) return { gain: 0, path: [] };
    calls++;
    yield { nodes: mark(id), active: id, calls, result: best === -Infinity ? undefined : best, note: `Visit ${node.value}` };
    const left = yield* solve(node.left);
    const right = yield* solve(node.right);
    const leftGain = Math.max(0, left.gain);
    const rightGain = Math.max(0, right.gain);
    const through = node.value + leftGain + rightGain;
    const throughPath = [
      ...(leftGain > 0 ? left.path.slice().reverse() : []),
      node.id,
      ...(rightGain > 0 ? right.path : []),
    ];
    if (through > best) {
      best = through;
      bestPath = throughPath;
    }
    if (leftGain >= rightGain && leftGain > 0) {
      node.gain = node.value + leftGain;
      yield { nodes: mark(id, bestPath), active: id, calls, result: best, note: "Store left gain" };
      return { gain: node.gain, path: [node.id, ...left.path] };
    }
    if (rightGain > 0) {
      node.gain = node.value + rightGain;
      yield { nodes: mark(id, bestPath), active: id, calls, result: best, note: "Store right gain" };
      return { gain: node.gain, path: [node.id, ...right.path] };
    }
    node.gain = node.value;
    yield { nodes: mark(id, bestPath), active: id, calls, result: best, note: "Store node gain" };
    return { gain: node.gain, path: [node.id] };
  }

  if (!nodes.length) {
    yield { nodes: [], active: null, calls: 0, result: 0, done: true, note: "Empty tree" };
    return;
  }
  yield* solve(0);
  yield { nodes: mark(null, bestPath), active: null, calls, result: `${best} via ${bestPath.map((id) => byId.get(id).value).join(" -> ")}`, done: true, note: "Maximum path" };
}

function* fractionalKnapsackSteps(data) {
  const items = data.items.map((item, index) => ({ ...item, index: index + 1, ratio: item.value / item.weight, taken: 0, gain: 0 }))
    .sort((a, b) => b.ratio - a.ratio || a.index - b.index);
  let remaining = data.capacity;
  let total = 0;
  const labels = ["Item", "Weight", "Value", "Ratio", "Taken", "Gain"];
  const makeTable = () => items.map((item) => [`#${item.index}`, item.weight, item.value, item.ratio.toFixed(2), item.taken.toFixed(2), item.gain.toFixed(2)]);
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (remaining <= 0) {
      yield { table: makeTable(), active: [i, 4], colLabels: labels, writes: i + 1, result: total.toFixed(2), note: "Capacity full" };
      continue;
    }
    const take = Math.min(item.weight, remaining);
    item.taken = take;
    item.gain = take * item.ratio;
    remaining -= take;
    total += item.gain;
    yield { table: makeTable(), active: [i, 4], colLabels: labels, writes: i + 1, result: total.toFixed(2), note: take === item.weight ? "Take whole item" : "Take fraction" };
  }
  yield { table: makeTable(), active: [items.length - 1, 5], colLabels: labels, writes: items.length, result: `value ${total.toFixed(2)}`, done: true, note: "Done" };
}

function* jobSequencingSteps(jobs) {
  const sorted = jobs.map((job) => ({ ...job })).sort((a, b) => b.profit - a.profit || a.deadline - b.deadline);
  const maxDeadline = Math.max(...sorted.map((job) => job.deadline));
  const slots = Array(maxDeadline).fill("-");
  let profit = 0;
  let checks = 0;
  const makeTable = () => [
    range(1, maxDeadline).map((slot) => `D${slot}`),
    slots.slice(),
  ];
  for (const job of sorted) {
    let placed = false;
    for (let slot = Math.min(job.deadline, maxDeadline) - 1; slot >= 0; slot--) {
      checks++;
      yield { table: makeTable(), active: [1, slot], rowLabels: ["slot", "job"], colLabels: range(1, maxDeadline).map(String), writes: checks, result: profit, note: `Try ${job.id}` };
      if (slots[slot] === "-") {
        slots[slot] = job.id;
        profit += job.profit;
        placed = true;
        yield { table: makeTable(), active: [1, slot], rowLabels: ["slot", "job"], colLabels: range(1, maxDeadline).map(String), writes: checks, result: profit, note: `Place ${job.id}` };
        break;
      }
    }
    if (!placed) yield { table: makeTable(), active: [1, 0], rowLabels: ["slot", "job"], colLabels: range(1, maxDeadline).map(String), writes: checks, result: profit, note: `Skip ${job.id}` };
  }
  yield { table: makeTable(), active: [1, Math.max(0, maxDeadline - 1)], rowLabels: ["slot", "job"], colLabels: range(1, maxDeadline).map(String), writes: checks, result: `profit ${profit}`, done: true, note: "Done" };
}

function* huffmanSteps(items) {
  let queue = items.map((item) => ({ label: item.symbol, freq: item.freq, code: "" })).sort((a, b) => a.freq - b.freq || a.label.localeCompare(b.label));
  const merges = [];
  let writes = 0;
  const makeTable = () => {
    const rows = merges.map((merge, index) => [`M${index + 1}`, merge.left, merge.right, merge.sum]);
    const queueText = queue.map((item) => `${item.label}:${item.freq}`).join("  ");
    rows.push(["Queue", queueText, "", ""]);
    return rows;
  };
  while (queue.length > 1) {
    queue.sort((a, b) => a.freq - b.freq || a.label.localeCompare(b.label));
    const left = queue.shift();
    const right = queue.shift();
    const parent = { label: `(${left.label}+${right.label})`, freq: left.freq + right.freq };
    queue.push(parent);
    merges.push({ left: `${left.label}:${left.freq}`, right: `${right.label}:${right.freq}`, sum: parent.freq });
    writes++;
    yield { table: makeTable(), active: [merges.length - 1, 3], colLabels: ["Step", "Left", "Right", "Sum"], writes, result: parent.freq, note: "Merge two smallest" };
  }
  yield { table: makeTable(), active: [Math.max(0, merges.length - 1), 3], colLabels: ["Step", "Left", "Right", "Sum"], writes, result: `root ${queue[0]?.freq ?? 0}`, done: true, note: "Huffman tree built" };
}

function* tspNearestNeighborSteps(matrix, startOneBased, labels = null) {
  const n = matrix.length;
  const names = labels?.length === n ? labels.slice() : range(1, n).map((city) => `C${city}`);
  const start = clamp(startOneBased - 1, 0, n - 1);
  const visited = new Set([start]);
  const path = [start];
  let current = start;
  let cost = 0;
  let checks = 0;
  yield { table: cloneMatrix(matrix), active: [start, start], labels: names, pathCells: [[start, start]], writes: checks, result: names[start], note: "Start" };
  while (visited.size < n) {
    let best = null;
    for (let city = 0; city < n; city++) {
      if (visited.has(city) || city === current) continue;
      checks++;
      const distance = matrix[current][city];
      yield { table: cloneMatrix(matrix), active: [current, city], labels: names, pathCells: pathToMatrixCells(path), writes: checks, result: cost, note: distance > 0 ? `Check ${names[city]}` : "Missing edge" };
      if (distance > 0 && (!best || distance < best.distance)) best = { city, distance };
    }
    if (!best) {
      yield { table: cloneMatrix(matrix), active: [current, current], labels: names, pathCells: pathToMatrixCells(path), writes: checks, result: "no tour", done: true, note: "No outgoing edge to an unvisited city" };
      return;
    }
    cost += best.distance;
    current = best.city;
    visited.add(current);
    path.push(current);
    yield { table: cloneMatrix(matrix), active: [path.at(-2), current], labels: names, pathCells: pathToMatrixCells(path), writes: checks, result: cost, note: `Move to ${names[current]}` };
  }
  const returnCost = matrix[current][start];
  if (returnCost <= 0) {
    yield { table: cloneMatrix(matrix), active: [current, start], labels: names, pathCells: pathToMatrixCells(path), writes: checks, result: "no tour", done: true, note: "No edge back to start" };
    return;
  }
  cost += returnCost;
  path.push(start);
  yield { table: cloneMatrix(matrix), active: [current, start], labels: names, pathCells: pathToMatrixCells(path), writes: checks, result: `${cost} via ${path.map((city) => names[city]).join(" -> ")}`, done: true, note: "Return to start" };
}

function pathToMatrixCells(path) {
  const cells = [];
  for (let i = 1; i < path.length; i++) cells.push([path[i - 1], path[i]]);
  return cells;
}

function* activityGreedySteps(activities) {
  const sorted = activities.map((activity, index) => ({ ...activity, index })).sort((a, b) => a.finish - b.finish);
  const selected = [];
  let lastFinish = -Infinity;
  let checks = 0;
  for (const activity of sorted) {
    checks++;
    const accepted = activity.start >= lastFinish;
    if (accepted) {
      selected.push(activity.index);
      lastFinish = activity.finish;
    }
    yield { activities, active: activity.index, selected: selected.slice(), checks, note: accepted ? "Pick" : "Skip" };
  }
  yield { activities, active: null, selected, checks, done: true, note: "Done" };
}

function* activityBruteSteps(activities) {
  let best = [];
  let checks = 0;
  const total = 1 << activities.length;
  for (let mask = 0; mask < total; mask++) {
    checks++;
    const picked = [];
    for (let i = 0; i < activities.length; i++) if (mask & (1 << i)) picked.push(i);
    const valid = isCompatible(picked.map((index) => activities[index]));
    if (valid && picked.length > best.length) best = picked;
    if (mask % 8 === 0 || picked.length > best.length - 1) {
      yield { activities, active: picked[picked.length - 1] ?? null, selected: best.slice(), trial: picked, checks, note: valid ? "Compatible" : "Overlap" };
    }
  }
  yield { activities, active: null, selected: best, checks, done: true, note: "Done" };
}

function* nQueenSteps(size) {
  const queens = [];
  const rejected = [];
  let firstSolution = null;
  let checks = 0;
  let solutions = 0;

  const safe = (row, col) => {
    for (let r = 0; r < row; r++) {
      const qCol = queens[r];
      if (qCol === col || Math.abs(qCol - col) === row - r) return false;
    }
    return true;
  };
  const frame = (active, note, done = false, displayQueens = null) => ({
    kind: "nqueen",
    size,
    queens: (displayQueens || queens).slice(),
    rejected: rejected.slice(-32),
    active,
    checks,
    calls: checks,
    solutionCount: solutions,
    result: done && firstSolution
      ? `first solution shown | total ${solutions}`
      : solutions ? `${solutions} solution${solutions === 1 ? "" : "s"}` : "searching",
    done,
    note,
  });

  function* place(row) {
    if (row === size) {
      solutions++;
      if (!firstSolution) firstSolution = queens.slice();
      yield frame(null, "Solution found");
      return;
    }
    for (let col = 0; col < size; col++) {
      checks++;
      yield frame({ row, col }, `Try row ${row + 1}, col ${col + 1}`);
      if (safe(row, col)) {
        queens[row] = col;
        yield frame({ row, col }, "Place queen");
        yield* place(row + 1);
        queens.length = row;
        yield frame({ row, col }, "Backtrack");
      } else {
        rejected.push([row, col]);
        yield frame({ row, col }, "Reject unsafe square");
      }
    }
  }

  yield frame(null, "Start");
  yield* place(0);
  yield frame(null, solutions ? `First solution shown; ${solutions} total solutions` : "No solution", true, firstSolution);
}

function* subsetSumSteps(values, target) {
  const selected = [];
  const decisions = [];
  let calls = 0;
  let solutions = 0;

  const frame = (index, sum, note, done = false) => ({
    kind: "subset",
    values: values.slice(),
    target,
    index,
    selected: selected.slice(),
    decisions: decisions.slice(-28),
    currentSum: sum,
    calls,
    result: solutions ? `${solutions} solution${solutions === 1 ? "" : "s"}` : `${sum}/${target}`,
    done,
    note,
  });

  function* search(index, sum) {
    calls++;
    yield frame(index, sum, `Visit item ${index + 1}`);
    if (sum === target) {
      solutions++;
      yield frame(index, sum, "Target reached");
      return;
    }
    if (index >= values.length) {
      yield frame(index, sum, "End of items");
      return;
    }
    if (values.every((value) => value >= 0) && sum > target) {
      yield frame(index, sum, "Prune: sum is too large");
      return;
    }

    selected.push(index);
    decisions.push({ index, take: true, sum: sum + values[index] });
    yield frame(index, sum + values[index], `Include ${values[index]}`);
    yield* search(index + 1, sum + values[index]);
    selected.pop();

    decisions.push({ index, take: false, sum });
    yield frame(index, sum, `Exclude ${values[index]}`);
    yield* search(index + 1, sum);
  }

  yield frame(0, 0, "Start");
  yield* search(0, 0);
  yield frame(values.length, 0, solutions ? "Search complete" : "No subset found", true);
}

function* hamiltonianCycleSteps(matrix, startOneBased = 1, labels = null) {
  const n = matrix.length;
  const names = labels?.length === n ? labels.slice() : range(1, n).map((city) => `V${city}`);
  if (n < 2 || n > 8) {
    yield {
      kind: "hamiltonian",
      matrix: matrix.map((row) => row.slice()),
      labels: names,
      path: [],
      activeEdge: null,
      bestPath: [],
      checks: 0,
      calls: 0,
      result: n > 8 ? "too many vertices" : "empty graph",
      done: true,
      note: "Hamiltonian search supports 2 to 8 vertices",
    };
    return;
  }
  const start = clamp(startOneBased - 1, 0, n - 1);
  const path = [start];
  let checks = 0;
  let solution = null;

  const frame = (activeEdge, note, done = false) => ({
    kind: "hamiltonian",
    matrix: matrix.map((row) => row.slice()),
    labels: names,
    path: path.slice(),
    activeEdge,
    bestPath: solution ? solution.slice() : [],
    checks,
    calls: checks,
    result: solution ? solution.map((city) => names[city]).join(" -> ") : "searching",
    done,
    note,
  });

  function* search() {
    if (path.length === n) {
      checks++;
      const canClose = matrix[path.at(-1)][path[0]] !== 0;
      yield frame([path.at(-1), path[0]], canClose ? "Close cycle" : "Cannot close cycle");
      if (canClose) solution = [...path, path[0]];
      return Boolean(solution);
    }
    for (let city = 0; city < n; city++) {
      if (city === start) continue;
      if (path.includes(city)) continue;
      checks++;
      const from = path.at(-1);
      yield frame([from, city], `Try ${names[city]}`);
      if (matrix[from][city] === 0) {
        yield frame([from, city], "Reject missing edge");
        continue;
      }
      path.push(city);
      yield frame([from, city], "Add vertex");
      if (yield* search()) return true;
      path.pop();
      yield frame([from, city], "Backtrack");
    }
    return false;
  }

  yield frame(null, `Start from ${names[start]}`);
  yield* search();
  if (solution) path.splice(0, path.length, ...solution);
  yield frame(null, solution ? "Hamiltonian cycle found" : "No Hamiltonian cycle", true);
}

function* hamiltonianBruteSteps(matrix, startOneBased = 1, labels = null) {
  const n = matrix.length;
  const names = labels?.length === n ? labels.slice() : range(1, n).map((city) => `V${city}`);
  const start = clamp(startOneBased - 1, 0, n - 1);
  if (n < 2 || n > 8) {
    yield { kind: "hamiltonian", matrix: matrix.map((row) => row.slice()), labels: names, path: [], activeEdge: null, bestPath: [], checks: 0, calls: 0, result: "too many vertices", done: true, note: "Brute force supports 2 to 8 vertices" };
    return;
  }
  const others = range(0, n - 1).filter((city) => city !== start);
  const path = [start];
  let solution = null;
  let checks = 0;

  const frame = (activeEdge, note, done = false) => ({
    kind: "hamiltonian",
    matrix: matrix.map((row) => row.slice()),
    labels: names,
    path: path.slice(),
    activeEdge,
    bestPath: solution ? solution.slice() : [],
    checks,
    calls: checks,
    result: solution ? solution.map((city) => names[city]).join(" -> ") : "checking permutations",
    done,
    note,
  });

  function* permute(remaining) {
    if (solution) return true;
    if (!remaining.length) {
      checks++;
      const candidate = [...path, start];
      let valid = true;
      for (let i = 1; i < candidate.length; i++) {
        if (matrix[candidate[i - 1]][candidate[i]] === 0) {
          valid = false;
          yield frame([candidate[i - 1], candidate[i]], "Permutation rejected");
          break;
        }
      }
      if (valid) {
        solution = candidate;
        path.splice(0, path.length, ...candidate);
        yield frame([candidate.at(-2), start], "Permutation accepted");
        return true;
      }
      return false;
    }
    for (let i = 0; i < remaining.length; i++) {
      const city = remaining[i];
      checks++;
      path.push(city);
      yield frame([path.at(-2), city], `Try order ${names[city]}`);
      const next = remaining.slice(0, i).concat(remaining.slice(i + 1));
      if (yield* permute(next)) return true;
      path.pop();
      yield frame(null, "Next permutation");
    }
    return false;
  }

  yield frame(null, `Fix start ${names[start]}`);
  yield* permute(others);
  if (solution) path.splice(0, path.length, ...solution);
  yield frame(null, solution ? "Hamiltonian cycle found" : "No Hamiltonian cycle", true);
}

function* tspBacktrackingSteps(matrix, startOneBased, labels = null) {
  const n = matrix.length;
  const names = labels?.length === n ? labels.slice() : range(1, n).map((city) => `C${city}`);
  if (n < 2 || n > 8) {
    yield {
      kind: "tsp",
      matrix: matrix.map((row) => row.slice()),
      labels: names,
      path: [],
      activeEdge: null,
      bestPath: [],
      bestCost: null,
      cost: 0,
      checks: 0,
      calls: 0,
      result: n > 8 ? "too many cities" : "empty graph",
      done: true,
      note: "Exact TSP supports 2 to 8 cities",
    };
    return;
  }
  const start = clamp(startOneBased - 1, 0, n - 1);
  const path = [start];
  let bestPath = [];
  let bestCost = null;
  let checks = 0;

  const frame = (activeEdge, cost, note, done = false) => ({
    kind: "tsp",
    matrix: matrix.map((row) => row.slice()),
    labels: names,
    path: path.slice(),
    activeEdge,
    bestPath: bestPath.slice(),
    bestCost,
    cost,
    checks,
    calls: checks,
    result: bestCost == null ? `cost ${cost}` : `best ${bestCost}`,
    done,
    note,
  });

  function* search(cost) {
    if (path.length === n) {
      const back = matrix[path.at(-1)][start];
      checks++;
      yield frame([path.at(-1), start], cost + back, "Try return edge");
      if (path.at(-1) !== start && back > 0) {
        const total = cost + back;
        if (bestCost == null || total < bestCost) {
          bestCost = total;
          bestPath = [...path, start];
          yield frame([path.at(-1), start], total, "New best tour");
        }
      }
      return;
    }
    for (let city = 0; city < n; city++) {
      if (city === start || path.includes(city)) continue;
      const from = path.at(-1);
      const edgeCost = matrix[from][city];
      checks++;
      yield frame([from, city], cost, `Try ${names[city]}`);
      if (edgeCost <= 0) {
        yield frame([from, city], cost, "Reject missing edge");
        continue;
      }
      if (bestCost != null && cost + edgeCost >= bestCost) {
        yield frame([from, city], cost + edgeCost, "Prune by current best");
        continue;
      }
      path.push(city);
      yield frame([from, city], cost + edgeCost, `Go to ${names[city]}`);
      yield* search(cost + edgeCost);
      path.pop();
      yield frame([from, city], cost, "Backtrack");
    }
  }

  yield frame(null, 0, `Start from ${names[start]}`);
  yield* search(0);
  if (bestPath.length) path.splice(0, path.length, ...bestPath);
  yield frame(null, bestCost ?? 0, bestPath.length ? "Best tour found" : "No tour", true);
}

function* tspBranchBoundSteps(matrix, startOneBased, labels = null) {
  const n = matrix.length;
  const names = labels?.length === n ? labels.slice() : range(1, n).map((city) => `C${city}`);
  if (n < 2 || n > 8) {
    yield { kind: "tsp", matrix: matrix.map((row) => row.slice()), labels: names, path: [], activeEdge: null, bestPath: [], bestCost: null, cost: 0, checks: 0, calls: 0, result: "too many cities", done: true, note: "Branch and bound supports 2 to 8 cities" };
    return;
  }
  const start = clamp(startOneBased - 1, 0, n - 1);
  const minOutgoing = matrix.map((row) => {
    const candidates = row.filter((value) => value > 0);
    return candidates.length ? Math.min(...candidates) : Infinity;
  });
  const path = [start];
  let bestPath = [];
  let bestCost = null;
  let checks = 0;

  const lowerBound = (cost) => {
    const unvisited = range(0, n - 1).filter((city) => !path.includes(city));
    const estimate = unvisited.reduce((sum, city) => sum + minOutgoing[city], 0);
    return cost + (Number.isFinite(estimate) ? estimate : 0);
  };
  const frame = (activeEdge, cost, note, done = false) => ({
    kind: "tsp",
    matrix: matrix.map((row) => row.slice()),
    labels: names,
    path: path.slice(),
    activeEdge,
    bestPath: bestPath.slice(),
    bestCost,
    cost,
    checks,
    calls: checks,
    result: bestCost == null ? `bound ${lowerBound(cost)}` : `best ${bestCost}`,
    done,
    note,
  });

  function* search(cost) {
    const bound = lowerBound(cost);
    checks++;
    yield frame(null, cost, `Bound = ${bound}`);
    if (bestCost != null && bound >= bestCost) {
      yield frame(null, cost, "Prune by lower bound");
      return;
    }
    if (path.length === n) {
      const back = matrix[path.at(-1)][start];
      checks++;
      yield frame([path.at(-1), start], cost + back, "Try return edge");
      if (back > 0) {
        const total = cost + back;
        if (bestCost == null || total < bestCost) {
          bestCost = total;
          bestPath = [...path, start];
          yield frame([path.at(-1), start], total, "New best tour");
        }
      }
      return;
    }
    for (let city = 0; city < n; city++) {
      if (city === start || path.includes(city)) continue;
      const from = path.at(-1);
      const edgeCost = matrix[from][city];
      checks++;
      yield frame([from, city], cost, `Try ${names[city]}`);
      if (edgeCost <= 0) {
        yield frame([from, city], cost, "Reject missing edge");
        continue;
      }
      path.push(city);
      yield frame([from, city], cost + edgeCost, `Add ${names[city]}`);
      yield* search(cost + edgeCost);
      path.pop();
      yield frame([from, city], cost, "Backtrack");
    }
  }

  yield frame(null, 0, `Start from ${names[start]}`);
  yield* search(0);
  if (bestPath.length) path.splice(0, path.length, ...bestPath);
  yield frame(null, bestCost ?? 0, bestPath.length ? "Best tour found" : "No tour", true);
}

function* treeTraversalSteps(values, order) {
  const root = buildBST(values);
  const nodes = treeNodesFromRoot(root);
  const visited = [];
  let calls = 0;

  function* visit(node) {
    if (!node) return;
    calls++;
    yield { nodes: markTreeNodes(nodes, visited, node.id), active: node.id, calls, note: `Enter ${node.value}` };
    if (order === "pre") {
      visited.push(node.id);
      yield { nodes: markTreeNodes(nodes, visited, node.id), active: node.id, calls, result: traversalValues(nodes, visited), note: `Visit ${node.value}` };
    }
    yield* visit(node.left);
    if (order === "in") {
      visited.push(node.id);
      yield { nodes: markTreeNodes(nodes, visited, node.id), active: node.id, calls, result: traversalValues(nodes, visited), note: `Visit ${node.value}` };
    }
    yield* visit(node.right);
    if (order === "post") {
      visited.push(node.id);
      yield { nodes: markTreeNodes(nodes, visited, node.id), active: node.id, calls, result: traversalValues(nodes, visited), note: `Visit ${node.value}` };
    }
  }

  yield* visit(root);
  yield { nodes: markTreeNodes(nodes, visited, null), active: null, calls, result: traversalValues(nodes, visited), done: true, note: "Done" };
}

function* bstSearchSteps(values, target) {
  const root = buildBST(values);
  const nodes = treeNodesFromRoot(root);
  const visited = [];
  let current = root;
  let calls = 0;
  while (current) {
    calls++;
    visited.push(current.id);
    yield { nodes: markTreeNodes(nodes, visited, current.id), active: current.id, calls, result: target, note: `Compare ${target} with ${current.value}` };
    if (current.value === target) {
      yield { nodes: markTreeNodes(nodes, visited, current.id, current.id), active: current.id, calls, result: target, done: true, note: "Found" };
      return;
    }
    current = target < current.value ? current.left : current.right;
  }
  yield { nodes: markTreeNodes(nodes, visited, null), active: null, calls, result: target, done: true, note: "Not found" };
}

function* bstInsertSteps(values, value) {
  const insertedValues = values.slice();
  let root = buildBST(insertedValues);
  let nodes = treeNodesFromRoot(root);
  const visited = [];
  let current = root;
  let parent = null;
  let calls = 0;
  while (current) {
    calls++;
    parent = current;
    visited.push(current.id);
    yield { nodes: markTreeNodes(nodes, visited, current.id), active: current.id, calls, result: value, note: `Compare ${value} with ${current.value}` };
    if (current.value === value) {
      yield { nodes: markTreeNodes(nodes, visited, current.id), active: current.id, calls, result: value, done: true, note: "Already exists" };
      return;
    }
    current = value < current.value ? current.left : current.right;
  }
  insertedValues.push(value);
  root = buildBST(insertedValues);
  nodes = treeNodesFromRoot(root);
  const inserted = nodes.find((node) => node.value === value);
  yield { nodes: markTreeNodes(nodes, visited, inserted?.id, inserted?.id), active: inserted?.id, calls, result: value, done: true, note: `Insert ${value}${parent ? ` under ${parent.value}` : ""}` };
}

function* bstDeleteSteps(values, value) {
  const root = buildBST(values);
  const nodes = treeNodesFromRoot(root);
  const visited = [];
  let current = root;
  let calls = 0;
  while (current) {
    calls++;
    visited.push(current.id);
    yield { nodes: markTreeNodes(nodes, visited, current.id), active: current.id, calls, result: value, note: `Compare ${value} with ${current.value}` };
    if (current.value === value) break;
    current = value < current.value ? current.left : current.right;
  }
  if (!current) {
    yield { nodes: markTreeNodes(nodes, visited, null), active: null, calls, result: value, done: true, note: "Not found" };
    return;
  }
  const nextValues = values.filter((item, index) => item !== value || index !== values.indexOf(value));
  const nextNodes = treeNodesFromRoot(buildBST(nextValues));
  yield { nodes: markTreeNodes(nextNodes, [], null), active: null, calls, result: value, done: true, note: `Delete ${value}` };
}

function* heapifySteps(values) {
  const heap = values.slice();
  let calls = 0;
  yield { nodes: heapNodes(heap), active: null, calls, result: heap[0], note: "Start" };
  for (let i = Math.floor(heap.length / 2) - 1; i >= 0; i--) {
    yield* siftDownSteps(heap, i, heap.length, () => ++calls);
  }
  yield { nodes: heapNodes(heap, [], 0), active: 0, calls, result: heap[0], done: true, note: "Max heap built" };
}

function* heapInsertSteps(values, value) {
  const heap = values.slice();
  let calls = 0;
  for (let i = Math.floor(heap.length / 2) - 1; i >= 0; i--) yield* siftDownSteps(heap, i, heap.length, () => ++calls);
  heap.push(value);
  let i = heap.length - 1;
  yield { nodes: heapNodes(heap, [], i), active: i, calls, result: value, note: `Insert ${value}` };
  while (i > 0) {
    const parent = Math.floor((i - 1) / 2);
    calls++;
    yield { nodes: heapNodes(heap, [i, parent], i), active: i, calls, result: value, note: "Compare parent" };
    if (heap[parent] >= heap[i]) break;
    [heap[parent], heap[i]] = [heap[i], heap[parent]];
    i = parent;
    yield { nodes: heapNodes(heap, [i], i), active: i, calls, result: value, note: "Bubble up" };
  }
  yield { nodes: heapNodes(heap, [], i), active: i, calls, result: heap[0], done: true, note: "Done" };
}

function* heapDeleteSteps(values) {
  const heap = values.slice();
  let calls = 0;
  for (let i = Math.floor(heap.length / 2) - 1; i >= 0; i--) yield* siftDownSteps(heap, i, heap.length, () => ++calls);
  const removed = heap[0];
  heap[0] = heap.at(-1);
  heap.pop();
  yield { nodes: heapNodes(heap, [], 0), active: 0, calls, result: removed, note: `Remove max ${removed}` };
  if (heap.length) yield* siftDownSteps(heap, 0, heap.length, () => ++calls);
  yield { nodes: heapNodes(heap, [], 0), active: 0, calls, result: removed, done: true, note: "Done" };
}

function* siftDownSteps(heap, start, size, nextCall) {
  let root = start;
  while (true) {
    const left = root * 2 + 1;
    const right = left + 1;
    let largest = root;
    if (left < size && heap[left] > heap[largest]) largest = left;
    if (right < size && heap[right] > heap[largest]) largest = right;
    const calls = nextCall();
    yield { nodes: heapNodes(heap, [root, left, right].filter((index) => index < size), largest), active: largest, calls, result: heap[0], note: "Heapify" };
    if (largest === root) break;
    [heap[root], heap[largest]] = [heap[largest], heap[root]];
    root = largest;
    yield { nodes: heapNodes(heap, [root], root), active: root, calls, result: heap[0], note: "Swap" };
  }
}

function* linearSearchSteps(values, target) {
  let checks = 0;
  for (let i = 0; i < values.length; i++) {
    checks++;
    const found = values[i] === target;
    yield { array: values.slice(), active: [i], sorted: range(0, i - 1), checks, result: target, done: found, note: found ? "Found" : "Compare" };
    if (found) return;
  }
  yield { array: values.slice(), active: [], sorted: range(0, values.length - 1), checks, result: target, done: true, note: "Not found" };
}

function* binarySearchSteps(values, target) {
  const array = values.slice().sort((a, b) => a - b);
  let lo = 0;
  let hi = array.length - 1;
  let checks = 0;
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    checks++;
    yield { array, active: [mid], sorted: range(lo, hi), checks, result: target, note: `mid ${array[mid]}` };
    if (array[mid] === target) {
      yield { array, active: [mid], sorted: [mid], checks, result: target, done: true, note: "Found" };
      return;
    }
    if (array[mid] < target) lo = mid + 1;
    else hi = mid - 1;
  }
  yield { array, active: [], sorted: [], checks, result: target, done: true, note: "Not found" };
}

function* minMaxDivideSteps(values) {
  const nodes = [];
  let calls = 0;
  let id = 0;
  function* solve(lo, hi, depth, parent) {
    const node = { id: id++, parent, depth, label: `[${lo},${hi}]`, status: "active" };
    nodes.push(node);
    calls++;
    yield { nodes: nodes.slice(), active: node.id, calls, note: `Split ${lo}-${hi}` };
    if (lo === hi) {
      node.result = `${values[lo]}/${values[lo]}`;
      node.status = "done";
      yield { nodes: nodes.slice(), active: node.id, calls, result: node.result, note: "Single item" };
      return { min: values[lo], max: values[lo] };
    }
    if (hi === lo + 1) {
      const min = Math.min(values[lo], values[hi]);
      const max = Math.max(values[lo], values[hi]);
      node.result = `${min}/${max}`;
      node.status = "done";
      yield { nodes: nodes.slice(), active: node.id, calls, result: node.result, note: "Compare pair" };
      return { min, max };
    }
    const mid = Math.floor((lo + hi) / 2);
    const left = yield* solve(lo, mid, depth + 1, node.id);
    const right = yield* solve(mid + 1, hi, depth + 1, node.id);
    const min = Math.min(left.min, right.min);
    const max = Math.max(left.max, right.max);
    node.result = `${min}/${max}`;
    node.status = "done";
    yield { nodes: nodes.slice(), active: node.id, calls, result: node.result, note: "Combine min/max" };
    return { min, max };
  }
  const result = yield* solve(0, values.length - 1, 0, null);
  yield { nodes: nodes.slice(), active: null, calls, result: `min ${result.min}, max ${result.max}`, done: true, note: "Done" };
}

function* bigMultiplySteps(aText, bText) {
  const a = BigInt(aText);
  const b = BigInt(bText);
  const nodes = [{ id: 0, parent: null, depth: 0, label: `${aText} x ${bText}`, status: "active" }];
  let calls = 1;
  yield { nodes: nodes.slice(), active: 0, calls, note: "Split into digit products" };
  const digits = bText.split("").reverse();
  let sum = 0n;
  for (let i = 0; i < digits.length; i++) {
    const partial = a * BigInt(digits[i]) * 10n ** BigInt(i);
    sum += partial;
    nodes.push({ id: i + 1, parent: 0, depth: 1, label: `${aText}x${digits[i]}e${i}`, result: String(partial), status: "done" });
    calls++;
    yield { nodes: nodes.slice(), active: i + 1, calls, result: String(sum), note: "Partial product" };
  }
  nodes[0].result = String(a * b);
  nodes[0].status = "done";
  yield { nodes: nodes.slice(), active: 0, calls, result: String(a * b), done: true, note: "Done" };
}

function* karatsubaSteps(aText, bText) {
  let id = 0;
  const nodes = [];
  let calls = 0;
  function* solve(x, y, depth, parent) {
    const node = { id: id++, parent, depth, label: `${x}x${y}`, status: "active" };
    nodes.push(node);
    calls++;
    yield { nodes: nodes.slice(-80), active: node.id, calls, note: "Split" };
    if (x < 10n || y < 10n) {
      node.result = String(x * y);
      node.status = "done";
      yield { nodes: nodes.slice(-80), active: node.id, calls, result: node.result, note: "Base multiply" };
      return x * y;
    }
    const n = Math.max(String(x).length, String(y).length);
    const m = Math.floor(n / 2);
    const base = 10n ** BigInt(m);
    const highX = x / base;
    const lowX = x % base;
    const highY = y / base;
    const lowY = y % base;
    const z0 = yield* solve(lowX, lowY, depth + 1, node.id);
    const z2 = yield* solve(highX, highY, depth + 1, node.id);
    const z1 = yield* solve(lowX + highX, lowY + highY, depth + 1, node.id);
    const result = z2 * base * base + (z1 - z2 - z0) * base + z0;
    node.result = String(result);
    node.status = "done";
    yield { nodes: nodes.slice(-80), active: node.id, calls, result: node.result, note: "Combine" };
    return result;
  }
  const result = yield* solve(BigInt(aText), BigInt(bText), 0, null);
  yield { nodes: nodes.slice(-80), active: null, calls, result: String(result), done: true, note: "Done" };
}

function* strassenSteps(a, b) {
  const [[a11, a12], [a21, a22]] = a;
  const [[b11, b12], [b21, b22]] = b;
  const products = [
    ["M1", (a11 + a22) * (b11 + b22)],
    ["M2", (a21 + a22) * b11],
    ["M3", a11 * (b12 - b22)],
    ["M4", a22 * (b21 - b11)],
    ["M5", (a11 + a12) * b22],
    ["M6", (a21 - a11) * (b11 + b12)],
    ["M7", (a12 - a22) * (b21 + b22)],
  ];
  const table = products.map(([name]) => [name, ""]);
  for (let i = 0; i < products.length; i++) {
    table[i][1] = products[i][1];
    yield { table: table.map((row) => row.slice()), active: [i, 1], writes: i + 1, note: products[i][0] };
  }
  const m1 = products[0][1];
  const m2 = products[1][1];
  const m3 = products[2][1];
  const m4 = products[3][1];
  const m5 = products[4][1];
  const m6 = products[5][1];
  const m7 = products[6][1];
  const result = [
    [m1 + m4 - m5 + m7, m3 + m5],
    [m2 + m4, m1 - m2 + m3 + m6],
  ];
  yield { table: result, active: [0, 0], writes: 7, result: matrixToText(result), done: true, note: "Result matrix" };
}

function* tournamentScheduleSteps(teamCount) {
  const originalN = teamCount;
  const hasDummy = originalN % 2 !== 0;
  const n = hasDummy ? originalN + 1 : originalN;
  const printCol = n;
  const table = Array.from({ length: n }, () => Array(n + 1).fill("-"));
  let frames = [];
  let writes = 0;
  let displayTeams = n;
  let displayDays = printCol - 1;

  const makeRowLabels = () => range(1, displayTeams).map((team) => (hasDummy && team === n ? "Bye" : `T${team}`));
  const makeColLabels = () => range(1, displayDays).map((day) => `D${day}`);

  const visibleTable = () => table
    .slice(0, displayTeams)
    .map((teamRow) => teamRow.slice(1, displayDays + 1).map((value) => (hasDummy && value === n ? "-" : value)));
  const pushFrame = (row, col, block, note, done = false) => ({
    table: visibleTable(),
    active: [clamp(row, 0, displayTeams - 1), clamp(col - 1, 0, displayDays - 1)],
    rowLabels: makeRowLabels(),
    colLabels: makeColLabels(),
    writes,
    block: visibleTournamentBlock(block, displayTeams, displayDays + 1),
    result: hasDummy && displayTeams === n
      ? `${originalN} teams + bye, ${displayDays} days`
      : `${originalN} teams, ${displayDays} days`,
    done,
    note,
  });

  function setCell(row, col, value, block, note) {
    while (table.length <= row) table.push(Array(printCol + 1).fill("-"));
    while (table[row].length <= col) table[row].push("-");
    table[row][col] = value;
    writes++;
    if (row < displayTeams && col > 0 && col <= displayDays) frames.push(pushFrame(row, col, block, note));
  }

  for (let i = 0; i < n; i++) setCell(i, 0, i + 1, { rowLow: i, rowHigh: i, cLow: 0, cHigh: 0 }, "Set team label");
  if (hasDummy) frames.push(pushFrame(n - 1, 1, { rowLow: n - 1, rowHigh: n - 1, cLow: 1, cHigh: displayDays }, "Odd team count: add one dummy bye team"));

  function makePlan(rHigh, rLow, cHigh, size, flag = false) {
    if (size % 2 !== 0) flag = true;
    if (size === 2) {
      const block = { rowLow: rLow, rowHigh: rLow + 1, cLow: 1, cHigh: 1 };
      setCell(rLow, 1, rLow + 2, block, "Base 2-team match");
      setCell(rLow + 1, 1, rLow + 1, block, "Base 2-team match");
      return;
    }
    if (size === 3) {
      const block = { rowLow: rLow, rowHigh: rLow + 2, cLow: 1, cHigh: 3 };
      const rows = [
        [rLow + 2, rLow + 3, "-"],
        [rLow + 1, "-", rLow + 3],
        ["-", rLow + 1, rLow + 2],
      ];
      for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) setCell(rLow + r, c + 1, rows[r][c], block, "Base 3-team schedule");
      }
      return;
    }

    if (flag) {
      for (const row of table) row.push("-");
      table.push(Array(size + 2).fill("-"));
      setCell(table.length - 1, 0, size + 1, { rowLow: rLow, rowHigh: rHigh + 1, cLow: 1, cHigh: cHigh + 1 }, "Add helper bye team inside odd subproblem");
      makePlan(rHigh + 1, rLow, size + 1, size + 1);
      complete(rLow, rHigh, 1, cHigh + 1);
      return;
    }

    const mid = Math.floor((rHigh + rLow) / 2);
    const cLow = Math.floor(size / 2);
    makePlan(mid, rLow, cLow, Math.floor(size / 2));

    let sourceRow = 0;
    const copyHigh = size === 12 ? mid : mid + 1;
    for (let row = mid + 1; row <= rHigh; row++) {
      for (let col = rLow; col <= copyHigh; col++) {
        if (table[sourceRow][col] !== "-") {
          setCell(row, col, table[sourceRow][col] + mid + 1, { rowLow: mid + 1, rowHigh: rHigh, cLow: col, cHigh: col }, "Copy lower square");
        }
      }
      sourceRow++;
    }

    if (Math.floor(size / 2) % 2 !== 0) {
      const block = { rowLow: rLow, rowHigh: mid, cLow: cLow + 1, cHigh };
      for (let col = cLow + 1; col <= cHigh; col++) setCell(rLow, col, rHigh - col + cLow + 2, block, "Fill upper-right square");
      for (let row = rLow + 1; row <= mid; row++) {
        for (let col = cLow + 2; col <= cHigh; col++) setCell(row, col, table[row - 1][col - 1], block, "Rotate upper-right square");
        setCell(row, cLow + 1, table[row - 1][cHigh], block, "Rotate upper-right square");
      }
      fill(rLow, mid, 1, cHigh);
    } else {
      const block = { rowLow: rLow, rowHigh: mid, cLow, cHigh: cHigh - 1 };
      let value = rHigh + 1;
      for (let col = cLow; col < cHigh; col++) {
        setCell(rLow, col, value, block, "Fill upper-right square");
        value--;
      }
      for (let row = rLow + 1; row <= mid; row++) {
        for (let col = cLow + 1; col < cHigh; col++) setCell(row, col, table[row - 1][col - 1], block, "Rotate upper-right square");
        setCell(row, cLow, table[row - 1][cHigh - 1], block, "Rotate upper-right square");
      }
    }

    for (let row = mid + 1; row <= rHigh; row++) {
      for (let col = 1; col < cHigh; col++) {
        let mirroredRow = -1;
        for (let scan = 0; scan <= mid; scan++) {
          if (table[scan][col] === table[row][0]) mirroredRow = scan;
        }
        if (table[row][col] === "-") setCell(row, col, mirroredRow + 1, { rowLow: mid + 1, rowHigh: rHigh, cLow: 1, cHigh: cHigh - 1 }, "Mirror opponent from upper square");
      }
    }
  }

  function complete(rLow, rHigh, cLow, cHigh) {
    const block = { rowLow: rLow, rowHigh: rHigh, cLow, cHigh };
    for (let row = rLow; row <= rHigh; row++) {
      for (let col = cLow; col <= cHigh; col++) {
        if (table[row][col] === rHigh + 2) setCell(row, col, "-", block, "Replace dummy team with bye");
      }
    }
  }

  function fill(rLow, rHigh, cLow, cHigh) {
    const block = { rowLow: rLow, rowHigh: rHigh, cLow, cHigh: cHigh - 1 };
    for (let row = rLow; row <= rHigh; row++) {
      for (let col = cLow; col < cHigh; col++) {
        if (table[row][col] === "-") setCell(row, col, table[row][cHigh], block, "Fill empty slot from last column");
      }
    }
  }

  function isValidSchedule() {
    const rows = visibleTable();
    const pairs = new Set();
    for (let team = 0; team < originalN; team++) {
      const played = new Set();
      for (let day = 0; day < displayDays; day++) {
        const opponent = rows[team][day];
        if (opponent === "-") continue;
        const opponentNumber = Number(opponent);
        if (!Number.isInteger(opponentNumber) || opponentNumber < 1 || opponentNumber > originalN) return false;
        if (opponentNumber === team + 1) return false;
        if (rows[opponentNumber - 1]?.[day] !== team + 1) return false;
        played.add(opponentNumber);
        if (team + 1 < opponentNumber) pairs.add(`${team + 1}-${opponentNumber}`);
      }
      if (played.size !== originalN - 1) return false;
    }
    return pairs.size === (originalN * (originalN - 1)) / 2;
  }

  function buildRoundRobinFallback() {
    for (let row = 0; row < table.length; row++) {
      while (table[row].length < printCol) table[row].push("-");
      table[row].fill("-");
    }
    frames = [];
    writes = 0;
    displayTeams = hasDummy ? n : originalN;
    displayDays = hasDummy ? originalN : originalN - 1;
    const teams = range(1, originalN);
    if (hasDummy) teams.push(0);
    const teamSlots = teams.slice();
    const rounds = teamSlots.length - 1;
    frames.push(pushFrame(0, 1, { rowLow: 0, rowHigh: displayTeams - 1, cLow: 1, cHigh: displayDays }, "Divide-and-conquer schedule needed repair; use verified round-robin fallback"));
    for (let day = 1; day <= rounds; day++) {
      const block = { rowLow: 0, rowHigh: displayTeams - 1, cLow: day, cHigh: day };
      for (let pair = 0; pair < teamSlots.length / 2; pair++) {
        const a = teamSlots[pair];
        const b = teamSlots[teamSlots.length - 1 - pair];
        if (a !== 0 && b !== 0) {
          setCell(a - 1, day, b, block, "Assign round-robin match");
          setCell(b - 1, day, a, block, "Mirror round-robin match");
        }
      }
      const fixed = teamSlots[0];
      const last = teamSlots.pop();
      teamSlots.splice(1, 0, last);
      teamSlots[0] = fixed;
    }
    if (hasDummy) {
      displayTeams = originalN;
      frames.push(pushFrame(0, displayDays, { rowLow: 0, rowHigh: originalN - 1, cLow: 1, cHigh: displayDays }, "Remove dummy team row from repaired final schedule"));
    }
  }

  frames.push(pushFrame(0, 1, { rowLow: 0, rowHigh: n - 1, cLow: 1, cHigh: printCol - 1 }, "Start divide-and-conquer tournament plan"));
  makePlan(n - 1, 0, n, n);
  if (hasDummy) {
    const block = { rowLow: 0, rowHigh: n - 1, cLow: 1, cHigh: displayDays };
    for (let row = 0; row < n; row++) {
      for (let col = 1; col <= displayDays; col++) {
        if (table[row][col] === n) setCell(row, col, "-", block, "Remove dummy team: mark bye day");
      }
    }
    displayTeams = originalN;
    frames.push(pushFrame(0, displayDays, { rowLow: 0, rowHigh: originalN - 1, cLow: 1, cHigh: displayDays }, "Remove dummy team row from final schedule"));
  }
  if (!isValidSchedule()) buildRoundRobinFallback();
  for (const frame of frames) yield frame;
  yield pushFrame(0, displayDays, { rowLow: 0, rowHigh: displayTeams - 1, cLow: 1, cHigh: displayDays }, "Schedule table ready", true);
}

function visibleTournamentBlock(block, teamCount, printCol) {
  if (!block) return null;
  const startRow = clamp(block.rowLow, 0, teamCount - 1);
  const endRow = clamp(block.rowHigh, 0, teamCount - 1);
  const startCol = Math.max(1, block.cLow);
  const endCol = Math.min(printCol - 1, block.cHigh);
  if (startCol > endCol) return null;
  if (startRow > endRow) return null;
  return {
    row: startRow,
    col: startCol - 1,
    rows: endRow - startRow + 1,
    cols: endCol - startCol + 1,
  };
}

function* hanoiSteps(disks) {
  const towers = {
    A: range(1, disks).reverse(),
    B: [],
    C: [],
  };
  const stack = [];
  let calls = 0;
  let moves = 0;

  const snapshot = (note, activeMove = null, done = false) => ({
    towers: cloneTowers(towers),
    stack: stack.slice(),
    activeMove,
    disks,
    calls,
    moves,
    done,
    note,
  });

  function* solve(n, from, aux, to, depth) {
    calls++;
    stack.push({ n, from, aux, to, depth });
    yield snapshot(`Call H(${n}, ${from}->${to})`);
    if (n === 1) {
      moveDisk(from, to);
      moves++;
      yield snapshot(`Move ${from}->${to}`, { from, to });
    } else {
      yield* solve(n - 1, from, to, aux, depth + 1);
      moveDisk(from, to);
      moves++;
      yield snapshot(`Move ${from}->${to}`, { from, to });
      yield* solve(n - 1, aux, from, to, depth + 1);
    }
    stack.pop();
  }

  function moveDisk(from, to) {
    const disk = towers[from].pop();
    towers[to].push(disk);
  }

  yield snapshot("Ready");
  yield* solve(disks, "A", "B", "C", 0);
  yield snapshot("Done", null, true);
}

function* gcdSteps(a, b) {
  const nodes = [];
  let calls = 0;
  let id = 0;

  function* gcd(x, y, depth, parent) {
    const node = { id: id++, parent, depth, label: `gcd(${x}, ${y})`, status: "active" };
    nodes.push(node);
    calls++;
    yield { nodes: nodes.slice(), active: node.id, calls, note: node.label };
    if (y === 0) {
      node.result = x;
      node.status = "done";
      yield { nodes: nodes.slice(), active: node.id, calls, result: x, done: false, note: `return ${x}` };
      return x;
    }
    const result = yield* gcd(y, x % y, depth + 1, node.id);
    node.result = result;
    node.status = "done";
    yield { nodes: nodes.slice(), active: node.id, calls, result, note: `return ${result}` };
    return result;
  }

  const result = yield* gcd(a, b, 0, null);
  yield { nodes: nodes.slice(), active: null, calls, result, done: true, note: `gcd = ${result}` };
}

function* factorialSteps(n) {
  const nodes = [];
  let calls = 0;
  let id = 0;

  function* factorial(value, depth, parent) {
    const node = { id: id++, parent, depth, label: `${value}!`, status: "active" };
    nodes.push(node);
    calls++;
    yield { nodes: nodes.slice(), active: node.id, calls, note: `call ${value}!` };
    if (value <= 1) {
      node.result = 1;
      node.status = "done";
      yield { nodes: nodes.slice(), active: node.id, calls, result: 1, note: "base = 1" };
      return 1;
    }
    const partial = yield* factorial(value - 1, depth + 1, node.id);
    node.result = value * partial;
    node.status = "done";
    yield { nodes: nodes.slice(), active: node.id, calls, result: node.result, note: `${value} x ${partial}` };
    return node.result;
  }

  const result = yield* factorial(n, 0, null);
  yield { nodes: nodes.slice(), active: null, calls, result, done: true, note: `${n}! = ${result}` };
}

function* fibRecursiveSteps(n) {
  const nodes = [];
  let calls = 0;
  let id = 1;

  function* fib(value, depth, parent) {
    const frame = { n: value, depth, parent, id: id++, label: `fib(${value})`, status: "active" };
    nodes.push(frame);
    calls++;
    yield { nodes: nodes.slice(-80), active: frame.id, calls, note: `fib(${frame.n})` };
    if (value < 2) {
      frame.result = value;
      frame.status = "done";
      yield { nodes: nodes.slice(-80), active: frame.id, calls, result: value, note: `return ${value}` };
      return value;
    }
    const left = yield* fib(value - 1, depth + 1, frame.id);
    const right = yield* fib(value - 2, depth + 1, frame.id);
    frame.result = left + right;
    frame.status = "done";
    yield { nodes: nodes.slice(-80), active: frame.id, calls, result: frame.result, note: `${left} + ${right}` };
    return frame.result;
  }

  const result = yield* fib(n, 0, null);
  yield { nodes: nodes.slice(-80), active: null, calls, result, done: true, note: `fib(${n}) = ${result}` };
}

function* fibMemoSteps(n) {
  const memo = new Map();
  const nodes = [];
  let calls = 0;
  let id = 1;

  function* fib(value, depth, parent) {
    const frame = { n: value, depth, parent, id: id++, label: `fib(${value})`, status: "active" };
    nodes.push(frame);
    calls++;
    if (memo.has(value)) {
      frame.result = memo.get(value);
      frame.status = "memo";
      yield { nodes: nodes.slice(-80), active: frame.id, memo: new Map(memo), calls, result: frame.result, note: "Memo" };
      return frame.result;
    }
    yield { nodes: nodes.slice(-80), active: frame.id, memo: new Map(memo), calls, note: `fib(${value})` };
    if (value < 2) {
      memo.set(value, value);
      frame.result = value;
      frame.status = "done";
      yield { nodes: nodes.slice(-80), active: frame.id, memo: new Map(memo), calls, result: value, note: "Base case" };
      return value;
    }
    const left = yield* fib(value - 1, depth + 1, frame.id);
    const right = yield* fib(value - 2, depth + 1, frame.id);
    frame.result = left + right;
    frame.status = "done";
    memo.set(value, frame.result);
    yield { nodes: nodes.slice(-80), active: frame.id, memo: new Map(memo), calls, result: frame.result, note: "Store" };
    return frame.result;
  }

  const result = yield* fib(n, 0, null);
  yield { nodes: nodes.slice(-80), active: null, memo, calls, result, done: true, note: `fib(${n}) = ${result}` };
}

function range(start, end) {
  if (end < start) return [];
  return Array.from({ length: end - start + 1 }, (_, index) => start + index);
}

function cloneMatrix(matrix) {
  return matrix.map((row) => row.slice());
}

function cloneTowers(towers) {
  return Object.fromEntries(Object.entries(towers).map(([key, disks]) => [key, disks.slice()]));
}

function buildBST(values) {
  let nextId = 0;
  let root = null;
  for (const value of values) {
    const node = { id: nextId++, value, left: null, right: null, parent: null, depth: 0 };
    if (!root) {
      root = node;
      continue;
    }
    let current = root;
    while (current) {
      if (value < current.value) {
        if (!current.left) {
          node.parent = current;
          node.depth = current.depth + 1;
          current.left = node;
          break;
        }
        current = current.left;
      } else {
        if (!current.right) {
          node.parent = current;
          node.depth = current.depth + 1;
          current.right = node;
          break;
        }
        current = current.right;
      }
    }
  }
  return root;
}

function treeNodesFromRoot(root) {
  const nodes = [];
  function walk(node) {
    if (!node) return;
    nodes.push({
      id: node.id,
      parent: node.parent?.id ?? null,
      depth: node.depth,
      label: String(node.value),
      value: node.value,
      status: "idle",
    });
    walk(node.left);
    walk(node.right);
  }
  walk(root);
  return nodes;
}

function treeNodesFromLevelOrder(values) {
  return values.map((value, index) => ({
    id: index,
    parent: index === 0 ? null : Math.floor((index - 1) / 2),
    depth: Math.floor(Math.log2(index + 1)),
    label: String(value),
    value,
    left: index * 2 + 1 < values.length ? index * 2 + 1 : null,
    right: index * 2 + 2 < values.length ? index * 2 + 2 : null,
    status: "idle",
  }));
}

function markTreeNodes(nodes, visited = [], active = null, success = null) {
  const visitedSet = new Set(visited);
  return nodes.map((node) => ({
    ...node,
    status: node.id === success ? "done" : visitedSet.has(node.id) ? "memo" : "idle",
    result: node.id === success ? node.value : undefined,
    active: node.id === active,
  }));
}

function traversalValues(nodes, ids) {
  const byId = new Map(nodes.map((node) => [node.id, node.value]));
  return ids.map((id) => byId.get(id)).join(", ");
}

function heapNodes(heap, highlighted = [], active = null) {
  const highlights = new Set(highlighted);
  return heap.map((value, index) => ({
    id: index,
    parent: index === 0 ? null : Math.floor((index - 1) / 2),
    depth: Math.floor(Math.log2(index + 1)),
    label: String(value),
    value,
    status: highlights.has(index) ? "memo" : "idle",
    active: index === active,
  }));
}

function isCompatible(items) {
  const sorted = items.slice().sort((a, b) => a.finish - b.finish);
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i].start < sorted[i - 1].finish) return false;
  }
  return true;
}

function makeRunner(algorithmId, baseData) {
  const info = algorithmInfo[algorithmId];
  let steps;
  if (algorithmId === "bubbleSort") steps = bubbleSortSteps(baseData.array);
  if (algorithmId === "selectionSort") steps = selectionSortSteps(baseData.array);
  if (algorithmId === "insertionSort") steps = insertionSortSteps(baseData.array);
  if (algorithmId === "mergeSort") steps = mergeSortSteps(baseData.array);
  if (algorithmId === "quickSort") steps = quickSortSteps(baseData.array);
  if (algorithmId === "heapSort") steps = heapSortSteps(baseData.array);
  if (algorithmId === "bfs") steps = bfsSteps(baseData.graph);
  if (algorithmId === "dfs") steps = dfsSteps(baseData.graph);
  if (algorithmId === "dijkstra") steps = dijkstraSteps(baseData.graph);
  if (algorithmId === "bellmanFord") steps = bellmanFordSteps(baseData.graph);
  if (algorithmId === "kruskal") steps = kruskalSteps(baseData.graph);
  if (algorithmId === "prim") steps = primSteps(baseData.graph);
  if (algorithmId === "floydWarshall") steps = floydWarshallSteps(baseData.graph);
  if (algorithmId === "preorderTraversal") steps = treeTraversalSteps(baseData.tree.values, "pre");
  if (algorithmId === "inorderTraversal") steps = treeTraversalSteps(baseData.tree.values, "in");
  if (algorithmId === "postorderTraversal") steps = treeTraversalSteps(baseData.tree.values, "post");
  if (algorithmId === "bstSearch") steps = bstSearchSteps(baseData.tree.values, baseData.tree.searchValue);
  if (algorithmId === "bstInsert") steps = bstInsertSteps(baseData.tree.values, baseData.tree.insertValue);
  if (algorithmId === "bstDelete") steps = bstDeleteSteps(baseData.tree.values, baseData.tree.deleteValue);
  if (algorithmId === "heapifyTree") steps = heapifySteps(baseData.tree.values);
  if (algorithmId === "heapInsert") steps = heapInsertSteps(baseData.tree.values, baseData.tree.insertValue);
  if (algorithmId === "heapDelete") steps = heapDeleteSteps(baseData.tree.values);
  if (algorithmId === "linearSearch") steps = linearSearchSteps(baseData.search.values, baseData.search.target);
  if (algorithmId === "binarySearch") steps = binarySearchSteps(baseData.search.values, baseData.search.target);
  if (algorithmId === "dcBinarySearch") steps = binarySearchSteps(baseData.divide.values, baseData.divide.target);
  if (algorithmId === "dcMinMax") steps = minMaxDivideSteps(baseData.divide.values);
  if (algorithmId === "bigMultiply") steps = bigMultiplySteps(baseData.divide.bigA, baseData.divide.bigB);
  if (algorithmId === "karatsuba") steps = karatsubaSteps(baseData.divide.bigA, baseData.divide.bigB);
  if (algorithmId === "strassen") steps = strassenSteps(baseData.divide.matrixA, baseData.divide.matrixB);
  if (algorithmId === "tournamentSchedule") steps = tournamentScheduleSteps(baseData.divide.teams);
  if (algorithmId === "matrixChainOrder") steps = matrixChainSteps(baseData.dynamic.matrixDimensions);
  if (algorithmId === "knapsackDp") steps = knapsackDpSteps(baseData.dynamic);
  if (algorithmId === "knapsackMemo") steps = knapsackMemoSteps(baseData.dynamic);
  if (algorithmId === "knapsackBranchBound") steps = knapsackBranchBoundSteps(baseData.dynamic);
  if (algorithmId === "unboundedKnapsack") steps = unboundedKnapsackSteps(baseData.dynamic);
  if (algorithmId === "lcs") steps = lcsSteps(baseData.dynamic.lcsA, baseData.dynamic.lcsB);
  if (algorithmId === "lis") steps = lisSteps(baseData.dynamic.lisValues);
  if (algorithmId === "maxTreePathSum") steps = maxTreePathSumSteps(baseData.dynamic.treeValues);
  if (algorithmId === "activityGreedy") steps = activityGreedySteps(baseData.greedy.activities);
  if (algorithmId === "activityBrute") steps = activityBruteSteps(baseData.greedy.activities);
  if (algorithmId === "fractionalKnapsack") steps = fractionalKnapsackSteps(baseData.greedy);
  if (algorithmId === "jobSequencing") steps = jobSequencingSteps(baseData.greedy.jobs);
  if (algorithmId === "huffmanCoding") steps = huffmanSteps(baseData.greedy.huffman);
  if (algorithmId === "tspNearestNeighbor") {
    steps = state.topic === "graph"
      ? tspNearestNeighborSteps(baseData.backtracking.tspMatrix, baseData.backtracking.tspStart, baseData.backtracking.labels)
      : tspNearestNeighborSteps(baseData.greedy.tspMatrix, baseData.greedy.tspStart);
  }
  if (algorithmId === "nQueen") steps = nQueenSteps(baseData.backtracking.nQueenSize);
  if (algorithmId === "subsetSum") steps = subsetSumSteps(baseData.backtracking.subsetValues, baseData.backtracking.subsetTarget);
  if (algorithmId === "hamiltonianCycle") steps = hamiltonianCycleSteps(baseData.backtracking.hamiltonianMatrix, baseData.backtracking.tspStart, baseData.backtracking.labels);
  if (algorithmId === "hamiltonianBrute") steps = hamiltonianBruteSteps(baseData.backtracking.hamiltonianMatrix, baseData.backtracking.tspStart, baseData.backtracking.labels);
  if (algorithmId === "tspBacktracking") steps = tspBacktrackingSteps(baseData.backtracking.tspMatrix, baseData.backtracking.tspStart, baseData.backtracking.labels);
  if (algorithmId === "tspBranchBound") steps = tspBranchBoundSteps(baseData.backtracking.tspMatrix, baseData.backtracking.tspStart, baseData.backtracking.labels);
  if (algorithmId === "hanoi") steps = hanoiSteps(baseData.recursion.hanoiDisks);
  if (algorithmId === "gcdRecursive") steps = gcdSteps(baseData.recursion.gcdA, baseData.recursion.gcdB);
  if (algorithmId === "factorialRecursive") steps = factorialSteps(baseData.recursion.factorialN);
  if (algorithmId === "fibRecursive") steps = fibRecursiveSteps(baseData.recursion.fibRecursiveN);
  if (algorithmId === "fibMemo") steps = fibMemoSteps(baseData.recursion.fibMemoN);

  const runner = {
    id: algorithmId,
    info,
    steps,
    frame: info.type === "bars" ? { array: (state.topic === "searches" ? baseData.search.values : state.topic === "divide" ? baseData.divide.values : baseData.array).slice(), active: [], sorted: [], comparisons: 0, writes: 0, checks: 0, note: "Ready" } : null,
    done: false,
    ticks: 0,
    running: false,
    timer: null,
    history: [],
    historyIndex: 0,
    card: null,
    canvas: null,
    ctx: null,
  };
  runner.history = [captureRunnerState(runner)];
  return runner;
}

function buildBaseData() {
  const graph = state.topic === "graph"
    ? cloneGraph(getWorkingGraph())
    : state.topic === "compare"
      ? graphFromMatrix(state.compareInputs.graphMatrix, state.compareInputs.graphSource, state.compareInputs.graphTarget)
      : makeGraph();
  const graphBacktrackingInputs = backtrackingInputsFromGraph(graph);
  const dynamicInputs = state.topic === "compare"
    ? {
        ...state.dynamicInputs,
        capacity: state.compareInputs.capacity,
        items: state.compareInputs.items.map((item) => ({ ...item })),
      }
    : state.topic === "branchBound"
      ? {
          ...state.dynamicInputs,
          capacity: state.branchBoundInputs.capacity,
          items: state.branchBoundInputs.items.map((item) => ({ ...item })),
        }
    : state.dynamicInputs;
  const greedyInputs = state.topic === "compare"
    ? {
        ...state.greedyInputs,
        activities: state.compareInputs.activities.map((activity) => ({ ...activity })),
        items: state.compareInputs.items.map((item) => ({ ...item })),
        capacity: state.compareInputs.capacity,
        tspMatrix: state.compareInputs.tspMatrix.map((row) => row.slice()),
        tspStart: state.compareInputs.tspStart,
      }
    : state.greedyInputs;
  return {
    array: makeArray(state.size, state.dataset),
    graph,
    knapsack: makeKnapsack(),
    activities: greedyInputs.activities.map((activity) => ({ ...activity })),
    greedy: {
      activities: greedyInputs.activities.map((activity) => ({ ...activity })),
      items: greedyInputs.items.map((item) => ({ ...item })),
      capacity: greedyInputs.capacity,
      jobs: greedyInputs.jobs.map((job) => ({ ...job })),
      huffman: greedyInputs.huffman.map((item) => ({ ...item })),
      tspMatrix: greedyInputs.tspMatrix.map((row) => row.slice()),
      tspStart: greedyInputs.tspStart,
    },
    backtracking: {
      nQueenSize: state.backtrackingInputs.nQueenSize,
      subsetValues: state.backtrackingInputs.subsetValues.slice(),
      subsetTarget: state.backtrackingInputs.subsetTarget,
      labels: state.topic === "graph" ? graphBacktrackingInputs.labels.slice() : null,
      hamiltonianMatrix: (state.topic === "graph" ? graphBacktrackingInputs.hamiltonianMatrix : state.topic === "compare" ? state.compareInputs.hamiltonianMatrix : state.backtrackingInputs.hamiltonianMatrix).map((row) => row.slice()),
      tspMatrix: (state.topic === "graph" ? graphBacktrackingInputs.tspMatrix : state.topic === "compare" ? state.compareInputs.tspMatrix : state.topic === "branchBound" ? state.branchBoundInputs.tspMatrix : state.backtrackingInputs.tspMatrix).map((row) => row.slice()),
      tspStart: state.topic === "graph" ? graphBacktrackingInputs.tspStart : state.topic === "compare" ? state.compareInputs.tspStart : state.topic === "branchBound" ? state.branchBoundInputs.tspStart : state.backtrackingInputs.tspStart,
    },
    recursion: { ...state.recursionInputs },
    tree: {
      values: state.treeInputs.values.slice(),
      searchValue: state.treeInputs.searchValue,
      insertValue: state.treeInputs.insertValue,
      deleteValue: state.treeInputs.deleteValue,
    },
    search: {
      values: state.searchInputs.values.slice(),
      target: state.searchInputs.target,
    },
    divide: {
      values: state.divideInputs.values.slice(),
      target: state.divideInputs.target,
      bigA: state.divideInputs.bigA,
      bigB: state.divideInputs.bigB,
      matrixA: state.divideInputs.matrixA.map((row) => row.slice()),
      matrixB: state.divideInputs.matrixB.map((row) => row.slice()),
      teams: state.divideInputs.teams,
    },
    dynamic: {
      matrixDimensions: dynamicInputs.matrixDimensions.slice(),
      lcsA: dynamicInputs.lcsA,
      lcsB: dynamicInputs.lcsB,
      lisValues: dynamicInputs.lisValues.slice(),
      treeValues: dynamicInputs.treeValues.slice(),
      capacity: dynamicInputs.capacity,
      items: dynamicInputs.items.map((item) => ({ ...item })),
    },
  };
}

function renderCategories() {
  els.categoryList.innerHTML = "";
  for (const topic of topics) {
    const button = document.createElement("button");
    button.className = `category-button${topic.id === state.topic ? " active" : ""}`;
    button.type = "button";
    button.innerHTML = `
      <span class="category-icon">${topic.icon}</span>
      <span>
        <span class="category-title">${topic.title}</span>
        <span class="category-subtitle">${topic.subtitle}</span>
      </span>
    `;
    button.addEventListener("click", () => {
      state.topic = topic.id;
      stop();
      reset(true);
    });
    els.categoryList.append(button);
  }
}

function renderComparisonPanel() {
  const topic = topics.find((item) => item.id === state.topic);
  if (state.topic === "about") {
    els.sortingPanel.hidden = true;
    els.recursionPanel.hidden = true;
    els.treePanel.hidden = true;
    els.searchPanel.hidden = true;
    els.dividePanel.hidden = true;
    els.dynamicPanel.hidden = true;
    els.greedyPanel.hidden = true;
    els.comparePanel.hidden = true;
    els.backtrackingPanel.hidden = true;
    els.branchBoundPanel.hidden = true;
    els.graphPanel.hidden = true;
    els.comparisonPanel.hidden = true;
    els.aboutPanel.hidden = false;
    return;
  }
  els.aboutPanel.hidden = true;
  els.sortingPanel.hidden = state.topic !== "sorting";
  els.recursionPanel.hidden = state.topic !== "recursion";
  els.treePanel.hidden = state.topic !== "trees";
  els.searchPanel.hidden = state.topic !== "searches";
  els.dividePanel.hidden = state.topic !== "divide";
  els.dynamicPanel.hidden = state.topic !== "dynamic";
  els.greedyPanel.hidden = state.topic !== "greedy";
  els.comparePanel.hidden = state.topic !== "compare";
  els.backtrackingPanel.hidden = state.topic !== "backtracking";
  els.branchBoundPanel.hidden = state.topic !== "branchBound";
  els.graphPanel.hidden = state.topic !== "graph";
  const comparableTopics = ["sorting", "searches", "divide", "dynamic", "greedy", "compare", "backtracking", "branchBound"];
  els.comparisonPanel.hidden = !comparableTopics.includes(state.topic);
  if (state.topic === "graph") {
    els.graphDirectionSelect.value = state.graphDirected ? "directed" : "undirected";
    getWorkingGraph().directed = state.graphDirected;
    renderGraphSelectors();
    drawGraphEditor();
  }
  if (state.topic === "recursion") renderRecursionInputs();
  if (state.topic === "trees") renderTreeInputs();
  if (state.topic === "searches") renderSearchInputs();
  if (state.topic === "divide") renderDivideInputs();
  if (state.topic === "dynamic") renderDynamicInputs();
  if (state.topic === "greedy") renderGreedyInputs();
  if (state.topic === "compare") renderCompareInputs();
  if (state.topic === "backtracking") renderBacktrackingInputs();
  if (state.topic === "branchBound") renderBranchBoundInputs();
  if (state.topic === "sorting") renderSortingComparison();
  if (state.topic === "searches") renderSearchComparison();
  if (state.topic === "divide") renderDivideComparison();
  if (state.topic === "dynamic") renderDynamicComparison();
  if (state.topic === "greedy") renderGreedyComparison();
  if (state.topic === "compare") renderCompareComparison();
  if (state.topic === "backtracking") renderBacktrackingComparison();
  if (state.topic === "branchBound") renderBranchBoundComparison();
}

function getLessonComplexityRows(info) {
  const c = info.complexity || {};
  const rows = [];
  if (c.requirement) rows.push(["Input", c.requirement]);
  if (c.best) rows.push(["Best", c.best]);
  if (c.average) rows.push(["Average", c.average]);
  if (c.worst) rows.push(["Worst", c.worst]);
  if (c.time) rows.push(["Time", c.time]);
  if (c.space) rows.push(["Space", c.space]);
  if (c.stable) rows.push(["Stable", c.stable]);
  if (c.inPlace) rows.push(["In-place", c.inPlace]);
  if (!rows.length) rows.push(["Time", info.badge], ["Space", c.space || "Depends on recursion depth / data size"]);
  return rows.slice(0, 6);
}

function renderLesson() {
  if (!els.lessonAlgorithmSelect || !els.lessonContent) return;
  const topic = topics.find((item) => item.id === state.topic);
  if (!topic || !topic.algorithms.length) return;
  const selectedIds = getSelectedAlgorithmIds(topic);
  if (!selectedIds.length) return;
  const current = selectedIds.includes(els.lessonAlgorithmSelect.value) ? els.lessonAlgorithmSelect.value : selectedIds[0];
  els.lessonFlyoutTitle.textContent = `${topic.title} Theory`;
  els.lessonAlgorithmSelect.innerHTML = selectedIds
    .map((id) => `<option value="${id}"${id === current ? " selected" : ""}>${algorithmInfo[id].title}</option>`)
    .join("");
  const info = algorithmInfo[current];
  const lesson = algorithmLessonContent[current] || {
    idea: info.complexity?.note || "This algorithm is included in the selected panel for visual comparison.",
    use: "Use the live visualization to observe its decisions step by step.",
  };
  const detail = algorithmLessonDetails[current];
  const complexityRows = getLessonComplexityRows(info);
  els.lessonContent.innerHTML = `
    <div class="lesson-card-header">
      <div>
        <p class="eyebrow">Theory</p>
        <h4>${info.title}</h4>
      </div>
      <span class="lesson-badge">${info.badge}</span>
    </div>
    <p>${lesson.idea}</p>
    ${detail ? `<p>${detail}</p>` : ""}
    <div class="lesson-columns">
      ${lesson.steps?.length ? `
        <div>
          <span class="lesson-label">How it works</span>
          <ol>
            ${lesson.steps.map((step) => `<li>${step}</li>`).join("")}
          </ol>
        </div>
      ` : `
        <div>
          <span class="lesson-label">When to use</span>
          <p>${lesson.use}</p>
        </div>
      `}
      <div>
        <span class="lesson-label">Complexity</span>
        <dl class="lesson-complexity">
          ${complexityRows.map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`).join("")}
        </dl>
      </div>
    </div>
    ${lesson.steps?.length ? `<p class="lesson-note">${lesson.use}</p>` : ""}
  `;
}

function setLessonFlyout(open) {
  state.lessonFlyoutOpen = open;
  if (open) renderLesson();
  els.lessonBackdrop.hidden = !open;
  els.lessonFlyout.classList.toggle("open", open);
  els.lessonFlyout.setAttribute("aria-hidden", String(!open));
  els.theoryButton.setAttribute("aria-expanded", String(open));
}

function getSelectedComparisonAlgorithms() {
  return state.runners
    .map((runner) => ({ id: runner.id, info: algorithmInfo[runner.id] }))
    .filter((item) => item.info);
}

function renderSortingComparison() {
  if (state.lessonFlyoutOpen) renderLesson();
  const rows = getSelectedComparisonAlgorithms()
    .map(({ info }) => {
      const c = info.complexity;
      return `
        <tr>
          <td><strong>${info.title}</strong></td>
          <td>${c.best}</td>
          <td>${c.average}</td>
          <td>${c.worst}</td>
          <td>${c.space}</td>
          <td>${c.stable}</td>
          <td>${c.inPlace}</td>
        </tr>
      `;
    })
    .join("");
  els.comparisonPanel.innerHTML = `
    <details open>
      <summary class="comparison-toggle">
        <span>Time and space complexity</span>
        <span>n = ${makeArray(state.size, state.dataset).length}</span>
      </summary>
      <div class="comparison-table-wrap">
        <table class="complexity-table">
          <thead>
            <tr>
              <th>Algorithm</th>
              <th>Best</th>
              <th>Average</th>
              <th>Worst</th>
              <th>Space</th>
              <th>Stable</th>
              <th>In-place</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </details>
  `;
}

function renderSearchComparison() {
  const rows = getSelectedComparisonAlgorithms()
    .map(({ info }) => {
      const c = info.complexity;
      return `
        <tr>
          <td><strong>${info.title}</strong></td>
          <td>${c.requirement}</td>
          <td>${c.best}</td>
          <td>${c.average}</td>
          <td>${c.worst}</td>
          <td>${c.space}</td>
        </tr>
      `;
    })
    .join("");
  els.comparisonPanel.innerHTML = `
    <details open>
      <summary class="comparison-toggle">
        <span>Search complexity comparison</span>
        <span>n = ${state.searchInputs.values.length}</span>
      </summary>
      <div class="comparison-table-wrap">
        <table class="complexity-table">
          <thead>
            <tr>
              <th>Algorithm</th>
              <th>Requirement</th>
              <th>Best</th>
              <th>Average</th>
              <th>Worst</th>
              <th>Space</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </details>
  `;
}

function renderDivideComparison() {
  const algorithms = getSelectedComparisonAlgorithms();
  const rows = algorithms
    .map(({ info }) => {
      const c = info.complexity;
      return `
        <tr>
          <td><strong>${info.title}</strong></td>
          <td>${c.requirement}</td>
          <td>${c.time}</td>
          <td>${c.space}</td>
          <td>${c.note}</td>
        </tr>
      `;
    })
    .join("");
  els.comparisonPanel.innerHTML = `
    <details open>
      <summary class="comparison-toggle">
        <span>Divide & conquer complexity</span>
        <span>${algorithms.length} methods</span>
      </summary>
      <div class="comparison-table-wrap">
        <table class="complexity-table">
          <thead>
            <tr>
              <th>Algorithm</th>
              <th>Input</th>
              <th>Time</th>
              <th>Space</th>
              <th>Idea</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </details>
  `;
}

function renderDynamicComparison() {
  const algorithms = getSelectedComparisonAlgorithms();
  const rows = algorithms
    .map(({ info }) => {
      const c = info.complexity;
      return `
        <tr>
          <td><strong>${info.title}</strong></td>
          <td>${c.requirement}</td>
          <td>${c.time}</td>
          <td>${c.space}</td>
          <td>${c.note}</td>
        </tr>
      `;
    })
    .join("");
  els.comparisonPanel.innerHTML = `
    <details open>
      <summary class="comparison-toggle">
        <span>Dynamic programming complexity</span>
        <span>${algorithms.length} methods</span>
      </summary>
      <div class="comparison-table-wrap">
        <table class="complexity-table">
          <thead>
            <tr>
              <th>Algorithm</th>
              <th>Input</th>
              <th>Time</th>
              <th>Space</th>
              <th>Idea</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </details>
  `;
}

function renderGreedyComparison() {
  const algorithms = getSelectedComparisonAlgorithms();
  const rows = algorithms
    .map(({ info }) => {
      const c = info.complexity;
      return `
        <tr>
          <td><strong>${info.title}</strong></td>
          <td>${c.requirement}</td>
          <td>${c.time}</td>
          <td>${c.space}</td>
          <td>${c.note}</td>
        </tr>
      `;
    })
    .join("");
  els.comparisonPanel.innerHTML = `
    <details open>
      <summary class="comparison-toggle">
        <span>Greedy complexity</span>
        <span>${algorithms.length} methods</span>
      </summary>
      <div class="comparison-table-wrap">
        <table class="complexity-table">
          <thead>
            <tr>
              <th>Algorithm</th>
              <th>Input</th>
              <th>Time</th>
              <th>Space</th>
              <th>Greedy choice</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </details>
  `;
}

function renderCompareComparison() {
  const algorithms = getSelectedComparisonAlgorithms();
  const rows = algorithms
    .map(({ id, info }) => {
      const c = info.complexity;
      return `
        <tr>
          <td><strong>${comparisonProblemName(id)}</strong></td>
          <td>${info.title}</td>
          <td>${c.time}</td>
          <td>${c.space}</td>
          <td>${c.note}</td>
        </tr>
      `;
    })
    .join("");
  els.comparisonPanel.innerHTML = `
    <details open>
      <summary class="comparison-toggle">
        <span>Multi-method problem comparison</span>
        <span>${algorithms.length} methods</span>
      </summary>
      <div class="comparison-table-wrap">
        <table class="complexity-table">
          <thead>
            <tr>
              <th>Problem</th>
              <th>Method</th>
              <th>Time</th>
              <th>Space</th>
              <th>Idea</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </details>
  `;
}

function renderBacktrackingComparison() {
  const algorithms = getSelectedComparisonAlgorithms();
  const rows = algorithms
    .map(({ info }) => {
      const c = info.complexity;
      return `
        <tr>
          <td><strong>${info.title}</strong></td>
          <td>${c.requirement}</td>
          <td>${c.time}</td>
          <td>${c.space}</td>
          <td>${c.note}</td>
        </tr>
      `;
    })
    .join("");
  els.comparisonPanel.innerHTML = `
    <details open>
      <summary class="comparison-toggle">
        <span>Backtracking complexity</span>
        <span>${algorithms.length} methods</span>
      </summary>
      <div class="comparison-table-wrap">
        <table class="complexity-table">
          <thead>
            <tr>
              <th>Algorithm</th>
              <th>Input</th>
              <th>Time</th>
              <th>Space</th>
              <th>Backtracking rule</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </details>
  `;
}

function renderBranchBoundComparison() {
  const algorithms = getSelectedComparisonAlgorithms();
  const rows = algorithms
    .map(({ info }) => {
      const c = info.complexity;
      return `
        <tr>
          <td><strong>${info.title}</strong></td>
          <td>${c.requirement}</td>
          <td>${c.time}</td>
          <td>${c.space}</td>
          <td>${c.note}</td>
        </tr>
      `;
    })
    .join("");
  els.comparisonPanel.innerHTML = `
    <details open>
      <summary class="comparison-toggle">
        <span>Branch and bound complexity</span>
        <span>${algorithms.length} methods</span>
      </summary>
      <div class="comparison-table-wrap">
        <table class="complexity-table">
          <thead>
            <tr>
              <th>Algorithm</th>
              <th>Input</th>
              <th>Time</th>
              <th>Space</th>
              <th>Bound / pruning rule</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </details>
  `;
}

function comparisonProblemName(algorithmId) {
  if (algorithmId === "activityGreedy" || algorithmId === "activityBrute") return "Activity selection";
  if (algorithmId === "knapsackDp" || algorithmId === "knapsackMemo" || algorithmId === "unboundedKnapsack" || algorithmId === "fractionalKnapsack" || algorithmId === "knapsackBranchBound") return "Knapsack";
  if (algorithmId === "bfs" || algorithmId === "dijkstra" || algorithmId === "bellmanFord") return "Shortest path";
  if (algorithmId === "tspNearestNeighbor" || algorithmId === "tspBacktracking" || algorithmId === "tspBranchBound") return "Traveling salesperson";
  if (algorithmId === "hamiltonianCycle" || algorithmId === "hamiltonianBrute") return "Hamiltonian cycle";
  return "Shared problem";
}

function ensureAlgorithmSelection(topic) {
  const validIds = new Set(topic.algorithms);
  const fallback = topic.algorithms[0] ? [topic.algorithms[0]] : [];
  const saved = state.selectedAlgorithms[topic.id] || fallback;
  const selected = saved.filter((id) => validIds.has(id));
  state.selectedAlgorithms[topic.id] = selected.length ? selected : fallback;
}

function getSelectedAlgorithmIds(topic) {
  ensureAlgorithmSelection(topic);
  const selected = new Set(state.selectedAlgorithms[topic.id]);
  return topic.algorithms.filter((id) => selected.has(id));
}

function renderAlgorithmPicker(topic) {
  const visible = ["sorting", "graph", "recursion", "trees", "searches", "divide", "dynamic", "greedy", "compare", "backtracking", "branchBound"].includes(state.topic);
  els.algorithmPanel.hidden = !visible;
  if (!visible) {
    els.algorithmPanel.innerHTML = "";
    return;
  }
  ensureAlgorithmSelection(topic);
  const selected = new Set(state.selectedAlgorithms[topic.id]);
  const options = state.topic === "graph"
    ? renderGroupedAlgorithmOptions(topic, selected)
    : state.topic === "compare"
      ? renderCompareAlgorithmOptions(topic, selected)
    : `<div class="algorithm-options">${topic.algorithms.map((id) => renderAlgorithmOption(id, selected)).join("")}</div>`;
  els.algorithmPanel.innerHTML = `
    <div class="picker-copy">
      <p class="eyebrow">Algorithms</p>
      <h3>Choose visible results</h3>
    </div>
    ${options}
  `;
  els.algorithmPanel.querySelectorAll("input[type='checkbox']").forEach((input) => {
    input.addEventListener("change", () => {
      const checked = [...els.algorithmPanel.querySelectorAll("input[type='checkbox']:checked")].map((item) => item.value);
      if (!checked.length) {
        input.checked = true;
        return;
      }
      state.selectedAlgorithms[topic.id] = checked;
      stop();
      reset(false);
    });
  });
}

function renderCompareAlgorithmOptions(topic, selected) {
  const groups = [
    ["Activity selection", ["activityGreedy", "activityBrute"]],
    ["Knapsack", ["knapsackDp", "knapsackMemo", "unboundedKnapsack", "fractionalKnapsack", "knapsackBranchBound"]],
    ["Shortest path", ["bfs", "dijkstra", "bellmanFord"]],
    ["Traveling salesperson", ["tspNearestNeighbor", "tspBacktracking", "tspBranchBound"]],
    ["Hamiltonian cycle", ["hamiltonianCycle", "hamiltonianBrute"]],
  ];
  return `
    <div class="algorithm-groups">
      ${groups.map(([title, ids]) => {
        const available = ids.filter((id) => topic.algorithms.includes(id));
        return `
          <section class="algorithm-group">
            <div class="algorithm-group-title">
              <strong>${title}</strong>
              <span>Compare methods on one shared input</span>
            </div>
            <div class="algorithm-options">${available.map((id) => renderAlgorithmOption(id, selected)).join("")}</div>
          </section>
        `;
      }).join("")}
    </div>
  `;
}

function renderGroupedAlgorithmOptions(topic, selected) {
  const grouped = topic.algorithms.reduce((groups, id) => {
    const family = algorithmInfo[id].group || algorithmInfo[id].family || "other";
    if (!groups[family]) groups[family] = [];
    groups[family].push(id);
    return groups;
  }, {});
  const order = ["traversal", "shortestPath", "mst", "allPairs", "cycles"];
  return `
    <div class="algorithm-groups">
      ${order
        .filter((family) => grouped[family]?.length)
        .map((family) => {
          const meta = algorithmFamilies[family];
          return `
            <section class="algorithm-group">
              <div class="algorithm-group-title">
                <strong>${meta.title}</strong>
                <span>${meta.description}</span>
              </div>
              <div class="algorithm-options">${grouped[family].map((id) => renderAlgorithmOption(id, selected)).join("")}</div>
            </section>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderAlgorithmOption(id, selected) {
  const info = algorithmInfo[id];
  return `
    <label class="algorithm-option">
      <input type="checkbox" value="${id}" ${selected.has(id) ? "checked" : ""} />
      <span>
        <strong>${info.title}</strong>
        <small>${info.badge}</small>
      </span>
    </label>
  `;
}

function renderRecursionInputs() {
  const topic = topics.find((item) => item.id === "recursion");
  const selected = new Set(getSelectedAlgorithmIds(topic));
  const visibleFields = recursionFieldsForSelection(selected);
  els.hanoiDisksInput.value = state.recursionInputs.hanoiDisks;
  els.gcdAInput.value = state.recursionInputs.gcdA;
  els.gcdBInput.value = state.recursionInputs.gcdB;
  els.factorialInput.value = state.recursionInputs.factorialN;
  els.fibRecursiveInput.value = state.recursionInputs.fibRecursiveN;
  els.fibMemoInput.value = state.recursionInputs.fibMemoN;
  els.recursionPanel.querySelectorAll("[data-recursion-field]").forEach((field) => {
    field.hidden = !visibleFields.has(field.dataset.recursionField);
  });
  const names = [...selected].map((id) => algorithmInfo[id].title).join(", ");
  els.recursionHint.textContent = names ? `Inputs shown for: ${names}.` : "Select a recursion algorithm first.";
  els.recursionHint.classList.remove("error");
}

function recursionFieldsForSelection(selected) {
  const fields = new Set();
  if (selected.has("hanoi")) fields.add("hanoi");
  if (selected.has("gcdRecursive")) fields.add("gcd");
  if (selected.has("factorialRecursive")) fields.add("factorial");
  if (selected.has("fibRecursive")) fields.add("fibRecursive");
  if (selected.has("fibMemo")) fields.add("fibMemo");
  return fields;
}

function readRecursionInputs(selectedIds = null) {
  const selected = new Set(selectedIds || getSelectedAlgorithmIds(topics.find((item) => item.id === "recursion")));
  const next = { ...state.recursionInputs };
  if (selected.has("hanoi")) next.hanoiDisks = readIntegerInput(els.hanoiDisksInput, 1, 8, "Hanoi disks");
  if (selected.has("gcdRecursive")) {
    next.gcdA = readIntegerInput(els.gcdAInput, 1, 9999, "GCD first number");
    next.gcdB = readIntegerInput(els.gcdBInput, 1, 9999, "GCD second number");
  }
  if (selected.has("factorialRecursive")) next.factorialN = readIntegerInput(els.factorialInput, 0, 10, "Factorial n");
  if (selected.has("fibRecursive")) next.fibRecursiveN = readIntegerInput(els.fibRecursiveInput, 0, 9, "Recursive Fibonacci n");
  if (selected.has("fibMemo")) next.fibMemoN = readIntegerInput(els.fibMemoInput, 0, 30, "Memoized Fibonacci n");
  return next;
}

function readIntegerInput(input, min, max, label) {
  const value = Number(normalizeDigits(String(input.value).trim()));
  if (!Number.isInteger(value) || value < min || value > max) {
    throw new Error(`${label} must be an integer from ${min} to ${max}.`);
  }
  return value;
}

function renderTreeInputs() {
  els.treeValuesInput.value = formatArrayInput(state.treeInputs.values);
  els.treeSearchInput.value = state.treeInputs.searchValue;
  els.treeInsertInput.value = state.treeInputs.insertValue;
  els.treeDeleteInput.value = state.treeInputs.deleteValue;
}

function readTreeInputs() {
  const parsed = parseArrayInput(els.treeValuesInput.value);
  if (parsed.error) throw new Error(parsed.error);
  if (parsed.numbers.length > 31) throw new Error("Use at most 31 tree values so the tree stays readable.");
  return {
    values: parsed.numbers,
    searchValue: readIntegerInput(els.treeSearchInput, -9999, 9999, "Search value"),
    insertValue: readIntegerInput(els.treeInsertInput, -9999, 9999, "Insert value"),
    deleteValue: readIntegerInput(els.treeDeleteInput, -9999, 9999, "Delete value"),
  };
}

function renderSearchInputs() {
  els.searchArrayInput.value = formatArrayInput(state.searchInputs.values);
  els.searchTargetInput.value = state.searchInputs.target;
}

function readSearchInputs() {
  const parsed = parseArrayInput(els.searchArrayInput.value);
  if (parsed.error) throw new Error(parsed.error);
  return {
    values: parsed.numbers,
    target: readIntegerInput(els.searchTargetInput, -9999, 9999, "Search target"),
  };
}

function renderDivideInputs() {
  const topic = topics.find((item) => item.id === "divide");
  const selected = new Set(getSelectedAlgorithmIds(topic));
  const visibleFields = divideFieldsForSelection(selected);
  els.divideArrayInput.value = formatArrayInput(state.divideInputs.values);
  els.divideTargetInput.value = state.divideInputs.target;
  els.bigAInput.value = state.divideInputs.bigA;
  els.bigBInput.value = state.divideInputs.bigB;
  els.matrixAInput.value = matrixToText(state.divideInputs.matrixA);
  els.matrixBInput.value = matrixToText(state.divideInputs.matrixB);
  els.teamsInput.value = state.divideInputs.teams;
  els.dividePanel.querySelectorAll("[data-divide-field]").forEach((field) => {
    field.hidden = !visibleFields.has(field.dataset.divideField);
  });
  const names = [...selected].map((id) => algorithmInfo[id].title).join(", ");
  els.divideHint.textContent = names ? `Inputs shown for: ${names}.` : "Select a divide and conquer algorithm first.";
  els.divideHint.classList.remove("error");
}

function divideFieldsForSelection(selected) {
  const fields = new Set();
  if (selected.has("dcBinarySearch") || selected.has("dcMinMax")) fields.add("array");
  if (selected.has("dcBinarySearch")) fields.add("target");
  if (selected.has("bigMultiply") || selected.has("karatsuba")) fields.add("big");
  if (selected.has("strassen")) fields.add("matrix");
  if (selected.has("tournamentSchedule")) fields.add("teams");
  return fields;
}

function readDivideInputs(selectedIds = null) {
  const selected = new Set(selectedIds || getSelectedAlgorithmIds(topics.find((item) => item.id === "divide")));
  const fields = divideFieldsForSelection(selected);
  const next = {
    ...state.divideInputs,
    values: state.divideInputs.values.slice(),
    matrixA: state.divideInputs.matrixA.map((row) => row.slice()),
    matrixB: state.divideInputs.matrixB.map((row) => row.slice()),
  };
  if (fields.has("array")) {
    const parsed = parseArrayInput(els.divideArrayInput.value);
    if (parsed.error) throw new Error(parsed.error);
    if (parsed.numbers.length > 32) throw new Error("Use at most 32 array values so the divide tree stays readable.");
    next.values = parsed.numbers;
  }
  if (fields.has("target")) next.target = readIntegerInput(els.divideTargetInput, -9999, 9999, "Search target");
  if (fields.has("big")) {
    next.bigA = readBigIntegerInput(els.bigAInput, "Big number A");
    next.bigB = readBigIntegerInput(els.bigBInput, "Big number B");
  }
  if (fields.has("matrix")) {
    next.matrixA = parseMatrixInput(els.matrixAInput.value, "Matrix A");
    next.matrixB = parseMatrixInput(els.matrixBInput.value, "Matrix B");
  }
  if (fields.has("teams")) {
    next.teams = readIntegerInput(els.teamsInput, 2, 16, "Teams");
  }
  return next;
}

function readBigIntegerInput(input, label) {
  const value = normalizeDigits(String(input.value).trim()).replace(/\s+/g, "");
  if (!/^\d+$/.test(value)) throw new Error(`${label} must contain digits only.`);
  if (value.length > 16) throw new Error(`${label} can have at most 16 digits for a readable animation.`);
  return value.replace(/^0+(?=\d)/, "");
}

function parseMatrixInput(value, label) {
  const normalized = normalizeDigits(value).replace(/[|]/g, ";");
  const rows = normalized
    .split(";")
    .map((row) => row.trim())
    .filter(Boolean)
    .map((row) => row.split(/[,\s]+/).map((item) => item.trim()).filter(Boolean).map(Number));
  if (rows.length !== 2 || rows.some((row) => row.length !== 2)) {
    throw new Error(`${label} must be a 2x2 matrix like 1,2;3,4.`);
  }
  if (rows.flat().some((number) => !Number.isFinite(number))) throw new Error(`${label} contains an invalid number.`);
  return rows;
}

function matrixToText(matrix) {
  return matrix.map((row) => row.join(",")).join(";");
}

function renderDynamicInputs() {
  const topic = topics.find((item) => item.id === "dynamic");
  const selected = new Set(getSelectedAlgorithmIds(topic));
  const visibleFields = dynamicFieldsForSelection(selected);
  els.matrixChainInput.value = formatArrayInput(state.dynamicInputs.matrixDimensions);
  els.knapsackItemsInput.value = formatItemsInput(state.dynamicInputs.items);
  els.knapsackCapacityInput.value = state.dynamicInputs.capacity;
  els.lcsAInput.value = state.dynamicInputs.lcsA;
  els.lcsBInput.value = state.dynamicInputs.lcsB;
  els.lisInput.value = formatArrayInput(state.dynamicInputs.lisValues);
  els.maxPathTreeInput.value = formatArrayInput(state.dynamicInputs.treeValues);
  els.dynamicPanel.querySelectorAll("[data-dynamic-field]").forEach((field) => {
    field.hidden = !visibleFields.has(field.dataset.dynamicField);
  });
  const names = [...selected].map((id) => algorithmInfo[id].title).join(", ");
  els.dynamicHint.textContent = names ? `Inputs shown for: ${names}.` : "Select a dynamic programming algorithm first.";
  els.dynamicHint.classList.remove("error");
}

function dynamicFieldsForSelection(selected) {
  const fields = new Set();
  if (selected.has("matrixChainOrder")) fields.add("matrixChain");
  if (selected.has("knapsackDp") || selected.has("knapsackMemo") || selected.has("unboundedKnapsack")) fields.add("knapsack");
  if (selected.has("lcs")) fields.add("lcs");
  if (selected.has("lis")) fields.add("lis");
  if (selected.has("maxTreePathSum")) fields.add("treePath");
  return fields;
}

function readDynamicInputs(selectedIds = null) {
  const selected = new Set(selectedIds || getSelectedAlgorithmIds(topics.find((item) => item.id === "dynamic")));
  const fields = dynamicFieldsForSelection(selected);
  const next = {
    matrixDimensions: state.dynamicInputs.matrixDimensions.slice(),
    lcsA: state.dynamicInputs.lcsA,
    lcsB: state.dynamicInputs.lcsB,
    lisValues: state.dynamicInputs.lisValues.slice(),
    treeValues: state.dynamicInputs.treeValues.slice(),
    capacity: state.dynamicInputs.capacity,
    items: state.dynamicInputs.items.map((item) => ({ ...item })),
  };
  if (fields.has("matrixChain")) {
    const parsed = parseArrayInput(els.matrixChainInput.value);
    if (parsed.error) throw new Error(parsed.error);
    if (parsed.numbers.length < 3) throw new Error("Matrix chain needs at least 3 dimensions.");
    if (parsed.numbers.length > 8) throw new Error("Use at most 8 dimensions so the table stays readable.");
    if (parsed.numbers.some((number) => !Number.isInteger(number) || number <= 0)) throw new Error("Matrix dimensions must be positive integers.");
    next.matrixDimensions = parsed.numbers;
  }
  if (fields.has("knapsack")) {
    next.items = parseItemsInput(els.knapsackItemsInput.value);
    next.capacity = readIntegerInput(els.knapsackCapacityInput, 1, 80, "Capacity");
  }
  if (fields.has("lcs")) {
    next.lcsA = readShortTextInput(els.lcsAInput, "LCS string A");
    next.lcsB = readShortTextInput(els.lcsBInput, "LCS string B");
  }
  if (fields.has("lis")) {
    const parsed = parseArrayInput(els.lisInput.value);
    if (parsed.error) throw new Error(parsed.error);
    if (parsed.numbers.length > 24) throw new Error("Use at most 24 LIS values so the table stays readable.");
    next.lisValues = parsed.numbers;
  }
  if (fields.has("treePath")) {
    const parsed = parseArrayInput(els.maxPathTreeInput.value);
    if (parsed.error) throw new Error(parsed.error);
    if (parsed.numbers.length > 31) throw new Error("Use at most 31 tree values so the tree stays readable.");
    next.treeValues = parsed.numbers;
  }
  return next;
}

function readShortTextInput(input, label) {
  const value = String(input.value).trim();
  if (!value) throw new Error(`${label} cannot be empty.`);
  if (value.length > 18) throw new Error(`${label} can have at most 18 characters.`);
  return value;
}

function parseItemsInput(value) {
  const normalized = normalizeDigits(value).replace(/[\u061b;]/g, ",");
  const parts = normalized.split(",").map((part) => part.trim()).filter(Boolean);
  if (parts.length < 1) throw new Error("Enter at least one item as weight:value.");
  if (parts.length > 12) throw new Error("Use at most 12 items so the table stays readable.");
  return parts.map((part) => {
    const [weightText, valueText] = part.split(":").map((item) => item?.trim());
    const weight = Number(weightText);
    const itemValue = Number(valueText);
    if (!Number.isInteger(weight) || !Number.isInteger(itemValue) || weight <= 0 || itemValue < 0) {
      throw new Error("Items must use positive integer weight and non-negative value, like 2:6.");
    }
    return { weight, value: itemValue };
  });
}

function formatItemsInput(items) {
  return items.map((item) => `${item.weight}:${item.value}`).join(", ");
}

function renderGreedyInputs() {
  const topic = topics.find((item) => item.id === "greedy");
  const selected = new Set(getSelectedAlgorithmIds(topic));
  const visibleFields = greedyFieldsForSelection(selected);
  els.greedyActivitiesInput.value = formatActivitiesInput(state.greedyInputs.activities);
  els.greedyItemsInput.value = formatItemsInput(state.greedyInputs.items);
  els.greedyCapacityInput.value = state.greedyInputs.capacity;
  els.greedyJobsInput.value = formatJobsInput(state.greedyInputs.jobs);
  els.huffmanInput.value = formatHuffmanInput(state.greedyInputs.huffman);
  els.tspMatrixInput.value = matrixToText(state.greedyInputs.tspMatrix);
  els.tspStartInput.value = state.greedyInputs.tspStart;
  els.greedyPanel.querySelectorAll("[data-greedy-field]").forEach((field) => {
    field.hidden = !visibleFields.has(field.dataset.greedyField);
  });
  const names = [...selected].map((id) => algorithmInfo[id].title).join(", ");
  els.greedyHint.textContent = names ? `Inputs shown for: ${names}.` : "Select a greedy algorithm first.";
  els.greedyHint.classList.remove("error");
}

function greedyFieldsForSelection(selected) {
  const fields = new Set();
  if (selected.has("activityGreedy")) fields.add("activities");
  if (selected.has("fractionalKnapsack")) fields.add("knapsack");
  if (selected.has("jobSequencing")) fields.add("jobs");
  if (selected.has("huffmanCoding")) fields.add("huffman");
  if (selected.has("tspNearestNeighbor")) fields.add("tsp");
  return fields;
}

function readGreedyInputs(selectedIds = null) {
  const selected = new Set(selectedIds || getSelectedAlgorithmIds(topics.find((item) => item.id === "greedy")));
  const fields = greedyFieldsForSelection(selected);
  const next = {
    activities: state.greedyInputs.activities.map((activity) => ({ ...activity })),
    items: state.greedyInputs.items.map((item) => ({ ...item })),
    capacity: state.greedyInputs.capacity,
    jobs: state.greedyInputs.jobs.map((job) => ({ ...job })),
    huffman: state.greedyInputs.huffman.map((item) => ({ ...item })),
    tspMatrix: state.greedyInputs.tspMatrix.map((row) => row.slice()),
    tspStart: state.greedyInputs.tspStart,
  };
  if (fields.has("activities")) next.activities = parseActivitiesInput(els.greedyActivitiesInput.value);
  if (fields.has("knapsack")) {
    next.items = parseItemsInput(els.greedyItemsInput.value);
    next.capacity = readIntegerInput(els.greedyCapacityInput, 1, 999, "Capacity");
  }
  if (fields.has("jobs")) next.jobs = parseJobsInput(els.greedyJobsInput.value);
  if (fields.has("huffman")) next.huffman = parseHuffmanInput(els.huffmanInput.value);
  if (fields.has("tsp")) {
    next.tspMatrix = parseSquareMatrixInput(els.tspMatrixInput.value, "TSP matrix");
    next.tspStart = readIntegerInput(els.tspStartInput, 1, next.tspMatrix.length, "Start city");
  }
  return next;
}

function renderCompareInputs() {
  const topic = topics.find((item) => item.id === "compare");
  const selected = new Set(getSelectedAlgorithmIds(topic));
  const visibleFields = compareFieldsForSelection(selected);
  els.compareActivitiesInput.value = formatActivitiesInput(state.compareInputs.activities);
  els.compareItemsInput.value = formatItemsInput(state.compareInputs.items);
  els.compareCapacityInput.value = state.compareInputs.capacity;
  els.compareGraphMatrixInput.value = matrixToText(state.compareInputs.graphMatrix);
  els.compareGraphSourceInput.value = state.compareInputs.graphSource;
  els.compareGraphTargetInput.value = state.compareInputs.graphTarget;
  els.compareTspMatrixInput.value = matrixToText(state.compareInputs.tspMatrix);
  els.compareTspStartInput.value = state.compareInputs.tspStart;
  els.compareHamiltonianMatrixInput.value = matrixToText(state.compareInputs.hamiltonianMatrix);
  els.comparePanel.querySelectorAll("[data-compare-field]").forEach((field) => {
    field.hidden = !visibleFields.has(field.dataset.compareField);
  });
  const names = [...selected].map((id) => algorithmInfo[id].title).join(", ");
  els.compareHint.textContent = names ? `Shared inputs shown for: ${names}.` : "Select comparable methods first.";
  els.compareHint.classList.remove("error");
}

function compareFieldsForSelection(selected) {
  const fields = new Set();
  if (selected.has("activityGreedy") || selected.has("activityBrute")) fields.add("activities");
  if (selected.has("knapsackDp") || selected.has("knapsackMemo") || selected.has("unboundedKnapsack") || selected.has("fractionalKnapsack") || selected.has("knapsackBranchBound")) fields.add("knapsack");
  if (selected.has("bfs") || selected.has("dijkstra") || selected.has("bellmanFord")) fields.add("shortest");
  if (selected.has("tspNearestNeighbor") || selected.has("tspBacktracking") || selected.has("tspBranchBound")) fields.add("tsp");
  if (selected.has("hamiltonianCycle") || selected.has("hamiltonianBrute")) fields.add("hamiltonian");
  return fields;
}

function readCompareInputs(selectedIds = null) {
  const selected = new Set(selectedIds || getSelectedAlgorithmIds(topics.find((item) => item.id === "compare")));
  const fields = compareFieldsForSelection(selected);
  const next = {
    activities: state.compareInputs.activities.map((activity) => ({ ...activity })),
    items: state.compareInputs.items.map((item) => ({ ...item })),
    capacity: state.compareInputs.capacity,
    graphMatrix: state.compareInputs.graphMatrix.map((row) => row.slice()),
    graphSource: state.compareInputs.graphSource,
    graphTarget: state.compareInputs.graphTarget,
    tspMatrix: state.compareInputs.tspMatrix.map((row) => row.slice()),
    tspStart: state.compareInputs.tspStart,
    hamiltonianMatrix: state.compareInputs.hamiltonianMatrix.map((row) => row.slice()),
  };
  if (fields.has("activities")) next.activities = parseActivitiesInput(els.compareActivitiesInput.value);
  if (fields.has("knapsack")) {
    next.items = parseItemsInput(els.compareItemsInput.value);
    next.capacity = readIntegerInput(els.compareCapacityInput, 1, 80, "Capacity");
  }
  if (fields.has("shortest")) {
    next.graphMatrix = parseSquareMatrixInput(els.compareGraphMatrixInput.value, "Shortest path matrix");
    if (next.graphMatrix.length > 8) throw new Error("Shortest path comparison supports up to 8 vertices.");
    next.graphSource = readIntegerInput(els.compareGraphSourceInput, 1, next.graphMatrix.length, "Source");
    next.graphTarget = readIntegerInput(els.compareGraphTargetInput, 1, next.graphMatrix.length, "Target");
  }
  if (fields.has("tsp")) {
    next.tspMatrix = parseSquareMatrixInput(els.compareTspMatrixInput.value, "TSP matrix");
    if (next.tspMatrix.length > 8) throw new Error("TSP comparison supports up to 8 cities.");
    next.tspStart = readIntegerInput(els.compareTspStartInput, 1, next.tspMatrix.length, "Start city");
  }
  if (fields.has("hamiltonian")) {
    next.hamiltonianMatrix = parseSquareMatrixInput(els.compareHamiltonianMatrixInput.value, "Hamiltonian matrix");
    if (next.hamiltonianMatrix.length > 8) throw new Error("Hamiltonian comparison supports up to 8 vertices.");
  }
  return next;
}

function renderBacktrackingInputs() {
  const topic = topics.find((item) => item.id === "backtracking");
  const selected = new Set(getSelectedAlgorithmIds(topic));
  const visibleFields = backtrackingFieldsForSelection(selected);
  els.nQueenSizeInput.value = state.backtrackingInputs.nQueenSize;
  els.subsetValuesInput.value = formatArrayInput(state.backtrackingInputs.subsetValues);
  els.subsetTargetInput.value = state.backtrackingInputs.subsetTarget;
  els.hamiltonianMatrixInput.value = matrixToText(state.backtrackingInputs.hamiltonianMatrix);
  els.tspBacktrackingMatrixInput.value = matrixToText(state.backtrackingInputs.tspMatrix);
  els.tspBacktrackingStartInput.value = state.backtrackingInputs.tspStart;
  els.backtrackingPanel.querySelectorAll("[data-backtracking-field]").forEach((field) => {
    field.hidden = !visibleFields.has(field.dataset.backtrackingField);
  });
  const names = [...selected].map((id) => algorithmInfo[id].title).join(", ");
  els.backtrackingHint.textContent = names ? `Inputs shown for: ${names}.` : "Select a backtracking algorithm first.";
  els.backtrackingHint.classList.remove("error");
}

function backtrackingFieldsForSelection(selected) {
  const fields = new Set();
  if (selected.has("nQueen")) fields.add("nqueen");
  if (selected.has("subsetSum")) fields.add("subset");
  if (selected.has("hamiltonianCycle")) fields.add("hamiltonian");
  if (selected.has("tspBacktracking")) fields.add("tsp");
  return fields;
}

function readBacktrackingInputs(selectedIds = null) {
  const selected = new Set(selectedIds || getSelectedAlgorithmIds(topics.find((item) => item.id === "backtracking")));
  const fields = backtrackingFieldsForSelection(selected);
  const next = {
    nQueenSize: state.backtrackingInputs.nQueenSize,
    subsetValues: state.backtrackingInputs.subsetValues.slice(),
    subsetTarget: state.backtrackingInputs.subsetTarget,
    hamiltonianMatrix: state.backtrackingInputs.hamiltonianMatrix.map((row) => row.slice()),
    tspMatrix: state.backtrackingInputs.tspMatrix.map((row) => row.slice()),
    tspStart: state.backtrackingInputs.tspStart,
  };
  if (fields.has("nqueen")) next.nQueenSize = readIntegerInput(els.nQueenSizeInput, 4, 8, "N-Queen board size");
  if (fields.has("subset")) {
    const parsed = parseArrayInput(els.subsetValuesInput.value);
    if (parsed.error) throw new Error(parsed.error);
    if (parsed.numbers.length > 14) throw new Error("Use at most 14 subset values so the search stays readable.");
    if (parsed.numbers.some((number) => !Number.isInteger(number))) throw new Error("Subset values must be integers.");
    next.subsetValues = parsed.numbers;
    next.subsetTarget = readIntegerInput(els.subsetTargetInput, -9999, 9999, "Subset target");
  }
  if (fields.has("hamiltonian")) {
    next.hamiltonianMatrix = parseSquareMatrixInput(els.hamiltonianMatrixInput.value, "Hamiltonian matrix");
    if (next.hamiltonianMatrix.length > 8) throw new Error("Use at most 8 vertices for Hamiltonian search.");
    next.hamiltonianMatrix = next.hamiltonianMatrix.map((row, r) => row.map((value, c) => (r === c ? 0 : value ? 1 : 0)));
  }
  if (fields.has("tsp")) {
    next.tspMatrix = parseSquareMatrixInput(els.tspBacktrackingMatrixInput.value, "TSP matrix");
    if (next.tspMatrix.length > 8) throw new Error("Use at most 8 cities for exact TSP backtracking.");
    next.tspStart = readIntegerInput(els.tspBacktrackingStartInput, 1, next.tspMatrix.length, "Start city");
  }
  return next;
}

function renderBranchBoundInputs() {
  const topic = topics.find((item) => item.id === "branchBound");
  const selected = new Set(getSelectedAlgorithmIds(topic));
  const visibleFields = branchBoundFieldsForSelection(selected);
  els.branchBoundItemsInput.value = formatItemsInput(state.branchBoundInputs.items);
  els.branchBoundCapacityInput.value = state.branchBoundInputs.capacity;
  els.branchBoundTspMatrixInput.value = matrixToText(state.branchBoundInputs.tspMatrix);
  els.branchBoundTspStartInput.value = state.branchBoundInputs.tspStart;
  els.branchBoundPanel.querySelectorAll("[data-branch-bound-field]").forEach((field) => {
    field.hidden = !visibleFields.has(field.dataset.branchBoundField);
  });
  const names = [...selected].map((id) => algorithmInfo[id].title).join(", ");
  els.branchBoundHint.textContent = names ? `Inputs shown for: ${names}.` : "Select a branch and bound algorithm first.";
  els.branchBoundHint.classList.remove("error");
}

function branchBoundFieldsForSelection(selected) {
  const fields = new Set();
  if (selected.has("knapsackBranchBound")) fields.add("knapsack");
  if (selected.has("tspBranchBound")) fields.add("tsp");
  return fields;
}

function readBranchBoundInputs(selectedIds = null) {
  const selected = new Set(selectedIds || getSelectedAlgorithmIds(topics.find((item) => item.id === "branchBound")));
  const fields = branchBoundFieldsForSelection(selected);
  const next = {
    items: state.branchBoundInputs.items.map((item) => ({ ...item })),
    capacity: state.branchBoundInputs.capacity,
    tspMatrix: state.branchBoundInputs.tspMatrix.map((row) => row.slice()),
    tspStart: state.branchBoundInputs.tspStart,
  };
  if (fields.has("knapsack")) {
    next.items = parseItemsInput(els.branchBoundItemsInput.value);
    next.capacity = readIntegerInput(els.branchBoundCapacityInput, 1, 80, "Capacity");
  }
  if (fields.has("tsp")) {
    next.tspMatrix = parseSquareMatrixInput(els.branchBoundTspMatrixInput.value, "TSP matrix");
    if (next.tspMatrix.length > 8) throw new Error("Branch and bound TSP supports up to 8 cities.");
    next.tspStart = readIntegerInput(els.branchBoundTspStartInput, 1, next.tspMatrix.length, "Start city");
  }
  return next;
}

function parseActivitiesInput(value) {
  const parts = normalizeDigits(value).replace(/[\u061b;]/g, ",").split(",").map((part) => part.trim()).filter(Boolean);
  if (parts.length < 1) throw new Error("Enter at least one activity as start-finish.");
  if (parts.length > 16) throw new Error("Use at most 16 activities so brute force stays readable.");
  return parts.map((part) => {
    const [startText, finishText] = part.split("-").map((item) => item?.trim());
    const start = Number(startText);
    const finish = Number(finishText);
    if (!Number.isFinite(start) || !Number.isFinite(finish) || finish <= start) throw new Error("Activities must look like 1-4 with finish greater than start.");
    return { start, finish };
  });
}

function formatActivitiesInput(activities) {
  return activities.map((activity) => `${activity.start}-${activity.finish}`).join(", ");
}

function parseJobsInput(value) {
  const parts = normalizeDigits(value).replace(/[\u061b;]/g, ",").split(",").map((part) => part.trim()).filter(Boolean);
  if (parts.length < 1) throw new Error("Enter at least one job as id:deadline:profit.");
  if (parts.length > 16) throw new Error("Use at most 16 jobs.");
  return parts.map((part, index) => {
    const [idText, deadlineText, profitText] = part.split(":").map((item) => item?.trim());
    const deadline = Number(deadlineText);
    const profit = Number(profitText);
    if (!idText || !Number.isInteger(deadline) || deadline < 1 || !Number.isFinite(profit)) {
      throw new Error("Jobs must look like A:2:100.");
    }
    return { id: idText || `J${index + 1}`, deadline, profit };
  });
}

function formatJobsInput(jobs) {
  return jobs.map((job) => `${job.id}:${job.deadline}:${job.profit}`).join(", ");
}

function parseHuffmanInput(value) {
  const parts = normalizeDigits(value).replace(/[\u061b;]/g, ",").split(",").map((part) => part.trim()).filter(Boolean);
  if (parts.length < 2) throw new Error("Enter at least two symbols as char:freq.");
  if (parts.length > 16) throw new Error("Use at most 16 symbols.");
  return parts.map((part) => {
    const [symbolText, freqText] = part.split(":").map((item) => item?.trim());
    const freq = Number(freqText);
    if (!symbolText || !Number.isFinite(freq) || freq <= 0) throw new Error("Symbols must look like a:5.");
    return { symbol: symbolText, freq };
  });
}

function formatHuffmanInput(items) {
  return items.map((item) => `${item.symbol}:${item.freq}`).join(", ");
}

function parseSquareMatrixInput(value, label) {
  const matrix = normalizeDigits(value).split(";").map((row) => row.trim()).filter(Boolean).map((row) => row.split(/[,\s]+/).map(Number));
  if (matrix.length < 2 || matrix.length > 12) throw new Error(`${label} must have 2 to 12 rows.`);
  if (matrix.some((row) => row.length !== matrix.length || row.some((item) => !Number.isFinite(item)))) throw new Error(`${label} must be a square numeric matrix.`);
  return matrix;
}

function reset(bumpSeed = false) {
  if (bumpSeed) state.seed += 13;
  stopRunnerTimers();
  state.graphResult = null;
  const topic = topics.find((item) => item.id === state.topic);
  state.baseData = buildBaseData();
  state.runners = getSelectedAlgorithmIds(topic).map((algorithmId) => makeRunner(algorithmId, state.baseData));
  els.topicLabel.textContent = topic.title;
  els.topicTitle.textContent = topic.subtitle;
  if (!topic.algorithms.length && state.lessonFlyoutOpen) setLessonFlyout(false);
  if (topic.algorithms.length && state.lessonFlyoutOpen) renderLesson();
  updateTopicControls();
  renderCategories();
  updatePanelOrder();
  renderAlgorithmPicker(topic);
  renderCards();
  initializeTimeline();
  renderComparisonPanel();
  updateMetrics();
  drawAll();
  drawGraphEditor();
}

function updatePanelOrder() {
  const panelByTopic = {
    sorting: els.sortingPanel,
    graph: els.graphPanel,
    recursion: els.recursionPanel,
    trees: els.treePanel,
    searches: els.searchPanel,
    divide: els.dividePanel,
    dynamic: els.dynamicPanel,
    greedy: els.greedyPanel,
    compare: els.comparePanel,
    backtracking: els.backtrackingPanel,
    branchBound: els.branchBoundPanel,
  };
  const targetPanel = panelByTopic[state.topic];
  if (targetPanel) {
    targetPanel.before(els.algorithmPanel);
  }
}

function updateTopicControls() {
  const isAbout = state.topic === "about";
  const isGraph = state.topic === "graph";
  const isSorting = state.topic === "sorting";
  els.controlStrip.hidden = isAbout;
  els.metricsBand.hidden = isAbout;
  els.visualGrid.hidden = isAbout;
  els.bottomRunbar.hidden = isAbout;
  els.theoryButton.hidden = isAbout;
  if (isAbout) return;
  els.sizeField.hidden = ["recursion", "trees", "searches", "divide", "dynamic", "greedy", "compare", "backtracking", "branchBound"].includes(state.topic);
  els.sizeLabel.textContent = isGraph ? "Random nodes" : "Array size";
  els.sizeInput.min = isGraph ? "3" : "8";
  els.sizeInput.max = isGraph ? "28" : "64";
  if (isGraph) els.sizeInput.value = String(clamp(Number(els.sizeInput.value), 3, 28));
  if (isSorting) els.sizeInput.value = String(clamp(Number(els.sizeInput.value), 8, 64));
  if (!els.sizeField.hidden) state.size = Number(els.sizeInput.value);
  els.datasetField.hidden = !isSorting;
  els.syncField.hidden = true;
}

function renderCards() {
  els.visualGrid.innerHTML = "";
  for (const runner of state.runners) {
    const card = document.createElement("article");
    card.className = "algo-card";
    card.innerHTML = `
      <header class="algo-header">
        <h3>${runner.info.title}</h3>
        <div class="card-actions">
          <span class="badge">${runner.info.badge}</span>
          <button class="card-control-button" data-card-action="reset" type="button" title="Reset" aria-label="Reset">Reset</button>
          <button class="card-control-button" data-card-action="back" type="button" title="Step back" aria-label="Step back">Back</button>
          <button class="card-control-button" data-card-action="step" type="button" title="Step forward" aria-label="Step forward">Next</button>
          <button class="card-control-button" data-card-action="run" type="button" title="Run or pause" aria-label="Run or pause">Run</button>
          <button class="card-fullscreen-button" type="button" title="Fullscreen" aria-label="Fullscreen">Full</button>
        </div>
      </header>
      <div class="canvas-wrap"><canvas></canvas></div>
      <footer class="algo-footer">
        <span>Steps<strong data-stat="ticks">0</strong></span>
        <span>Ops<strong data-stat="ops">0</strong></span>
        <span>${runner.info.type === "graph" || runner.id === "floydWarshall" ? "Cost" : "Status"}<strong data-stat="note">Ready</strong></span>
      </footer>
    `;
    runner.card = card;
    runner.canvas = card.querySelector("canvas");
    runner.ctx = runner.canvas.getContext("2d");
    card.querySelector(".card-fullscreen-button").addEventListener("click", () => toggleCardFullscreen(runner));
    card.querySelector('[data-card-action="reset"]').addEventListener("click", () => {
      stopRunner(runner);
      resetRunner(runner);
    });
    card.querySelector('[data-card-action="back"]').addEventListener("click", () => {
      stopRunner(runner);
      stepRunnerBack(runner);
    });
    card.querySelector('[data-card-action="step"]').addEventListener("click", () => {
      stopRunner(runner);
      stepRunnerForward(runner);
    });
    card.querySelector('[data-card-action="run"]').addEventListener("click", () => (runner.running ? stopRunner(runner) : startRunner(runner)));
    els.visualGrid.append(card);
  }
}

function toggleCardFullscreen(runner) {
  const wasFullscreen = runner.card.classList.contains("fullscreen");
  for (const item of state.runners) item.card?.classList.remove("fullscreen");
  runner.card.classList.toggle("fullscreen", !wasFullscreen);
  runner.card.querySelector(".card-fullscreen-button").textContent = wasFullscreen ? "Full" : "Close";
  for (const item of state.runners) {
    if (item !== runner) item.card?.querySelector(".card-fullscreen-button") && (item.card.querySelector(".card-fullscreen-button").textContent = "Full");
  }
  window.setTimeout(() => drawRunner(runner), 30);
}

function renderGraphSelectors() {
  const graph = getWorkingGraph();
  const sourceOptions = graph.nodes
    .map((node) => `<option value="${node.id}"${node.id === graph.source ? " selected" : ""}>Start: ${node.id}</option>`)
    .join("");
  const targetOptions = graph.nodes
    .map((node) => `<option value="${node.id}"${node.id === graph.target ? " selected" : ""}>Target: ${node.id}</option>`)
    .join("");
  els.graphSourceSelect.innerHTML = sourceOptions;
  els.graphTargetSelect.innerHTML = targetOptions;
}

function updateRunnerStats(runner) {
  const frame = runner.frame || {};
  const ops = frame.comparisons ?? frame.relaxations ?? frame.writes ?? frame.checks ?? frame.calls ?? 0;
  runner.card.querySelector('[data-stat="ticks"]').textContent = runner.ticks;
  runner.card.querySelector('[data-stat="ops"]').textContent = ops;
  const note = (runner.info.type === "graph" || runner.id === "floydWarshall") && frame.done
    ? formatPathResult(frame)
    : frame.note || (runner.done ? "Done" : "Ready");
  runner.card.querySelector('[data-stat="note"]').textContent = note;
}

function formatPathResult(frame) {
  if (frame.invalid) return frame.note || "Invalid input";
  if (frame.negativeCycle) return "Negative cycle";
  if (frame.finalEdges) {
    if (frame.disconnected || frame.finalCost === Infinity) return "No MST";
    return `MST ${frame.finalCost}`;
  }
  if (!frame.finalPath?.length || frame.finalCost === Infinity || frame.finalCost === undefined) return "No path";
  const label = frame.graph?.weightedResultLabel || "Cost";
  return `${label} ${frame.finalCost} (${frame.finalPath.join(" -> ")})`;
}

function updateMetrics() {
  const done = state.runners.filter((runner) => runner.done).length;
  const totalOps = state.runners.reduce((sum, runner) => {
    const frame = runner.frame || {};
    return sum + (frame.comparisons ?? frame.relaxations ?? frame.writes ?? frame.checks ?? frame.calls ?? 0);
  }, 0);
  const comparableRunners = getComparableBestRunners();
  const comparableDone = comparableRunners.filter((runner) => runner.done);
  const fastest = comparableDone
    .sort((a, b) => a.ticks - b.ticks)[0];
  const mixedProblems = ["divide", "dynamic", "greedy", "compare", "backtracking", "branchBound", "recursion", "trees"].includes(state.topic);
  const bestMetricTitle = state.topic === "graph" ? "Best path result" : mixedProblems ? "Problem set" : "Current best";
  const bestLabel = mixedProblems
    ? state.topic === "compare" ? "Shared inputs" : "Mixed inputs"
    : fastest ? fastest.info.title : state.topic === "graph" && !comparableRunners.length ? "No path result" : "...";
  els.metricsBand.innerHTML = `
    <div class="metric"><span>Algorithms</span><strong>${state.runners.length}</strong></div>
    <div class="metric"><span>Finished</span><strong>${done}/${state.runners.length}</strong></div>
    <div class="metric"><span>Operations</span><strong>${totalOps}</strong></div>
    <div class="metric"><span>${bestMetricTitle}</span><strong>${bestLabel}</strong></div>
  `;
  updateRunbar();
}

function getComparableBestRunners() {
  if (state.topic === "graph") {
    return state.runners.filter((runner) => runner.info.family === "shortestPath");
  }
  if (["divide", "dynamic", "greedy", "compare", "backtracking", "branchBound", "recursion", "trees"].includes(state.topic)) return [];
  return state.runners;
}

function updateRunbar() {
  const topic = topics.find((item) => item.id === state.topic);
  const done = state.runners.filter((runner) => runner.done).length;
  els.runbarTopic.textContent = topic ? topic.title : "Algorithm runner";
  els.runbarState.textContent = state.running ? "Running" : `${done}/${state.runners.length} finished`;
  updateCardRunButtons();
}

function updateCardRunButtons() {
  for (const runner of state.runners) {
    const button = runner.card?.querySelector('[data-card-action="run"]');
    if (button) button.textContent = runner.running ? "Pause" : "Run";
  }
}

function captureRunnerState(runner) {
  return {
    frame: cloneFrame(runner.frame),
    done: runner.done,
    ticks: runner.ticks,
  };
}

function restoreRunnerState(runner, snapshot) {
  runner.frame = cloneFrame(snapshot.frame);
  runner.done = snapshot.done;
  runner.ticks = snapshot.ticks;
  updateRunnerStats(runner);
  drawRunner(runner);
  if (state.topic === "graph") updateGraphResultStatus();
  updateMetrics();
}

function pushRunnerHistory(runner) {
  runner.history = runner.history.slice(0, runner.historyIndex + 1);
  runner.history.push(captureRunnerState(runner));
  runner.historyIndex = runner.history.length - 1;
}

function stepRunnerBack(runner) {
  if (runner.historyIndex <= 0) return;
  runner.historyIndex--;
  restoreRunnerState(runner, runner.history[runner.historyIndex]);
}

function stepRunnerForward(runner) {
  if (runner.historyIndex < runner.history.length - 1) {
    runner.historyIndex++;
    restoreRunnerState(runner, runner.history[runner.historyIndex]);
    return;
  }
  const advanced = advanceSingleRunnerCore(runner);
  if (advanced) pushRunnerHistory(runner);
}

function advanceSingleRunnerCore(runner) {
  if (runner.done) return false;
  const next = runner.steps.next();
  if (next.done) {
    runner.done = true;
  } else {
    runner.frame = next.value;
    runner.done = Boolean(next.value.done);
    runner.ticks++;
  }
  updateRunnerStats(runner);
  drawRunner(runner);
  if (state.topic === "graph") updateGraphResultStatus();
  updateMetrics();
  return !next.done;
}

function startRunner(runner) {
  stop();
  stopRunnerTimers(runner);
  if (runner.done) resetRunner(runner);
  runner.running = true;
  updateCardRunButtons();
  const loop = () => {
    stepRunnerForward(runner);
    if (runner.running && !runner.done) {
      const delay = Math.max(30, 420 - state.speed * 38);
      runner.timer = window.setTimeout(loop, delay);
      return;
    }
    stopRunner(runner);
  };
  loop();
}

function stopRunner(runner) {
  runner.running = false;
  window.clearTimeout(runner.timer);
  runner.timer = null;
  updateCardRunButtons();
}

function stopRunnerTimers(exceptRunner = null) {
  for (const runner of state.runners) {
    if (runner === exceptRunner) continue;
    runner.running = false;
    window.clearTimeout(runner.timer);
    runner.timer = null;
  }
  updateCardRunButtons();
}

function resetRunner(runner) {
  const fresh = makeRunner(runner.id, state.baseData || buildBaseData());
  runner.steps = fresh.steps;
  runner.frame = fresh.frame;
  runner.done = fresh.done;
  runner.ticks = fresh.ticks;
  runner.running = false;
  runner.history = [captureRunnerState(runner)];
  runner.historyIndex = 0;
  updateRunnerStats(runner);
  drawRunner(runner);
  if (state.topic === "graph") updateGraphResultStatus();
  updateMetrics();
}

function initializeTimeline() {
  state.timeline.snapshots = [captureSnapshot()];
  state.timeline.index = 0;
}

function captureSnapshot() {
  return {
    graphResult: clonePlain(state.graphResult),
    runners: state.runners.map((runner) => ({
      id: runner.id,
      frame: cloneFrame(runner.frame),
      done: runner.done,
      ticks: runner.ticks,
    })),
  };
}

function cloneFrame(frame) {
  if (frame == null) return frame;
  if (typeof structuredClone === "function") return structuredClone(frame);
  return clonePlain(frame);
}

function clonePlain(value) {
  if (value == null) return value;
  return JSON.parse(JSON.stringify(value));
}

function restoreSnapshot(snapshot) {
  state.graphResult = clonePlain(snapshot.graphResult);
  for (const saved of snapshot.runners) {
    const runner = state.runners.find((item) => item.id === saved.id);
    if (!runner) continue;
    runner.frame = cloneFrame(saved.frame);
    runner.done = saved.done;
    runner.ticks = saved.ticks;
    updateRunnerStats(runner);
  }
  drawAll();
  drawGraphEditor();
  const hasFinalGraphResult = updateGraphResultStatus();
  if (state.topic === "graph" && !hasFinalGraphResult) {
    setGraphStatus(`Timeline step ${state.timeline.index}/${state.timeline.snapshots.length - 1}`);
  }
  updateMetrics();
}

function pushSnapshot() {
  state.timeline.snapshots = state.timeline.snapshots.slice(0, state.timeline.index + 1);
  state.timeline.snapshots.push(captureSnapshot());
  state.timeline.index = state.timeline.snapshots.length - 1;
}

function stepBack() {
  if (state.timeline.index <= 0) return;
  state.timeline.index--;
  restoreSnapshot(state.timeline.snapshots[state.timeline.index]);
}

function stepForward() {
  if (state.timeline.index < state.timeline.snapshots.length - 1) {
    state.timeline.index++;
    restoreSnapshot(state.timeline.snapshots[state.timeline.index]);
    return;
  }
  const advanced = advanceStepCore();
  if (advanced) pushSnapshot();
}

function step() {
  stepForward();
}

function advanceStepCore() {
  let anyRunning = false;
  for (const runner of state.runners) {
    if (runner.done) continue;
    if (!state.sync && runner.ticks % (state.runners.indexOf(runner) + 1) !== 0) {
      runner.ticks++;
      anyRunning = true;
      continue;
    }
    const next = runner.steps.next();
    if (next.done) {
      runner.done = true;
    } else {
      runner.frame = next.value;
      runner.done = Boolean(next.value.done);
      runner.ticks++;
      anyRunning = true;
    }
    updateRunnerStats(runner);
  }
  drawAll();
  updateGraphResultStatus();
  updateMetrics();
  if (!anyRunning || state.runners.every((runner) => runner.done)) stop();
  return anyRunning;
}

function updateGraphResultStatus() {
  if (state.topic !== "graph" || !els.graphStatus) return false;
  const finished = choosePrimaryGraphResultRunner();
  if (!finished) return false;
  const frame = finished.frame;
  if (frame.invalid) {
    state.graphResult = null;
    drawGraphEditor();
    setGraphStatus(`${finished.info.title}: ${frame.note}`);
    return true;
  }
  if (frame.negativeCycle) {
    state.graphResult = null;
    drawGraphEditor();
    setGraphStatus(`${finished.info.title}: negative cycle detected.`);
    return true;
  }
  if (finished.info.family === "cycles") {
    const labels = frame.labels || [];
    const indexPath = frame.bestPath?.length ? frame.bestPath : frame.path || [];
    const path = indexPath.map((index) => labels[index]).filter(Boolean);
    const cost = frame.bestCost ?? frame.cost ?? null;
    state.graphResult = {
      path,
      cost,
      algorithm: finished.info.title,
    };
    drawGraphEditor();
    if (!path.length) {
      setGraphStatus(`${finished.info.title}: no cycle or tour found.`);
      return true;
    }
    const costText = cost == null ? "" : ` | Cost ${cost}`;
    setGraphStatus(`${finished.info.title}: ${path.join(" -> ")}${costText}`);
    return true;
  }
  state.graphResult = {
    path: frame.finalPath.slice(),
    cost: frame.finalCost,
    algorithm: finished.info.title,
  };
  drawGraphEditor();
  if (!frame.finalPath.length || frame.finalCost === Infinity) {
    setGraphStatus(`${finished.info.title}: no path from ${frame.graph.source} to ${frame.graph.target}.`);
    return true;
  }
  setGraphStatus(`${finished.info.title}: ${frame.finalPath.join(" -> ")} | Cost ${frame.finalCost}`);
  return true;
}

function choosePrimaryGraphResultRunner() {
  const graph = getWorkingGraph();
  const preferredIds = hasNegativeEdge(graph)
    ? ["bellmanFord"]
    : isUnweightedGraph(graph)
      ? ["bfs", "dijkstra", "bellmanFord", "dfs"]
      : ["dijkstra", "bellmanFord", "bfs", "dfs"];
  for (const id of preferredIds) {
    const runner = state.runners.find((item) => item.id === id && item.frame?.done);
    if (runner) return runner;
  }
  const cycleRunner = state.runners.find((runner) => runner.info.family === "cycles" && runner.frame?.done);
  if (cycleRunner) return cycleRunner;
  return state.runners.find((runner) => runner.info.type === "graph" && runner.frame?.done && (runner.frame.finalPath || runner.frame.invalid || runner.frame.negativeCycle));
}

function isUnweightedGraph(graph) {
  return graph.edges.every(([, , weight]) => weight === 1);
}

function start() {
  if (state.running) return;
  stopRunnerTimers();
  state.running = true;
  els.runButton.classList.add("paused");
  els.runIcon.textContent = "";
  els.runLabel.textContent = "Pause";
  updateRunbar();
  const loop = () => {
    step();
    if (state.running) {
      const delay = Math.max(30, 420 - state.speed * 38);
      state.timer = window.setTimeout(loop, delay);
    }
  };
  loop();
}

function stop() {
  state.running = false;
  window.clearTimeout(state.timer);
  state.timer = null;
  els.runButton.classList.remove("paused");
  els.runIcon.textContent = "";
  els.runLabel.textContent = "Run";
  updateRunbar();
}

function fitCanvas(canvas) {
  const rect = canvas.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  const width = Math.max(320, Math.floor(rect.width * ratio));
  const height = Math.max(240, Math.floor(rect.height * ratio));
  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
  }
  return { width, height, ratio };
}

function clear(ctx, width, height) {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#fbfdfc";
  ctx.fillRect(0, 0, width, height);
}

function drawAll() {
  for (const runner of state.runners) drawRunner(runner);
}

function drawRunner(runner) {
  const { canvas, ctx } = runner;
  const { width, height } = fitCanvas(canvas);
  clear(ctx, width, height);
  if (runner.info.type === "bars") drawBars(ctx, width, height, runner.frame, state.size);
  if (runner.info.type === "graph") drawGraph(ctx, width, height, runner.frame || { graph: makeGraph(), dist: {}, prev: {} });
  if (runner.info.type === "matrix") drawMatrix(ctx, width, height, runner.frame || { table: [[0]], active: [0, 0], items: [], capacity: 1 });
  if (runner.info.type === "timeline") drawTimeline(ctx, width, height, runner.frame || { activities: makeActivities(), selected: [] });
  if (runner.info.type === "tree") drawTree(ctx, width, height, runner.frame || { nodes: [], active: null, memo: new Map() });
  if (runner.info.type === "backtrack") drawBacktracking(ctx, width, height, runner.frame || { kind: "empty", note: "Ready" });
  if (runner.info.type === "hanoi") drawHanoi(ctx, width, height, runner.frame || { towers: { A: [], B: [], C: [] }, stack: [], disks: 3, moves: 0 });
}

function drawBars(ctx, width, height, frame, fallbackSize) {
  const array = frame?.array || makeArray(fallbackSize, state.dataset);
  const active = new Set(frame?.active || []);
  const sorted = new Set(frame?.sorted || []);
  const padding = 28;
  const gap = Math.max(2, width / array.length * 0.08);
  const barWidth = (width - padding * 2) / array.length - gap;
  const min = Math.min(0, ...array);
  const max = Math.max(0, ...array);
  const span = max - min || 1;
  const innerHeight = height - padding * 2;
  const baseline = height - padding - ((0 - min) / span) * innerHeight;
  ctx.strokeStyle = "#e7eeee";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(padding, baseline);
  ctx.lineTo(width - padding, baseline);
  ctx.stroke();
  for (let i = 0; i < array.length; i++) {
    const valueY = height - padding - ((array[i] - min) / span) * innerHeight;
    const h = Math.max(2, Math.abs(baseline - valueY));
    const x = padding + i * (barWidth + gap);
    const y = Math.min(valueY, baseline);
    const barGradient = ctx.createLinearGradient?.(0, y, 0, y + h);
    let solidColor = "#55d6d8";
    if (active.has(i)) {
      solidColor = "#ffb82f";
      barGradient?.addColorStop(0, "#ffd56b");
      barGradient?.addColorStop(1, "#ffb82f");
    } else if (sorted.has(i)) {
      solidColor = "#0da4ad";
      barGradient?.addColorStop(0, "#30d6d9");
      barGradient?.addColorStop(1, "#0da4ad");
    } else {
      barGradient?.addColorStop(0, "#b8f1f0");
      barGradient?.addColorStop(1, "#55d6d8");
    }
    ctx.fillStyle = barGradient || solidColor;
    roundRect(ctx, x, y, Math.max(2, barWidth), h, Math.min(8, barWidth / 2));
    ctx.fill();
    ctx.fillStyle = "#083f42";
    if (array.length <= 24) {
      ctx.font = "12px Segoe UI";
      ctx.textAlign = "center";
      ctx.fillText(array[i], x + barWidth / 2, height - 8);
    }
  }
}

function roundRect(ctx, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + width - r, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + r);
  ctx.lineTo(x + width, y + height - r);
  ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
  ctx.lineTo(x + r, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function drawGraph(ctx, width, height, frame) {
  const graph = frame.graph;
  const nodeMap = new Map(graph.nodes.map((node) => [node.id, node]));
  const activeEdges = new Set((frame.activeEdges || []).map(([from, to]) => `${from}-${to}`));
  const pathEdges = new Set(pathToEdges(frame.finalPath || []));
  const finalEdges = new Set((frame.finalEdges || []).map(([from, to]) => `${from}-${to}`));
  const undirectedResult = graph.directed === false || frame.undirectedResult;
  ctx.lineWidth = 3;
  ctx.font = "13px Tahoma";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  for (const [from, to, weight] of graph.edges) {
    const a = nodeMap.get(from);
    const b = nodeMap.get(to);
    const x1 = a.x * width;
    const y1 = a.y * height;
    const x2 = b.x * width;
    const y2 = b.y * height;
    const edgeKey = `${from}-${to}`;
    const reverseKey = `${to}-${from}`;
    const active = activeEdges.has(edgeKey) || (undirectedResult && activeEdges.has(reverseKey));
    const inPath = pathEdges.has(edgeKey) || finalEdges.has(edgeKey) || (undirectedResult && (pathEdges.has(reverseKey) || finalEdges.has(reverseKey)));
    ctx.lineWidth = inPath ? 6 : active ? 4 : 3;
    ctx.strokeStyle = inPath ? "#4bd85b" : active ? "#ffb82f" : "#9ee7e7";
    drawGraphEdge(ctx, x1, y1, x2, y2, graph.directed !== false);
    ctx.fillStyle = "#65716c";
    ctx.fillText(weight, (x1 + x2) / 2, (y1 + y2) / 2 - 8);
  }
  for (const node of graph.nodes) {
    const x = node.x * width;
    const y = node.y * height;
    const visited = (frame.visited || []).includes(node.id);
    const current = frame.current === node.id;
    const isSource = graph.source === node.id;
    const isTarget = graph.target === node.id;
    ctx.fillStyle = current ? "#ffb82f" : visited ? "#24c8cb" : "#ffffff";
    ctx.strokeStyle = visited || current ? ctx.fillStyle : "#9fb1ab";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(x, y, 22, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    if (isSource || isTarget) {
      ctx.strokeStyle = isSource ? "#4bd85b" : "#4aaee8";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(x, y, 28, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.fillStyle = current || visited ? "#ffffff" : "#17201c";
    ctx.fillText(node.id, x, y - 4);
    const value = frame.dist?.[node.id];
    ctx.font = "12px Tahoma";
    ctx.fillText(value === Infinity || value === undefined ? "inf" : value, x, y + 12);
    ctx.font = "13px Tahoma";
  }
}

function pathToEdges(path) {
  const edges = [];
  for (let i = 1; i < path.length; i++) edges.push(`${path[i - 1]}-${path[i]}`);
  return edges;
}

function drawArrow(ctx, x1, y1, x2, y2) {
  const angle = Math.atan2(y2 - y1, x2 - x1);
  const startX = x1 + Math.cos(angle) * 24;
  const startY = y1 + Math.sin(angle) * 24;
  const endX = x2 - Math.cos(angle) * 24;
  const endY = y2 - Math.sin(angle) * 24;
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(endX, endY);
  ctx.lineTo(endX - Math.cos(angle - 0.45) * 10, endY - Math.sin(angle - 0.45) * 10);
  ctx.lineTo(endX - Math.cos(angle + 0.45) * 10, endY - Math.sin(angle + 0.45) * 10);
  ctx.closePath();
  ctx.fillStyle = ctx.strokeStyle;
  ctx.fill();
}

function drawGraphEdge(ctx, x1, y1, x2, y2, directed) {
  if (directed) {
    drawArrow(ctx, x1, y1, x2, y2);
    return;
  }
  const angle = Math.atan2(y2 - y1, x2 - x1);
  ctx.beginPath();
  ctx.moveTo(x1 + Math.cos(angle) * 24, y1 + Math.sin(angle) * 24);
  ctx.lineTo(x2 - Math.cos(angle) * 24, y2 - Math.sin(angle) * 24);
  ctx.stroke();
}

function drawMatrix(ctx, width, height, frame) {
  const table = frame.table;
  const rows = table.length;
  const cols = table[0].length;
  const labels = frame.labels || [];
  const colLabels = frame.colLabels || labels;
  const rowLabels = frame.rowLabels || labels;
  const padLeft = rowLabels.length ? 54 : labels.length ? 40 : 24;
  const padTop = colLabels.length ? 40 : labels.length ? 40 : 24;
  const padRight = 24;
  const padBottom = 24;
  const cellW = (width - padLeft - padRight) / cols;
  const cellH = (height - padTop - padBottom) / rows;
  const finiteValues = table.flat().filter((value) => Number.isFinite(value));
  const min = Math.min(0, ...finiteValues);
  const max = Math.max(1, ...finiteValues);
  const span = max - min || 1;
  const pathCells = new Set((frame.pathCells || []).map(([r, c]) => `${r}-${c}`));
  ctx.font = `${Math.max(10, Math.min(13, cellH * 0.42))}px Tahoma`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  if (colLabels.length || rowLabels.length) {
    ctx.fillStyle = "#6f8587";
    for (let c = 0; c < cols; c++) ctx.fillText(colLabels[c] ?? "", padLeft + c * cellW + cellW / 2, padTop - 14);
    for (let r = 0; r < rows; r++) ctx.fillText(rowLabels[r] ?? "", padLeft - 20, padTop + r * cellH + cellH / 2);
  }
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const value = table[r][c];
      const intensity = Number.isFinite(value) ? (value - min) / span : 0;
      const active = frame.active?.[0] === r && frame.active?.[1] === c;
      const inPath = pathCells.has(`${r}-${c}`);
      ctx.fillStyle = active ? "#ffb82f" : inPath ? "#4bd85b" : Number.isFinite(value) ? `rgba(36, 200, 203, ${0.12 + intensity * 0.58})` : "rgba(231, 238, 238, 0.72)";
      ctx.fillRect(padLeft + c * cellW, padTop + r * cellH, cellW - 1, cellH - 1);
      if (cellW > 24 && cellH > 18) {
        ctx.fillStyle = intensity > 0.48 || active || inPath ? "#ffffff" : "#17201c";
        ctx.fillText(value === Infinity ? "inf" : value ?? "", padLeft + c * cellW + cellW / 2, padTop + r * cellH + cellH / 2);
      }
    }
  }
  if (frame.block) {
    ctx.strokeStyle = "#0da4ad";
    ctx.lineWidth = 3;
    ctx.strokeRect(
      padLeft + frame.block.col * cellW,
      padTop + frame.block.row * cellH,
      frame.block.cols * cellW,
      frame.block.rows * cellH,
    );
  }
  if (frame.result !== undefined) {
    ctx.textAlign = "right";
    ctx.fillStyle = "#083f42";
    ctx.font = "700 13px Tahoma";
    ctx.fillText(`result: ${frame.result}`, width - 18, height - 14);
  }
}

function drawTimeline(ctx, width, height, frame) {
  const activities = frame.activities;
  const selected = new Set(frame.selected || []);
  const trial = new Set(frame.trial || []);
  const maxFinish = Math.max(...activities.map((item) => item.finish));
  const rowH = Math.min(28, (height - 44) / activities.length);
  ctx.font = "12px Tahoma";
  ctx.textBaseline = "middle";
  for (let i = 0; i < activities.length; i++) {
    const activity = activities[i];
    const x = 36 + (activity.start / maxFinish) * (width - 72);
    const w = Math.max(10, ((activity.finish - activity.start) / maxFinish) * (width - 72));
    const y = 24 + i * rowH;
    ctx.fillStyle = selected.has(i) ? "#117c72" : frame.active === i ? "#cf7b1c" : trial.has(i) ? "#2f69a8" : "#dce7e3";
    ctx.fillRect(x, y, w, rowH - 6);
    ctx.fillStyle = selected.has(i) || frame.active === i || trial.has(i) ? "#ffffff" : "#17201c";
    ctx.fillText(`${activity.start}-${activity.finish}`, x + w / 2, y + rowH / 2 - 3);
  }
}

function drawBacktracking(ctx, width, height, frame) {
  if (frame.kind === "nqueen") return drawNQueen(ctx, width, height, frame);
  if (frame.kind === "subset") return drawSubsetSearch(ctx, width, height, frame);
  if (frame.kind === "hamiltonian" || frame.kind === "tsp") return drawBacktrackingGraph(ctx, width, height, frame);
  ctx.fillStyle = "#6f8587";
  ctx.font = "14px Tahoma";
  ctx.textAlign = "center";
  ctx.fillText("Ready", width / 2, height / 2);
}

function drawNQueen(ctx, width, height, frame) {
  const n = frame.size || 4;
  const boardSize = Math.min(width - 56, height - 86);
  const cell = boardSize / n;
  const x0 = (width - boardSize) / 2;
  const y0 = 28;
  const rejected = new Set((frame.rejected || []).map(([r, c]) => `${r}-${c}`));
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      const active = frame.active?.row === r && frame.active?.col === c;
      const hasQueen = frame.queens?.[r] === c;
      const isRejected = rejected.has(`${r}-${c}`);
      ctx.fillStyle = active ? "#ffb82f" : hasQueen ? "#24c8cb" : isRejected ? "rgba(233, 95, 117, 0.18)" : (r + c) % 2 ? "#e9fbfb" : "#ffffff";
      ctx.fillRect(x0 + c * cell, y0 + r * cell, cell, cell);
      ctx.strokeStyle = "#d7e5e5";
      ctx.strokeRect(x0 + c * cell, y0 + r * cell, cell, cell);
      if (hasQueen) {
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(x0 + c * cell + cell / 2, y0 + r * cell + cell / 2, Math.max(8, cell * 0.28), 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#083f42";
        ctx.font = `700 ${Math.max(14, cell * 0.28)}px Tahoma`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("Q", x0 + c * cell + cell / 2, y0 + r * cell + cell / 2);
      }
    }
  }
  drawBacktrackingCaption(ctx, width, height, frame);
}

function drawSubsetSearch(ctx, width, height, frame) {
  const values = frame.values || [];
  const selected = new Set(frame.selected || []);
  const top = 34;
  const barW = Math.min(64, (width - 56) / Math.max(1, values.length));
  const startX = (width - barW * values.length) / 2;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  for (let i = 0; i < values.length; i++) {
    const active = frame.index === i;
    ctx.fillStyle = selected.has(i) ? "#24c8cb" : active ? "#ffb82f" : "#e9fbfb";
    roundRect(ctx, startX + i * barW + 4, top, barW - 8, 42, 10);
    ctx.fill();
    ctx.fillStyle = selected.has(i) || active ? "#ffffff" : "#083f42";
    ctx.font = "700 13px Tahoma";
    ctx.fillText(values[i], startX + i * barW + barW / 2, top + 21);
  }
  const meterX = 38;
  const meterY = 102;
  const meterW = width - 76;
  const ratio = Math.max(0, Math.min(1, (frame.currentSum || 0) / Math.max(1, Math.abs(frame.target || 1))));
  ctx.fillStyle = "#e7eeee";
  roundRect(ctx, meterX, meterY, meterW, 14, 7);
  ctx.fill();
  ctx.fillStyle = ratio > 1 ? "#e95f75" : "#24c8cb";
  roundRect(ctx, meterX, meterY, meterW * ratio, 14, 7);
  ctx.fill();
  ctx.fillStyle = "#083f42";
  ctx.font = "700 13px Tahoma";
  ctx.textAlign = "left";
  ctx.fillText(`sum ${frame.currentSum ?? 0} / target ${frame.target}`, meterX, meterY + 36);
  const decisions = frame.decisions || [];
  ctx.font = "12px Tahoma";
  ctx.fillStyle = "#6f8587";
  const lines = decisions.slice(-8).map((item) => `${item.take ? "include" : "exclude"} ${values[item.index]} -> ${item.sum}`);
  lines.forEach((line, index) => ctx.fillText(line, meterX, meterY + 62 + index * 18));
  drawBacktrackingCaption(ctx, width, height, frame);
}

function drawBacktrackingGraph(ctx, width, height, frame) {
  const matrix = frame.matrix || [[0]];
  const n = matrix.length;
  const labels = frame.labels?.length === n ? frame.labels : Array.from({ length: n }, (_, index) => `${frame.kind === "tsp" ? "C" : "V"}${index + 1}`);
  const radius = Math.min(width, height) * 0.31;
  const cx = width / 2;
  const cy = height / 2 - 8;
  const points = Array.from({ length: n }, (_, i) => {
    const angle = -Math.PI / 2 + (Math.PI * 2 * i) / n;
    return { x: cx + Math.cos(angle) * radius, y: cy + Math.sin(angle) * radius };
  });
  const pathEdges = new Set(pathToMatrixCells(frame.path || []).map(([a, b]) => `${a}-${b}`));
  const bestEdges = new Set(pathToMatrixCells(frame.bestPath || []).map(([a, b]) => `${a}-${b}`));
  const activeKey = frame.activeEdge ? `${frame.activeEdge[0]}-${frame.activeEdge[1]}` : "";
  ctx.lineWidth = 2;
  ctx.font = "11px Tahoma";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (!matrix[i][j] && !matrix[j][i]) continue;
      const keyA = `${i}-${j}`;
      const keyB = `${j}-${i}`;
      const active = activeKey === keyA || activeKey === keyB;
      const inPath = pathEdges.has(keyA) || pathEdges.has(keyB);
      const inBest = bestEdges.has(keyA) || bestEdges.has(keyB);
      ctx.strokeStyle = inBest ? "#4bd85b" : inPath ? "#24c8cb" : active ? "#ffb82f" : "#d7e5e5";
      ctx.lineWidth = inBest ? 5 : inPath || active ? 4 : 2;
      ctx.beginPath();
      ctx.moveTo(points[i].x, points[i].y);
      ctx.lineTo(points[j].x, points[j].y);
      ctx.stroke();
      if (frame.kind === "tsp" && matrix[i][j]) {
        ctx.fillStyle = "#6f8587";
        ctx.fillText(matrix[i][j], (points[i].x + points[j].x) / 2, (points[i].y + points[j].y) / 2);
      }
    }
  }
  for (let i = 0; i < n; i++) {
    const current = frame.path?.at(-1) === i;
    ctx.fillStyle = current ? "#ffb82f" : (frame.path || []).includes(i) ? "#24c8cb" : "#ffffff";
    ctx.strokeStyle = current ? "#ffb82f" : "#9fb1ab";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(points[i].x, points[i].y, 20, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = current || (frame.path || []).includes(i) ? "#ffffff" : "#083f42";
    ctx.font = "700 13px Tahoma";
    ctx.fillText(labels[i], points[i].x, points[i].y);
  }
  drawBacktrackingCaption(ctx, width, height, frame);
}

function drawBacktrackingCaption(ctx, width, height, frame) {
  ctx.fillStyle = "#083f42";
  ctx.font = "700 13px Tahoma";
  ctx.textAlign = "right";
  ctx.textBaseline = "alphabetic";
  ctx.fillText(frame.result ?? "", width - 18, height - 18);
  ctx.textAlign = "left";
  ctx.fillStyle = "#6f8587";
  ctx.fillText(frame.note ?? "Ready", 18, height - 18);
}

function drawTree(ctx, width, height, frame) {
  const nodes = frame.nodes || [];
  const memo = normalizeMemo(frame.memo);
  ctx.font = "12px Tahoma";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  const levels = new Map();
  for (const node of nodes) {
    if (!levels.has(node.depth)) levels.set(node.depth, []);
    levels.get(node.depth).push(node);
  }
  const maxDepth = Math.max(1, ...levels.keys());
  const positions = new Map();
  for (const [depth, row] of levels.entries()) {
    const y = 28 + (depth / Math.max(1, maxDepth)) * (height - 64);
    row.slice(-18).forEach((node, index, visibleRow) => {
      const x = ((index + 1) / (visibleRow.length + 1)) * width;
      positions.set(node.id, { x, y, node });
    });
  }
  ctx.strokeStyle = "#d7e5e5";
  ctx.lineWidth = 2;
  for (const { x, y, node } of positions.values()) {
    if (node.parent == null || !positions.has(node.parent)) continue;
    const parent = positions.get(node.parent);
    ctx.beginPath();
    ctx.moveTo(parent.x, parent.y + 18);
    ctx.lineTo(x, y - 18);
    ctx.stroke();
  }
  for (const { x, y, node } of positions.values()) {
      const label = node.result !== undefined ? `${node.label ?? node.n}=${node.result}` : String(node.label ?? node.n ?? "");
      const textWidth = Math.min(86, Math.max(34, (ctx.measureText?.(label).width || label.length * 7) + 16));
      const active = node.id === frame.active;
      const memoized = memo.has(node.n) || node.status === "memo";
      const done = node.status === "done" || node.result !== undefined;
      ctx.fillStyle = active ? "#ffb82f" : memoized ? "#4aaee8" : done ? "#24c8cb" : "#ffffff";
      ctx.strokeStyle = "#9fb1ab";
      ctx.lineWidth = 2;
      roundRect(ctx, x - textWidth / 2, y - 17, textWidth, 34, 12);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = active || memoized || done ? "#ffffff" : "#17201c";
      ctx.fillText(label, x, y);
  }
  if (memo.size) {
    ctx.textAlign = "left";
    ctx.fillStyle = "#65716c";
    ctx.fillText(`memo: ${[...memo.keys()].sort((a, b) => a - b).join(", ")}`, 18, height - 18);
  }
  if (frame.result !== undefined) {
    ctx.textAlign = "right";
    ctx.fillStyle = "#083f42";
    ctx.font = "700 13px Tahoma";
    ctx.fillText(`result: ${frame.result}`, width - 18, height - 18);
  }
}

function normalizeMemo(memo) {
  if (!memo) return new Map();
  if (memo instanceof Map) return memo;
  return new Map(Object.entries(memo).map(([key, value]) => [Number(key), value]));
}

function drawHanoi(ctx, width, height, frame) {
  const towers = frame.towers || { A: [], B: [], C: [] };
  const labels = ["A", "B", "C"];
  const baseY = height - 42;
  const topY = 42;
  const towerWidth = width / 3;
  const maxDisk = Math.max(1, frame.disks || 3);
  ctx.lineWidth = 4;
  ctx.font = "12px Tahoma";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  labels.forEach((label, towerIndex) => {
    const centerX = towerWidth * towerIndex + towerWidth / 2;
    const active = frame.activeMove?.from === label || frame.activeMove?.to === label;
    ctx.strokeStyle = active ? "#ffb82f" : "#b8cac7";
    ctx.beginPath();
    ctx.moveTo(centerX, topY);
    ctx.lineTo(centerX, baseY);
    ctx.stroke();
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(centerX - towerWidth * 0.32, baseY);
    ctx.lineTo(centerX + towerWidth * 0.32, baseY);
    ctx.stroke();
    ctx.lineWidth = 4;
    const disks = towers[label] || [];
    disks.forEach((disk, index) => {
      const diskWidth = Math.max(32, (disk / maxDisk) * towerWidth * 0.58);
      const diskHeight = Math.min(22, Math.max(14, (height - 90) / (maxDisk + 1)));
      const x = centerX - diskWidth / 2;
      const y = baseY - diskHeight * (index + 1);
      const isMoved = active && index === disks.length - 1;
      const gradient = ctx.createLinearGradient?.(x, y, x + diskWidth, y);
      gradient?.addColorStop(0, isMoved ? "#ffd56b" : "#b8f1f0");
      gradient?.addColorStop(1, isMoved ? "#ffb82f" : "#24c8cb");
      ctx.fillStyle = gradient || (isMoved ? "#ffb82f" : "#24c8cb");
      roundRect(ctx, x, y, diskWidth, diskHeight - 2, 8);
      ctx.fill();
      ctx.fillStyle = "#ffffff";
      ctx.fillText(disk, centerX, y + diskHeight / 2 - 1);
    });
    ctx.fillStyle = "#65716c";
    ctx.fillText(label, centerX, height - 18);
  });
  ctx.textAlign = "left";
  ctx.fillStyle = "#083f42";
  ctx.font = "700 13px Tahoma";
  ctx.fillText(`moves: ${frame.moves || 0}`, 18, 22);
  ctx.fillStyle = "#65716c";
  ctx.font = "12px Tahoma";
  const stack = frame.stack || [];
  const topCall = stack.at(-1);
  if (topCall) ctx.fillText(`stack: H(${topCall.n}, ${topCall.from}->${topCall.to})`, 18, 42);
}

function drawGraphEditor() {
  if (!els.graphEditorCanvas || els.graphPanel.hidden) return;
  const canvas = els.graphEditorCanvas;
  updateGraphCanvasSize();
  const ctx = canvas.getContext("2d");
  const { width, height } = fitCanvas(canvas);
  const graph = getWorkingGraph();
  clear(ctx, width, height);
  drawEditorGrid(ctx, width, height);

  const nodeById = new Map(graph.nodes.map((node) => [node.id, node]));
  const resultEdges = new Set(pathToEdges(state.graphResult?.path || []));
  ctx.lineWidth = 3;
  ctx.font = "13px Segoe UI";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  for (const [from, to, weight] of graph.edges) {
    const a = nodeById.get(from);
    const b = nodeById.get(to);
    if (!a || !b) continue;
    const x1 = a.x * width;
    const y1 = a.y * height;
    const x2 = b.x * width;
    const y2 = b.y * height;
    const edgeKey = `${from}-${to}`;
    const reverseKey = `${to}-${from}`;
    const inResult = resultEdges.has(edgeKey) || (graph.directed === false && resultEdges.has(reverseKey));
    const selected = isSelectedEdge(from, to);
    ctx.lineWidth = inResult ? 6 : selected ? 5 : 3;
    ctx.strokeStyle = inResult ? "#4bd85b" : selected ? "#e95f75" : "#9ee7e7";
    drawGraphEdge(ctx, x1, y1, x2, y2, graph.directed !== false);
    drawEdgeLabel(ctx, weight, (x1 + x2) / 2, (y1 + y2) / 2);
  }

  if (state.graphEditor.connecting) {
    const source = nodeById.get(state.graphEditor.connecting);
    if (source) {
      ctx.fillStyle = "rgba(255, 184, 47, 0.12)";
      ctx.strokeStyle = "#ffb82f";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(source.x * width, source.y * height, 30, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    }
  }

  for (const node of graph.nodes) {
    const x = node.x * width;
    const y = node.y * height;
    const selected = state.graphEditor.connecting === node.id || state.graphEditor.dragging === node.id;
    const chosen = state.graphEditor.selectedNode === node.id;
    const isSource = graph.source === node.id;
    const isTarget = graph.target === node.id;
    if (isSource || isTarget || chosen) {
      ctx.strokeStyle = isSource ? "#4bd85b" : "#4aaee8";
      if (chosen) ctx.strokeStyle = "#e95f75";
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(x, y, 30, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.fillStyle = selected ? "#ffb82f" : "#24c8cb";
    ctx.shadowColor = selected ? "rgba(255, 184, 47, 0.35)" : "rgba(36, 200, 203, 0.28)";
    ctx.shadowBlur = 18;
    ctx.beginPath();
    ctx.arc(x, y, 22, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.fillStyle = "#ffffff";
    ctx.font = "700 13px Segoe UI";
    ctx.fillText(node.id, x, y);
  }
}

function updateGraphCanvasSize() {
  const zoom = state.graphEditor.zoom / 100;
  const fullscreen = state.graphEditor.fullscreen;
  const baseWidth = fullscreen ? 1600 : 1000;
  const baseHeight = fullscreen ? 1000 : 640;
  els.graphEditorCanvas.style.width = `${Math.round(baseWidth * zoom)}px`;
  els.graphEditorCanvas.style.height = `${Math.round(baseHeight * zoom)}px`;
}

function drawEditorGrid(ctx, width, height) {
  ctx.strokeStyle = "rgba(36, 200, 203, 0.08)";
  ctx.lineWidth = 1;
  for (let x = 0; x < width; x += 28) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
  for (let y = 0; y < height; y += 28) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
}

function drawEdgeLabel(ctx, label, x, y) {
  const text = String(label);
  ctx.font = "12px Segoe UI";
  const measured = ctx.measureText?.(text);
  const width = (measured?.width ?? text.length * 7) + 16;
  ctx.fillStyle = "#ffffff";
  ctx.strokeStyle = "#e7eeee";
  ctx.lineWidth = 1;
  roundRect(ctx, x - width / 2, y - 12, width, 24, 10);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "#083f42";
  ctx.fillText(text, x, y);
}

function graphPointerPosition(event) {
  const rect = els.graphEditorCanvas.getBoundingClientRect();
  return {
    x: (event.clientX - rect.left) / rect.width,
    y: (event.clientY - rect.top) / rect.height,
  };
}

function hitGraphNode(point) {
  const graph = getWorkingGraph();
  const rect = els.graphEditorCanvas.getBoundingClientRect();
  const px = point.x * rect.width;
  const py = point.y * rect.height;
  for (let i = graph.nodes.length - 1; i >= 0; i--) {
    const node = graph.nodes[i];
    const dx = node.x * rect.width - px;
    const dy = node.y * rect.height - py;
    if (Math.hypot(dx, dy) <= 30) return node;
  }
  return null;
}

function hitGraphEdge(point) {
  const graph = getWorkingGraph();
  const rect = els.graphEditorCanvas.getBoundingClientRect();
  const px = point.x * rect.width;
  const py = point.y * rect.height;
  let best = null;
  let bestDistance = 14;
  for (const [from, to, weight] of graph.edges) {
    const a = graph.nodes.find((node) => node.id === from);
    const b = graph.nodes.find((node) => node.id === to);
    if (!a || !b) continue;
    const distance = pointToSegmentDistance(px, py, a.x * rect.width, a.y * rect.height, b.x * rect.width, b.y * rect.height);
    if (distance < bestDistance) {
      bestDistance = distance;
      best = { from, to, weight };
    }
  }
  return best;
}

function pointToSegmentDistance(px, py, x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  if (dx === 0 && dy === 0) return Math.hypot(px - x1, py - y1);
  const t = clamp(((px - x1) * dx + (py - y1) * dy) / (dx * dx + dy * dy), 0, 1);
  return Math.hypot(px - (x1 + t * dx), py - (y1 + t * dy));
}

function isSelectedEdge(from, to) {
  const edge = state.graphEditor.selectedEdge;
  if (!edge) return false;
  if (edge.from === from && edge.to === to) return true;
  return getWorkingGraph().directed === false && edge.from === to && edge.to === from;
}

function nextNodeId() {
  const graph = getWorkingGraph();
  const used = new Set(graph.nodes.map((node) => node.id));
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (const letter of alphabet) if (!used.has(letter)) return letter;
  return `N${graph.nodes.length + 1}`;
}

function addGraphNode(x = 0.5, y = 0.5) {
  const graph = getWorkingGraph();
  const id = nextNodeId();
  graph.nodes.push({ id, x: clamp(x, 0.08, 0.92), y: clamp(y, 0.12, 0.88) });
  state.graphResult = null;
  state.graphEditor.selectedNode = id;
  state.graphEditor.selectedEdge = null;
  if (!graph.source) graph.source = id;
  graph.target = id;
  setGraphStatus(`Node ${id} added.`);
  refreshGraphAlgorithmsAfterEdit();
}

function addGraphEdge(from, to) {
  if (!from || !to || from === to) return;
  const graph = getWorkingGraph();
  const existing = graph.edges.find((edge) => {
    if (edge[0] === from && edge[1] === to) return true;
    return graph.directed === false && edge[0] === to && edge[1] === from;
  });
  const raw = window.prompt ? window.prompt(`Weight for ${from} -> ${to}`, existing ? String(existing[2]) : "1") : "1";
  if (raw === null) return;
  const weight = Number(normalizeDigits(raw.trim()));
  if (!Number.isFinite(weight)) {
    setGraphStatus("Edge weight must be a number.");
    return;
  }
  if (existing) existing[2] = weight;
  else graph.edges.push([from, to, weight]);
  state.graphResult = null;
  state.graphEditor.selectedNode = null;
  state.graphEditor.selectedEdge = { from, to };
  if (graph.directed === false && weight < 0) {
    setGraphStatus(`Negative undirected edge ${from} -- ${to} creates a negative cycle.`);
  } else {
    setGraphStatus(graph.directed === false ? `Edge ${from} -- ${to} = ${weight}` : `Edge ${from} -> ${to} = ${weight}`);
  }
  state.graphEditor.connecting = null;
  refreshGraphAlgorithmsAfterEdit();
}

function refreshGraphAlgorithmsAfterEdit() {
  renderGraphSelectors();
  if (state.topic === "graph") {
    stop();
    reset(false);
  } else {
    drawGraphEditor();
  }
}

function deleteGraphSelection() {
  const graph = getWorkingGraph();
  const selectedNode = state.graphEditor.selectedNode;
  const selectedEdge = state.graphEditor.selectedEdge;
  if (selectedNode) {
    graph.nodes = graph.nodes.filter((node) => node.id !== selectedNode);
    graph.edges = graph.edges.filter(([from, to]) => from !== selectedNode && to !== selectedNode);
    if (graph.source === selectedNode) graph.source = graph.nodes[0]?.id || "";
    if (graph.target === selectedNode) graph.target = graph.nodes.at(-1)?.id || "";
    state.graphEditor.selectedNode = null;
    state.graphResult = null;
    renderGraphSelectors();
    setGraphStatus(`Node ${selectedNode} deleted.`);
    stop();
    reset(false);
    return;
  }
  if (selectedEdge) {
    graph.edges = graph.edges.filter(([from, to]) => {
      if (from === selectedEdge.from && to === selectedEdge.to) return false;
      return !(graph.directed === false && from === selectedEdge.to && to === selectedEdge.from);
    });
    state.graphEditor.selectedEdge = null;
    state.graphResult = null;
    setGraphStatus(`Edge ${selectedEdge.from} - ${selectedEdge.to} deleted.`);
    stop();
    reset(false);
    return;
  }
  setGraphStatus("Select a node or edge first.");
}

function clearGraph() {
  state.customGraph = { nodes: [], edges: [], source: "", target: "", directed: state.graphDirected };
  state.graphResult = null;
  state.graphEditor.selectedNode = null;
  state.graphEditor.selectedEdge = null;
  state.graphEditor.connecting = null;
  renderGraphSelectors();
  setGraphStatus("Graph cleared.");
  stop();
  reset(false);
}

function makeRandomGraph(nodeCount) {
  const count = clamp(Math.round(nodeCount), 3, 28);
  const rng = mulberry32(state.seed + count * 97);
  const nodes = [];
  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count;
    const radius = 0.32 + (rng() - 0.5) * 0.12;
    nodes.push({
      id: nextAlphabeticId(i),
      x: clamp(0.5 + Math.cos(angle) * radius, 0.08, 0.92),
      y: clamp(0.5 + Math.sin(angle) * radius, 0.1, 0.9),
    });
  }
  const edges = [];
  for (let i = 0; i < count - 1; i++) {
    edges.push([nodes[i].id, nodes[i + 1].id, 1 + Math.floor(rng() * 9)]);
  }
  for (let i = 0; i < count; i++) {
    for (let j = i + 2; j < count; j++) {
      if (rng() < 0.18) edges.push([nodes[i].id, nodes[j].id, 1 + Math.floor(rng() * 12)]);
    }
  }
  return { nodes, edges, source: nodes[0].id, target: nodes.at(-1).id, directed: state.graphDirected };
}

function nextAlphabeticId(index) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (index < alphabet.length) return alphabet[index];
  return `N${index + 1}`;
}

function setGraphStatus(message) {
  if (els.graphStatus) els.graphStatus.textContent = message;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

els.runButton.addEventListener("click", () => (state.running ? stop() : start()));
els.stepButton.addEventListener("click", () => {
  stop();
  stopRunnerTimers();
  stepForward();
});
els.stepBackButton.addEventListener("click", () => {
  stop();
  stopRunnerTimers();
  stepBack();
});
els.resetButton.addEventListener("click", () => {
  stop();
  stopRunnerTimers();
  reset(true);
});
els.applyArrayButton.addEventListener("click", () => {
  const result = parseArrayInput(els.customArrayInput.value);
  if (result.error) {
    els.arrayHint.textContent = result.error;
    els.arrayHint.classList.add("error");
    return;
  }
  state.customArray = result.numbers;
  state.size = result.numbers.length;
  els.sizeInput.value = String(Math.min(64, Math.max(8, state.size)));
  els.arrayHint.textContent = `Applied ${result.numbers.length} numbers.`;
  els.arrayHint.classList.remove("error");
  stop();
  reset(false);
});
els.sampleArrayButton.addEventListener("click", () => {
  const samples = [
    [18, 7, 3, 21, 12, 9, 1, 15],
    [5, 1, 5, 3, 9, 0, 2, 8, 2],
    [32, 4, 17, 9, 26, 11, 2, 19, 7, 23],
  ];
  const sample = samples[state.seed % samples.length];
  state.customArray = sample.slice();
  state.size = sample.length;
  els.customArrayInput.value = formatArrayInput(sample);
  els.sizeInput.value = String(Math.min(64, Math.max(8, state.size)));
  els.arrayHint.textContent = "Sample applied.";
  els.arrayHint.classList.remove("error");
  stop();
  reset(true);
});
els.theoryButton.addEventListener("click", () => setLessonFlyout(true));
els.lessonCloseButton.addEventListener("click", () => setLessonFlyout(false));
els.lessonBackdrop.addEventListener("click", () => setLessonFlyout(false));
els.lessonAlgorithmSelect.addEventListener("change", renderLesson);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && state.lessonFlyoutOpen) setLessonFlyout(false);
});
els.applyTreeButton.addEventListener("click", () => {
  try {
    state.treeInputs = readTreeInputs();
  } catch (error) {
    els.treeHint.textContent = error.message;
    els.treeHint.classList.add("error");
    return;
  }
  els.treeHint.textContent = "Tree inputs applied.";
  els.treeHint.classList.remove("error");
  stop();
  stopRunnerTimers();
  reset(false);
});
els.sampleTreeButton.addEventListener("click", () => {
  const samples = [
    { values: [50, 30, 70, 20, 40, 60, 80], searchValue: 60, insertValue: 65, deleteValue: 30 },
    { values: [42, 18, 64, 9, 27, 55, 73, 21, 31], searchValue: 31, insertValue: 58, deleteValue: 18 },
    { values: [90, 45, 120, 30, 60, 105, 150, 15, 37, 52, 68], searchValue: 105, insertValue: 66, deleteValue: 45 },
  ];
  state.treeInputs = { ...samples[state.seed % samples.length], values: samples[state.seed % samples.length].values.slice() };
  renderTreeInputs();
  els.treeHint.textContent = "Sample tree inputs applied.";
  els.treeHint.classList.remove("error");
  stop();
  stopRunnerTimers();
  reset(true);
});
els.applySearchButton.addEventListener("click", () => {
  try {
    state.searchInputs = readSearchInputs();
  } catch (error) {
    els.searchHint.textContent = error.message;
    els.searchHint.classList.add("error");
    return;
  }
  els.searchHint.textContent = "Search inputs applied.";
  els.searchHint.classList.remove("error");
  stop();
  stopRunnerTimers();
  reset(false);
});
els.sampleSearchButton.addEventListener("click", () => {
  const samples = [
    { values: [4, 9, 12, 17, 23, 31, 38, 44, 52, 68], target: 31 },
    { values: [32, 4, 17, 9, 26, 11, 2, 19, 7, 23], target: 19 },
    { values: [5, 15, 25, 35, 45, 55, 65, 75, 85], target: 65 },
  ];
  const sample = samples[state.seed % samples.length];
  state.searchInputs = { values: sample.values.slice(), target: sample.target };
  renderSearchInputs();
  els.searchHint.textContent = "Sample search inputs applied.";
  els.searchHint.classList.remove("error");
  stop();
  stopRunnerTimers();
  reset(true);
});
els.applyDivideButton.addEventListener("click", () => {
  const topic = topics.find((item) => item.id === "divide");
  const selected = getSelectedAlgorithmIds(topic);
  try {
    state.divideInputs = readDivideInputs(selected);
  } catch (error) {
    els.divideHint.textContent = error.message;
    els.divideHint.classList.add("error");
    return;
  }
  stop();
  stopRunnerTimers();
  reset(false);
  els.divideHint.textContent = "Divide & conquer inputs applied.";
  els.divideHint.classList.remove("error");
});
els.sampleDivideButton.addEventListener("click", () => {
  const samples = [
    {
      values: [18, 7, 3, 21, 12, 9, 1, 15],
      target: 12,
      bigA: "12345678",
      bigB: "87654321",
      matrixA: [[1, 2], [3, 4]],
      matrixB: [[5, 6], [7, 8]],
      teams: 8,
    },
    {
      values: [42, 5, 19, 28, 11, 37, 2, 31, 16],
      target: 28,
      bigA: "31415926",
      bigB: "27182818",
      matrixA: [[2, 0], [1, 3]],
      matrixB: [[4, 5], [6, 7]],
      teams: 6,
    },
    {
      values: [64, 8, 32, 4, 16, 2, 1, 128],
      target: 64,
      bigA: "987654321",
      bigB: "123456789",
      matrixA: [[3, 1], [2, 5]],
      matrixB: [[6, 4], [7, 8]],
      teams: 5,
    },
  ];
  const sample = samples[state.seed % samples.length];
  state.divideInputs = {
    ...sample,
    values: sample.values.slice(),
    matrixA: sample.matrixA.map((row) => row.slice()),
    matrixB: sample.matrixB.map((row) => row.slice()),
  };
  stop();
  stopRunnerTimers();
  reset(true);
  els.divideHint.textContent = "Sample divide & conquer inputs applied.";
  els.divideHint.classList.remove("error");
});
els.applyDynamicButton.addEventListener("click", () => {
  const topic = topics.find((item) => item.id === "dynamic");
  const selected = getSelectedAlgorithmIds(topic);
  try {
    state.dynamicInputs = readDynamicInputs(selected);
  } catch (error) {
    els.dynamicHint.textContent = error.message;
    els.dynamicHint.classList.add("error");
    return;
  }
  stop();
  stopRunnerTimers();
  reset(false);
  els.dynamicHint.textContent = "Dynamic programming inputs applied.";
  els.dynamicHint.classList.remove("error");
});
els.sampleDynamicButton.addEventListener("click", () => {
  const samples = [
    {
      matrixDimensions: [10, 30, 5, 60],
      lcsA: "ABCBDAB",
      lcsB: "BDCABA",
      lisValues: [10, 22, 9, 33, 21, 50, 41, 60],
      treeValues: [10, 2, 10, 20, 1, -25, 3, 4],
      capacity: 14,
      items: [
        { weight: 2, value: 6 },
        { weight: 3, value: 10 },
        { weight: 5, value: 12 },
        { weight: 6, value: 18 },
        { weight: 7, value: 22 },
        { weight: 4, value: 14 },
      ],
    },
    {
      matrixDimensions: [5, 10, 3, 12, 5],
      lcsA: "XMJYAUZ",
      lcsB: "MZJAWXU",
      lisValues: [3, 10, 2, 1, 20, 4, 6],
      treeValues: [-10, 9, 20, 15, 7, 4, -3],
      capacity: 10,
      items: [
        { weight: 1, value: 2 },
        { weight: 3, value: 7 },
        { weight: 4, value: 9 },
        { weight: 6, value: 13 },
      ],
    },
    {
      matrixDimensions: [30, 35, 15, 5, 10, 20, 25],
      lcsA: "ALGORITHM",
      lcsB: "LOGARITHM",
      lisValues: [0, 8, 4, 12, 2, 10, 6, 14, 1, 9],
      treeValues: [5, 4, 8, 11, -2, 13, 4, 7, 2, 1],
      capacity: 18,
      items: [
        { weight: 4, value: 12 },
        { weight: 8, value: 24 },
        { weight: 5, value: 15 },
        { weight: 3, value: 8 },
        { weight: 9, value: 30 },
      ],
    },
  ];
  const sample = samples[state.seed % samples.length];
  state.dynamicInputs = {
    matrixDimensions: sample.matrixDimensions.slice(),
    lcsA: sample.lcsA,
    lcsB: sample.lcsB,
    lisValues: sample.lisValues.slice(),
    treeValues: sample.treeValues.slice(),
    capacity: sample.capacity,
    items: sample.items.map((item) => ({ ...item })),
  };
  stop();
  stopRunnerTimers();
  reset(true);
  els.dynamicHint.textContent = "Sample dynamic programming inputs applied.";
  els.dynamicHint.classList.remove("error");
});
els.applyGreedyButton.addEventListener("click", () => {
  const topic = topics.find((item) => item.id === "greedy");
  const selected = getSelectedAlgorithmIds(topic);
  try {
    state.greedyInputs = readGreedyInputs(selected);
  } catch (error) {
    els.greedyHint.textContent = error.message;
    els.greedyHint.classList.add("error");
    return;
  }
  stop();
  stopRunnerTimers();
  reset(false);
  els.greedyHint.textContent = "Greedy inputs applied.";
  els.greedyHint.classList.remove("error");
});
els.sampleGreedyButton.addEventListener("click", () => {
  const samples = [
    {
      activities: makeActivities(),
      items: [{ weight: 10, value: 60 }, { weight: 20, value: 100 }, { weight: 30, value: 120 }],
      capacity: 50,
      jobs: [{ id: "A", deadline: 2, profit: 100 }, { id: "B", deadline: 1, profit: 19 }, { id: "C", deadline: 2, profit: 27 }, { id: "D", deadline: 1, profit: 25 }, { id: "E", deadline: 3, profit: 15 }],
      huffman: [{ symbol: "a", freq: 5 }, { symbol: "b", freq: 9 }, { symbol: "c", freq: 12 }, { symbol: "d", freq: 13 }, { symbol: "e", freq: 16 }, { symbol: "f", freq: 45 }],
      tspMatrix: [[0, 10, 15, 20], [10, 0, 35, 25], [15, 35, 0, 30], [20, 25, 30, 0]],
      tspStart: 1,
    },
    {
      activities: [{ start: 0, finish: 3 }, { start: 1, finish: 4 }, { start: 3, finish: 5 }, { start: 4, finish: 7 }, { start: 5, finish: 9 }, { start: 8, finish: 10 }],
      items: [{ weight: 5, value: 30 }, { weight: 10, value: 40 }, { weight: 15, value: 45 }, { weight: 22, value: 77 }],
      capacity: 30,
      jobs: [{ id: "J1", deadline: 2, profit: 60 }, { id: "J2", deadline: 1, profit: 100 }, { id: "J3", deadline: 3, profit: 20 }, { id: "J4", deadline: 2, profit: 40 }],
      huffman: [{ symbol: "A", freq: 15 }, { symbol: "B", freq: 7 }, { symbol: "C", freq: 6 }, { symbol: "D", freq: 6 }, { symbol: "E", freq: 5 }],
      tspMatrix: [[0, 14, 4, 10, 20], [14, 0, 7, 8, 7], [4, 7, 0, 7, 16], [10, 8, 7, 0, 2], [20, 7, 16, 2, 0]],
      tspStart: 3,
    },
  ];
  const sample = samples[state.seed % samples.length];
  state.greedyInputs = {
    activities: sample.activities.map((activity) => ({ ...activity })),
    items: sample.items.map((item) => ({ ...item })),
    capacity: sample.capacity,
    jobs: sample.jobs.map((job) => ({ ...job })),
    huffman: sample.huffman.map((item) => ({ ...item })),
    tspMatrix: sample.tspMatrix.map((row) => row.slice()),
    tspStart: sample.tspStart,
  };
  stop();
  stopRunnerTimers();
  reset(true);
  els.greedyHint.textContent = "Sample greedy inputs applied.";
  els.greedyHint.classList.remove("error");
});
els.applyCompareButton.addEventListener("click", () => {
  const topic = topics.find((item) => item.id === "compare");
  const selected = getSelectedAlgorithmIds(topic);
  try {
    state.compareInputs = readCompareInputs(selected);
  } catch (error) {
    els.compareHint.textContent = error.message;
    els.compareHint.classList.add("error");
    return;
  }
  stop();
  stopRunnerTimers();
  reset(false);
  els.compareHint.textContent = "Comparison inputs applied.";
  els.compareHint.classList.remove("error");
});
els.sampleCompareButton.addEventListener("click", () => {
  const samples = [
    {
      activities: makeActivities(),
      items: [{ weight: 10, value: 60 }, { weight: 20, value: 100 }, { weight: 30, value: 120 }],
      capacity: 50,
      graphMatrix: [[0, 1, 4, 0], [0, 0, 2, 7], [0, 0, 0, 3], [0, 0, 0, 0]],
      graphSource: 1,
      graphTarget: 4,
      tspMatrix: [[0, 10, 15, 20], [10, 0, 35, 25], [15, 35, 0, 30], [20, 25, 30, 0]],
      tspStart: 1,
      hamiltonianMatrix: [[0, 1, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 0, 1, 0], [0, 1, 1, 0, 1], [1, 1, 0, 1, 0]],
    },
    {
      activities: [{ start: 0, finish: 3 }, { start: 1, finish: 4 }, { start: 3, finish: 5 }, { start: 4, finish: 7 }, { start: 5, finish: 9 }, { start: 8, finish: 10 }],
      items: [{ weight: 2, value: 6 }, { weight: 3, value: 10 }, { weight: 5, value: 12 }, { weight: 6, value: 18 }, { weight: 7, value: 22 }, { weight: 4, value: 14 }],
      capacity: 14,
      graphMatrix: [[0, 3, 0, 7, 0], [0, 0, 2, 0, 0], [0, 0, 0, 1, 5], [0, 0, 0, 0, 2], [0, 0, 0, 0, 0]],
      graphSource: 1,
      graphTarget: 5,
      tspMatrix: [[0, 14, 4, 10, 20], [14, 0, 7, 8, 7], [4, 7, 0, 7, 16], [10, 8, 7, 0, 2], [20, 7, 16, 2, 0]],
      tspStart: 3,
      hamiltonianMatrix: [[0, 1, 1, 1, 0], [1, 0, 1, 0, 1], [1, 1, 0, 1, 1], [1, 0, 1, 0, 1], [0, 1, 1, 1, 0]],
    },
    {
      activities: [{ start: 2, finish: 5 }, { start: 1, finish: 3 }, { start: 4, finish: 8 }, { start: 6, finish: 9 }, { start: 8, finish: 11 }, { start: 10, finish: 13 }, { start: 12, finish: 14 }],
      items: [{ weight: 4, value: 12 }, { weight: 8, value: 24 }, { weight: 5, value: 15 }, { weight: 3, value: 8 }, { weight: 9, value: 30 }],
      capacity: 18,
      graphMatrix: [[0, 2, 6, 0, 0], [0, 0, -2, 3, 0], [0, 0, 0, 1, 4], [0, 0, 0, 0, 2], [0, 0, 0, 0, 0]],
      graphSource: 1,
      graphTarget: 5,
      tspMatrix: [[0, 9, 12, 18, 20], [9, 0, 6, 11, 14], [12, 6, 0, 8, 10], [18, 11, 8, 0, 7], [20, 14, 10, 7, 0]],
      tspStart: 1,
      hamiltonianMatrix: [[0, 1, 0, 1, 1], [1, 0, 1, 0, 1], [0, 1, 0, 1, 1], [1, 0, 1, 0, 1], [1, 1, 1, 1, 0]],
    },
  ];
  const sample = samples[state.seed % samples.length];
  state.compareInputs = {
    activities: sample.activities.map((activity) => ({ ...activity })),
    items: sample.items.map((item) => ({ ...item })),
    capacity: sample.capacity,
    graphMatrix: sample.graphMatrix.map((row) => row.slice()),
    graphSource: sample.graphSource,
    graphTarget: sample.graphTarget,
    tspMatrix: sample.tspMatrix.map((row) => row.slice()),
    tspStart: sample.tspStart,
    hamiltonianMatrix: sample.hamiltonianMatrix.map((row) => row.slice()),
  };
  stop();
  stopRunnerTimers();
  reset(true);
  els.compareHint.textContent = "Sample comparison inputs applied.";
  els.compareHint.classList.remove("error");
});
els.applyBacktrackingButton.addEventListener("click", () => {
  const topic = topics.find((item) => item.id === "backtracking");
  const selected = getSelectedAlgorithmIds(topic);
  try {
    state.backtrackingInputs = readBacktrackingInputs(selected);
  } catch (error) {
    els.backtrackingHint.textContent = error.message;
    els.backtrackingHint.classList.add("error");
    return;
  }
  stop();
  stopRunnerTimers();
  reset(false);
  els.backtrackingHint.textContent = "Backtracking inputs applied.";
  els.backtrackingHint.classList.remove("error");
});
els.sampleBacktrackingButton.addEventListener("click", () => {
  const samples = [
    {
      nQueenSize: 4,
      subsetValues: [3, 34, 4, 12, 5, 2],
      subsetTarget: 9,
      hamiltonianMatrix: [[0, 1, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 0, 1, 0], [0, 1, 1, 0, 1], [1, 1, 0, 1, 0]],
      tspMatrix: [[0, 10, 15, 20], [10, 0, 35, 25], [15, 35, 0, 30], [20, 25, 30, 0]],
      tspStart: 1,
    },
    {
      nQueenSize: 5,
      subsetValues: [2, 4, 6, 10, 13, 15],
      subsetTarget: 16,
      hamiltonianMatrix: [[0, 1, 0, 1, 0, 1], [1, 0, 1, 1, 0, 0], [0, 1, 0, 1, 1, 0], [1, 1, 1, 0, 1, 1], [0, 0, 1, 1, 0, 1], [1, 0, 0, 1, 1, 0]],
      tspMatrix: [[0, 12, 10, 19, 8], [12, 0, 3, 7, 6], [10, 3, 0, 2, 20], [19, 7, 2, 0, 4], [8, 6, 20, 4, 0]],
      tspStart: 2,
    },
  ];
  const sample = samples[state.seed % samples.length];
  state.backtrackingInputs = {
    nQueenSize: sample.nQueenSize,
    subsetValues: sample.subsetValues.slice(),
    subsetTarget: sample.subsetTarget,
    hamiltonianMatrix: sample.hamiltonianMatrix.map((row) => row.slice()),
    tspMatrix: sample.tspMatrix.map((row) => row.slice()),
    tspStart: sample.tspStart,
  };
  stop();
  stopRunnerTimers();
  reset(true);
  els.backtrackingHint.textContent = "Sample backtracking inputs applied.";
  els.backtrackingHint.classList.remove("error");
});
els.applyBranchBoundButton.addEventListener("click", () => {
  const topic = topics.find((item) => item.id === "branchBound");
  const selected = getSelectedAlgorithmIds(topic);
  try {
    state.branchBoundInputs = readBranchBoundInputs(selected);
  } catch (error) {
    els.branchBoundHint.textContent = error.message;
    els.branchBoundHint.classList.add("error");
    return;
  }
  stop();
  stopRunnerTimers();
  reset(false);
  els.branchBoundHint.textContent = "Branch and bound inputs applied.";
  els.branchBoundHint.classList.remove("error");
});
els.sampleBranchBoundButton.addEventListener("click", () => {
  const samples = [
    {
      items: [{ weight: 10, value: 60 }, { weight: 20, value: 100 }, { weight: 30, value: 120 }],
      capacity: 50,
      tspMatrix: [[0, 10, 15, 20], [10, 0, 35, 25], [15, 35, 0, 30], [20, 25, 30, 0]],
      tspStart: 1,
    },
    {
      items: [{ weight: 2, value: 6 }, { weight: 3, value: 10 }, { weight: 5, value: 12 }, { weight: 6, value: 18 }, { weight: 7, value: 22 }, { weight: 4, value: 14 }],
      capacity: 14,
      tspMatrix: [[0, 14, 4, 10, 20], [14, 0, 7, 8, 7], [4, 7, 0, 7, 16], [10, 8, 7, 0, 2], [20, 7, 16, 2, 0]],
      tspStart: 3,
    },
    {
      items: [{ weight: 4, value: 12 }, { weight: 8, value: 24 }, { weight: 5, value: 15 }, { weight: 3, value: 8 }, { weight: 9, value: 30 }],
      capacity: 18,
      tspMatrix: [[0, 9, 12, 18, 20], [9, 0, 6, 11, 14], [12, 6, 0, 8, 10], [18, 11, 8, 0, 7], [20, 14, 10, 7, 0]],
      tspStart: 1,
    },
  ];
  const sample = samples[state.seed % samples.length];
  state.branchBoundInputs = {
    items: sample.items.map((item) => ({ ...item })),
    capacity: sample.capacity,
    tspMatrix: sample.tspMatrix.map((row) => row.slice()),
    tspStart: sample.tspStart,
  };
  stop();
  stopRunnerTimers();
  reset(true);
  els.branchBoundHint.textContent = "Sample branch and bound inputs applied.";
  els.branchBoundHint.classList.remove("error");
});
els.applyRecursionButton.addEventListener("click", () => {
  const topic = topics.find((item) => item.id === "recursion");
  const selected = getSelectedAlgorithmIds(topic);
  try {
    state.recursionInputs = readRecursionInputs(selected);
  } catch (error) {
    els.recursionHint.textContent = error.message;
    els.recursionHint.classList.add("error");
    return;
  }
  stop();
  stopRunnerTimers();
  reset(false);
  els.recursionHint.textContent = "Recursion inputs applied.";
  els.recursionHint.classList.remove("error");
});
els.sampleRecursionButton.addEventListener("click", () => {
  const samples = [
    { hanoiDisks: 3, gcdA: 70, gcdB: 33, factorialN: 5, fibRecursiveN: 6, fibMemoN: 10 },
    { hanoiDisks: 4, gcdA: 144, gcdB: 89, factorialN: 6, fibRecursiveN: 7, fibMemoN: 14 },
    { hanoiDisks: 5, gcdA: 252, gcdB: 105, factorialN: 7, fibRecursiveN: 8, fibMemoN: 18 },
  ];
  state.recursionInputs = { ...samples[state.seed % samples.length] };
  stop();
  stopRunnerTimers();
  reset(true);
  els.recursionHint.textContent = "Sample recursion inputs applied.";
  els.recursionHint.classList.remove("error");
});
els.graphSampleButton.addEventListener("click", () => {
  state.customGraph = cloneGraph(makeGraph());
  state.graphDirected = true;
  els.graphDirectionSelect.value = "directed";
  state.graphEditor.connecting = null;
  state.graphEditor.dragging = null;
  setGraphStatus("Sample graph loaded.");
  stop();
  reset(false);
});
els.graphAddNodeButton.addEventListener("click", () => {
  const graph = getWorkingGraph();
  const angle = graph.nodes.length * 0.9;
  addGraphNode(0.5 + Math.cos(angle) * 0.24, 0.5 + Math.sin(angle) * 0.24);
});
els.graphRandomButton.addEventListener("click", () => {
  state.seed += 31;
  state.customGraph = makeRandomGraph(Number(els.sizeInput.value));
  state.graphResult = null;
  state.graphEditor.selectedNode = null;
  state.graphEditor.selectedEdge = null;
  state.graphEditor.connecting = null;
  renderGraphSelectors();
  setGraphStatus(`Random graph with ${state.customGraph.nodes.length} nodes created.`);
  stop();
  reset(false);
});
els.graphDeleteButton.addEventListener("click", deleteGraphSelection);
els.graphClearButton.addEventListener("click", clearGraph);
els.graphFullscreenButton.addEventListener("click", () => {
  state.graphEditor.fullscreen = !state.graphEditor.fullscreen;
  els.graphPanel.classList.toggle("fullscreen", state.graphEditor.fullscreen);
  els.graphFullscreenButton.textContent = state.graphEditor.fullscreen ? "Exit full" : "Fullscreen";
  drawGraphEditor();
});
els.graphZoomInput.addEventListener("input", (event) => {
  state.graphEditor.zoom = Number(event.target.value);
  drawGraphEditor();
});
els.graphApplyButton.addEventListener("click", () => {
  state.topic = "graph";
  getWorkingGraph().directed = state.graphDirected;
  getWorkingGraph().source = els.graphSourceSelect.value;
  getWorkingGraph().target = els.graphTargetSelect.value;
  state.graphEditor.connecting = null;
  setGraphStatus("Graph applied to selected algorithms.");
  stop();
  reset(false);
});
els.graphSourceSelect.addEventListener("change", (event) => {
  getWorkingGraph().source = event.target.value;
  setGraphStatus(`Start node set to ${event.target.value}.`);
  stop();
  reset(false);
});
els.graphTargetSelect.addEventListener("change", (event) => {
  getWorkingGraph().target = event.target.value;
  setGraphStatus(`Target node set to ${event.target.value}.`);
  drawGraphEditor();
  drawAll();
});
els.graphDirectionSelect.addEventListener("change", (event) => {
  state.graphDirected = event.target.value === "directed";
  getWorkingGraph().directed = state.graphDirected;
  state.graphEditor.connecting = null;
  setGraphStatus(state.graphDirected ? "Directed mode: edges go one way." : "Undirected mode: edges work both ways.");
  stop();
  reset(false);
});
els.graphEditorCanvas.addEventListener("dblclick", (event) => {
  if (els.graphPanel.hidden) return;
  const point = graphPointerPosition(event);
  const node = hitGraphNode(point);
  if (!node) {
    addGraphNode(point.x, point.y);
    return;
  }
  state.graphEditor.connecting = node.id;
  setGraphStatus(`Connecting from ${node.id}. Click a target node.`);
  drawGraphEditor();
});
els.graphEditorCanvas.addEventListener("click", (event) => {
  if (els.graphPanel.hidden) return;
  const point = graphPointerPosition(event);
  const node = hitGraphNode(point);
  if (state.graphEditor.connecting) {
    if (node) addGraphEdge(state.graphEditor.connecting, node.id);
    return;
  }
  if (node) {
    state.graphEditor.selectedNode = node.id;
    state.graphEditor.selectedEdge = null;
    setGraphStatus(`Node ${node.id} selected.`);
    drawGraphEditor();
    return;
  }
  const edge = hitGraphEdge(point);
  if (edge) {
    state.graphEditor.selectedNode = null;
    state.graphEditor.selectedEdge = { from: edge.from, to: edge.to };
    setGraphStatus(`Edge ${edge.from} - ${edge.to} selected.`);
    drawGraphEditor();
    return;
  }
  state.graphEditor.selectedNode = null;
  state.graphEditor.selectedEdge = null;
  drawGraphEditor();
});
els.graphEditorCanvas.addEventListener("mousedown", (event) => {
  if (els.graphPanel.hidden || state.graphEditor.connecting) return;
  const point = graphPointerPosition(event);
  const node = hitGraphNode(point);
  if (!node) return;
  state.graphEditor.selectedNode = node.id;
  state.graphEditor.selectedEdge = null;
  state.graphEditor.dragging = node.id;
  state.graphEditor.dragOffsetX = node.x - point.x;
  state.graphEditor.dragOffsetY = node.y - point.y;
  drawGraphEditor();
});
els.graphEditorCanvas.addEventListener("mousemove", (event) => {
  if (els.graphPanel.hidden || !state.graphEditor.dragging) return;
  const graph = getWorkingGraph();
  const node = graph.nodes.find((item) => item.id === state.graphEditor.dragging);
  if (!node) return;
  const point = graphPointerPosition(event);
  node.x = clamp(point.x + state.graphEditor.dragOffsetX, 0.06, 0.94);
  node.y = clamp(point.y + state.graphEditor.dragOffsetY, 0.08, 0.92);
  state.graphResult = null;
  drawGraphEditor();
});
window.addEventListener("mouseup", () => {
  if (!state.graphEditor.dragging) return;
  state.graphEditor.dragging = null;
  drawGraphEditor();
});
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    for (const runner of state.runners) {
      if (runner.card?.classList.contains("fullscreen")) {
        runner.card.classList.remove("fullscreen");
        runner.card.querySelector(".card-fullscreen-button").textContent = "Full";
        drawRunner(runner);
        return;
      }
    }
  }
  if (state.topic !== "graph") return;
  if (event.key === "Delete" || event.key === "Backspace") deleteGraphSelection();
  if (event.key === "Escape" && state.graphEditor.fullscreen) {
    state.graphEditor.fullscreen = false;
    els.graphPanel.classList.remove("fullscreen");
    els.graphFullscreenButton.textContent = "Fullscreen";
    drawGraphEditor();
  }
});
els.speedInput.addEventListener("input", (event) => {
  state.speed = Number(event.target.value);
});
els.sizeInput.addEventListener("input", (event) => {
  state.size = Number(event.target.value);
  if (state.topic === "graph") {
    setGraphStatus(`Random graph will use ${state.size} nodes.`);
    return;
  }
  state.customArray = null;
  els.arrayHint.textContent = "Size changed. The selected data mode will generate a new array.";
  els.arrayHint.classList.remove("error");
  stop();
  reset(true);
});
els.datasetSelect.addEventListener("change", (event) => {
  state.dataset = event.target.value;
  state.customArray = null;
  els.arrayHint.textContent = "Preset data selected. Use Apply to switch back to custom input.";
  els.arrayHint.classList.remove("error");
  stop();
  reset(true);
});
els.syncToggle.addEventListener("change", (event) => {
  state.sync = event.target.checked;
});
window.addEventListener("resize", drawAll);
window.addEventListener("resize", drawGraphEditor);

reset();



