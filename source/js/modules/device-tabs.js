(function() {
  const $tabs = $('.device-details__tab');

  $tabs.click(function() {
    if (!$(this).hasClass('active')) {
      $tabs.removeClass('active');
      $(this).addClass('active');
    }
  });
})();
