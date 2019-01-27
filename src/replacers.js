let replacePeriods = (input) => {
	return input.replace(".", " ");
};

let replaceDashes = (input) => {
	return input.replace("-", " ");
};

let separateExtension = (input) => {
	return input.slice(input.lastIndexOf("."));
};

let onlyFileName = (input) => {
	return input.slice(0, input.lastIndexOf("."));
};

let convertToFilenameObject = (originalFilenames) => {
	let mappedFilenames = [];

	for (const file of originalFilenames) {
		let filename = {
			original: onlyFileName(file),
			renamed: null,
			extension: separateExtension(file)
		};
		mappedFilenames.push(filename);
	}
	return mappedFilenames;
};

module.exports = {
	replacePeriods,
	replaceDashes,
	separateExtension,
	onlyFileName,
	convertToFilenameObject
};
