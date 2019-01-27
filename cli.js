#!/usr/bin/env node

const program = require("commander");
const fs = require("fs");
const r = require("./src/replacers");
const readlineSync = require("readline-sync");
let fileNames = [];

program
	.version("0.1.0")
	.option("-p, --peppers", "Add peppers")
	.parse(process.argv);

// process.cwd() gets current working directory that script was invoked from
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

let episodeNumber = startingEpisodeNumber;
for (const file of fileNames) {
	stringEpisodeNumber = episodeNumber.toString();

	file.renamed = `${baseFileName} S${seasonNumber}E${r.twoDigitFormatter(
		stringEpisodeNumber
	)}`;

	episodeNumber++;
}

console.log("Renamed:", fileNames);
