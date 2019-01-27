let separateExtension = (input) => {
	return input.slice(input.lastIndexOf("."));
};

let onlyFileName = (input) => {
	return input.slice(0, input.lastIndexOf("."));
};

let convertToFileNameObject = (originalFileName) => {
	return {
		name: onlyFileName(originalFileName),
		renamed: null,
		extension: separateExtension(originalFileName)
	};
};

let twoDigitFormatter = (input) => {
	if (input.length <= 2) {
		return ("0" + input).slice(-2);
	} else {
		return input;
	}
};

let rename = (
	fileNameObjects,
	baseName,
	seasonNumber,
	startingEpisodeNumber
) => {
	let episodeNumber = startingEpisodeNumber;
	let renamedArray = [];
	for (const file of fileNameObjects) {
		file.renamed = `${baseName} S${twoDigitFormatter(
			seasonNumber.toString()
		)}E${twoDigitFormatter(episodeNumber.toString())}`;

		episodeNumber++;
		renamedArray.push(file);
	}
	return renamedArray;
};

module.exports = {
	separateExtension,
	onlyFileName,
	convertToFileNameObject,
	twoDigitFormatter,
	rename
};
