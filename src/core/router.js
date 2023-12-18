import page from "page";
import { html, render } from "lit-html";
import { appAPI, appName, appURL } from "../module/config/app-config";
import { MetaManager } from "./meta-manager";
import { isAuthenticated } from "../utils/authUtils";
import { page_config } from "./routes";

import "../views/404/NotFoundView";

class Router {
  constructor() {
    this.renderer = new Renderer();
    this.listeners = [];
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
      page(x_page.path, (context, next) => {
        this.renderer.renderPage(
          context.pathname,
          x_page.name,
          x_page.component
        );
      });
    }

    // Add a catch-all route for 404 errors
    page("*", (context, next) => {
      this.renderer.render404();
    });
  }

  start() {
    window.addEventListener("popstate", () => {
      page(window.location.pathname);
    });

    page();
  }
}

export { Router };

class Renderer {
  constructor() {
    this.appElement = document.getElementById("app");
    this.metaManager = new MetaManager();
    this.breadcrumbs = [];
    this.urlToPage = "";
  }

  updateBreadcrumbs(path, name) {
    this.breadcrumbs = path === "/" ? [] : [{ title: name, path }];
  }

  navigateToUrl() {
    if (window.location.href !== this.urlToPage) {
      // Commenting out the line below to prevent full page reload
      // window.location.replace(this.urlToPage);
      this.breadcrumbs = [];
    }
  }

  renderElement(path, component, name) {
    document.title = `${appName} - ${name}`;
    this.metaManager.updateMetaDescription(name);
    render(html`${component}`, this.appElement);
  }

  render404() {
    this.renderElement(
      "/404",
      html`<not-found-view></not-found-view>`,
      "Page Not Found"
    );
  }

  async renderPage(path, name, component) {
    this.urlToPage = `${appURL}${path}`;
    this.updateBreadcrumbs(path, name);
    // this.navigateToUrl(); // Commenting out to prevent full page reload on unauthenticated access

    const authenticated = await isAuthenticated();

    if (["/", "/airdrops", "/reports"].includes(path) || authenticated) {
      this.renderElement(path, component, name);
    } else {
      let countdownElement = this.appElement.querySelector("#countdown");

      if (!countdownElement) {
        let countdown = 5; // Countdown in seconds
        countdownElement = document.createElement("div");
        countdownElement.innerHTML = `You need to be authenticated to access this page. Redirecting in <span id="countdown">${countdown}</span> seconds...`;

        // Hide all components (child elements of appElement) by setting their display to 'none'
        const childElements = Array.from(this.appElement.children);
        childElements.forEach((child) => {
          child.style.display = "none";
        });

        // Append the warning element
        this.appElement.appendChild(countdownElement);

        const countdownSpan = this.appElement.querySelector("#countdown");

        const countdownInterval = setInterval(() => {
          if (countdown === 0) {
            clearInterval(countdownInterval);
            // Redirect logic after countdown ends
            window.location.href = "/"; // Adjust this to your redirection URL
          } else {
            countdownSpan.textContent = countdown;
            countdown--;
          }
        }, 1000); // Update countdown every second
      }
    }
  }
}

export { Renderer };
