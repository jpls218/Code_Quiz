const highScoresList = document.getElementById("score-list");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

for (i=0; i < highScores.length; i++) {
    highScoresList.innerHTML = highScores;
}