import{a as i,t as o}from"./disclose-version.CF8kLgI2.js";import"./legacy.C4HDMYEH.js";import{q as s}from"./runtime.D_tNg0db.js";const c={title:"Weekly learning review - summary of monolith, distributed and serverless architectures",date:"2024-10-06T21:45:00.000Z"};var a=o(`<p>This week’s progress:</p> <ul><li>Rewatched some of theprimagean’s The Last Algorithms Course You’ll Ever Need</li> <li>Started Erik Reinert’s Introduction To Backend Architectures course (close to completion)</li></ul> <p>I took a bit of detour and paused on the other frontend architecture course as I wanted to know more about it from a backend perspective. Will probably finish the other one once we complete this one, and dive into more detail.</p> <p>Key learnings: knowing the differences between monolith, distributed (both generic and microservices) and serverless architectures, and the pros, cons and use cases of each.</p> <h3>Monolith</h3> <blockquote><p>All code and components are combined into a single unit (FE, BE all in one)</p></blockquote> <ul><li>Mostly completely coupled, and generally used when starting out and moving fast</li> <li>Because everything is together, it is simple to develop, iterate, test and deploy on (when small)</li> <li>Once things get more larger and require scale, it may get out of hand</li></ul> <p><strong>Pros:</strong></p> <ul><li>Good for starting out, testing, simple to handle when small</li> <li>Efficient and simple, all things managed in 1 place</li></ul> <p><strong>Cons:</strong></p> <ul><li>Limited scalability</li> <li>Limited / lack of flexibility (changing one piece cause cause everything to be redeployed or cause the whole app to fail)</li> <li>Gets more complex and harder to manage as the application grows</li> <li>Potential security risk as everything is together (if anyone gets into the app, because everything’s in one place it can be vulnerable and easily compromised)</li></ul> <p><strong>Use cases:</strong></p> <ul><li>Small applications / starting out (where iteration and delivering features are more important rather than managing)</li> <li>Applications with well-defined business processes and simple processes</li> <li>Applications where performance is critical (distributed systems can be non-performant due to latency)</li></ul> <p>Aim for modularity in monoliths where possible to ensure that when you do need to move to a distributed architecture, at least that can be somewhat easier to do in the future - but it may also be perfectly fine to stay as a monolith.</p> <h3>Distributed</h3> <blockquote><p>method of developing software systems that are loosely coupled and independently deployable smaller services which run in their own processes or others</p></blockquote> <p>There are many types of distributed architectures, but main ones commonly used are service oriented. The two main service ones are generic services and microservices.</p> <ul><li><p><strong>Generic services</strong></p> <blockquote><p>component of an application that provides specific functionality for the application</p></blockquote></li> <li><p>this could be part of the monolith where all services run in the same process, or part of a distributed system (a microservice on the other hand, cannot be part of a monolith)</p></li> <li><p><strong>Microservices</strong> (small, independent, loosely coupled)
The difference is that microservices and generic services are that they are isolated, independent and they have their own processes and are meant to be small (hence micro). They should not be coupled to other services and only communicate to other services via HTTP / REST or queue messaging.
Although many developers may claim that they do microservices, there’s a high chance they should take a look again and realise that they are in fact just implementing a generic service instead (if it talks to other services directly, writes to a shared database, or uses shared resources with other services).</p></li></ul> <p><strong>Pros:</strong></p> <ul><li>flexibility - be able to make smaller changes quickly without breaking the entire application or impacting other parts of the system</li> <li>more fault tolerant (separating services means if one part goes down, the rest can still be working)</li> <li>security benefits out of the box (separating services means if one person gets into 1 part of the system, they may not be able to get into another part if separated into a different service)</li> <li>independently deployable</li> <li>independently developed (you can have a team dedicated solely focused on developing and maintaining a service)</li> <li>allows for CICD of large complex applications to increase capability to innovate and reduce time to market for new features</li> <li>Tech stack can differ - while this is possible to do, usually not recommended - though allows developers to experiment or make it easier to innovate and try things in isolation</li></ul> <p><strong>Cons:</strong></p> <ul><li>Distributed systems come with extra complexity - developer environments can also become complex to set up (due to having multiple services in separate repositories)</li> <li>Development and testing can become more complex and difficult (separate 2 repositories for every service due to having a separate test repository and the actual service repository)</li> <li>Data management and achieving data consistency between services</li></ul> <p><strong>Use cases:</strong></p> <ul><li>E-commerce platforms</li> <li>Social media platforms</li> <li>Online gaming platforms (though this can be monolithic)</li></ul> <h3>Serverless</h3> <blockquote><p>applications that significantly depend on 3rd-party services - usually by a cloud service provider (backend as a service such as AWS Gateway, Firebase, Supabase, functions as a service such as Lambda functions in AWS)</p></blockquote> <ul><li>All application logic still run on servers but maangement of these servers is taken care of, and developers just focus on the code and business logic</li></ul> <p><strong>Pros:</strong></p> <ul><li>Scalability - this is taken care of for you so that if traffic increases, the services also grow with traffic and can handle it</li> <li>Cost-effectiveness and pay for usage only - no need to pay for uptime 24/7 (however - note that serverless generally have variable costs - meaning that once you auto-scale or grow significantly, the costs may go through the roof with no limit and thus it may be more beneficial to switch to a fixed cost server instance instead)</li> <li>Server management not required, focus on code and business logic</li></ul> <p><strong>Cons:</strong></p> <ul><li>Cost can be more expensive in the long term - consider switching architectures when your costs go out of control</li> <li>Testing and development can only work when connected to the internet (to be able to connect to serverless services)</li> <li>Troubleshooting and debugging can be difficult as the 3rd party providers are managing these servers, not you (if they go down, you go down too)</li></ul> <p><strong>Use cases:</strong></p> <ul><li>Real-time file processing (via lambda functions and SQS on AWS)</li> <li>Real-time stream processing (via Kinesis on AWS)</li> <li>ETL processes</li> <li>Hosting static websites / front-end applications (via S3 on AWS)</li></ul> <h3>References</h3> <ul><li>ThePrimeagen’s <a href="https://frontendmasters.com/courses/algorithms/introduction/" rel="nofollow">The Last Algorithm’s Course You’ll Need</a> on FrontEnd Masters</li> <li>Erik Reinert’s <a href="https://frontendmasters.com/courses/backend-architectures/" rel="nofollow">Introduction to Backend Architectures</a> on FrontEnd Masters</li></ul>`,1);function d(e){var t=a();s(68),i(e,t)}export{d as default,c as metadata};
