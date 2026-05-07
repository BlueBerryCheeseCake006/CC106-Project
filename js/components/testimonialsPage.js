import { createCtaBanner } from "./ctaBanner.js";
const testimonials = [
  {
    quote: "Sulong completely transformed our brand visibility. We went from struggling to generate leads to scaling faster than we imagined.",
    name: "Sarah Lim",
    role: "CEO, GlowWell Naturals",
    image: "images/testimonial-female.svg"
  },
  {
    quote: "Our ad campaigns finally started converting. The Sulong team knows exactly how to target the right audience.",
    name: "Daniel Torres",
    role: "Founder, UrbanFit Gym",
    image: "images/testimonial-male.svg"
  },
  {
    quote: "They brought structure to our content and clarity to our messaging. Everything started feeling more professional.",
    name: "Maya Chen",
    role: "Owner, Bloom Studio",
    image: "images/testimonial-female.svg"
  },
  {
    quote: "From content planning to ad execution, Sulong made our marketing feel organized, intentional, and measurable.",
    name: "Rina Castillo",
    role: "Owner, The Wellness Edit",
    image: "images/testimonial-female.svg"
  },
  {
    quote: "The reporting and campaign adjustments were incredibly helpful. We always knew what was working and why.",
    name: "James Ortiz",
    role: "Director, Prime Reach Co.",
    image: "images/testimonial-male.svg"
  },
  {
    quote: "Working with Sulong gave us a clearer strategy and stronger results across our digital campaigns.",
    name: "Alyssa Fernandez",
    role: "Marketing Manager, BrightPath Studio",
    image: "images/testimonial-female.svg"
  },
  {
    quote: "Their team understood our brand quickly and helped us create campaigns that actually connected with our audience.",
    name: "Kevin Morales",
    role: "Co-Founder, Elevate Commerce",
    image: "images/testimonial-male.svg"
  },
    {
    quote: "We saw stronger engagement, more qualified leads, and a much more professional online presence after working with them.",
    name: "Marcus Rivera",
    role: "CEO, NorthPeak Consulting",
    image: "images/testimonial-male.svg"
  }

];

export function createTestimonialsPage() {
  const cards = testimonials.map(item => `
    <article class="testimonial-card">
      <p>“${item.quote}”</p>
      <div class="author">
        <img src="${item.image}" alt="${item.name}" />
        <div>
          <strong>${item.name}</strong>
          <span>${item.role}</span>
        </div>
      </div>
    </article>
  `).join("");

  return `
    <main>
            <section class="page-hero">
        <div class="page-hero-inner">
          <div class="page-hero-left">
            <span class="section-tag">Testimonials</span>
            <h1 class="section-title">What Clients Say About Working With Sulong</h1>
            <p class="section-text">These testimonials reflect the impact of strategy-led execution, consistent communication, and performance-focused campaigns.</p>
          </div>
          <div class="page-hero-deco"><div class="page-hero-stat"><strong>8+</strong><span>Happy Clients</span></div><div class="page-hero-stat"><strong>3</strong><span>Industries Served</span></div><div class="page-hero-stat"><strong>Real</strong><span>Verified Results</span></div></div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="testimonials-grid">
            ${cards}
          </div>
        </div>
      </section>

      ${createCtaBanner({
        eyebrow: "Join Them",
        title: "Your Brand Could Be the Next Success Story",
        subtitle: "These clients trusted us with their growth — and we delivered. Let's have a conversation about what we can build together.",
        email: true,
        btnText: "Book a Free Strategy Call"
      })}
    </main>
  `;
}