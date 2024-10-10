import page from "page";
import { html, render } from "lit-html";
import { appName } from "../module/config/app-config";
import { getFirestoreUserData } from "../utils/firestoreUtils";
import { isAuthenticated } from "../utils/userUtils.js";
import { page_config, publicRoutes, organizerRoutes, adminRoutes } from "./pageConfig.js";

function updateTitleAndMeta(title, description) {
  document.title = `${title} - ${appName}`;
  document.querySelector('meta[name="description"]')?.setAttribute("content", description);
}

class Router {
  constructor() {
    this.appElement = document.querySelector("app-manager");
    this.authenticated = false;
    this.initializeRoutes();
  }

  async checkUserAuthAccess() {
    this.authenticated = await isAuthenticated();
    return this.authenticated;
  }

  async renderPage(path, component, element, name, meta) {
    updateTitleAndMeta(meta.title, meta.description);
    window.scrollTo(0, 0);

    try {
      await component();
      render(element, this.appElement);
    } catch (error) {
      console.error(`Error loading component for path '${path}':`, error);
      this.render404();
    }
  }

  async render404() {
    const NotFoundView = await import("../views/404/NotFoundView.js");
    render(html`<not-found-view></not-found-view>`, this.appElement);
  }

  async checkAccess(context, next, requiredRole) {
    if (await this.checkUserAuthAccess()) {
      const user = await getFirestoreUserData();
      if (user && user[requiredRole]) {
        return next();
      }
    }
    this.renderUnauthorized();
  }

  renderUnauthorized() {
    render(html`<unauthorized-view></unauthorized-view>`, this.appElement);
  }

  initializeRoutes() {
    for (const pageKey in page_config) {
      const { path, component, element, name, meta } = page_config[pageKey];

      page(path, async (context, next) => {
        const isPublicRoute = publicRoutes.includes(path) || path.startsWith("/guide/");

        if (isPublicRoute || await this.checkUserAuthAccess()) {
          if (organizerRoutes.includes(path)) {
            return this.checkAccess(context, () => this.renderPage(path, component, element, name, meta), 'isOrganizer');
          }
          if (adminRoutes.includes(path)) {
            return this.checkAccess(context, () => this.renderPage(path, component, element, name, meta), 'isAdmin');
          }
          return this.renderPage(path, component, element, name, meta);
        }

        this.renderUnauthorized();
      });
    }

    page("*", () => this.render404());
    page.start();
  }
}

export const router = new Router();