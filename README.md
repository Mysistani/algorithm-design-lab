# Algorithm Design Lab

An interactive educational application for visualizing and comparing algorithms, developed as an Algorithm Design course project.

## Features

- Live graphical execution with adjustable speed.
- Run, pause, reset, step forward, and step back controls.
- Algorithm-specific inputs, sample data, and supported random datasets.
- Selected-algorithm complexity tables and educational theory panels.
- Interactive weighted graph editor with directed and undirected edges, draggable nodes, zoom, and fullscreen views.
- Comparisons of different approaches to selected problems.

## Algorithm Sections

- Sorting: bubble, selection, insertion, merge, quick, and heap sort.
- Searching: linear and binary search.
- Graphs: BFS, DFS, Dijkstra, Bellman-Ford, Floyd-Warshall, Kruskal, and Prim.
- Trees: preorder, inorder, postorder, BST search/insert/delete, heapify, and heap insert/delete.
- Recursion: Tower of Hanoi, Euclidean GCD, factorial, and recursive/memoized Fibonacci.
- Divide and conquer: binary search, min/max, large integer multiplication, Karatsuba, Strassen (2x2 demonstration), and tournament scheduling.
- Dynamic programming: matrix-chain order, bottom-up/memoized 0/1 knapsack, unbounded knapsack, LCS, LIS, and maximum tree path sum.
- Greedy: activity selection, fractional knapsack, job sequencing, Huffman coding, and nearest-neighbor TSP heuristic.
- Backtracking: N-Queens, subset sum, Hamiltonian cycle, and TSP.
- Branch and bound: 0/1 knapsack and TSP.
- Comparisons: activity selection, knapsack variants, shortest paths, TSP, and Hamiltonian cycle, including exhaustive approaches.

Knapsack variants have different constraints; their results are not interchangeable. BFS minimizes edge count, while weighted shortest-path algorithms minimize cost. The nearest-neighbor TSP heuristic does not guarantee an optimal tour.

## Run the Application

Open `index.html` in a modern browser. No npm packages, build step, or backend server are required for this source version.

The interface and visualizations are implemented in plain JavaScript, HTML, and CSS. Node.js is used for the automated test runner. The Python scripts are standalone tournament-scheduling references and are not required to run the interface.

## Tests

With Node.js installed:

```sh
node algorithm-tests.js
```

## Python References

With Python 3 installed:

```sh
python tournament.py
python tour4.py
```

Both scripts request the number of teams interactively. `tour4.py` continues prompting until interrupted.

## Project Files

- `index.html`: application layout and About page.
- `styles.css`: application styling.
- `app.js`: algorithms, visualization, inputs, and playback controls.
- `algorithm-tests.js`: automated correctness and input-validation checks.
- `assets/`: application icons and programmer portrait.
- `tournament.py` and `tour4.py`: Python tournament-scheduling references.
- `ROADMAP.md`: original planning notes; proposed tools and features may differ from the implemented application.

This repository contains the browser source and Python references. The Windows executable wrapper and its build project are not included here.

## About

- Developer: Mohammad Yasin Sistani
- University: Vali-e-Asr University of Rafsanjan
- Instructor: Dr. Fahimeh Dabbaghi
- Version: v1.0.0
- Creation date recorded in the application (Solar Hijri): 1405/5
- Contact: [@mysistani](https://t.me/mysistani)

The creation date above is the date recorded by the author in the application, independently of Git commit and GitHub publication dates.
