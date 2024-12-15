import{a as t,t as o}from"./disclose-version.hD3RjQbW.js";import"./legacy.C6sgJd9a.js";import{n as s}from"./runtime.Bs2-O94s.js";const d={title:"Weekly learning review - feature sliced design",date:"2024-10-13T22:25:00.000Z"};var n=o(`<p>This week’s progress:</p> <ul><li>Completed Erik Reinert’s Introduction To Backend Architectures course</li> <li>Finished off Maxi Ferreira’s Fundamentals of Frontend Architecture course</li></ul> <p>It took a while to get back to the frontend architecture course.
Key learnings involved the idea of modules, entities, while breaking down screens into features and components seemed pretty common (for anyone who’s used React, Vue, or just built with any of the popular front-end frameworks / libraries). The design document structure mentioned was similar to that of Google’s one.</p> <h3>Feature sliced design</h3> <p>Feature sliced design is an <em>‘architecture methodolgy for frontend projects’</em>.</p> <ul><li>Set of rules and conventions for organising code</li> <li>Main goal: make project more understandable, structured as business requirements change over time as front-end applications become more complex</li> <li>A set of tools provided to help check project architecture, folder generation</li> <li>Things are divided into the following: <ul><li>Layers <ul><li>app (everything that makes the application run - routing, entrypoints, global styles, providers)</li> <li>pages (full pages in nested routing)</li> <li>widgets (large pieces of functionality / UI)</li> <li>features (reused implementations of product features)</li> <li>entities (business entities)</li> <li>shared (reusable functionality)</li></ul></li> <li>Slices <ul><li>partition code by business domain</li> <li>cannot use slices in same layer (things should be as decoupled and independent as possible)</li></ul></li> <li>Segments <ul><li>ui (UI components, styles, formatters)</li> <li>api (backend interactions, mappers, data types)</li> <li>model (schemas, interfaces, stores, business logic)</li> <li>lib (library code that is required)</li> <li>config (configuration files and feature flags)</li></ul></li></ul></li> <li>The whole point of this is to divide things into modules that are independent and that there shouldn’t be one module importing from another.</li> <li>This is an interesting way to reshape architecture. May or may not work for everyone, but aims to give an option of how front-end applications can be maintained.</li></ul> <h3>Pros</h3> <ul><li>Aims to solve everyday problems</li> <li>Intuitive for all developers</li> <li>Focuses on business features and user needs</li> <li>Structure is standardised, and stable and is meant to be easy to refactor</li></ul> <h3>Cons</h3> <ul><li>Adoption and requires buy-in from other developers, stakeholders, business</li> <li>Not required for small projects or small applications</li></ul> <p>If we do wish to use this, consider doing a slow migration towards it.</p> <p>When not to use it?</p> <ul><li>If project is small, or shortlived, or doesn’t need an architecture so in depth</li> <li>Business does not perceive connection between code base to velocity of delivery of features</li> <li>Business wants to move fast and close things as soon as possible</li></ul> <h3>Format for design docs</h3> <ol><li>Overview</li> <li>Context / Scope</li> <li>Goals and non-goals</li> <li>Design</li> <li>Alternatives considered, tradeoffs</li> <li>Timeline</li> <li>Risks, cross cutting concerns, other questions</li> <li>Appendix (optional)</li></ol> <p>Use design docs when you need to communicate to many people or stakeholders, or if there’s something that needs to be shared. Maintaining these can be overhead and take significant time to write. These can become a living document that require iteration as implementation begins.</p> <h3>References</h3> <ul><li>Erik Reinert’s <a href="https://frontendmasters.com/courses/backend-architectures/" rel="nofollow">Introduction to Backend Architectures</a> on FrontEnd Masters</li> <li>Maxi Ferreira’s <a href="https://frontendatscale.com/courses/frontend-architecture/" rel="nofollow">Fundamentals of Frontend Architecture</a> course</li> <li><a href="https://feature-sliced.design/" rel="nofollow">Feature sliced design</a></li> <li><a href="https://www.industrialempathy.com/posts/design-docs-at-google/" rel="nofollow">Design Docs at Google - Industrial Empathy</a></li></ul>`,1);function c(e){var i=n();s(34),t(e,i)}export{c as default,d as metadata};
