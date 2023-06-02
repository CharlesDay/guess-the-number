'use strict';

let secretNumber;
getNewNumber();
let score = 20;
let highScore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function displayNumber(number) {
  document.querySelector('.number').textContent = number;
}

function getNewNumber() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
}

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('🛑 No number was selected');
  } else if (guess > secretNumber) {
    displayMessage('Too High 📈');
    score--;
  } else if (guess < secretNumber && guess > 0) {
    displayMessage('Too Low 📉');
    score--;
  } else {
    displayMessage('✅ You guessed correctly!');
    if (score > highScore) {
      document.querySelector('.highscore').textContent = score;
    }
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    displayNumber(secretNumber);
  }
  document.querySelector('.score').textContent = score;
  if (score == 0) {
    displayMessage('You lost the game');
    document.querySelector('body').style.backgroundColor = 'red';
    displayNumber(secretNumber);
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  document.querySelector('.score').textContent = score;
  getNewNumber();
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  displayMessage('Start Guessing...');
  displayNumber('?');
  document.querySelector('.number').style.width = '15rem';
});
