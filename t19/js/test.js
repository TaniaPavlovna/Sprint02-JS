describe("checkBrackets", function() {
    //correct case
    it("Correct case: (1)()(())2(())", function() {
        assert.equal(checkBrackets('(1)()(())2(()))'), 1);
    });
    it("Correct case: (1)(()(()))2()()", function() {
        assert.equal(checkBrackets('(1)(()(()))2()()))'), 2);
    });
    it("Correct case: hello", function() {
        assert.equal(checkBrackets('hello'), -1);
    });
    it("Correct case: 1()()()2()", function() {
        assert.equal(checkBrackets('1()()()2()'), 0);
    });
    it("Correct case: (1)((()))()()()2(())(()())", function() {
        assert.equal(checkBrackets('(1)((()))()()()2(())(()())'), 0);
    });
    it("Correct case: ()))))", function() {
        assert.equal(checkBrackets('()))))'), 4);
    });
    it("Correct case: ((((((((((((()))))))))))))", function() {
        assert.equal(checkBrackets('((((((((((((()))))))))))))'), 0);
    });
    it("Correct case: (fjdkhg)(jdldodkl", function() {
        assert.equal(checkBrackets('(fjdkhg)(jdldodkl'), 1);
    });
    it("Correct case: (1()()()2)", function() {
        assert.equal(checkBrackets('(1()()()2)'), 0);
    });
    it("Correct case: ((1)(()()2())())", function() {
        assert.equal(checkBrackets('((1)(()()2())())'), 0);
	});

	//incorrect case
    it("Incorrect case", function() {
        assert.equal(checkBrackets(Boolean), 3);
    });
    it("Incorrect case", function() {
        assert.equal(checkBrackets(NaN), 1);
    });
    it("Incorrect case", function() {
        assert.equal(checkBrackets('string'), 4);
    });
    it("Incorrect case", function() {
        assert.equal(checkBrackets(null), 1);
    });
    it("Incorrect case", function() {
        assert.equal(checkBrackets('1)()))()()()2(()(()('), 4);
    });
});
