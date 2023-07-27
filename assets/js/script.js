var startBtnEl = document.getElementById("startBtn");
var timerEl = document.getElementById('countdown');
var startSectionEl = document.getElementById('start-section');

var questionIndex = 0;

//array of objects?
var questions = [
  {
    question: 'Inside which HTML element do we put the JavaScript?',
    choices: ['<scripting>', '<javascript>', '<script>', '<js>'],
    answer: '<script>'
  },
  {
    question: 'Is JavaScript case-sensitive?',
    choices: ['Yes', 'No'],
    answer: 'Yes',
  },
  {
    question: 'Which operator is used to assign a value to a variable?',
    choices: ['x', '*', '=', '-'],
    answer: '='
  },
  {
    question: 'Which of the following statements will show a message as well as ask for user input in a popup?',
    choices: ['alert()', 'prompt()', 'confirm()', 'message()'],
    answer: 'prompt()'
  },
  {
    question: 'Which of the following is an event listener in JavaScript?',
    choices: ['onclick', 'blur', 'click', 'Click()'],
    answer: 'click'
  },
];

var startGame = document.getElementById('startBtn');
startGame.addEventListener('click', function () {
  startSectionEl.style.display = 'none';
  var timeLeft = 60;
  showNextQuestion()
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
});

//makes a button
var questionBtn = document.createElement("button");

//selecting card-bottom from the html
var cardBtnContainer = document.querySelector(".card-button");

function showNextQuestion() {

  //  cardText is js var. looks for card-content in html
  var cardText = document.querySelector(".card-content");

  //clear the content for next questions and the card-content class and card bottom
  cardBtnContainer.textContent = " ";
  cardText.innerHTML = " ";

  // creates and h2
  var questionText = document.createElement("h2");

  // taking the h2 and filling it with the Question array (object) text.
  questionText.textContent = questions[questionIndex].question;

  // push the h2 to html and questiontext content.
  cardText.appendChild(questionText);

  for (var i = 0; i < questions[questionIndex].choices.length; i++) {
    var questionBtn = document.createElement("button");
    questionBtn.textContent = questions[questionIndex].choices[i];
    questionBtn.addEventListener("click", questionClick);
    cardBtnContainer.appendChild(questionBtn);
  }
};

var answerText = document.querySelector(".card-text");

function questionClick(event) {
  console.log(event);
  var answerCheck = event.target;
  if (answerCheck.innerText !== questions[questionIndex].answer) {
    console.log("Wrong!")
    answerText.textContent = 'Wrong!'
  } else {
    console.log("Correct")
    answerText.textContent = 'Correct!'
  }
  questionIndex++
  showNextQuestion();
};

// function renderLastStorage(){
//   var initials = localStorage.getItem('')
// }
