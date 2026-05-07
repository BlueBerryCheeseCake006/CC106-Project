import { createCtaBanner } from "./ctaBanner.js";

export function createPrivacyPage() {
  return `
    <main>
            <section class="page-hero">
        <div class="page-hero-inner">
          <div class="page-hero-left">
            <span class="section-tag">Privacy Policy</span>
            <h1 class="section-title">Your Privacy Matters</h1>
            <p class="section-text">This page explains how Sulong Marketing Solutions collects, uses, and protects information submitted through this website.</p>
          </div>
          
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="policy-card">

            <div class="policy-block">
              <h2>Information We Collect</h2>
              <p>When you contact us through our website forms or by email, we may collect the following:</p>
              <ul>
                <li>Your full name</li>
                <li>Your email address</li>
                <li>Your business name</li>
                <li>The message or inquiry you submit</li>
              </ul>
              <p>We do not collect sensitive personal data such as payment details, identification numbers, or passwords through this website.</p>
            </div>

            <div class="policy-block">
              <h2>How We Use Your Information</h2>
              <p>Information you provide is used only for the following purposes:</p>
              <ul>
                <li>To respond to your inquiry or service request</li>
                <li>To follow up on a consultation or strategy call</li>
                <li>To communicate relevant updates about our services</li>
                <li>To improve the quality of our website and offerings</li>
              </ul>
              <p>We will never use your information for unrelated marketing without your explicit consent.</p>
            </div>

            <div class="policy-block">
              <h2>We Do Not Sell Your Data</h2>
              <p>Sulong Marketing Solutions does not sell, rent, trade, or share your personal information with third parties for commercial purposes. Your data remains private and is used solely to serve your inquiry.</p>
            </div>

            <div class="policy-block">
              <h2>Cookies and Analytics</h2>
              <p>This website may use basic analytics tools to understand general visitor behavior such as page views and traffic sources. These tools do not collect personally identifiable information. No advertising or tracking cookies are placed without your knowledge.</p>
            </div>

            <div class="policy-block">
              <h2>Data Retention</h2>
              <p>We retain inquiry information only as long as necessary to respond to and fulfill your request. You may request deletion of your data at any time by contacting us directly.</p>
            </div>

            <div class="policy-block">
              <h2>Your Rights</h2>
              <p>You have the right to request access to, correction of, or deletion of any personal information we hold about you. To exercise these rights, please reach out to us at <a href="mailto:sulongmarketingsolutions@gmail.com">sulongmarketingsolutions@gmail.com</a>.</p>
            </div>

            <div class="policy-block">
              <h2>Policy Updates</h2>
              <p>This privacy policy may be updated periodically to reflect changes in our practices or applicable laws. Continued use of this website after any update constitutes acceptance of the revised policy. Last updated: April 2026.</p>
            </div>

          </div>
        </div>
      </section>

      ${createCtaBanner({
        eyebrow: "Questions?",
        title: "We're Happy to Address Any Concerns",
        subtitle: "If you have any questions about how we handle your information, feel free to reach out directly.",
        email: true,
        btnText: "Contact Us"
      })}
    </main>
  `;
}
