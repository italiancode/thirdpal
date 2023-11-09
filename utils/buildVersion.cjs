const fs = require("fs");

var admin = require("firebase-admin");
var serviceAccount = require("./tokenmama-94630-firebase-adminsdk-h10qp-b9eedd1209.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://tokenmama-94630-default-rtdb.firebaseio.com",
});

const db = admin.firestore();

// Define a variable to store the current build version
let currentBuildVersion = "0.0.0"; // Set it to your desired initial version

// Function to retrieve the current build version from the local JSON file
function getBuildVersion() {
  try {
    const buildVersionData = fs.readFileSync(
      "./utils/appinfo/buildVersion.json",
      "utf8"
    );
    const buildVersionObj = JSON.parse(buildVersionData);
    currentBuildVersion = buildVersionObj.version;
    console.log("Current Build Version:", currentBuildVersion);
  } catch (error) {
    console.error("Error getting build version from local JSON:", error);
  }
}

// Function to update the build version in the local JSON file
function updateLocalBuildVersion(newVersion) {
  try {
    const buildVersionObj = { version: newVersion };
    fs.writeFileSync(
      "./utils/appinfo/buildVersion.json",
      JSON.stringify(buildVersionObj, null, 2),
      "utf8"
    );
    console.log("Local build version updated to", newVersion);
  } catch (error) {
    console.error("Error updating local build version:", error);
  }
}

// Function to retrieve the current build version from Firestore
async function getFirestoreBuildVersion() {
  try {
    const buildVersionDoc = await db
      .collection("appInfo")
      .doc("buildVersion")
      .get();

    if (buildVersionDoc.exists) {
      currentBuildVersion = buildVersionDoc.data().version;
      console.log("Firestore Build Version:", currentBuildVersion);
    } else {
      // If the document doesn't exist, create it with the default version
      await setFirestoreBuildVersion(currentBuildVersion);
    }
  } catch (error) {
    console.error("Error getting build version from Firestore:", error);
  }
}

// Function to update the build version in Firestore
async function setFirestoreBuildVersion(newVersion) {
  try {
    await db
      .collection("appInfo")
      .doc("buildVersion")
      .set({ version: newVersion });
    console.log("Firestore build version updated to", newVersion);
  } catch (error) {
    console.error("Error updating Firestore build version:", error);
  }
}

// Call getBuildVersion and getFirestoreBuildVersion to initialize the currentBuildVersion
getBuildVersion();
getFirestoreBuildVersion();

// Now, you can increment the build version by 0.01 and update both local and Firestore versions
function incrementBuildVersion() {
  // Increment the version by 0.01
  const newVersion = (parseFloat(currentBuildVersion) + 0.01).toFixed(2);

  // Update local JSON, Firestore, and package.json
  updateLocalBuildVersion(newVersion);
  setFirestoreBuildVersion(newVersion);
}

// Example: call incrementBuildVersion whenever you build the app
incrementBuildVersion();
