document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;

  function handleNavbarScroll() {
    const scrolled = window.scrollY > 50;

    navbar.classList.toggle("navbar-scrolled", scrolled);
    navbar.classList.toggle("shadow-md", scrolled);
  }

  window.addEventListener("scroll", handleNavbarScroll, { passive: true });

  const track = document.querySelector("#textSlider .text-track");
  const slides = document.querySelectorAll("#textSlider .text-slide");

  let index = 0;

  function getVisibleSlides() {
    if (window.innerWidth >= 992) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  }

  setInterval(function () {

    const visibleSlides = getVisibleSlides();

    const slideWidth = slides[0].offsetWidth + 12;

    index++;

    if (index > slides.length - visibleSlides) {
      index = 0;
    }

    track.style.transform =
      "translateX(-" + (index * slideWidth) + "px)";

  }, 2500);

});