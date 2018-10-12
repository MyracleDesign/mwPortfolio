// Scroll to first element
$('#landing-page-down span').click(function () {
  var scrollDistance = ($('#landing-page').next().offset().top) - 70;
  $('html, body').animate({
    scrollTop: scrollDistance + 'px'
  }, 500);
});
