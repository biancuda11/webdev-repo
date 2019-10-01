let obj = {
  name: "Chuck",
  age: 45,
  isCool: false,
  friends: ["bob", "tina"],
  add: function(x,y){
    return x+ y;
  }
}

console.log(obj);

console.log(obj.add(10,5))


function speak() {
  return "woof";
}

let dogspace = {}
let catspace = {}

dogspace.speak = function(){
  console.log("WOOF")
}
catspace.speak = function(){
  console.log("MEOW")
}

catspace.speak()
