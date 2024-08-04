---
title: 'Weekly learning review - Algorithms: Part I - 1'
date: 2024-08-04 23:30:08
---

Motivation for learning basic algorithms and data structures:

- To get to that 'next' level
- Be able to make better technical decisions and be a better software engineer (is an array / map even correct? Nodes? Linked list? Stacks? The most optimal? Nested or flat? Performance and space time complexity is key - surely, there must be some learnings for this)
- Do better at technical interviews
- Useful in many applications
- Learning and growth (that I haven't felt for a very long time... I feel like my brain's been starved)

Currently learning from Princeton's Algorithms course on Coursera. These will be summaries of what I've learned recently in the past week or so.

### Why algorithms are important

- Empirical way to solve problems
- Even having the most fastest supercomputer won't solve everything if an algorithm is too slow or takes too long. This is why having a good algorithm and using the correct data structure is important.
- Optimal performance / space and time complexity is key.
- Avoid quadratic / exponential running time, aim for constant, linear, logarithmic, or linearithmic time.

### Quick find and quick union algorithms for connectivity problems

- Generally for a given a set of objects, see if they are connected or not, or connect them via `union`.
- Primarily used to solve connectivity / network problems
- Defines whether two values are `connected`, or `union` (connect) two values together
- **Quick find** algorithm is naive and too slow (quadratic running time which is bad)
- **Quick union** algorithm is slightly faster, but still too slow (quadratic time)
- Improvements proposed for quick union is to do a weighted quick union (where we attach smaller trees to larger trees), coupled with a path compression (connect nodes to closest to its parent to 'compress' trees and avoid having tall tree nodes) which makes it closer to linearithmic running time (for worst case)

### Stacks, queues and bags (linked list and array implementations)

- These are data structures used for a collection of objects needing to insert, remove, iterate or test if data structure is empty
- **Stack** (as the name suggests) takes a LIFO approach (last in, first out) - like a stack of paper, you can put things on top (push) or take remove things from the top first (pop)
- **Queue** on the other hand takes a FIFO approach (first in, first out) - inserting at the front means to enqueue, while removing the last element means to dequeue.
- These can either be implemented using a linked list (via nodes - but the order of assignment matters depending on which operation is done such as pop, push, enqueue, dequeue), or an 'dynamic sized' array (or do 'repeated doubling' for languages that have fixed sized arrays to allow for dynamic capacity - e.g. when pushing an element past its fixed size)
- Most operations are linear (N) or constant time
- A **bag** is just a data structure for adding items to a collection, order does not matter (there is no removal, just insertion)
- Applications of stacks and queues:
  - Back button of a web browser
  - Undo feature on applications
  - JavaScript's call stack
  - SQS in AWS (FIFO approach)

### Sorting algorithms

There are many different sorting algorithms.
The main ones are:

#### Selection sort

    - iterate over unsorted array, and find the index of the minimum smallest remaining entry and swap the two values in-place and repeat until the end (quadratic time, regardless of whether input is sorted or not)

#### Insertion sort

    - iterate over unsorted array, and swap value with each larger entry to the 'left' of the array and repeat until pointer has gone from left to right (generally twice as fast as selection sort, and can depend on whether array is partially sorted or not, works better when partially sorted due to less exchanges made = less work to do, though can be quadratic time in worst case)

#### Shell sort

    - pretty much the same as insertion sort, but instead of jumping by 1 at a time, it jumps every nth element or hth element (~3h + 1 is an example), does have some increase in performance compared to usual insertion sort

#### Merge sort

    - divide array into 2 halves, recursively sort each half (subarrays) and then merge the two halves
    - this uses an auxillary array (ie requires more space rather than sorting in-place compared to previous algorithms), but is lot more performant than the previous sorting algorithms (as it is linearithmic running time)
    - recommended to use insertion sort for small subarrays, as mergesort does have some overhead (due to recursion)
    - can consider 'bottom-up' mergesort as an improvement
    - has stability (i.e. able to sort and preserve relative order - e.g. if we sort by two or more different keys (such as name and location) and had equal / duplicate keys, this is preserved) and gurarnteed performance, but uses more memory

#### Quick sort

    - shuffle array, partition array with a partitioning element so that there are no larger entries to the left of the element, and no smaller entires to the right of the element, then sort left side, sort right side recursively then merge
    - most of this is in-place, thus no extra space required, and has better running time than mergesort
    - shuffling is required to ensure performance guarantee as this algorithm does produce worst cases when array is partially or fully sorted
    - NOT stable (as partitioning requires moving items across larger distances)
    - consider using insertion sort for smaller subarrays
    - When dealing with duplicate keys, consider a 3-way partition instead (where duplicated keys are grouped together before sorting and merging)
    - uses less memory and faster, but not stable

- Implementing a **shuffle** is important in some cases to guarantee performance (as seen in quicksort)
  - iterate over array and pick integer between 0 and i randomly using a uniform distribution (`Math.random` in JS is close), then swap between the two values, and go from left to right

Which one to use? Depends on your use case, but generally, quicksort and mergesort are the ones that are most widely used due to performance and being 'generally good enough' for most cases.
It all depends on whether we need stability, or if we have duplicate or distinct / unique keys, the numebr of items we are sorting, and how they are ordered, or whether we need to meet performance or space requirements.

References:

- [Algorithms, Part 1](https://www.coursera.org/learn/algorithms-part1) course on Coursera (modules 1-7)
