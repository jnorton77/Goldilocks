  var handleMouseEvents = {

    createToolTipDiv: function(duration) {
      this.transitionDuration = duration;
      var tooltip = d3.select("body").append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);
    },

    /**
     * Handle the mouseover event for circles
     * @param {object} elem - The svg circle elem we are hovering on
     * @param {object} data - Data for the shot event
     * @param {string} team - away or home
     */
    over: function(elem, data, team, chart) {
      d3.select("body").style("cursor", "pointer");
      elem.transition().duration(200)
        .attr("r", (elem.attr("r") * 1.4));
      this.showToolTip(data, team);
      this.drawLinesToAxes(elem, "x", 0, team);
      this.drawLinesToAxes(elem, "y", chart.height, team);
    },


    /**
     * Handle the mouseleave event when exiting a circle
     * @param {object} elem - The svg circle elem we left
     * @param {int} r - The circle radius we want to revert to
     */
    leave: function(elem, r) {
      d3.select("body").style("cursor", "default");
      elem.transition().duration(200)
        .attr("r", r);
      d3.select('.tooltip').transition()
        .duration(this.transitionDuration)
        .style("opacity", 0);
      setTimeout(function() {
        d3.select(".tooltip").classed("hidden", true);
      }, this.transitionDuration)
      d3.selectAll(".line-helper").remove();
    },


    /**
     * Show tooltip when user is hovering on a circle
     * @param {object} data - Data for the shot event to populate the tooltip html
     * @param {string} team - away or home
     */
    showToolTip: function(data, team) {
      switch (data.shot_type) {
        case "SHOT":
          var shot_type = "Shot on goal";
          break;
        case "GOAL":
          var shot_type = "Goal";
          break;
        default:
          var shot_type = "Shot " + data.shot_type + "ed";
          break;
      }

      d3.select('.tooltip').classed("hidden", false).html("<b>" + shot_type.toUpperCase() + "</b><br />" + data.period_time_expired + ", Period " + data.period)
      .style("left", (d3.event.pageX + 10) + "px")
      .style("top", (d3.event.pageY - 40) + "px");
      d3.select('.tooltip').transition()
      .duration(this.transitionDuration)
      .style("opacity", 0.9)
      .attr("class", function() { return "tooltip " + team; });
    },
