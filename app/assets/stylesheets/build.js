var buildLegend = {
    legendItemCount: 0,
    base: function(chart, legendItemSpacing) {
      this.legendItemSpacing = legendItemSpacing;
      this.legend = chart.shotChart.append('g')
        .attr("class","legend")
        .attr("transform", "translate(" + (chart.width - 100) + "," + (-chart.margins[0] + 30) + ")");
    },
    addItem: function(team, xFactor, data) {
      this.legend.append("rect")
        .attr('class', team)
        .attr("height", 13)
        .attr("width", 25)
        .attr("x", (xFactor * this.legendItemCount)) // 0, 63
        .attr("y", 0)
        .attr("rx", 2)
        .attr("ry", 2)

      this.legend.append("text")
        .attr("class", "total_shots")
        .attr("x", (xFactor * (1 + this.legendItemCount))) // 7, 70
        .attr("y", 10).text(function(d, i) { return data["shot_count"]});

      this.legend.append("text")
        .attr("x", (xFactor * (4 + this.legendItemCount))) // 28, 91
        .attr("y", 10).text(function(d, i) { return data["abbr"]});
        this.legendItemCount = this.legendItemCount + this.legendItemSpacing;
    }
  }

    var buildStrengthAreas = function(chart, strength) {
    var area = d3.svg.area()
    .interpolate("strength")
    .x0(chart.width)
    .x1(0)
    .y0(chart.height)
    .y1(function(d) { return 0 });

    var areaData = [];
    for (var i = 0; i < strength.length; i++) {
      areaData.push({ "start_time": strength[i].start_time, "end_time": strength[i].end_time, "team": strength[i].advantage })
    }

    $.each(areaData, function(i, d) {
      d3.select('.strength-area').append("rect")
        .datum(d)
        .attr("d", area)
        .attr("height", chart.height)
        .attr("x", chart.x(d.start_time))
        .attr("width", chart.x((d.end_time || d3.max(data, function(d) { return parseGameTime(d.time_expired)})) - d.start_time))
        .attr("class", function(d) { return "area " + d.team });
    });
  }

  var parseGameTime = function(timeElapsed) {
    var time_expired = timeElapsed.split(':'),
    minutes = parseInt(time_expired[0] * 60),
    seconds = parseInt(time_expired[1]);
    time_expired = minutes + seconds;
    return time_expired;
  }

  var plotPoints = function(chart, team, data) {
      chart.shotChart.selectAll(".linedot." + team + "_team")
      .data(data.shot_events)
      .enter().append("circle")
        .attr("class", function(d) { return "linedot " + team + "_team " + d.shot_type })
        .attr("cy", function(d, i) { return chart["y"](i + 1) })
        .attr("cx", function(d) { return chart["x"](parseGameTime(d.time_expired)) })
        .attr("r", function(d) { return (d.shot_type === "GOAL") ? 6 : 4 })
        .on("mouseover", function(d, i) {
          var circle = d3.select(this);
          handleMouseEvents.over(circle, d, team, chart);
        })
        .on("mouseleave", function(d, i) {
          var circle = d3.select(this);
          handleMouseEvents.leave(circle, function(d) { return (d.shot_type === "GOAL") ? 6 : 4 });
        })
        .on("click", function(d, i) {
          var circle = d3.select(this);
          handleMouseEvents.showDetail(circle, d);
        })
   }





