export function createCtaBanner({ eyebrow = "Ready to Grow?", title, subtitle, email = true, btnText = "Book a Free Strategy Call" } = {}) {
  return `
    <section class="section">
      <div class="container">
        <div class="cta-banner">
          <div class="cta-banner-left">
            <span class="cta-banner-eyebrow">${eyebrow}</span>
            <h2 class="cta-banner-title">${title}</h2>
            <p class="cta-banner-text">${subtitle}</p>
            ${email ? `
            <a href="mailto:sulongmarketingsolutions@gmail.com" class="cta-banner-email">
              <i class="fa-solid fa-envelope"></i>
              sulongmarketingsolutions@gmail.com
            </a>` : ''}
          </div>
          <div class="cta-banner-right">
            <a href="contact.html" class="cta-banner-btn">
              ${btnText}
              <i class="fa-solid fa-arrow-right"></i>
            </a>
            <span class="cta-banner-note">Free · No commitment · 30 minutes</span>
          </div>
        </div>
      </div>
    </section>
  `;
}
