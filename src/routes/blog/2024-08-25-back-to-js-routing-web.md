---
title: 'Weekly learning review - back to JS, exploring routing and web components'
date: 2024-08-25 22:30:00
---

This week's been diving back into JS fundamentals.

Things in progress:

- Completed watching Kyle Simpson's JavaScript Deep Foundations course
- 75% of the way through Maximiliano Firtman's You Might Not Need A Framework course
- Started reading Steve Schoger, Adam Wathan's Refactoring UI book

Motivation behind this is to learn more about JavaScript in more detail and learn other ways to build applications without relying on libraries. Been feeling a bit trapped lately in React (and using it for the past few years even though I've yet to dive deeper into it) and been focusing on learning the fundamentals and concepts rather than learning another framework. Frameworks are tools to help solve problems, and there are some cases where it could be appropriately used, and other situations it may not be. Mental models of JavaScript are challenged through by understanding the language itself, rather than just 'assuming' and we as engineers should always be encouraged to read the ECMAScript more.

3 more things learned about JS (notes and examples adapted from Kyle Simpson's Deep JavaScript Foundations course):

### When asked about what `this` keyword is and what it refers to, it's dependent on HOW it is called (the execution context), NOT where it is declared.

There are 4 different types of binding on the `this` keyword.

#### Explicit binding via `call`, `apply`

```
const player1 = {
    user: 'Henry',
};

const player2 = {
    user: 'Dora',
};

function greet(greeting) {
    console.log(greeting, this.user);
}

greet.call(player1, "Hello ");
// Hello Henry!

greet.apply(player1, ["Hello "]);
// Hello Dora!
```

The difference between `call` and `apply` is the arguments. Both of them explicitly allow for binding of a context to define `this` in the first argument, with the next arguments following on to be applied to the function itself (as seen as above, with `player1` attached as the context, `this.user` refers to `player1.user` which equates to `Henry`, and for the second argument, `greeting` is `Hello`).

Similarly, we can also use `bind` for explicit binding. This is more uncommon as it does mean a hard bind - use it only when necessary. Previously when defining class components in React, we would see this when we bind event handlers to the component itself.

#### Implicit binding can be found in objects

```
const player1 = {
    user: 'Henry',
    greet(greeting) {
        console.log(greeting, this.user);
    },
};

player1.greet('Goodbye ');
// Goodbye Henry
```

This makes sense, as the object itself has the function, and the execution context refers to the object itself, which has `user` defined.

#### Default binding can occur

Note that if we defined a function and a global variable in non-strict mode, `this` keyword could default to the global scope.
`this` will keep finding its closest 'scope' / execution context until it can find a valid value. Most of the time, we should probably be using implicit or explicit binding unless there's a specific use case for this.

```
var user = 'Henry';

function greet(greeting) {
    console.log(greeting, this.user);
}

greet("Hello "); // Hello Henry (defaults to global)

function greetStrictly(greeting) {
    "use strict";
    console.log(greeting, this.user);
}

greetStrictly("Goodbye "); // Throws type error due to strict mode

```

Note that this should be strongly avoided, and we should always be using strict mode.
Strict mode on the other hand, would throw a type error as `this` would be undefined, and thus `this.user` would not be found.

#### binding via `new` keyword can also affect what `this` returns or refers to (see the next point)

So how do we determine what `this` returns? Depends on a couple of factors:

- How is it called? Who and what is calling it (how it is being executed)?
- Rules of precedence based on the 4 different types:
  new keyword > call / apply / bind (explicit) > context of object (implicit) > default binding
- Arrow functions do NOT define `this` keyword, and rather they have lexical scope instead. Rule of thumb is to not use `this` in arrow functions (unless it's a special case).

### The `new` keyword does lot more than we think it does

4 things `new` keyword does:

- creates brand new empty object
- links that object to another object
- calls function with `this` set to the new object
- if function does not return object, then returns `this`

This is another way to create and invoke a function, but `this` would generally point to an empty object.

```
function greet(greeting) {
    console.log(greeting, this.user);
}

const newObject = new greet("Goodbye");
// Goodbye undefined (returns undefined)
```

Another way of interpreting this is `function.call({})` - which sets the context to be a new object. Thus, depending on what the object has, that will determine what `this` will be.

### `class` in JavaScript is not just syntactic sugar for defining classes and doing OOP

Are we really doing real OOP just from using `class` keyword? Not exactly.
Defining a class in JavaScript has its own mechanism and allows for extension and inheritance of methods from parent to children. These are built on prototypes rather than instances, and thus are dynamic rather than static.
The `super` keyword is used to allow for something known as `relative polymorphism`.

_May come back to this one to dive a bit into relative polymorphism and the idea that JavaScript uses delegation-oriented design for prototypes and define prototypal inheritance._

And a few other things explored:

### The difference between `getQuerySelectorAll` and `getElementsByClassName` is that `getQuerySelectorAll` returns a static collection (`NodeList`), while the rest return a live `HTMLCollection`

All of these could return nothing if no elements are found, and these do seem to have an array-like interface, but it's not quite the same. HTML collections don't have the modern `Array` interface (e.g. filter, map, reduce are not available), meanwhile `getQuerySelectorAll` does.
The reason for this is backwards compaibility of browsers and when DOM API was created, there were no array APIs available. To get around this, we can use `Array.from(HTMLCollection)`.

### Why did we try put `<script>` tags at the end of the `<body>` in HTML pages a few years ago, and now we use `async` and `defer`? For performance and to control when these scripts should load

A few years back, we used to put all our script tags close to the end of the HTML page, reason being we would load all the HTML content and styles first, before loading the JavaScript to make pages seem to 'load' faster and let the browser parse HTML content first.
Nowadays, we use

```
<script defer src="insert-src-link"></script>
```

closer to the top of the page before the `<body>` tag, which allows the browser to parse HTML, find script, download in parallel while it continues to parse the rest of the HTML content. When parsing has complete, then it executes the JavaScript.

`async` is less commonly used, but it just means we've explicitly stated that it should be executed as soon as possible (i.e. cannot be deferred once file has downloaded and is completely downloaded, then parsing will stop and then execute the script). Some use cases include analytics or small scripts that have to be sent immediately.

### Web components and custom elements allow us to create custom HTML elements

Web components seem like the future and look promising for creating custom HTML elements as it is being evolved and fully supported by all web browsers. These elements have their own lifecycle methods that can be hooked into. Note that these need to be defined and imported via JS before they can be used in HTML.
These come with a set of standards that should be learned and are up to the developer on how they can be defined and used (as long as we understand these standards - which include understanding the shadow DOM).

_May do a separate post on this as this is an area I'm keen to dive into and learn more about!_

### Routing can be implemented via the `history` API

Wondered what routing is and how it's done? In simple terms, we're pretty much trying to navigate between sections on a single page application, but without sending actual data to the server and manipulating the URL. The `history` API allows use to achieve this by pushing entries to navigation history, and allows us to track history on a single page application (say hello to back buttons!), and be able to listen for these changes and respond accordingly.
A few handy things to look into:

- `popstate` event that can be listened to
- `history.pushState` to push to navigation history

References:

- Kyle Simpson's [Deep JavaScript Foundations](https://frontendmasters.com/courses/deep-javascript-v3/) course on FrontEnd Masters
- Kyle Simpson's ["You Don't Know JS"](https://github.com/getify/You-Dont-Know-JS)
- [JavaScript questions]
- Maximilian Firtman's [Vanilla JS: You Might Not Need A Framework](https://frontendmasters.com/courses/vanilla-js-apps/introduction/) course on FrontEnd Masters
- MDN - [script HTML element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)
- MDN - [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API)
- MDN - [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)
- webcomponents.org - [Introduction to Web Components](https://www.webcomponents.org/introduction)
- Scott Schoger, Adam Wathan - [Refactoring UI](https://www.refactoringui.com/)
