$(document).ready(function(){
  $("#retrieve_all_line").on("click", function(){
    $.ajax({
      url: "users/index/results",
      type: "get"
    })
    .done(function(data) {
      console.log(data)
      lineChart.parseLinePoints(data("created_at", "answer"))
      console.log("-----");
      console.log(lineChart.points);
      console.log("-----");
      })
    .fail(function(data) {
    })
    .always(function(data) {
    });
  });
  $("#retrieve_for_user_line").on("click", function(){
    $.ajax({
      url: "/users/"+userId+"/results",
      type: "get"
    })
    .done(function(data) {
      console.log(data);

      console.log("-----");
      lineChart.render();

      console.log(l.points);
      console.log("-----");
    })
    .fail(function(data) {
    })
    .always(function(data) {
    });
  });
    $("#retrieve_all_bar").on("click", function(){
    $.ajax({
      url: "users/index/results",
      type: "get"
    })
    .done(function(data) {
      console.log(data)
      barChart.parseLinePoints(data("created_at", "answer"))
      console.log("-----");
      console.log(lineChart.points);
      console.log("-----");
      })
    .fail(function(data) {
    })
    .always(function(data) {
    });
  });
  $("#retrieve_for_user_bar").on("click", function(){
    $.ajax({
      url: "/users/"+userId+"/results",
      type: "get"
    })
    .done(function(data) {
      console.log(data);

      console.log("-----");
      barChart.render();

      console.log(l.points);
      console.log("-----");
    })
    .fail(function(data) {
    })
    .always(function(data) {
    });
  });
});


