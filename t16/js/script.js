function firstElements(arr = [], n = 0) {

	if (n < 0) {
		n = 0;
	}
	if (arr.length < n) {
		n = arr.length;
	}
	let newArr = arr.slice(0, n);
	return newArr;
}

var heroes= ["Captain America", "Hulk", "Thor", "Iron Man", "Spider-Man"];
console.log(firstElements(heroes, 3));
