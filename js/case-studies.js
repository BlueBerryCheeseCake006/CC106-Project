import { createHeader } from "./components/header.js";
import { initHeader } from "./components/header.js";
import { createFooter } from "./components/footer.js";
import { createCaseStudiesPage } from "./components/caseStudiesPage.js";
import { initCaseStudies } from "./components/caseStudiesPage.js";
import { initBackToTop } from "./backToTop.js";

const app = document.getElementById("app");

app.innerHTML = `
  ${createHeader("case-studies")}
  ${createCaseStudiesPage()}
  ${createFooter()}
`;

initHeader();
initCaseStudies();
initBackToTop();
