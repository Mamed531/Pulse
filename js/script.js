$(document).ready(function () {
   $('.home-slider__wrapper').slick({
      // setting-name: setting-value
      speed: 800,
      autoplay: true,
      autoplaySpeed: 2000,
      adaptiveHeight: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevron-right.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/chevron-left.png"></button>'
   });
})