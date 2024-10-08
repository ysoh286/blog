---
title: 'Weekly learning review - Algorithms: Part I - 2'
date: 2024-08-11 21:10:00
---

This past week's a continuation of going through **Algorithms: Part 1** course on Coursera.

Topics covered this week:

- priority queues
- binary heaps
- heapsort
- symbol tables
- binary search and binary search trees (BSTs)
- 2-3 search trees, red-black BSTs

Other things:

- Learning python through FreeCodeCamp
  - completing the arithmetic arranger
  - Password generator
  - Dijkstra's shortest path algorithm
  - Tower of Hanoi

### Priority queues

- Priorities queues are a queue / data structure that allows us to search, insert and remove the largest (or smallest) item in the queue.
- Usually allows us to find the largest x items in a stream of N items (examples include fraud detection to detect large suspicious transactions, file maintenance of large files in directories)
- Can be implemented via a linked list or an dynamic sized array
- has an extra `deleteMax() / deleteMin()` function, which takes at most `log N` time for an ordered array
- Applications include event driven simulation, modelling particle collision in physics

### Binary heaps

- A **binary tree** is a node with links left or right to the tree (or pretty much a node with 2 links), and a complete tree is a balanced tree except for the bottom level
- A **binary heap** is an array representation of a binary tree (keys are represented as nodes), keys are moved around such that parents should always be larger than children (known as a "swim" / promotion or a "sink" / demotion)
- swim = going up the heap / tree (promotion)
- sink = going down the heap / tree (demotion)
- Common operations include insertion, deletion (deleting maximum) - to assist sink, swim operations are added

### Heapsort

- A heapsort is an in-place sort that takes the largest value of the tree and swaps it where it should be, and then removes that node to put it at the end. This requires a sink to 'demote' the swapped value in order to achieve heap principles (which is that the top / root / parent should always have the largest value)
- in-place algorithm which sorts with N log N running time as the worst case, in comparison to mergesort that requires extra space, and quick sort which has quadratic time as the worst case possible if not shuffled
- Although theoretically it is optimal, it's not used often as it generally does take longer than quicksort in some practical cases, is unstable and is not memory efficient.

### Symbol table

- A symbol table is a key-value pair abstraction that allows insertion of a value for a given / specified key, or search for a value given a key
- Has `get()` , `put()` , `delete()` utilities
- A sequential search for an unordered list would include searching through all elements until we find a match, and inserting would also do the same, modify if match found otherwise insert at the end - this is not efficient as it takes N time for both operations.
- A **binary search** requires an ordered list and searches better than a sequential search, where it can take `log N` for searching for both worst and average cases.
- In the case for ordered lists or algorithms that perform better when things are ordered - there are more operations to account for:
  - insert / deletes
  - min / max
  - floor / ceiling
  - rank
  - select
  - search

### Binary search tree

- A binary search tree is a tree that is in symmetric order and has 2 disjointed binary trees left and right, where each node has a key and is larger that all keys in its left subtree, and smaller than all keys in its right subtree
- `left` and `right` nodes are tracked in each `node`
- algorithm for insertion / search requires recursion (for search - if less go left, else go right until the end, while for insertion - if less go left, else go right. If value is null, insert or end search)
- Logarithmic time (~2 ln N) for insertion and search for the average case.
- Deleting a node in a binary search tree isn't so simple
  - 'tombstone' method / lazy delete - where it's not really deleted, and node is just updated to `null`
  - Hibbard deletion is considered (where we swap the node to be deleted with its successor), but has flaws as it makes the tree asymmetric and unbalanced, which presents problems and we should NOT have a dynamic changes
    - When tree is no longer balanced and random, then operations for the worst case will take `sqrt(N)` which is worse than the balanced binary search tree. Thus, we need a better algorithm to guarantee better and optimal performance (this is found in the red-black BST)

### Red-black BSTs

- A way to guarantee logarithmic performance for binary search trees
- **2-3 trees** are 2-node or 3-node trees
  - 2 node = 1 key with 2 children
  - 3 node = 2 keys, 3 children
- Must be perfectly balanced and symmetric
- If a 4-node occurs, this must be 'promoted' and split into 2 nodes
- 2-3 trees has transformations to maintain this symmetric order and balance where operations are guaranteed logarithmic run time `c log N`
- However, the implementation for 2-3 trees is complex, thus we consider red-black BSTs instead
- **Red black BST**: BST that has no 2 red links connected to it, every path from root to link has the same number of black links, and red links all lean left ("internal" left leaning links act as "glue" for 3 nodes)
  - all operations are pretty much the same implementation as a BST with the exception of insertion to achieve balance
  - Utilities to help include identifying whether a node is `red` link, or a `black` link, or whether a `leftRotation` or `rightRotation` is required (these are required as red-black BSTs are required to be left leaning, `rightRotation` is generally temporary state to achieve left leaning later), or to flip colours of a link (turn a `red` link to `black` link after rotation if applicable for a temporary 4-node being split into 2-nodes)
  - Recursion makes this algorithm straightforward to implement (but complex to understand) and covers several edge cases. If we had to impelment this without recursion, it would be difficult due to the number of edge cases to be considered.
  - Height of a red-black BST is at most less than or equal to `2 log N`, and thus the operations (including deletion via Hibbard's deletion) would take at most logarithmic running time.
- Applications include file system model in operating systems and databases, treemap / treeset utilities, stack scanning

Should hope to wrap up the lectures from this course and dive deep into implementing these from scratch soon.

### References

- [Algorithms, Part 1](https://www.coursera.org/learn/algorithms-part1) course on Coursera (modules 8-10)
- More about [Hibbard Deletion](https://mathcenter.oxford.emory.edu/site/cs171/hibbardDeletion/) - Oxford College CS171
