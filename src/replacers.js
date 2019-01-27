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

module.exports = {
	separateExtension,
	onlyFileName,
	convertToFileNameObject,
	twoDigitFormatter
};
