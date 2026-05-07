import { createHeader } from "./components/header.js";
import { initHeader } from "./components/header.js";
import { createFooter } from "./components/footer.js";
import { createContactPage } from "./components/contactPage.js";
import { initContact } from "./components/contactPage.js";
import { initBackToTop } from "./backToTop.js";

const app = document.getElementById("app");

app.innerHTML = `
  ${createHeader("contact")}
  ${createContactPage()}
  ${createFooter()}
`;

initHeader();
initContact();
initBackToTop();
