---
title: 'Weekly learning review - python basics'
date: 2024-12-01 20:00:00
---

## This week's progress:

- Started and completed Nina Zakharenko's Practical Guide To Python (mostly a beginner refresher, but a few quirks learnt about python)

## Summary:

On basic python with quirks and gotchas:

- `import antigravity` opens up kcxd comic about python (easter egg)
- `import this` prints out the zen of python (which is so good from a code standpoint)
- `None` is valid (it's similar to `null` in JS)
- A list is similar to that of JS's array `[]` / `list()`
- Sets are used to identify unique values - use `set()` to create a set

```
unique_values = set(1, 2, 4, 6, 6, 8)
unique_values // 1, 2, 3, 4, 6, 8
```

- Tuples are represented using parentheses and are immutable (cannot be updated like a list, have order)
  - Notes that the comma and the parentheses makes the tuple, not just the parentheses
  ```
  (1,) // is a tuple
  tuple(,) // is a tuple
  () // is also a tuple
  1, // is also a tuple (but avoid doing this)
  ```
  - we can unpack tuples provided we match the number of values inside the tuple
  ```
  colours = ("Red", "Blue", "Green")
  red, blue, green = colours
  ```
- Dictionaries are used to store data in key value pairs (like objects in JS)
  - keys must be immutable data types
  - `{}` / `dict()` to declare a dictionary
  - cannot use indices to access values, and rather use keys to access values
  ```
  dict.keys() // returns keys
  dict.values() // returns values
  dict.items() // returns items
  ```
  - To delete, there is `del` but we're better off using `pop` instead
- Do NOT use mutable types as default arguments for functions. The reason for this is that the argument only gets declared and instantiated once under the hood and continues using that same instance. Rather - if you need to have a new value every time, define it inside the function rather than as an argument.
  - do NOT put lists as an argument, use a placeholder argument instead (such as `None`)
- Use `is` and `is not` when you need to check equality with boolean values such as `None`, `True`, `False` rathe r than `==` and `!=`
  - favour `5 is True` over `5 == True`
- Use `enumerate` to loop over a list and its index - this returns a list of tuple values with index as the list and value at that index in that list

```
characters = ["Harry Potter", "Aragon", "Wednesday Addams"]

enumerate(characters)
list(enumerate(characters))
// [(0, "Harry Potter"), (1, "Aragon"), (2, "Wednesday Addams")]

for index, character in enumerate(characters):
    print(f"Character found at {index}: {character}")
```

- To loop over a dictionary, use a for loop and loop over `dict.items()`

```
characters = {
    "HP": "Harry Potter",
    "A": "Aragon",
    "WA": "Wednesday Addams",
}

for key, character_name in characters.items():
    print(f"Character abbreviation {key} with character name: {character_name}")

```

- List comprehensions, dictionary comprehensions are ways to help go through a list and return an output of either a list or dictionary based on those values
  `[what-to-run for value in list]` - list comprehension
  `{what-to-run/return-in-key-value-pair for value in list}` - dictionary comprehension

```
// list comprehension
character_names_length = [len(character) for character in characters]
```

- A generator is a type of iterable object like a list but we can iterate through each and return something once
- Once exhausted, it cannot be used again (state lost) - generally used for optimization and is considered a gotcha as python uses these a bit under the hood to improve memory
- cannot reference items in a generator without converting it to a list
- To define exceptions, use `try / except` blocks, and filter out certain exception / error types for easier debugging
- We can slice backwards by using negative values (e.g. `string_to_slice[-1]` will return the last character in `string_to_slice`)
- `__main__` and `__init__` are known as 'magic' methods (special methods in python)
  - `__init__` is generally used to define instance variables and as a constructor inside classes
  - `__main__` is used inside modules and is meant to only run once in a standalone program when imported elsewhere

## References

- Nina Zakharenko's [Practical Guide To Python](https://frontendmasters.com/courses/practical-python/introduction/) course on FrontEnd Masters
