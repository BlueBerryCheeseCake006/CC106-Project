import { createCtaBanner } from "./ctaBanner.js";

export function createTermsPage() {
  return `
    <main>
            <section class="page-hero">
        <div class="page-hero-inner">
          <div class="page-hero-left">
            <span class="section-tag">Terms of Service</span>
            <h1 class="section-title">Terms of Use</h1>
            <p class="section-text">By accessing and using this website, you agree to the following terms. Please read them carefully before proceeding.</p>
          </div>
          
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="policy-card">

            <div class="policy-block">
              <h2>Acceptance of Terms</h2>
              <p>By accessing this website at sulongmarketingsolutions.netlify.app, you confirm that you are at least 18 years of age and agree to be bound by these Terms of Use. If you do not agree, please discontinue use of this website.</p>
            </div>

            <div class="policy-block">
              <h2>Intellectual Property</h2>
              <p>All content published on this website — including but not limited to text, graphics, logos, images, service descriptions, and branding — is the exclusive property of Sulong Marketing Solutions unless otherwise stated.</p>
              <p>You may not reproduce, redistribute, republish, or use any content from this website without prior written permission from Sulong Marketing Solutions.</p>
            </div>

            <div class="policy-block">
              <h2>Services and Pricing</h2>
              <p>Information presented on this website regarding our services, packages, and results is provided for general informational purposes. Specific service details, pricing, timelines, and deliverables are subject to change and are agreed upon individually with each client through a formal proposal or agreement.</p>
              <p>Past results shown in case studies are representative of specific campaigns and do not guarantee identical outcomes for all clients.</p>
            </div>

            <div class="policy-block">
              <h2>Limitation of Liability</h2>
              <p>Sulong Marketing Solutions provides this website on an "as is" basis. We make no warranties, expressed or implied, about the completeness, accuracy, or reliability of the information on this site.</p>
              <p>We are not liable for any direct, indirect, incidental, or consequential damages arising from your use of this website or reliance on its content.</p>
            </div>

            <div class="policy-block">
              <h2>External Links</h2>
              <p>This website may contain links to third-party websites for reference or convenience. Sulong Marketing Solutions does not control or endorse the content of external sites and is not responsible for their accuracy, privacy practices, or terms.</p>
            </div>

            <div class="policy-block">
              <h2>User Conduct</h2>
              <p>You agree to use this website only for lawful purposes. You must not use this website in any way that could damage, disable, or impair the site, or interfere with any other person's use of it. Spamming, hacking attempts, or misuse of our contact forms is strictly prohibited.</p>
            </div>

            <div class="policy-block">
              <h2>Changes to These Terms</h2>
              <p>Sulong Marketing Solutions reserves the right to update or modify these Terms of Use at any time without prior notice. Your continued use of the website after any changes constitutes your acceptance of the updated terms. Last updated: April 2026.</p>
            </div>

            <div class="policy-block">
              <h2>Contact</h2>
              <p>For any questions regarding these terms, please contact us at <a href="mailto:sulongmarketingsolutions@gmail.com">sulongmarketingsolutions@gmail.com</a> or visit our <a href="contact.html">Contact page</a>.</p>
            </div>

          </div>
        </div>
      </section>

      ${createCtaBanner({
        eyebrow: "Questions?",
        title: "Need Clarification on Anything?",
        subtitle: "We're happy to answer any questions about our terms, services, or how we work with clients.",
        email: true,
        btnText: "Contact Us"
      })}
    </main>
  `;
}
