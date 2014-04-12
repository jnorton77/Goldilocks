Array.prototype.max = function() {
  var maximum = this[0];
  var length = this.length;
  for (var i = 1; i < length; i++) if (this[i] > maximum) maximum = this[i];
  return maximum;
}

Array.prototype.min = function() {
  var minimum = this[0];
  var len = this.length;
  for (var i = 1; i < length; i++) if (this[i] < minimum) minimum = this[i];
  return minimum;
}

var xScale = []
var yScale = []

var lineData = [ {"x":1, "y":5}, {"x":300, "y":190},
                {"x":530, "y":250}, {"x":800, "y":440},
                {"x":920, "y":50}, {"x":1100, "y":800}];

var jsonRectangles = [
                      { "x": 10, "y": 10, "height": 800, "width":200, "color" : "green" },
                      { "x": 160, "y": 40, "height": 800, "width":200, "color" : "purple" },
                      { "x": 70, "y": 70, "height": 800, "width":200, "color" : "red" }];

function extractX(element) { xScale.push(element.x) }
function extractY(element) { yScale.push(element.y) }

lineData.forEach(extractX);
lineData.forEach(extractY);

jsonRectangles.forEach(extractX);
jsonRectangles.forEach(extractY);

var max_x = xScale.max();
var min_x = xScale.min();
var width = max_x + 20
var max_y = yScale.max();
var min_y = yScale.min();
var height = max_y + 20
var padding = 10;

var x = d3.scale.linear()
                .range([0, width]);
var y = d3.scale.linear()
                .range([height, 0]);

var xAxis = d3.svg.axis()
                  .scale(x)
                  .orient("bottom")
                  .ticks(12);

var yAxis = d3.svg.axis()
                  .scale(y)
                  .orient("left")
                  .ticks(12);

$(document).ready(function() {

  var svg = d3.select("body").append("svg")
                              .attr("width", width)
                              .attr("height", height)
                              .attr("id", "barchart");

  var rectangles = svg.selectAll("rect")
                              .data(jsonRectangles)
                              .enter()
                              .append("rect");

  var rectAttributes = rectangles
                        .attr("x", function(d) { return d.x; })
                        .attr("y", function(d) { return d.y; })
                        .attr("height", function(d) { return d.height; })
                        .attr("width", function(d) { return d.width; })
                        .style("fill", function(d) { return d.color; })
                        .transition()
                        .duration(1250)
                        .style('opacity', .6);

  var lineFunction = d3.svg.line()
                          .x(function(d) {
                            console.log(d.x + "x")
                            return d.x; })
                          .y(function(d) {
                            console.log(d.y + "y")
                            return d.y; })
                          .interpolate("linear");

    svg.append("path")
        .attr("d", lineFunction(lineData))
        .attr("stroke-width", 2)
        .attr("stroke", "blue")
        .attr("fill", "none");

    console.log(yScale)
    console.log(yAxis)
    console.log(xScale)
    console.log(xAxis)

svg.append("g")
    .attr("class", "y-axis")
    .attr("transform", "translate(" + padding + ",0)")
    .call(yAxis);

svg.append("g")
    .attr("class", "x-axis")
    .attr("transform", "translate(0," + (height - padding) + ")")
    .call(xAxis);

  $.ajax({
    url: "/users/"+userId+"/results",
    type: "get"
  })
  .done(function(data) {
    // console.log(data)
    $.each(data, function(index, value) {
    console.log(value);
    });
  })
  .fail(function(data) {})
  .always(function(data) {})
});
