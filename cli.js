#!/usr/bin/env node

const fs = require("fs");
const r = require("./src/replacers");
const readlineSync = require("readline-sync");
const naturalSort = require("./node_modules/javascript-natural-sort/naturalSort");
let fileNames = [];

// process.cwd() gets current working directory that script was invoked from

const currentWorkingDirectory = process.cwd();

let unsortedFiles = fs.readdirSync(process.cwd());

let sortedFiles = unsortedFiles.sort(naturalSort);

sortedFiles.forEach(file => {
  fileNameObject = r.convertToFileNameObject(file);
  fileNames.push(fileNameObject);
});

console.log("Current files in this directory:");
for (const file of fileNames) {
  console.log(`${file.name}${file.extension}`);
}

const baseFileName = readlineSync.question("Base file name: ");
const startingNumber = readlineSync.question("Starting number: ");

let renamedFileNames = r.rename(fileNames, baseFileName, startingNumber);

console.log("Directory:", currentWorkingDirectory);
for (const file of renamedFileNames) {
  console.log(
    `${file.name}${file.extension} --> ${file.renamed}${file.extension}`
  );
}

if (readlineSync.keyInYN("Continue with rename?")) {
  // 'Y' key was pressed.
  console.log("Renaming files...");
  for (const file of renamedFileNames) {
    fs.renameSync(
      currentWorkingDirectory + "\\" + file.name + file.extension,
      currentWorkingDirectory + "\\" + file.renamed + file.extension
    );
  }
} else {
  // Another key was pressed.
  console.log("Rename cancelled");
}
