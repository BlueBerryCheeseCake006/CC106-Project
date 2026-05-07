import { createHeader } from "./components/header.js";
import { initHeader } from "./components/header.js";
import { createFooter } from "./components/footer.js";
import { createHomePage } from "./components/home.js";
import { initBackToTop } from "./backToTop.js";

const app = document.getElementById("app");

app.innerHTML = `
  ${createHeader("home")}
  ${createHomePage()}
  ${createFooter()}
`;

initHeader();
initBackToTop();
