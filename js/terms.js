import { createHeader } from "./components/header.js";
import { initHeader } from "./components/header.js";
import { createFooter } from "./components/footer.js";
import { createTermsPage } from "./components/termsPage.js";
import { initBackToTop } from "./backToTop.js";

const app = document.getElementById("app");
app.innerHTML = `
  ${createHeader("")}
  ${createTermsPage()}
  ${createFooter()}
`;
initHeader();
initBackToTop();
