'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent =
      '🛑 No number was selected';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too High 📈';
    score--;
  } else if (guess < secretNumber && guess > 0) {
    document.querySelector('.message').textContent = 'Too Low 📉';
    score--;
  } else {
    document.querySelector('.message').textContent =
      '✅ You guessed correctly!';
    if (score > highScore) {
      document.querySelector('.highscore').textContent = score;
    }
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
  }
  document.querySelector('.score').textContent = score;
  if (score == 0) {
    document.querySelector('.message').textContent = 'You lost the game';
    document.querySelector('body').style.backgroundColor = 'red';
    document.querySelector('.number').textContent = secretNumber;
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
});
