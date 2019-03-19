let separateExtension = input => {
  return input.slice(input.lastIndexOf("."));
};

let separateFileName = input => {
  return input.slice(0, input.lastIndexOf("."));
};

let convertToFileNameObject = originalFileName => {
  return {
    name: separateFileName(originalFileName),
    renamed: null,
    extension: separateExtension(originalFileName)
  };
};

let twoDigitFormatter = input => {
  if (input.length <= 2) {
    return ("0" + input).slice(-2);
  } else {
    return input;
  }
};

let rename = (fileNameObjects, baseName, startingNumber) => {
  let startingNumberAsNumber = startingNumber;
  let renamedArray = [];
  for (const [index, value] of fileNameObjects.entries()) {
    console;
    file.renamed = `${baseName} ${twoDigitFormatter(
      startingNumberAsNumber.toString()
    )}`;

    startingNumberAsNumber++;
    renamedArray.push(file);
  }
  return renamedArray;
};

module.exports = {
  separateExtension,
  separateFileName: separateFileName,
  convertToFileNameObject,
  twoDigitFormatter,
  rename
};
