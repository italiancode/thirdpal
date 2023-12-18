import dashboard from "../pages/dashboard.js";
import home from "../pages/home.js";
import index from "../pages/index.js";
import reports from "../pages/reports.js";
import wallets from "../pages/wallets.js";
import Airdrops from "../pages/airdrops.js";

import AirdropDetails from "../pages/airdrop-details.js";

// route page config
export const page_config = {
  dashboard: {
    path: "/dashboard",
    name: "dashboard",
    component: dashboard,
    meta: { title: "", description: "" },
  },

  home: {
    path: "/home",
    name: "home",
    component: home,
    meta: { title: "", description: "" },
  },

  index: {
    path: "/",
    name: "index",
    component: index,
    meta: { title: "", description: "" },
  },

  reports: {
    path: "/reports",
    name: "reports",
    component: reports,
    meta: { title: "", description: "" },
  },

  wallets: {
    path: "/wallets",
    name: "wallets",
    component: wallets,
    meta: { title: "", description: "" },
  },

  airdrops: {
    path: "/airdrops",
    name: "airdrops",
    component: Airdrops,
    meta: { title: "", description: "" },
  },

  airdrop: {
    path: "/airdrop/:id",
    name: "airdrop",
    component: AirdropDetails,
    meta: { title: "", description: "" },
  },
};
