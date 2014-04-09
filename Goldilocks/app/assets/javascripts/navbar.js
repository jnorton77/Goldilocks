$(document).ready(function() {
  $('#navbar-login').on("click", function(){
    event.preventDefault();
    $(this).hide();

    alert("Like a boss!");
  });

  $('.error-messages').hover(function(){
    $('.error-messages ul li').text("Melt Your Face!!!")
  });

  $('.error-messages').on("click", function(){
  $(this).hide();
    alert("Like a boss!");
  })

});
