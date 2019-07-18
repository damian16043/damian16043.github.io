$(document).ready(function() {
  $(".menu-toggle").on("click", function() {
    $(this).toggleClass("open");
    $(".top-navigation").toggleClass("open");
  });

  $(".top-navigation .nav-link").on("click", function() {
    $(".menu-toggle").removeClass("open");
    $(".top-navigation").removeClass("open");
  });

  $('nav a[href*="#"]').on("click", function() {
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - 100
      },
      1000
    );
  });

  AOS.init({
    duration: 1000,
    once: true
  });
  
});
