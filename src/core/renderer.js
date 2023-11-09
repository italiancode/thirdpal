import { html, render } from "lit-html";
import { appAPI, appName, appURL } from "../module/config/app-config";
import { MetaManager } from "./meta-manager";
import { isAuthenticated } from "../utils/authUtils";

import "../views/404/NotFoundView";

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
      window.location.replace(this.urlToPage);
      this.breadcrumbs = [];
    }
  }

  renderElement(path, component, name) {
    document.title = `${appName} - ${name}`;
    this.metaManager.updateMetaDescription(name);
    render(html`${component}`, this.appElement);
  }

  render404() {
    // Render a 404 component when a route is not found
    this.renderElement(
      "/404",
      html`<not-found-view></not-found-view>`,
      "Page Not Found"
    );
  }

  async renderPage(path, name, component) {
    this.urlToPage = `${appURL}${path}`;
    this.updateBreadcrumbs(path, name);
    this.navigateToUrl();

    const authenticated = await isAuthenticated();

    if (["/", "/home"].includes(path) || authenticated) {
      this.renderElement(path, component, name);
    } else {
      let countdownElement = this.appElement.querySelector("#countdown");

      if (!countdownElement) {
        let countdown = 5; // Countdown in seconds
        countdownElement = document.createElement("div");
        countdownElement.innerHTML = `You need to be authenticated to access this page. Redirecting in <span id="countdown">${countdown}</span> seconds...`;
        this.appElement.appendChild(countdownElement);

        const countdownSpan = this.appElement.querySelector("#countdown");

        const countdownInterval = setInterval(() => {
          if (countdown === 0) {
            clearInterval(countdownInterval);
            window.location.href = "/";
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
