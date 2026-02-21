let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessFeild');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const loworhigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.result');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1 || guess > 100) {
    alert('Please enter the number between 1 to 100');
  } else {
    prevGuess.push(guess);

    if (numGuess == 10) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess == randomNumber) {
    displayMessage('🎉 You guessed it right 😘🫡');
    endGame();
  } else if (guess < randomNumber) {
    displayMessage('Number is TOO low');
  } else {
    displayMessage('Number is TOO high');
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  loworhigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.setAttribute('disabled', '');
  submit.setAttribute('disabled', '');
  playGame = false;

  const button = document.createElement('button');
  button.innerText = 'Start New Game';
  button.classList.add('newGameBtn');

  startOver.appendChild(button);

  button.addEventListener('click', newGame);
}

function newGame() {
  // Reset values
  randomNumber = parseInt(Math.random() * 100 + 1); // regenerate number
  prevGuess = [];
  numGuess = 1;
  guessSlot.innerHTML = '';
  remaining.innerHTML = '10';
  loworhigh.innerHTML = '';

  userInput.removeAttribute('disabled');
  submit.removeAttribute('disabled');
  userInput.value = '';
  playGame = true;

  // Remove button
  const btn = document.querySelector('.newGameBtn');
  btn.remove();
}