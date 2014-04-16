var renderLineChart = function(parsedResults){
  var lineChart = new LineChart();
  lineChart.render(parsedResults);
}

var renderOrdinalLineChart = function(ordinalResults){
  var lineChart = new LineChart();
  lineChart.renderOrdinal(ordinalResults);
}

var renderHRChart = function(hrData){
  var lineChart = new LineChart();
  lineChart.renderHR(hrData);
}

$(document).ready(function(){
  $("#retrieve_user_line").on("click", function(){
    $.ajax({
      url: "/users/"+userId+"/results",
      type: "get"
    })
    .done(function(data) {
      $("svg").remove();
      var parsedResults = parseResponses(data)
      renderLineChart(parsedResults)
    })
    .fail(function(data) {
    })
    .always(function(data) {
    });
  });

  $("#retrieve_user_ord_line").on("click", function(){
    $.ajax({
      url: "/users/"+userId+"/results",
      type: "get"
    })
    .done(function(data) {
      $("svg").remove();
      var ordinalResults = ordinalParseResponses(data)
      renderOrdinalLineChart(ordinalResults)
    })
    .fail(function(data) {
    })
    .always(function(data) {
    });
  });

  $("#retrieve_user_hr_line").on("click", function(){
    $.ajax({
      url: "/users/"+userId+"/results",
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


