// for histograms
//multiple!

// remove tables for now...

d3.select('#viewTable')
  .classed('hidden', true);

var svg = document.getElementsByTagName('svg')[0],
    count = data.length,
    Grob = document.querySelectorAll('g[id^="inz-HISTBAR."]');
    //Grob = getGrob('hist')
    panel = document.getElementById(Grob);

var tooltip = d3.select('body').append('div')
              .attr('class', 'tooltip')
              .attr('id', 'tooltip')
              .style('width', '200')
              .style('height', '50');

var bars = d3.selectAll(Grob)
             .selectAll('polygon')
             .attr('class', 'histBar');

d3.selectAll('.histBar')
    .data(data)
    .attr('class', 'histBar')
    .on('mouseover', function(d){tooltip.style('visibility', 'visible')
                                              .style("left", d3.event.pageX - 40 + "px")
                                              .style("top", d3.event.pageY - 55 + "px")
                                              .html("Class range: <br> <span>" + d.lower + " - " + d.upper +
                                              " </span>" + "<br> N = <span>" +
                                              d.counts + ", " + d.pct + "% </span>");})
    .on('mouseout', function(){tooltip.style("visibility", "hidden");})
    .on('click', function(d, i) {

      var selected = this;
      var l = selected.getAttribute('fill');
      var lp = l.substring(l.lastIndexOf("("), l.lastIndexOf(")"));
      var col = "rgba" + lp + ", 0.25)";

      d3.selectAll('.histBar')
        .attr("class", function() {
          return (this === selected ? "histBar selected" : "histBar none");
        })

      // hide boxes
      d3.selectAll('.boxData')
        .classed('hidden', true);
      d3.select("#tt").style('visibility', 'hidden');
    });

/* -------------------------------------------------------------
                  Box plot properties and interactions:
---------------------------------------------------------------- */
//identify lines and box plot:

/*var row = 1;
var col = 2;
var lastLine = "inz-box-line.1.1.1.1";
var boxElements = document.getElementById('inz-box.1.1.1.1');
for (var i = 1; i <= row; i ++) {
  for (var j = 1; j <=col; j++) {
    var lastLine = "inz-box-line." + i + "." + j + ".1";
    var boxElements = document.getElementById("inz-box." + i +"." + j + ".1");
    boxMe(lastLine, boxElements, i, j)
  }
}*/


//Reset Button:
reset = function() {
    d3.selectAll('.histBar') //polygon
      .attr('class', 'histBar');

    d3.select('.totalRow')
      .classed('hidden', false);

    d3.select('#tt')
      .classed('hidden', true);

    d3.selectAll('tr')
      .classed('hidden rowSelect', false)
      .style('background-color', 'white');

    //remove box:
    d3.selectAll(".selection")
      .style("display", "none");

    //hide boxplot data:
    d3.selectAll('.boxData')
      .classed('hidden', true);

 };
