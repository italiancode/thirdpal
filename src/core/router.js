import page from "page";
import { Renderer } from "./renderer";
import { page_config } from "./routes";

class Router {
  constructor() {
    this.renderer = new Renderer();
    this.listeners = []; // Initialize the listeners array

    this.breadcrumbs = [];
    this.initializeRoutes();
    this.start();
  }

  onNavigate(callback) {
    this.listeners.push(callback);
  }

  initializeRoutes() {
    // Define your regular routes
    for (const pageKey in page_config) {
      const x_page = page_config[pageKey];
      page(x_page.path, () => {
        this.renderer.renderPage(x_page.path, x_page.name, x_page.component); // Pass the component
      });
    }

    // Add a catch-all route for 404 errors
    page("*", () => {
      this.renderer.render404(); // Render the 404 component
    });
  }

  start() {
    // Listen for the popstate event to handle back/forward navigation
    window.addEventListener("popstate", () => {
      // Use the page library to navigate based on the updated URL
      page(window.location.pathname);
    });

    // Initialize the page library at the top level
    page();

    // Define your routes and start the router
    this.initializeRoutes();
  }
}

export { Router };
