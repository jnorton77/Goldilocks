var LineChart = function() {
    this.initialize();
}

LineChart.prototype.initialize = function(){
}

LineChart.prototype.render = function(parsedResults){
    var margin = {top: 0, right: 0, bottom: 0, left: 0}
    var width = 1480 - margin.left - margin.right
    var height = 900 - margin.top - margin.bottom
    var x_domain = d3.extent(parsedResults, function (d) { return d.x })
    var y_domain = d3.extent(parsedResults, function (d) { return d.y })

    var svg = d3.select("body").append("svg")
                      .attr("width", width + margin.left + margin.right)
                      .attr("height", height + margin.top + margin.bottom)
                      .append("g")
                      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var d3PolyLine = d3.svg.line()
                          .x(function(data){
                            console.log(data.x)
                            var xat = data.x
                            return xScale(xat);
                          })
                          .y(function(data){
                            console.log(data.y)
                            var yat = data.y
                            return yScale(yat);
                          })
                          .interpolate("linear");

    var xScale = d3.time.scale()
                          .domain(x_domain).nice()
                          .range([0, width]);

    var yScale = d3.scale.linear()
                          .domain(y_domain).nice()
                          .range([height, 0]);

    var xAxis = d3.svg.axis()
                      .ticks(12)
                      .orient("bottom")
                      .scale(xScale);

    var yAxis = d3.svg.axis()
                      .ticks(5)
                      .orient("left")
                      .scale(yScale);

    var svg = d3.select("svg")

  svg.append("g")
      .attr("class", "x-axis")
      .attr("transform", "translate(0," + svg.attr("height") + ")")
      .style("stroke-width", 2)
      .call(xAxis);

  svg.append("g")
        .attr("class", "y-axis")
        .style("stroke-width", 2)
        .call(yAxis)
      .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("x", -20)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Responses");

  var pathTween = function() {
      var interpolate = d3.scale.quantile()
                                .domain([0,1])
                                .range(d3.range(1, parsedResults.length + 1));
      return function(t) {
          return d3PolyLine(parsedResults.slice(0, interpolate(t)));
      }
  };

  var path = svg.append("svg:path")
                .attr("class", "line")
                .attr("d", d3PolyLine(parsedResults))
                .transition()
                  .duration(2500)
                  .attrTween('d', pathTween);
}
