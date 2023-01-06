---
title: 'When iNZightPlots meets JS: A report trail'
date: 2018-02-14 16:15:08 +1300
---

This post combines 2 old brief reports on creating iNZight's interactive page feature.

The examples shown are early versions of these interactive pages. This post acts as a "trail" for how these pages have evolved.

A more detailed post will be coming soon!

_Last updated: Wednesday 18 February 2018_

**TLDR; LONG POST AHEAD (with images + interactive examples)**

---

## Part I : Creating interactive graphics for iNZightPlots

_Duration: December 2016 - February 2017_

### Summary:

A new feature was developed to export iNZight plots as dynamic web pages.

This process involves exporting the iNZight plot as an SVG, using R to bind the SVG, appropriate JavaScript files and HTML tables together to create an interactive plot on a web page that can be viewed in a modern web browser.

### How to use:

Simply draw your iNZight plot in R and store it, call the `exportHTML()` function to automatically generate a dynamic web page.

```
plotObj <- iNZightPlot(weekly_hrs, data = income)
exportHTML(plotObj, htmlfile = "trial.html")
```

### Features:

**Note:** It is best to view these on the latest versions of Google Chrome or Firefox. Some of these features may not be available on IE11, Safari or Edge. Future developments include creating more robust code to achieve browser compatibility.

All plots have a reset button to bring the plot back to its original state.

**Bar plots**

A table of counts and proportions is displayed.
When you click on a bar, it shows you information about that bar and where it is in the table.

<img width = "100%" src = "/assets/2018-02-14-inzplot-meet-js-report/img/1var-barplot.png" alt="1var-barplot">


For stacked and two-way bar plots, there are buttons where you can change the numbers to counts or proportions in the table.

<img width = "100%" src = "/assets/2018-02-14-inzplot-meet-js-report/img/stacked-barplot.png" alt="stacked-barplot">

Additionally, for one way and two way bar plots, the user can also look at a single group by clicking on the group located in the legend.

<img width = "100%" src = "/assets/2018-02-14-inzplot-meet-js-report/img/two-way-barplot.png" alt="two-way-barplot">

**Scatter plots and dot plots**

<img width = "100%" src = "/assets/2018-02-14-inzplot-meet-js-report/img/boxplot.png" alt="boxplot">

For dot plots and scatter plots, the user can hover the cursor over a point and its information will appear. Under `Variables to display`, the user can also isolate certain variables that they wish to see.
To view information related to the box plot, simply click on it.


<img width = "100%" src = "/assets/2018-02-14-inzplot-meet-js-report/img/scatterplot-2var.png" alt="scatterplot-2var">

Brushing is also available on these plots.
These features can also be applied to scatterplots generated with iNZightMaps.

<img width = "50%" src = "/assets/2018-02-14-inzplot-meet-js-report/img/scatterplot-inzightmaps.png" alt="scatterplot-inzightmaps">

**Histograms**

The user can hover over a bar and see its frequency and proportion for that certain class
range.

<img width = "50%" src = "/assets/2018-02-14-inzplot-meet-js-report/img/histogram.png" alt="histogram">

---

## Part II: Expanding further to iNZightMaps

_Duration: December 2017 - February 2018_

### Summary:

This section discusses the extension of iNZight’s interactive features.
These interactive pages are designed to allow users to explore data without the need for being connected back to the iNZight program. All it requires is an updated web browser (preferably Chrome or Firefox). With the new iNZightMaps module that allows for choropleth maps and maps with spark lines, we have extended the idea towards creating interactive maps.

### Improvements:

A few improvements have been made, including:

- **Better brushing features**

Brushes can now be selected and dragged around.

<img width = "50%" src="/assets/2018-02-14-inzplot-meet-js-report/img/brush.png" alt="brush">

- **Bidirectional linking between plot and table**

This is available for dot plots, scatter plots and histograms.
Simply click on the rows of the table to link to specific elements on the plot.

<img width = "100%" src = "/assets/2018-02-14-inzplot-meet-js-report/img/bi-link.png" alt="bidirectional-link">

- **Scatter plot inference**

When plots with trend lines are exported, some basic information about these trend lines are provided (the equation and the R-squared value). Users can hover over certain lines to get this information as a tooltip. Users can also click on the legend to isolate that specific trend line and capture its information.

<img width = "100%" src = "/assets/2018-02-14-inzplot-meet-js-report/img/trendline-inference.png" alt="trendline inference">

- **Experimenting with interactive multi-panel plots**

It is difficult to create interactive multi-panel plots because iNZightPlots does not have a consistent naming scheme. To extend the capabilities of interactivity and for consistent structure, a naming scheme has been added. Every element is labelled and traceable from R to its SVG state.

To show this, a simple iNZight plot has been generated with an older version and a newer version of the iNZightPlots package.

   <img width = "50%" src = "/assets/2018-02-14-inzplot-meet-js-report/img/proof.png" alt="older version iNZight plot generated">

```
GRID.text.11
GRID.text.13
GRID.text.12
GRID.rect.15
GRID.polyline.16
GRID.polyline.17
SCATTERPOINTS
GRID.rect.18
GRID.xaxis.19
GRID.yaxis.20
GRID.yaxis.21
GRID.xaxis.22
```

This lists all the elements with the older version of the package.

```
inz-main-title
inz-ylab
inz-xlab
inz-plot-bg.1.1
inz-x-grid.1.1
inz-y-grid.1.1
inz-SCATTERPOINTS.1.1
inz-rect-tp.1.1
inz-xaxis-bottom.1.1
inz-yaxis-left.1.1
inz-yaxis-right.1.1
inz-xaxis-top.1.1
```

The same iNZight plot with the newer version of the package.

An example is shown above as a proof of concept where a set of a multi-panel histograms are displayed and have basic tooltips. However, this requires more thought on how interactivity could help exploratory analysis of these panel plots.

### Creating interactive maps:

The new iNZightMaps module (created by Daniel Barnett) uses ggplot2 to create maps. The types of maps that can be produced include the following: a regional map, a centroid map where we can scale points by a certain variable, and maps with spark lines.

These interactive maps come with the following features:

- **Basic tooltips**

<img width = "50%" src = "/assets/2018-02-14-inzplot-meet-js-report/img/basic-tooltips.png" alt="basic tooltips on plot">

Simply hover over regions on the map. Click on the region and the table will show more data about that specific region.

- **Accumulation of regions via Shift+Click**

<img width = "100%" src = "/assets/2018-02-14-inzplot-meet-js-report/img/bi-link-1.png" alt="accumulation of regions via shift+click">

You can select more than 1 region. To do this, simply hold the `Shift` key and click at the same time. The table will show all the regions selected.

- **Bidirectional linking between plot and table**

<img width = "100%" src = "/assets/2018-02-14-inzplot-meet-js-report/img/bi-link-2.png" alt="bi-directional linking between plot and table">

The user can click on specific rows in the table which will then
highlight regions related to these rows. To deselect specific
rows, you can simply click on the row again.

- **Basic panning and zooming on the map (ignoring projection lines)**

 <img width = "100%" src = "/assets/2018-02-14-inzplot-meet-js-report/img/zoom.png" alt="zooming into a plot">

Simply scroll on the map to pan and zoom in (right shows a map that has been zoomed in).

- **Changing the fill-by variable for regional maps (continuous variables only)**

<img width = "100%" src = "/assets/2018-02-14-inzplot-meet-js-report/img/switch-var.png" alt="fill-by regional maps">

The dropdown menu allows for fill-by variables to be coloured onto the map. Originally the map was coloured by variable heart, before being switched to maori. This is currently only available for continuous variables.

- **Changing the size-by variable for centroid maps (continuous variables only)**

<img width  = "100%" src = "/assets/2018-02-14-inzplot-meet-js-report/img/switch-pt.png" alt="centroid maps size-by variable">

The dropdown menu allows users to select a different size-by variable. The map is originally sized by a variable called maori (left). It is changed to another variable called heart (right).

- **An accompanying line chart that helps show the details of certain spark lines (maps with spark lines only)**

<img width  = "100%" src = "/assets/2018-02-14-inzplot-meet-js-report/img/sparkline-3.png" alt="sparklines">

Simply click on a region on the map and a suitable line chart will appear.

<img width  = "100%" src = "/assets/2018-02-14-inzplot-meet-js-report/img/sparkline-2.png" alt="line chart accomodating sparkline">

The user can also accumulate regions. In the example, the Southern, Hawke’s Bay and West Coast regions of New Zealand have been selected and shown.

<img width  = "100%" src = "/assets/2018-02-14-inzplot-meet-js-report/img/sparkline-1.png" alt="accumulate regions">

Different continuous variables can also be shown across time by selecting from the dropdown menu. The above shows how the number of _maori.deaths_ changes across time for the Southern, Hawke’s Bay and West Coast regions of New Zealand.

- **A time slider for regional and centroid maps with multiple observations**

If the data has multiple observations across time, a time slider will appear for users to select which specific year to view and to see how specific regions evolve across a certain time period.

<img width = "100%" src = "/assets/2018-02-14-inzplot-meet-js-report/img/slider.png" alt="change over time slider">

The example above shows how the map of Africa evolves across time by life expectancy. From 1952 to 2007 (pictures show snapshots of 1952, 1962, 1982 and 2007 from left to right), we see that life expectancy has generally increased.

---

### Conclusion

We have successfully created this feature for maps generated by the newer version of iNZightMaps and for a certain set of plots from the iNZightPlots package.

### Acknowledgements

- The iNZight Development Team
- R packages: gridSVG, jsonlite, knitr, iNZightPlots, iNZightMaps
- JavaScript libraries: D3, Bootstrap, DataTables
