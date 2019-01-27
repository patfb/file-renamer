#!/usr/bin/env node

const fs = require("fs");
const r = require("./src/replacers");
const readlineSync = require("readline-sync");
let fileNames = [];

// process.cwd() gets current working directory that script was invoked from

const currentWorkingDirectory = process.cwd();

fs.readdirSync(process.cwd()).forEach((file) => {
	fileNameObject = r.convertToFileNameObject(file);
	fileNames.push(fileNameObject);
});

console.log("Current files in this directory:");
console.log(fileNames);

const baseFileName = readlineSync.question("Base file name: ");
const seasonNumber = readlineSync.question("Season number: ");
const startingEpisodeNumber = readlineSync.question(
	"Starting episode number: "
);

let renamedFileNames = r.rename(
	fileNames,
	baseFileName,
	seasonNumber,
	startingEpisodeNumber
);

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
