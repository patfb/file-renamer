#!/usr/bin/env node

const program = require("commander");
const fs = require("fs");
require = require("esm");

program
	.version("0.1.0")
	.option("-p, --peppers", "Add peppers")
	.parse(process.argv);

console.log("Current files in this directory:");

// process.cwd() gets current working directory that script was invoked from
fs.readdirSync(process.cwd()).forEach(file => {
	console.log(file);
});
