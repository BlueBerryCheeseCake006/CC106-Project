import { initScrollReveal } from "./scrollReveal.js";

export function initBackToTop() {
  initScrollReveal();

  const button = document.getElementById("backToTop");

  if (!button) return;

  const toggleButton = () => {
    if (window.scrollY > 300) {
      button.classList.add("show");
    } else {
      button.classList.remove("show");
    }
  };

  window.addEventListener("scroll", toggleButton);

  button.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  toggleButton();
}