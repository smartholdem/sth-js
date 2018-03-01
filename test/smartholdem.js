var Buffer = require("buffer/").Buffer;
var should = require("should");
var smartholdem = require("../index.js");

describe("SmartHoldem JS", function () {

	it("should be ok", function () {
		(smartholdem).should.be.ok;
	});

	it("should be object", function () {
		(smartholdem).should.be.type("object");
	});

	it("should have properties", function () {
		var properties = ["transaction", "signature", "vote", "delegate", "crypto"];

		properties.forEach(function (property) {
			(smartholdem).should.have.property(property);
		});
	});

});
