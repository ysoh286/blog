import{a,t as s}from"./disclose-version.CF8kLgI2.js";import"./legacy.C4HDMYEH.js";import{s as n,f as r,c as l,r as c,q as d}from"./runtime.D_tNg0db.js";import{h as u}from"./html.DhvAQHs6.js";const f={title:"Weekly learning review - Securing cookies",date:"2024-09-22T21:15:00.000Z"};var h=s(`<p>This week’s progress:</p> <ul><li>Wanted to learn more about security <ul><li>Motivation: <ul><li>embarrassingly, I got asked about security in an interview, and I completely bombed the question - probably was a bit too honest saying “I did an OWASP Top 10 course, but can’t remember anything from it”</li> <li>How do we handle outdated packages and keep up to date, especially when using <code>pnpm audit</code> and using 3rd party JS libraries when building applications?</li> <li>What to look out for that we don’t know about now?</li></ul></li></ul></li> <li>50% through Steve Kinney’s Web Security course on FrontEnd Masters
(we take security too much for granted and often deprioritize security over features all the time when they should be incorporate during feature work - but at times, it’s true - you never know until you know, or you’re pushing an urgent fix without realising)</li></ul> <h3>What are web / browser cookies?</h3> <ul><li><em>small piece of data that server sends to a user’s web browser - MDN</em></li> <li>In some cases, we may store authentication or session details in a cookie (such as username, and a session id)</li> <li>Stateless</li></ul> <h3>Ways to make a cookie that tracks a user session secure:</h3> <ul><li>Encrypt with a secret and unique token on the BE before sending it across to the browser (so that it’s not plain text)</li> <li>Encrypt secret with signed unique sessions in the cookie</li> <li>Ensure cookies have expiration (via <code>Expires</code> or <code>Max-Age</code>) such that the cookie gets deleted after a certain period of time</li> <li>ensure that the cookie can only be verified and updated via <code>http</code> only, and ensure it is signed and secured over a connection (prevent use of <code>document.cookie</code> to change or update it)</li> <li>Ensure that the session ID correlates to the correct user</li> <li>We can ensure that the cookie can only be used on the same origin via the same origin policy <blockquote><p>Same origin policy: a browser securty feature that restricts how documents and scripts on 1 origin can interact with resources on another origin - web.dev</p> <ul><li>Origin = protocol + host + port (e.g. http(s):// + domain-name.com + :443 )</li></ul></blockquote></li> <li>If we want to allow sending or receiving data from other origins, this is where CORS policy is defined and used, proxies, or web sockets</li> <li>Ensure that all inputs and outputs that are going to be used in SQL updates / JS / command injections are sanitized and escaped (using <code>?</code> is your best friend)</li> <li>Avoid using <code>eval</code> / <code>Function</code> / <code>exec</code> or other potentially dangerous JS functions that allows parsing of scripts</li> <li>Have logging to ensure all requests that come through are logged and can be tracked (via cookies or authentication or if someone’s doing dodgy, at least we have logs for how they’ve managed to exploit it if it becomes a problem, or even prevent it if they are trying to get in)</li> <li>Use the rule of least privilege principle and apply that to your code where we restrict exactly what is allowed and what’s not</li></ul> <p>Example:</p> <pre class="language-undefined"><!></pre> <ul><li>Consider using the <code>SameSite</code> attribute to restrict access of cookie in the same domain <ul><li>Site is NOT the same as origin - site is the protocol + last part of domain name</li> <li><code>None</code> - always sends cookie, but must be HTTPS</li> <li><code>Lax</code> - allows cookie to be sent to top-level navigation and if request method is <code>GET</code> or <code>HEAD</code> requests <ul><li>Top level navigation: any action where user initiates change in URL by entering URL in address bar, selecting bookmark, clicking link that leads to another page (not ajax / iframes)</li></ul></li> <li><code>Strict</code> - only include cookie if request is sent from the same site that sent the cookie
(Note that there are some situations where you may need to use <code>Lax</code>, but take precaution if it is used)</li></ul></li></ul> <h3>Common attacks:</h3> <ul><li><strong>XSS (Cross site scripting)</strong> - malicious script is injected via input fields or URLs where cookies allow the access of these scripts to run which then sends information back to the attacker (or do something unintended)</li> <li><strong>Session hijacking</strong> (using active sessions to gain unauthorized access - ensure your cookies are secure and encrypted, signed and assigned to a session ID)</li> <li><strong>CSRF</strong> (Cross-site request forgery - forces user to executed unwanted actions on web application in which they are currently authenticated, attacker tricks user to execute actions or submit a malicious request) <ul><li>an example of this is loading a background url image via CSS which pings a GET request which actually does something such as updating posts, or transfering data into an account maliciously (and the user would have no idea, cause the image looks harmless)</li> <li>This can be prevented using same-origin policy or CORS policy restrictions on top of <code>SameSite</code> attribute</li></ul></li> <li><strong>Injection</strong> (attacker sends malicious inputs to application in hopes of breaking out and causing damage - SQL injection, command injection, remote injection) <ul><li>one of the OWASP Top 10 <ul><li><blockquote><p>Standard awareness document for developers and web application securit (most critical security risks to web applications) - OWASP</p></blockquote></li></ul></li> <li>prevent this by sanitizing and escaping all inputs, and avoid doing it where possible</li> <li>Avoid using <code>eval</code> / <code>Function</code> / <code>exec</code> functions that run scripts programmatically</li></ul></li></ul> <h3>References</h3> <ul><li>Steve Kinney’s <a href="https://frontendmasters.com/courses/web-security-v2/" rel="nofollow">Web Security</a> course on FrontEnd Masters</li> <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies" rel="nofollow">HTTP Cookie - MDN</a></li> <li><a href="https://web.dev/articles/same-origin-policy#:~:text=The%20same%2Dorigin%20policy%20is,from%20multiple%20sites%20at%20once." rel="nofollow">Same origin policy - web.dev</a></li> <li><a href="https://web.dev/articles/same-site-same-origin" rel="nofollow">“Same-site” and “same-origin” - web.dev</a></li> <li><a href="https://owasp.org/www-project-top-ten/" rel="nofollow">OWASP Top 10 - OWASP</a></li> <li><a href="https://owasp.org/www-community/attacks/xss/" rel="nofollow">Cross Site Scripting (XSS) - OWASP</a></li> <li><a href="https://owasp.org/www-community/attacks/Session_hijacking_attack" rel="nofollow">Session hijacking attack - OWASP</a></li> <li><a href="https://owasp.org/www-community/attacks/csrf" rel="nofollow">Cross Site Request Forgery (CSRF) - OWASP</a></li> <li><a href="https://owasp.org/Top10/A03_2021-Injection/" rel="nofollow">A03:2021 - Injection - OWASP</a></li></ul>`,1);function y(i){var e=h(),o=n(r(e),14),t=l(o);u(t,()=>`<code class="language-undefined">// allows everything from req.body, which could include other fields where extra malicious data could be added
const params = req.body;
...

// more safer (getting exactly what&#39;s required)
const &#123; name, email, address &#125; = req.body;

...
</code>`),c(o),d(10),a(i,e)}export{y as default,f as metadata};