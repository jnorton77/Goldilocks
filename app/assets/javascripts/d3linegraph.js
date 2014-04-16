// Here's a basic time scale
var margin = {top: 100, right: 100, bottom: 100, left: 100},
    width = 1360 - margin.left - margin.right,
    height = 900 - margin.top - margin.bottom;

// need to declare params for .day(start, stop)
var x = d3.time.scale()
      .domain([new Date, new Date])
      .nice(d3.time.day())
      .range([0, width]);

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.append("g")
    .attr("class", "x axis")
    .call(d3.svg.axis().scale(x).orient("bottom"));