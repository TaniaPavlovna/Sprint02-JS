let animalName, gender, age;

function myFunc () {
	animalName = prompt("What animal is the superhero most similar to?");
	var re = new RegExp(/^[A-Za-z]{1,20}$/);
	if (!re.test(animalName)) {
		alert("Input is not valid");
		return
	}

	gender = prompt("Is the superhero male or female? Leave blank if unknown or other.");
	var re = new RegExp(/^(female|male|)$/i);
	if (!re.test(gender)) {
		alert("Input is not valid");
		return
	}

	age = prompt("How old is the superhero?");
	var re = new RegExp(/^\d{1,5}$/);
	if (!re.test(age)) {
		alert("Input is not valid");
		return
	}

	if (gender == 'male' && age < 18) {
		var description = 'boy';
	} else if (gender == 'male' && age >= 18) {
		var description = 'man';
	} else if (gender == 'female' && age < 18) {
		var description = 'girl';
	} else if (gender == 'female' && age >= 18) {
		var description = 'woman';
	} else if (gender == '' && age < 18) {
		var description = 'kid';
	} else if (gender == '' && age >= 18) {
		var description = 'hero';
	}

	alert("The superhero name is: " + animalName + "-" + description + "!");
}

myFunc();


