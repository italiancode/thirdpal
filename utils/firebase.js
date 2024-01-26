import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB-3O-tP7Nxr2WHOrKWqzq9J3fq_N0AUho",
  authDomain: "tokenmama-94630.firebaseapp.com",
  projectId: "tokenmama-94630", // Updated to use Firestore
  storageBucket: "tokenmama-94630.appspot.com",
  messagingSenderId: "830081611851",
  appId: "1:830081611851:web:4cddee90d118a46a3e35ce",
  measurementId: "G-80CYW7FTV1",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firestore_db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);

export async function isAuthenticated() {
  return new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const authenticated = true;

        // console.log("Is authenticated:", authenticated);

        resolve(authenticated);
      } else {
        const authenticated = false;
        // console.log("Is authenticated:", authenticated);
        resolve(authenticated);
      }
    });
  });
}
