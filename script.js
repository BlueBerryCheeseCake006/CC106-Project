/* ===========================
   CC106 Portfolio — script.js
   =========================== */

// ── Navbar: scroll shadow + active link highlighting ──────────────────────────
(function initNavbar() {
  const navbar   = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section[id]');

  function onScroll() {
    // Add shadow when page is scrolled
    navbar.classList.toggle('scrolled', window.scrollY > 40);

    // Highlight the nav link whose section is currently in view
    let currentId = '';
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 120) {
        currentId = section.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + currentId);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load
}());


// ── Mobile nav toggle ─────────────────────────────────────────────────────────
(function initMobileNav() {
  const toggle   = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  toggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}());


// ── Intersection Observer: fade-in sections ───────────────────────────────────
(function initFadeIn() {
  const targets = document.querySelectorAll(
    '.skill-card, .project-card, .about-grid, .contact-grid, .section-title'
  );

  targets.forEach(el => el.classList.add('fade-in'));

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  targets.forEach(el => observer.observe(el));
}());


// ── Skill bars: animate width when section scrolls into view ─────────────────
(function initSkillBars() {
  const bars = document.querySelectorAll('.skill-fill');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          bar.style.width = bar.dataset.width + '%';
          observer.unobserve(bar);
        }
      });
    },
    { threshold: 0.3 }
  );

  bars.forEach(bar => observer.observe(bar));
}());


// ── Animated counters in About section ───────────────────────────────────────
(function initCounters() {
  const counters = document.querySelectorAll('.stat-number');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el     = entry.target;
        const target = parseInt(el.dataset.target, 10);
        const step   = Math.ceil(target / 40);
        let current  = 0;

        const tick = () => {
          current = Math.min(current + step, target);
          el.textContent = current;
          if (current < target) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
        observer.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach(el => observer.observe(el));
}());


// ── Project filter buttons ────────────────────────────────────────────────────
(function initProjectFilter() {
  const filterBtns  = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      projectCards.forEach(card => {
        const show = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('hidden', !show);
      });
    });
  });
}());


// ── Contact form: client-side validation ─────────────────────────────────────
(function initContactForm() {
  const form        = document.getElementById('contactForm');
  const nameInput   = document.getElementById('name');
  const emailInput  = document.getElementById('email');
  const msgInput    = document.getElementById('message');
  const nameError   = document.getElementById('nameError');
  const emailError  = document.getElementById('emailError');
  const msgError    = document.getElementById('messageError');
  const successMsg  = document.getElementById('formSuccess');

  function validateEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function setError(input, errorEl, msg) {
    input.classList.add('invalid');
    errorEl.textContent = msg;
    return false;
  }

  function clearError(input, errorEl) {
    input.classList.remove('invalid');
    errorEl.textContent = '';
    return true;
  }

  // Live validation on blur
  nameInput.addEventListener('blur', () => {
    nameInput.value.trim()
      ? clearError(nameInput, nameError)
      : setError(nameInput, nameError, 'Name is required.');
  });

  emailInput.addEventListener('blur', () => {
    if (!emailInput.value.trim()) {
      setError(emailInput, emailError, 'Email is required.');
    } else if (!validateEmail(emailInput.value.trim())) {
      setError(emailInput, emailError, 'Please enter a valid email address.');
    } else {
      clearError(emailInput, emailError);
    }
  });

  msgInput.addEventListener('blur', () => {
    msgInput.value.trim().length >= 10
      ? clearError(msgInput, msgError)
      : setError(msgInput, msgError, 'Message must be at least 10 characters.');
  });

  form.addEventListener('submit', e => {
    e.preventDefault();

    let valid = true;

    if (!nameInput.value.trim()) {
      setError(nameInput, nameError, 'Name is required.');
      valid = false;
    } else {
      clearError(nameInput, nameError);
    }

    if (!emailInput.value.trim()) {
      setError(emailInput, emailError, 'Email is required.');
      valid = false;
    } else if (!validateEmail(emailInput.value.trim())) {
      setError(emailInput, emailError, 'Please enter a valid email address.');
      valid = false;
    } else {
      clearError(emailInput, emailError);
    }

    if (msgInput.value.trim().length < 10) {
      setError(msgInput, msgError, 'Message must be at least 10 characters.');
      valid = false;
    } else {
      clearError(msgInput, msgError);
    }

    if (valid) {
      form.reset();
      successMsg.hidden = false;
      setTimeout(() => { successMsg.hidden = true; }, 5000);
    }
  });
}());
