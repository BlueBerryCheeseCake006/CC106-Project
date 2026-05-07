const faqs = [
  {
    question: "What services do you offer?",
    answer: "We provide social media management, content creation, paid advertising, lead generation, and conversion-focused marketing support. Each service is built around strategy, consistency, and measurable results."
  },
  {
    question: "Do you work with small businesses?",
    answer: "Yes. We work with startups, small businesses, and growing brands across various industries. We tailor our approach to fit your goals, budget, and stage of growth."
  },
  {
    question: "Do you also create content?",
    answer: "Yes. We help with captions, graphic visuals, branding direction, and campaign creatives. Our content is built to align with your brand identity and marketing goals."
  },
  {
    question: "How do I get started?",
    answer: "You can go to the Contact page and send us your inquiry or book a free strategy call. We'll review your current marketing setup, understand your goals, and propose a direction."
  },
  {
    question: "How long before I see results?",
    answer: "Results vary depending on the service and your starting point. Social media growth typically becomes visible within 30–60 days. Lead generation and paid ad campaigns can show results faster, especially with proper targeting and creative."
  },
  {
    question: "Do you offer one-time projects or ongoing retainers?",
    answer: "We offer both. Some clients prefer a one-time strategy or campaign setup, while others work with us on an ongoing monthly retainer for consistent growth management. We'll recommend the best fit during your strategy call."
  },
  {
    question: "What platforms do you work with?",
    answer: "We primarily work with Facebook, Instagram, TikTok, and Google. Depending on your business and audience, we'll recommend the platforms most likely to deliver the best results."
  },
  {
    question: "How do you measure success?",
    answer: "We track key performance indicators relevant to your goals — engagement rate, follower growth, lead volume, cost per lead, return on ad spend, and more. You'll receive clear monthly reports so you always know what's working."
  }
];

export function createFaqPage() {
  const items = faqs.map((faq, i) => `
    <div class="faq-item" id="faq-${i}">
      <button class="faq-question">
        ${faq.question}
        <i class="fa-solid fa-chevron-down faq-icon"></i>
      </button>
      <div class="faq-answer">
        <p>${faq.answer}</p>
      </div>
    </div>
  `).join("");

  return `
    <main>
            <section class="page-hero">
        <div class="page-hero-inner">
          <div class="page-hero-left">
            <span class="section-tag">FAQ</span>
            <h1 class="section-title">Frequently Asked Questions</h1>
            <p class="section-text">Here are answers to common questions about our services, process, and how we work with clients.</p>
          </div>
          
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="faq-list">
            ${items}
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="contact-card">
            <span class="section-tag">Still Have Questions?</span>
            <h2 class="section-title">We're Happy to Help</h2>
            <p class="section-text">
              If you didn't find what you were looking for, reach out directly and we'll get back to you quickly.
            </p>
            <div class="btn-row">
              <a class="btn btn-primary" href="contact.html" style="background:rgba(255,255,255,0.2);border:1px solid rgba(255,255,255,0.4);color:#fff;">Go to Contact Page</a>
            </div>
          </div>
        </div>
      </section>
    </main>


  `;
}

export function initFaq() {
  document.querySelectorAll('.faq-question').forEach(function(btn) {
    btn.addEventListener('click', function() {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen);
    });
  });
}
