import{a as g,t as p}from"./disclose-version.CF8kLgI2.js";import"./legacy.C4HDMYEH.js";import{s as e,f as m,c as t,r as a,q as w}from"./runtime.D_tNg0db.js";import{h as n}from"./html.DhvAQHs6.js";const _={title:"Weekly learning review - decorators and generators in python",date:"2024-12-15T08:37:00.000Z"};var y=p(`<h2>This week’s review:</h2> <ul><li>What is meant by ‘functions are first class objects’, which are also first class citizens in programming</li> <li>Learning about decorators and generators in Python</li></ul> <h3>Functions as first class objects</h3> <p>When a programming language defines functions as first class objects, this means that functions can be treated with much power and flexibility such that they meet the following criteria:</p> <ul><li>Can be used as values to be passed into other functions as arguments</li> <li>Can be treated as a variable</li> <li>Can be returned from other functions (like higher order functions)</li> <li>Can be stored in data structures such as arrays, lists, dictionaries, other objects / maps</li></ul> <p>Both Python and JavaScript treat functions as first class objects. This is also a core necessity to do functional programming.
Recall that a higher order function is a function that takes a function as an argument and can return a function as a result.</p> <pre class="language-undefined"><!></pre> <h3>Decorators</h3> <p>Decorators are a way to modify functions or classes without changing the actual implementation of the function or class.
These generally look like wrappers around the function, and are used to add functionality in a clean, reusable way and modify the behaviour of the function.
Remember that decorators are also just functions.</p> <p><strong>What are <code>*args</code> and \`</strong>kwargs\` seen in functions?**</p> <p>If we need to pass in a function but do not know how many arguments or keyword arguments it has but require all of them to be accepted, this is where we use<code>*args</code> and <code>**kwargs</code> to cover these.<code>*args</code> refer to positional arguments which are generally collected into a tuple, while <code>**kwargs</code> refer to keyword arguments which are collected into a dictionary.</p> <p><strong>Common cases for decorators:</strong></p> <ul><li>Logging (could be for debugging purposes)</li> <li>Authorization and authentication</li> <li>Memoization (caching of results)</li> <li>Timing (measuring performance of execution between two points in a function from start to end)</li> <li>Validation</li></ul> <pre class="language-undefined"><!></pre> <h3>Generators</h3> <p>Generators are a type of iterator that generates items one at a time, yielding items as needed rather than all at once.
They are memory efficient when dealing with large datasets or streams of data as they do not require loading everything into memory at once.
They are meant to be ‘lazy’ and retain state.</p> <pre class="language-undefined"><!></pre> <p>Keywords in generators:</p> <ul><li><code>yield</code> - pauses function, saves state and allows execution to continue from that point when <code>next()</code> is called again</li> <li><code>next()</code> - resumes generator function from the last yielded value</li></ul> <p>In JavaScript, these are represented using <code>function*</code> syntax, and can allow you to pause and resume function execution and yield multiple values over time.</p> <pre class="language-undefined"><!></pre> <p>There can be many use cases for generators.</p> <p><em>I’ve only seen this used in redux sagas watchers and workers, on top of using a generator to create random numbers or keeping track of an index globally in an application in JS. Anticipating that these are used more often in Python for memory efficiency and performance.</em></p> <h3>References</h3> <ul><li><a href="https://en.wikipedia.org/wiki/First-class_function" rel="nofollow">First-class function</a> - Wikipedia</li> <li><a href="https://people.duke.edu/~ccc14/sta-663/FunctionsSolutions.html#functions-are-first-class-objects" rel="nofollow">Functions are first class objects - Computational Statistics in Python 0.1</a> - Duke University</li> <li><a href="https://www.programiz.com/python-programming/args-and-kwargs" rel="nofollow">Python *args and **kwargs</a> - Programiz</li> <li><a href="https://book.pythontips.com/en/latest/decorators.html" rel="nofollow">Decorators</a> - Python Tips</li> <li><a href="https://realpython.com/primer-on-python-decorators/" rel="nofollow">Primer on Python Decorators</a> - Real Python</li> <li><a href="https://www.digitalocean.com/community/tutorials/understanding-generators-in-javascript" rel="nofollow">Understanding Generators in JavaScript</a> - Digital Ocean</li> <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*" rel="nofollow">function*</a> - MDN</li> <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator" rel="nofollow">Generator object</a> - MDN</li> <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators" rel="nofollow">Iterators and generators</a> - MDN</li> <li><a href="https://javascript.info/generators" rel="nofollow">Generators</a> - javascript.info</li> <li>ChatGPT to help explain these concepts (and using the above resources to verify them)</li></ul>`,1);function q(c){var s=y(),o=e(m(s),12),u=t(o);n(u,()=>`<code class="language-undefined">def sayHello():
   print(&quot;Hello&quot;)

greeting = sayHello

def greetMe(func, name):
    func();
    print(&quot;Hi &#123;name&#125;&quot;)

greetMe(sayHello, &quot;Mark&quot;) // this will print Hello Hi Mark
</code>`),a(o);var r=e(o,14),d=t(r);n(d,()=>`<code class="language-undefined">// example with simple logging
def logging_decorator(func):
    def wrapper(*args, **kwargs):
        print(&quot;Executing before function...&quot;)
        func(*args, **kwargs)
        print(&quot;Execution complete from function.&quot;)
    return wrapper

@logging_decorator()
def say_hello():
    print(&quot;Hello&quot;)


say_hello()
// This should print:
// Executing before function...
// Hello
// Execution complete from function.
</code>`),a(r);var i=e(r,6),h=t(i);n(h,()=>`<code class="language-undefined">def countdown(n):
    while n &gt; 0:
        yield n
        n -= 1

# use the generator
gen = countdown(5)

# iterate over generator (note that this can only be used once)
for value in gen:
    print(value)

# This prints 5 4 3 2 1
</code>`),a(i);var l=e(i,8),f=t(l);n(f,()=>`<code class="language-undefined">function* countdown(n) &#123;
    while (n &gt; 0) &#123;
        yield n;
        n -= 1;
    &#125;
&#125;

const gen = countdown(5);

gen.next.value(); // 5
gen.next.value(); // 4
gen.next.value(); // 3
...
// once generator has been exhausted, it will return undefined.
</code>`),a(l),w(8),g(c,s)}export{q as default,_ as metadata};