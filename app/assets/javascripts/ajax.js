$(document).ready(function(){
  $("#retrieve_all_line").on("click", function(){
    $.ajax({
      url: "users/index/results",
      type: "get"
    })
    .done(function(data) {
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
    })
    .fail(function(data) {
    })
    .always(function(data) {
    });
  });
});


