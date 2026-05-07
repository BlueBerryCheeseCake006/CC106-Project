export function createFooter() {
  return `
    <footer class="footer">
      <div class="footer-inner">

        <div class="footer-brand">
          <h3>Sulong Marketing Solutions</h3>
          <p>
            Helping brands grow through strategic social media marketing,
            content creation, paid advertising, and conversion-focused digital systems.
          </p>
        </div>

        <div class="footer-bottom">
          <div class="footer-links">
            <a href="about.html">About</a>
            <a href="services.html">Services</a>
            <a href="case-studies.html">Case Studies</a>
            <a href="testimonials.html">Testimonials</a>
            <a href="contact.html">Contact</a>
            <a href="mailto:sulongmarketingsolutions@gmail.com">Email</a>
            <a href="faq.html">FAQ</a>
            <a href="privacy.html">Privacy</a>
            <a href="terms.html">Terms</a>
          </div>

          <div class="footer-socials">
            <a href="https://www.facebook.com/profile.php?id=61573343920925" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/sulongmarketingsolutions/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <div class="footer-copy">
          &copy; 2026 Sulong Marketing Solutions. All Rights Reserved.
        </div>
      </div>

      <button id="backToTop" class="back-to-top" aria-label="Back to top">
        <i class="fa-solid fa-arrow-up"></i>
      </button>
    </footer>
  `;
}
