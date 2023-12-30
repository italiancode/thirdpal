// path: ./clean-lighthouse-report.js
import { readdirSync, unlinkSync } from "fs";

const reportFileNamePattern =
  /^localhost_\d{4}-\d{2}-\d{2}_\d{2}-\d{2}-\d{2}\.report\.html$/;

try {
  const filesInRoot = readdirSync("./");

  filesInRoot.forEach((fileName) => {
    if (reportFileNamePattern.test(fileName)) {
      unlinkSync(fileName);
      console.log(`Old Lighthouse report (${fileName}) deleted successfully.`);
    }
  });

  console.log("All old Lighthouse reports deleted successfully.");
} catch (err) {
  console.error("Error deleting old Lighthouse reports:", err);
}
