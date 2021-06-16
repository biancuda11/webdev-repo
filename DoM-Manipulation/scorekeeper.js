var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1Score = 0;
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var p2score = 0;
var gameOver = false;
var winningscoredisplay = document.querySelector("p span")
var paragraph = document.querySelector("p")
var winningScore = 5;
var resetButton = document.getElementById("reset");
var numInput = document.querySelector("input");

console.log(p1display)

numInput.addEventListener("change", function(){
    winningscoredisplay.textContent = numInput.value;
    winningScore = Number(numInput.value);
    reset();

})

p1Button.addEventListener("click", function(){
  console.log(p1Score)
  if (!gameOver) {
    p1Score++;
    console.log(p1Score, winningScore);
    if (winningScore == p1Score) {
      gameOver = true;
      p1display.classList.add('winner');
    }
    p1display.textContent = p1Score;
  }
})

p2Button.addEventListener("click", function () {

  if (!gameOver) {
    p2score++;
    if (p2score === winningScore) {
      gameOver=true;
      p2display.classList.add('winner');
    }
  }
  p2display.textContent = p2score
});

resetButton.addEventListener("click", function() {
  reset();

});

function reset() {
  p1Score = 0;
  p2score = 0;
  p1display.textContent = p1Score;
  p2display.textContent = p2score;
  p1display.classList.remove("winner");
  p2display.classList.remove("winner");
  gameOver = false;
}
