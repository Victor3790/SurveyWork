$(document).ready(function () {
  //Responsive menu
  $('#smallMenuIcon').click(function(){
  var smallMenu = $('#smallMenu');

  if(smallMenu.css('width') === '0px'){
    smallMenu.css('height','100vh');
    smallMenu.animate({
      width: '55%'
    }, 150);
  }
  });

  $('.close').click(function(){
  var smallMenu = $('#smallMenu');

  if(smallMenu.css('width') !== '0px'){
    smallMenu.animate({
      width: '0'
    }, 150, function(){
      smallMenu.css('height','0');
      });
  }
  });
})
