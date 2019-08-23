$(document).ready(function () {
  //initialize swiper when document ready
 new Swiper.default ('#banners', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    /*autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },*/
    navigation: {
      nextEl: '#nextHero',
      prevEl: '#prevHero',
    }
  });

  new Swiper.default ('#brandLogos', {
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
      nextEl: '#nextBrand',
      prevEl: '#prevBrand',
    }
  });
});
