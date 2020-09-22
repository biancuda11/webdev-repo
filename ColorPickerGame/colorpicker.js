var numSquares = 6;
var pickedColor;
var colors = generateRandomColors(numSquares);
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var resetButton = document.getElementById("reset")
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      if (this.textContent ==="Easy") {
        numSquares = 3;
      } else {
        numSquares = 6;
      }

      reset();

    })
  }
  for (var i = 0; i < squares.length; i++) {
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
  reset();
}


function reset() {
  colors = generateRandomColors(numSquares)
  // pick a new random color from array
  pickedColor = randColor();
  // change colors
  // change color display to match picked color
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = 'New Colors'
  messageDisplay.textContent = "";
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none"
    }
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
}
  h1.style.backgroundColor = "steelblue"

}

resetButton.addEventListener("click", function() {
  reset();
})

colorDisplay.textContent = pickedColor;


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
