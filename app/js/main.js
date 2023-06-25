$(function(){

  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 0) {
      $('.header').addClass('header-fixed');
    } else {
      $('.header').removeClass('header-fixed');
    }
  });
 
  var mixer = mixitup('.burgers-card', {
    "animation": {
      "duration": 700,
      "nudge": false,

    }
  });


})