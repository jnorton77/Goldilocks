var drawLine = function(data){
  var lineChart = new LineChart();

  lineChart.render(data);

}

$(document).ready(function(){
  $("#retrieve_user_line").on("click", function(){
    $.ajax({
      url: "/users/"+userId+"/results",
      type: "get"
    })
    .done(function(data) {
      var parsedResults = parseResponses(data);
      console.log(parsedResults);
      var sortedResults = _.sortBy(parsedResults, function(object){return object.x})
      console.log(sortedResults)
      drawLine(sortedResults);
    })
    .fail(function(data) {
    })
    .always(function(data) {
    });
  });

});


