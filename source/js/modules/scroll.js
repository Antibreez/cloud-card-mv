(function() {
  const $linkPayment = $('.payment-card__payment-about');
  const $linkAbout = $('.payment-card__desc-link');

  function onLinkClick(e) {
    const $el = $(e.currentTarget);
    const elementClick = $el.attr('href');
    const destination = $(elementClick).offset().top - 50;
    $('html, body').animate({scrollTop: destination}, 400);
  }

  $linkPayment.on('click', onLinkClick);
  $linkAbout.on('click', onLinkClick);
})();
