import{a as b,t as x}from"./disclose-version.hD3RjQbW.js";import"./legacy.C6sgJd9a.js";import{s as e,f as _,c as o,r as a,n as k}from"./runtime.Bs2-O94s.js";import{h as t}from"./html.DBamY79b.js";const H={title:"i still don't know js",date:"2024-07-15T21:00:08.000Z"};var T=x(`<p>It’s been 5+ years since I’ve been a front-end engineer.
As one, you’re generally expected to know JavaScript, the main programming language for the web.</p> <p>I thought I knew some, until I didn’t. Pretty bad, huh?</p> <p>I don’t know JS. Kyle Simpson’s books says it all: “YOU DON’T KNOW JS!” and we certainly don’t.</p> <p>5 things I’ve learned recently:</p> <h3>1. The real difference between == and ===</h3> <p>The <code>==</code> (abstract equality operator) and <code>===</code> (strict equality operator) are generally used for comparisons.
We often get told <code>==</code> only compares values while <code>===</code> compares both types and values.</p> <p>e.g.</p> <pre class="language-undefined"><!></pre> <p>Though, that’s only half true.</p> <p>The actual answer: <code>==</code> does actually compare types, but it does type coercion if the types are different before comparing values, while <code>===</code> does not. <code>===</code> does compare both types and values, but essentially if the types are NOT equal, then it will automatically return false. <code>==</code> on the other hand will actually do exactly what <code>===</code> does if the types are equal. If the types are NOT equal, then it will try to do type coercion before comparing values. Refer to the <a href="https://262.ecma-international.org/5.1/#sec-11.9.3" rel="nofollow">ECMAScript</a> spec for more details.</p> <p>In summary, <code>==</code> will try to type coerce in the following order:</p> <ul><li>If <code>A</code> is a primitive type, and <code>B</code> is not, it will try convert <code>B</code> into a primitive type for comparison.</li> <li>Generally, if <code>A</code> is a string / boolean (or some other primitive) and <code>B</code> is a number, then it will always try to convert <code>A</code> to a number.</li> <li>Note that empty string <code>""</code> gets converted to <code>0</code> which usually explains the (presumably ‘weird’, but actually is by design) behaviour that occurs when you compare different things in JavaScript with <code>==</code>.</li></ul> <h3>2. <code>const</code> doesn’t actually mean “constant” by english terms, but by programmatic terms which are NOT the same</h3> <p>Ever wondered why <code>const</code> was called <code>const</code> when we can do something like this:</p> <pre class="language-undefined"><!></pre> <p>Wait what? Isn’t it supposed to be constant though? Why did it change?</p> <p>Actual answer:</p> <ul><li>What <code>const</code> (constant) means in programming terms differs from what it means in english.
In english, we expect <code>constant</code> to mean fixed, immutable, cannot be changed whatsoever.</li></ul> <p>But in programming terms, it means <strong>a variable that CANNOT be re-assigned</strong>.</p> <p>This explains this behaviour where we cannot reassign <code>const</code> variables, however you can still mutate them like above.</p> <pre class="language-undefined"><!></pre> <h3>3. The difference between a function declaration and a function expression, is declaring <code>function</code> being at the start and its enclosing scope</h3> <pre class="language-undefined"><!></pre> <p>Above, the function expression has defined its own function scope, while the function declaration has access to its enclosed scope and has its name attached.</p> <h3>4. Closures aren’t about just storing data or values, it’s about lexical scope</h3> <p>Generally, when we get asked about closure, we tend to explain it through being able to access data that’s not in the same scope or storing values.</p> <p>Actual answer:</p> <blockquote><p>When a function ‘remembers’ its lexical scope even when the function is executed OUTSIDE of that lexical scope.</p></blockquote> <pre class="language-undefined"><!></pre> <h3>5. Hoisting is just a name for describing some ‘complex’ behaviour in JavaScript, but is all tied to lexical scoping and how it works at compile and execution time.</h3> <p>What hoisting is sometimes described as:</p> <ul><li>moving variable and function declarations at the ‘top’
…even though that’s not actually what happens.</li></ul> <p>Actual answer: JavaScript gets compiled, then executed. During the compilation phase, scopes are created (global, function, block) for variable declarations. However, values are assigned during execution phase. This explains why sometimes when you write functions before you actually call them, JS has no problem executing, as the function scopes are already defined before execution.</p> <pre class="language-undefined"><!></pre> <p>Similarly, you can do this with variables as well, but it’s usually bad to (and generally not a good idea).</p> <pre class="language-undefined"><!></pre> <p>What about <code>const</code> and <code>let</code> ? These do get ‘hoisted’ but because they are uninitialised, it leads to the need of the <code>TDZ</code> = known as the temporal dead zone, which is needed as <code>const</code> cannot be initialised as ‘undefined’ only to be reassigned later (as this would break the definition of <code>const</code> in programming terms). Generally when we define <code>var</code>, its initial value is <code>undefined</code>.
We rarely get this error as we are strongly advised to always declare <code>const</code> and <code>let</code> with actual assignments anyway.</p> <p>There’s definitely more to come as I continue to keep learning!</p> <p>References / credits to:</p> <ul><li>Kyle Simpson’s <a href="https://frontendmasters.com/courses/deep-javascript-v3/" rel="nofollow">Deep JavaScript Foundations</a> course on FrontEnd Masters</li> <li>Kyle Simpson’s <a href="https://github.com/getify/You-Dont-Know-JS" rel="nofollow">“You Don’t Know JS”</a></li> <li><a href="https://www.frontendinterviewhandbook.com/javascript-questions" rel="nofollow">JavaScript questions</a> in the Front End Interview Handbook</li></ul>`,1);function q(u){var d=T(),n=e(_(d),14),h=o(n);t(h,()=>`<code class="language-undefined">&#39;1&#39; == 1 // true
&#39;1&#39; === 1 // false</code>`),a(n);var i=e(n,14),g=o(i);t(g,()=>`<code class="language-undefined">const a = [&#39;ABC&#39;];

a[1] = &#39;XYZ&#39;;

console.log(a); // [&#39;ABC&#39;, &#39;XYZ&#39;]</code>`),a(i);var s=e(i,12),m=o(s);t(m,()=>`<code class="language-undefined">const a = &#39;hello&#39;;

a = &#39;goodbye&#39;;
// throws TypeError (assignment to constant variable)</code>`),a(s);var l=e(s,4),f=o(l);t(f,()=>`<code class="language-undefined">// function declaration
function sayHello(name) &#123;
    console.log(&#96;Hello $&#123;name&#125;!&#96;);
&#125;


// function expression
var sayHello = function() &#123;
    console.log(&#96;Hello $&#123;name&#125;!&#96;);
&#125;</code>`),a(l);var c=e(l,12),y=o(c);t(y,()=>`<code class="language-undefined">function multiply() =&gt; &#123;
    let value = 10;

    // inner function has access to outer variable
    // and preserves it
    function multiplyBy2() &#123;
        return value * 2;
    &#125;
    multiplyBy2();
&#125;

multiply();</code>`),a(c);var r=e(c,10),w=o(r);t(w,()=>`<code class="language-undefined">sayHello();

function sayHello(name) &#123;
    console.log(&#96;Hello $&#123;name&#125;&#96;);
&#125;</code>`),a(r);var p=e(r,4),v=o(p);t(v,()=>`<code class="language-undefined">a = &#39;hmm&#39;;

var a;</code>`),a(p),k(8),b(u,d)}export{q as default,H as metadata};