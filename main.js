
$(document).ready(function() {
  //Menu drop-down
  $(".menu-toggle").on("click", function() {
    $(this).toggleClass("open");
    $(".top-navigation").toggleClass("open");
  });

  $(".top-navigation .nav-link").on("click", function() {
    $(".menu-toggle").removeClass("open");
    $(".top-navigation").removeClass("open");
  });

  //Smooth scrolling

  $('nav a[href*="#"]').on("click", function() {
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - 100
      },
      1000
    );
  });

  //Animate on scroll
  AOS.init({
    duration: 1000,
    once: true
  });
  
});
