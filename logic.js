var startButton = document.getElementById("start_button");
var questions = document.getElementById("questions");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var score = document.getElementById("score");
var timeEl = document.querySelector(".time");
var particularQuestion = document.getElementById("questions");
var answerChoices = document.getElementById("answers");
var secondsLeft = 100;
var questionNumber = -1;
var answer;

startButton.onclick = startQuiz;

function startQuiz(){
    var startScreen = document.querySelector("#start-screen");
    startScreen.setAttribute("class", "hide");
    document.removeAttribute("questions");
    
}  

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left!";

    if (secondsLeft === 0 || questionNumber === questions.length) {
      clearInterval(countdown);
      setTimeout(displayScore, 500);
    }
  }, 1000);
}
setTime();

function makeQuestions() {
  questionNumber++;
  answer = questions[questionNumber].answer;

  particularQuestion.textContent = questions[questionNumber].title;
  answerChoices.innerHTML = "";

  var choices = questions[questionNumber].choices;

  for (var i = 0; i < choices.length; i++) {
      var nextChoice = document.createElement("button");

      nextChoice.textContent = choices[i];
      answerBtn = answerChoices.appendChild(nextChoice);
  }
}



function sendMessage() {
    timeEl.textContent = "Game Over!";  
}





// Select start button
var startBtn = document.getElementById("bu");
// Call startQuiz function on button click
startBtn.onclick = startQuiz;
// Function to start quiz
function startQuiz() {
var startScreen = document.querySelector("#start-screen");
startScreen.setAttribute("class", "hide");
}
//displsy questions
//user clicks on submit => compare user asnwers with correct answers
//user hits sumbit = timer stops(quizz ends) = create an end function and a timer event
