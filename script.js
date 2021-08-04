'use strict!';

const myNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

/* document.querySelector('.myNum').textContent = myNumber; */

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  } else if (guess === myNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
  } else if (guess > myNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You lost the game! Try Again!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < myNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You lost the game! Try Again!';
      document.querySelector('.score').textContent = 0;
    }
  }
  localStorage.setItem('highScore', score);
  let data = localStorage.getItem('highScore');
  document.querySelector('.highscore').textContent = data;
});

document.querySelector('.again').addEventListener('click', function () {
  location.reload();
});
