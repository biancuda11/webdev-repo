var colors = generateRandomColors(6);
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var pickedColor = randColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var resetButton = document.getElementById("reset")
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var numSquares = 6;

easyBtn.addEventListener("click", function() {
  numSquares = 3
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  colors= generateRandomColors(numSquares);
  pickedColor = randColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.background = colors[i];
    }
    else {
      squares[i].style.display = "none"
    }
  }
})

hardBtn.addEventListener("click", function() {
  numSquares = 6;
  easyBtn.classList.remove("selected")
  hardBtn.classList.add("selected")
  colors= generateRandomColors(numSquares);
  pickedColor = randColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
    squares[i].style.display = "block"
  }
})

resetButton.addEventListener("click", function() {

  // clear the text that says correct
  messageDisplay.textContent = '';
  // generate a list of new colors.
  colors = generateRandomColors(6)
  // pick a new random color from array
  pickedColor = randColor();
  // change colors
  // change color display to match picked color
  colorDisplay.textContent = pickedColor;
  this.textContent = 'New Colors'
  for (var i = 0; i < squares.length; i++) {
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
}
  h1.style.backgroundColor = "steelblue"
})

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  // add initial colors to squares
  squares[i].style.backgroundColor = colors[i];
  // add click listeners to squares
  squares[i].addEventListener("click", function() {
     // grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    // compare to pickedColor
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = 'Correct';
      resetButton.textContent = 'Play Again!';
      changeColors(clickedColor);
      h1.style.backgroundColor = pickedColor;
    } else {
      // fade the square to equal the background color
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = 'Try Again'
    }
  });
}

function changeColors(color) {
  // loop through all squares
  // change each color to match given color
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color
  }
}

function randColor() {
  var random = Math.floor(Math.random() * colors.length)
  return colors[random];
}

function generateRandomColors(num) {
  // make an array
  var arr = []
  // add num random colors to array
  for (var i = 0; i < num; i++) {
    arr.push(randomColor())
  }
  // return array
  return arr;
}

function randomColor() {
  // pick a red from 0 -255
  var r = Math.floor(Math.random() * 256 );
  // picka  green from 0-255
  var g = Math.floor(Math.random() * 256 );
  // pick blue from 0-255
  var b = Math.floor(Math.random() * 256 );
  return "rgb(" + r + ", "+  g + ", "+ b+ ")";
}
