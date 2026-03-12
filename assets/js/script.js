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

// team carousal
const track = document.getElementById('track');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');

  // ────────────────────────────────────────────────
  // Make it infinite by duplicating cards
  // ────────────────────────────────────────────────
  const originalCards = Array.from(track.querySelectorAll('[data-original]'));
  const cardCount = originalCards.length;

  // Add clones at the beginning and end
  originalCards.forEach(card => {
    const cloneStart = card.cloneNode(true);
    const cloneEnd   = card.cloneNode(true);
    cloneStart.removeAttribute('data-original');
    cloneEnd.removeAttribute('data-original');
    track.insertBefore(cloneStart, track.firstChild);
    track.appendChild(cloneEnd);
  });

  // Now total items = original × 3
  const totalItems = track.children.length;
  const itemWidth = originalCards[0].offsetWidth + 24; // card + gap

  let currentIndex = cardCount;   // start at first real card (after clones)
  let isTransitioning = false;

  function updatePosition(smooth = true) {
    const offset = -currentIndex * itemWidth;
    track.style.transition = smooth ? 'transform 0.6s cubic-bezier(0.23,1,0.32,1)' : 'none';
    track.style.transform = `translateX(${offset}px)`;
  }

  function handleInfiniteLoop() {
    // Jump without animation when reaching clone edges
    if (currentIndex <= cardCount - 1) {
      currentIndex += cardCount;
      updatePosition(false);
    } else if (currentIndex >= cardCount * 2) {
      currentIndex -= cardCount;
      updatePosition(false);
    }
  }

  function slide(direction) {
    if (isTransitioning) return;
    isTransitioning = true;

    currentIndex += direction;
    updatePosition(true);

    // Wait for animation → check if we need to reset position
    setTimeout(() => {
      handleInfiniteLoop();
      isTransitioning = false;
    }, 610);
  }

  prevBtn.addEventListener('click', () => slide(-1));
  nextBtn.addEventListener('click', () => slide(1));

  // Initial position (after clones)
  updatePosition(false);

  // Recalculate card width on resize (rarely needed but good practice)
  window.addEventListener('resize', () => {
    const newItemWidth = originalCards[0].offsetWidth + 24;
    if (Math.abs(newItemWidth - itemWidth) > 1) {
      location.reload(); // simplest way – or recalculate everything
    }
  });
  // contact end
  document.querySelectorAll('.service-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.service-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
