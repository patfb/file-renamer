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

let minimumTwoDigitFormatter = input => {
  return input > 9 ? input.toString() : "0" + input;
};

let rename = (fileNameObjects, baseName, startingNumber) => {
  let renamedArray = [];
  for (const file of fileNameObjects) {
    file.renamed = `${baseName}${minimumTwoDigitFormatter(startingNumber)}`;
    startingNumber++;
    renamedArray.push(file);
  }
  return renamedArray;
};

module.exports = {
  separateExtension,
  separateFileName,
  convertToFileNameObject,
  minimumTwoDigitFormatter,
  rename
};
