import { html } from "lit-html";

export const page_config = {
    welcome: {
        path: "/",
        name: "welcome",
        component: () => import("../views/IndexView.js"),
        element: html`<index-view></index-view>`,
        meta: {
          title: "AI-Powered Blockchain Insights for Everyone",
          description: "ThirdPal is a Web3 Analytics Tool designed to simplify the way users interact with blockchain data.",
        },
      },
    
      token_analyzer: {
        path: "/token-analyzer",
        name: "token-analyzer",
        component: () => import("../views/TokenAnalyzerView.js"),
        element: html`<token-analyzer-view></token-analyzer-view>`,
        meta: {
          title: "",
          description: "",
        },
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
    
      d_posts: {
        path: "/d/posts",
        name: "All Post",
        component: () => import("../views/post/AllPostsView.js"),
        element: html`<all-posts-view></all-posts-view>`,
        meta: { title: "All Post", description: "All Post" },
      },
    
      d_create: {
        path: "/d/create",
        name: "Create",
        component: () => import("../views/post/CreatePostView.js"),
        element: html`<create-post-view></create-post-view>`,
        meta: { title: "Create", description: "Create Something" },
      },
    
      d_edit: {
        path: "/d/edit/:id",
        name: "Edit",
        component: () => import("../views/post/EditPostView.js"),
        element: html`<edit-post-view></edit-post-view>`,
        meta: { title: "Edit", description: "Edit Something" },
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
  // ... Add all other page configurations here ...
};

export const publicRoutes = ["/", "/guides", "/auth", "/airdrops", "/reports", "/token-analyzer"];
export const organizerRoutes = ["/adsub"];
export const adminRoutes = ["/d/create", "/d/post"];