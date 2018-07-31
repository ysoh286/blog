// for histograms
//initialize DataTable:
var table = $('#table').DataTable({
    "colReorder": true,
    "columnDefs": [
      { //hide rowID column
        "targets": [0],
        "visible": false
      }
    ]
  });

//drive the viewTable button:
showTable = function() {
  var tableWrapper = $('#table_wrapper');
  tableWrapper.toggleClass('hidden');
};

// check levels:
if (chart.levNames) {
  var levelNo = chart.levNames.length;
} else {
  var levelNo = 1;
}

// BOX PLOT
//identify lines and box plot:
boxMe(levelNo);

var svg = document.getElementsByTagName('svg')[0],
    count = data.length,
    Grob = getGrob('hist'),
    panel = document.getElementById(Grob);

//TOOLTIP
var tooltip = d3.select('body').append('div')
              .attr('class', 'tooltip')
              .attr('id', 'tooltip')
              .style('width', '200')
              .style('height', '50');

d3.select(panel).selectAll('polygon')
  .attr('class', 'histBar');

d3.selectAll('.histBar')
    .data(data)
    .on('mouseover', function(d){tooltip.style('visibility', 'visible')
                                              .style("left", d3.event.pageX - 40 + "px")
                                              .style("top", d3.event.pageY - 55 + "px")
                                              .html("Class range: <br> <span>" + d.lower + " - " + d.upper +
                                              " </span>" + "<br> N = <span>" +
                                              d.counts + ", " + d.pct + "% </span>");})
    .on('mouseout', function(){tooltip.style("visibility", "hidden");})
    .on('click', function(d, i) {
      var selected = this;
      d3.select(panel).selectAll('polygon')
        .attr("class", function() {
          return (this === selected ? "histBar selected" : "histBar none");
        })

        // because dataTable searches using columns but not rows
        // add an additional column for row num using regex:
        var ind = "^" + (i+1) + "$";
        table.columns(0).search(ind, true).draw();

      // hide box
      d3.selectAll('.boxData')
        .classed('hidden', true);

      d3.select(".brush-info")
        .classed('hidden', true);

      //remove box if present
      d3.selectAll(".selection")
        .style("display", "none");
    });

// TABLE TO PLOT:
$('#table tbody').on('click', 'tr', function() {
  $(this).toggleClass('active');
      var ind = table.rows('.active')[0];
      d3.select(panel).selectAll('.histBar')
        .attr("class", function(d, i) {
            return (ind.includes(i) ? "histBar selected" : "histBar none");
    })
})

 // create another tooltip for selection box:
 var tt = d3.select('#control').append('p')
            .attr('class', 'brush-info');

//BRUSH:
 var brush = d3.brushX()
              .on("start", brushstart)
              .on("brush", brushmove)
              .on("end", brushend);

 var pp = panel.parentNode.parentNode;
 d3.select(pp)
  .insert("g", "g:first-child")
  .attr("class", "brush")
  .call(brush);

 // make handles invisible:
 d3.selectAll('.handle')
  .style('opacity', 0);
  d3.selectAll('.overlay')
  .style('stroke', 'none');

  function brushmove() {

    var s = d3.event.selection;
    var x1 = s[0];
    var x2 = s[1];

    // information to extract:
    var n = chart.n;
    var tab = chart.data;
    var groupN = [];
    var intRange = [];
    var ind = [];

    for (i = 1; i <= count; i++) {
    var bar = document.getElementById(Grob + '.' + i);

    //obtain end points of the bar
    var coords = bar.getAttribute('points').split(" ");
    var bottomEdge = coords[0].split(',');
    var topEdge =  coords[3].split(',');
    var bx = bottomEdge[0];
    var tx = topEdge[0];

      if (bar.getAttribute('visibility') == 'hidden') {
        // those that are hidden, remain hidden
        bar.classList.add('hidden');
      } else {
        //points that lie within the  boundary box drawn:
        if(((x1 <= bx && bx <= x2) && (x1 <= tx && tx <= x2))) {
          bar.setAttribute('class', ' histBar selected');
          // store frequency from selected
          groupN.push(tab[i - 1].counts);
          intRange.push(tab[i - 1].lower, tab[i - 1].upper);
          ind.push("^" + i + "$");
        } else {
          bar.setAttribute('class', 'histBar none');
       }
     }
   }
   //summation of array:
   var sum = groupN.reduce(function(a, b) { return a + b; }, 0);
   // report a proportion + interval number:
   var nProp = (sum/n*100).toFixed(2) + "%";
   var intervalNo = document.getElementsByClassName('selected').length;

   // filter table
   table.columns(0).search(ind.join("|"), true).draw();

   // update tooltip
   d3.select(".brush-info")
     .classed('hidden', false)
     .html("Interval Range: <span>" + intRange[0] + " - " + intRange[intRange.length-1] +
                         "</span> <br> Frequency: <span>" + sum +  "," + nProp + "</span> <br> No. of intervals: <span>" +
                         intervalNo + "</span>");
};

//Reset Button:
reset = function() {
    d3.select(panel).selectAll('.histBar')
      .attr('class', 'histBar');

    // restore table to original state
    table.search('').columns().search('').draw();
    table.rows().nodes().to$().removeClass('active');

    d3.select('.brush-info')
      .classed('hidden', true);

    d3.selectAll('.label')
      .classed('hidden', true);

    //remove box
    d3.selectAll(".selection")
      .style("display", "none");

    //hide boxplot data
    d3.selectAll('.boxData')
      .classed('hidden', true);
 };
