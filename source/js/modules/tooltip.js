(function() {
  const $aboutBtn = $('.device-details__about-btn');
  const $close = $('.tooltip__close');

  function getTopPosition($el) {
    return $el.offset().top - window.scrollY;
  };

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
    $('.tooltip.js-show').each(function() {
      if (
        getTopPosition($(this)) < 0
        && getPossibleBottomPosition($(this)) > 0
      ) {
        $(this).removeClass('top');
        $(this).addClass('bottom');
      }

      if (
        getBottomPosition($(this)) < 0
        && getPossibleTopPosition($(this)) > 0
      ) {
        $(this).removeClass('bottom');
        $(this).addClass('top');
      }
    });
  }

  $aboutBtn.on('click', function() {
    $(this).next().addClass('js-show');
    $('.tooltip__blackout').addClass('js-show');
    $('body').addClass('js__body-no-scroll-mobile');

    setTooltipPosition();
  });

  $close.on('click', function() {
    const $tooltip = $(this).parent();
    $tooltip.removeClass('js-show');

    setTimeout(function() {
      $tooltip.removeClass('bottom top');
    }, 300);

    $('.tooltip__blackout').removeClass('js-show');
    $('body').removeClass('js__body-no-scroll-mobile');
  });

  $('.tooltip__blackout').on('click', function() {
    $(this).removeClass('js-show');
    $('.tooltip.js-show').removeClass('js-show');
    $('body').removeClass('js__body-no-scroll-mobile');
  });

  $(window).on('scroll', function() {
    setTooltipPosition();
  });

  $(document).on('mouseup', function(e) {
    const $target = $(e.target);
    if (
      !$target.is('.tooltip')
      && $target.parents('.tooltip').length === 0
      && !$target.is('.device-details__about-btn')
    ) {
      $('.tooltip.js-show').removeClass('js-show');
    }
  });
})();
