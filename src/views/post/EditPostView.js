import { html, css, LitElement } from "lit";
import { firestore_db } from "../../../utils/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

class EditPostView extends LitElement {
  static properties = {
    postId: { type: String }, // Property to store the post ID from the URL parameter
    post: { type: Object }, // Property to store the selected post data
  };

  constructor() {
    super();
    this.postId = ""; // Initialize postId
    this.post = {}; // Initialize post
  }

  async connectedCallback() {
    super.connectedCallback();
    // Get the post ID from the URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    this.postId = urlParams.get("postId");
    await this.fetchPostData();
  }

  async fetchPostData() {
    // Fetch the post data from Firestore based on the post ID
    const postRef = doc(firestore_db, "posts", this.postId);
    const postSnapshot = await getDoc(postRef);
    if (postSnapshot.exists()) {
      this.post = postSnapshot.data();
    }
  }

  async handleSave() {
    // Update the post data in Firestore
    const postRef = doc(firestore_db, "posts", this.postId);
    await updateDoc(postRef, this.post);

    // Optionally, you can navigate back to the all posts view or display a success message
  }

  render() {
    return html`
      <div>
        <h2>Edit Post</h2>
        <label for="title">Title:</label>
        <input
          id="title"
          type="text"
          .value=${this.post.title}
          @input=${(e) => (this.post.title = e.target.value)}
        />
        <label for="content">Content:</label>
        <textarea
          id="content"
          .value=${this.post.content}
          @input=${(e) => (this.post.content = e.target.value)}
        ></textarea>
        <button @click=${this.handleSave}>Save</button>
      </div>
    `;
  }

  static styles = css`
    /* Add your styles here */
  `;
}

customElements.define("edit-post-view", EditPostView);
