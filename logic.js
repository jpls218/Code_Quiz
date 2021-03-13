var startButton = document.getElementById("startButton");
var submitButton = document.querySelector("button.submitBtn");
var score = document.getElementById("score");
var timeEl = document.getElementById("time");
var answerChoices = document.getElementById("answers");
var userScoreElement = document.getElementById("user-score");
var secondsLeft = 100;
var questionNumber = -1;


var scoreList = document.getElementById("score-list");

var endQuiz = $("#submit-score");
endQuiz.hide();

var quizQuestions = $("#questions");
quizQuestions.hide();

function startQuiz() {
  console.log("Start the Quiz!");
  var startScreen = $("#start-page");
  startScreen.hide();

  quizQuestions.removeAttr("style");
  showQuestion(questions[0]);
  $(".answer-choice").on('click', questionClick);
  startTimer();
}

startButton.on('click', startQuiz);

function startTimer() {

  var countdown = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;

    if (secondsLeft === 0 || questionNumber === questions.length) {
      clearInterval(countdown);
      endQuiz();
    }
  }, 1000);
}

function showQuestion() {
  $("#QA-block").html(questions.title);
  $("#buttonA").html(questions.choices[0]);
  $("#buttonB").html(questions.choices[1]);
  $("#buttonC").html(questions.choices[2]);
  $("#buttonD").html(questions.choices[3]);
}

function
 
//   document.getElementById("start_page").classList.add('d-none');
 
//   document.getElementById("question_list").classList.remove('d-none');

//   // timer set and begins 120 second countdown
//   setTime();

//   // create questions to display
//   makeQuestions();
// }

// startButton.addEventListener("click", startTimer);
// submitButton.addEventListener("click", function (event) {
//     event.stopPropagation();
//     addScore();
   
// });



// function makeQuestions() {
//   questionNumber++;
//   answer = questions[questionNumber].answer;

//   particularQuestion.textContent = questions[questionNumber].title;
//   answerChoices.innerHTML = "";

//   var choices = questions[questionNumber].choices;

//   for (var i = 0; i < choices.length; i++) {
//       var nextChoice = document.createElement("button");

//       nextChoice.textContent = choices[i];
//       answerBtn = answerChoices.appendChild(nextChoice).setAttribute("class", "p-3 m-1 btn btn-light btn-block");
//   }
// }


// function addScore () {
//   userNameInput = document.getElementById("userName").value
//   console.log(userNameInput);
  
//   // create a new object with name and score keys
//   var newScore = {
//       name: userNameInput,
//       score: secondsLeft
//   };
//   // check if there are scores in local storage first and take value
//   //if not, make a blank array
//   var highScores = JSON.parse(localStorage.getItem("highScores") || "[]");
//   console.log(highScores);
//   // push object into score array
//   highScores.push(newScore)
//   // turn objects into an array of strings + put it into local storage
//   localStorage.setItem("highScores", JSON.stringify(highScores));
//   //newScore.appendTo("#score-list");
//   // highScores.sort(function (a, b) {
//   //   return b.score - a.score;
//   // })  
//   // for (var i = 0; i < highScores.length; i++) {
//   document.createElement("li");
//   scoreList.innerHTML = highScores;
//   return highScores;
//   }
// // }
// function displayScore() {
//   document.getElementById("question_list").classList.add('d-none');
//   document.getElementById("submit-score").classList.remove('d-none');
//   userScoreElement.textContent = "FINAL SCORE: " + secondsLeft + ".";
// }

// function hideFeedback(){
//   var pElement = document.getElementsByClassName("feedback")[0]
//   pElement.style.display='none'
// }

// function showFeedback(){
//   var pElement = document.getElementsByClassName("feedback")[0]
//   pElement.removeAttribute('style');
// }

// answerChoices.addEventListener("click", function (event) {
//   var pElement = document.getElementsByClassName("feedback")[0]
  
//   if (answer === event.target.textContent) {   
//       setTimeout(hideFeedback,1225);
//       console.log("correct");
//       showFeedback();   
      
//   } else {
//       setTimeout(hideFeedback,1225);
//       secondsLeft = secondsLeft - 15;
//       console.log("wrong");
//       showFeedback();

//   }    
//   makeQuestions();
// });


//     // get the highScores list and turn it back into an object
// // highScores = JSON.parse(localStorage.getItem("highScores") || "[]");
// // scoreList = document.getElementById("score-list");

// // sort scores from high to low
// // highScores.sort(function (a, b) {
// //     return b.score - a.score;
// // })


// // display the scores
// // for (var i = 0; i < highScores.length; i++) {
// //     newScores = document.createElement("li");
// //     newScores.textContent = highScores[i].name + " - " + highScores[i].score;
    
    
// // }





