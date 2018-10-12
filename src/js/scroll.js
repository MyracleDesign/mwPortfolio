// Scroll to first element
$('#landing-page-down span').click(function () {
  var scrollDistance = $('#landing-page').next().offset().top;
  $('html, body').animate({
    scrollTop: scrollDistance + 'px'
  }, 500);
});
