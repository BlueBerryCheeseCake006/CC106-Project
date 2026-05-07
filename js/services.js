import { createHeader } from "./components/header.js";
import { initHeader } from "./components/header.js";
import { createFooter } from "./components/footer.js";
import { createServicesPage } from "./components/servicesPage.js";
import { initBackToTop } from "./backToTop.js";

const app = document.getElementById("app");

app.innerHTML = `
  ${createHeader("services")}
  ${createServicesPage()}
  ${createFooter()}
`;

initHeader();
initBackToTop();
