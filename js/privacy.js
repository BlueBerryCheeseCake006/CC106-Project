import { createHeader } from "./components/header.js";
import { initHeader } from "./components/header.js";
import { createFooter } from "./components/footer.js";
import { createPrivacyPage } from "./components/privacyPage.js";
import { initBackToTop } from "./backToTop.js";

const app = document.getElementById("app");
app.innerHTML = `
  ${createHeader("")}
  ${createPrivacyPage()}
  ${createFooter()}
`;
initHeader();
initBackToTop();
