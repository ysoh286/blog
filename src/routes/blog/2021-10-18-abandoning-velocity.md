---
title: 'Abandoning velocity in scrum'
date: 2021-10-18 17:00:00 +1300
---

In a recent retro, a team wasn't happy with the way we presented performance in a sprint review. Usually what would happen is we would review the burndown chart and how we went in the sprint, whether we achieved our goal and the velocity.

As this was a sprint where we entered a lockdown, it appeared that our velocity has dropped and thus I (wrongly) tried justifying it that it was that people may have not been as productive at home.

But this wasn't true. And that's where my team proved me wrong. And how very wrong I was. With the lockdown, some of them mentioned that they were in fact a lot more productive and got more done but it wasn't captured on the board. Others were less productive.

And with the more recently work from home policy where much of the team could work from home, their productivity hadn't dropped at all. They were still hitting sprint goal and requirements.

And then came the fact that they realised the story points that were achieved did not fully reflect all the work they did do in the sprint.
As one engineer put it:

> "These points are just a forecast, and you're just measuring what we originally thought we could do with what we could do. But we're not changing the points to reflect how much work was actually done or what other work that needed to be done to meet these tickets."

Which led to:

> "Let's stop showing burndown and velocity. Velocity is NOT a measure of productivity or efficiency, and it hurts our ego."

And that became an improvement for next sprint, and they were right.

## Remember that story points are just an estimate

Story points are simply for planning / forecast purposes and for estimating capacity. At any rate, a plan can go wrong at any time.
Any engineer / software developer would have experienced when their ticket they originally started doing was in fact not a 1 -2 points, but more like a 3 - 5 points as they found out more about it. (they might refer this to scope creep, or additional features, or simply just realising that actually this is more than we anticipated).
Treat story points as an indication for capacity at planning - remember that we want to instill quality in what we do in the increment. If something's gonna take longer than usual - developers should be encouraged to negotiate. Talk to the product owner - chances are you'll need to ask whether it'll still meet the sprint goal, or whether you need other team members to help you out.

## Velocity gives a sense of 'false' efficiency, when what you should be focusing on is delivering quality, not speed

If someone asks you about velocity, it means they're literally trying to ask you how quickly can you get your tickets done, and generally when you try to rush something, you LOSE quality. There are times when a team will need to meet a deadline, but remember that when things need to be done quickly, it comes with a cost called technical debt which eventually needs to be paid back at some point. If you really have to use velocity, only use it for planning / forecastin purposes, though it may be a good idea to try other metrics instead (this I haven't tried, but it's something to explore).

## It's ok to not finish everything that was planned in the sprint

This was a hard one to get my head around. I don't think I've ever had a sprint where the team finished every ticket that was planned in the sprint, and people had the view that the sprint was a failure with so many things unfinished. When I took up the scrum master position, I was obsessed with velocity, burndown and I was beating myself up for not being able to guide the team to finish everything. We tried setting buffers and restricting / minimising interruptions mid-sprint, but even with a sprint that had no interruptions the team wasn't finishing every ticket in the sprint.

It comes back to story points being not a fully representative of the work being done and are just an estimate - at standup, developers should raise whether they are taking more time than usual (and that's ok, because we're dealing with unknown unknowns all the time). Another alternative to look at is researching ways to better estimate tasks.

If it's ok to not finish everything in the sprint backlog, how should you measure if your team's doing well?

## Measure productivity / value in terms of hitting the sprint goal + requirements

Simply ask the team if they have achieved the sprint goal and show that in the sprint review.

- Did we receive any feedback from our customers throughout the sprint? (Note that this is generally for if you don't have the opportunity to invite your customers / users to the sprint review, but rather these client meetings take place during the sprint)
- What value did we deliver to our customers and the business?
- How much of it is potentially shippable to our users and what is still left in progress?

## Burndowns are ok as an indicator for things moving along to done

Burndown charts are still useful bar the weekends (I hate JIRA since it flat-lines for weekends, so it looks like nothing's done, but really it's just everyone having a well deserved break), and use it as an indicator of when things are getting done. If things are stalling, you've probably got a problem and these should be raised at stand-up.
The alternative which seems to be more advantageous is item aging (which is measuring how long something starts before it gets done - either in DOING / TESTING before it gets to DONE).

It was tough to abandon velocity / burndown, but it was the right choice. I hope I don't have to look back at those velocity bar charts in JIRA again!

## References / Helpful resources

- [Your Daily Scrum Podcast (Agile for Humans)](https://www.youtube.com/watch?v=EaNDvNEOMWs) - Todd Miller's rant on this makes so much sense!
- [Velocity is a made-up number - Scrum.org](https://www.scrum.org/resources/blog/velocity-made-number)
- [Don't use velocity as a management instrument](https://www.scrum.org/resources/blog/using-velocity-management-instrument-dont-do-it)
- [Why velocity is the most dangerous metric for software development teams](https://linearb.io/blog/why-agile-velocity-is-the-most-dangerous-metric-for-software-development-teams/)
- [Don't use velocity to compare Scrum teams](https://www.linkedin.com/pulse/dont-use-velocity-compare-scrum-teams-farhan-akbar)
