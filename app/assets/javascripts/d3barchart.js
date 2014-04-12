<script src="d3helper.js"></script>

function responseData() {
  this.times = []
  this.answers = []
}

var responses = [{"answer": "comfort", "created_at":"2014-03-30 06:17:25"},
          {"answer": "panic", "created_at":"2014-03-30 15:51:58"},
          {"answer": "panic edge", "created_at":"2014-03-30 16:54:18"},
          {"answer": "comfort edge", "created_at":"2014-03-30 07:59:18"},
          {"answer": "comfort", "created_at":"2014-03-30 07:07:31"},
          {"answer": "learning", "created_at":"2014-03-30 08:59:05"},
          {"answer": "comfort", "created_at":"2014-03-30 12:44:28"},
          {"answer": "panic edge", "created_at":"2014-03-30 04:42:04"},
          {"answer": "learning", "created_at":"2014-03-30 05:25:39"},
          {"answer": "comfort", "created_at":"2014-03-30 02:09:09"},
          {"answer": "panic edge", "created_at":"2014-03-30 23:28:33"},
          {"answer": "comfort", "created_at":"2014-03-30 17:29:58"},
          {"answer": "learning", "created_at":"2014-03-30 04:42:04"},
          {"answer": "comfort", "created_at":"2014-03-30 09:04:12"},
];


function extractAttribute(element, index, destinationArray, attributeName) { destinationArray.push(element.attributeName) }

// responses.forEach(extractAttribute(element, responseData().times, created_at)
// responses.forEach(extractAttribute(element, responseData().answers, answer);


var calendarEvents = [
                      { "title": "EE", "begin": "2014-03-30 010:00:00", "end":"2014-03-30 11:30:00" },
                      { "title": "Coding", "begin": "2014-03-30 13:00:00", "end": "2014-03-30 17:00:00" },
                      { "title": "Lunch", "begin": "2014-03-30 11:30:00", "end": "2014-03-30 13:00:00" }];

// This is for the actual responses (the times of the first and last response), but we're probably not going to use this ...
// var max_x = responseData().times.max();
// var min_x = responseData().times.min();
var max_x = 1000
var min_x = 0
var width = 1180


// var max_y = yScale.max();
// var min_y = yScale.min();
var height = 980
var padding = 10;

var x = d3.scale.linear()
                .domain([min_x, max_x]);
// var y = d3.scale.linear()
//                 .range([0, max_y]);

var xAxisLabel = d3.svg.axis()
                  .scale(x)
                  .orient("bottom")
                  .ticks(6)
                  .tickFormat(d3.time.format('%a %d'));

// var yAxisLabel = d3.svg.axis()
//                   .scale(y)
//                   .orient("left")
//                   .ticks(6);

$(document).ready(function() {

  var svg = d3.select("body").append("svg")
                              .attr("width", width)
                              .attr("height", height)
                              .attr("id", "barchart");

  var rectangles = svg.selectAll("rect")
                              .data(calendarEvents)
                              .enter()
                              .append("rect");

  var rectAttributes = rectangles
                        .attr("x", function(calendarEvents) { return 10; })
                        .attr("y", function(d) { return 40; })
                        .attr("height", function(d) { return 80; })
                        .attr("width", function(d) { return 80; })
                        .style("fill", function(d) { return "blue"; })
                        .transition()
                        .duration(1250)
                        .style('opacity', .6);

  var lineFunction = d3.svg.line()
                          .x(function(d) {
                            console.log(d.created_at + "x")
                            return d.created_at; })
                          .y(function(d) {
                            console.log(d.answer + "y")
                            return d.answer; })
                          .interpolate("linear");

    svg.append("path")
        .attr("d", lineFunction(responseData))
        .attr("stroke-width", 2)
        .attr("stroke", "blue")
        .attr("fill", "none");

// svg.append("g")
//     .attr("class", "y-axis")
//     .attr("transform", "translate(" + padding + ",0)")
//     .call(yAxis);

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
