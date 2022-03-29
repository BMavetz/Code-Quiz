var timerEl = document.querySelector(".timer");
//create function so when game starts, question appears
    //question contains 4 answer buttons
    //correct answer selected prints out 'correct' and incorrect answer prints out code 'wrong'
//after a question is answered, index to the next question
//after all questions, or if timer runs out, screen comes up with a score
var timer;
var timerCount = 5;
startTimer();
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerEl.textContent = "Time: " + timerCount;
    // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
      }
    }, 1000);
  }
  