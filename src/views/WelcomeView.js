import { html, css, LitElement } from "lit";
import { TWStyles } from "../css/twlit.js";
import globalSemanticCSS from "../css/global-semanticCSS.js";
import { appMainPath } from "../module/config/app-config.js";
import { auth, firestore_db } from "../../utils/firebase.js";
import { collection, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import AnalyzerElement from "../components/AnalyzerElement.js";

class WelcomeView extends LitElement {
  static properties = {
    authenticated: { type: Boolean },
    posts: { type: Array }, // Add posts property to store fetched data
    loading: { type: Boolean },
    darkMode: { type: Boolean },
  };

  constructor() {
    super();
    this.authenticated = false;
    this.posts = []; // Initialize posts array
    this.loading = true; // Initial loading state
    this.importView = () => import("./AuthView.js");

    const storedMode = localStorage.getItem("theme");
    this.darkMode = storedMode
      ? storedMode === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  connectedCallback() {
    super.connectedCallback();
    this.checkUserAuthAccess();
    // ... rest of your logic
  }

  async isAuthenticated() {
    return new Promise((resolve) => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const authenticated = true;

          // console.log("Is authenticated:", authenticated);

          resolve(authenticated);
        } else {
          const authenticated = false;
          // console.log("Is authenticated:", authenticated);
          resolve(authenticated);
        }
      });
    });
  }

  enrollButtonClick() {
    if (this.authenticated) {
      window.location.href = "/dashboard"; // Redirect to dashboard if authenticated
    } else {
      this.importView().then((module) => {
        const AuthView = module.default;

        // Ensure that the formContainer exists before trying to append a child
        const formContainer =
          this.shadowRoot.querySelector(".welcome-container");
        if (formContainer) {
          // Create an instance of AuthView
          const authViewInstance = document.createElement("auth-view");
          formContainer.appendChild(authViewInstance);
        } else {
          console.error("formContainer not found");
        }
      });
    }
  }

  async checkUserAuthAccess() {
    this.authenticated = await this.isAuthenticated();
  }

  async connectedCallback() {
    super.connectedCallback();
    await this.fetchPosts(); // Fetch posts when the component is connected
    const themeManager = document.querySelector("app-manager");
    if (themeManager) {
      this.darkMode = themeManager.darkMode;
      themeManager.addEventListener(
        "theme-updated",
        this.handleThemeUpdate.bind(this)
      );
    }
  }

  handleThemeUpdate(event) {
    this.darkMode = event.detail;
  }

  async fetchPosts() {
    try {
      const querySnapshot = await getDocs(collection(firestore_db, "posts"));
      // Filter out posts with published set to false
      const publishedPosts = querySnapshot.docs
        .map((doc) => {
          const data = doc.data();
          // Convert Firestore timestamp to a JavaScript Date object
          return { ...data, createdAt: data.createdAt.toDate() };
        })
        .filter((post) => post.published === true);

      // Sort the published posts by createdAt in descending order
      this.posts = publishedPosts.sort((a, b) => {
        const createdAtA = new Date(a.createdAt);
        const createdAtB = new Date(b.createdAt);
        return createdAtB - createdAtA;
      });

      this.loading = false; // Set loading state to false once posts are fetched
      this.requestUpdate("posts", null); // Trigger an update to render the fetched and sorted data
    } catch (error) {
      this.loading = false; // Set loading state to false once posts are fetched
      console.error("Error fetching posts: ", error);
    }
  }

  truncateText(text, limit) {
    const shortened = text.trim().split(/\s+/).slice(0, limit).join(" ");
    return text.length > limit ? `${shortened}...` : shortened;
  }

  render() {
    const maxPostsToShow = 3;
    const showViewMoreButton = this.posts.length > maxPostsToShow;
    return html`
      <div class="grid h-full">
        <div id="analyzer" class="grid gap-3 mt-3 p-5">
          <h2
            class="tracking-tighter leading-snug text-2xl font-medium text-start mb-5"
          >
            Web3 Analytic Tools
          </h2>
          <analyzer-element></analyzer-element>
        </div>

        <div id="guides" class="grid gap-3 mt-3 p-5">
          <h2
            class="tracking-tighter leading-snug text-2xl font-medium text-start mb-5"
          >
            Guides
          </h2>

          ${this.loading
            ? html`
                <div>
                  <ul
                    class="grid gap-3 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 list-none items-center"
                  >
                    <li class="post-card-list animate-pulse">
                      <div
                        class="app-card overflow-hidden w-full h-full text-start"
                      >
                        <div
                          class="object-fill bg-slate-100 min-h-40 h-40 w-full"
                        ></div>
  
                        <div class="p-4">
                          <h3
                            class="text-xl font-semibold capitalize mb-1 h-6 w-full bg-slate-100"
                          ></h3>
                          <div class="h-20 bg-slate-100">
                            <p class="text-gray-600"></p>
                          </div>
                        </div>
                      </li>
  
                      <li class="post-card-list animate-pulse">
                        <div
                          class="app-card overflow-hidden w-full h-full text-start"
                        >
                          <div
                            class="object-fill bg-slate-100 min-h-40 h-40 w-full"
                          ></div>
  
                          <div class="p-4">
                            <h3
                              class="text-xl font-semibold capitalize mb-1 h-6 w-full bg-slate-100"
                            ></h3>
                            <div class="h-20 bg-slate-100">
                              <p class="text-gray-600"></p>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                `
            : html`
                <div>
                  <ul
                    class="grid gap-3 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 list-none items-center"
                  >
                    ${this.posts.slice(0, maxPostsToShow).map(
                      (post) => html`
                        <li
                          class="post-card-list app-card overflow-hidden text-start ${this
                            .darkMode
                            ? "dark"
                            : "light"} relative"
                        >
                          <!-- Link Overlay -->
                          <a
                            href="/guide/${post.slug}"
                            class="block absolute inset-0 h-full"
                          ></a>

                          <!-- Image Frame -->
                          <responsive-image-frame
                            mainSrc="${post.thumbnail}"
                            alt="Token Mama icon logo"
                            fallbackLabel="this is our website logo"
                            type="thumbnail"
                            width="w-full"
                            height="h-40"
                            min_height="min-h-40"
                            class="object-fill"
                          ></responsive-image-frame>

                          <!-- Content -->
                          <div class="p-4">
                            <h3 class="text-xl font-semibold capitalize mb-1">
                              ${post.title}
                            </h3>
                            <div class="">
                              <p class="">
                                ${this.truncateText(post.description, 15)}
                              </p>
                            </div>
                          </div>
                        </li>
                      `
                    )}
                  </ul>
                </div>
              `}
          ${showViewMoreButton
            ? html`
                <div class="flex justify-center">
                  <a
                    class="nav-item w-1/3 p-2 mt-3 rounded-md border text-center"
                    href="/guides"
                  >
                    View More
                  </a>
                </div>
              `
            : ""}
        </div>
      </div>
    `;
  }

  //

  static styles = [
    TWStyles,
    globalSemanticCSS,
    css`
      .welcome-container {
        height: 55vh;
      }

      /* Media Query for Small Screens */
      @media (max-width: 935px) {
        .welcome-container {
          flex-direction: column;
        }
        .form-card {
          max-width: 90%;
        }

        .form-container {
          max-width: 100%;
        }
      }
      /* Meta Description Container Styles */
      .meta-desc-container {
        text-align: center;
        margin-top: auto;
      }

      #meta-description {
        font-size: 16px;
        margin-top: 15px;
        line-height: 1.5;
      }

      .app-card {
        display: block;
        border-radius: 12px;
        border: 1px solid #4d4d4d49;
        width: 100%;
        height: auto;
        background-color: #f6f6f71d;
        transition: border-color 0.25s, background-color 0.25s;
      }

      .app-card:hover {
        background-color: #b3b3b313;
        overflow: hidden;
      }

      .app-card:hover h3 {
        color: #2980b9;
        background-color: transparent;
      }
    `,
  ];
}

customElements.define("welcome-view", WelcomeView);

// export default WelcomeView;
