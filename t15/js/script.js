let beginRange = prompt("Enter begin of range");
let endRange = prompt("Enter end of range");
function checkDivision(beginRange, endRange) {
	var checkForNumber = (typeof beginRange === 'number' && typeof endRange === 'number');
	var checkForNanInf = (isFinite(beginRange) && isFinite(endRange));
	if (checkForNumber === false || checkForNanInf === false) {
		beginRange = 1;
		endRange = 100;
	}

	for (let i = beginRange; i <= endRange; i++) {
		if (i % 3 === 0 && i % 2 === 0 && i % 10 === 0) {
			console.log(`${i} is even, a multiple of 3, a multiple of 10 \n`);
		} else if (i % 3 === 0 && i % 2 === 0) {
			console.log(`${i} is even, a multiple of 3 \n`);
		} else if (i % 2 === 0 && i % 10 === 0) {
			console.log(`${i} is even, a multiple of 10 \n`);
		} else if (i % 2 === 0) {
			console.log(`${i} is even \n`);
		} else if (i % 3 === 0) {
			console.log(`${i} a multiple of 3 \n`);
		} else if (i % 10 === 0) {
			console.log(`${i} is multiple of 10 \n`);
		} else {
			console.log(`${i} -`);
		}
	}
}

checkDivision(beginRange, endRange);




