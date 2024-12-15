import{a as w,t as f}from"./disclose-version.hD3RjQbW.js";import"./legacy.C6sgJd9a.js";import{s as e,f as v,c as t,r as o,n as b}from"./runtime.Bs2-O94s.js";import{h as n}from"./html.DBamY79b.js";const _={title:"Weekly learning review - Long polling, server sent events, web sockets",date:"2024-09-15T21:15:00.000Z"};var k=f('<p>This week’s progress:</p> <ul><li>Weirdly enough, at work had to explore <code>ResizeObserver</code> in a bit more detail for a certain feature. Still yet to crack, investigate and see if we can stretch it to make it more performant, but it was great to be able to put some learnings from last week into action.</li> <li>Completed Evgenii Ray’s System Design course - it opened up a lot of things I didn’t know or took for granted (such as bundlers and why we need bundlers, web sockets for real time communication, HTTP1 / HTTP2 protocols, normalization of data actually being helpful on the front-end and how to approach a front-end system design interview)</li> <li>Although much was covered, the most interesting part for the week was web sockets, server sent events, and long polling.</li></ul> <h3>Long polling</h3> <ul><li>Long polling is just making lots of network requests every few seconds.</li> <li>Short polling is generally 5-10 seconds, while long polling could be something like every 30 seconds.</li> <li>This can be achieved and easily implemented using <code>setInterval</code>, but it does not guarantee that it will run or if in the situation where the function that runs takes longer than the timeout, then it will never complete.</li></ul> <pre class="language-undefined"><!></pre> <ul><li>A different alternative to implement this is to use <code>setTimeout</code>, and start timer for request as soon as it is made / complete.</li></ul> <pre class="language-undefined"><!></pre> <ul><li>In situations, you may only want to only run this when the user is active on the page, however in other cases we might not want that and constantly poll.</li> <li>If there is a need to pause when user moves away, consider using <code>requestAnimationFrame</code>, which runs when the main JavaScript thread is idle and guarantees no interruptions of repaints</li></ul> <pre class="language-undefined"><!></pre> <ul><li>If at any point it fails, we should consider exponential backoff for retrying and re-establishing the network connection</li> <li>Downsides of long polling: <ul><li>takes alot of time to establish the connection (costs CPU and drains energy to maintain the TCP HTTP1 connection)</li> <li>inefficient as we need to send header data every time in each request</li> <li>drains mobile devices significantly to maintain the TCP connection due to receiving and sending data constantly</li> <li>latency issues (reconnection required, server also needs to keep state and reconnection is required to be implemented on the client)</li></ul></li> <li>This can be used on desktop applications, but NOT recommended for applications on other devices with limited CPU or mobile applications</li></ul> <h3>Server sent events</h3> <blockquote><p>Traditionally, web page would send a request to server and receive new data. With server sent events, the server sends new data to a web page at any time by pushing messages to the web page. - MDN</p></blockquote> <ul><li>In order to achieve this, we can use <code>EventSource</code> interface which allows us to handle the messages as events on the frontend.</li> <li>Streams should be text data and encoded as UTF-8</li></ul> <pre class="language-undefined"><!></pre> <ul><li>Note that this should NOT be used on HTTP1, as this will suffer from limitation of maximum number of open connections (HTTP1 has maximum of 5 connections, while HTTP2 has up to 200)</li> <li>Communication is established on initial connection, while the rest of the connection involves server pushing data to the client which is handled for us</li> <li>Does not need to send headers all the time (which reduces amount of overhead required)</li> <li>Reconnection is handled automatically for us (and on HTTP2 it reuses the existing TCP connection), and easy to scale</li> <li>This is much more efficient compared to short/long polling, easy to scale, minimal network overhead and has good performance</li> <li>However, we cannot push data to the server and only text is supported</li> <li>Recommended to be used for complex desktop / web applications, or as an alternative to web-sockets where some latency is acceptable. However, if we have a simple desktop app, we can use long polling instead</li></ul> <h3>Web sockets</h3> <ul><li>Generally when we think real-time communication, we reach for web-sockets</li> <li>A normal TCP/IP connection is created that allows client and server to push messages back and forth, which is requested to become a socket connection via a ‘handshake’ request (when server responds with succesful request, browser upgrades protocol to web sockets)</li> <li>An unlimited number of connections can be made once the web-socket has been established</li> <li>However, it’s a bit of a misconception to always reach for this as the solution for all real-time communication as this is hard to maintain (more complex infrastructure), very expensive, and requires a constant TCP connection to be maintained which drains CPU</li> <li>Consider using <code>socket.io</code> for implementing web sockets, or the native Web Socket API (more complex as you’ll need to implement reconnection yourself, and consider falling back to long polling if web sockets is not supported in the browser)</li></ul> <pre class="language-undefined"><!></pre> <p>Which to choose for which scenario?</p> <p>SSE is generally favoured over web-sockets if we only need to send data from server to client all the time, while in simple cases you can use short/long polling for desktop applications, while SSE works for mobile applications. SSE’s performance is close to web sockets, and such that if our users do not mind a small latency tradeoff, SSE can be the solution. However, if you do require the need to constantly send messages / data back and forth between client and server, web sockets are the way to go.</p> <h3>References</h3> <ul><li>Evgenii Ray’s <a href="https://frontendmasters.com/courses/frontend-system-design/" rel="nofollow">Front End Systems Design</a> course on FrontEnd Masters</li> <li>Brian Holt’s <a href="https://frontendmasters.com/courses/realtime/" rel="nofollow">Complete Intro to Real-Time</a> course on FrontEnd Masters</li> <li>Brian Holt’s <a href="https://btholt.github.io/complete-intro-to-realtime/" rel="nofollow">Complete Intro to Real-Time</a> course website</li> <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events" rel="nofollow">Server sent events - MDN</a></li> <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events" rel="nofollow">Using server sent events - MDN</a></li> <li><a href="https://web.dev/articles/eventsource-basics" rel="nofollow">Stream updates with server sent events - web.dev</a></li> <li><a href="https://html.spec.whatwg.org/multipage/server-sent-events.html" rel="nofollow">Server-sent events - HTML Spec</a></li> <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API" rel="nofollow">WebSocket API - MDN</a></li> <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications" rel="nofollow">Writing web socket applications - MDN</a></li></ul>',1);function P(d){var l=k(),s=e(v(l),8),u=t(s);n(u,()=>`<code class="language-undefined">setInterval(() =&gt; &#123;
    fetch(api, params).then(doSomething);
&#125;, timeout);</code>`),o(s);var i=e(s,4),h=t(i);n(h,()=>`<code class="language-undefined">const INTERVAL_SECONDS = 30;

const runRequest = () =&gt; &#123;
    // do stuff
    ...
    setTimeout(runRequest, INTERVAL_SECONDS);
&#125;;

runRequest();</code>`),o(i);var a=e(i,4),m=t(a);n(m,()=>`<code class="language-undefined">// taken and adapted from Brian Holt&#39;s real-time course

setTimeout(runRequest, INTERVAL_SECONDS);

let timeToNextRequest = 0;
const timer = async(time) &#123;
    if (timeToNextRequest &lt;= time) &#123;
        await runRequest();
        timeToNextRequest = time + INTERVAL_SECONDS;
    &#125;
    requestAnimationFrame(timer);
&#125;

requestAnimationFrame(timer);
</code>`),o(a);var r=e(a,10),p=t(r);n(p,()=>`<code class="language-undefined">const source = new EventSource(&quot;url/to-receive-data-from&quot;, &#123; withCredentials: true &#125;);

source.onmessage = (event) =&gt; &#123;
  // do something when message comes through
&#125;;

source.onerror = (err) =&gt; &#123;
    // do something when error occurs
&#125;

source.addEventListener(&quot;customEvent&quot;, (event) =&gt; &#123;
    // do something when custom event occurs
&#125;);

// close event stream / connection between client and server
source.close();</code>`),o(r);var c=e(r,8),g=t(c);n(g,()=>`<code class="language-undefined">const websocket = new WebSocket(&quot;wss://url-to-web-socket&quot;, protocols);

// send data to server
websocket.send(&quot;Some text to send across!&quot;);

websocket.onopen = (event) =&gt; &#123;
    // do something when websocket connection is established and open
&#125;

// to receive messages from server
websocket.onmessage = (event) =&gt; &#123;
    // do something with message (event.data)
&#125;

// close the connection
websocket.close();
</code>`),o(c),b(8),w(d,l)}export{P as default,_ as metadata};
