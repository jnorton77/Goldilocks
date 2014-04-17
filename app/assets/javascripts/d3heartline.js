LineChart.prototype.HRrender = function(hrData){
    var margin = {top: 0, right: 0, bottom: 10, left: 0}
    var width = 600 - margin.left - margin.right
    var height = 600 - margin.top - margin.bottom
    var x_domain = d3.extent(hrData, function (d) { return d.x })
    var y_domain = d3.extent(hrData, function (d) { return +d.y })

    var svg = d3.select("body").append("svg")
                      .attr("id", "user-heartrate-chart")
                      .append("g")
                      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var xScale = d3.time.scale()
                          .domain(x_domain).nice()
                          .range([0, width]);

    var yScale = d3.scale.linear()
                          .domain(y_domain).nice()
                          .range([height, 0]);

    var xAxis = d3.svg.axis()
                      .ticks(12)
                      .orient("top")
                      .scale(xScale);

    var yAxis = d3.svg.axis()
                      .ticks(5)
                      .orient("left")
                      .scale(yScale);

    var d3PolyLine = d3.svg.line()
                      .x(function(hrData){
                        var xat = hrData.x
                        return xScale(xat);
                      })
                      .y(function(hrData){
                        var yat = hrData.y
                        return yScale(yat);
                      })
                      .interpolate("linear");

    var svg = d3.select("svg")

  svg.append("g")
      .attr("class", "x-axis")
      .attr("transform", "translate(0, 0)")
      .call(xAxis);

  svg.append("g")
        .attr("class", "y-axis")
        .call(yAxis)
      .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("x", -20)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Beats Per Minute");

  var pathTween = function() {
      var interpolate = d3.scale.quantile()
                                .domain([0,1])
                                .range(d3.range(1, hrData.length + 1));
      return function(t) {
          return d3PolyLine(hrData.slice(0, interpolate(t)));
      }
  };

  var path = svg.append("svg:path")
                .attr("class", "line")
                .attr("d", d3PolyLine(hrData))
                .transition()
                  .duration(2500)
                  .attrTween('d', pathTween);

  var circles =  svg.selectAll("circle")
                    .data(hrData)
                    .enter().append("circle")
                    .attr("cx", function(d) { return xScale (d["x"]) })
                    .attr("cy", function(d) { return yScale (d["y"]) })
                    .attr("r", 2);
}
