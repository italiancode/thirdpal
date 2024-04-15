import { html, css, LitElement } from "lit";
import { TWStyles } from "../css/twlit";
import globalSemanticCSS from "../css/global-semanticCSS";
import { appMainPath } from "../module/config/app-config";
import { firestore_db } from "../../utils/firebase.js";
import { collection, getDocs } from "firebase/firestore";

class GuidesView extends LitElement {
  static properties = {
    posts: { type: Array },
    visiblePosts: { type: Array },
    postsPerPage: { type: Number },
    loading: { type: Boolean },
  };

  constructor() {
    super();
    this.posts = [];
    this.visiblePosts = [];
    this.postsPerPage = 9;
    this.loading = true; // Initial loading state
  }

  async connectedCallback() {
    super.connectedCallback();
    await this.fetchPosts();
  }

  async fetchPosts() {
    try {
      const querySnapshot = await getDocs(collection(firestore_db, "posts"));
      const publishedPosts = querySnapshot.docs
        .map((doc) => {
          const data = doc.data();
          return { ...data, createdAt: data.createdAt.toDate() };
        })
        .filter((post) => post.published === true);

      this.posts = publishedPosts.sort((a, b) => {
        const createdAtA = new Date(a.createdAt);
        const createdAtB = new Date(b.createdAt);
        return createdAtB - createdAtA;
      });

      this.showNextPosts();
      this.loading = false; // Set loading state to false once posts are fetched
    } catch (error) {
      console.error("Error fetching posts: ", error);
      this.loading = false; // Set loading state to false in case of an error
    }
  }

  showNextPosts() {
    const remainingPosts = this.posts.length - this.visiblePosts.length;
    const postsToShow = Math.min(this.postsPerPage, remainingPosts);
    this.visiblePosts = this.visiblePosts.concat(
      this.posts.slice(0, postsToShow)
    );
    this.requestUpdate(["visiblePosts", "loading"], null);
  }

  handleLoadMore() {
    this.showNextPosts();
  }

  truncateText(text, limit) {
    const shortened = text.trim().split(/\s+/).slice(0, limit).join(" ");
    return text.length > limit ? `${shortened}...` : shortened;
  }

  render() {
    return html`
      <div class="grid h-full">
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
                    ${this.visiblePosts.map(
                      (post) => html`
                        <li
                          class="post-card-list app-card overflow-hidden text-start relative"
                        >
                          <!-- Link Overlay -->
                          <a
                            href="/guide/${post.slug}"
                            class="block absolute inset-0 z-10 h-full"
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
                ${this.visiblePosts.length < this.posts.length
                  ? html`<button @click="${this.handleLoadMore}">
                      Load More
                    </button>`
                  : ""}
              `}
        </div>
      </div>
    `;
  }

  static styles = [
    TWStyles,
    globalSemanticCSS,
    css`
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

customElements.define("guides-view", GuidesView);

export default GuidesView;
