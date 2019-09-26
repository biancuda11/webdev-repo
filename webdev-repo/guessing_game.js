
// create secret number
let secretNumber = 4 

// ask user for guess
let guess = prompt("what do you think the number is?")

// check guess
if (guess == secretNumber) {
	console.log("You won!")
}
else if ((guess - secretNumber) < 0 ) {
	console.log("Too Low!")
}
else if ((guess - secretNumber) > 0 ) {
	console.log("Too High!")
}
else {
	console.log("I'm out of guesses")
}