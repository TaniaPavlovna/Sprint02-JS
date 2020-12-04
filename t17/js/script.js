let firstName = prompt('Please, enter your first name')
if (firstName !== null && firstName !== undefined) {
	let lastName = prompt('Please, enter your last name')
	if (lastName !== null && lastName !== undefined) {
		let onlyLetter = firstName.match(/[^A-Za-z]/gi) === null && lastName.match(/[^A-Za-z]/gi) === null;
		let inputNotNull = firstName !== "" && lastName !== "";

		if (onlyLetter && inputNotNull) {
			firstName = firstName.toLowerCase();
			lastName = lastName.toLowerCase();
			firstName = firstName[0].toUpperCase() + firstName.substring(1);
			lastName = lastName[0].toUpperCase() + lastName.substring(1);

			alert("Hi " + firstName + " " + lastName);
			console.log("Hi " + firstName + " " + lastName);
		} else {
			alert("Wrong input");
			console.log("Wrong input");
		}
	}
}
