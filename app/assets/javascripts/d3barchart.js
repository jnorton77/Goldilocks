var rect = svgWindow.selectAll("rect")
                              .data([1,4,3,2,5])
                              .enter()
                              .append("svg:rect");

function BarChart() {
  this.svg = d3.select("body").append(svgWindow)
                            .attr("id", "barchart");
}

BarChart.prototype.render = function (data) {
  //xScale? yScale?

  var rectanglesUpdate = this.svg.selectAll("rect")
                                  .data(data);


  var rectanglesEnter = rectanglesUpdate.enter();
  var rectanglesExit = rectanglesUpdate.exit();

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

var barChart =  new BarChart;
