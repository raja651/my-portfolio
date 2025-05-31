// Method 1: Reading entire file
import { readFile, writeFile } from "node:fs/promises";
import { createReadStream, createWriteStream } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

// Get current file directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Define source and destination paths
const sourcePath = join(__dirname, "resume.txt");
const destPath1 = join(__dirname, "resume-copy1.txt");
const destPath2 = join(__dirname, "resume-copy2.txt");

// Method 1: Copy entire file at once
async function copyFileMethod1() {
  console.time("Method 1: Full file");
  try {
    const data = await readFile(sourcePath);
    await writeFile(destPath1, data);
    console.log("Method 1: File copied successfully");
  } catch (err) {
    console.error("Method 1 Error:", err);
  }
  console.timeEnd("Method 1: Full file");
}

// Method 2: Using streams
function copyFileMethod2() {
  console.time("Method 2: Streams");
  return new Promise((resolve, reject) => {
    const readStream = createReadStream(sourcePath);
    const writeStream = createWriteStream(destPath2);

    readStream.on("error", reject);
    writeStream.on("error", reject);
    writeStream.on("finish", () => {
      console.log("Method 2: File copied successfully");
      console.timeEnd("Method 2: Streams");
      resolve();
    });

    readStream.pipe(writeStream);
  });
}

// Run both methods
async function runBothMethods() {
  await copyFileMethod1();
  await copyFileMethod2();
}

runBothMethods().catch(console.error);
