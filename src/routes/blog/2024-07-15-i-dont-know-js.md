---
title: "i still don't know js"
date: 2024-07-15 21:00:08
---

It's been 5+ years since I've been a front-end engineer.
As one, you're generally expected to know JavaScript, the main programming language for the web.

I thought I knew some, until I didn't. Pretty bad, huh?

I don't know JS. Kyle Simpson's books says it all: "YOU DON'T KNOW JS!" and we certainly don't.

5 things I've learned recently:

### 1. The real difference between == and ===

The `==` (abstract equality operator) and `===` (strict equality operator) are generally used for comparisons.
We often get told `==` only compares values while `===` compares both types and values.

e.g.

```
'1' == 1 // true
'1' === 1 // false
```

Though, that's only half true.

The actual answer:
`==` does actually compare types, but it does type coercion if the types are different before comparing values, while `===` does not. `===` does compare both types and values, but essentially if the types are NOT equal, then it will automatically return false.
`==` on the other hand will actually do exactly what `===` does if the types are equal. If the types are NOT equal, then it will try to do type coercion before comparing values. Refer to the [ECMAScript](https://262.ecma-international.org/5.1/#sec-11.9.3) spec for more details.

In summary, `==` will try to type coerce in the following order:

- If `A` is a primitive type, and `B` is not, it will try convert `B` into a primitive type for comparison.
- Generally, if `A` is a string / boolean (or some other primitive) and `B` is a number, then it will always try to convert `A` to a number.
- Note that empty string `""` gets converted to `0` which usually explains the (presumably 'weird', but actually is by design) behaviour that occurs when you compare different things in JavaScript with `==`.

### 2. `const` doesn't actually mean "constant" by english terms, but by programmatic terms which are NOT the same

Ever wondered why `const` was called `const` when we can do something like this:

```
const a = ['ABC'];

a[1] = 'XYZ';

console.log(a); // ['ABC', 'XYZ']
```

Wait what? Isn't it supposed to be constant though? Why did it change?

Actual answer:

- What `const` (constant) means in programming terms differs from what it means in english.
  In english, we expect `constant` to mean fixed, immutable, cannot be changed whatsoever.

But in programming terms, it means **a variable that CANNOT be re-assigned**.

This explains this behaviour where we cannot reassign `const` variables, however you can still mutate them like above.

```
const a = 'hello';

a = 'goodbye';
// throws TypeError (assignment to constant variable)
```

### 3. The difference between a function declaration and a function expression, is declaring `function` being at the start and its enclosing scope

```
// function declaration
function sayHello(name) {
    console.log(`Hello ${name}!`);
}


// function expression
var sayHello = function() {
    console.log(`Hello ${name}!`);
}
```

Above, the function expression has defined its own function scope, while the function declaration has access to its enclosed scope and has its name attached.

### 4. Closures aren't about just storing data or values, it's about lexical scope

Generally, when we get asked about closure, we tend to explain it through being able to access data that's not in the same scope or storing values.

Actual answer:

> When a function 'remembers' its lexical scope even when the function is executed OUTSIDE of that lexical scope.

```
function multiply() => {
    let value = 10;

    // inner function has access to outer variable
    // and preserves it
    function multiplyBy2() {
        return value * 2;
    }
    multiplyBy2();
}

multiply();
```

### 5. Hoisting is just a name for describing some 'complex' behaviour in JavaScript, but is all tied to lexical scoping and how it works at compile and execution time.

What hoisting is sometimes described as:

- moving variable and function declarations at the 'top'
  ...even though that's not actually what happens.

Actual answer: JavaScript gets compiled, then executed. During the compilation phase, scopes are created (global, function, block) for variable declarations. However, values are assigned during execution phase. This explains why sometimes when you write functions before you actually call them, JS has no problem executing, as the function scopes are already defined before execution.

```
sayHello();

function sayHello(name) {
    console.log(`Hello ${name}`);
}
```

Similarly, you can do this with variables as well, but it's usually bad to (and generally not a good idea).

```
a = 'hmm';

var a;
```

What about `const` and `let` ? These do get 'hoisted' but because they are uninitialised, it leads to the need of the `TDZ` = known as the temporal dead zone, which is needed as `const` cannot be initialised as 'undefined' only to be reassigned later (as this would break the definition of `const` in programming terms). Generally when we define `var`, its initial value is `undefined`.
We rarely get this error as we are strongly advised to always declare `const` and `let` with actual assignments anyway.

There's definitely more to come as I continue to keep learning!

References / credits to:

- Kyle Simpson's [Deep JavaScript Foundations](https://frontendmasters.com/courses/deep-javascript-v3/) course on FrontEnd Masters
- Kyle Simpson's ["You Don't Know JS"](https://github.com/getify/You-Dont-Know-JS)
- [JavaScript questions](https://www.frontendinterviewhandbook.com/javascript-questions) in the Front End Interview Handbook
