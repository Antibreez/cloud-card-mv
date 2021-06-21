"use strict";

(function () {
  $(window).on('load', function () {
    var swiper = new Swiper('.breadcrumbs__container', {
      freeMode: true,
      slidesPerView: 'auto',
      watchOverflow: true,
      breakpoints: {
        1280: {
          freeMode: true,
          slidesPerView: 'auto',
          allowTouchMove: false
        }
      }
    });
  });
})();

(function () {
  var $tabs = $('.device-details__tab');
  $tabs.click(function () {
    if (!$(this).hasClass('active')) {
      $tabs.removeClass('active');
      $(this).addClass('active');
    }
  });
})();

(function () {
  var swiper = new Swiper('.gallery__slider-container', {
    slidesPerView: 1,
    pagination: {
      el: '.gallery__slider-pagination',
      dynamicBullets: true
    },
    breakpoints: {
      768: {
        slidesPerView: 3.5,
        spaceBetween: 15,
        navigation: {
          nextEl: '.gallery__slider-next',
          prevEl: '.gallery__slider-prev'
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
          prevEl: '.gallery__slider-prev'
        },
        pagination: {
          el: null
        }
      }
    }
  });
  var $slide = $('.gallery .swiper-slide');
  var $bigImg = $('.gallery__big-img  img');
  $slide.click(function () {
    if (!$(this).hasClass('active')) {
      $slide.removeClass('active');
      $(this).addClass('active');
      var src = $(this).children('img').attr('src');
      var alt = $(this).children('img').attr('alt');
      $bigImg.attr('src', src);
      $bigImg.attr('alt', alt);
      var $container = $(this).parents('.gallery__slider-container');
      var leftPosition = $(this).offset().left - $container.offset().left;
      var rightPosition = $container.width() - leftPosition - $(this).width();

      if (rightPosition < $(this).width()) {
        swiper.slideNext();
      }

      if (leftPosition < $(this).width()) {
        swiper.slidePrev();
      }
    }
  });
})();

(function () {
  var $linkPayment = $('.payment-card__payment-about');
  var $linkAbout = $('.payment-card__desc-link');

  function onLinkClick(e) {
    var $el = $(e.currentTarget);
    var elementClick = $el.attr('href');
    var destination = $(elementClick).offset().top - 50;
    $('html, body').animate({
      scrollTop: destination
    }, 400);
  }

  $linkPayment.on('click', onLinkClick);
  $linkAbout.on('click', onLinkClick);
})();

(function () {
  var $btns = $('.device-chars__square-btn');
  $btns.click(function () {
    if (!$(this).hasClass('active')) {
      $btns.removeClass('active');
      $(this).addClass('active');
    }
  });
})();

(function () {
  var $aboutBtn = $('.device-details__about-btn');
  var $close = $('.tooltip__close');

  function getTopPosition($el) {
    return $el.offset().top - window.scrollY;
  }

  ;

  function getPossibleTopPosition($el) {
    return getTopPosition($el) - $el.outerHeight() - 50;
  }

  function getBottomPosition($el) {
    return window.scrollY + $(window).outerHeight() - $el.offset().top - $el.outerHeight();
  }

  function getPossibleBottomPosition($el) {
    return getBottomPosition($el) - $el.outerHeight() - 50;
  }

  function setTooltipPosition() {
    $('.tooltip.js-show').each(function () {
      if (getTopPosition($(this)) < 0 && getPossibleBottomPosition($(this)) > 0) {
        $(this).removeClass('top');
        $(this).addClass('bottom');
      }

      if (getBottomPosition($(this)) < 0 && getPossibleTopPosition($(this)) > 0) {
        $(this).removeClass('bottom');
        $(this).addClass('top');
      }
    });
  }

  $aboutBtn.on('click', function () {
    $(this).next().addClass('js-show');
    $('.tooltip__blackout').addClass('js-show');
    $('body').addClass('js__body-no-scroll-mobile');
    setTooltipPosition();
  });
  $close.on('click', function () {
    var $tooltip = $(this).parent();
    $tooltip.removeClass('js-show');
    setTimeout(function () {
      $tooltip.removeClass('bottom top');
    }, 300);
    $('.tooltip__blackout').removeClass('js-show');
    $('body').removeClass('js__body-no-scroll-mobile');
  });
  $('.tooltip__blackout').on('click', function () {
    $(this).removeClass('js-show');
    $('.tooltip.js-show').removeClass('js-show');
    $('body').removeClass('js__body-no-scroll-mobile');
  });
  $(window).on('scroll', function () {
    setTooltipPosition();
  });
  $(document).on('mouseup', function (e) {
    var $target = $(e.target);

    if (!$target.is('.tooltip') && $target.parents('.tooltip').length === 0 && !$target.is('.device-details__about-btn')) {
      $('.tooltip.js-show').removeClass('js-show');
    }
  });
})();