var startButton = $("#startButton");
var secondsLeft = 100;
var questionNumber = 0;
var timeLeft;
var questions = [
  {
      title: "How many noses do slugs have?",
      choices: ["1", "2", "3", "4"],
      answer: "4"
  },

  {
      title: "What direction do bats always fly out of a cave?",
      choices: ["Right", "Left", "Down", "Up"],
      answer: "Left"
  },

  {
      title: "What material makes up a rhino's horn?",
      choices: ["Dirt", "Clay", "Hair", "Skin"],
      answer: "Hair"
  },

  {
      title: "Which animal's brain is smaller than its eye?",
      choices: ["Ostrich", "Seal", "Butteryfly", "Crocodile"],
      answer: "Ostrich"
  },

  {
      title: "Which of these do giraffes not have?",
      choices: ["Legs", "Lungs", "Nose", "Vocal Chords"],
      answer: "Vocal Chords"
  },

  {
      title: "How many glasses of milk can one cow produce in its lifetime?",
      choices: ["100,000", "125,000", "175,000", "200,000"],
      answer: "200,000"
  },

  {
      title: "How long does it take a slug to digest its food?",
      choices: ["1 day", "1 week", "2 weeks", "1 month"],
      answer: "2 weeks"
  },

  {
      title: "How long can a snail sleep for?",
      choices: ["4 hours", "13 hours", "1 day", "2 days"],
      answer: "13 hours"
  },

  {
      title: "Which animal is the only one that can't jump?",
      choices: ["Elephant", "Zebra", "Yak", "Bison"],
      answer: "Elephant"
  },

  {
      title: "Which animal cannot vomit?",
      choices: ["Snake", "Penguin", "Lizard", "Toad"],
      answer: "Toad"
  },


];



var sub_score = $("#submit-score");
sub_score.hide();

var quizQuestions = $("#questions");
quizQuestions.hide();

function startQuiz() {
  console.log("Start the Quiz!");
  var startScreen = $("#start-page");
  startScreen.hide();

  quizQuestions.removeAttr("style");
  showQuestion(questions,0);
  $(".choice").on('click', questionClick);
  startTimer();
}

startButton.on('click', startQuiz);

function startTimer() {

  var countdown = setInterval(function() {
    secondsLeft--;
    $("#secondsLeft").html(secondsLeft)

    if (secondsLeft === 0 || questionNumber === questions.length) {
      clearInterval(countdown);
      endQuiz();
    }
  }, 1000);
}

function showQuestion(questions, q_num) {
  var question = questions[q_num]
  
  $("#card-title").html(question.title);
  console.log(question.title)
  $("#button1").html(question.choices[0]);
  $("#button2").html(question.choices[1]);
  $("#button3").html(question.choices[2]);
  $("#button4").html(question.choices[3]);
}

function questionClick(event) {
  
  var target = $(this);
  var answerClick = target.html();
  console.log(answerClick);
  var answer = questions[questionNumber].answer;
  if (answer != answerClick) {
    secondsLeft -= 10;
    $("#ans").html("WRONG!");
  } else {
    $("#ans").html("CORRECT!")
  }
  nextQuestion();
}

function endQuiz() {
  timeLeft = secondsLeft;
  quizQuestions.hide()
  sub_score.removeAttr("style")
  // $("#secondsLeft").attr("id", "time")
}

function nextQuestion() {
  questionNumber++;
  if (questionNumber > questions.length) {
    endQuiz();
  }
  else {
  
  showQuestion(questions, questionNumber);
  }
}

function submitBtn(event) {
  // get their initials
  console.log(event)
  var scoreName = $("#userName").val();
  // get any previous high scores
  var highScores = localStorage.getItem("btx111");
  if (highScores) {
    // save the high scores in localstorage
    localStorage.setItem("btx111", highScores + "," + scoreName + ":" + timeLeft);
    return;
  }
  localStorage.setItem("btx111", scoreName + ":" + timeLeft);
}

$("#highscore").on("click", submitBtn);
 




