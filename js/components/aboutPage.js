import { createCtaBanner } from "./ctaBanner.js";
export function createAboutPage() {
  return `
    <main>

            <section class="page-hero">
        <div class="page-hero-inner">
          <div class="page-hero-left">
            <span class="section-tag">About Us</span>
            <h1 class="section-title">Helping Brands Move Forward with Clarity, Strategy, and Purpose</h1>
            <p class="section-text">We help businesses grow through structured digital marketing systems designed to improve visibility, strengthen engagement, and turn attention into measurable results.</p>
          </div>
          <div class="page-hero-deco"><div class="page-hero-stat"><strong>4-Step</strong><span>Our Process</span></div><div class="page-hero-stat"><strong>3 Pillars</strong><span>Strategy, Execution, Results</span></div><div class="page-hero-stat"><strong>100%</strong><span>Growth Focused</span></div></div>
        </div>
      </section>

      <section class="section about-section">
        <div class="container split-grid">

          <div class="about-image-wrap">
            <div class="image-frame about-image">
              <img
                src="images/about-marketing-strategy.jpg"
                alt="Marketing team presenting strategy and analytics"
              />
            </div>
          </div>

          <div class="content-card">
            <span class="section-tag">Who We Are</span>

            <h2 class="section-title">
              A Team Focused on Results, Not Just Reach
            </h2>

            <p class="section-text">
              The word “Sulong” means to move forward — and that idea guides everything we do.
              Our goal is not simply to create attractive marketing content, but to build structured
              systems that support visibility, engagement, lead generation, and conversion.
            </p>

            <p class="section-text">
              We work with startups, growing businesses, and modern brands that want more than random
              posting or short-term tactics. They want a clear strategy, consistent execution, and a
              marketing partner who understands how to align creative work with business growth.
            </p>

            <div class="feature-list">
              <div class="feature-item">
                <div class="number">1</div>
                <div>
                  We connect branding, strategy, and audience targeting into one clear growth system.
                </div>
              </div>

              <div class="feature-item">
                <div class="number">2</div>
                <div>
                  We focus on creative execution that also supports measurable marketing performance.
                </div>
              </div>

              <div class="feature-item">
                <div class="number">3</div>
                <div>
                  We help businesses grow with consistency, clarity, and confidence.
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section class="section">
        <div class="container split-grid">

          <div class="content-card">
            <span class="section-tag">Our Mission</span>
            <h2 class="section-title">To Turn Digital Marketing Into a Reliable Growth Engine</h2>
            <p class="section-text">
              Many businesses struggle because their marketing feels disconnected. Their social media looks active
              but does not create real momentum. Their ads spend money but do not produce enough return. Their
              messaging sounds generic and fails to build trust with the right audience.
            </p>
            <p class="section-text">
              Our mission is to solve that problem by creating marketing systems that are strategic, intentional,
              and scalable. We help brands communicate clearly, position themselves more effectively, and build
              campaigns that support real business goals instead of vanity metrics alone.
            </p>
          </div>

          <div class="content-card">
            <span class="section-tag">Our Vision</span>
            <h2 class="section-title">To Be a Trusted Growth Partner for Ambitious Brands</h2>
            <p class="section-text">
              We believe the best agencies are not just service providers — they are strategic partners.
              That means understanding the client’s goals, identifying the right growth opportunities,
              and building a system that continues to improve over time.
            </p>
            <p class="section-text">
              Our vision is to help businesses move forward with stronger positioning, better digital execution,
              and more confidence in how their marketing supports long-term growth.
            </p>
          </div>

        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="content-card">
            <span class="section-tag">How We Work</span>
            <h2 class="section-title">A Clear Process Built Around Strategy and Execution</h2>

            <div class="feature-list">
              <div class="feature-item">
                <div class="number">1</div>
                <div>
                  <strong>Discovery and Brand Understanding</strong><br />
                  We start by understanding your business, audience, goals, offers, and current digital presence.
                  This helps us identify what is working, what is missing, and where the strongest opportunities are.
                </div>
              </div>

              <div class="feature-item">
                <div class="number">2</div>
                <div>
                  <strong>Strategy Development</strong><br />
                  We build a marketing direction based on positioning, messaging, content structure, and channel priorities.
                  The goal is to ensure every campaign supports business growth rather than disconnected activity.
                </div>
              </div>

              <div class="feature-item">
                <div class="number">3</div>
                <div>
                  <strong>Creative Execution</strong><br />
                  From social media content and branded visuals to ads and landing page messaging, we execute with
                  consistency so your brand feels stronger and more professional across every touchpoint.
                </div>
              </div>

              <div class="feature-item">
                <div class="number">4</div>
                <div>
                  <strong>Optimization and Reporting</strong><br />
                  We monitor performance, review data, and refine execution so your marketing continues to improve.
                  This keeps your growth system practical, measurable, and adaptable over time.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container split-grid">

          <div class="content-card">
            <span class="section-tag">What Makes Us Different</span>
            <h2 class="section-title">Not Just More Marketing — Better Marketing</h2>
            <p class="section-text">
              What makes Sulong Marketing Solutions different is our ability to connect creative work with strategic intent.
              We do not believe in posting for the sake of activity or running campaigns without clear purpose.
            </p>
            <p class="section-text">
              Every piece of content, every message, and every campaign should help move the brand forward.
              That is why our work focuses on systems, structure, consistency, and measurable outcomes.
            </p>
          </div>

          <div class="content-card">
            <span class="section-tag">Our Standards</span>
            <h2 class="section-title">Professional, Reliable, and Growth-Oriented</h2>
            <p class="section-text">
              We aim to be the kind of partner clients can trust with both creative execution and strategic thinking.
              That means being organized, responsive, detail-oriented, and committed to quality.
            </p>
            <p class="section-text">
              We value clear communication, responsible execution, and marketing decisions grounded in business goals.
              Reliability matters just as much as creativity, and both are essential to building long-term success.
            </p>
          </div>

        </div>
      </section>

      ${createCtaBanner({
        eyebrow: "Work With Us",
        title: "Ready to Move Your Brand Forward?",
        subtitle: "Let's build a structured marketing system that creates real visibility, better engagement, and consistent growth for your business.",
        email: true,
        btnText: "Start the Conversation"
      })}
    </main>
  `;
}