const assert = require("chai").assert;
r = require("../src/replacers");

describe("replacers", function() {
	describe("rename()", function() {
		describe("when given an array of filename objects", function() {
			it("should populate the rename field with new file name", function() {
				let original = [
					{ name: "text", renamed: null, extension: ".txt" },
					{ name: "text", renamed: null, extension: ".txt" },
					{ name: "text", renamed: null, extension: ".txt" }
				];

				let expected = [
					{
						name: "text",
						renamed: "New File Name S02E01",
						extension: ".txt"
					},
					{
						name: "text",
						renamed: "New File Name S02E02",
						extension: ".txt"
					},
					{
						name: "text",
						renamed: "New File Name S02E03",
						extension: ".txt"
					}
				];

				assert.deepEqual(
					expected,
					r.rename(original, "New File Name", 2, 1)
				);
			});
		});
	});

	describe("twoDigitFormatter()", function() {
		describe("when given a number", function() {
			it("should return properly formatted number", function() {
				assert.equal("01", r.twoDigitFormatter("1"));
				assert.equal("12", r.twoDigitFormatter("12"));
				assert.equal("100", r.twoDigitFormatter("100"));
			});
		});
	});

	describe("rename()", function() {
		describe("when given an array of fileNameObjects", function() {
			it("should rename the original files and save them in the object", function() {});
		});
	});

	describe("convertToFileNameObject()", function() {
		describe("when given an array of filenames", function() {
			it("should return an array of filename objects", function() {
				const expected = {
					name: "file1",
					renamed: null,
					extension: ".txt"
				};

				assert.deepEqual(
					expected,
					r.convertToFileNameObject("file1.txt")
				);
			});
		});
	});

	describe("onlyFileName()", function() {
		describe("when given a file", function() {
			it("should return the file name without the extension", function() {
				assert.equal("something", r.onlyFileName("something.mkv"));
			});
		});
	});

	describe("separateExtension()", function() {
		describe("when given a file", function() {
			it("should return the extension", function() {
				assert.equal(".mkv", r.separateExtension("something.mkv"));
			});
		});
	});
});
