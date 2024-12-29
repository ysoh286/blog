import{a as p,t as g}from"./disclose-version.CF8kLgI2.js";import"./legacy.C4HDMYEH.js";import{s as e,f,c as o,r as t,q as w}from"./runtime.D_tNg0db.js";import{h as i}from"./html.DhvAQHs6.js";const C={title:"Weekly learning review - A go at tailwind CSS / shadcn",date:"2024-12-29T22:10:00.000Z"};var y=g('<p>This week’s learning review:</p> <ul><li>Currently learning Tailwind and building a project using Tailwind and shadcn, which seems to be the latest fad going round for building component libraries and design systems.</li> <li>Completed Steve Kinney’s Tailwind CSS course on Front End Masters - which has made me warm up a little to Tailwind’s methodology and approach to CSS.</li></ul> <p><em>Initial thoughts on Tailwind:</em> <em>Previously when I tried TailwindCSS for the first time about a year ago, I hated it because it reminded me so much of the hey days of when we had Bootstrap and other libraries which based their styling on chaining or composing different class names together. It did bloat up the HTML together with styling, which became a bit of a maintenance nightmare. On top of that, sometimes it took hours to find the ‘right’ combination of classes to achieve what was required, which sometimes could have been solved in 5 minutes with a few lines of pure CSS. It is said to not achieve automatic critical CSS but has improved significantly over the years to reduce the amount of CSS that’s shipped to production. Now, I’ve slightly warmed up to the idea, see the value in some of the utilities it has and even shown some examples where I usually write a mixture of JS, CSS and HTML to achieve which can now be only just achieved using CSS and HTML instead.</em></p> <h2>The utility classes methodology</h2> <p>The idea is that rather than writing a bunch of custom CSS, we have shorter CSS snippets that make up a utility class name (such as padding, or margin, or background colour) and then compose what we need out of these smaller class names to create the styles we need. These are then directly added to our HTML markup, rather than writing separate CSS styles.</p> <pre class="language-undefined"><!></pre> <h2>Some gotchas with tailwind</h2> <p>Things that caught me off or just quirks in how things work in Tailwind:</p> <ul><li>Do not compose dynamic classnames (it won’t work)</li></ul> <p>Tailwind can only do compose fully written classnames together. The reason for this is that classnames must exist as ‘complete unbroken strings’ in order for the styles to be applied correctly.</p> <pre class="language-undefined"><!></pre> <p>See <a href="https://tailwindcss.com/docs/content-configuration" rel="nofollow">this</a> for more details.</p> <ul><li>Defining colours do not require commas, or <code>rgb</code> / <code>hsl</code> appended to it when defining colours in CSS variables</li></ul> <p>Only define the colour channels.</p> <pre class="language-undefined"><!></pre> <p>This is defined this way to allow them to work with the opacity modifier (e.g. <code>bg-primary-800</code> / <code>bg-primary-400</code> type of declaration). If we do need to define custom colours, we are able to do so directly.</p> <pre class="language-undefined"><!></pre> <p>See <a href="https://tailwindcss.com/docs/customizing-colors#using-css-variables" rel="nofollow">this</a> for more details.</p> <ul><li>Some common class name deviations <ul><li><code>background-color:red</code> = <code>bg-red</code></li> <li><code>display: block</code> = <code>block</code></li> <li><code>box-sizing: border</code> = <code>box-border</code></li> <li><code>padding: 0</code> = <code>p-0</code></li> <li><code>margin-0</code> = <code>m-0</code></li> <li><code>color: green</code> = <code>text-green</code></li> <li><code>width-0</code> = <code>w-0</code></li> <li><code>height-0</code> = <code>h-0</code></li> <li>Flex / grid <ul><li><code>align-content: center</code> = <code>content-center</code></li> <li><code>justify-items: center</code> = <code>items-center</code></li></ul></li></ul></li></ul> <p><strong>Pros:</strong></p> <ul><li>Reusable, composable</li> <li>Some handy classes that handle things for you (such as <code>divide</code>, <code>space</code>, <code>peer</code>, <code>group</code>)</li> <li>Configurable and customizable</li> <li>We’re still writing CSS underneath</li> <li>Works with rem out of the box, but also allows for more specific values such as <code>px</code>, <code>fit-content</code>, <code>auto</code> where needed</li> <li>Allows for base / components / utilities layers</li></ul> <p><strong>Cons:</strong></p> <ul><li>It’ll look messy (mixing styles with HTML, writing lots of classes and chaining them together - which feels like a blast in the past back to good old Bootstrap days) - especially with all the different classes required for hovers, different states, pseudo-classes and pseudo-attributes</li> <li>When you start from scratch, it does remove lot of the original CSS you may be used to with headings (such as margin, padding, font-sizes)</li> <li>Loss of automatic critical CSS</li> <li>Although we can use <code>@apply</code> for customisation, it generally comes at a performance cost and should be avoided</li> <li>Small learning curve (to wrap your head around)</li> <li>Could take a while to debug due to the sheer number of classes</li></ul> <p>It does take a while to get used to, along with a bunch of deviations as seen above with the gotchas section. I do enjoy some of the classes that do really make life easier such as <code>divide</code>, <code>peer</code>, <code>group</code>, and <code>space</code>, however I do sometimes rather reach for ordinary CSS for flex /grid layouts as the effort seems more or less the same.</p> <p><em>Do I see the value in tailwind? Yes. Would I use it over CSS or styled components / CSS-in-JS (which is a different methodology)? Not to my liking yet. It depends - like with any tool, each have its pros and cons. There’s a few gotchas I’m still wrapping my head around and grasping the idea before making a proper verdict.</em></p> <h2>First impressions with shadcn/ui</h2> <p><a href="https://ui.shadcn.com/" rel="nofollow">shadcn/ui</a> is a set of accessible React components that you can ‘copy paste’ and use directly in your application. It’s meant to help build component libraries faster, and thus provide building blocks in your application without you needing to build your own from scratch all the time.</p> <p><strong>Pros:</strong></p> <ul><li>Accessible, easy to use, beautiful</li> <li>Pretty much components built out of the box for you</li> <li>A good starter for the basic components as building blocks</li> <li>Has a wide amount of support and love from the community, good documentation (despite it only being active for 2+ years)</li> <li>No need to install a package, you have full control (though debatable) over the component and how it is composed</li> <li>Easy to add in another component, just run another command</li></ul> <p><strong>Cons:</strong></p> <ul><li>Still have to style them with tailwind, or move things around if design deviates a lot from the original building blocks (which, in some cases maybe we’re better off building custom components after all for these if it takes the same amount of time)</li> <li>Although you have ‘full control’ and shadcn does not take responsibility for these components, it’s a bit of a catch-22 - if you find a bug, you’ll need to resolve it yourself, but you’ll need to learn what lies underneath shadcn (which is react, tailwindCSS, and radixui - so if there’s a component where you find a bug or want to customise further, you’ll need to know those in more detail) - some of us may find this great, others may not.</li> <li>Tied to tailwindCSS (which could be a pro as well, if you like tailwindCSS)</li> <li>Tied to React only (not framework agnostic, but when React still dominates as the top front-end library today, it’s not so much of a con)</li></ul> <p><em>I did find myself having to write custom components or compose them over the top of some of these built in ones which was expected. The question was whether I would save time - in the more basic cases yes (such as a button or a badge), but for more complex components sometimes not (such as select menu, toggle group).</em></p> <h2>References</h2> <ul><li><a href="https://tailwindcss.com/" rel="nofollow">TailwindCSS</a></li> <li><a href="https://adamwathan.me/css-utility-classes-and-separation-of-concerns/" rel="nofollow">CSS Utility classes and ‘separation of concerns’</a> - Adam Wathan (creator of TailwindCSS)</li> <li>Steve Kinney’s <a href="https://frontendmasters.com/courses/tailwind-css/" rel="nofollow">Tailwind CSS</a> course on FrontEnd Masters</li> <li><a href="https://tailwind-workshop.vercel.app/introduction" rel="nofollow">Tailwind: A workshop</a> course website - Steve Kinney</li> <li><a href="https://ui.shadcn.com/" rel="nofollow">shadcn/ui</a> - by shadcn</li> <li><a href="https://www.radix-ui.com/" rel="nofollow">Radix UI</a></li></ul>',1);function T(d){var n=y(),a=e(f(n),10),c=o(a);i(c,()=>`<code class="language-undefined">// Rather than something like this
.custom-div &#123;
    padding: 10px;
    margin: 10px;
    background-color: red;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
&#125;


&lt;div className=&#39;custom-div&#39; /&gt;

// We might do this:
&lt;div className=&#39;bg-red container margin-[10px] height-[10px] rounded-sm&#39; /&gt;
</code>`),t(a);var s=e(a,10),h=o(s);i(h,()=>`<code class="language-undefined">// e.g. This won&#39;t work
const color = &#39;blue&#39;
const shade = &#39;500&#39;
&lt;div className=&#123;&#96;bg-$&#123;color&#125;-$&#123;shade&#125;&#96;&#125;&gt;

// But this does work...
&lt;div className=&#39;bg-blue-500&#39;&gt;

// or this:
const colourClassNames = &#123;
    &#39;blue&#39;: &#123;
        &#39;500&#39;: &#39;bg-blue-500&#39;,
    &#125;,
&#125;;
&lt;div className=&#123;colourClassNames[&#39;blue&#39;][&#39;500&#39;]&#125;&gt;</code>`),t(s);var l=e(s,8),u=o(l);i(u,()=>`<code class="language-undefined">// e.g. This won&#39;t work...
:root &#123;
    --primary: rgb(0, 0, 0);
    --secondary: rgb(255, 255, 255);
&#125;

// tailwind.config.ts
...
theme: &#123;
    colors: &#123;
        primary: var(--primary);
        secondary: var(--secondary);
    &#125;
&#125;


// But this will work...
:root &#123;
    --primary: 0 0 0;
    --secondary: 255 255 255;
&#125;

theme: &#123;
    colors: &#123;
        primary: rgb(var(--primary));
        secondary: rgb(var(--secondary));
    &#125;
&#125;
</code>`),t(l);var r=e(l,4),m=o(r);i(m,()=>`<code class="language-undefined">theme: &#123;
    colors: &#123;
        &#39;magestic-purple: &#123;
            // define your colours directly
            900: ...,
            800: ...
        &#125;
    &#125;
&#125;

// Usage
&lt;div className=&quot;bg-magestic-purple-800&quot; /&gt;</code>`),t(r),w(34),p(d,n)}export{T as default,C as metadata};
