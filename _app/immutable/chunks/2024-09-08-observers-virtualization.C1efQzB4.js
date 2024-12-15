import{a as h,t as b}from"./disclose-version.hD3RjQbW.js";import"./legacy.C6sgJd9a.js";import{s as o,f as m,c as r,r as i,n as v}from"./runtime.Bs2-O94s.js";import{h as n}from"./html.DBamY79b.js";const z={title:"Weekly learning review - Observers Web API, Virtualization",date:"2024-09-08T22:15:00.000Z"};var g=b(`<p>This week’s progress:</p> <ul><li>Still working through Evgenii Ray’s Front End Systems Design course - about 75% there. It’s been eye-opening to see how to code virtualization from scratch, and actually understanding what’s going on under the hood (I thought it was just lazy loading, but turns out no, it recycles elements!)</li> <li>Using a queue in production to handle concurrent requests (reality is that it’s not really supposed to be on the front-end, but corners are cut due to tight deadlines, usual software engineering woes)</li></ul> <h3>Observers API</h3> <p>There are 3 observer APIs that are available to handle different situations. These are generally used for performance reasons instead of vanilla approaches (which involves event based solutions or causes reflow):</p> <h4>Intersection observer</h4> <ul><li>This is used when you have a target and see whether something intersects with the target.</li> <li>Use cases include implementing UI virtualization, infinite scrolling, or lazy load components when user scrolls to a certain point or requires more data to be seen after a certain point. This can be used to track several entry elements where a single observer can be used.</li> <li>options: <ul><li><code>root</code>: element used for checking visibility of the target (defaults to viewport)</li> <li><code>rootMargin</code>: margin around the root (defaults to all 0)</li> <li><code>threshold</code>: a value between 0 and 1 or an array if required to be fired at every value inside array (value of 1.0 means the whole element must be visible to be considered intersecting)</li></ul></li></ul> <pre class="language-undefined"><!></pre> <h4>Mutation observer</h4> <ul><li>This is used when we wish to track changes in the DOM tree.</li> <li>A common use case for this is keyboard shortcuts that allow for rich text editing using <code>contenteditable</code> attribute on an element</li> <li>The options available to track are (note all these are boolean, with the exception of <code>attributeFilter</code>): <ul><li><code>childList</code>: target’s children to be observed</li> <li><code>attributes</code>: target’s attributes are to be observed</li> <li><code>characterData</code>: target’s data are to be observed</li> <li><code>subtree</code>: target’s all descendants to be observed</li> <li><code>attributeOldValue</code>: whether to track previous attribute value before mutation occurs</li> <li><code>characterDataOldValue</code>: whether to track previous data value before mutation occurs</li> <li><code>attributeFilter</code> - sets list of attribute names to be observed, or else all are observed (unless stated <code>false</code>)</li></ul></li></ul> <pre class="language-undefined"><!></pre> <h4>Resize observer</h4> <ul><li>This is used for tracking a resized element and reacting to it if we need something more customary that cannot be achieved with CSS media queries or container queries. Although we have the <code>window.resize</code> event, this is about 10x more performant and can be used on elements rather than just the window.</li> <li>Did use this once in production to render 2 buttons whenever there’s not enough space available for users to see all their tabs in an application.</li> <li>More commonly, we tend to reach for CSS media queries and container queries for building responsive layouts.</li></ul> <pre class="language-undefined"><!></pre> <h3>Virtualization</h3> <p>What is virtualization? It’s a performance rendering technique used only show elements that are restricted to its screen or viewport via a ‘sliding window’.
As we know, rendering DOM elements is expensive, especially when we have 1000+ elements on the page (and even more crucial and lot smaller when on older or smaller devices like mobile phones).
The idea is to minimise the number of elements rendered in the DOM tree, the number of DOM mutations, and reduce CPU and memory usage to maintain the DOM tree.</p> <p>Main use cases:</p> <ul><li>Mobile applications, or just loading a lot of elements that cause performance issues</li> <li>Examples include table with lots of elements, large lists (thousand of elements or more)
Main steps:</li> <li>2 observers on the top and bottom, which will render the elements required and ‘recycle’ elements whenever user scrolls up or down</li> <li>whenever user scrolls down, we render the next few items, but we recycle the top items that are now not in view to become bottom new items</li> <li>whenever user scrolls up, we do the opposite and recycle the bottom items and bring them to the top</li> <li>update data and then update observers on the screen to render these new items</li></ul> <h3>References</h3> <ul><li>Evgenii Ray’s <a href="https://frontendmasters.com/courses/frontend-system-design/" rel="nofollow">Front End Systems Design</a> course on FrontEnd Masters</li> <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API" rel="nofollow">IntersectionObserver - MDN</a></li> <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver" rel="nofollow">MutationObserver - MDN</a></li> <li><a href="https://www.smashingmagazine.com/2019/04/mutationobserver-api-guide/" rel="nofollow">Getting To Know The MutationObserver API - Smashing Magazine</a></li> <li><a href="https://dom.spec.whatwg.org/#interface-mutationobserver" rel="nofollow">DOM spec on MutationObserver</a></li> <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver" rel="nofollow">ResizeObserver - MDN</a></li></ul>`,1);function M(l){var s=g(),e=o(m(s),12),c=r(e);n(c,()=>`<code class="language-undefined">const options = &#123;
    root: null,
    rootMargin: &quot;0px&quot;,
    threshold: 1.0,
&#125;;

const callback = (entries, observer) =&gt; &#123;
    for (let entry of entries) &#123;
        if (entry.isIntersecting) &#123;
            // do stuff
        &#125;
        // other values available - bounding ClientRect, intersectionRatio, intersectionRect, rootBounds, target, time
    &#125;
&#125;

const observer = new IntersectionObserver(callback, options);</code>`),i(e);var t=o(e,6),d=r(t);n(d,()=>`<code class="language-undefined">
const config = &#123;
    attributes: false,
    childList: false,
    characterData: true,
    subtree: true,
&#125;;

const callback = (mutationList, observer) =&gt; &#123;
    for (const mutation of mutationList) &#123;
        if (mutation.type === &#39;characterData&#39;) &#123;
            // do stuff when character data has changed
            ...
        &#125;
    &#125;
&#125;;

const observer = new MutationObserver(callback);

// observe node that will change and then cause mutations
observer.observe(document.getElementById(...), config);

// disconnect to stop observing
observer.disconnect();
</code>`),i(t);var a=o(t,6),u=r(a);n(u,()=>`<code class="language-undefined">const container = document.getElementById(&quot;container&quot;);

const resizeObserver = new ResizeObserver((entries) =&gt; &#123;
    for (const entry of entries) &#123;
        if (entry.contentBoxSize) &#123;
            // do something based on resize
        &#125;
    &#125;
&#125;);

resizeObserver.observe(container);
</code>`),i(a),v(12),h(l,s)}export{M as default,z as metadata};
