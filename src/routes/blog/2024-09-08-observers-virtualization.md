---
title: 'Weekly learning review - Observers Web API, Virtualization'
date: 2024-09-08 22:15:00
---

This week's progress:

- Still working through Evgenii Ray's Front End Systems Design course - about 75% there. It's been eye-opening to see how to code virtualization from scratch, and actually understanding what's going on under the hood (I thought it was just lazy loading, but turns out no, it recycles elements!)
- Using a queue in production to handle concurrent requests (reality is that it's not really supposed to be on the front-end, but corners are cut due to tight deadlines, usual software engineering woes)

### Observers API

There are 3 observer APIs that are available to handle different situations. These are generally used for performance reasons instead of vanilla approaches (which involves event based solutions or causes reflow):

#### Intersection observer

    - This is used when you have a target and see whether something intersects with the target.
    - Use cases include implementing UI virtualization, infinite scrolling, or lazy load components when user scrolls to a certain point or requires more data to be seen after a certain point. This can be used to track several entry elements where a single observer can be used.
    - options:
        - `root`: element used for checking visibility of the target (defaults to viewport)
        - `rootMargin`: margin around the root (defaults to all 0)
        - `threshold`: a value between 0 and 1 or an array if required to be fired at every value inside array (value of 1.0 means the whole element must be visible to be considered intersecting)

```
const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
};

const callback = (entries, observer) => {
    for (let entry of entries) {
        if (entry.isIntersecting) {
            // do stuff
        }
        // other values available - bounding ClientRect, intersectionRatio, intersectionRect, rootBounds, target, time
    }
}

const observer = new IntersectionObserver(callback, options);
```

#### Mutation observer

    - This is used when we wish to track changes in the DOM tree.
    - A common use case for this is keyboard shortcuts that allow for rich text editing using `contenteditable` attribute on an element
    - The options available to track are (note all these are boolean, with the exception of `attributeFilter`):
        - `childList`: target's children to be observed
        - `attributes`: target's attributes are to be observed
        - `characterData`: target's data are to be observed
        - `subtree`: target's all descendants to be observed
        - `attributeOldValue`: whether to track previous attribute value before mutation occurs
        - `characterDataOldValue`: whether to track previous data value before mutation occurs
        - `attributeFilter` - sets list of attribute names to be observed, or else all are observed (unless stated `false`)

```

const config = {
    attributes: false,
    childList: false,
    characterData: true,
    subtree: true,
};

const callback = (mutationList, observer) => {
    for (const mutation of mutationList) {
        if (mutation.type === 'characterData') {
            // do stuff when character data has changed
            ...
        }
    }
};

const observer = new MutationObserver(callback);

// observe node that will change and then cause mutations
observer.observe(document.getElementById(...), config);

// disconnect to stop observing
observer.disconnect();

```

#### Resize observer

    - This is used for tracking a resized element and reacting to it if we need something more customary that cannot be achieved with CSS media queries or container queries. Although we have the `window.resize` event, this is about 10x more performant and can be used on elements rather than just the window.
    - Did use this once in production to render 2 buttons whenever there's not enough space available for users to see all their tabs in an application.
    - More commonly, we tend to reach for CSS media queries and container queries for building responsive layouts.

```
const container = document.getElementById("container");

const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
        if (entry.contentBoxSize) {
            // do something based on resize
        }
    }
});

resizeObserver.observe(container);

```

### Virtualization

What is virtualization? It's a performance rendering technique used only show elements that are restricted to its screen or viewport via a 'sliding window'.
As we know, rendering DOM elements is expensive, especially when we have 1000+ elements on the page (and even more crucial and lot smaller when on older or smaller devices like mobile phones).
The idea is to minimise the number of elements rendered in the DOM tree, the number of DOM mutations, and reduce CPU and memory usage to maintain the DOM tree.

Main use cases:

- Mobile applications, or just loading a lot of elements that cause performance issues
- Examples include table with lots of elements, large lists (thousand of elements or more)
  Main steps:
- 2 observers on the top and bottom, which will render the elements required and 'recycle' elements whenever user scrolls up or down
- whenever user scrolls down, we render the next few items, but we recycle the top items that are now not in view to become bottom new items
- whenever user scrolls up, we do the opposite and recycle the bottom items and bring them to the top
- update data and then update observers on the screen to render these new items

### References

- Evgenii Ray's [Front End Systems Design](https://frontendmasters.com/courses/frontend-system-design/) course on FrontEnd Masters
- [IntersectionObserver - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [MutationObserver - MDN](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)
- [Getting To Know The MutationObserver API - Smashing Magazine](https://www.smashingmagazine.com/2019/04/mutationobserver-api-guide/)
- [DOM spec on MutationObserver](https://dom.spec.whatwg.org/#interface-mutationobserver)
- [ResizeObserver - MDN](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver)
