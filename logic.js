var starting = document.getElementById("start_button");

starting.onclick = startQuiz;

function startQuiz(){
    var startScreen = document.querySelector("#start-screen");
    startScreen.setAttribute("class", "hide");
    var questions = document.removeAttribute("questions");
    
}  


var questions = document.getElementById("questions");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var score = document.getElementById("score");
var timeEl = document.querySelector(".time");


var secondsLeft = 10;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left!";

    if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }

  }, 1000);
}
setTime();

function sendMessage() {
    timeEl.textContent = "Game Over!";  
}


function timeclock() {
    document.getElementById
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
