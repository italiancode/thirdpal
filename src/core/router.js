import page from "page";
import { html, render } from "lit-html";
import { appName, appURL } from "../module/config/app-config";

import { getFirestoreUserData } from "../utils/firestoreUtils";
import { isAuthenticated } from "../../utils/firebase.js";

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

  guides: {
    path: "/guides",
    name: "guides",
    component: () => import("../views/GuidesView.js"),
    element: html`<guides-view></guides-view>`,
    meta: {
      title: "Crypto Mastery: In-Depth Guides and Insights",
      description:
        "Unlock the secrets of the crypto world with our comprehensive guides and insightful analysis. Stay ahead in the fast-paced crypto landscape with step-by-step instructions and expert perspectives.",
    },
  },

  guide: {
    path: "/guide/:id",
    name: "guide",
    component: () => import("../views/PostFullView.js"),
    element: html`<post-full-view></post-full-view>`,
    meta: { title: "Guide Post", description: "Guide post" },
  },

  auth: {
    path: "/auth",
    name: "auth",
    component: () => import("../views/AuthView.js"),
    element: html`<auth-view></auth-view>`,
    meta: { title: "Auth Page", description: "Auth page" },
  },

  dashboard: {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/DashboardView.js"),
    element: html`<dashboard-view></dashboard-view>`,
    meta: { title: "Dashboard", description: "Dashboard Page" },
  },

  d: {
    path: "/d/create",
    name: "Create",
    component: () => import("../views/CreatePostView.js"),
    element: html`<create-post-view></create-post-view>`,
    meta: { title: "Create", description: "Create Something" },
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

export function updateTitleAndMeta(title, description, appName) {
  document.title = `${title} - ${appName}`;

  // Remove existing meta description tag
  const existingMetaDescription = document.querySelector(
    'meta[name="description"]'
  );
  if (existingMetaDescription) {
    existingMetaDescription.remove();
  }

  // Create and append a new meta description tag
  const newMetaDescription = document.createElement("meta");
  newMetaDescription.name = "description";
  newMetaDescription.content = description;
  document.head.appendChild(newMetaDescription);
}

class Renderer {
  constructor() {
    this.appElement = document.querySelector("app-manager");
    this.breadcrumbs = [];
    this.urlToPage = "";
  }

  updateBreadcrumbs(path, name) {
    this.breadcrumbs = path === "/" ? [] : [{ title: name, path }];
  }

  navigateToUrl() {
    if (window.location.href !== this.urlToPage) {
      this.breadcrumbs = [];
    }
  }

  renderElement(path, element, name, meta) {
    updateTitleAndMeta(meta.title, meta.description, appName);

    render(element, this.appElement);
  }

  async render404() {
    // Import the NotFoundView using dynamic import
    const NotFoundView = () =>
      import(
        /* webpackChunkName: "not-found-view" */ "../views/404/NotFoundView.js"
      );

    // Wait for the import to complete
    await NotFoundView();

    // Now render the 404 view
    this.renderElement(
      "/404",
      html`<not-found-view></not-found-view>`,
      "Page Not Found",
      "Page Not Found"
    );
  }

  async renderPage(path, component, element, name, meta) {
    this.urlToPage = `${appURL}${path}`;
    this.updateBreadcrumbs(path, name);

    // Scroll to the top when navigating to a new route
    window.scrollTo(0, 0);

    const authenticated = await isAuthenticated();

    if (
      ["/", "/guides", "/auth", "/airdrops", "/reports"].includes(path) ||
      path.startsWith(["/guide/"]) ||
      authenticated
    ) {
      try {
        await component();
        this.renderElement(path, element, name, meta);
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

const renderer = new Renderer();

class Router {
  constructor() {
    this.renderer = new Renderer();
    this.listeners = [];
    this.breadcrumbs = [];
    this.authenticated = false;
    this.initializeRoutes();
    this.start();
  }

  connectedCallback() {
    super.connectedCallback();
    this.checkUserAuthAccess();
    // ... rest of your logic
  }

  async checkUserAuthAccess() {
    this.authenticated = await isAuthenticated();
  }

  onNavigate(callback) {
    this.listeners.push(callback);
  }

  async renderUnauthorized() {
    this.renderElement(
      "/unauthorized",
      html`<unauthorized-view></unauthorized-view>`, // Replace with your unauthorized view/component
      "Unauthorized Access"
    );
  }

  initializeRoutes() {
    for (const pageKey in page_config) {
      const x_page = page_config[pageKey];
      page(
        x_page.path,
        this.checkOrganizerAccess.bind(this),
        this.checkAdminAccess.bind(this),
        (context, next) => {
          this.renderer.renderPage(
            context.pathname,
            x_page.component, // Use the imported component directly
            x_page.element, // Use the imported component's element directly
            x_page.name,
            x_page.meta // Pass the meta object
          );
        }
      );
    }

    // Add a catch-all route for 404 errors
    page("*", (context, next) => {
      renderer.render404();
    });
  }

  start() {
    page.start(); // Start page.js router
  }

  async checkOrganizerAccess(context, next) {
    const organizerRoutes = ["/adsub", "/?" /* Add more routes here */];
    const isOrganizerRoute = organizerRoutes.includes(context.pathname);

    this.authenticated = await isAuthenticated();

    if (this.authenticated && isOrganizerRoute) {
      const user = await getFirestoreUserData();
      if (!user || !user.isOrganizer) {
        console.log("User is not authorized as an organizer for this route.");
        this.renderUnauthorized(); // Corrected: Add parentheses to execute the method
        return;
      }
    }

    // Proceed to render the route for authenticated users or other routes
    next();
  }

  async checkAdminAccess(context, next) {
    const adminRoutes = ["/d/create", "/?" /* Add more routes here */];
    const isAdminRoute = adminRoutes.includes(context.pathname);

    this.authenticated = await isAuthenticated();

    if (this.authenticated && isAdminRoute) {
      const user = await getFirestoreUserData();

      if (!user && !user.isAdmin) {
        console.log("User is not authorized as an admin for this route.");
        this.renderUnauthorized(); //

        return;
      }
    }
    // Proceed to render the route for authenticated users or other routes
    next();
  }
}

// Initialize modules
const router = new Router();
