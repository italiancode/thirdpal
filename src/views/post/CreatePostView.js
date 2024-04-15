import { html, css, LitElement } from "lit";
import { TWStyles } from "../../css/twlit";
import globalSemanticCSS from "../../css/global-semanticCSS.js";
import { firestore_db } from "../../../utils/firebase.js";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { appName } from "../../module/config/app-config.js";
import { updateTitleAndMeta } from "../../core/router.js";

import "../../rich-text-editor.ts";
import { slugify } from "../../utils/slugify.js";

class CreatePostView extends LitElement {
  static properties = {
    post: { type: Object },
    loading: { type: Boolean },
    error: { type: String },
    description: { type: String },
    thumbnailUrl: { type: String },
    published: { type: Boolean }, // New property for published toggle
  };

  constructor() {
    super();
    this.post = { title: "", content: "" };
    this.error = null;
    this.description = "";
    this.thumbnailUrl = "";
    this.published = false; // Initialize published toggle
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
      const slug = slugify(title);

      const existingDoc = await getDoc(doc(firestore_db, "posts", slug));

      if (existingDoc.exists()) {
        console.warn(
          "Post with this title already exists. Choose a different title."
        );
        return;
      }

      const postRef = doc(firestore_db, "posts", slug);

      await setDoc(postRef, {
        slug: slug,
        title,
        content,
        description: this.description,
        createdAt: new Date(),
        published: this.published, // Include the published property
        thumbnail: this.thumbnailUrl,
      });

      console.log("Content saved to Firestore with Slug:", slug);
    } catch (error) {
      console.error("Error saving content to Firestore:", error);
    }
  }

  render() {
    return html`
      <div class="grid h-full p-5">
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

          <!-- Input for Description -->
          <label for="post-description">Description:</label>
          <input
            id="post-description"
            type="text"
            .value=${this.description}
            @input=${(e) => (this.description = e.target.value)}
          />

          <!-- Input for Thumbnail URL -->
          <label for="post-thumbnail">Thumbnail URL:</label>
          <input
            id="post-thumbnail"
            type="text"
            .value=${this.thumbnailUrl}
            @input=${(e) => (this.thumbnailUrl = e.target.value)}
          />

          <!-- Rich Text Editor -->
          <rich-text>
            <template>
              <h1>Headline 1</h1>
              <!-- ... (your rich text content) ... -->
            </template>
          </rich-text>

          <!-- Toggle switch for Published -->
          <div class="flex items-center mt-4">
            <label for="published" class="mr-2">Published:</label>
            <input
              id="published"
              type="checkbox"
              class="form-checkbox h-5 w-5 text-blue-500"
              .checked=${this.published}
              @change=${(e) => (this.published = e.target.checked)}
            />
          </div>

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




