var jsonRectangles = [
  { "x": 10, "y": 10, "height": 20, "width":20, "color" : "green" },
  { "x": 160, "y": 40, "height": 20, "width":20, "color" : "purple" },
  { "x": 70, "y": 70, "height": 20, "width":20, "color" : "red" }];

var max_x = 0;
var max_y = 0;

$(document).ready(function() {
  for (var i = 0; i < jsonRectangles.length; i++) {
    var temp_x, temp_y;
    var temp_x = jsonRectangles[i].x_axis + jsonRectangles[i].width;
    var temp_y = jsonRectangles[i].y_axis + jsonRectangles[i].height;

    if ( temp_x >= max_x ) { max_x = temp_x; }

    if ( temp_y >= max_y ) { max_y = temp_y; }
  }

  var svgContainer = d3.select("body").append("svg")
                                      .attr("id", "barchart")
                                      .attr("width", max_x + 20)
                                      .attr("height", max_y + 20);

  var rectangles = svgContainer.selectAll("svg")
                              .data(jsonRectangles)
                              .enter()
                              .append("rect");

  var rectAttributes = rectangles
                        .attr("x", function(d) { return d.x; })
                        .attr("y", function(d) { return d.y; })
                        .attr("height", function(d) { return d.height; })
                        .attr("width", function(d) { return d.width; })
                        .style("fill", function(d) { return d.color; })

  // $.ajax({
  //   url: "/users/"+userId+"/results",
  //   type: "get"
  // })
  // .done(function(data) {
  //   // console.log(data)
  //   $.each(data, function(index, value) {
  //   console.log(value);
  //   });
  // })
  // .fail(function(data) {})
  // .always(function(data) {})
});
