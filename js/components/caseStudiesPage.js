import { createCtaBanner } from "./ctaBanner.js";

const cases = [
  {
    tag: "E-Commerce Brand",
    name: "GlowWell Naturals",
    tagline: "A clean-beauty brand crafting organic skincare from botanical extracts to nourish your natural radiance sustainably.",
    image: "images/GlowWell-Naturals1.png",
    problem: "Low engagement, inconsistent branding, and poor lead conversion despite active posting and regular promotions.",
    strategy: "Rebuilt their content structure, aligned messaging with the right audience, and introduced a funnel-based paid ad strategy.",
    execution: ["Rebranded social visuals and messaging","Introduced a weekly content production system","Launched targeted Facebook and Instagram ads","Optimized landing pages for lead conversion"],
    metrics: [{ value: "300%", label: "Engagement" },{ value: "2,400+", label: "Leads" },{ value: "420%+", label: "Follower Growth" }],
    takeaway: "Structured strategy transformed their social media into a reliable lead-generation system.",
    cta: "Get Results Like This"
  },
  {
    tag: "Fitness Business",
    name: "UrbanFit Gym",
    tagline: "A high-performance urban fitness center offering elite equipment and recovery tools for the modern city athlete.",
    image: "images/UrbanFit-Gym1.png",
    problem: "Spending heavily on ads but getting weak results due to overly broad targeting and generic messaging.",
    strategy: "Refined audience targeting, upgraded ad creatives, and designed a more conversion-focused customer journey.",
    execution: ["Redesigned ad creatives and copywriting","Segmented audiences by interest and buyer intent","Built a dedicated landing page funnel","Implemented A/B testing for efficiency"],
    metrics: [{ value: "4.2x", label: "ROAS" },{ value: "65%", label: "Lower CPL" },{ value: "180%", label: "Conversions" }],
    takeaway: "Better targeting and stronger messaging dramatically improved ad performance without increasing spend.",
    cta: "Book a Consultation"
  },
  {
    tag: "Creative Business",
    name: "Bloom Studio",
    tagline: "A curated creative sanctuary specializing in botanical-inspired art, design workshops, and handcrafted aesthetic experiences.",
    image: "images/Bloom-Studio1.png",
    problem: "Strong creative work but no clear online strategy or consistent digital presence to attract the right clients.",
    strategy: "Focused on brand clarity, stronger storytelling, and a content system that positioned their work more effectively.",
    execution: ["Refined brand messaging and market positioning","Created a structured monthly content calendar","Designed consistent visuals and campaign formats","Improved engagement workflows and response strategy"],
    metrics: [{ value: "220%", label: "Engagement" },{ value: "3x", label: "Inquiries" },{ value: "90%", label: "Consistency" }],
    takeaway: "Clear positioning and stronger storytelling made their creative work easier to sell and scale.",
    cta: "Build Your Strategy"
  }
];

function buildCard(c) {
  const exec = c.execution.map(e => `<li>${e}</li>`).join("");
  const metrics = c.metrics.map(m => `
    <div class="csc-metric">
      <strong>${m.value}</strong>
      <span>${m.label}</span>
    </div>`).join("");

  return `
    <article class="csc-card">

      <div class="csc-image">
        <img src="${c.image}" alt="${c.name}" loading="lazy" />
        <span class="csc-badge">${c.tag}</span>
      </div>

      <div class="csc-body">
        <header class="csc-header">
          <h2 class="csc-name">${c.name}</h2>
          <p class="csc-tagline">${c.tagline}</p>
        </header>

        <div class="csc-metrics">${metrics}</div>

        <div class="csc-details">
          <div class="csc-detail">
            <div class="csc-detail-label">
              <i class="fa-solid fa-circle-exclamation"></i> Problem
            </div>
            <p>${c.problem}</p>
          </div>
          <div class="csc-detail">
            <div class="csc-detail-label">
              <i class="fa-solid fa-lightbulb"></i> Strategy
            </div>
            <p>${c.strategy}</p>
          </div>
          <div class="csc-detail">
            <div class="csc-detail-label">
              <i class="fa-solid fa-bolt"></i> Execution
            </div>
            <ul class="csc-exec">${exec}</ul>
          </div>
        </div>

        <footer class="csc-footer">
          <div class="csc-takeaway">
            <i class="fa-solid fa-quote-left"></i>
            <span>${c.takeaway}</span>
          </div>
          <a class="btn btn-primary csc-btn" href="contact.html">${c.cta}</a>
        </footer>
      </div>

    </article>`;
}

export function createCaseStudiesPage() {
  const cards = cases.map(buildCard).join("");
  return `
    <main>
            <section class="page-hero">
        <div class="page-hero-inner">
          <div class="page-hero-left">
            <span class="section-tag">Case Studies</span>
            <h1 class="section-title">Real Results From Strategy-Led Marketing</h1>
            <p class="section-text">See how structured strategy and creative execution helped three very different brands grow faster.</p>
          </div>
          <div class="page-hero-deco"><div class="page-hero-stat"><strong>300%</strong><span>Engagement Growth</span></div><div class="page-hero-stat"><strong>2,400+</strong><span>Leads Generated</span></div><div class="page-hero-stat"><strong>4.2x</strong><span>ROAS Increase</span></div></div>
        </div>
      </section>

      <section class="section">
        <div class="container csc-stack">${cards}</div>
      </section>

      ${createCtaBanner({
        eyebrow: "Your Turn",
        title: "Ready to Write Your Own Success Story?",
        subtitle: "Every brand here started with a single conversation. Let's have yours — no commitment, just clarity.",
        email: true,
        btnText: "Book a Free Strategy Call"
      })}
    </main>`;
}

export function initCaseStudies() {}
