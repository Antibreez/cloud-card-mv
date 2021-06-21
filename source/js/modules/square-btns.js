(function() {
  const $btns = $('.device-chars__square-btn');

  $btns.click(function() {
    if (!$(this).hasClass('active')) {
      $btns.removeClass('active');
      $(this).addClass('active');
    }
  });
})();
