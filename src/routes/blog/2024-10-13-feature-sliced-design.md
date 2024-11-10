---
title: 'Weekly learning review - feature sliced design'
date: 2024-10-13 22:25:00
---

This week's progress:

- Completed Erik Reinert's Introduction To Backend Architectures course
- Finished off Maxi Ferreira's Fundamentals of Frontend Architecture course

It took a while to get back to the frontend architecture course.
Key learnings involved the idea of modules, entities, while breaking down screens into features and components seemed pretty common (for anyone who's used React, Vue, or just built with any of the popular front-end frameworks / libraries). The design document structure mentioned was similar to that of Google's one.

### Feature sliced design

Feature sliced design is an _'architecture methodolgy for frontend projects'_.

- Set of rules and conventions for organising code
- Main goal: make project more understandable, structured as business requirements change over time as front-end applications become more complex
- A set of tools provided to help check project architecture, folder generation
- Things are divided into the following:
  - Layers
    - app (everything that makes the application run - routing, entrypoints, global styles, providers)
    - pages (full pages in nested routing)
    - widgets (large pieces of functionality / UI)
    - features (reused implementations of product features)
    - entities (business entities)
    - shared (reusable functionality)
  - Slices
    - partition code by business domain
    - cannot use slices in same layer (things should be as decoupled and independent as possible)
  - Segments
    - ui (UI components, styles, formatters)
    - api (backend interactions, mappers, data types)
    - model (schemas, interfaces, stores, business logic)
    - lib (library code that is required)
    - config (configuration files and feature flags)
- The whole point of this is to divide things into modules that are independent and that there shouldn't be one module importing from another.
- This is an interesting way to reshape architecture. May or may not work for everyone, but aims to give an option of how front-end applications can be maintained.

### Pros

- Aims to solve everyday problems
- Intuitive for all developers
- Focuses on business features and user needs
- Structure is standardised, and stable and is meant to be easy to refactor

### Cons

- Adoption and requires buy-in from other developers, stakeholders, business
- Not required for small projects or small applications

If we do wish to use this, consider doing a slow migration towards it.

When not to use it?

- If project is small, or shortlived, or doesn't need an architecture so in depth
- Business does not perceive connection between code base to velocity of delivery of features
- Business wants to move fast and close things as soon as possible

### Format for design docs

1. Overview
2. Context / Scope
3. Goals and non-goals
4. Design
5. Alternatives considered, tradeoffs
6. Timeline
7. Risks, cross cutting concerns, other questions
8. Appendix (optional)

Use design docs when you need to communicate to many people or stakeholders, or if there's something that needs to be shared. Maintaining these can be overhead and take significant time to write. These can become a living document that require iteration as implementation begins.

### References

- Erik Reinert's [Introduction to Backend Architectures](https://frontendmasters.com/courses/backend-architectures/) on FrontEnd Masters
- Maxi Ferreira's [Fundamentals of Frontend Architecture](https://frontendatscale.com/courses/frontend-architecture/) course
- [Feature sliced design](https://feature-sliced.design/)
- [Design Docs at Google - Industrial Empathy](https://www.industrialempathy.com/posts/design-docs-at-google/)
