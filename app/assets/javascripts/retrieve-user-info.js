$(document).ready(function(){
  var renderLineChart = function(parsedResults){
    var lineChart = new LineChart();
    lineChart.render(parsedResults);
  }

  var renderHRChart = function(hrData){
    var lineChart = new LineChart();
    lineChart.HRrender(hrData);
  }

  $("#retrieve_user_line").on("click", function(){
    $.ajax({
      url: "/users/"+userId+"/results",
      type: "get"
    })
    .done(function(data) {
      $("svg").remove();
      var parsedResults = parseResponses(data)
      renderLineChart(parsedResults, "ordinal")
    })
    .fail(function(data) {
    })
    .always(function(data) {
    });
  });

  $("#retrieve_user_hr_line").on("click", function(){
    $.ajax({
      url: "/users/"+userId+"/heartrates",
      type: "get"
    })
    .done(function(data) {
      $("svg").remove();
      var hrData = parseHRates(data)
      renderHRChart(hrData)
    })
    .fail(function(data) {
    })
    .always(function(data) {
    });
  });
});


