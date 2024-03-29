---
title: 'When you struggle to write an algorithm...'
date: 2023-01-18 14:00:08
---

While getting rid of technical debt isn't exactly the most fun, it's a pretty important skill to have for any developer to have when diving into a codebase.

Recently, I ran into an issue of trying to get rid of a utility function from a 3rd party library that was used in our codebase.

I had a solution - but it was a sloppy one. Although it did the job, it felt flaky and incorrect. I had written it in haste after being so close to removing the library. It was only 100+ changes in the PR - surely it could be a low risk compromise?

As expected, it didn't get past code review.
Even though I was eager and desperate to get rid of this library from our codebase, other peers had the same problem with the replacement written - it should've been a utility, or an extension of one of the utilities we currently have in-house, and be able to handle all use cases. As days went by, the longer I stewed on it, it seemed more like a terrible idea despite knowing it would only affect 2 places.

Except the problem was - when we actually sat down to write the algorithm, it just sounded like a bad idea in general. Why should we try recreate 2 types (both arrays and objects, when exactly would you create an array for a nested situation and when for an object, what if the said array didn't exist in the first place? What would it do?). There were too many cases to cover, and it was too complex.
And you know what that means - generally if something's incredibly complex for something so simple, it's probably a bad idea or very likely a bad implementation would come through.

Instead, I took a different approach. What about the 2 cases that it was being used in - what if there was a code smell of some sort there?
Turns out we were doing unnecessary transformations in both cases with nested data structures that ended up being processed into flat structures. Instead of creating a nested one only to flatten it, why not just go straight to the flat one? We went with that, got rid of using the utility in those 2 places which then allowed us to finally remove the 3rd party library altogether from our codebase.

Although it took an extra sprint (2 weeks) to figure this out, the solution was less risky. As engineers, we often forget that as much as we love to write and refactor code, we need to make sure it works and minimise the number of bugs we introduce into production. Cutting corners always has its consequences.

Lessons learned:

- When we struggle to write an algorithm that does too much or is unpredictable, it's probably going to cause more headaches than solve your problem
- Assess the situation if you really do need it
- Trust your gut and take your time (if you feel pressure to finish something, ask yourself whether the risk is worth it - can you bear to maintain that risk?)
