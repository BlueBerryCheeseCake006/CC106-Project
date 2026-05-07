import { createHeader } from "./components/header.js";
import { initHeader } from "./components/header.js";
import { createFooter } from "./components/footer.js";
import { createFaqPage } from "./components/faqPage.js";
import { initFaq } from "./components/faqPage.js";
import { initBackToTop } from "./backToTop.js";

const app = document.getElementById("app");

app.innerHTML = `
  ${createHeader("")}
  ${createFaqPage()}
  ${createFooter()}
`;

initHeader();
initFaq();
initBackToTop();
