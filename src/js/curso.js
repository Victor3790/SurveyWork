$(document).ready(function () {
  $('.flecha').click(function(){
    $('img', this).toggleClass('rotar');
    var rows = $('img', this).parents('.row');
    $('.infoDetalle', rows[0]).toggle('slow');
  });

  new Swiper.default ('#sliderImgs', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 10,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
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
