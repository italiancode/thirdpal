// firestoreUtils.js
import {
  addDoc,
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { firestore_db } from "../../utils/firebase";
import { isAuthenticated } from "./authUtils";
import { handleUserLoginAndFetchData } from "./userUtils";

let userId;

export async function storeUserDataInFirestore(user) {
  try {
    const userData = {
      email: user.email,
      userId: user.uid,
      walletAddress: "", // Add walletAddress logic here if needed
      passKey: "",
    };

    await setDoc(doc(firestore_db, "users", user.uid), userData);

    console.log("User data stored in Firestore.");
  } catch (error) {
    console.error("Error storing user data in Firestore:", error);
  }
}

// Update the user's targetData in Firestore
export async function updateUserDataInFirestore(
  userDocId,
  targetData,
  dataInput
) {
  const userRef = doc(firestore_db, "users", userDocId);

  // Create an object to update the specific targetData field
  const dataToUpdate = {};
  dataToUpdate[targetData] = dataInput;

  try {
    await updateDoc(userRef, dataToUpdate);
    console.log("User data updated successfully.");
  } catch (error) {
    console.error("Error updating user data:", error);
    throw error; // You can handle or log the error as needed.
  }
}

// // Update the user's targetData in Firestore
// export async function updateUserDataInFirestore(
//   userDocId,
//   targetData,
//   dataInput
// ) {
//   const userRef = doc(firestore_db, "users", userDocId);

//   // Create an object to update the specific targetData field
//   const dataToUpdate = {};
//   dataToUpdate[targetData] = dataInput;

//   try {
//     await updateDoc(userRef, dataToUpdate);
//     console.log("User data updated successfully.");
//   } catch (error) {
//     console.error("Error updating user data:", error);
//     throw error; // You can handle or log the error as needed.
//   }
// }

export async function getFirestoreUserData() {
  try {
    const authenticated = await isAuthenticated();

    if (authenticated) {
      const userData = await handleUserLoginAndFetchData();

      if (userData) {
        return userData; // Return the entire user data object
      } else {
        console.error("No user is currently authenticated.");
        return null;
      }
    }
  } catch (error) {
    console.error("Error getting user data:", error);
    throw error; // You can handle or log the error as needed.
  }
}

export async function reportIssue(
  issueTitle,
  issue,
  user,
  userName,
  userEmail,
  walletAddress
) {
  const reportsRef = collection(firestore_db, "reports");

  const dataToAdd = {
    issueTitle,
    issue,
    userId: user,
    userName,
    userEmail,
    walletAddress,
    timestamp: new Date(),
  };

  try {
    await addDoc(reportsRef, dataToAdd);
    console.log("Report submitted successfully");
  } catch (error) {
    console.error("Error submitting report: ", error);
  }
}
