

import dashboard from '../pages/dashboard.js'
import home from '../pages/home.js'
import index from '../pages/index.js'
import reports from '../pages/reports.js'

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

};



// route page config
export const pages = [


page_config.dashboard.path, () =>
  this.renderer.x_renderPage(page_config.dashboard.path, page_config.dashboard.name, page_config.dashboard.component),


page_config.home.path, () =>
  this.renderer.x_renderPage(page_config.home.path, page_config.home.name, page_config.home.component),


page_config.index.path, () =>
  this.renderer.x_renderPage(page_config.index.path, page_config.index.name, page_config.index.component),


page_config.reports.path, () =>
  this.renderer.x_renderPage(page_config.reports.path, page_config.reports.name, page_config.reports.component),

];