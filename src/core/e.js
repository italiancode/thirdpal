import { Router } from "@vaadin/router";

window.addEventListener("load", () => {
  initRouter();
});

function initRouter() {
  const router = new Router(document.getElementById("app"));
  router.setRoutes([
    {
      path: "/", // Root path
      name: "welcome",
      component: "welcome-view",
      action: () =>
        import(
          /* webpackChunkName: "welcome-view" */ "../views/WelcomeView.js"
        ),
    },
    {
      path: "/dashboard", // Dashboard path
      name: "dashboard",
      component: "dashboard-view",
      action: () =>
        import(
          /* webpackChunkName: "dashboard-view" */ "../views/DashboardView.js"
        ),
      meta: { title: "Dashboard", description: "Dashboard Page" },
    },
    {
      path: "/reports", // Reports path
      name: "reports",
      component: "report-view",
      action: () =>
        import(/* webpackChunkName: "report-view" */ "../views/ReportView.js"),
      meta: { title: "", description: "" },
    },
    {
      path: "/wallets", // Wallets path
      name: "wallets",
      component: "wallets-view",
      action: () =>
        import(
          /* webpackChunkName: "wallets-view" */ "../views/WalletsView.js"
        ),
      meta: { title: "", description: "" },
    },
    {
      path: "/airdrops", // Airdrops path
      name: "airdrops",
      component: "airdrops-view",
      action: () =>
        import(
          /* webpackChunkName: "airdrops-view" */ "../views/AirdropsView.js"
        ),
      meta: { title: "", description: "" },
    },
    {
      path: "/airdrop/:id", // Airdrop details path
      name: "airdrop",
      component: "airdrop-details-view",
      action: () =>
        import(
          /* webpackChunkName: "airdrop-details-view" */ "../views/AirdropDetailsView.js"
        ),
      meta: { title: "", description: "" },
    },
    {
      path: "/adsub", // Airdrop submission path
      name: "airdrop submission",
      component: "adsub-view",
      action: () =>
        import(
          /* webpackChunkName: "adsub-view" */ "../views/AirDropSubmissionView.js"
        ),
      meta: { title: "", description: "" },
      displayInAppElement: false, // Specify whether to display in appElement
    },
    {
      path: "(.*)", // Catch-all path for not found view
      component: "not-found-view",
      action: () =>
        import(
          /* webpackChunkName: "not-found-view" */ "../views/404/NotFoundView.js"
        ),
    },
  ]);
}

