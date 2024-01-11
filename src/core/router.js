import page from "page";
import { html, render } from "lit-html";
import { appName, appURL } from "../module/config/app-config";
import { MetaManager } from "./meta-manager";
import { isAuthenticated } from "../utils/authUtils";

import "../views/404/NotFoundView";
import { getFirestoreUserData } from "../utils/firestoreUtils";

// route page config
const page_config = {
  welcome: {
    path: "/",
    name: "welcome",
    component: () =>
      import(
        /* webpackChunkName: "dashboard-view" */ "../views/WelcomeView.js"
      ),
    element: html`<welcome-view></welcome-view>`,
    meta: { title: "Welcome", description: "Welcome Page" },
  },

  dashboard: {
    path: "/dashboard",
    name: "dashboard",
    component: () =>
      import(
        /* webpackChunkName: "dashboard-view" */ "../views/DashboardView.js"
      ),
    element: html`<dashboard-view></dashboard-view>`,
    meta: { title: "Dashboard", description: "Dashboard Page" },
  },

  reports: {
    path: "/reports",
    name: "reports",
    component: () =>
      import(/* webpackChunkName: "report-view" */ "../views/ReportView.js"),
    element: html`<report-view></report-view>`,
    meta: { title: "", description: "" },
  },

  wallets: {
    path: "/wallets",
    name: "wallets",
    component: () =>
      import(/* webpackChunkName: "wallets-view" */ "../views/WalletsView.js"),
    element: html`<wallets-view></wallets-view>`,
    meta: { title: "", description: "" },
  },

  airdrops: {
    path: "/airdrops",
    name: "airdrops",
    component: () =>
      import(
        /* webpackChunkName: "airdrops-view" */ "../views/AirdropsView.js"
      ),
    element: html`<airdrops-view></airdrops-view>`,
    meta: { title: "", description: "" },
  },

  airdrop: {
    path: "/airdrop/:id",
    name: "airdrop",
    component: () =>
      import(
        /* webpackChunkName: "airdrop-details-view" */ "../views/AirdropDetailsView.js"
      ),
    element: html`<airdrop-details-view></airdrop-details-view>`,
    meta: { title: "", description: "" },
  },

  // PAGES ONLY
  airdropSubmission: {
    path: "/adsub",
    name: "airdrop submission",
    component: () =>
      import(
        /* webpackChunkName: "adsub-view" */ "../views/AirDropSubmissionView.js"
      ),
    element: html`<adsub-view></adsub-view>`,
    meta: { title: "", description: "" },
    displayInAppElement: false,
  },
};

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

  renderUnauthorized() {
    this.renderElement(
      "/unauthorized",
      html`<unauthorized-view></unauthorized-view>`, // Replace with your unauthorized view/component
      "Unauthorized Access"
    );
  }

  async checkOrganizerAccess(context, next) {
    const authenticated = await isAuthenticated();
    const organizerRoutes = ["/adsub", "/data" /* Add more routes here */];
    const isOrganizerRoute = organizerRoutes.includes(context.pathname);

    if (authenticated && isOrganizerRoute) {
      const user = await getFirestoreUserData();
      if (!user || !user.isOrganizer) {
        // For non-organizer users trying to access organizer-required routes
        console.log("User is not authorized as an organizer for this route.");
        this.renderer.renderUnauthorized(); // Render unauthorized view
        return;
      }
    }

    // Proceed to render the route for authenticated users or other routes
    next();
  }

  initializeRoutes() {
    for (const pageKey in page_config) {
      const x_page = page_config[pageKey];
      page(
        x_page.path,
        this.checkOrganizerAccess.bind(this),
        (context, next) => {
          this.renderer.renderPage(
            context.pathname,
            x_page.component, // Use the imported component directly
            x_page.element, // Use the imported component's element directly
            x_page.name
          );
        }
      );
    }

    // Add a catch-all route for 404 errors
    page("*", (context, next) => {
      this.renderer.render404();
    });
  }

  start() {
    page.start(); // Start page.js router
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

  renderElement(path, element, name) {
    document.title = `${appName} - ${name}`;
    this.metaManager.updateMetaDescription(name);
    render(element, this.appElement);
  }

  render404() {
    this.renderElement(
      "/404",
      html`<not-found-view></not-found-view>`,
      "Page Not Found"
    );
  }

  async renderPage(path, component, element, name) {
    this.urlToPage = `${appURL}${path}`;
    this.updateBreadcrumbs(path, name);

    const authenticated = await isAuthenticated();

    if (["/", "/airdrops", "/reports"].includes(path) || authenticated) {
      try {
        await component();
        this.renderElement(path, element, name);
      } catch (error) {
        console.error(`Error loading component for path '${path}':`, error);
        // Handle the error, display an error page, or perform appropriate action
      }
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
