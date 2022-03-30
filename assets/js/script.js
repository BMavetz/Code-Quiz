var header = document.querySelector(".header");
var timerEl = document.querySelector(".timer");
var startScrn = document.querySelector(".startScreen");
var startBtn = document.querySelector(".startBtn");
var questions = document.querySelector(".questions");
var quesPrompt = document.querySelector(".questionPrompt");
var ansA = document.querySelector(".answerA");
var ansB = document.querySelector(".answerB");
var ansC = document.querySelector(".answerC");
var ansD = document.querySelector(".answerD");
var isCorrect = document.querySelector(".isCorrect");
var score = document.querySelector(".playerScore");
var scorePg = document.querySelector(".scorePage");
var initials = document.querySelector("#initials");
var submitBtn = document.querySelector(".submitBtn");
var highscorePage = document.querySelector(".highscore");
var goBack = document.querySelector("#goBack");
var clrScore = document.querySelector("#clrScore");
var scoreList = document.querySelector(".scoreList");
var viewHiScore = document.querySelector(".highscore-list")
//create function so when game starts, question appears
    //use display = "none" and display = "block" to remove and insert sections
    //question contains 4 answer buttons
    //correct answer selected prints out 'correct' and incorrect answer prints out code 'wrong'
//after a question is answered, index to the next question
//after all questions, or if timer runs out, screen comes up with a score
var timer;
var timerCount;
var allQuest = ["Commonly used data types DO NOT include:", "The condition within an if/else statement is enclosed within ________.", 
"A very useful tool used during development and debugging for printing content to the debugger is:","A ____ blank file is used to format the contents and style of the elements on a webpage, defining characteristics such as color, size, font, and more"];
var allAns = ["boolean", "string", "alerts", "numbers","quotes", "curly brackets", "parentheses", "square brackets",
"JavaScript", "terminal/bash", "for loops", "console.log","CSS","HTML","Javascript","jQuery"];
var quesIndex;
var ansIndex;
var playerScr;
function resetPage(){
questions.style.display = "none";
scorePg.style.display = "none";
highscorePage.style.display = "none";
startScrn.style.display = "block";
header.style.display = "flex";
}
startBtn.addEventListener("click", function(){
    startGame();
});


function startGame() {
    startScrn.style.display = "none";
    scorePg.style.display = "none";    
    questions.style.display = "block";
    timerCount = 50;
    quesIndex = 0;
    ansIndex = 0;
    playerScr = 0;
    isCorrect.textContent = "";
    startTimer()
    fillQuesAns(0);  
}

function fillQuesAns(number){
    quesIndex = quesIndex + number;
    console.log(playerScr);
    if(quesIndex >= allQuest.length){
        finalScore();
        clearInterval(timer);
    }else{
    console.log(quesIndex);
    quesPrompt.textContent = allQuest[quesIndex];
    if(quesIndex === 0){
        ansIndex = 0;
    }else{
        ansIndex = quesIndex*4;
    }
    ansA.textContent = allAns[ansIndex];
    ansIndex ++;
    ansB.textContent = allAns[ansIndex];
    ansIndex ++;
    ansC.textContent = allAns[ansIndex];
    ansIndex ++; 
    ansD.textContent = allAns[ansIndex];
    }
}
ansA.addEventListener("click",function(){
    if(quesIndex === 0){
        isCorrect.textContent = "Wrong!";
        timerCount -=10;
        playerScr -= 2;
        fillQuesAns(1);
    }  
    else if(quesIndex === 1){
        isCorrect.textContent = "Wrong!";
        timerCount -=10;
        playerScr -= 2;
        fillQuesAns(1);
        
    } 
    else if(quesIndex === 2){
        isCorrect.textContent = "Wrong!";
        timerCount -=10;
        playerScr -= 2;
        fillQuesAns(1);
        
    }else if(quesIndex === 3){
        isCorrect.textContent = "Correct!";
        playerScr += 5;
        fillQuesAns(1);
    }
})
ansB.addEventListener("click",function(){
    if(quesIndex === 0){
        isCorrect.textContent = "Wrong!";
        timerCount -=10;
        playerScr -= 2;
        fillQuesAns(1);
    }  
    else if(quesIndex === 1){
        isCorrect.textContent = "Wrong!";
        timerCount -=10;
        playerScr -= 2;
        fillQuesAns(1);
    } 
    else if(quesIndex === 2){
        isCorrect.textContent = "Wrong!";
        timerCount -=10;
        playerScr -= 2;
        fillQuesAns(1);
        
    }else if(quesIndex === 3){
        isCorrect.textContent = "Wrong!";
        timerCount -=10;
        playerScr -= 2;
        fillQuesAns(1);
        
    }
})
ansC.addEventListener("click",function(){
    if(quesIndex === 0){
        isCorrect.textContent = "Correct!";
        playerScr += 5;
        fillQuesAns(1);
    }  
    else if(quesIndex === 1){
        isCorrect.textContent = "Correct!";
        playerScr += 5;
        fillQuesAns(1);
    } 
    else if(quesIndex === 2){
        isCorrect.textContent = "Wrong!";
        timerCount -=10;
        playerScr -= 2;
        fillQuesAns(1);
        
    }else if(quesIndex === 3){
        isCorrect.textContent = "Wrong!";
        timerCount -=10;
        playerScr -= 2;
        fillQuesAns(1);
        
    }
})
ansD.addEventListener("click",function(){
    if(quesIndex === 0){
        isCorrect.textContent = "Wrong!";
        timerCount -=10;
        playerScr -= 2;
        fillQuesAns(1);
    }  
    else if(quesIndex === 1){
        isCorrect.textContent = "Wrong!";
        timerCount -=10;
        playerScr -= 2;
        fillQuesAns(1);
    } 
    else if(quesIndex === 2){
        isCorrect.textContent = "Correct!";
        playerScr += 5;
        fillQuesAns(1);
    }else if(quesIndex === 3){
        isCorrect.textContent = "Wrong!";
        timerCount -=10;
        playerScr -= 2;
        fillQuesAns(1);
        
    }
})

function finalScore(){
    scorePg.style.display = "block";    
    questions.style.display = "none";
    if(playerScr < 0){
        score.textContent = 0;
    }else{
    score.textContent = playerScr;
    }
}

submitBtn.addEventListener("click",function(){
    addEntry();
    viewHighscore();
})


var newScore;
var existingScore;
function addEntry(){
    if(playerScr < 0){
        playerScr = 0;
    }
    existingScore = JSON.parse(localStorage.getItem("existingScore"));
    if(existingScore == null) {
        existingScore = [];
    }
    newScore = {
        initials : initials.value,
        score : playerScr
    };
    console.log(newScore);
    localStorage.setItem("newScore",JSON.stringify(newScore));
    existingScore.push(newScore);
    localStorage.setItem("existingScore", JSON.stringify(existingScore));

}

var storeScore;
function viewHighscore(){
    scoreList.innerHTML = "";
    scorePg.style.display = "none";
    header.style.display = "none";
    highscorePage.style.display = "block";
    storeScore = JSON.parse(localStorage.getItem("existingScore"));
    for (var i = 0; i < storeScore.length; i++) {
        var stScore = storeScore[i].initials +" " + storeScore[i].score;
    
        var li = document.createElement("li");
        li.textContent = stScore;
        scoreList.appendChild(li);
      }

}
clrScore.addEventListener("click",function(){
    existingScore = [];
    localStorage.setItem("existingScore", JSON.stringify(existingScore));
    scoreList.innerHTML = "";


})
goBack.addEventListener("click",function(){
    resetPage();
})
viewHiScore.addEventListener("click",function(){
    viewHighscore();
    questions.style.display = "none";
    scorePg.style.display = "none";
    highscorePage.style.display = "block";
    startScrn.style.display = "none";
    header.style.display = "none";
})
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerEl.textContent = "Time: " + timerCount;
    // Tests if time has run out
      if (timerCount <= 0) {
        // Clears interval
        // startScrn.style.display = "block";
        // questions.style.display = "none";
        finalScore();
        clearInterval(timer);
      }
    }, 1000);
  }
  resetPage();
  