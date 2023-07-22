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
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
      } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
      }
    }, 1000);
  }
}
startGame ()

