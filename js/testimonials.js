import { createHeader } from "./components/header.js";
import { initHeader } from "./components/header.js";
import { createFooter } from "./components/footer.js";
import { createTestimonialsPage } from "./components/testimonialsPage.js";
import { initBackToTop } from "./backToTop.js";

const app = document.getElementById("app");

app.innerHTML = `
  ${createHeader("testimonials")}
  ${createTestimonialsPage()}
  ${createFooter()}
`;

initHeader();
initBackToTop();
