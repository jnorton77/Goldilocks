$(document).ready(function(){
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
    lineChart.render(hrData);
  }

  var renderBarChart = function(parsedResults){
    var barChart = new BarChart();
    barChart.render(parsedResults);
  }

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

   $("#show_events").change(function(){
    if ($this)is(':checked'){
      parseEventRectangles()
    } else {
           // need to exit the rectangles
    }
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


