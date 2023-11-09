// Import the necessary Firebase modules
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { appMainPath, routePathAfterLogin } from "../module/config/app-config";

// Variable to store the user ID
let userId;

// Function to route after authentication
async function routeAfterAuth(path) {
  window.location.href = path;
}

// Function for user registration
async function register(email, password, sendEmailVerification) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    if (sendEmailVerification) {
      await sendEmailVerificationToUser(userCredential.user);
    }

    // console.log("Registration successful");

    return userCredential.user;
  } catch (error) {
    console.error("Registration failed:", error.message);
  }
}

// Function to send email verification
async function sendEmailVerificationToUser(user) {
  try {
    await sendEmailVerification(user);
    console.log("Verification email sent to " + user.email);
  } catch (error) {
    console.error("Failed to send verification email:", error.message);
  }
}

// Function for user login
async function login(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    userId = userCredential.user.uid; // Store the user ID
    console.log("Login successful");
    routeAfterAuth(routePathAfterLogin);
    return userCredential.user;
  } catch (error) {
    console.error("Login failed:", error.message);
  }
}

// Function to check if a user is authenticated
async function isAuthenticated() {
  return new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const authenticated = true;
        const userId = user.uid; // Store the user ID

        console.log("Is authenticated:", authenticated);

        resolve(authenticated);
      } else {
        const userId = null; // Reset

        const authenticated = false;
        console.log("Is authenticated:", authenticated);
        resolve(authenticated);
      }
    });
  });
}

// Function to log out
function logout() {
  window.location.href = appMainPath;
  return auth.signOut();
}

// Function to log out
function forgetPassword() {
  return auth.signOut();
}

export { register, login, isAuthenticated, logout, forgetPassword };
