var timerEl = document.querySelector(".timer");
var startScrn = document.querySelector(".startScreen");
var startBtn = document.querySelector(".startBtn");
var questions = document.querySelector(".questions");
var quesPrompt = document.querySelector(".questionPrompt");
var ansOne = document.querySelector(".answerOne");
var ansTwo = document.querySelector(".answerTwo");
var ansThree = document.querySelector(".answerThree");
var ansFour = document.querySelector(".answerFour");
//create function so when game starts, question appears
    //use display = "none" and display = "block" to remove and insert sections
    //question contains 4 answer buttons
    //correct answer selected prints out 'correct' and incorrect answer prints out code 'wrong'
//after a question is answered, index to the next question
//after all questions, or if timer runs out, screen comes up with a score
var timer;
var timerCount;
var allQuest = ["Commonly used data types DO NOT include:", "How old are you?", "what year is it?"];
var allAns = ["boolean", "string", "alerts", "numbers" ]
var quesIndex;
var ansIndex;
questions.style.display = "none";
startBtn.addEventListener("click", startGame);
console.log(ansOne.attributes);

function startGame() {
    startScrn.style.display = "none";    
    questions.style.display = "block";
    timerCount = 50;
    quesIndex = 0;
    ansIndex = 0;
    startTimer()
    fillQuestion();
}

function fillQuestion(){
    if(quesIndex === 0){
        quesPrompt.textContent = allQuest[quesIndex];
        fillAnswer();
        
    }else if(quesIndex === 1){

    }else if(quesIndex === 2){

    }else if(quesIndex === 3){

    }
}

function fillAnswer(){
    if(quesIndex === 0){
        ansIndex = 0;
    }else{
        ansIndex = quesIndex*4;
    }
    ansOne.textContent = allAns[ansIndex];
    ansIndex ++;
    ansTwo.textContent = allAns[ansIndex];
    ansIndex ++;
    ansThree.textContent = allAns[ansIndex];
    ansIndex ++; 
    ansFour.textContent = allAns[ansIndex];
}

function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerEl.textContent = "Time: " + timerCount;
    // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        startScrn.style.display = "block";
        questions.style.display = "none";
        clearInterval(timer);
      }
    }, 1000);
  }
  