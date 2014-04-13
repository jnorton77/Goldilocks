var chartData = {
                  responseData: [],
                  calendarData: []
};

var responses = [
                  {"answer" : 1, "created_at" : "2014-03-30 06:17:25"},
                  {"answer" : 2, "created_at" : "2014-03-30 15:51:58"},
                  {"answer" : 3, "created_at" : "2014-03-30 16:54:18"},
                  {"answer" : 4, "created_at" : "2014-03-30 07:59:18"},
                  {"answer" : 5, "created_at" : "2014-03-30 07:07:31"},
                  {"answer" : 1, "created_at" : "2014-03-30 08:59:05"},
                  {"answer" : 2, "created_at" : "2014-03-30 12:44:28"},
                  {"answer" : 3, "created_at" : "2014-03-30 04:42:04"},
                  {"answer" : 4, "created_at" : "2014-03-30 05:25:39"},
                  {"answer" : 5, "created_at" : "2014-03-30 02:09:09"},
                  {"answer" : 1, "created_at" : "2014-03-30 23:28:33"},
                  {"answer" : 3, "created_at" : "2014-03-30 17:29:58"},
                  {"answer" : 2, "created_at" : "2014-03-30 04:42:04"},
                  {"answer" : 3, "created_at" : "2014-03-30 09:04:12"}
                ];

// pushes in times
for(var k in responses) {
                        chartData.responseData.push({
                                                    "x" : responses[k].created_at,
                                                    "y" : responses[k].answer
                                                    })
}

var calendarEvents = [
                      { "title": "EE", "beginTime": "2014-03-30 010:00:00", "duration":"1.5" },
                      { "title": "Coding", "beginTime": "2014-03-30 13:00:00", "duration": "4.0" },
                      { "title": "Lunch", "beginTime": "2014-03-30 11:30:00", "duration": "1.5" }
                    ];

var date = {
            "date" : "2014-03-30"
            };

for(var k in calendarEvents) {
  console.log(chartData.calendarData.push({
    "x" : calendarEvents[k].beginTime,
    "x2" : calendarEvents[k].endTime,
    "label" : calendarEvents[k].title
    })
  )
}

for(var k in calendarEvents) {
console.log(chartData.calendarData.push({
  "x1" : calendarEvents[k].beginTime,
  "x2" : calendarEvents[k].endTime,
  "label" : calendarEvents[k].title
    })
  )
}

var width = 1180
var height = 980

var visualizationSpace = d3.select("body").append("svg:svg")
                                          .attr("width", width)
                                          .attr("height", height);

var rect = visualizationSpace.selectAll("rect")
                              .data([1,4,3,2,5])
                              .enter()
                              .append("svg:rect");

var xAxisDay = d3.scale.ordinal()
                    .range([0, width])
                    .domain([1,5])
                    .ticks(5)
                    .rangePoints([0, width])
                    // .orient("bottom")

var yAxis = d3.scale.ordinal()
                    .domain(["Comfort", "Comfort Edge", "Learning", "Panic Edge", "Panic"])
                    .rangePoints([0, height])
                    // .orient("left")

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

svg.append("g")
    .attr("class", "y-axis")
    .attr("transform", "translate(" + padding + ",0)")
    .call(yAxis);

svg.append("g")
    .attr("class", "x-axis")
    .attr("transform", "translate(0," + (height - padding) + ")")
    .call(xAxisDay)
})