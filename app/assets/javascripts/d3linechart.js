var LineChart = function() {
  this.points = [];
  this.initialize();
}

LineChart.prototype.initialize = function(){
  d3.select("body").append("svg")
                    .attr("width", 960)
                    .attr("height", 1200)
                    .attr("id", "linechart");
}

var xScale = d3.scale.linear()
                  .domain([0, 24])
                  .range([0, 960]);

var yScale = d3.scale.linear()
                  .domain([1, 5])
                  .range([0, 1200]);


LineChart.prototype.render = function(data) {
  var d3PolyLine = d3.svg.line()
                        .x(function(data){
                          var xat = data.x
                          return xScale(xat);
                        })
                        .y(function(data){
                          var yat = data.y
                          return yScale(yat);
                        })
                        .interpolate("linear");

  d3.select("svg").append("svg:path")
            .attr("d", d3PolyLine(data))
            .style("stroke-width", 2)
            .style("stroke", "steelblue")
            .style("fill", "none");
}

