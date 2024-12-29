import{a as i,t as a}from"./disclose-version.CF8kLgI2.js";import"./legacy.C4HDMYEH.js";import{q as o}from"./runtime.D_tNg0db.js";const d={title:"Weekly learning review - Algorithms: Part I - 2",date:"2024-08-11T21:10:00.000Z"};var r=a('<p>This past week’s a continuation of going through <strong>Algorithms: Part 1</strong> course on Coursera.</p> <p>Topics covered this week:</p> <ul><li>priority queues</li> <li>binary heaps</li> <li>heapsort</li> <li>symbol tables</li> <li>binary search and binary search trees (BSTs)</li> <li>2-3 search trees, red-black BSTs</li></ul> <p>Other things:</p> <ul><li>Learning python through FreeCodeCamp <ul><li>completing the arithmetic arranger</li> <li>Password generator</li> <li>Dijkstra’s shortest path algorithm</li> <li>Tower of Hanoi</li></ul></li></ul> <h3>Priority queues</h3> <ul><li>Priorities queues are a queue / data structure that allows us to search, insert and remove the largest (or smallest) item in the queue.</li> <li>Usually allows us to find the largest x items in a stream of N items (examples include fraud detection to detect large suspicious transactions, file maintenance of large files in directories)</li> <li>Can be implemented via a linked list or an dynamic sized array</li> <li>has an extra <code>deleteMax() / deleteMin()</code> function, which takes at most <code>log N</code> time for an ordered array</li> <li>Applications include event driven simulation, modelling particle collision in physics</li></ul> <h3>Binary heaps</h3> <ul><li>A <strong>binary tree</strong> is a node with links left or right to the tree (or pretty much a node with 2 links), and a complete tree is a balanced tree except for the bottom level</li> <li>A <strong>binary heap</strong> is an array representation of a binary tree (keys are represented as nodes), keys are moved around such that parents should always be larger than children (known as a “swim” / promotion or a “sink” / demotion)</li> <li>swim = going up the heap / tree (promotion)</li> <li>sink = going down the heap / tree (demotion)</li> <li>Common operations include insertion, deletion (deleting maximum) - to assist sink, swim operations are added</li></ul> <h3>Heapsort</h3> <ul><li>A heapsort is an in-place sort that takes the largest value of the tree and swaps it where it should be, and then removes that node to put it at the end. This requires a sink to ‘demote’ the swapped value in order to achieve heap principles (which is that the top / root / parent should always have the largest value)</li> <li>in-place algorithm which sorts with N log N running time as the worst case, in comparison to mergesort that requires extra space, and quick sort which has quadratic time as the worst case possible if not shuffled</li> <li>Although theoretically it is optimal, it’s not used often as it generally does take longer than quicksort in some practical cases, is unstable and is not memory efficient.</li></ul> <h3>Symbol table</h3> <ul><li>A symbol table is a key-value pair abstraction that allows insertion of a value for a given / specified key, or search for a value given a key</li> <li>Has <code>get()</code> , <code>put()</code> , <code>delete()</code> utilities</li> <li>A sequential search for an unordered list would include searching through all elements until we find a match, and inserting would also do the same, modify if match found otherwise insert at the end - this is not efficient as it takes N time for both operations.</li> <li>A <strong>binary search</strong> requires an ordered list and searches better than a sequential search, where it can take <code>log N</code> for searching for both worst and average cases.</li> <li>In the case for ordered lists or algorithms that perform better when things are ordered - there are more operations to account for: <ul><li>insert / deletes</li> <li>min / max</li> <li>floor / ceiling</li> <li>rank</li> <li>select</li> <li>search</li></ul></li></ul> <h3>Binary search tree</h3> <ul><li>A binary search tree is a tree that is in symmetric order and has 2 disjointed binary trees left and right, where each node has a key and is larger that all keys in its left subtree, and smaller than all keys in its right subtree</li> <li><code>left</code> and <code>right</code> nodes are tracked in each <code>node</code></li> <li>algorithm for insertion / search requires recursion (for search - if less go left, else go right until the end, while for insertion - if less go left, else go right. If value is null, insert or end search)</li> <li>Logarithmic time (~2 ln N) for insertion and search for the average case.</li> <li>Deleting a node in a binary search tree isn’t so simple <ul><li>‘tombstone’ method / lazy delete - where it’s not really deleted, and node is just updated to <code>null</code></li> <li>Hibbard deletion is considered (where we swap the node to be deleted with its successor), but has flaws as it makes the tree asymmetric and unbalanced, which presents problems and we should NOT have a dynamic changes <ul><li>When tree is no longer balanced and random, then operations for the worst case will take <code>sqrt(N)</code> which is worse than the balanced binary search tree. Thus, we need a better algorithm to guarantee better and optimal performance (this is found in the red-black BST)</li></ul></li></ul></li></ul> <h3>Red-black BSTs</h3> <ul><li>A way to guarantee logarithmic performance for binary search trees</li> <li><strong>2-3 trees</strong> are 2-node or 3-node trees <ul><li>2 node = 1 key with 2 children</li> <li>3 node = 2 keys, 3 children</li></ul></li> <li>Must be perfectly balanced and symmetric</li> <li>If a 4-node occurs, this must be ‘promoted’ and split into 2 nodes</li> <li>2-3 trees has transformations to maintain this symmetric order and balance where operations are guaranteed logarithmic run time <code>c log N</code></li> <li>However, the implementation for 2-3 trees is complex, thus we consider red-black BSTs instead</li> <li><strong>Red black BST</strong>: BST that has no 2 red links connected to it, every path from root to link has the same number of black links, and red links all lean left (“internal” left leaning links act as “glue” for 3 nodes) <ul><li>all operations are pretty much the same implementation as a BST with the exception of insertion to achieve balance</li> <li>Utilities to help include identifying whether a node is <code>red</code> link, or a <code>black</code> link, or whether a <code>leftRotation</code> or <code>rightRotation</code> is required (these are required as red-black BSTs are required to be left leaning, <code>rightRotation</code> is generally temporary state to achieve left leaning later), or to flip colours of a link (turn a <code>red</code> link to <code>black</code> link after rotation if applicable for a temporary 4-node being split into 2-nodes)</li> <li>Recursion makes this algorithm straightforward to implement (but complex to understand) and covers several edge cases. If we had to impelment this without recursion, it would be difficult due to the number of edge cases to be considered.</li> <li>Height of a red-black BST is at most less than or equal to <code>2 log N</code>, and thus the operations (including deletion via Hibbard’s deletion) would take at most logarithmic running time.</li></ul></li> <li>Applications include file system model in operating systems and databases, treemap / treeset utilities, stack scanning</li></ul> <p>Should hope to wrap up the lectures from this course and dive deep into implementing these from scratch soon.</p> <h3>References</h3> <ul><li><a href="https://www.coursera.org/learn/algorithms-part1" rel="nofollow">Algorithms, Part 1</a> course on Coursera (modules 8-10)</li> <li>More about <a href="https://mathcenter.oxford.emory.edu/site/cs171/hibbardDeletion/" rel="nofollow">Hibbard Deletion</a> - Oxford College CS171</li></ul>',1);function h(e){var t=r();o(38),i(e,t)}export{h as default,d as metadata};