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
questions.style.display = "none";
startBtn.addEventListener("click", function(){
    startGame();
});


function startGame() {
    startScrn.style.display = "none";    
    questions.style.display = "block";
    timerCount = 50;
    quesIndex = 0;
    ansIndex = 0;
    isCorrect.textContent = "";
    startTimer()
    fillQuesAns(0);  
}

function fillQuesAns(number){
    quesIndex = quesIndex + number;
    if(quesIndex >= allQuest.length){
        finalScore();
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
        fillQuesAns(1);
    }  
    else if(quesIndex === 1){
        isCorrect.textContent = "Wrong!";
        timerCount -=10;
        fillQuesAns(1);
        
    } 
    else if(quesIndex === 2){
        isCorrect.textContent = "Wrong!";
        timerCount -=10;
        fillQuesAns(1);
        
    }else if(quesIndex === 3){
        isCorrect.textContent = "Correct!";
        fillQuesAns(1);
    }
})
ansB.addEventListener("click",function(){
    if(quesIndex === 0){
        isCorrect.textContent = "Wrong!";
        timerCount -=10;
        fillQuesAns(1);
    }  
    else if(quesIndex === 1){
        isCorrect.textContent = "Wrong!";
        timerCount -=10;
        fillQuesAns(1);
    } 
    else if(quesIndex === 2){
        isCorrect.textContent = "Wrong!";
        timerCount -=10;
        fillQuesAns(1);
        
    }else if(quesIndex === 3){
        isCorrect.textContent = "Wrong!";
        timerCount -=10;
        fillQuesAns(1);
        
    }
})
ansC.addEventListener("click",function(){
    if(quesIndex === 0){
        isCorrect.textContent = "Correct!";
        fillQuesAns(1);
    }  
    else if(quesIndex === 1){
        isCorrect.textContent = "Correct!";
        fillQuesAns(1);
    } 
    else if(quesIndex === 2){
        isCorrect.textContent = "Wrong!";
        timerCount -=10;
        fillQuesAns(1);
        
    }else if(quesIndex === 3){
        isCorrect.textContent = "Wrong!";
        timerCount -=10;
        fillQuesAns(1);
        
    }
})
ansD.addEventListener("click",function(){
    if(quesIndex === 0){
        isCorrect.textContent = "Wrong!";
        timerCount -=10;
        fillQuesAns(1);
    }  
    else if(quesIndex === 1){
        isCorrect.textContent = "Wrong!";
        timerCount -=10;
        fillQuesAns(1);
    } 
    else if(quesIndex === 2){
        isCorrect.textContent = "Correct!";
        fillQuesAns(1);
    }else if(quesIndex === 3){
        isCorrect.textContent = "Wrong!";
        timerCount -=10;
        fillQuesAns(1);
        
    }
})
//         ansTwo.addEventListener("click",function(){
            
//         })
//         ansThree.addEventListener("click",function(){
//             isCorrect.textContent = "Correct!";
//             quesIndex ++;
//         })
//         ansFour.addEventListener("click",function(){
            
//         })
//     }
//     // console.log(quesNum);
//     // console.log(quesIndex);
//     // fillQuestion();
//     nextQues();
// return;
// function wrongAns(){
//     isCorrect.textContent = "Wrong!";
//     quesIndex ++;
//     // console.log(quesIndex);
//     timerCount-=10;
//     nextQues();
//     return;
// }
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerEl.textContent = "Time: " + timerCount;
    // Tests if time has run out
      if (timerCount <= 0) {
        // Clears interval
        startScrn.style.display = "block";
        questions.style.display = "none";
        clearInterval(timer);
      }
    }, 1000);
  }
  