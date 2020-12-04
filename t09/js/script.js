function showSuperHero() {
	var blackWidow = {
		team: "S.H.I.E.L.D.",
		universe: "Marvel",
		race: "human",
		eyeColor: "green",
		hairColor: "lightBrown/green"
	}

	var supermanRobin = {
		teams: "Teen Titans",
		universe: "DC Comics",
		race: "kryptonian",
		eyeColor: "blue",
		hairColor: "black"
	}

	if (blackWidow !== undefined && blackWidow.team === "S.H.I.E.L.D." && blackWidow.universe === "Marvel" && blackWidow.race === "human" && blackWidow.eyeColor === "green" && blackWidow.hairColor === "lightBrown/green") {
		alert("This is Black Widow!");
	} else {
		alert("Didn't recognize!")
	}

	if (supermanRobin !== undefined && supermanRobin.teams === "Teen Titans" && supermanRobin.universe === "DC Comics" && supermanRobin.race === "kryptonian" && supermanRobin.eyeColor === "blue" && supermanRobin.hairColor === "black") {
		alert("This is a Superman or Robin!");
	} else {
		alert("Didn't recognize!")
	}
}

showSuperHero();
