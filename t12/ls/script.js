function myFunc(length) {
	let triange = '';

	for (let i = 1; i <= length; i++) {
		for (let j = 1; j <= i; j++) {
			triange += '*';
		}
		triange += ('\n');
	}
	alert(triange)
}

myFunc(5)
