const assert = require("assert");
r = require("../src/replacers");

describe("replacers", function() {
	const unchanged = "unchanged";

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
