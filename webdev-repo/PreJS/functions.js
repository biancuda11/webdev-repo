function isEven(num) {
	// body...
	if (num%2 === 0 ) {
		return true
	}
	else {
		return false
	}
}

function factorial(num) {
	// body...
	let result = 1;
	for (var i = 2 ; i < num; i++) {
		result *= i;
	}
	return result;
}

function kebabToSnake(kebab) {
	// body...
	let kebab_2 = kebab.replace(/-/g , "_")
	return kebab_2
}