$(document).ready(function(){
  $("#preloader").fadeOut(1000);
  $("#body").fadeIn(1000, function(){
    $("body").css("overflow","auto");
  });
});
