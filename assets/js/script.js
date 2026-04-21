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
// services tabs activeness button here---------
document.addEventListener('DOMContentLoaded', function() {
        // Desktop tabs
        const tabBtns = document.querySelectorAll('.tab-btn');
        // Mobile tabs
        const mobileTabBtns = document.querySelectorAll('.mobile-tab-btn');
        // All panels
        const tabPanels = document.querySelectorAll('.tab-panel');

        function switchTab(tabId) {
            // Remove active class from all tabs
            tabBtns.forEach(btn => btn.classList.remove('active'));
            mobileTabBtns.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));

            // Add active class to selected tab
            document.querySelectorAll(`[data-tab="${tabId}"]`).forEach(btn => {
                btn.classList.add('active');
            });
            document.getElementById(tabId).classList.add('active');
        }

        // Desktop tab click handlers
        tabBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                switchTab(this.dataset.tab);
            });
        });

        // Mobile tab click handlers
        mobileTabBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                switchTab(this.dataset.tab);
                // Scroll the active button into view
                this.scrollIntoView({
                    behavior: 'smooth',
                    inline: 'center',
                    block: 'nearest'
                });
            });
        });

        // Keyboard navigation for accessibility
       
    });

    
    // tab nav btn our work
    document.addEventListener("DOMContentLoaded", function () {

    var tabLinks = document.querySelectorAll('#myTab a');

    tabLinks.forEach(function (tab) {
        tab.addEventListener('click', function (e) {
            e.preventDefault();

            var target = this.getAttribute("href");

            document.querySelectorAll('.tab-pane').forEach(function (pane) {
                pane.classList.remove('show','active');
            });

            document.querySelector(target).classList.add('show','active');

            document.querySelectorAll('#myTab .nav-link').forEach(function (link) {
                link.classList.remove('active');
            });

            this.classList.add('active');
        });
    });

});



 // Left Sidebar Hover Expand
  const leftSidebar = document.querySelector(".left-sidebar-menu");
  const sidebarExpanded = document.getElementById("sidebarExpanded");

  if (leftSidebar && sidebarExpanded) {
    let hideTimer;

    function showSidebar() {
      clearTimeout(hideTimer);
      sidebarExpanded.classList.add("sidebar-expanded--visible");
    }

    function hideSidebar() {
      hideTimer = setTimeout(() => {
        sidebarExpanded.classList.remove("sidebar-expanded--visible");
      }, 120);
    }

    leftSidebar.addEventListener("mouseenter", showSidebar);
    leftSidebar.addEventListener("mouseleave", hideSidebar);
    sidebarExpanded.addEventListener("mouseenter", showSidebar);
    sidebarExpanded.addEventListener("mouseleave", hideSidebar);
  }

  // get a quote js
 
        // --- Modal Logic ---
        const modalOverlay = document.getElementById('quoteModalOverlay');
        const modalBackdrop = document.getElementById('modalBackdrop');
        const modalPanel = document.getElementById('modalPanel');
        let currentStep = 1;

        function openQuoteModal() {
            // Reset form if opening fresh
            if(document.getElementById('successStep').classList.contains('hidden') === false) {
                resetForm();
            }

            modalOverlay.classList.remove('hidden');
            // Trigger reflow
            void modalOverlay.offsetWidth;
            
            // Animate in
            modalBackdrop.classList.remove('opacity-0');
            modalPanel.classList.remove('opacity-0', 'scale-95');
            modalPanel.classList.add('opacity-100', 'scale-100');
            
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }

        function closeQuoteModal() {
            // Animate out
            modalBackdrop.classList.add('opacity-0');
            modalPanel.classList.remove('opacity-100', 'scale-100');
            modalPanel.classList.add('opacity-0', 'scale-95');

            setTimeout(() => {
                modalOverlay.classList.add('hidden');
                document.body.style.overflow = '';
            }, 300); // Match transition duration
        }

        // Close on Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === "Escape" && !modalOverlay.classList.contains('hidden')) {
                closeQuoteModal();
            }
        });

        // --- Form Logic ---

        function selectService(element, serviceName) {
            // Remove selected class from all cards
            document.querySelectorAll('.service-card').forEach(card => {
                card.classList.remove('selected');
            });
            
            // Add to clicked
            element.classList.add('selected');
            
            // Update hidden input
            document.getElementById('selectedService').value = serviceName;
            
            // Enable next button
            document.getElementById('btnStep1').disabled = false;
        }

        function updateBudgetLabel(val) {
            document.getElementById('budgetValue').innerText = '$' + parseInt(val).toLocaleString();
        }

        function nextStep(step) {
            // Hide current
            document.getElementById('step' + currentStep).classList.add('hidden');
            
            // Show next
            document.getElementById('step' + step).classList.remove('hidden');
            document.getElementById('step' + step).classList.add('animate-fade-in');
            
            // Update Progress
            currentStep = step;
            updateProgressBar();
        }

        function prevStep(step) {
            // Hide current
            document.getElementById('step' + currentStep).classList.add('hidden');
            
            // Show prev
            document.getElementById('step' + step).classList.remove('hidden');
            
            currentStep = step;
            updateProgressBar();
        }

        function updateProgressBar() {
            const percentage = (currentStep / 3) * 100;
            document.getElementById('progressBar').style.width = percentage + '%';
        }

        function handleFormSubmit(e) {
            e.preventDefault();
            
            // Simulate API call / Processing
            const submitBtn = e.target.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;

            setTimeout(() => {
                // Hide form steps
                document.getElementById('step3').classList.add('hidden');
                document.getElementById('progressBar').style.width = '100%';
                
                // Show success
                const successStep = document.getElementById('successStep');
                successStep.classList.remove('hidden');
                successStep.classList.add('animate-fade-in');
                
                // Populate success data
                document.getElementById('successName').innerText = document.getElementById('firstName').value;
                document.getElementById('successService').innerText = document.getElementById('selectedService').value;
                
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 1500);
        }

        function resetForm() {
            document.getElementById('quoteForm').reset();
            document.querySelectorAll('.service-card').forEach(c => c.classList.remove('selected'));
            document.getElementById('selectedService').value = '';
            document.getElementById('btnStep1').disabled = true;
            
            document.getElementById('successStep').classList.add('hidden');
            document.getElementById('step1').classList.remove('hidden');
            document.getElementById('step2').classList.add('hidden');
            document.getElementById('step3').classList.add('hidden');
            
            currentStep = 1;
            updateProgressBar();
        }
  

        // slider porfilee  starrted
     const pages = [
    "page1.html",
    "page2.html",
    "page3.html",
    "page4.html",
    "page5.html",
    "page6.html",
    "page7.html"
  ];

  function showSlide(index) {
    fetch(pages[index])
      .then(res => res.text())
      .then(data => {
        document.getElementById("content").innerHTML = data;
      });
  }

  // default load first page
  showSlide(0);    
        
// canvas

// tabs partners , clients, alliance
