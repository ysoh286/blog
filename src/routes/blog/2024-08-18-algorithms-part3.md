---
title: 'Weekly learning review - Algorithms: Part I - 3'
date: 2024-08-18 20:30:00
---

This past week's goal is to complete the lectures from **Algorithms: Part 1** course on Coursera (modules 11 - 13).

Topics covered:

- Applications of balance search trees
- Hash tables
- Applications of symbol tables and hash tables

Other things:

- Learning python through FreeCodeCamp
  - completing Tower of Hanoi
  - going through mergesort algorithm
  - begun tackling time calculator project

### Applications of balance search trees

- Many of these applications are variations of balanced search trees
- 1d range search
- 2d orthogonal line segments (determining which line segments intesect or overlap with each other) can be resolve using a sweep line algorithm that is reduced to a 1d range search
- k-d range search can be resolved using a k-d (k-dimension) tree
- Resolving interval search (determining which intervals overlap with each other) using interval search trees
- Resolving 2d orthogonal rectangle intersection search (determining which rectangles intersect with each other) with sweep line with 1d interval search
- All of these reduce to logarithmic time

### Hash tables

- Although balanced search trees require order and achieve logarithmic time for both worst cases and average cases for many of its operations, can we do better?
- Hash tables are a solution for achieving better searching, inserting, deleting times and order doesn't matter
- Hash table: saving terms in a key-index table (where index is a function of the key, and the has function is the method for computing array index from the key)
- Uses equality checks
- In order to guarantee performance, these keys should spaced out uniformly to produce a table index (this is known as a uniform hashing assumption: each key is equally likely to hash to an integer between `0` and `M - 1`)
  - when the array is half empty, then the running time of filling these is constant
  - however, when the array is full, then we reach something known similar to the birthday problem, where it becomes close to square root time.
  - In order to resolve collision of two values being inserted into the same key: we can use separate chaining or linear probing
  - Separate chaining uses a linked list for each of the table positions (each table position has a linked list attached, insertion occurs at the front of the chain, search involves searching through that chain)
  - Logarithmic time for searching, inserting and deleting for the worst case, and the average case is constant time under the uniform hashing assumption
  - Linear probing is another method for resolving key collision, where it would find he next empty split and insert that value there
    - hases are still mapped from `0` and `M - 1`
    - insertion and searching depends if index is filled or free, otherwise, it moves to the next `index + 1` to see whether it's available or matches
    - This works well if the size of the array is significantly bigger and must be greater than number of key-value pairs (otherwise it will take increasingly longer for an array that's close to full)
    - Example of linear probing is modelling cars arriving on a 1 way street with a finite number of parking spaces (mean displacement is constant when half full, but increases to sqrt time when full)
    - Running time of linear probing is the same as separate chaining (logarithmic time for worst case, constant for the average case)
    - Linear probing has less wasted space, better cache performance
    - Separate chaining is easier to implement, less sensitive to clustering of values
- Hashing is used and important in security, modelling denial of service attacks (achieving uniform hashing assumption is very important and must be guaranteed)
- When to use a hash table and when to use a balanced search tree? Depends on use case.
  - hash tables are simpler to code, and works when you don't need ordered operations, faster for simple keys, better performance in practice on typical inputs
  - balanced search trees have stronger performance guarantee, used for ordered operations if order is required and important

### Applications of symbol tables and hash tables

- Implementation of `Set` API (holding a collection of unique keys)
- Dictionary lookups (Addresses, URL DNS lookups)
- File indexing, concordance (finding certain text occurrences in files)
- Using sparse vectors for complex matrix multiplication / dot-product calculations
  - when multiplying 2 matrices, generally takes quadratic time if they are large (nested loops)
  - In many applications, matrices can be large and sparse, meaning they are filled with many zeroes - in this case, this means we could reduce this calculation and the above algorithm is too expensive
  - Use a symbol table representation instead via a sparse vector where we store the non-zero values and iterate across that instead
  - This reduces the time down to constant time (depending on the number of rows in the matrix)

### Thoughts

It's been challenging understanding these algorithms after watching the course (and this is only part 1!), but it's shed light on how these algorithms are important and applied to applications and daily modelling problems around us. A bit eye opening to see some Java code for the first time, and luckily it was okay to follow (it does remind me a little of Typescript).

Still considering whether to watch part 2, but may look for another course or find more videos to watch that might help me understand these algorithms better before tackling some leetcode / algorithm problems.

Till next time!

### References

- [Algorithms, Part 1](https://www.coursera.org/learn/algorithms-part1) course on Coursera (modules 11-13)
