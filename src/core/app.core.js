// path: ./src/app.core.js
import { Router, Renderer } from "./router";
import { MetaManager } from "./meta-manager"; // Make sure to import MetaManager

// Initialize modules
const router = new Router();
const renderer = new Renderer();
const metaManager = new MetaManager(); // Instantiate MetaManager

// Handle routing events
router.onNavigate((path, name, element) => {
  renderer.renderPage(path, name, element);
  metaManager.updateMetaDescription(name); // Use metaManager here
});

document.addEventListener("DOMContentLoaded", () => {
  const router = new Router();
  const renderer = new Renderer();

  // Handle routing events
  router.onNavigate((path, name, element) => {
    renderer.renderPage(path, name, element);
    metaManager.updateMetaDescription(name); // Use metaManager here
  });
});
