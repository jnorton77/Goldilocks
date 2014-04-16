var BarChart = function BarChart() {
  var barChart = new BarChart();
  barChart.render(data);
}

$(document).ready(function(){
  $("#retrieve_user_line").on("click", function(){
    $.ajax({
      url: "/users/"+userId+"/results",
      type: "get"
    })
    .done(function(data) {
      var parsedResults = parseResponses(data);
      var sortedResults = _.sortBy(parsedResults, function(object){return object.x})
      console.log(sortedResults);
      renderLineChart(sortedResults);
    })
    .fail(function(data) {
    })
    .always(function(data) {
    });
  });

});


BarChart.prototype.render = function (data) {

  var rectanglesUpdate = svg.selectAll("rect")
                            .data(sortedResults);
                            .enter()
                            .append("svg:rect");

  rectanglesEnter.append("rect");

  rectanglesUpdate
    .attr("x", function(d) { return d.x1; })
    .attr("y", function(d) { return 40; })
    .attr("height", function(d) { return svgHeight; })
    .attr("width", function(d) { return 80; })
    .style("fill", function(d) { return "blue"; })
    .transition()
    .duration(1250)
    .style('opacity', .3);
}
