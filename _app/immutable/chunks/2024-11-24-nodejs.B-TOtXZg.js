import{a as c,t as u}from"./disclose-version.C01EDu_7.js";import"./legacy.Dg8ntcUY.js";import{s as a,i as m,j as t,k as n,n as h}from"./runtime.CiV29uon.js";import{h as i}from"./html.DpiMX97J.js";const b={title:"Weekly learning review - nodejs",date:"2024-11-24T17:00:00.000Z"};var p=u('<h3>This week’s progress:</h3> <ul><li>Started and completed Scott Moss’ Introduction to Node.js.</li> <li>Been diving back into backend lately with just creating APIs (services, repositories) at work while picking up PHP.</li></ul> <h3>Things learnt:</h3> <ul><li>NodeJS is a runtime environment for JavaScript outside of the browser which also has its own event loop, callbacks, and non-blocking async APIs</li> <li>Browser is a different runtime for JavaScript</li> <li>This is still single threaded</li> <li>Because it’s a different runtime environment, this means that other globals that may be available in the browser may not be available in Node (an example if <code>window</code> in browser and DOM like operations are not available in Node, but <code>global</code> is available in Node)</li> <li>REPL = Read, Evaluate, Print, Loop (is just an inline JavaScript environment like the console in the browser)</li> <li>We can make a CLI tool out just from using Node.js (mostly using <code>process</code> and accessing <code>argv</code> variables)</li> <li>File systems can be considered a database (or a source of data)</li> <li>We can do a lot just from having access to the file system, and end up creating many different tools such as linters, scaffolding packages, or bundlers.</li> <li>Asynchronous code in Node.js is generally required for these operations: file operations, accessing and interacting with databases, making server requests and responses and interacting with the network</li> <li>Generally used to create servers, and can be used to server side rendering (where an HTML template is created, then we take data and hydrate the HTML template to show the data - this is what 99% of most front-end frameworks do)</li> <li>Setting <code>type:module</code> in the <code>package.json</code> allows you to use ES6 modules, so that you can use <code>import</code> statements rather than use CommonJS (which is what we previously used where eveything was imported with <code>require</code>). The major difference between the two is that <code>import</code> is async when including modules, while <code>require</code> is synchronous. ES modules can also be analyzed at build time, to create more efficient bundles.</li></ul> <p>Example of importing and exporting using ES modules:</p> <pre class="language-undefined"><!></pre> <p>Example of importing and exporting using CommonJS modules:</p> <pre class="language-undefined"><!></pre> <ul><li>As ES modules are natively supported, there’s no need to for additional build tools or plugins required when using these in the browser, whereas for CommonJS modules additional work is required. This also increases performance of these modules.</li></ul> <h3>References</h3> <ul><li>Scott Moss’ <a href="https://frontendmasters.com/courses/node-js-v3/" rel="nofollow">Introduction to Node.js</a> course on FrontEnd Masters</li> <li><a href="https://nodejs.org/en" rel="nofollow">Node.js</a></li> <li><a href="https://blog.logrocket.com/commonjs-vs-es-modules-node-js/" rel="nofollow">CommonJS vs ES modules in Node.js</a> - Kingsley Ubah, LogRocket</li> <li><a href="https://dev.to/costamatheus97/es-modules-and-commonjs-an-overview-1i4b#:~:text=Advantages%20of%20ES%20Modules%20over,generate%20smaller%2C%20more%20efficient%20bundles." rel="nofollow">ES Modules and CommonJS: An Overview</a> - Matheus Costa on dev.to</li></ul>',1);function j(r){var o=p(),e=a(m(o),10),l=t(e);i(l,()=>`<code class="language-undefined">import &#123; sum &#125; from &#39;./sum.js&#39;;

// in sum.js
export const sum = (a, b) =&gt; &#123;
    return a + b;
&#125;</code>`),n(e);var s=a(e,4),d=t(s);i(d,()=>`<code class="language-undefined">const &#123; sum &#125; = require(&#39;./sum.js&#39;);

// in sum.js
const sum = (a, b) =&gt; &#123;
    return a + b;
&#125;

module.exports = &#123;
    sum,
&#125;;</code>`),n(s),h(6),c(r,o)}export{j as default,b as metadata};
