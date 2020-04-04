var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var p1Display = document.querySelector("#p1_display");
var p2Display = document.querySelector("#p2Display");
var p1_score = 0;
var p2_score = 0;
var game_over = false;
var winning_score = 5;

p1Button.addEventListener("click", function(){
  console.log(p1_score)
  if (!game_over) {
    p1_score++;
    if (p1_score === winning_score){
        game_over = true;
    }
    p1Display.textContent = p1_score;
  }
})


p2Button.addEventListener("click", function(){
  if (!game_over) {
    p2_score++;
    if (p2_score === winning_score){
        game_over = true;
    }
    p2Display.textContent = p2_score;
  }
})
