---
title: 'Weekly learning review - decorators and generators in python'
date: 2024-12-15 08:37:00
---

## This week's review:

- What is meant by 'functions are first class objects', which are also first class citizens in programming
- Learning about decorators and generators in Python

### Functions as first class objects

When a programming language defines functions as first class objects, this means that functions can be treated with much power and flexibility such that they meet the following criteria:

- Can be used as values to be passed into other functions as arguments
- Can be treated as a variable
- Can be returned from other functions (like higher order functions)
- Can be stored in data structures such as arrays, lists, dictionaries, other objects / maps

Both Python and JavaScript treat functions as first class objects. This is also a core necessity to do functional programming.
Recall that a higher order function is a function that takes a function as an argument and can return a function as a result.

```
def sayHello():
   print("Hello")

greeting = sayHello

def greetMe(func, name):
    func();
    print("Hi {name}")

greetMe(sayHello, "Mark") // this will print Hello Hi Mark

```

### Decorators

Decorators are a way to modify functions or classes without changing the actual implementation of the function or class.
These generally look like wrappers around the function, and are used to add functionality in a clean, reusable way and modify the behaviour of the function.
Remember that decorators are also just functions.

**What are `*args` and `**kwargs` seen in functions?\*\*

If we need to pass in a function but do not know how many arguments or keyword arguments it has but require all of them to be accepted, this is where we use`*args` and `**kwargs` to cover these.`*args` refer to positional arguments which are generally collected into a tuple, while `**kwargs` refer to keyword arguments which are collected into a dictionary.

**Common cases for decorators:**

- Logging (could be for debugging purposes)
- Authorization and authentication
- Memoization (caching of results)
- Timing (measuring performance of execution between two points in a function from start to end)
- Validation

```
// example with simple logging
def logging_decorator(func):
    def wrapper(*args, **kwargs):
        print("Executing before function...")
        func(*args, **kwargs)
        print("Execution complete from function.")
    return wrapper

@logging_decorator()
def say_hello():
    print("Hello")


say_hello()
// This should print:
// Executing before function...
// Hello
// Execution complete from function.

```

### Generators

Generators are a type of iterator that generates items one at a time, yielding items as needed rather than all at once.
They are memory efficient when dealing with large datasets or streams of data as they do not require loading everything into memory at once.
They are meant to be 'lazy' and retain state.

```
def countdown(n):
    while n > 0:
        yield n
        n -= 1

# use the generator
gen = countdown(5)

# iterate over generator (note that this can only be used once)
for value in gen:
    print(value)

# This prints 5 4 3 2 1

```

Keywords in generators:

- `yield` - pauses function, saves state and allows execution to continue from that point when `next()`
  is called again
- `next()` - resumes generator function from the last yielded value

In JavaScript, these are represented using `function*` syntax, and can allow you to pause and resume function execution and yield multiple values over time.

```
function* countdown(n) {
    while (n > 0) {
        yield n;
        n -= 1;
    }
}

const gen = countdown(5);

gen.next.value(); // 5
gen.next.value(); // 4
gen.next.value(); // 3
...
// once generator has been exhausted, it will return undefined.

```

There can be many use cases for generators.

_I've only seen this used in redux sagas watchers and workers, on top of using a generator to create random numbers or keeping track of an index globally in an application in JS. Anticipating that these are used more often in Python for memory efficiency and performance._

### References

- [First-class function](https://en.wikipedia.org/wiki/First-class_function) - Wikipedia
- [Functions are first class objects - Computational Statistics in Python 0.1](https://people.duke.edu/~ccc14/sta-663/FunctionsSolutions.html#functions-are-first-class-objects) - Duke University
- [Python \*args and \*\*kwargs](https://www.programiz.com/python-programming/args-and-kwargs) - Programiz
- [Decorators](https://book.pythontips.com/en/latest/decorators.html) - Python Tips
- [Primer on Python Decorators](https://realpython.com/primer-on-python-decorators/) - Real Python
- [Understanding Generators in JavaScript](https://www.digitalocean.com/community/tutorials/understanding-generators-in-javascript) - Digital Ocean
- [function\*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*) - MDN
- [Generator object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator) - MDN
- [Iterators and generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators) - MDN
- [Generators](https://javascript.info/generators) - javascript.info
- ChatGPT to help explain these concepts (and using the above resources to verify them)
