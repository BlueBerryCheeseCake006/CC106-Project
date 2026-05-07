import { createHeader } from "./components/header.js";
import { initHeader } from "./components/header.js";
import { createFooter } from "./components/footer.js";
import { createAboutPage } from "./components/aboutPage.js";
import { initBackToTop } from "./backToTop.js";

const app = document.getElementById("app");

app.innerHTML = `
  ${createHeader("about")}
  ${createAboutPage()}
  ${createFooter()}
`;

initHeader();
initBackToTop();
