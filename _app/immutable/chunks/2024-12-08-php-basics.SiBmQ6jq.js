import{a as b,t as y}from"./disclose-version.hD3RjQbW.js";import"./legacy.C6sgJd9a.js";import{s as e,f as v,c as t,r as o,n as q}from"./runtime.Bs2-O94s.js";import{h as a}from"./html.DBamY79b.js";const T={title:"Weekly learning review - php basics",date:"2024-12-08T16:45:00.000Z"};var _=y('<h2>This week’s review:</h2> <ul><li>Just spent some time on php (have started to pick it up to build endpoints, understanding the repository-service-controller pattern and learning how to write integration tests).</li> <li>Some developers were complaining how they hated PHP, but it’s likely the mental model of how they think PHP works vs how it actually works differs, which causes frustration (same with JavaScript and Typescript - we have been guilty of blaming the language for far too long and often).</li> <li>It goes to show how much developer experience could enhance and make happier engineers, but also increase efficiency and productivity. Running a test that takes 30 seconds to run locally is a pretty awful feedback loop. It makes you wonder if this is why testing is an afterthought in that developer environment, when it should be mandatory and an absolute requirement. But if it’s painful to write and run, of course we’d cut corners.</li> <li>Gave Maximiliano Firtman’s PHP Fundamentals course a go, and was a pretty easy introduction to PHP. It also explained why PHP is the way it is. <ul><li><em>Note: Did try about 3 years ago to learn PHP from laracasts, but couldn’t get into it. It was a bit of a drag watching 10 hours… only for nothing to stick. Have realised things only stick for me if I actually build and write code.</em></li></ul></li> <li>Will most likely leave this as a cheatsheet for PHP basics, and continue to learn parts of it at work, while exploring other things on the side.</li></ul> <h2>Review:</h2> <blockquote><p>“Just write everything in JavaScript and slap on a dollar sign at the start of every variable” - some developer on my team.</p></blockquote> <ul><li>it’ll be interesting how far LLMs / code generators could get us by translating from 1 language to another (another musing for another day).</li> <li>Why learn it? Lot of websites are still powered by PHP today (a chunk are wordpress websites) and legacy applications either as a server side language. It can be used for scripting, powering backends, or building desktop applications.</li> <li>When created, it was not intended to be a programming language - rather it was meant to be scripts to help out with web design and build web pages easily (which explains why some rules are inconsistent in some parts of the language)</li> <li><code>$cookie</code> - how to define a variable named cookie</li> <li>variables are case sensitive</li> <li>double dollar sign variables are known as variable variables, which as not used very often (as it causes confusion) - 1 variable is used as the name of another variable. <code>$$</code></li> <li>booleans are case-insensitive (<code>true</code> is the same as <code>True</code> is the same as <code>TruE</code>)</li> <li>To concatenate strings, use <code>.</code> rather than <code>+</code> (e.g. <code>"hello" . "world"</code>)</li> <li>We can define arrays, and keys with array values. We can use square bracket notation to access values inside the array.</li></ul> <pre class="language-undefined"><!></pre> <ul><li>To access objects, we use the <code>-&gt;</code> thin arrow notation</li></ul> <pre class="language-undefined"><!></pre> <ul><li>To define a for loop, use <code>foreach</code> notation</li></ul> <pre class="language-undefined"><!></pre> <ul><li>Has built-in session management</li> <li>There is a differentiation between double quotes and single quotes - double quotes allows for interpolation (meaning you can reference variables in your strings and concatenate them together like template variables in JS), while single quotes do not.</li></ul> <pre class="language-undefined"><!></pre> <ul><li>To run a simple server, run <code>php -S localhost:port-number</code></li> <li>With PHP classes, you can define constructors and destructors (destructors are executed when garbage collector is about to dispose or destroy the class - rarely used)</li> <li>To define a constructor use <code>function __construct()</code></li> <li>To define a function use <code>function</code> keyword</li> <li>There is no module importing and exporting system in php - to reference a class from a different file, use <code>include / include_once</code> or <code>require / require_once</code></li> <li>To autoload classes (if you write lots of classes you don’t want to keep having to add it to a single <code>includes.php</code> file every time you need to add a class), we can use <code>spl_autoload_register</code>:</li></ul> <pre class="language-undefined"><!></pre> <ul><li>We can use <code>echo</code> or <code>var_dump</code> for quick debugging (if html is rendered to the screen and php is generating content on the web page - best to use a debugger if we are trying to debug a backend endpoint)</li> <li>Uses server side rendering</li> <li>Use <code>try / catch</code> to catch errors and exceptions, and be specific about which errors are being caught</li> <li>We can use <code>ini_set</code> and <code>error_reporting</code> to display all errors when running our code in development environments for easier debugging</li></ul> <pre class="language-undefined"><!></pre> <h2>References</h2> <ul><li>Maximiliano Firtman’s <a href="https://frontendmasters.com/courses/php/" rel="nofollow">PHP Basics</a> course on FrontEnd Masters</li> <li><a href="https://www.php.net/manual/en/function.error-reporting.php" rel="nofollow">error_reporting</a> - php.net</li> <li><a href="https://www.php.net/manual/en/function.ini-set.php" rel="nofollow">ini_setting</a> - php.net</li> <li><a href="https://www.php.net/manual/en/language.types.object.php" rel="nofollow">objects</a> - php.net</li></ul>',1);function W(u){var c=_(),i=e(v(c),10),h=t(i);a(h,()=>`<code class="language-undefined">$characters = [&quot;Harry Potter&quot;, &quot;Aragon&quot;, &quot;Wednesday Addams&quot;];

$charactersWithAbbreviations = [
    &quot;HP&quot; =&gt; &quot;Harry Potter&quot;,
    &quot;A&quot; =&gt; &quot;Aragon&quot;,
    &quot;WA&quot; =&gt; &quot;Wednesday Addams&quot;
];

$harryPotter = $charactersWithAbbreviations[&quot;HP&quot;]; // Harry Potter</code>`),o(i);var n=e(i,4),g=t(n);a(g,()=>`<code class="language-undefined">class Character &#123;
    public string $title;
    public string $name;
    public string $abbreviation;

    function __construct($name, $abbreviation, $title) &#123;
        $this-&gt;title = $title;
        $this-&gt;name = $name;
        $this-&gt;abbreviation = $abbreviation;
    &#125;

    function getTitle() &#123;
        return $this-&gt;title;
    &#125;
&#125;

$aragon = new Character(&quot;Aragon&quot;, &quot;A&quot;, &quot;Lord Of The Rings&quot;);

echo $aragon-&gt;name; // Aragon
echo $aragon-&gt;getTitle(); // Lord Of The Rings</code>`),o(n);var r=e(n,4),p=t(r);a(p,()=>`<code class="language-undefined">foreach($characters as $i =&gt; $character) &#123;
    echo &quot;$character is at $i index&quot;;
&#125;</code>`),o(r);var s=e(r,4),f=t(s);a(f,()=>`<code class="language-undefined">$world = &quot;World&quot;
echo &quot;Hello $world&quot;;</code>`),o(s);var l=e(s,4),m=t(l);a(m,()=>`<code class="language-undefined">spl_autoload_register(function($class_name) &#123;
    include_once(&quot;classes/$class_name.php&quot;);
&#125;);</code>`),o(l);var d=e(l,4),w=t(d);a(w,()=>`<code class="language-undefined">ini_set(&quot;display_errors&quot;, 1)
ini_set(&quot;display_startup_errors&quot;, 1)
error_reporting(1)</code>`),o(d),q(4),b(u,c)}export{W as default,T as metadata};
