// path: ./module/config/app-config.js
// color: #359ece;
// text-color: #2c3e50; /* Dark charcoal */
import appLogo from "/tm.webp";
export default appLogo;

export const appMainColor = "#359bce";

// Determine the protocol based on the environment
const isProduction = import.meta.env.MODE === "production";
export const protocol = isProduction ? "https://" : "http://";

export const appName = import.meta.env.VITE_APP_NAME;
export const appURL = `${protocol}${import.meta.env.VITE_APP_URL}`;
export const appAPI = `${protocol}${window.location.hostname}:3000`;
export const database = "firebase";
export const singleContentBG = "#fff";

export const appMainPath = "/home";

export const appLoginRoute = "/";
export const routePathAfterRegitration = "/";
export const routePathAfterLogin = "/dashboard";

export const registerButtonText = "Sign Up";
export const loginButtonText = "Sign In";
export const logoutButtonText = "Sign Out";
export const instagramLink = "https://www.instagram.com/tokenmama.finance";
export const xLink = "https://twitter.com/tokenmamahq";
