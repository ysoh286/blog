import{a as t,t as n}from"./disclose-version.CF8kLgI2.js";import"./legacy.C4HDMYEH.js";import{q as o}from"./runtime.D_tNg0db.js";const d={title:"Weekly learning review - C4 model for defining architecture diagrams",date:"2024-09-29T16:00:00.000Z"};var a=n(`<p>This week’s progress:</p> <ul><li>Completed Steve Kinney’s Web Security course on FrontEnd Masters (more notes added to previous weekly review). Couple of highlights of the second half: <ul><li>the recommendation that we should really be storing tokens in cookies, NOT in local storage or session storage</li> <li>Use of content security policy as another layer to help prevent XSS / CSRF attacks</li> <li>Use of JWT tokens with a strong hashing algorithm over plaintext encryption / decryption or signed cookies</li></ul></li> <li>Started Maxi Ferreira’s Fundamentals of Frontend Architecture course, which touched upon using Simon Brown’s C4 model</li></ul> <h2>Definition of architecture vs design</h2> <p>Like a house, the architecture of the house is like the structure of the house. So in software architecture, we refer to the structure of the system.
These are the things that are hard to change.</p> <p><em>A set of significant design decisions about how the software is organised to promote desired quality attributes and other properties - Michael Keeling</em></p> <p>The difference between architecture and design blur a bit, and should be seen as a spectrum rather than clear cut blocks. Generally if something counts more as software design (which includes decisions on how we will implement the system, lower level decisions and design patterns used) it’s easier to change compared to architecture.</p> <h2>Why is architecture so important?</h2> <p>Because these are harder to change across time, it makes sense to spend a significant amount of time on understanding the problem, gathering requirements from other stakeholders and discussing these as a team and consider different aspects before making a decision (but not to the point of analysis paralysis).
Do not underestimate an architectural decision, and avoid overestimating a design decision.</p> <p><em>One of the mistakes I’ve made before is diving into design decisions and writing a design doc that was only written at the start of the project (wasted 3-4 weeks gathering requirements from POs, stakeholders, developers, architects, only for it to completely change due to changes in scope). It got out of date real quick and was never maintained. Rather than doing this, design docs should be iterative and revised as we continue to implement parts of the system as scope / requirements change over time.</em></p> <p>Being an architect involves aligning and setting a technical direction and vision / strategy, understanding and analysing trade offs, translating business and product requirements into technical requirements, building breadth of knowledge while maintaining depth, writing documentation, running meetings, reviewing, writing, mentoring.</p> <ul><li>Understand, design, then implement in iterative cycles.</li></ul> <h2>C4 Model - an approach for defining architecture of a proposed system</h2> <ul><li>The C4 model is a series of diagrams used to visualise the architecture of projects with some level of detail developed by Simon Brown. <ul><li>Why? <ul><li>ever heard of UML? Not many people use it though (approximately 1 in 10 people, yet it is presumably meant to be a ‘unified model language’, it’s not the most easiest to learn). Although useful, it’s very technical thus it would not be easily communicated to other non-technical peers.</li> <li>model does rely on existing modelling techniques including UML and ERDs for more detailed explanations (more at the Code level)</li> <li>As engineers, we tend to draw architecture diagrams on a whiteboard / sheet and draw lots of arrows and boxes… everywhere</li> <li>Does it make any sense? Possibly, but gets messy real quick</li> <li>The C4 model is a way to make software architecture diagrams more friendly and easier to understand and communicate to people</li> <li>When we draw diagrams, we should think more closer to reality than we think</li> <li><blockquote><p>“Abstractions first, then notation”</p></blockquote></li></ul></li></ul></li> <li>There are 4 levels. At each level, it’s pretty much taking one of the blocks defined in the level higher up and breaking it down further. <ul><li>Level 1: Context <ul><li>identify system and external systems around it (scope defined and how it fits across the board)</li></ul></li> <li>Level 2: Containers <ul><li>define a system further down and see how it has been represented - includes applications, data stores required (define users, which systems they will be interacting with, and if there are any external systems that will communicate with this system)</li> <li>these are generally independently deployable, while the arrows represent the inter-communications between each container</li> <li>what app is the system (is it a native iOS application, Kotlin / Swift required?, a web application? Does it require an API to talk to? Does it require retrieving data from a database? What kind of database - SQL? NoSQL? Key-value? Do we need real-time communication where a web socket server is required? Who are our users who will be interacting with these containers?)</li></ul></li> <li>Level 3: Components <ul><li>Next level from containers - we can define what controllers are required, design patterns used inside the container</li> <li>Consider using this if we need to communicate something or through a design doc</li></ul></li> <li>Level 4: Code (optional) <ul><li>These can include entity relationship digrams (ERD), UML classes, interfaces, objects, functions, actors, roles, personas, individuals, breaking down components further into more lower level details</li> <li>Generally not recommended to do as these could be generated via IDEs</li> <li>This is where UML is useful and could be used when you need to define something more clearly</li></ul></li></ul></li> <li>The model is meant to be a developer-friendly approach to software architecture diagramming which can be used to communicate between software teams or during architectural reviews.</li> <li>Note that these can be drawn in any order (it’s not linear, and nor should the design and implementation be linear in any way) - these different diagrams are telling different stories at different levels</li> <li>View diagrams as a way of storytelling</li> <li>Label diagrams with a title on what type of diagram it is (context, container, component, code)</li> <li>Aim for visual consistency and layout across these diagrams, and be wary when using acronyms</li> <li>Aim for uni-directional lines to represent dependencies or data flow and describe the purpose of the line</li> <li>Use shape, colour and size to complement diagrams</li> <li>Aim for readability - make your diagram standalone and tell the story rather than having to chase the person who understands it or drew it</li> <li>Tools to use: <ul><li>C4-PlantUML</li> <li>Structurizr</li> <li>Avoid general purpose diagramming tools like LucidCharts</li></ul></li></ul> <h3>References</h3> <ul><li>Steve Kinney’s <a href="https://frontendmasters.com/courses/web-security-v2/" rel="nofollow">Web Security</a> course on FrontEnd Masters</li> <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP" rel="nofollow">Content security policy - MDN</a></li> <li>Maxi Ferreira’s <a href="https://frontendatscale.com/courses/frontend-architecture/" rel="nofollow">Fundamentals of Frontend Architecture</a> course</li> <li><a href="https://c4model.com/" rel="nofollow">C4 Model</a></li> <li><a href="https://en.wikipedia.org/wiki/C4_model" rel="nofollow">C4 Model - Wikipedia</a></li> <li><a href="https://www.youtube.com/watch?v=x2-rSnhpw0g" rel="nofollow">Visualising software architecture with the C4 model - Simon Brown, Agile on the Beach 2019</a></li> <li><a href="https://github.com/plantuml-stdlib/C4-PlantUML" rel="nofollow">C4-UML</a></li> <li><a href="https://crashedmind.github.io/PlantUMLHitchhikersGuide/C4/C4Stdlib.html" rel="nofollow">Using PlantUML with C4 Model</a></li> <li><a href="https://www.structurizr.com/" rel="nofollow">Structurizr</a></li></ul>`,1);function h(e){var i=a();o(28),t(e,i)}export{h as default,d as metadata};