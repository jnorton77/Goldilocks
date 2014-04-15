var renderLineChart = function(parsedResults){
  var lineChart = new LineChart();
  lineChart.render(parsedResults);
}

$(document).ready(function(){
  $("#retrieve_user_line").on("click", function(){
    $.ajax({
      url: "/users/"+userId+"/results",
      type: "get"
    })
    .done(function(data) {
      var parsedResults = parseResponses(data)

      renderLineChart(parsedResults)
    })
    .fail(function(data) {
    })
    .always(function(data) {
    });
  });

});


