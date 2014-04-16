var BarChart = function BarChart() {
  var barChart = new BarChart();
  barChart.render(data);
}

BarChart.prototype.render = function(parsedResults){
  var x_domain = d3.extent(parsedResults, function (d) { return d.x })
  var y_domain = d3.extent(parsedResults, function (d) { return d.y })
    console.log(x_domain)
    console.log(y_domain)

  var rectanglesUpdate = svg.selectAll("rect")
                        .data(sortedResults)
                        .enter()
                        .append("svg:rect");

  rectanglesEnter.append("rect");

  rectanglesUpdate
    .attr("x", function(d) { return d.x; })
    .attr("y", function(d) { return 40; })
    .attr("height", function(d) { return 900; })
    .attr("width", function(d) { return 80; })
    .style("fill", function(d) { return "blue"; })
    .transition()
    .duration(1250)
    .style('opacity', .3);
}
