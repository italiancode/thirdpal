import { html, css, LitElement } from "lit";
import { TWStyles } from "../css/twlit";
import globalSemanticCSS from "../css/global-semanticCSS";
import { firestore_db } from "../../utils/firebase.js";
import { doc, getDoc } from "firebase/firestore";
import { appName } from "../module/config/app-config.js";
import { updateTitleAndMeta } from "../core/router.js";

class PostFullView extends LitElement {
  static properties = {
    post: { type: Object },
    loading: { type: Boolean },
    error: { type: String },
  };

  constructor() {
    super();
    this.postId = "";
    this.post = {};
    this.loading = true; // Initial loading state
    this.error = null; // Initial error state
  }

  async connectedCallback() {
    super.connectedCallback();

    const url = window.location.pathname;
    const parts = url.split("/");
    this.postId = parts[parts.length - 1];

    await this.fetchPost(); // Fetch post when the component is connected
  }

  async fetchPost() {
    try {
      const postRef = doc(firestore_db, "posts", this.postId);
      const postSnapshot = await getDoc(postRef);

      if (postSnapshot.exists()) {
        this.post = postSnapshot.data(); // Update post property with retrieved data
        updateTitleAndMeta(this.post.title, this.post.description, appName);
      } else {
        // Set post to null if not found
        this.post = null;

        // Redirect to the not-found page
        window.location.href = "/not-found-page";
        return;
      }

      this.requestUpdate(); // Trigger a re-render after data retrieval
    } catch (error) {
      console.error("Error fetching post details:", error);
      this.error = "Error fetching post details";
    } finally {
      this.loading = false;
    }
  }

  render() {
    return html`
      <div class="grid h-full">
        <div id="post-full" class="grid gap-3 mt-10">
          ${this.loading
            ? html` <div class="animate-pulse">
                <h2
                  class="text-2xl font-medium capitalize h-12 bg-slate-100"
                ></h2>
                <p class="text-gray-600 h-auto bg-slate-100"></p>

                <div class="grid w-full justify-center p-3 my-5">
                  <div
                    class="object-fill bg-slate-100 w-full min-h-40 h-56"
                  ></div>
                </div>

                <p class="text-gray-600 h-40 bg-slate-100"></p>
                <p class="text-gray-600 h-56 bg-slate-100"></p>
              </div>`
            : this.error
            ? html`<p>${this.error}</p>`
            : this.post
            ? html`
                <div>
                  <h2 class="text-2xl font-medium capitalize">
                    ${this.post.title}
                  </h2>
                  <p class="">${this.post.description}</p>

                  ${this.post.thumbnail
                    ? html`
                        <div class="grid justify-center p-3 my-5">
                          <responsive-image-frame
                            mainSrc="${this.post.thumbnail}"
                            alt="Token Mama icon logo"
                            fallbackLabel="this is our website logo"
                            type="thumbnail"
                            width="w-full"
                            height="h-56"
                            min_height="min-h-40"
                            class="object-fill lazyload"
                          ></responsive-image-frame>
                        </div>
                      `
                    : html`<p>No thumbnail available</p>`}
                </div>
              `
            : html`<p>No post available</p>`}
        </div>
      </div>
    `;
  }

  static styles = [TWStyles, globalSemanticCSS, css``];
}

customElements.define("post-full-view", PostFullView);

export default PostFullView;
