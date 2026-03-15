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

  // Team Slider Section start //
  const teamTrack = document.querySelector("#teamSlider .team-track");
  let teamSlides = document.querySelectorAll("#teamSlider .team-slide");

  let teamIndex = 0;
  let autoSlide;

  /* clone slides for infinite effect */
  teamSlides.forEach(slide => {
    const clone = slide.cloneNode(true);
    teamTrack.appendChild(clone);
  });

  teamSlides = document.querySelectorAll("#teamSlider .team-slide");

  function getVisibleSlides() {
    if (window.innerWidth >= 992) return 4;
    if (window.innerWidth >= 768) return 2;
    return 1;
  }

  function moveTeamSlider() {
    const slideWidth = teamSlides[0].offsetWidth + 30;
    teamIndex++;

    teamTrack.style.transition = "transform 0.5s ease";
    teamTrack.style.transform = `translateX(-${teamIndex * slideWidth}px)`;

    if (teamIndex >= teamSlides.length / 2) {
      setTimeout(() => {
        teamTrack.style.transition = "none";
        teamIndex = 0;
        teamTrack.style.transform = `translateX(0px)`;
      }, 500);
    }

  }

  function startAutoSlide() {
    autoSlide = setInterval(moveTeamSlider, 3000);
  }

  startAutoSlide();

  window.scrollTeamSlider = function (direction) {
    clearInterval(autoSlide);
    const slideWidth = teamSlides[0].offsetWidth + 30;
    teamIndex += direction;

    if (teamIndex < 0) {
      teamIndex = teamSlides.length / 2 - 1;
    }

    if (teamIndex >= teamSlides.length / 2) {
      teamIndex = 0;
    }

    teamTrack.style.transition = "transform 0.5s ease";
    teamTrack.style.transform = `translateX(-${teamIndex * slideWidth}px)`;

    startAutoSlide();
  }
  // Team Slider Section end //

});