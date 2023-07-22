var startBtnEl = document.getElementById("startBtn");
var timerEl = document.getElementById('countdown');

var questions = [
  {
     header: 'Inside which HTML element do we put the JavaScript?',
     choices: ['<scripting>', '<javascript>', '<script>', '<js>'],
     answer: '<script>',
  },
  {
      header: 'Is JavaScript case-sensitive?',
      choices: ['Yes', 'No'],
      answer: 'Yes',
  }, 
  {
      header: 'Which operator is used to assign a value to a variable?',
      choices: ['x', '*', '=', '-'],
      answer: ['='],
  },
  {
      header: 'Which of the following statements will show a message as well as ask for user input in a popup?',
      choices: ['alert()', 'prompt()', 'confirm()', 'message()'],
      answer: 'prompt()',
  },
  {
      header: 'Which of the following is an event listener in JavaScript?',
      chocies: ['onclick', 'blur', 'click', 'Click()'],
      answer: 'click',
  },
];

function startGame () {
    var startGame = document.getElementById('startBtn');
    startGame.onclick = Gamecountdown
     function Gamecountdown() {
    var timeLeft = 75;

    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft + ' seconds remaining';
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
      }
    }, 1000);
  }
}
startGame ()

