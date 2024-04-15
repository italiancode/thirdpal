import { html, css, LitElement } from "lit";
import { firestore_db } from "../../../utils/firebase";
import { collection, getDocs } from "firebase/firestore";

class AllPostsView extends LitElement {
  static properties = {
    activeTab: { type: String },
    publishedPosts: { type: Array },
    draftPosts: { type: Array },
  };

  constructor() {
    super();
    this.activeTab = "published";
    this.publishedPosts = [];
    this.draftPosts = [];
  }

  async connectedCallback() {
    super.connectedCallback();
    await this.fetchPosts(); // Fetch all posts
  }

  async fetchPosts() {
    const querySnapshot = await getDocs(collection(firestore_db, "posts"));
    querySnapshot.forEach((doc) => {
      const post = doc.data();
      post.id = doc.id;
      if (post.published) {
        this.publishedPosts.push(post);
      } else {
        this.draftPosts.push(post);
      }
    });
    this.requestUpdate();
  }

  navigateToEditPost(postId) {
    window.location.href = `edit/${postId}`;
  }

  render() {
    return html`
      <div>
        <div class="flex">
          <button @click=${() => (this.activeTab = "published")}>
            Published
          </button>
          <button @click=${() => (this.activeTab = "drafts")}>Drafts</button>
        </div>

        ${this.activeTab === "published"
          ? html`
              <h2>Published Posts</h2>
              <ul>
                ${this.publishedPosts.map(
                  (post) => html`
                    <li>
                      ${post.title}
                      <button @click=${() => this.navigateToEditPost(post.id)}>
                        Edit
                      </button>
                    </li>
                  `
                )}
              </ul>
            `
          : html`
              <h2>Draft Posts</h2>
              <ul>
                ${this.draftPosts.map(
                  (post) => html`
                    <li>
                      ${post.title}
                      <button @click=${() => this.navigateToEditPost(post.id)}>
                        Edit
                      </button>
                    </li>
                  `
                )}
              </ul>
            `}
      </div>
    `;
  }

  static styles = css`
    /* Add your styles here */
  `;
}

customElements.define("all-posts-view", AllPostsView);
