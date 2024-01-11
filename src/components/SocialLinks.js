import { html, css, LitElement } from "lit";
import {
  appMainColor,
  instagramLink,
  xLink,
} from "../module/config/app-config";

import ig_icon from "../assets/webp_img/ig.webp";
import x_icon from "../assets/webp_img/x.webp";
import globalSemanticCSS from "../css/global-semanticCSS";
import { TWStyles } from "../css/twlit";

class SocialLinks extends LitElement {
  static styles = [
    TWStyles,
    globalSemanticCSS,
    css`
      .social-links {
        display: flex;
        width: auto;
        height: 35px;
        gap: 10px;
        margin-left: auto;
        align-items: center;
      }

      /* .social-links h3 {
    } */

      .social-icon {
        display: flex;
        align-items: center;
        width: 36px;
        height: 36px; /* To make it a square */
        text-decoration: none;
        padding: 6px;
        transition: color 0.3s ease;
        border: 2px solid #1b6fb4;
        border-radius: 50%; /* This will make it a circular shape */
      }

      .social-icon:hover {
        border-color: #0056b3; /* Change the border color on hover */
        background-color: #819dcd80;
      }
    `,
  ];

  render() {
    return html`
      <div class="social-links">
        <label class="font-semibold text-lg hidden">Social Links:</label>
        <a href=${xLink} class="social-icon" target="_blank">
          <img src=${x_icon} class="icon" alt="X" />
        </a>

        <a href=${instagramLink} class="social-icon" target="_blank">
          <img src=${ig_icon} class="icon w-9" alt="Instagram" />
        </a>
      </div>
    `;
  }
}

customElements.define("social-links", SocialLinks);
