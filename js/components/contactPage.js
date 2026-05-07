// ============================================================
// IMPORTANT: Replace FORMSPREE_FORM_ID below with your actual
// Formspree form ID (e.g. "xpwzabcd") from formspree.io
// ============================================================
const FORMSPREE_FORM_ID = "xkokwgll";

export function createContactPage() {
  return `
    <main>
            <section class="page-hero">
        <div class="page-hero-inner">
          <div class="page-hero-left">
            <span class="section-tag">Contact</span>
            <h1 class="section-title">Let's Talk About Your Growth Goals</h1>
            <p class="section-text">Ready to improve your online presence? Send us a message and let's start the conversation.</p>
          </div>
          <div class="page-hero-deco"><div class="page-hero-stat"><strong>Free</strong><span>Strategy Call</span></div><div class="page-hero-stat"><strong>1-2 Days</strong><span>Response Time</span></div><div class="page-hero-stat"><strong>No</strong><span>Commitment</span></div></div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="contact-card">

            <div class="contact-card-info">
              <span class="section-tag">Start Here</span>
              <h2 class="section-title">Book a Free Strategy Call</h2>
              <p class="section-text">
                Tell us about your business and goals. We'll review your current setup and map out a smarter plan together.
              </p>

              <div class="contact-card-detail">
                <i class="fa-solid fa-envelope"></i>
                <span><a href="mailto:sulongmarketingsolutions@gmail.com">sulongmarketingsolutions@gmail.com</a></span>
              </div>
              <div class="contact-card-detail">
                <i class="fa-solid fa-clock"></i>
                <span>Response within 1–2 business days</span>
              </div>
              <div class="contact-card-detail">
                <i class="fa-solid fa-circle-check"></i>
                <span>No commitment — just a conversation</span>
              </div>

              <div class="contact-socials">
                <p class="contact-socials-label">Find us on social media</p>
                <a href="https://www.facebook.com/profile.php?id=61573343920925" target="_blank" rel="noopener noreferrer" class="contact-social-btn" aria-label="Visit Sulong Marketing Solutions on Facebook" title="Facebook">
                  <span class="contact-social-icon contact-social-icon--fb">
                    <i class="fab fa-facebook-f"></i>
                  </span>
                </a>
                <a href="https://www.instagram.com/sulongmarketingsolutions/" target="_blank" rel="noopener noreferrer" class="contact-social-btn" aria-label="Visit Sulong Marketing Solutions on Instagram" title="Instagram">
                  <span class="contact-social-icon contact-social-icon--ig">
                    <i class="fab fa-instagram"></i>
                  </span>
                </a>
              </div>
            </div>

            <div class="contact-form-side">
              <div id="contact-success" class="contact-notice contact-notice--success" style="display:none;">
                <i class="fa-solid fa-circle-check"></i>
                <div>
                  <strong>Message sent successfully!</strong><br>
                  <span>We'll get back to you within 1–2 business days.</span>
                </div>
              </div>

              <div id="contact-error" class="contact-notice contact-notice--error" style="display:none;">
                <i class="fa-solid fa-triangle-exclamation"></i>
                <div>
                  <strong>Something went wrong.</strong><br>
                  <span id="contact-error-msg">Please try again or email us directly.</span>
                </div>
              </div>

              <form class="contact-form" id="contactForm" novalidate>
                <input type="text" id="cf-name" name="name" placeholder="Your Full Name" required autocomplete="name" />
                <input type="email" id="cf-email" name="email" placeholder="Your Email Address" required autocomplete="email" />
                <input type="text" id="cf-business" name="business" placeholder="Business Name (optional)" autocomplete="organization" />
                <textarea id="cf-message" name="message" placeholder="Tell us about your business and what you need help with" required></textarea>
                <!-- Honeypot spam field - hidden from users -->
                <input type="text" name="_gotcha" style="display:none" tabindex="-1" autocomplete="off" />
                <button type="submit" class="btn-submit" id="cf-submit">
                  Send Inquiry <i class="fa-solid fa-arrow-right"></i>
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </main>
  `;
}

export function initContact() {
  const form = document.getElementById('contactForm');
  const success = document.getElementById('contact-success');
  const errorBox = document.getElementById('contact-error');
  const errorMsg = document.getElementById('contact-error-msg');
  const submitBtn = document.getElementById('cf-submit');
  if (!form) return;

  form.addEventListener('submit', async function(e) {
    e.preventDefault();

    // Reset notices
    success.style.display = 'none';
    errorBox.style.display = 'none';

    // Validate required fields
    const nameEl = document.getElementById('cf-name');
    const emailEl = document.getElementById('cf-email');
    const msgEl = document.getElementById('cf-message');
    let valid = true;

    [nameEl, emailEl, msgEl].forEach(function(el) {
      if (!el.value.trim()) {
        el.style.borderColor = 'rgba(255,120,120,0.8)';
        valid = false;
      } else {
        el.style.borderColor = '';
      }
    });

    if (!valid) return;

    // Disable button and show loading
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Sending… <i class="fa-solid fa-spinner fa-spin"></i>';

    try {
      const formData = new FormData(form);
      const response = await fetch('https://formspree.io/f/' + FORMSPREE_FORM_ID, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      const data = await response.json();

      if (response.ok) {
        // Success — hide form, show success message
        form.style.display = 'none';
        success.style.display = 'flex';
      } else {
        // Formspree returned an error
        const msg = (data.errors && data.errors[0] && data.errors[0].message)
          ? data.errors[0].message
          : 'Something went wrong. Please try again.';
        errorMsg.textContent = msg;
        errorBox.style.display = 'flex';
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Send Inquiry <i class="fa-solid fa-arrow-right"></i>';
      }
    } catch (err) {
      // Network error — show error message, NO email app redirect
      errorMsg.textContent = 'Could not connect. Please check your internet and try again, or email us directly at sulongmarketingsolutions@gmail.com';
      errorBox.style.display = 'flex';
      submitBtn.disabled = false;
      submitBtn.innerHTML = 'Send Inquiry <i class="fa-solid fa-arrow-right"></i>';
    }
  });
}
