---
title: 'Weekly learning review - Long polling, server sent events, web sockets'
date: 2024-09-15 21:15:00
---

This week's progress:

- Weirdly enough, at work had to explore `ResizeObserver` in a bit more detail for a certain feature. Still yet to crack, investigate and see if we can stretch it to make it more performant, but it was great to be able to put some learnings from last week into action.
- Completed Evgenii Ray's System Design course - it opened up a lot of things I didn't know or took for granted (such as bundlers and why we need bundlers, web sockets for real time communication, HTTP1 / HTTP2 protocols, normalization of data actually being helpful on the front-end and how to approach a front-end system design interview)
- Although much was covered, the most interesting part for the week was web sockets, server sent events, and long polling.

### Long polling

- Long polling is just making lots of network requests every few seconds.
- Short polling is generally 5-10 seconds, while long polling could be something like every 30 seconds.
- This can be achieved and easily implemented using `setInterval`, but it does not guarantee that it will run or if in the situation where the function that runs takes longer than the timeout, then it will never complete.

```
setInterval(() => {
    fetch(api, params).then(doSomething);
}, timeout);
```

- A different alternative to implement this is to use `setTimeout`, and start timer for request as soon as it is made / complete.

```
const INTERVAL_SECONDS = 30;

const runRequest = () => {
    // do stuff
    ...
    setTimeout(runRequest, INTERVAL_SECONDS);
};

runRequest();
```

- In situations, you may only want to only run this when the user is active on the page, however in other cases we might not want that and constantly poll.
- If there is a need to pause when user moves away, consider using `requestAnimationFrame`, which runs when the main JavaScript thread is idle and guarantees no interruptions of repaints

```
// taken and adapted from Brian Holt's real-time course

setTimeout(runRequest, INTERVAL_SECONDS);

let timeToNextRequest = 0;
const timer = async(time) {
    if (timeToNextRequest <= time) {
        await runRequest();
        timeToNextRequest = time + INTERVAL_SECONDS;
    }
    requestAnimationFrame(timer);
}

requestAnimationFrame(timer);

```

- If at any point it fails, we should consider exponential backoff for retrying and re-establishing the network connection
- Downsides of long polling:
  - takes alot of time to establish the connection (costs CPU and drains energy to maintain the TCP HTTP1 connection)
  - inefficient as we need to send header data every time in each request
  - drains mobile devices significantly to maintain the TCP connection due to receiving and sending data constantly
  - latency issues (reconnection required, server also needs to keep state and reconnection is required to be implemented on the client)
- This can be used on desktop applications, but NOT recommended for applications on other devices with limited CPU or mobile applications

### Server sent events

> Traditionally, web page would send a request to server and receive new data. With server sent events, the server sends new data to a web page at any time by pushing messages to the web page. - MDN

- In order to achieve this, we can use `EventSource` interface which allows us to handle the messages as events on the frontend.
- Streams should be text data and encoded as UTF-8

```
const source = new EventSource("url/to-receive-data-from", { withCredentials: true });

source.onmessage = (event) => {
  // do something when message comes through
};

source.onerror = (err) => {
    // do something when error occurs
}

source.addEventListener("customEvent", (event) => {
    // do something when custom event occurs
});

// close event stream / connection between client and server
source.close();
```

- Note that this should NOT be used on HTTP1, as this will suffer from limitation of maximum number of open connections (HTTP1 has maximum of 5 connections, while HTTP2 has up to 200)
- Communication is established on initial connection, while the rest of the connection involves server pushing data to the client which is handled for us
- Does not need to send headers all the time (which reduces amount of overhead required)
- Reconnection is handled automatically for us (and on HTTP2 it reuses the existing TCP connection), and easy to scale
- This is much more efficient compared to short/long polling, easy to scale, minimal network overhead and has good performance
- However, we cannot push data to the server and only text is supported
- Recommended to be used for complex desktop / web applications, or as an alternative to web-sockets where some latency is acceptable. However, if we have a simple desktop app, we can use long polling instead

### Web sockets

- Generally when we think real-time communication, we reach for web-sockets
- A normal TCP/IP connection is created that allows client and server to push messages back and forth, which is requested to become a socket connection via a 'handshake' request (when server responds with succesful request, browser upgrades protocol to web sockets)
- An unlimited number of connections can be made once the web-socket has been established
- However, it's a bit of a misconception to always reach for this as the solution for all real-time communication as this is hard to maintain (more complex infrastructure), very expensive, and requires a constant TCP connection to be maintained which drains CPU
- Consider using `socket.io` for implementing web sockets, or the native Web Socket API (more complex as you'll need to implement reconnection yourself, and consider falling back to long polling if web sockets is not supported in the browser)

```
const websocket = new WebSocket("wss://url-to-web-socket", protocols);

// send data to server
websocket.send("Some text to send across!");

websocket.onopen = (event) => {
    // do something when websocket connection is established and open
}

// to receive messages from server
websocket.onmessage = (event) => {
    // do something with message (event.data)
}

// close the connection
websocket.close();

```

Which to choose for which scenario?

SSE is generally favoured over web-sockets if we only need to send data from server to client all the time, while in simple cases you can use short/long polling for desktop applications, while SSE works for mobile applications. SSE's performance is close to web sockets, and such that if our users do not mind a small latency tradeoff, SSE can be the solution. However, if you do require the need to constantly send messages / data back and forth between client and server, web sockets are the way to go.

### References

- Evgenii Ray's [Front End Systems Design](https://frontendmasters.com/courses/frontend-system-design/) course on FrontEnd Masters
- Brian Holt's [Complete Intro to Real-Time](https://frontendmasters.com/courses/realtime/) course on FrontEnd Masters
- Brian Holt's [Complete Intro to Real-Time](https://btholt.github.io/complete-intro-to-realtime/) course website
- [Server sent events - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events)
- [Using server sent events - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events)
- [Stream updates with server sent events - web.dev](https://web.dev/articles/eventsource-basics)
- [Server-sent events - HTML Spec](https://html.spec.whatwg.org/multipage/server-sent-events.html)
- [WebSocket API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
- [Writing web socket applications - MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
