import{a as o,t as a}from"./disclose-version.CF8kLgI2.js";import"./legacy.C4HDMYEH.js";import{q as i}from"./runtime.D_tNg0db.js";const l={title:"Before you install that package - do you really need it?",date:"2022-05-01T17:00:00.000Z"};var n=a(`<p>Recently, someone shared that libraries are great and that we should always use them.</p> <p>It got me thinking about a recent Front End Happy Hour podcast that I listened to which was debating about the same thing:</p> <p>When would you use a library vs when would you write your own implementation?</p> <p>Like with most questions, the answer is: it depends.</p> <h3>How many people are working on it?</h3> <p>If it’s just you, you get to make that choice. If you’re working on a project that’s got multiple developers and you’re in a team, then chances are you’ll probably need to make that decision together.</p> <h3>Learning curve and onboarding</h3> <p>Some libraries have a learning curve, others may be picked up in 5-10 minutes. This is a consideration if you are working on a tight deadline and how quickly you’d like to onboard new developers onto your tech stack. Depending on what the library is used for, you might be able to short cut this using native solutions (such as built in JavaScript functions) that developers already know about.
An example is redux which is a library for handling global state management. Explaining actions, reducers and dispatchers to junior developers takes some time to understand and learn before they can start contributing to the project. However, it may be worth investing in it because it is widely used and is in your current application.</p> <h3>Avoid reinventing the wheel, unless you can prove it’s worth the investment</h3> <p>The great thing about libraries is that they’re most likely written by the experts who have analysed and know the problem you’re trying to solve well. They may have made the mistakes and have avoided pitfalls from the knowledge they have accumulated over the years. It doesn’t hurt to leverage them. But don’t let that put you off making your own at times - if you want to look into more performant solutions, or can’t find something that exactly fits your needs or use case, you’re better off building your own. That’s if you have the time.</p> <h3>Whether the library you opt to use for has good maintenance, documentation and support</h3> <p>The most frustrating thing about using a library is when there is no documentation or maintenance. That makes it about 1000 times harder for you to debug or be able to ask questions. If it is well maintained, you may get the support you need and if many users are using it, chances are the problem you run into may have already been solved.
Maintenance is also important on a security level - if a library gets deprecated or no longer gets maintained, that’s on you to decide when to get rid of it. Assess the risks frequently and don’t leave yourself exposed.</p> <h3>Time</h3> <p>If you’ve got ample time to be writing your own implementation and you have reasons to go down this route, go for it. If you’re working on a product and you’ve got a set deadline that must be met, then you’re better off using libraries that you’re already familiar with.</p> <h3>Understand the problem that you’re trying to solve and the different libraries that act as different solutions to that problem.</h3> <p>When you install a package or a library, ask yourself why do you need this and what problem is it going to help me solve? If you can understand the problem, you’ll be able to see whether you need this library or not.</p> <h3>Performance and bundle sizes</h3> <p>Be aware of the sizes of the libraries you are installing. If you’re installing a library that’s MBs big, that’s how much is adding to your bundle size when you build the application. This will mean a longer build time which may slow down the deployment / release cycle. Similarly, think about performance of these libraries - are they necessary for the application, or are they slowing you down? If you do find a bottleneck somewhere in the codebase, do consider where it is and whether it’s your code or a library’s util that’s slowing the app down.
Also, if it’s only being used in 1 place (or if you’re only using 1 util out of the many provided by the library) - do you necessarily need that library? You might be able to get rid of it and consider your own implementation.</p> <p>Just something to think about before you run <code>npm i -D package-to-add</code>.</p>`,1);function u(e){var t=n();i(36),o(e,t)}export{u as default,l as metadata};
