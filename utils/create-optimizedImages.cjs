const fs = require("fs");
const glob = require("glob");
const path = require("path");
const sharp = require("sharp");

// Function to create @optimized version of an image
async function createOptimizedImage(inputPath, outputPath) {
  await sharp(inputPath)
    .resize(Math.floor(0.5 * (await sharp(inputPath).metadata()).width))
    .toFile(outputPath);
}

// Function to create a @thumbnail version of an image
async function createThumbnail(inputPath, outputPath) {
  await sharp(inputPath)
    .resize({ width: 200, height: 200, fit: "cover" })
    .toFile(outputPath);
}

// Function to check if the filename already contains "@optimized"
function hasOptimizedSuffix(filename) {
  return filename.includes("@optimized");
}

function hasThumbnailSuffix(filename) {
  return filename.includes("@thumbnail");
}

// Function to create @optimized versions and thumbnails for images in public/img folder
async function createOptimizedAndThumbnails() {
  const baseFolder = "./public/";
  const processedImages = new Set();

  const files = glob.sync(`${baseFolder}/**/*.+(png|jpg|jpeg|webp)`, {
    nodir: true,
  });

  for (const file of files) {
    const relativePath = path.relative(baseFolder, file);
    const folderPath = path.dirname(relativePath);

    const outputOptimizedFileName = path.join(
      baseFolder,
      folderPath,
      hasOptimizedSuffix(file)
        ? path.basename(file)
        : path.basename(file).replace(/\.(png|jpg|jpeg|webp)$/, "@optimized.$1")
    );

    const outputThumbnailFileName = path.join(
      baseFolder,
      folderPath,
      hasThumbnailSuffix(file)
        ? path.basename(file)
        : path.basename(file).replace(/\.(png|jpg|jpeg|webp)$/, "@thumbnail.$1")
    );

    if (
      !processedImages.has(outputOptimizedFileName) &&
      !processedImages.has(outputThumbnailFileName)
    ) {
      if (!fs.existsSync(outputOptimizedFileName)) {
        await createOptimizedImage(file, outputOptimizedFileName);
        console.log(`Created @optimized version of ${file}`);
      }

      if (!fs.existsSync(outputThumbnailFileName)) {
        await createThumbnail(file, outputThumbnailFileName);
        console.log(`Created thumbnail of ${file}`);
      }

      processedImages.add(outputOptimizedFileName);
      processedImages.add(outputThumbnailFileName);
    }
  }
}

// Call the function to create @optimized versions and thumbnails
createOptimizedAndThumbnails().catch((error) =>
  console.error("Error creating @optimized versions and thumbnails:", error)
);
