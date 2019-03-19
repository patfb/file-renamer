const assert = require("chai").assert
r = require("../src/replacers")

describe("replacers", function() {
  describe("rename()", function() {
    describe("when given an array of filename objects", function() {
      it("should populate the rename field with new file name", function() {
        let original = [
          { name: "first", renamed: null, extension: ".txt" },
          { name: "second", renamed: null, extension: ".txt" },
          { name: "third", renamed: null, extension: ".txt" },
        ]

        let expected = [
          {
            name: "first",
            renamed: "New File Name 01",
            extension: ".txt",
          },
          {
            name: "second",
            renamed: "New File Name 02",
            extension: ".txt",
          },
          {
            name: "third",
            renamed: "New File Name 03",
            extension: ".txt",
          },
        ]

        assert.deepEqual(expected, r.rename(original, "New File Name", 1))
      })
    })
  })

  describe("twoDigitFormatter()", function() {
    describe("when given a number", function() {
      it("should return properly formatted number", function() {
        assert.equal("01", r.twoDigitFormatter("1"))
        assert.equal("12", r.twoDigitFormatter("12"))
        assert.equal("102", r.twoDigitFormatter("102"))
      })
    })
  })

  describe("convertToFileNameObject()", function() {
    describe("when given an array of filenames", function() {
      it("should return an array of filename objects", function() {
        const expected = {
          name: "file1",
          renamed: null,
          extension: ".txt",
        }

        assert.deepEqual(expected, r.convertToFileNameObject("file1.txt"))
      })
    })
  })

  describe("separateFileName()", function() {
    describe("when given a file", function() {
      it("should return the file name without the extension", function() {
        assert.equal("something", r.separateFileName("something.mkv"))
      })
    })
  })

  describe("separateExtension()", function() {
    describe("when given a file", function() {
      it("should return the extension", function() {
        assert.equal(".mkv", r.separateExtension("something.mkv"))
      })
    })
  })
})
