function solver(a, b, c, d, e) {

	var cheackForNumber = (typeof a === 'number' && typeof b === 'number' && typeof c === 'number' && typeof d === 'number' && typeof e === 'number');
	var cheackForNanInf = (isFinite(a) && isFinite(b) && isFinite(c) && isFinite(d) && isFinite(e));

	if (cheackForNumber === true && cheackForNanInf === true) {
		let x = Math.pow(a, 2) - (5 * b * c) + (d / 3) + e;
		return (x.toFixed(2));
	} else {
		return "Wrong input"
	}
}

alert(solver(40, -9, 0.5, 7, 100));
