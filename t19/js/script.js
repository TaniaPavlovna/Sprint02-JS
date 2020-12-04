function checkBrackets(str) {
	let stack = [];

	if (!(typeof str === "string") || !str.match(/[()]/)) {
	  return -1;
	} else {
	  for (let i = 0; i <= str.length; i++) {
		if (str.charAt(i) == "(") {
		  stack.push("(");
		}
		if (str.charAt(i) == ")") {
		  stack.push(")");
		}
	  }
	  stack = stack.join("");

	  for (let i = 0; i <= str.length; i++) {
		stack = stack.replace(/\(\)/, "");
	  }
	}
	return stack.length;
  }

console.log(checkBrackets("1)()(())2(()"));

