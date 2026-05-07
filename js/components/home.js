const servicesPreview = [
  {
    icon: "📱",
    title: "Social Media Management",
    description: "Strategic publishing and engagement designed to grow your audience consistently."
  },
  {
    icon: "🎨",
    title: "Content Creation",
    description: "Visual assets and messaging that make your brand more memorable."
  },
  {
    icon: "📢",
    title: "Paid Advertising",
    description: "Campaigns built to reach the right audience and improve ROI."
  },
  {
    icon: "📊",
    title: "Funnels & Leads",
    description: "Conversion systems that turn attention into customers."
  }
];

const testimonialsPreview = [
  {
    quote: "Sulong completely transformed our brand visibility. We scaled faster than we imagined.",
    name: "Sarah Lim",
    role: "CEO, GlowWell Naturals",
    image: "images/testimonial-female.svg"
  },
  {
    quote: "Our campaigns finally started converting. Their strategy made a real difference.",
    name: "Daniel Torres",
    role: "Founder, UrbanFit Gym",
    image: "images/testimonial-male.svg"
  }
];

export function createHomePage() {
  const serviceCards = servicesPreview.map(service => `
    <article class="service-card">
      <div class="service-icon">${service.icon}</div>
      <h3>${service.title}</h3>
      <p>${service.description}</p>
    </article>
  `).join("");

  const testimonialCards = testimonialsPreview.map(item => `
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
      <section class="hero">
        <div class="container hero-grid">
          <div>
            <span class="section-tag">Growth Marketing Agency</span>
            <h1 class="hero-title">We Turn Social Media Into <span>Lead-Generating Machines</span></h1>
            <p class="hero-text">
              Sulong Marketing Solutions helps startups and growing businesses build stronger brand visibility,
              better engagement, and reliable customer acquisition through strategic digital campaigns.
            </p>

            <div class="btn-row">
              <a class="btn btn-primary" href="contact.html">Get a Free Strategy Call</a>
              <a class="btn btn-secondary" href="case-studies.html">View Case Studies</a>
            </div>

            <div class="hero-metrics">
              <div class="metric-card">
                <strong>300%</strong>
                <span>Engagement growth delivered</span>
              </div>
              <div class="metric-card">
                <strong>2,400+</strong>
                <span>Qualified leads generated</span>
              </div>
              <div class="metric-card">
                <strong>8,500+</strong>
                <span>Audience growth achieved</span>
              </div>
            </div>
          </div>

          <div class="hero-card">
            <img class="hero-image" src="images/hero-image.jpg" alt="Digital marketing analytics dashboard on laptop" />

            <div class="floating-box floating-top">
              <strong>Campaign Strategy</strong>
              <span>Audience targeting, funnel planning, and conversion optimization.</span>
            </div>

            <div class="floating-box floating-bottom">
              <strong>Performance Focused</strong>
              <span>Built to turn attention into inquiries, leads, and sales.</span>
            </div>
          </div>
        </div>

        <div class="container trust-strip">
          <div class="trust-grid">
            <div class="trust-item">Data-Driven Strategies</div>
            <div class="trust-item">Creative Brand Positioning</div>
            <div class="trust-item">Paid Ad Optimization</div>
            <div class="trust-item">Conversion-Focused Execution</div>
          </div>
        </div>
      </section>

<section class="section home-about-section">
  <div class="container">
    <div class="home-about">
      <div class="home-about-img">
        <img src="images/about-marketing-strategy.jpg" alt="Marketing team presenting strategy" />
      </div>
      <div class="home-about-content">
        <span class="section-tag">Who We Are</span>
        <h2 class="section-title">A Team Focused on Results, Not Just Reach</h2>
        <p class="section-text">The word "Sulong" means to move forward. We build structured marketing systems that drive visibility, engagement, and real conversions — not just attractive content.</p>
        <div class="home-about-points">
          <div class="home-about-point"><span class="home-about-num">1</span><span>Branding, strategy, and targeting connected into one growth system.</span></div>
          <div class="home-about-point"><span class="home-about-num">2</span><span>Creative execution that also supports measurable performance.</span></div>
          <div class="home-about-point"><span class="home-about-num">3</span><span>Growth with more consistency, clarity, and confidence.</span></div>
        </div>
        <a class="btn btn-primary" href="about.html">Read Full About Page</a>
      </div>
    </div>
  </div>
</section>

      <section class="section">
        <div class="container">
          <span class="section-tag">Services Preview</span>
          <h2 class="section-title">High-Impact Services for Modern Brands</h2>
          <p class="section-text">
            Our service structure is designed around strategy, visibility, and conversion.
          </p>

          <div class="services-grid">
            ${serviceCards}
          </div>

          <div class="btn-row">
            <a class="btn btn-primary" href="services.html">View All Services</a>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <span class="section-tag">Case Studies</span>
          <h2 class="section-title">Brands We've Helped <span>Grow</span></h2>
          <p class="section-text">
            Strategy-led campaigns that delivered real, measurable results for three very different businesses.
          </p>

          <div class="cs-preview-grid">

            <a href="case-studies.html" class="cs-preview-card">
              <div class="cs-preview-img">
                <img src="images/GlowWell-Naturals1.png" alt="GlowWell Naturals" />
                <div class="cs-preview-tag">E-Commerce Brand</div>
              </div>
              <div class="cs-preview-body">
                <h3>GlowWell Naturals</h3>
                <p class="cs-preview-tagline">A clean-beauty brand crafting organic skincare from botanical extracts to nourish your natural radiance sustainably.</p>
                <div class="cs-preview-stats">
                  <div class="cs-preview-stat"><strong>300%</strong><span>Engagement</span></div>
                  <div class="cs-preview-stat"><strong>2,400+</strong><span>Leads</span></div>
                  <div class="cs-preview-stat"><strong>8,500+</strong><span>Followers</span></div>
                </div>
              </div>
            </a>

            <a href="case-studies.html" class="cs-preview-card">
              <div class="cs-preview-img">
                <img src="images/UrbanFit-Gym1.png" alt="UrbanFit Gym" />
                <div class="cs-preview-tag">Fitness Business</div>
              </div>
              <div class="cs-preview-body">
                <h3>UrbanFit Gym</h3>
                <p class="cs-preview-tagline">A high-performance urban fitness center offering elite equipment and recovery tools for the modern city athlete.</p>
                <div class="cs-preview-stats">
                  <div class="cs-preview-stat"><strong>4.2x</strong><span>ROAS</span></div>
                  <div class="cs-preview-stat"><strong>65%</strong><span>Lower CPL</span></div>
                  <div class="cs-preview-stat"><strong>180%</strong><span>Conversions</span></div>
                </div>
              </div>
            </a>

            <a href="case-studies.html" class="cs-preview-card">
              <div class="cs-preview-img">
                <img src="images/Bloom-Studio1.png" alt="Bloom Studio" />
                <div class="cs-preview-tag">Creative Business</div>
              </div>
              <div class="cs-preview-body">
                <h3>Bloom Studio</h3>
                <p class="cs-preview-tagline">A curated creative sanctuary specializing in botanical-inspired art, design workshops, and handcrafted aesthetic experiences.</p>
                <div class="cs-preview-stats">
                  <div class="cs-preview-stat"><strong>220%</strong><span>Engagement</span></div>
                  <div class="cs-preview-stat"><strong>3x</strong><span>Inquiries</span></div>
                  <div class="cs-preview-stat"><strong>90%</strong><span>Consistency</span></div>
                </div>
              </div>
            </a>

          </div>

          <div class="btn-row">
            <a class="btn btn-primary" href="case-studies.html">View Full Case Studies</a>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <span class="section-tag">Testimonials Preview</span>
          <h2 class="section-title">What Clients Say</h2>
          <p class="section-text">
            Results-backed work creates stronger trust and better long-term partnerships.
          </p>

          <div class="testimonials-grid">
            ${testimonialCards}
          </div>

          <div class="btn-row">
            <a class="btn btn-primary" href="testimonials.html">Read More Testimonials</a>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="contact-card">
            <span class="section-tag">Ready to Grow?</span>
            <h2 class="section-title">Let’s Build a Marketing System That Works for You</h2>
            <p class="section-text">
              Book a free strategy call and let’s map out a smarter digital marketing plan for your business.
            </p>

            <div class="btn-row">
              <a class="btn btn-primary" href="contact.html">Go to Contact Page</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  `;
}