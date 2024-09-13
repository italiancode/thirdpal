// assets.js
import appIcon from "/icons/thirdpal-white-bg-logo.png";

// Get app name from environment variables
const appName = import.meta.env.VITE_APP_NAME;

// Export the appIcon and appName
export default {
  appIcon,
  appName,
};
