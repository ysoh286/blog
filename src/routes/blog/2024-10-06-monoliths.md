---
title: 'Weekly learning review - summary of monolith, distributed and serverless architectures'
date: 2024-10-06 21:45:00
---

This week's progress:

- Rewatched some of theprimagean's The Last Algorithms Course You'll Ever Need
- Started Erik Reinert's Introduction To Backend Architectures course (close to completion)

I took a bit of detour and paused on the other frontend architecture course as I wanted to know more about it from a backend perspective. Will probably finish the other one once we complete this one, and dive into more detail.

Key learnings: knowing the differences between monolith, distributed (both generic and microservices) and serverless architectures, and the pros, cons and use cases of each.

### Monolith

> All code and components are combined into a single unit (FE, BE all in one)

- Mostly completely coupled, and generally used when starting out and moving fast
- Because everything is together, it is simple to develop, iterate, test and deploy on (when small)
- Once things get more larger and require scale, it may get out of hand

**Pros:**

- Good for starting out, testing, simple to handle when small
- Efficient and simple, all things managed in 1 place

**Cons:**

- Limited scalability
- Limited / lack of flexibility (changing one piece cause cause everything to be redeployed or cause the whole app to fail)
- Gets more complex and harder to manage as the application grows
- Potential security risk as everything is together (if anyone gets into the app, because everything's in one place it can be vulnerable and easily compromised)

**Use cases:**

- Small applications / starting out (where iteration and delivering features are more important rather than managing)
- Applications with well-defined business processes and simple processes
- Applications where performance is critical (distributed systems can be non-performant due to latency)

Aim for modularity in monoliths where possible to ensure that when you do need to move to a distributed architecture, at least that can be somewhat easier to do in the future - but it may also be perfectly fine to stay as a monolith.

### Distributed

> method of developing software systems that are loosely coupled and independently deployable smaller services which run in their own processes or others

There are many types of distributed architectures, but main ones commonly used are service oriented. The two main service ones are generic services and microservices.

- **Generic services**

  > component of an application that provides specific functionality for the application

- this could be part of the monolith where all services run in the same process, or part of a distributed system (a microservice on the other hand, cannot be part of a monolith)

- **Microservices** (small, independent, loosely coupled)
  The difference is that microservices and generic services are that they are isolated, independent and they have their own processes and are meant to be small (hence micro). They should not be coupled to other services and only communicate to other services via HTTP / REST or queue messaging.
  Although many developers may claim that they do microservices, there's a high chance they should take a look again and realise that they are in fact just implementing a generic service instead (if it talks to other services directly, writes to a shared database, or uses shared resources with other services).

**Pros:**

- flexibility - be able to make smaller changes quickly without breaking the entire application or impacting other parts of the system
- more fault tolerant (separating services means if one part goes down, the rest can still be working)
- security benefits out of the box (separating services means if one person gets into 1 part of the system, they may not be able to get into another part if separated into a different service)
- independently deployable
- independently developed (you can have a team dedicated solely focused on developing and maintaining a service)
- allows for CICD of large complex applications to increase capability to innovate and reduce time to market for new features
- Tech stack can differ - while this is possible to do, usually not recommended - though allows developers to experiment or make it easier to innovate and try things in isolation

**Cons:**

- Distributed systems come with extra complexity - developer environments can also become complex to set up (due to having multiple services in separate repositories)
- Development and testing can become more complex and difficult (separate 2 repositories for every service due to having a separate test repository and the actual service repository)
- Data management and achieving data consistency between services

**Use cases:**

- E-commerce platforms
- Social media platforms
- Online gaming platforms (though this can be monolithic)

### Serverless

> applications that significantly depend on 3rd-party services - usually by a cloud service provider (backend as a service such as AWS Gateway, Firebase, Supabase, functions as a service such as Lambda functions in AWS)

- All application logic still run on servers but maangement of these servers is taken care of, and developers just focus on the code and business logic

**Pros:**

- Scalability - this is taken care of for you so that if traffic increases, the services also grow with traffic and can handle it
- Cost-effectiveness and pay for usage only - no need to pay for uptime 24/7 (however - note that serverless generally have variable costs - meaning that once you auto-scale or grow significantly, the costs may go through the roof with no limit and thus it may be more beneficial to switch to a fixed cost server instance instead)
- Server management not required, focus on code and business logic

**Cons:**

- Cost can be more expensive in the long term - consider switching architectures when your costs go out of control
- Testing and development can only work when connected to the internet (to be able to connect to serverless services)
- Troubleshooting and debugging can be difficult as the 3rd party providers are managing these servers, not you (if they go down, you go down too)

**Use cases:**

- Real-time file processing (via lambda functions and SQS on AWS)
- Real-time stream processing (via Kinesis on AWS)
- ETL processes
- Hosting static websites / front-end applications (via S3 on AWS)

### References

- ThePrimeagen's [The Last Algorithm's Course You'll Need](https://frontendmasters.com/courses/algorithms/introduction/) on FrontEnd Masters
- Erik Reinert's [Introduction to Backend Architectures](https://frontendmasters.com/courses/backend-architectures/) on FrontEnd Masters
