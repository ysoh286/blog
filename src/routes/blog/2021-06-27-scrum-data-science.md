---
title: 'Is scrum bad for data science? Thoughts and observations'
date: 2021-06-27 17:00:00 +1300
---

Scrum is great in theory. When it works, it works well. However, sometimes it may be hard to implement and may not work for everyone.

One case is for data science and research teams.

Here are some observations from trying to apply scrum to data science teams (and apologies for causing pain and frustration to you data scientists out there).

## Problems

- Refinement sessions become a chicken-egg situation and render useless (the team cannot refine because they don't have the results/outcome which will dictate what their next steps are)
- Sprint requirements and goals may become unachievable or redundant once your team has tried something and there are inconclusive or unsuccessful results, leading down a different path that deviates away from these goals. In other cases, the requirements might change because of changing direction halfway in the sprint (which means you end up changing the goal mid-way through the sprint)
- A lot of the time, what is worked on in the current sprint will dictate the next steps/actions for the next sprint
- People cannot easily define a story point estimate because they are dealing with new research, techniques that they are not familiar with and require time to deep dive into these technologies/ideas
- You cannot predict the outcome of a task you're working on until you get results

These problems boil down to 1 simple concept: the more uncertainty and risk you face, you should essentially work in shorter sprints or periods to reduce and get feedback faster. By understanding the data science lifecycle and workflow, you'll see that it is usually iterative, and you won't always get from A to B easily.

## Proposed solutions

### Weekly scrum rather than 2-week scrum

Because of the uncertainty, you manage to get feedback faster and focus on fewer tasks for the week. Sprints would start on Monday and finish on Friday with sprint review, retro and planning (or on Monday). The team can still show what they have worked on and any results/outcomes they have

A lot of people are against a weekly scrum as it is tiring. Some may argue that q week is not enough time to get an output. But it's still something to try if you're up for it.

### Weekly meetings with Kanban

Having weekly meetings with stakeholders allow the team to show what progress they have made and suggest what to work on next. The stakeholders and product owner can give some direction and priority on what can be worked on with any additional research questions they would like to answer. Running a Kanban approach would help facilitate handling these new ideas. Rather than tracking story points and getting your team to story point, you track flow, cycle time, lead time and other Kanban related metrics instead. Although there is no time limit, the team can treat the weekly meetings as a 'deadline' or timebox to showcase and review results.

### Timebox research efforts

Although this might seem contradictory to research (as generally, the most creativity comes out when research is focused and not under pressure), the company still needs to make money and should treat research as an investment. Teams would need to timebox their research efforts. If there is something they would like to explore that is outside of the business requirements, they would have to set aside some time to purely focus on this to avoid constantly context switching between other tasks.

Ideally, you can do timeboxed spikes for research. Essentially the team would be 'timeboxed' to either 1 or 2 weeks depending on how often they have their reviews and showcase their results.

### A Kanban/scrum hybrid approach

Some tasks in the data science workflow can be managed using Scrum. This is because the output is predictable. These tasks may be similar to software engineering. Examples include putting a model into production or putting a step into a data pipeline.
Your engineers could be working on a scrum cycle, but your analytics team can be aware of this.
It is possible to run Kanban and scrum together - Scrum.org has a guide for this [here](https://www.scrum.org/resources/kanban-guide-scrum-teams).

In the end, it comes down to what your team needs. Talk to your team - find out what's working and what's not, and work from there.

## References / Helpful resources

- [Team Data Science Process](https://docs.microsoft.com/en-us/azure/machine-learning/team-data-science-process/agile-development) by Microsoft
- [Data science lifecycle / workflow](https://www.datascience-pm.com/data-science-life-cycle/) by Data Science Project Management
- [Kanban with Scrum teams](https://www.scrum.org/resources/kanban-guide-scrum-teams) by Scrum.org
