var lineChart = new LineChart;
var d3PolyLine = d3.svg.line()
                .x(function(d){return d.x;})
                .y(function(d){return d.y;})
                .interpolate("linear");

function LineChart() {
  this.points = [];
  this.svg = d3.select("body").append(svgWindow)
                            .attr("id", "linechart");
}

LineChart.prototype.parseLinePoints = function(array, xAttribute, yAttribute) {
  for(var i=0; i<array.length; i++) {
    var d = new Date(array[i][xAttribute])
    var x = d.getHours() + d.getMinutes()/60 + d.getSeconds()/3600
    this.points.push({
      "x" : x,
      "y" : array[i][yAttribute]
    })
  }
}

LineChart.prototype.d3PolyLine = function() {
  d3.svg.line()
        .x(function(d){return d.x;})
        .y(function(d){return d.y;})
        .interpolate("linear");
}

LineChart.prototype.render = function() {
  this.parseLinePoints(data, "created_at", "answer"); // data is undefined ...
  svgWindow.append("svg:path")
          .attr("d", d3PolyLine(this.points))
          .style("stroke-width", 2)
          .style("stroke", "steelblue")
          .style("fill", "none");
}

// Specify the function for generating path data





// LineChart.prototype.loadPoint = function(point) {      // for manually adding 1 point
//   this.points.push(point)
// }
