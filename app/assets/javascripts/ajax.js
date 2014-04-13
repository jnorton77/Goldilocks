$(document).ready(function(){

  $("#retrieve_all").on("submit", function(){
    $.ajax({
      url: "users/index/results",
      type: "get"
    })
    .done(function(data) {
      console.log(data)
      $.each(data, function(index, value) {
      console.log(value);
      });
    })
    .fail(function(data) {

    })
    .always(function(data) {

    });
  });

  $("#retrieve_for_user").on("submit", function(){
    $.ajax({
      url: "/users/"+userId+"/results",
      type: "get"
    })
    .done(function(data) {
      console.log(data)
      $.each(data, function(index, value) {
      console.log(value);
      });
    })
    .fail(function(data) {

    })
    .always(function(data) {

    });
  });

});


