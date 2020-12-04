function total(addCount, addPrice, currentTotal = 0) {
	let result = addCount * addPrice + currentTotal;
	return Number(result.toFixed(2));
}

let sum = total(1, 0.1);
sum = total(1, 0.2, sum);
sum = total(1, 0.78, sum);
console.log(sum)
