var button = document.querySelector("button");
var isPurple = false;

button.addEventListener("click", function(){
  if (isPurple) {
    document.body.style.background = "white";
    isPurple = false;
  } else {
    document.body.style.background = "purple";
    isPurple == true;
  }
  isPurple = !isPurple
});



// function btnColor(btn, color) {
//   let property = document.getElementById(btn);
//   if (property.classname !== 'toggled') {
//     property.style.backgroundColor = color;
//     property.className == 'toggled'
//   } else {
//     property.style.backgroundColor = "rgb(244,113,33)";
//     property.classname == '';
//   }
// }
