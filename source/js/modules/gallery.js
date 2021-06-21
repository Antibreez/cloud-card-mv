(function() {
  const swiper = new Swiper('.gallery__slider-container', {
    slidesPerView: 1,
    pagination: {
      el: '.gallery__slider-pagination',
      dynamicBullets: true,
    },

    breakpoints: {
      768: {
        slidesPerView: 3.5,
        spaceBetween: 15,
        navigation: {
          nextEl: '.gallery__slider-next',
          prevEl: '.gallery__slider-prev',
        },
        pagination: {
          el: null
        }
      },

      1280: {
        slidesPerView: 4,
        spaceBetween: 15,
        navigation: {
          nextEl: '.gallery__slider-next',
          prevEl: '.gallery__slider-prev',
        },
        pagination: {
          el: null
        }
      },
    }
  });

  const $slide = $('.gallery .swiper-slide');
  const $bigImg = $('.gallery__big-img  img');

  $slide.click(function() {
    if (!$(this).hasClass('active')) {
      $slide.removeClass('active');
      $(this).addClass('active');

      const src = $(this).children('img').attr('src');
      const alt = $(this).children('img').attr('alt');

      $bigImg.attr('src', src);
      $bigImg.attr('alt', alt);


      const $container = $(this)
        .parents('.gallery__slider-container');

      const leftPosition = $(this).offset().left
        - $container.offset().left;

      const rightPosition = $container.width()
        - leftPosition
        - $(this).width();

      if (rightPosition < $(this).width()) {
        swiper.slideNext();
      }

      if (leftPosition < $(this).width()) {
        swiper.slidePrev();
      }
    }
  });
})();
