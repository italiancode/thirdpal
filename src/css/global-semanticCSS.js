import { css } from "lit";

const globalSemanticCSS = css`
  /* Base Styles */

  /* Paragraph Styles */
  p {
    font-family: "Your Font Here", sans-serif; /* Replace with your preferred font */
    font-size: 16px; /* Adjust the font size as needed */
    line-height: 1.5; /* Adjust line height as needed */
    color: #555; /* Choose a suitable text color */
  }

  /* Link Styles */
  a {
    text-decoration: none; /* Remove default underlines */
    color: #0077cc; /* Choose a link color that complements your design */
    transition: color 0.2s; /* Add a smooth color transition on hover */

    /* Style links on hover */
    &:hover {
      color: #005599; /* Slightly darker color on hover */
    }
  }

  /* Other Common Element Styles (e.g., lists, blockquotes, etc.) */

  /* Unordered List Styles */
  ul {
    list-style: disc; /* Use bullets for unordered lists */
  }

  /* Ordered List Styles */
  ol {
    list-style: decimal; /* Use numbers for ordered lists */
  }

  /* Blockquote Styles */
  blockquote {
    font-style: italic; /* Italicize blockquotes */
    border-left: 2px solid #0077cc; /* Add a left border for emphasis */
    padding: 10px; /* Add some padding for spacing */
    color: #555; /* Choose a suitable text color for blockquotes */
  }

  /* Responsive Header Styles for h1 - h6 */

  /* Common header styles for all header tags */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Your Font Here", sans-serif; /* Replace with your preferred font */
    margin: 0; /* Remove default margins */
    line-height: 1.2; /* Adjust line height as needed */
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  /* Responsive text sizes based on screen width */
  /* You can adjust the font-size values as per your design preferences */
  @media screen and (max-width: 600px) {
    h1 {
      font-size: 28px;
    }
    h2 {
      font-size: 24px;
    }
    h3 {
      font-size: 20px;
    }
    h4 {
      font-size: 18px;
    }
    h5 {
      font-size: 16px;
    }
    h6 {
      font-size: 14px;
    }
  }

  @media screen and (min-width: 601px) {
    h1 {
      font-size: 36px;
    }
    h2 {
      font-size: 32px;
    }
    h3 {
      font-size: 28px;
    }
    h4 {
      font-size: 24px;
    }
    h5 {
      font-size: 20px;
    }
    h6 {
      font-size: 18px;
    }
  }

  /* Modern text colors for headers */
  h1 {
    color: #333; /* Choose a suitable dark color */
  }

  h2 {
    color: #555; /* Slightly lighter than h1 */
  }

  h3 {
    color: #777; /* Even lighter */
  }

  h4 {
    color: #999; /* Subtle color for h4 */
  }

  h5 {
    color: #bbb; /* Slightly lighter than h4 */
  }

  h6 {
    color: #ddd; /* Lightest color for h6 */
  }

  /* Form Styles */

  .form {
    width: 90%;
    max-width: 500px;
    margin: auto;
    margin-top: 0.75rem;
    background: #fff;
  }

  .form-header,
  .switch-form {
    width: 100%;
    max-width: 500px;
    margin: 13px auto;
    background: #fff;
    padding: 1rem;
  }

  .form-item {
    position: relative;
    margin-bottom: 3%;
  }

  input {
    outline: none;
    width: 100%;
    box-sizing: border-box;
    padding: 1rem;
    transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .form-item input {
    display: block;
    width: 100%;
    height: 40px;
    background: transparent;
    border: 1px solid #ccc;
    transition: all 0.3s ease;
    padding: 0 2%;
  }

  /* Input Focus Styles */

  input:focus {
    border-color: blue;
  }

  .form-item label {
    position: absolute;
    cursor: text;
    z-index: 2;
    top: 1rem;
    left: 1rem;
    font-size: 12px;
    font-weight: bold;
    background: #fff;
    padding: 0 10px;
    color: #999;
    pointer-events: none;
    transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .form-item input:focus + label,
  .form-item input:valid + label {
    font-size: 11px;
    top: -5px;
  }

  .form-item input:focus + label {
    color: blue;
  }

  /* Checkbox Styles */

  .check-container {
    padding: 0 0 8px;
    display: flex;
    align-items: center;
  }

  .check-container input {
    height: 14px;
    width: 14px;
    margin-right: 8px;
  }

  .check-container label {
    cursor: pointer;
    color: #333;
    font-size: 14px;
  }

  /* Button Styles */

  .form-button {
    background-color: #1a5ee3;
    color: #fff;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 1rem;
  }

  .form-button:hover {
    background-color: #0056b3;
  }
`;

export default globalSemanticCSS;
