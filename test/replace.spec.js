const assert = require("assert");
r = require("../src/replacers");

describe("replacers", function() {
	const unchanged = "unchanged";

	describe("convertToFilenameObject()", function() {
		describe("when given an array of filenames", function() {
			it("should return an array of filename objects", function() {
				const original = ["file1.txt", "file2.txt"];
				const expected = [
					{ original: "file1", renamed: null, extension: ".txt" },
					{ original: "file2", renamed: null, extension: ".txt" }
				];

				assert.deepEqual(expected, r.convertToFilenameObject(original));
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

	describe("replaceDashes()", function() {
		describe("when dash is present", function() {
			it("should replace dash", function() {
				assert.equal("some thing", r.replaceDashes("some-thing"));
			});
		});
		describe("when dash is missing", function() {
			it("should return original string", function() {
				assert.equal(unchanged, r.replaceDashes(unchanged));
			});
		});
	});

	describe("replacePeriods()", function() {
		describe("when period is present", function() {
			it("should replace periods", function() {
				assert.equal("some thing", r.replacePeriods("some.thing"));
			});
		});
		describe("when period is missing", function() {
			it("should return original string", function() {
				assert.equal(unchanged, r.replacePeriods(unchanged));
			});
		});
	});
});
