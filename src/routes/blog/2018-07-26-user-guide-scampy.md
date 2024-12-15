---
title: 'The informal user guide to scampy: a tool for visualising waiting times'
date: 2018-07-26 13:14:08
---

_Last updated: Thursday 26th July, 2018_

## Objective:

**scampy** was developed to help students visualise waiting times and try make links between the Exponential and the Poisson distribution.

There are 4 different modes, which all follow a step-by-step approach in visualising waiting times and counts in a certain time interval. The only difference is how the data is obtained.

Within each mode, there are 4 main steps:

- initial visualisation of times
- visualising and collecting waiting times between events
- setting a time interval, visualising and collecting the counts in the specified time interval
- summary of the data

<a href="https://ysoh286.github.io/scampy"> Click here to access the tool. </a>

### Data Mode

**Data Mode** allows you to put an existing data set of actual times to be visualised. It will then show this on a timeline, which helps you see where and when events have occurred.

<img alt="data-mode-1" src="../assets/2018-07-26-user-guide-scampy/data-mode-01.png" />

The next step allows you to visualise and collect the waiting times.
Drag the slider to go fast forward/or rewind to a certain stage of the animation.

`Start`, `Stop`, `Reset` should be self-explanatory:

- `Start`: start/run the animation
- `Stop`: pause the animation
- `Reset`: reset the animation back to the start
- `Speed` slider allows you to control the speed of the animation.
  These controls are relatively consistent across all stages that use an animation.

<img alt="data-mode-2" src="../assets/2018-07-26-user-guide-scampy/data-mode-02.png" />

The `Fit` button allows you to see how well the data fits to an exponential distribution. This is only enabled once the animation has run at least once or reached the end.

<img alt="data-mode-2-1" src="../assets/2018-07-26-user-guide-scampy/data-mode-02-1.png"/>

Next, the user is prompted for a time interval. This is to help divide the data by that specified time interval, which then counts the events in each interval.

You can change and look at a specific part of the data.

<img alt="data-mode-3-1" src="../assets/2018-07-26-user-guide-scampy/data-mode-03-1.png"/>

Once a time interval has been specified, the next stage allows you to visualise and collect the counts in each time interval.

<img alt="data-mode-4" src="../assets/2018-07-26-user-guide-scampy/data-mode-04.png" />

The `Fit` button now shows how well the data fits to a Poisson distribution.

<img alt="data-mode-4-1" src="../assets/2018-07-26-user-guide-scampy/data-mode-04-1.png"/>

The final stage shows a summary of the data with both its waiting time and counts.

- `Show mean`: shows where the mean waiting time is on the graph
- `Fit`: fits both the exponential and poisson distribution on respective graphs

<img alt="data-mode-5" src="../assets/2018-07-26-user-guide-scampy/data-mode-05.png"/>

You can also change the time interval to see how it affects the counts.

<img alt="data-mode-5" src="../assets/2018-07-26-user-guide-scampy/data-mode-05-1.png"/>

### Video Mode

**Video Mode** allows you to load a video/audio clip locally from your computer or load a YouTube video and record events.

To load a video/audio clip locally, simply press `Choose file` button in the box and then upload your video/audio clip.
This will then load on the screen.

<img alt="video-mode-1" src="../assets/2018-07-26-user-guide-scampy/video-mode-01.png" />

To load a video clip from YouTube, paste the link to the video you want to use. Links should start with either `https://www.youtube.com/embed` or `https://www.youtube.com/watch`. Then, press the `Upload` button.

_NOTE: this is a new feature that is still being trialed._

<img alt="video-mode-2" src="../assets/2018-07-26-user-guide-scampy/video-mode-02.png"/>

The video should appear along with the animation timeline and its controls.

<img alt="video-mode-2-1" src="../assets/2018-07-26-user-guide-scampy/video-mode-02-1.png" />

To start timing (which starts the video at the same time), press the `Start` button.
To record an event at a certain time, use the `Click Me!` button. What you should see is a line that records that event at that specified time.
Press `Pause` to pause the animation and video.
What you should see is that those times are recorded in the text box at the bottom of the page.

<img alt="video-mode-2-2" src="../assets/2018-07-26-user-guide-scampy/video-mode-02-2.png"/>

The next steps are in the same format as those seen in **Data Mode** - the only difference is that the times are now times recorded from the video, not from a specified data set.

### Game Mode

**Game Mode** allows you to play a game called Kiwi Runner. Help the kiwi collect as many coins as they can by making the kiwi jump (by pressing SPACEBAR/UP arrow key) at certain times. Each coin jump is recorded.

Once again, the only difference is that the times recorded are times recorded when the kiwi collects a coin.

<img alt="game-mode-1" src="../assets/2018-07-26-user-guide-scampy/game-mode.png"/>

### Simulation Mode

**Simulation Mode** allows you to generate data from a specified probability distribution (options include Exponential, Triangular, Symmetric triangular, Uniform, Constant).
You can specify a rate and the number of events to be recorded.

Press `Start` to start the animation, and watch the cars go past the person...

<img alt="sim-mode-1" src="../assets/2018-07-26-user-guide-scampy/sim-mode-01.png" />

The next few steps are essentially the same as those in the previous modes.

Measuring waiting times:

<img alt="sim-mode-2" src="../assets/2018-07-26-user-guide-scampy/sim-mode-02.png" />

Measuring counts:

<img alt="sim-mode-3" src="../assets/2018-07-26-user-guide-scampy/sim-mode-03.png"/>

The summary page has an additional button to show `Theoretical info` (to compare the actual simulation to the theoretical information we had at the beginning).

<img alt="sim-mode-4" src="../assets/2018-07-26-user-guide-scampy/sim-mode-04.png" />

## Summary

**scampy** was designed specifically to help students understand the maths behind the Poisson and Exponential distribution along with its applications to real data in a visual way.

A big thank you to the Department of Statistics at the University of Auckland.

## Questions?

If you find any glitches or would like to give feedback, please let me know! :)

**What's the maximum playback rate for videos?**
Currently for YouTube videos and uploaded videos, the maximum playback rate is generally 2.
