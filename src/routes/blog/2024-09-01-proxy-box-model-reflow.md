---
title: 'Weekly learning review - ES6 Proxy, CSS Box Model, Reflow'
date: 2024-09-01 22:15:00
---

This week's progress:

- Completed Maximiliano Firtman's You Might Not Need A Framework course
- 25% through Evgenii Ray's Front End Systems Design course
- Continue reading Steve Schoger, Adam Wathan's Refactoring UI book

A summary of things learnt:

### ES6 Proxies

What is a proxy? Pretty much a way for an object to be listened to and react to certain fields when fields change or are set. We can determine the behaviour and how it responsed when the object changes over time. It's like a middleman for the object, and we change it rather than changing the object directly.
An example of using a proxy is when we want to facilitate changes whenever an object's key or value has changed (sort of like a global store of data, or listening to form input changes tied to data in the form of an object).
This is one way to achieve reactive programming.

```
const userDetails = {
    name: 'John Doe',
    phone: '1234567890',
    email: 'johndoe@email.com',
}

const userDetailsProxy = new Proxy(userDetails, {
    set(target, property, value) {
        target[property] = value;
        // trigger any other actions whenever value is set
        console.log(`Setting ${property} in user details to ${target[property]}`);
        ...
        // note that we must return boolean for this to work
        return true;
    },
    get(target, property) {
        console.log(`Retrieving ${property} from user details: ${target[property]}`);
        return target[property];
    }
});

// We should expect the below to log to the console as we change and interact with the proxy

userDetailsProxy.name = 'Harry Potter';
// Setting name in user details to Harry Potter

userDetailsProxy[name]
// Retrieving name from user details: Harry Potter

```

However, these are not widely used, as they are not exactly performant, thus may not be the right choice for larger applications. It could work just fine for smaller applications though where performance may not be an issue or has significant impact on user experience.

### The CSS box model

The box model is the idea that every element that is rendered on the page in the browser can be represented inside a box, and it has the following properties:

- Content (area that contains the content)
- Padding (box that surrounds the content)
- Border (space of the border that also surrounds the content and padding)
- Margin (external space outside of the element's border)

Some of these are optional, while others are always defined.

There are 2 main properties that define the box:

- box size (intrinsic - determined by content, or restricted - defined by width and height, or certain layouts defined by flex or grid)
- box type (`display` property - whether it's block, inline, or both, or anonymous and its `box-sizing` - border box or content box)
  - block elements will always break onto a new line, width and height properties are respected (if not, will just fill 100% of the space)
  - inline elements will flow and not break onto a new line, width and height properties are ignored and generally laid out in normal flow

### What exactly is reflow / layout thrashing?

> _Reflow happens when a browser recalculates the position and geometry of certain parts of a webpage, such as after an update on an interactive site._ - MDN

To explain this, recall how the browser renders an HTML page (simplified):

- HTML is parsed, browser compiles this into trees
  - DOM (document object model)
  - CSSOM (CSS object model)
- The DOM and CSSOM are combined to create the render tree
- This will go through the rendering and layout engine (draw bitmap through paint phase, then composite layers to arrange page in the right order).

Reflow can occur in many ways, one being using JavaScript to update the DOM tree or styles of a certain element - this causes the DOM to be recalculated and the positions have all changed and rerendered.
When this occurs often, this can affect and hurt performance of the website, and can eventually end up blocking the main thread due to recalculating positions are CPU bound.
To avoid reflow, try to offload recalculating onto the steps that are GPU bound as the GPU is faster than CPU and non-blocking to some extent (this is the usual rule of thumb, there are sitautions where if we overuse the GPU you'll also end up suffering from worse performance).

- Always measure performance and see if CPU is being thrashed or throttled
- Identify if there are any CSS transformations that can be used that do not utilise CPU and use GPU instead (thus, instead of having to recalculate positions, styles, layout, paint and composite phases, only go straight to paint and composite phases which are GPU bound)
- Do your calculations in 1 place, then apply them all at once rather than constantly redraw and apply
- Minimise CSS rules and remove unused CSS rules
- If we are making complex rendering changes such as animations, do them out of the document flow (or on a separate stacking context to avoid rerendering the entire document and other elements)
- Avoid need for complex CSS selectors (more complex selectors means more work required to match them)
- Reduce DOM depth and the need of unnecessary nesting of elements

### References

- Maximilian Firtman's [Vanilla JS: You Might Not Need A Framework](https://frontendmasters.com/courses/vanilla-js-apps/introduction/) course on FrontEnd Masters
- Evgenii Ray's [Front End Systems Design](https://frontendmasters.com/courses/frontend-system-design/) course on FrontEnd Masters
- [Proxy pattern](https://www.patterns.dev/vanilla/proxy-pattern/) - patterns.dev by Lydia Hallie and Addy Osmani
- MDN - [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
- The Code Barbarian's [Thoughts on ES6 Proxies Performance](https://thecodebarbarian.com/thoughts-on-es6-proxies-performance)
- MDN - [The Box Model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
- paulirish's list on [What forces layout / reflow](https://gist.github.com/paulirish/5d52fb081b3570c81e3a)
- PageSpeed Insights (Google for Developers) - [Minimising browser reflow](https://developers.google.com/speed/docs/insights/browser-reflow)
