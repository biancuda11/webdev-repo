console.log("Print All Numbers Between -10 and  19")
console.log(" ====== ")

let x = -10 
while (x <= 19){
	console.log(x)
	x++
}

console.log("Print All EVEN Numbers Between 10 and  40")
console.log(" ====== ")

let num = 10 
while (num <= 40){
	if (num%2 === 0){
		console.log(num)
	}
	num++
}

console.log("Print All ODD Numbers Between 300 and  333")
console.log(" ====== ")

let num2 = 300 
while (num2 <= 330){
	if (num2%2 !== 0){
		console.log(num2)
	}
	num2+=1
}

console.log("LAST ONE: ")
let numb = 5
while (numb < 50){
	if (numb%5 ===0 && numb%3 ===0){
		console.log(numb)
	}
	numb++
}

let answer = prompt("ARE WE THERE YET");

if (answer === 'yes') {
	alert("YAY, we made it!")
} 