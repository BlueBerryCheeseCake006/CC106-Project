import { createCtaBanner } from "./ctaBanner.js";
const services = [
  {
    icon: "📱",
    title: "Social Media Management",
    description: "Planning, scheduling, publishing, and audience engagement built to improve consistency and organic brand growth.",
    detailIntro: "Social management today is not just posting. It is a structured system that connects brand positioning, community care, content planning, and channel performance to business goals.",
    includes: [
      "Monthly channel strategy based on audience behavior, content themes, and campaign priorities",
      "Platform-specific content calendars with approval flow, publishing cadence, and optimization notes",
      "Community management support for comments, direct messages, and key conversation touchpoints",
      "Performance reviews focused on high-value actions like shares, saves, replies, and conversions"
    ],
    outcomes: "The result is a stronger brand voice, more consistent publishing, and a social presence that supports awareness, trust, and demand generation over time."
  },
  {
    icon: "🎨",
    title: "Content Creation & Branding",
    description: "Graphics, caption writing, messaging, and visual systems that improve recognition and trust.",
    detailIntro: "Great content performs when it is both creative and strategic. We design assets and messaging frameworks that feel native to each platform while protecting brand consistency.",
    includes: [
      "Branded visual direction for static posts, carousels, short-form video concepts, and campaign launches",
      "Copywriting support for hooks, captions, CTAs, and story-driven post structures",
      "Messaging pillars to keep your communication consistent across awareness, education, and offer content",
      "Reusable content templates so production is faster without sacrificing quality"
    ],
    outcomes: "This gives your brand a recognizable identity in the feed and improves content efficiency, engagement quality, and conversion readiness."
  },
  {
    icon: "📢",
    title: "Paid Advertising Campaigns",
    description: "Facebook, Instagram, and TikTok ads designed for reach, targeting precision, and measurable ROI.",
    detailIntro: "Paid media works best when audience targeting, creative, and landing experience are tightly connected. We build ad systems designed for both performance and learning.",
    includes: [
      "Campaign architecture for prospecting, retargeting, and conversion stages",
      "Audience and interest segmentation with exclusions to reduce wasted spend",
      "Creative testing framework for headlines, formats, offers, and CTA angles",
      "Landing page alignment and optimization to improve conversion rate and lower cost per result"
    ],
    outcomes: "You get clearer attribution, stronger ROAS potential, and better budget efficiency through ongoing optimization and test-driven decisions."
  },
  {
    icon: "📊",
    title: "Lead Generation & Funnels",
    description: "Landing pages, inquiry systems, and follow-up journeys that convert traffic into customers.",
    detailIntro: "Traffic alone does not create growth. Funnel systems do. We design customer journeys that move people from first click to qualified inquiry with less friction.",
    includes: [
      "Conversion-focused landing pages structured around offer clarity, trust signals, and strong calls to action",
      "Lead capture setup using forms, booking flows, and inquiry routing",
      "Funnel mapping from awareness content to conversion events and follow-up stages",
      "Drop-off analysis and conversion improvements across key journey steps"
    ],
    outcomes: "The outcome is a more predictable lead flow and a smoother path from attention to booked calls, signups, or sales conversations."
  },
  {
    icon: "📬",
    title: "Email Marketing Support",
    description: "Nurture campaigns and follow-up email sequences that keep leads warm and engaged.",
    detailIntro: "Email remains one of the highest-leverage owned channels for retention and conversion. We create sequences that guide leads and customers with relevant, timely communication.",
    includes: [
      "Welcome, nurture, and re-engagement flows based on audience stage and intent",
      "Campaign planning for launches, promotions, and evergreen value content",
      "Segmentation strategy to personalize messaging by behavior, interest, or lifecycle stage",
      "Subject line and message testing to improve open rate, click-through rate, and response quality"
    ],
    outcomes: "This helps you build trust between touchpoints, recover missed opportunities, and improve conversion value from your existing audience."
  },
  {
    icon: "📈",
    title: "Performance Reporting",
    description: "Clear monthly analysis so you understand what is working, what needs improvement, and where to scale.",
    detailIntro: "Reporting should do more than list numbers. It should explain what happened, why it happened, and what to do next. We translate channel data into action-focused recommendations.",
    includes: [
      "Monthly reporting dashboards for social, paid ads, lead flow, and conversion performance",
      "KPI tracking tied to business outcomes, not vanity metrics alone",
      "Creative and campaign analysis showing top-performing themes and underperforming areas",
      "Prioritized next-step roadmap so your team knows exactly what to test, optimize, and scale"
    ],
    outcomes: "You get decision-ready visibility, faster optimization cycles, and confidence in where to focus budget, effort, and creative direction."
  }
];

function buildServiceModalContent(service) {
  const includeItems = service.includes.map(item => `<li>${item}</li>`).join("");

  return `
    <div class="svc-modal-head">
      <div class="svc-icon">${service.icon}</div>
      <div>
        <p class="svc-modal-kicker">Service Breakdown</p>
        <h3 id="svc-modal-title">${service.title}</h3>
      </div>
    </div>

    <p class="svc-modal-intro">${service.detailIntro}</p>

    <div class="svc-modal-block">
      <h4>What's Included</h4>
      <ul>${includeItems}</ul>
    </div>

    <div class="svc-modal-block">
      <h4>Expected Impact</h4>
      <p>${service.outcomes}</p>
    </div>
  `;
}

export function createServicesPage() {
  const cards = services.map((service, index) => `
    <article class="svc-card" role="button" tabindex="0" data-svc-open="${index}" aria-haspopup="dialog" aria-label="View details for ${service.title}">
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

      <div class="svc-modal" id="svc-modal" aria-hidden="true">
        <div class="svc-modal-backdrop" data-svc-close></div>
        <div class="svc-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="svc-modal-title">
          <button class="svc-modal-close" type="button" data-svc-close aria-label="Close service details">×</button>
          <div class="svc-modal-content" id="svc-modal-content"></div>
        </div>
      </div>

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

export function initServicesPage() {
  const cards = document.querySelectorAll(".svc-card[data-svc-open]");
  const modal = document.getElementById("svc-modal");
  const modalContent = document.getElementById("svc-modal-content");

  if (!cards.length || !modal || !modalContent) return;

  const closeModal = () => {
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("svc-modal-open");
  };

  const openModal = (index) => {
    const service = services[index];
    if (!service) return;

    modalContent.innerHTML = buildServiceModalContent(service);
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("svc-modal-open");
  };

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const index = Number(card.getAttribute("data-svc-open"));
      openModal(index);
    });

    card.addEventListener("keydown", (event) => {
      const isActivationKey = event.key === "Enter" || event.key === " ";
      if (!isActivationKey) return;

      event.preventDefault();
      const index = Number(card.getAttribute("data-svc-open"));
      openModal(index);
    });
  });

  modal.addEventListener("click", (event) => {
    const closeTrigger = event.target.closest("[data-svc-close]");
    if (closeTrigger) closeModal();
  });

  document.addEventListener("keydown", (event) => {
    const isOpen = modal.getAttribute("aria-hidden") === "false";
    if (isOpen && event.key === "Escape") {
      closeModal();
    }
  });
}
