let title = "Write number from 1 to 4";
let x = Number(prompt(title));

if (x === 1) {
	let result = x * 2 / 'a';
	alert(result);
} else if (x === 2) {
	let result = (x - x) / 0;
	alert(result);
} else if (x === 3) {
	let result = 0 * Infinity;
	alert(result);
} else if (x === 4) {
	let result = x * 40000000;
	if (result === Infinity) {
		alert(true);
	} else {
		alert(false);
	}
} else {
	alert("Wrong input");
}

