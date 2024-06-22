// userUtils.js
import { doc, getDoc } from "firebase/firestore";
import { firestore_db } from "../../utils/firebase";
import { auth } from "../../utils/firebase";
import { getFirestoreUserData } from "./firestoreUtils";
import { onAuthStateChanged } from "firebase/auth";

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

// Function to fetch user data from Firestore based on UID
export async function fetchUserData(uid) {
  try {
    const userDocRef = doc(firestore_db, "users", uid); // Create a reference to the user document
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      return userDoc.data();
    } else {
      console.error("User data not found for UID:", uid);
      return null;
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
}

// Function to handle user login and fetch data
export async function handleUserLoginAndFetchData() {
  const user = auth.currentUser;

  if (user) {
    return await fetchUserData(user.uid); // Fetch and return user data if the user is logged in
  }

  return null; // Return null if the user is not logged in
}

// Define a function to get user data from Firestore
// export async function getSessionUserData() {
//   try {
//     // Replace 'getFirestoreUserData' with your actual function to retrieve user data from Firestore
//     const userData = await getFirestoreUserData();
//     return userData;
//   } catch (error) {
//     console.error("Error getting session user data:", error);
//     return null;
//   }
// }
