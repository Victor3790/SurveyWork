$(document).ready(function () {
  $('.flecha').click(function(){
    $('img', this).toggleClass('rotar');
    var rows = $('img', this).parents('.row');
    $('.infoDetalle', rows[0]).toggle('slow');
  });

  $('.cursoImgSlider').click(function () {
    $('.cursoImgSlider').css('border', '0');
    $(this).css('border', '4px solid blue');
    var image = $(this).attr('src');
    $('#imagenPrincipal').attr('src', image);
  });

  new Swiper.default ('#sliderImgs', {
    // Optional parameters
    slidesPerView: 2,
    spaceBetween: 10,
    breakpoints: {
      576: {
        slidesPerView: 1,
        spaceBetween: 10,
      }
    },
    navigation: {
      nextEl: '#next',
      prevEl: '#prev',
    }
  });
});
