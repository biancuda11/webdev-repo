let colors = ['red','orange','red','blue','green']

for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// for each

colors.forEach(function(color){
  console.log(color);
});

console.log("end of script");
// // define a function
// function color(color) {
//
// }



// ITERATION CHALLENGE: Write a script that will print each item in a list of numbers only if htey are divisible by 3

let numbers = [1,2,3,4,5,6,7,8,9,10];

numbers.forEach(function(num){
  if (num%3 === 0) {
    console.log(num);
  }
});

console.log("TESTING =======");

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i]%3 === 0) {
    console.log(numbers[i]);
  }
}
