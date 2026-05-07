import { createCtaBanner } from "./ctaBanner.js";
const services = [
  {
    icon: "📱",
    title: "Social Media Management",
    description: "Planning, scheduling, publishing, and audience engagement built to improve consistency and organic brand growth."
  },
  {
    icon: "🎨",
    title: "Content Creation & Branding",
    description: "Graphics, caption writing, messaging, and visual systems that improve recognition and trust."
  },
  {
    icon: "📢",
    title: "Paid Advertising Campaigns",
    description: "Facebook, Instagram, and TikTok ads designed for reach, targeting precision, and measurable ROI."
  },
  {
    icon: "📊",
    title: "Lead Generation & Funnels",
    description: "Landing pages, inquiry systems, and follow-up journeys that convert traffic into customers."
  },
  {
    icon: "📬",
    title: "Email Marketing Support",
    description: "Nurture campaigns and follow-up email sequences that keep leads warm and engaged."
  },
  {
    icon: "📈",
    title: "Performance Reporting",
    description: "Clear monthly analysis so you understand what is working, what needs improvement, and where to scale."
  }
];

export function createServicesPage() {
  const cards = services.map(service => `
    <article class="svc-card">
      <div class="svc-icon">${service.icon}</div>
      <h3>${service.title}</h3>
      <p>${service.description}</p>
    </article>
  `).join("");

  return `
    <main>
            <section class="page-hero">
        <div class="page-hero-inner">
          <div class="page-hero-left">
            <span class="section-tag">Services</span>
            <h1 class="section-title">Full-Service Marketing Support for Growing Brands</h1>
            <p class="section-text">Our services are built to improve awareness, strengthen communication, and increase conversions through better digital execution.</p>
          </div>
          <div class="page-hero-deco"><div class="page-hero-stat"><strong>6</strong><span>Core Services</span></div><div class="page-hero-stat"><strong>Strategy</strong><span>Led Approach</span></div><div class="page-hero-stat"><strong>Proven</strong><span>Execution</span></div></div>
        </div>
      </section>

      <section class="section">
        <div class="container split-grid">
          <div class="image-frame">
            <img src="images/services-social-media.jpg" alt="Person using laptop for social media marketing and content creation" />
          </div>
          <div class="content-card">
            <span class="section-tag">What We Do</span>
            <h2 class="section-title">Creative Execution Backed by Strategy</h2>
            <p class="section-text">
              We help brands build a stronger online presence through social media management,
              branded content, performance marketing, and conversion-focused systems.
            </p>
            <p class="section-text">
              Our service approach combines creativity, consistency, and measurable performance
              so your business can grow with confidence.
            </p>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <span class="section-tag">What We Offer</span>
          <h2 class="section-title">Six Services, One Cohesive Growth System</h2>
          <p class="section-text">Every service is designed to work together — so your marketing is connected, not scattered.</p>
          <div class="svc-grid">
            ${cards}
          </div>
        </div>
      </section>

      ${createCtaBanner({
        eyebrow: "Get Started",
        title: "Not Sure Which Services You Need?",
        subtitle: "Book a free strategy call and we'll help you identify the right services and starting point for your business goals.",
        email: true,
        btnText: "Book a Free Strategy Call"
      })}
    </main>
  `;
}
