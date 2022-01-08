$(document).ready(function () {
   $('.home-slider__wrapper').slick({
      // setting-name: setting-value
      speed: 800,
      autoplay: true,
      autoplaySpeed: 2000,
      //adaptiveHeight: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevron-left.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/chevron-right.png"></button>'
   });
   // $('.js-open').each(function (i) {
   //    $(this).on("click", function (e) {
   //       e.preventDefault()
   //       $('.product__content').eq(i).addClass('product__content_active')
   //    });
   // });

   // $('.js-close').each(function (i) {  //  i- индекс элементво 0-1-2....
   //    $(this).on("click", function (e) {
   //       e.preventDefault()  ///  убирает действие по умолчанию 
   //       $('.product__content').eq(i).removeClass('product__content_active')
   //    });
   // })
   function toggleOpen(item) {
      $(item).each(function (i) {  //  i- индекс элементво 0-1-2....
         $(this).on("click", function (e) {
            e.preventDefault()  ///  убирает действие по умолчанию 
            $('.product__content').eq(i).toggleClass('product__content_active')
         });
      });
   }
   toggleOpen(".js-open");
   toggleOpen(".js-close")

})