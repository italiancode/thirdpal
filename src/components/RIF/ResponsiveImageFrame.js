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
        overflow: hidden;
        width: 100%;
        height: 100%;
      }

      .thumbnail-container,
      .image-container {
        display: block;
        margin: 0;
      }

      img {
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

      .thumb-image {
        cursor: pointer;
      }
    `,
  ];

  static get properties() {
    return {
      mainSrc: { type: String },
      alt: { type: String },
      width: { type: String },
      height: { type: String },
      min_height: { type: String },
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
    this.optImageSrc = "";
    this.width = "";
    this.height = "";
    this.min_height = "";
  }

  connectedCallback() {
    super.connectedCallback();
    this.preloadImage();
  }

  async preloadImage() {
    try {
      const isOptimized = this.type === "optimized";
      const isThumbnail = this.type === "thumbnail";

      const imageSuffix = isOptimized
        ? "@optimized.$1"
        : isThumbnail
        ? "@thumbnail.$1"
        : "";

      this.optImageSrc = this.mainSrc.replace(
        /\.(png|jpg|jpeg|webp)$/,
        imageSuffix
      );

      const linkElement = document.createElement("link");
      linkElement.rel = "preload";
      linkElement.as = "image";
      linkElement.href = this.optImageSrc;
      document.head.appendChild(linkElement);

      const image = new Image();
      image.src = this.optImageSrc;
      image.onload = () => {
        this.loaded = true;
      };
      image.onerror = () => {
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

      <div
        class="${containerClass} ${this.width} ${this.height} ${this
          .max_height}"
      >
        ${this.loaded
          ? html`
              <img
                src="${this.optImageSrc}"
                alt="${this.alt}"
                class="loaded w-full h-full"
                loading="eager"
              />
            `
          : html`
              <img
                src="${thumbnail}"
                alt="${this.alt}"
                class="thumb-image w-full h-full"
                loading="eager"
              />
            `}
      </div>
    `;
  }
}

customElements.define("responsive-image-frame", ResponsiveImageFrame);
