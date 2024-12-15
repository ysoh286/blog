import{a as w,t as m}from"./disclose-version.CF8kLgI2.js";import"./legacy.C4HDMYEH.js";import{s as e,f as b,c as t,r as o,q as y}from"./runtime.D_tNg0db.js";import{h as n}from"./html.DhvAQHs6.js";const H={title:"Weekly learning review - back to JS, exploring routing and web components",date:"2024-08-25T22:30:00.000Z"};var v=m(`<p>This week’s been diving back into JS fundamentals.</p> <p>Things in progress:</p> <ul><li>Completed watching Kyle Simpson’s JavaScript Deep Foundations course</li> <li>75% of the way through Maximiliano Firtman’s You Might Not Need A Framework course</li> <li>Started reading Steve Schoger, Adam Wathan’s Refactoring UI book</li></ul> <p>Motivation behind this is to learn more about JavaScript in more detail and learn other ways to build applications without relying on libraries. Been feeling a bit trapped lately in React (and using it for the past few years even though I’ve yet to dive deeper into it) and been focusing on learning the fundamentals and concepts rather than learning another framework. Frameworks are tools to help solve problems, and there are some cases where it could be appropriately used, and other situations it may not be. Mental models of JavaScript are challenged through by understanding the language itself, rather than just ‘assuming’ and we as engineers should always be encouraged to read the ECMAScript more.</p> <p>3 more things learned about JS (notes and examples adapted from Kyle Simpson’s Deep JavaScript Foundations course):</p> <h3>When asked about what <code>this</code> keyword is and what it refers to, it’s dependent on HOW it is called (the execution context), NOT where it is declared.</h3> <p>There are 4 different types of binding on the <code>this</code> keyword.</p> <h4>Explicit binding via <code>call</code>, <code>apply</code></h4> <pre class="language-undefined"><!></pre> <p>The difference between <code>call</code> and <code>apply</code> is the arguments. Both of them explicitly allow for binding of a context to define <code>this</code> in the first argument, with the next arguments following on to be applied to the function itself (as seen as above, with <code>player1</code> attached as the context, <code>this.user</code> refers to <code>player1.user</code> which equates to <code>Henry</code>, and for the second argument, <code>greeting</code> is <code>Hello</code>).</p> <p>Similarly, we can also use <code>bind</code> for explicit binding. This is more uncommon as it does mean a hard bind - use it only when necessary. Previously when defining class components in React, we would see this when we bind event handlers to the component itself.</p> <h4>Implicit binding can be found in objects</h4> <pre class="language-undefined"><!></pre> <p>This makes sense, as the object itself has the function, and the execution context refers to the object itself, which has <code>user</code> defined.</p> <h4>Default binding can occur</h4> <p>Note that if we defined a function and a global variable in non-strict mode, <code>this</code> keyword could default to the global scope. <code>this</code> will keep finding its closest ‘scope’ / execution context until it can find a valid value. Most of the time, we should probably be using implicit or explicit binding unless there’s a specific use case for this.</p> <pre class="language-undefined"><!></pre> <p>Note that this should be strongly avoided, and we should always be using strict mode.
Strict mode on the other hand, would throw a type error as <code>this</code> would be undefined, and thus <code>this.user</code> would not be found.</p> <h4>binding via <code>new</code> keyword can also affect what <code>this</code> returns or refers to (see the next point)</h4> <p>So how do we determine what <code>this</code> returns? Depends on a couple of factors:</p> <ul><li>How is it called? Who and what is calling it (how it is being executed)?</li> <li>Rules of precedence based on the 4 different types:
new keyword > call / apply / bind (explicit) > context of object (implicit) > default binding</li> <li>Arrow functions do NOT define <code>this</code> keyword, and rather they have lexical scope instead. Rule of thumb is to not use <code>this</code> in arrow functions (unless it’s a special case).</li></ul> <h3>The <code>new</code> keyword does lot more than we think it does</h3> <p>4 things <code>new</code> keyword does:</p> <ul><li>creates brand new empty object</li> <li>links that object to another object</li> <li>calls function with <code>this</code> set to the new object</li> <li>if function does not return object, then returns <code>this</code></li></ul> <p>This is another way to create and invoke a function, but <code>this</code> would generally point to an empty object.</p> <pre class="language-undefined"><!></pre> <p>Another way of interpreting this is <code>function.call(&#123;&#125;)</code> - which sets the context to be a new object. Thus, depending on what the object has, that will determine what <code>this</code> will be.</p> <h3><code>class</code> in JavaScript is not just syntactic sugar for defining classes and doing OOP</h3> <p>Are we really doing real OOP just from using <code>class</code> keyword? Not exactly.
Defining a class in JavaScript has its own mechanism and allows for extension and inheritance of methods from parent to children. These are built on prototypes rather than instances, and thus are dynamic rather than static.
The <code>super</code> keyword is used to allow for something known as <code>relative polymorphism</code>.</p> <p><em>May come back to this one to dive a bit into relative polymorphism and the idea that JavaScript uses delegation-oriented design for prototypes and define prototypal inheritance.</em></p> <p>And a few other things explored:</p> <h3>The difference between <code>getQuerySelectorAll</code> and <code>getElementsByClassName</code> is that <code>getQuerySelectorAll</code> returns a static collection (<code>NodeList</code>), while the rest return a live <code>HTMLCollection</code></h3> <p>All of these could return nothing if no elements are found, and these do seem to have an array-like interface, but it’s not quite the same. HTML collections don’t have the modern <code>Array</code> interface (e.g. filter, map, reduce are not available), meanwhile <code>getQuerySelectorAll</code> does.
The reason for this is backwards compaibility of browsers and when DOM API was created, there were no array APIs available. To get around this, we can use <code>Array.from(HTMLCollection)</code>.</p> <h3>Why did we try put <code>&lt;script&gt;</code> tags at the end of the <code>&lt;body&gt;</code> in HTML pages a few years ago, and now we use <code>async</code> and <code>defer</code>? For performance and to control when these scripts should load</h3> <p>A few years back, we used to put all our script tags close to the end of the HTML page, reason being we would load all the HTML content and styles first, before loading the JavaScript to make pages seem to ‘load’ faster and let the browser parse HTML content first.
Nowadays, we use</p> <pre class="language-undefined"><!></pre> <p>closer to the top of the page before the <code>&lt;body&gt;</code> tag, which allows the browser to parse HTML, find script, download in parallel while it continues to parse the rest of the HTML content. When parsing has complete, then it executes the JavaScript.</p> <p><code>async</code> is less commonly used, but it just means we’ve explicitly stated that it should be executed as soon as possible (i.e. cannot be deferred once file has downloaded and is completely downloaded, then parsing will stop and then execute the script). Some use cases include analytics or small scripts that have to be sent immediately.</p> <h3>Web components and custom elements allow us to create custom HTML elements</h3> <p>Web components seem like the future and look promising for creating custom HTML elements as it is being evolved and fully supported by all web browsers. These elements have their own lifecycle methods that can be hooked into. Note that these need to be defined and imported via JS before they can be used in HTML.
These come with a set of standards that should be learned and are up to the developer on how they can be defined and used (as long as we understand these standards - which include understanding the shadow DOM).</p> <p><em>May do a separate post on this as this is an area I’m keen to dive into and learn more about!</em></p> <h3>Routing can be implemented via the <code>history</code> API</h3> <p>Wondered what routing is and how it’s done? In simple terms, we’re pretty much trying to navigate between sections on a single page application, but without sending actual data to the server and manipulating the URL. The <code>history</code> API allows use to achieve this by pushing entries to navigation history, and allows us to track history on a single page application (say hello to back buttons!), and be able to listen for these changes and respond accordingly.
A few handy things to look into:</p> <ul><li><code>popstate</code> event that can be listened to</li> <li><code>history.pushState</code> to push to navigation history</li></ul> <p>References:</p> <ul><li>Kyle Simpson’s <a href="https://frontendmasters.com/courses/deep-javascript-v3/" rel="nofollow">Deep JavaScript Foundations</a> course on FrontEnd Masters</li> <li>Kyle Simpson’s <a href="https://github.com/getify/You-Dont-Know-JS" rel="nofollow">“You Don’t Know JS”</a></li> <li>[JavaScript questions]</li> <li>Maximilian Firtman’s <a href="https://frontendmasters.com/courses/vanilla-js-apps/introduction/" rel="nofollow">Vanilla JS: You Might Not Need A Framework</a> course on FrontEnd Masters</li> <li>MDN - <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script" rel="nofollow">script HTML element</a></li> <li>MDN - <a href="https://developer.mozilla.org/en-US/docs/Web/API/History_API" rel="nofollow">History API</a></li> <li>MDN - <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_components" rel="nofollow">Web Components</a></li> <li>webcomponents.org - <a href="https://www.webcomponents.org/introduction" rel="nofollow">Introduction to Web Components</a></li> <li>Scott Schoger, Adam Wathan - <a href="https://www.refactoringui.com/" rel="nofollow">Refactoring UI</a></li></ul>`,1);function M(c){var d=v(),a=e(b(d),16),h=t(a);n(h,()=>`<code class="language-undefined">const player1 = &#123;
    user: &#39;Henry&#39;,
&#125;;

const player2 = &#123;
    user: &#39;Dora&#39;,
&#125;;

function greet(greeting) &#123;
    console.log(greeting, this.user);
&#125;

greet.call(player1, &quot;Hello &quot;);
// Hello Henry!

greet.apply(player1, [&quot;Hello &quot;]);
// Hello Dora!</code>`),o(a);var i=e(a,8),p=t(i);n(p,()=>`<code class="language-undefined">const player1 = &#123;
    user: &#39;Henry&#39;,
    greet(greeting) &#123;
        console.log(greeting, this.user);
    &#125;,
&#125;;

player1.greet(&#39;Goodbye &#39;);
// Goodbye Henry</code>`),o(i);var s=e(i,8),u=t(s);n(u,()=>`<code class="language-undefined">var user = &#39;Henry&#39;;

function greet(greeting) &#123;
    console.log(greeting, this.user);
&#125;

greet(&quot;Hello &quot;); // Hello Henry (defaults to global)

function greetStrictly(greeting) &#123;
    &quot;use strict&quot;;
    console.log(greeting, this.user);
&#125;

greetStrictly(&quot;Goodbye &quot;); // Throws type error due to strict mode
</code>`),o(s);var r=e(s,18),g=t(r);n(g,()=>`<code class="language-undefined">function greet(greeting) &#123;
    console.log(greeting, this.user);
&#125;

const newObject = new greet(&quot;Goodbye&quot;);
// Goodbye undefined (returns undefined)</code>`),o(r);var l=e(r,20),f=t(l);n(f,()=>'<code class="language-undefined">&lt;script defer src=&quot;insert-src-link&quot;&gt;&lt;/script&gt;</code>'),o(l),y(20),w(c,d)}export{M as default,H as metadata};
