const assert = require("chai").assert;
r = require("../src/replacers");

describe("replacers", () => {
  describe("rename()", () => {
    describe("when given an array of filename objects", () => {
      it("should populate the rename field with new file name", () => {
        let original = [
          { name: "first", renamed: null, extension: ".txt" },
          { name: "second", renamed: null, extension: ".txt" },
          { name: "third", renamed: null, extension: ".txt" }
        ];

        let expected = [
          {
            name: "first",
            renamed: "New File Name S01E01",
            extension: ".txt"
          },
          {
            name: "second",
            renamed: "New File Name S01E02",
            extension: ".txt"
          },
          {
            name: "third",
            renamed: "New File Name S01E03",
            extension: ".txt"
          }
        ];

        assert.deepEqual(expected, r.rename(original, "New File Name S01E", 1));
      });
    });
  });

  describe("minimumTwoDigitFormatter()", () => {
    it("should properly format a 1 digit number", () => {
      assert.strictEqual("01", r.minimumTwoDigitFormatter(1));
    });
    it("should properly format a 2 digit number", () => {
      assert.strictEqual("12", r.minimumTwoDigitFormatter(12));
    });
    it("should properly format a 3 digit number ", () => {
      assert.strictEqual("102", r.minimumTwoDigitFormatter(102));
    });
  });

  describe("convertToFileNameObject()", () => {
    describe("when given an array of filenames", () => {
      it("should return an array of filename objects", () => {
        const expected = {
          name: "file1",
          renamed: null,
          extension: ".txt"
        };

        assert.deepEqual(expected, r.convertToFileNameObject("file1.txt"));
      });
    });
  });

  describe("separateFileName()", () => {
    describe("when given a file", () => {
      it("should return the file name without the extension", () => {
        assert.equal("something", r.separateFileName("something.mkv"));
      });
    });
  });

  describe("separateExtension()", () => {
    describe("when given a file", () => {
      it("should return the extension", () => {
        assert.equal(".mkv", r.separateExtension("something.mkv"));
      });
    });
  });
});
