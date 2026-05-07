const REVEAL_SELECTORS = [
  "main .page-hero",
  "main .section > .container",
  "main .service-card",
  "main .testimonial-card",
  "main .faq-item",
  "main .policy-card",
  "main .csc-card",
  "main .contact-card",
  "main .home-about",
  "main .case-card",
  "footer"
];

const IMAGE_REVEAL_SELECTORS = [
  ".hero-card",
  ".image-frame",
  ".csc-image",
  ".case-study-ref-image",
  ".home-about-img",
  ".case-card"
];

function collectRevealTargets() {
  const seen = new Set();
  const elements = [];

  REVEAL_SELECTORS.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el) => {
      if (!seen.has(el)) {
        seen.add(el);
        elements.push(el);
      }
    });
  });

  return elements;
}

function collectImageTargets() {
  const seen = new Set();
  const images = [];

  IMAGE_REVEAL_SELECTORS.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el) => {
      if (!seen.has(el)) {
        seen.add(el);
        images.push(el);
      }
    });
  });

  return images;
}

export function initScrollReveal() {
  const elements = collectRevealTargets();
  const images = collectImageTargets();
  const allTargets = [...new Set([...elements, ...images])];
  if (allTargets.length === 0) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  allTargets.forEach((el, index) => {
    el.classList.add("reveal-on-scroll");
    const delay = Math.min(index * 18, 110);
    el.style.setProperty("--reveal-delay", `${delay}ms`);
  });

  images.forEach((el) => {
    el.classList.add("reveal-image");
  });

  if (reduceMotion || !("IntersectionObserver" in window)) {
    allTargets.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      });
    },
    {
      root: null,
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.12
    }
  );

  allTargets.forEach((el) => observer.observe(el));
}
