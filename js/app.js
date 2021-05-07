$(document).ready(function () {
  $(".single-itemCarousel").owlCarousel({
    items: 1,
    dots: true,
    dotsEach: true,
    dotClass: "customDots",
    margin: 10,
  });

  $(".product-carousel").owlCarousel({
    items: 1,
    dots: true,
    dotsEach: true,
    dotClass: "customDots",
    margin: 10,
  });
});

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);
(function init100vh() {
  function setHeight() {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  setHeight();
  window.addEventListener("resize", setHeight);
})();
