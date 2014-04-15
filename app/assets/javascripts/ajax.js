$(document).ready(function(){
  $("#retrieve_all_line").on("click", function(){
    $.ajax({
      url: "/users/index/results",
      type: "get"
    })
    .done(function(data) {
      console.log(data)
                                      //call lc.render() [parse data into line points]
      console.log("-----");
      console.log(lineChart.points);
      console.log("-----");
      })
    .fail(function(data) {
    })
    .always(function(data) {
    });
  });
  $("#retrieve_user_line").on("click", function(){
    $.ajax({
      url: "/users/"+userId+"/results",
      type: "get"
    })
    .done(function(data) {
      console.log(data);

      console.log("-----");
      lineChart.render();                   //call lc.render() [parse data into line points]
      console.log("-----");
    })
    .fail(function(data) {
    })
    .always(function(data) {
    });
  });
    $("#retrieve_all_bar").on("click", function(){
    $.ajax({
      url: "/users/index/results",
      type: "get"
    })
    .done(function(data) {
      console.log(data)
                                    // call lc.render() [parse data into line points]
      console.log("-----");
      console.log(lineChart.points);
      console.log("-----");
      })
    .fail(function(data) {
    })
    .always(function(data) {
    });
  });
  $("#retrieve_user_bar").on("click", function(){
    $.ajax({
      url: "/users/"+userId+"/results",
      type: "get"
    })
    .done(function(data) {
      console.log(data);
    })
    .fail(function(data) {
    })
    .always(function(data) {
    });
  });
});


