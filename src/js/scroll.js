// Scroll to first element
$('#landing-page-down span').click(() => {
  const scrollDistance = ($('#landing-page').next().offset().top) - 70;
  $('html, body').animate({
    scrollTop: scrollDistance + 'px'
  }, 500);
});

$('.nav-link').on("click", function () {
  $(".nav-item").removeClass("active");

  $this = $(this);
  const parent = $this.parent();
  parent.addClass("active");

  let scrollDistance = 0;
  const landingPageOffset = $('#landing-page').next().offset().top - 70;
  const aboutPageOffset = $('#about').outerHeight();
  const experiencePageOffset = $('#experience').outerHeight();
  const educationPageOffset = $('#education').outerHeight();

  if ($this.hasClass('nav-about')) {
    scrollDistance = landingPageOffset;
  } else if ($this.hasClass('nav-experience')) {
    scrollDistance = landingPageOffset + aboutPageOffset;
  } else if ($this.hasClass('nav-education')) {
    scrollDistance = landingPageOffset + aboutPageOffset + experiencePageOffset;
  } else if ($this.hasClass('nav-contact')) {
    scrollDistance = landingPageOffset + aboutPageOffset + experiencePageOffset +
      educationPageOffset;
  } else {
    console.error('Not defined for execute!')
  }

  $('html, body').animate({
    scrollTop: scrollDistance + 'px'
  }, 500);
})
