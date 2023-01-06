/*-------------------------------------------------------------------
JS code for one way stacked bar plots:
 Code is split in 3 sections: table properties (from line 27),
                              bar and label properties (from line 211),
                              and interaction code (from line 368).
 -------------------------------------------------------------------*/

//Parsing JSON data:
var prop = JSON.parse(prop);
var counts = JSON.parse(counts);
var colorCounts = JSON.parse(colorMatch);
var order = JSON.parse(order);

/*------------------------------------------------------------------
                  Table properties:
Code to label table cells (with classes or ids), rows,
columns. Additional headings, conversion to counts and
percentage buttons are all coded and dynamically inserted
in HTML via JS.

Note: this is slightly different to the 2 way table of count due
to the stacking nature and different information being displayed.
In 2 way table of count: rows add to 100%, while here columns add
to 100%.
-------------------------------------------------------------------*/

var table = document.getElementById('table');
table.style.display = 'none';

//no. of columns in table
var tr = document.getElementsByTagName('tr');
ncol = tr[0].childElementCount;

//no. of cells in table
var td = document.getElementsByTagName('td');
cellNo = td.length;

//no. of rows in table
nrow = document.getElementById('table').rows.length;
for (i = 1; i < nrow; i++) {
	if (i == nrow - 2) {
		// last two rows are the rows containing totals and counts
		tr[i].setAttribute('class', 'total');
	} else if (i == nrow - 1) {
		tr[i].setAttribute('class', 'countRow');
	} else {
		tr[i].setAttribute('class', 'row' + i);
	}
}

// Labelling headers:
for (i = 1; i < ncol; i++) {
	tableHeader = document.getElementsByTagName('th');
	tableHeader[i].setAttribute('id', tableHeader[i].innerHTML);
	tableHeader[i].style.textAlign = 'center';
}

//finding no. of rows, and labelling
for (j = 1; j < ncol; j++) {
	for (i = 1; i <= cellNo; i++) {
		td[i - 1].setAttribute('align', 'center');
		if (i % ncol == 1) {
			td[i - 1].setAttribute('id', 'yGroup' + ((i - 1) / ncol + 1));
			if ((i - 1) / ncol + 1 > nrow - 3) {
				td[i - 1].style.fontWeight = 'bold';
			}
		} else if (document.getElementsByClassName('countRow')[0].contains(td[i - 1])) {
			td[i - 1].setAttribute('id', 'counts' + ((i - 1) % ncol));
			td[i - 1].innerHTML = Number(td[i - 1].innerHTML);
		} else if (document.getElementsByClassName('total')[0].contains(td[i - 1])) {
			td[i - 1].setAttribute('id', 'total' + ((i - 1) % ncol));
		} else {
			td[i - 1].setAttribute('id', 'td' + i);
			td[i - 1].setAttribute('class', 'td' + order[i - Math.ceil(i / ncol) - 1]);
		}
	}
}

for (j = 1; j < ncol; j++) {
	var total = document.getElementById('total' + j);
	total.innerHTML = Number(total.innerHTML) * 100 + '%';
}

//Finding the sum of countsTab:
var countsTab = new Array();
for (j = 1; j < ncol; j++) {
	var totalCounts = document.getElementById('counts' + j);
	countsTab[j - 1] = Number(totalCounts.innerHTML);
}

var sum = countsTab.reduce(function (a, b) {
	return a + b;
}, 0);

//Inserting table headers:
var xrow = table.insertRow(0);
var xhead = xrow.insertCell(0);
xhead.innerHTML = document.getElementsByTagName('tspan')[2].innerHTML;
xhead.style.fontStyle = 'italic';
xhead.style.textDecoration = 'underline';
xhead.colSpan = ncol;
xhead.style.textAlign = 'center';

//yHeader:
var yHeading = document.getElementsByTagName('th')[0];
yHeading.innerHTML = document.getElementsByTagName('tspan')[3].innerHTML;
yHeading.setAttribute('style', 'font-style: italic');
yHeading.style.fontWeight = 'normal';
yHeading.style.textDecoration = 'underline';

//Creating buttons and setting attributes:
button = function (name, color) {
	var button = document.createElement('button');
	button.setAttribute('type', 'button');
	button.setAttribute('class', 'btn btn-info');
	button.innerHTML = 'Change to ' + name;
	button.setAttribute('onclick', 'change' + name + '()');
	button.style.backgroundColor = color;
	button.style.marginLeft = '10px';
	button.style.display = 'none';
	button.setAttribute('id', 'Button' + name);
	document.getElementById('control').appendChild(button);
};

button('Percentage', 'blue');
button('Count', 'purple');

//Conversion to percentages:
changePercentage = function () {
	for (i = 1; i <= cellNo; i++) {
		var td = document.getElementById('td' + i);
		var total = document.getElementById('total' + ((i - 1) % ncol)); //will need to be modified once the rev. issue is solved.
		var countsCol = document.getElementById('counts' + ((i - 1) % ncol));
		if (td != undefined) {
			if (td.innerHTML.indexOf('.') >= 0 && td.innerHTML.indexOf('%') == -1) {
				// change proportion to percentages
				td.innerHTML = (td.innerHTML * 100).toFixed(2) + '%';
				total.innerHTML = '100%';
				countsCol.innerHTML = countsCol.innerHTML;
			} else if (td.innerHTML.indexOf('%') >= 0) {
				// remain as percentages
				td.innerHTML = td.innerHTML;
				total.innerHTML = total.innerHTML;
				countsCol.innerHTML = countsCol.innerHTML;
			} else {
				// change counts to percentages
				td.innerHTML =
					((Number(td.innerHTML) / countsTab[((i - 1) % ncol) - 1]) * 100).toFixed(2) + '%';
				total.innerHTML = '100%';
				countsCol.innerHTML = countsTab[((i - 1) % ncol) - 1];
			}
			document.getElementById('yGroup' + (nrow - 1)).innerHTML = 'Col N'; // change from 'Total %' to 'Col N'
		}
	}
};

//Conversion to counts:
changeCount = function () {
	for (i = 1; i <= cellNo; i++) {
		var td = document.getElementById('td' + i);
		var total = document.getElementById('total' + ((i - 1) % ncol)); // by columns
		var countsCol = document.getElementById('counts' + ((i - 1) % ncol));
		if (td != undefined && total != undefined) {
			if (td.innerHTML.indexOf('%') >= 0) {
				// convert percentage to counts
				td.innerHTML = Math.round(
					(Number(td.innerHTML.substring(0, td.innerHTML.lastIndexOf('%'))) / 100) *
						countsTab[((i - 1) % ncol) - 1]
				);
				countsCol.innerHTML = ((countsTab[((i - 1) % ncol) - 1] / sum) * 100).toFixed(2) + '%';
				total.innerHTML = Math.round(countsTab[((i - 1) % ncol) - 1]);
			} else if (td.innerHTML.indexOf('.') >= 0 && td.innerHTML.indexOf('%') >= -1) {
				//converts proportions to counts
				td.innerHTML = Math.round(Number(td.innerHTML) * countsTab[((i - 1) % ncol) - 1]);
				countsCol.innerHTML = ((countsTab[((i - 1) % ncol) - 1] / sum) * 100).toFixed(2) + '%';
				total.innerHTML = Math.round(countsTab[((i - 1) % ncol) - 1]);
			} else {
				// remain as counts (if already converted to counts)
				td.innerHTML = td.innerHTML;
				total.innerHTML = total.innerHTML;
			}
		}
	}
	document.getElementById('yGroup' + (nrow - 1)).innerHTML = 'Total %'; // change from 'Col N' to 'total %'
};

//drive the viewTable button:
var viewTable = document.getElementById('viewTable');
t = true;
showTable = function () {
	if (t) {
		viewTable.innerHTML = 'Hide Table';
		table.style.display = 'table';
		if (document.getElementById('ButtonPercentage') != (undefined || null)) {
			ButtonPercentage.style.display = 'inline';
			ButtonCount.style.display = 'inline';
		}
		t = false;
	} else {
		viewTable.innerHTML = 'View Table';
		table.style.display = 'none';
		if (document.getElementById('ButtonPercentage') != (undefined || null)) {
			ButtonPercentage.style.display = 'none';
			ButtonCount.style.display = 'none';
		}
		t = true;
	}
};

/*------------------------------------------------------------------
                  Bar plot properties:
Code to identify bars, show and hide lines and appropriate bars.
Addition of appropriate labels to each bar.
-------------------------------------------------------------------*/

document.body.style.padding = '20px';
var svg = document.getElementsByTagName('svg')[0];
svg.setAttribute('width', '100%');
svg.setAttribute('height', '100%');

//test rectangle out to show labels:
var rect = document.getElementsByTagName('rect')[1];
rect.setAttribute('width', rect.getAttribute('width') * 1.5);
rect.setAttribute('height', rect.getAttribute('height') * 1.5);
rect.setAttribute('x', rect.getAttribute('x') - 20);
rect.setAttribute('y', rect.getAttribute('y') - 20);

var count = counts.length * colorCounts.length + 1; //total no. of different combinations + 1
var groups = counts.length; // no. of groups (corresponds to one of the variables)

//Identifying bars
var p = document.getElementsByTagName('polygon');
var id = p[0].getAttribute('id');
var Grob = id.substring(0, id.lastIndexOf('.'));
var panel = document.getElementById(Grob);

for (i = 1; i < p.length; i++) {
	if (p[i].id.indexOf(Grob) >= 0) {
		p[i].setAttribute('visibility', 'visible');
	} else {
		p[i].setAttribute('visibility', 'hidden');
	}
}

//getting rid of polylines:
var polyLines = document.getElementsByTagName('polyline');

for (i = 1; i < polyLines.length; i++) {
	if (polyLines[i].id.indexOf('GRID') >= 0) {
		polyLines[i].setAttribute('class', 'line');
	}
}

var lines = document.getElementsByClassName('line');
var lastId = lines[lines.length - 1].id;
var lastLine = lastId.substring(0, lastId.lastIndexOf('.'));

for (j = 1; j < lines.length; j++) {
	if (lines[j].id.indexOf(lastLine) >= 0) {
		lines[j].setAttribute('visibility', 'hidden');
	} else {
	}
}

//creating group labels:
gLabel = function (Grob, i) {
	var panel = document.getElementById(Grob);
	var gEl = document.createElementNS('http://www.w3.org/2000/svg', 'g');
	gEl.setAttributeNS(null, 'id', 'gLabel' + i);
	gEl.setAttributeNS(null, 'visibility', 'hidden');
	panel.appendChild(gEl);
};

for (i = 1; i < count; i++) {
	gLabel(Grob, i);
}

//function to create rectangles for labels:
gRect = function (i) {
	var gRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
	gRect.setAttributeNS(null, 'visibility', 'inherit');
	gRect.setAttributeNS(null, 'id', 'gRect' + i);
	gRect.setAttributeNS(null, 'fill', 'white');
	gRect.setAttributeNS(null, 'fill-opacity', '0.8');
	gRect.setAttributeNS(null, 'rx', '5');
	gRect.setAttributeNS(null, 'ry', '5');
	gRect.setAttributeNS(null, 'stroke', 'lightgray');
	gLabel = document.getElementById('gLabel' + i);
	gLabel.appendChild(gRect);
};

for (i = 1; i < count; i++) {
	gRect(i);
}

//creating labels:
label = function (id, textinput, i, tf) {
	//attributes for the text SVG element
	var label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
	label.setAttributeNS(null, 'x', '0');
	label.setAttributeNS(null, 'y', '0');
	label.setAttributeNS(null, 'font-size', '12');
	label.setAttributeNS(null, 'fill', 'black');
	label.setAttributeNS(null, 'stroke', 'none');
	label.setAttributeNS(null, 'fill-opacity', '1');
	label.setAttributeNS(
		null,
		'transform',
		'translate(' + (x + sx) / 2 + ', ' + (y - tf) + ') scale(1, -1)'
	);
	label.setAttributeNS(null, 'text-anchor', 'middle');
	label.setAttributeNS(null, 'visibility', 'inherit');
	label.setAttributeNS(null, 'id', id + i);

	// Creating the text label element:
	var text = textinput;
	var textNode = document.createTextNode(text);

	label.appendChild(textNode);
	gLabel = document.getElementById('gLabel' + i);
	gLabel.appendChild(label);
};

//labels generated using function label() + additional information for co-ordinates
for (j = 1; j <= groups; j++) {
	for (i = 1; i < count; i++) {
		var bar = document.getElementById(Grob + '.' + i);
		bar.setAttribute('class', counts[j - 1].Var1 + i);
		var coords = bar.getAttribute('points');
		var small = coords.split(' ')[1];
		var sx = Number(small.split(',')[0]);
		var coordsxy = coords.split(' ')[2];
		var x = Number(coordsxy.split(',')[0]); //co-ordinates based upon SVG elements.
		var y = Number(coordsxy.split(',')[1]);
		if (i % groups == j) {
			var text =
				counts[j - 1].Var1 + '\n' + colorCounts[Math.floor((i + groups - 1) / groups - 1)]._row;
			label('label', text, i, 30);
			var text =
				'N = ' +
				Math.round(
					eval("colorCounts[Math.floor((i+groups-1)/groups-1)]['" + counts[j - 1].Var1 + "']") *
						counts[j - 1].Freq
				) +
				', ' +
				(
					eval("colorCounts[Math.floor((i+groups-1)/groups-1)]['" + counts[j - 1].Var1 + "']") * 100
				).toFixed(2) +
				'%';
			label('countLabel', text, i, 45);
		}
		if (i % groups == 0 && j == groups) {
			var text =
				counts[groups - 1].Var1 +
				'\n' +
				colorCounts[Math.floor((i + groups - 1) / groups - 1)]._row;
			label('label', text, i, 30);
			var text =
				'N = ' +
				Math.round(
					eval(
						"colorCounts[Math.floor((i+groups-1)/groups-1)]['" + counts[groups - 1].Var1 + "']"
					) * counts[groups - 1].Freq
				) +
				', ' +
				(
					eval(
						"colorCounts[Math.floor((i+groups-1)/groups-1)]['" +
							counts[counts.length - 1].Var1 +
							"']"
					) * 100
				).toFixed(2) +
				'%';
			label('countLabel', text, i, 45);
			bar.setAttribute('class', counts[counts.length - 1].Var1 + i);
		}
	}
}

//Attach rectangles to lables + setting styles:
for (i = 1; i < count; i++) {
	// Attach and draw rectangles to labels according to the size of the gLabel (with all labels attached)
	var gLabel = document.getElementById('gLabel' + i);
	rectParam = gLabel.getBBox();
	var gRect = document.getElementById('gRect' + i);
	gRect.setAttribute('x', rectParam.x - 10);
	gRect.setAttribute('y', rectParam.y - 10);
	gRect.setAttribute('width', rectParam.width + 20);
	gRect.setAttribute('height', rectParam.height + 20);

	// making labels bold:
	var label = document.getElementById('label' + i);
	label.style.fontWeight = 'bold';
}

/*------------------------------------------------------------------
                  Interaction and event handlers:
Code for mouse events - hovers, clicks on each bar to show labels, and
highlights in table.
Includes function for reset button which attempts to return the plot to
its original state.
-------------------------------------------------------------------*/
// INTERACTION CODE: Hovers, Clicks
//Hovers on bars and labels:
for (i = 1; i < count; i++) {
	bar = document.getElementById(Grob + '.' + i);
	bar.setAttribute('stroke', 'none');
	bar.setAttribute('onmouseover', 'light(' + i + ')');
	bar.setAttribute('onmouseout', 'normal(' + i + ')');
	bar.setAttribute('onclick', 'fade(' + i + ')');
}

light = function (i) {
	bar = document.getElementById(Grob + '.' + i);
	bar.setAttribute('style', 'fill-opacity: 0.5');
};

normal = function (i) {
	bar = document.getElementById(Grob + '.' + i);
	bar.setAttribute('style', 'fill-opacity: 1');
};

//table interaction:
fade = function (i) {
	for (j = 1; j < count; j++) {
		//individuals

		var gLabel = document.getElementById('gLabel' + j);
		var data = table.getElementsByClassName('td' + j)[0];

		if (i == j) {
			gLabel.setAttribute('visibility', 'visible');

			// Relation to table:
			data.setAttribute('style', 'font-weight:bold');
			var l = bar.getAttribute('fill');
			lp = l.substring(4, l.length - 1);
			data.style.backgroundColor = 'rgba(' + lp + ',0.5)';
			data.style.opacity = '1';
		} else {
			gLabel.setAttribute('visibility', 'hidden');

			//Relation to table
			data.setAttribute('style', 'font-weight:normal');
			data.style.backgroundColor = 'white';
		}
	}
};

//Return  - reset button:
reset = function () {
	for (i = 1; i < count; i++) {
		var bar = document.getElementById(Grob + '.' + i);
		bar.setAttribute('visibility', 'visible');
		bar.setAttribute('opacity', '1');
		var label = document.getElementById('label' + i);
		label.setAttribute('visibility', 'hidden');
		var countLabel = document.getElementById('countLabel' + i);
		countLabel.setAttribute('visibility', 'hidden');
		data = table.getElementsByClassName('td' + i)[0];
		data.style.fontWeight = 'normal';
		data.style.backgroundColor = 'white';
		data.style.opacity = '1';
	}
	table.style.display = 'none';
	viewTable.innerHTML = 'View Table';
	t = true;
};
