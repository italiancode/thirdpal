// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.html",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#85ffb6",
        secondary: "#7ded93",
        "button-bg": "#1a202c", // This is your button background color
        "button-text": "#ffffff", // This is your button text color
        "button-unselected-bg": "#4a5568", // Background color for unselected buttons
        "button-unselected-text": "#e2e8f0", // Text color for unselected buttons
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],

  darkMode: "class",
  // ... other configurations
};
