var lineChart = new LineChart;

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

LineChart.prototype.render = function() {
  lineChart.parseLinePoints(data, "created_at", "answer");
}

// Specify the function for generating path data
var d3PolyLine = d3.svg.line()
                .x(function(d){return d.x;})
                .y(function(d){return d.y;})
                .interpolate("linear");

svgWindow.append("svg:path")
          .attr("d", d3PolyLine(pathinfo))
          .style("stroke-width", 2)
          .style("stroke", "steelblue")
          .style("fill", "none");


// LineChart.prototype.loadPoint = function(point) {      // for manually adding 1 point
//   this.points.push(point)
// }
