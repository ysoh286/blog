---
title: 'Weekly learning review - browser rendering pipeline (critical rendering path)'
date: 2024-11-10 20:30:00
---

_Took 3 weeks off for a 2 week vacation - much overdue but glad to be back - travelling is physically tiring... or I'm in need of exercise._

This week's highlights was jumping into Lydia Hallie's Web Development Quiz (which was hard, as expected) - but has so many things that I should know!
The main one was really getting into more detail about the browser rendering pipeline and how different CSS properties have an effect on which parts of the pipeline are used (for example, changing widths will require layout, paint and composite processes to rerun, while opacity only requires composite, and a change in background image assuming that width and height have not changed only requires a re-paint and composite process).

### What is the critical rendering path / browser rendering pipeline?

- "Sequence of steps browser goes through to convert HTML, CSS, JS into pixels onto the screen" - MDN
- involves DOM, CSSOM, render tree and layout.
- it is the minimum amount of resources necessary to perform an initial page render (not any subsequent updates)
  This is sometimes referred to as the browser rendering pipeline.

When the browser receives data, it will begin parsing the information. This means HTML is being parsed, which then gets translated into the DOM and CSSOM, which make up the render tree, which is then passed to the renderer to then layout, paint, and composite the page to the screen.

There are 5 steps to the critical rendering path:

1. **HTML parsing to construct DOM tree**
   - HTML parsing which involves tokenization and tree construction. This creates the DOM tree.
2. **Processing stylesheets / CSS to construct CSSOM tree**
   Next is processing CSS and the creating the CSSOM tree. This involves mapping styles with the nodes and identifying relationships between the CSS selectors.
   - any JavaScript scripts are downloaded, parsed, compiled and interpreted into abstract syntax trees. Most of this occurs on the main thread and is happening in the background. Note that any `script` tags would need to be parsed (unless they have `defer`, `async` or `module` attributes applied) and thus blocks the HTML parser from proceeding as it could change the DOM.
3. **Style - Construction of render tree**
   After the DOM and CSSOM tree has been constructed, these are combined into a single tree known as the the render tree (which only has the visible elements available - this does not include anything with `display: hidden` or visually hidden elements such as `head` and `script` elements). This can also be referred to as the style step. The render tree starts from the root of the tree, traversing into each node. Rendering steps take place (which is what we refer to as the rendering pipeline).
   The rendering steps are next.
4. **Layout**
   - the layout step is to compute the geometry of every node and how each node is relative to each other (every width, height, position, size of each element / node on the page / tree). Whenever reflow occurs, this means that layout has shifted and requires a recalculation. This could involve a subset of elements that end up being re-computed, or the entire document depending on how many elements need to be shifted. The box model is adhered to when laying out elements.
5. **Paint / Composite**
   Once everything is laid out, we move onto the next step which is painting. Every box /element is now translated into pixels on the screen which includes text, colours, images, buttons. Generally, this step should be optimised and the browser does this efficiently. If there are lots of elements to be painted, then the screen could be broken down into several layers and the composed together.
   - Compositing involves combining and merging layers together to produce the final image that appears on the screen. Some elements have been painted on separate layers for optimization and efficiency. The gains are from promoting elements to these layers which are then painted by the GPU rather than on the main thread, giving the performance boost.
     - some elements have this already built in such as `video`, `canvas` tags and CSS properties such as `opacity`, `transform`, `will-change`
     - Take caution if we want to explicitly do this - although they may improve performance, they should not be overused (as the browser usually does this for you already under the hood)
     - This step is also necessary to make sure the document is drawing elements in the right order

### Why is this important?

It's important to understand this process as this can help us identify where performance issues lie, and how we could solve them to provide the best user experience possible. We want to make sure our pages are responsive. It is paramount that the applications we build can keep up with our users and their needs. Sometimes just changing a CSS property could make improve performance significantly (or what can be seen as a 'jank user experience'). Knowing this allows us to figure out if there are ways to 'skip' certain processes as they are not hierarchical - we can sometimes update a style without needing layout or having to re-compute positions, while there may not need to be a reason to paint and only do compositing if the node hasn't changed in pixels.

Recall that JavaScript is single threaded, and that style, layout and some paint operations run on the same thread. Other steps will run on their own thread (such as other painting operations and compositing).

Reflows (which are the equivalent of redoing the layout step) can become computationally expensive as they use CPU resources, which involves needing to re-calculate, re-paint and combine to update the elements on the screen. Because this runs on the main thread, performance and the responsiveness of the page can become affected.

### References

- Lydia Hallie's [Advanced Web Development Quiz](https://frontendmasters.com/courses/web-dev-quiz/) on FrontEnd Masters
- [Rendering performance](https://web.dev/articles/rendering-performance) - web.dev
- [Understanding the critical path](https://web.dev/learn/performance/understanding-the-critical-path) - web.dev
- [Web performance - Populating the page: how browsers work](https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work) - MDN
- [The rendering critical path](https://www.chromium.org/developers/the-rendering-critical-path/) - Chromium
- [An Introduction to the Browser Rendering Pipeline](https://webperf.tips/tip/browser-rendering-pipeline/) - Joe Liccini
