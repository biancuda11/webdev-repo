const p1 = {
  score: 0,
  button: document.querySelector('#p1Button'),
  display: document.querySelector('#p1Display')
}

const p2 = {
  score: 0, 
  button: document.querySelector('#p2Button')  ,
  display: document.querySelector('#p2Display'),
}
const p1Button = document.querySelector('#p1Button')
const p2Button = document.querySelector('#p2Button')
const p2Display = document.querySelector('#p2Display')
const p1Display = document.querySelector('#p1Display')
const resetButton = document.querySelector('#reset')
const winningScoreSelect = document.querySelector('#playto')
let winningScore = 5;
let p1Score = 0
let p2Score = 0
let isGameOver = false;

function updateScore(player, opponent){
  if (!isGameOver) {
    player.score += 1; 
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add('winner');
      opponent.display.classList.add('loser');
      player.button.disabled = true;
      opponent.button.disabled = true;
    } 
    player.display.textContent = player.score;
  }

}



p1.button.addEventListener('click', function () {
  updateScore(p1, p2)
})

p2.button.addEventListener('click', function () {
  updateScore(p2,p1)
})

resetButton.addEventListener('click', reset)

winningScoreSelect.addEventListener('change', function(){
  winningScore = parseInt(this.value);
  reset();
})

function reset() {
  isGameOver = false;
  p1.score = 0;
  p2.score = 0;
  p1.button.disabled = false;
  p2.button.disabled = false;
  p1.display.classList.remove('winner','loser')
  p2.display.classList.remove('winner','loser')
  p1.display.textContent = 0;
  p2.display.textContent = 0;
}
