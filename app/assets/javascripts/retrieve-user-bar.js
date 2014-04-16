var renderBarChart = function(parsedResults){
  var barChart = new BarChart();
  barChart.render(parsedResults);
}

$(document).ready(function(){
  $("#retrieve_user_vert_bar").on("click", function(){
    $.ajax({
      url: "/users/"+userId+"/results",
      type: "get"
    })
    .done(function(data) {
      var parsedResults = parseResponses(data)
      renderbarChart(parsedResults)
    })
    .fail(function(data) {
    })
    .always(function(data) {
    });
  });

});
