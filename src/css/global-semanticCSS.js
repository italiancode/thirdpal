import { css } from "lit";

const globalSemanticCSS = css`
  @font-face {
    font-family: "Montserrat";
    src: url("./fonts/Montserrat/Montserrat-VariableFont_wght.ttf")
      format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  /* Base Styles */
  * {
    font-family: "Montserrat", "Segoe UI", "Open Sans", "Helvetica Neue",
      sans-serif;
    color: #2c3e50; /* Dark charcoal */
    letter-spacing: 0.03rem;
    line-height: 1.7em;
  }

  /* Paragraph Styles */
  p {
    color: #2c3e50;
    margin-top: 15px;
  }

  /* Link Styles */
  a {
    text-decoration: none; /* Remove default underlines */
    color: #1b6fb4; /* Choose a link color that complements your design */
    transition: color 0.2s; /* Add a smooth color transition on hover */
    cursor: pointer;
    text-align: center;

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
    color: #34495e; /* Slightly lighter */
  }

  /* Modern text colors for headers */
  h1 {
    color: #2c3e50; /* Dark charcoal */
  }

  h2 {
    color: #34495e; /* Slightly lighter */
  }

  h3 {
    color: #4a6572; /* Even lighter */
  }

  h4 {
    color: #6c7a89; /* Subtle color for h4 */
  }

  h5 {
    color: #8295a7; /* Slightly lighter than h4 */
  }

  h6 {
    color: #a5b7c2; /* Lightest color for h6 */
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
    padding: 0.5rem;
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
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }

  /* Input Focus Styles */

  input:focus {
    border-color: #1b6fb4;
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
    margin-top: -0.3rem;
    color: inherit;
    pointer-events: none;
    transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .form-item input:focus + label,
  .form-item input:valid + label {
    font-size: 11px;
    top: -5px;
  }

  .form-item input:focus + label {
    color: #1b6fb4;
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
    color: #2c3e50; /* Dark charcoal */
    font-size: 14px;
  }

  /* Button Styles */

  .form-button {
    background-color: #1b6fb4;
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

  /* Navigation Item Styles */
  .nav-item {
    color: #6f6f6f;
    padding: 7.5px;
    font-size: 0.9em;
    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;
    display: block;
    opacity: 1;
    transition: color 0.3s, background-color 0.3s;
  }

  .nav-item:hover,
  .toggle-menu-icon:hover,
  .nav-icon-link:hover .nav-icon {
    color: #2980b9;
    background-color: #b3b3b32a;
    border-radius: 5px;
  }

  .nav-item.active {
    color: #2980b9;
    background-color: #b3b3b32a;
    border-radius: 5px;
  }

  .toast-message {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 20px;
    border-radius: 4px;
    color: #fff;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #359ece; /* Background color */
    top: 50%; /* Position at vertical center */
    bottom: unset; /* Remove bottom positioning */
    transform: translate(-50%, -50%); /* Center horizontally and vertically */
    width: 300px; /* Set the width as needed */
    height: 100px; /* Set the height as needed */

    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    z-index: 9999;
    transition: opacity 0.3s ease-in-out;
  }

  .toast-success {
    background-color: #0000003b;
    border: 1px solid #c3e6cb;
    color: #fff;
  }

  .toast-error {
    background-color: #0000003b;
    border: 1px solid #721c24;
    color: #fff;
  }

  /* Positioning for top/bottom */
  .toast-top {
    top: 20px; /* Adjust as needed for top position */
  }

  .toast-bottom {
    bottom: 20px; /* Adjust as needed for bottom position */
  }
`;

export default globalSemanticCSS;
