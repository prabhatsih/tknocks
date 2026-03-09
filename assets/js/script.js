document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;

  function handleNavbarScroll() {
    const scrolled = window.scrollY > 50;

    navbar.classList.toggle("navbar-scrolled", scrolled);
    navbar.classList.toggle("shadow-md", scrolled);
  }

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            tabs.forEach(t => t.classList.remove("active"));
            contents.forEach(c => c.classList.remove("active"));
            this.classList.add("active");
            const target = this.getAttribute("data-tab");
            document.getElementById(target).classList.add("active");
        });
    });

});
// design and developmeet/
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
// 

    // Service selection
        function selectService(element) {
            // Remove active from all
            document.querySelectorAll('.service-card').forEach(card => {
                card.classList.remove('active');
            });
            // Add active to clicked
            element.classList.add('active');
        }

        // Form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Visual feedback
            const btn = this.querySelector('.submit-btn');
            const originalText = btn.textContent;
            btn.textContent = 'Sending...';
            btn.disabled = true;
            
            setTimeout(() => {
                btn.textContent = 'Sent Successfully!';
                btn.style.background = '#10b981';
                
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.background = '';
                    btn.disabled = false;
                    this.reset();
                    document.querySelectorAll('.service-card').forEach(c => c.classList.remove('active'));
                }, 2000);
            }, 1500);
        });

        // Input focus effects
        document.querySelectorAll('.form-control, .form-select, .phone-input, .message-input').forEach(input => {
            input.addEventListener('focus', function() {
                this.closest('.custom-input-group, .phone-group, .message-group')?.style.setProperty('box-shadow', '0 0 0 3px rgba(37, 99, 235, 0.1)');
            });
            
            input.addEventListener('blur', function() {
                this.closest('.custom-input-group, .phone-group, .message-group')?.style.setProperty('box-shadow', 'none');
            });
        });

// our work js tabs button

       
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

