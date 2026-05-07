export function createHeader(active = "") {
  return `
    <header class="header">
      <div class="header-inner">

        <a href="index.html" class="brand">
          <img
            src="images/logo-horizontal.PNG"
            alt="Sulong Marketing Solutions logo"
            class="brand-logo"
          />
        </a>

        <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation" aria-expanded="false">
          <i class="fa-solid fa-bars"></i>
        </button>

        <nav class="nav" id="mainNav" aria-label="Primary Navigation">
          <a href="index.html" class="${active === "home" ? "active" : ""}">Home</a>
          <a href="about.html" class="${active === "about" ? "active" : ""}">About</a>
          <a href="services.html" class="${active === "services" ? "active" : ""}">Services</a>
          <a href="case-studies.html" class="${active === "case-studies" ? "active" : ""}">Case Studies</a>
          <a href="testimonials.html" class="${active === "testimonials" ? "active" : ""}">Testimonials</a>
          <a href="contact.html" class="${active === "contact" ? "active" : ""}">Contact</a>
        </nav>

      </div>
    </header>


  `;
}

export function initHeader() {
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('mainNav');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', function() {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
    toggle.querySelector('i').className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
  });

  nav.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.querySelector('i').className = 'fa-solid fa-bars';
    });
  });
}
