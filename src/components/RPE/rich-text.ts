import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { live } from "../../utils/live";

import "./rich-toolbar";
import "./rich-viewer";

@customElement("rich-text")
export class RichText extends LitElement {
  static styles = css`
    .main {
      height: 100%;
      width: 100%;
      display: grid;
      grid-template-rows: auto 1fr;
      grid-template-columns: 1fr;

      grid-template-areas:
        "toolbar"
        "viewer";
    }

    rich-toolbar {
      grid-area: toolbar;
      width: 100%;
      border: 1px solid #96bcdb;

    }

    .rich-viewer {
      grid-area: viewer;
      flex: 1;
      width: 100%;
      height: 320px;
      border: 1px solid #96bcdb;
      border-top: none;
      overflow: hidden;
      overflow-y: scroll;
    }
  `;

  @live selection: Selection | null = null;
  @property({ type: Boolean }) readonly = false;
  @property({ type: Object, hasChanged: () => true }) node: Element =
    document.createElement("div");

  render() {
    const { selection, readonly, node } = this;
    return html`<div class="main">
      <rich-toolbar
        .selection=${selection}
        .node=${node}
        @set-content=${(e: Event) => {
          const event = e as CustomEvent<string>;
          const parser = new DOMParser();
          const doc = parser.parseFromString(event.detail, "text/html");
          const root = doc.querySelector("body");
          this.node.innerHTML = root?.innerHTML ?? "";
          this.requestUpdate();
        }}
      ></rich-toolbar>
      <div class="rich-viewer">
        <rich-viewer
          ?readonly=${readonly}
          @selection=${(e: Event) => {
            const event = e as CustomEvent;
            this.selection = event.detail;
          }}
          .node=${node}
        >
        </rich-viewer>
      </div>
    </div>`;
  }

  firstUpdated() {
    const children = this.children;
    if (children.length > 0) {
      // Check if <template> is the first child
      const template = children[0];
      if (template.tagName === "TEMPLATE") {
        const content = template.innerHTML.trim();
        if (content.length > 0) {
          this.node.innerHTML = content;
          this.requestUpdate();
        }
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "rich-text": RichText;
  }
}
