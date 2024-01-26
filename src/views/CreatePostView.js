import { html, css, LitElement } from "lit";
import { TWStyles } from "../css/twlit";
import globalSemanticCSS from "../css/global-semanticCSS";
import { firestore_db } from "../../utils/firebase.js";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { appName } from "../module/config/app-config.js";
import { updateTitleAndMeta } from "../core/router.js";

import "../rich-text-editor.ts";
import { slugify } from "../utils/slugify.js";

class CreatePostView extends LitElement {
  static properties = {
    post: { type: Object },
    loading: { type: Boolean },
    error: { type: String },
  };

  constructor() {
    super();
    this.post = { title: "", content: "" }; // Initialize with title and content
    this.error = null; // Initial error state
  }

  async connectedCallback() {
    super.connectedCallback();
    updateTitleAndMeta(
      "Create New Something",
      "Be creative - new something",
      appName
    );
  }

  async saveToFirestore(title, content) {
    try {
      const slug = slugify(title); // Generate a slug from the title

      // Check if the document with the same slug exists
      const existingDoc = await getDoc(doc(firestore_db, "posts", slug));

      if (existingDoc.exists()) {
        console.warn(
          "Post with this title already exists. Choose a different title."
        );
        return; // Do not proceed with saving
      }

      // If the document does not exist, proceed with saving
      const postRef = doc(firestore_db, "posts", slug);

      // Set the document with the title, content, and other fields as needed
      await setDoc(postRef, {
        title,
        content,
        description: "",
        createdAt: new Date(),
        published: false,
        thumbnail: "",
      });

      console.log("Content saved to Firestore with Slug:", slug);
    } catch (error) {
      console.error("Error saving content to Firestore:", error);
    }
  }

  render() {
    return html`
      <div class="grid h-full">
        <div id="post-full" class="grid gap-3 mt-10">
          <h2>Create New Something</h2>

          <!-- Input for Post Title -->
          <label for="post-title">Title:</label>
          <input
            id="post-title"
            type="text"
            .value=${this.post.title}
            @input=${(e) => (this.post.title = e.target.value)}
          />

          <!-- Rich Text Editor -->
          <rich-text>
            <template>
              <h1>Headline 1</h1>
              <!-- ... (your rich text content) ... -->
            </template>
          </rich-text>

          <!-- Add a Save button -->
          <button @click=${this.handleSaveClick}>Save</button>
        </div>
      </div>
    `;
  }

  async handleSaveClick() {
    console.log("Title:", this.post.title);

    // Get the rich text content from the rich-text component
    const richTextComponent = this.shadowRoot.querySelector("rich-text");
    const richTextContent = richTextComponent.node.innerHTML;

    console.log("Content:", richTextContent);

    // Check if there is content to save
    if (this.post.title.trim() !== "" && richTextContent.trim() !== "") {
      // Call the saveToFirestore function with the title and content
      await this.saveToFirestore(this.post.title, richTextContent);
    } else {
      console.warn("Please enter both title and content.");
    }
  }

  static styles = [TWStyles, globalSemanticCSS, css``];
}

customElements.define("create-post-view", CreatePostView);

export default CreatePostView;
