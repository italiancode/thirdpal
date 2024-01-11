// path: ./module/component/RIF/ResponsiveImageFrame.js
import { html, css, LitElement } from "lit";
import thumbnail from "./thumbnail.webp";
import globalSemanticCSS from "../../css/global-semanticCSS";
import { TWStyles } from "../../css/twlit";

class ResponsiveImageFrame extends LitElement {
  static styles = [
    TWStyles,
    globalSemanticCSS,
    css`
      :host {
        display: block;
        position: relative;
        width: 100%;
        padding-bottom: 0;
        padding-top: 0; /* Maintain a square aspect ratio */
        margin-bottom: 0;
        overflow: hidden;
      }

      .image-container {
        margin: 0 auto;
        height: auto; /* Set initial height as 79% of viewport height */
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .thumbnail-container {
        width: inherit;
        height: auto;
        object-fit: contain;
        /* margin: 0 auto; */
        display: block;
      }

      img {
        width: inherit;
        height: auto;
        object-fit: contain;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
      }

      img.loaded {
        opacity: 1;
      }

      .image-label {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: inherit;
        color: #666;
        z-index: 1;
      }

      .placeholder-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f0f0f0; /* Set placeholder background color */
      }

      .warning-text {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(
          240,
          240,
          240,
          0.8
        ); /* Semi-transparent background */
        color: #666;
        font-size: 16px;
        font-weight: bold;
      }

      .thumb-image {
        cursor: pointer;
      }
    `,
  ];

  static get properties() {
    return {
      mainSrc: { type: String },
      alt: { type: String },
      fallbackLabel: { type: String },
      type: { type: String },
      loaded: { type: Boolean },
      showWarning: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.loaded = false;
    this.showWarning = false;
    this.optImageSrc = ""; // Initialize the optImageSrc property
  }

  connectedCallback() {
    super.connectedCallback();
    this.preloadImage();
  }

  async preloadImage() {
    try {
      const isOptimized = this.type === "optimized";
      const isThumbnail = this.type === "thumbnail";

      // Get the appropriate image suffix based on type and flags
      const imageSuffix = isOptimized
        ? "@optimized.$1"
        : isThumbnail
        ? "@thumbnail.$1"
        : "";

      this.optImageSrc = this.mainSrc.replace(
        /\.(png|jpg|jpeg|webp)$/,
        imageSuffix
      );

      // Create a new link element and add it to the head to preload the image
      const linkElement = document.createElement("link");
      linkElement.rel = "preload";
      linkElement.as = "image";
      linkElement.href = this.optImageSrc;
      document.head.appendChild(linkElement);

      // Preload the image
      const image = new Image();
      image.src = this.optImageSrc;
      image.onload = () => {
        this.loaded = true;
      };
      image.onerror = () => {
        // Show warning if image is not available
        this.showWarning = true;
      };
    } catch (error) {
      console.error("Error loading image:", error);
    }
  }

  render() {
    const isThumbnailType = this.type === "thumbnail";
    const containerClass = isThumbnailType
      ? "thumbnail-container"
      : "image-container";

    return html`
      <link rel="preload" href=${thumbnail} as="image" />

      <div class="${containerClass}">
        ${this.loaded
          ? html`
              <!-- Only display the image if loaded -->
              <img src="${this.optImageSrc}" alt="${this.alt}" class="loaded" />
            `
          : html`
              <!-- Placeholder image (thumbnail) -->
              <div class="placeholder-image">
                ${this.showWarning
                  ? html`<div class="warning-text">
                      Optimized image not found. Click on the thumbnail to view
                      the main image.
                    </div>`
                  : ""}
                <!-- Thumb image with click event listener -->
                <img src="${thumbnail}" alt="${this.alt}" class="thumb-image" />
              </div>
            `}
      </div>
    `;
  }
}

customElements.define("responsive-image-frame", ResponsiveImageFrame);
