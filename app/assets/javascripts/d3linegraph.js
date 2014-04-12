var lineData = [ {"x":1, "y": 5}, {"x":20, "y": 20},
                {"x":40, "y": 10}, {"x":60, "y": 40},
                {"x":80, "y": 5}, {"x":600, "y": 600}];

var lineFunction = d3.svg.line()
                          .x(function(d) {
                            console.log(d.x + "x")
                            return d.x; })
                          .y(function(d) {
                            console.log(d.y + "y")
                            return d.y; })
                          .interpolate("linear");

$(document).ready(function() {
  var svgContainerDeux = d3.select("body").append("svg")
                    .attr("id", "linegraph")

  svgContainerDeux.append("path")
    .attr("d", lineFunction(lineData))
    .attr("stroke-width", 2)
    .attr("stroke", "blue")
    .attr("fill", "none");

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
