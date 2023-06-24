$(function(){
 
  var mixer = mixitup('.card-burger', {
    "animation": {
      "duration": 700,
      "nudge": false,

    }
  });

  var mixer = mixitup('.card-pizza', {
    "animation": {
      "duration": 700,
      "nudge": false,

    }
  });

  $('.card-pizza').hide();

  
  $('.popular__btn').one('click', function () {
    $('.card-pizza').show();
  });



})