var readlineSync = require("readline-sync");

var score = 0;
var userName = readlineSync.question("What's your name? ");

console.log("Welcome "+ userName + " to DO YOU KNOW Prajwal");

//play function

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer){
    console.log("right!");
    score = score + 1;
   
  } else {
    console.log("wrong!");
  }

   console.log("curent score: ", score);
   console.log("------------");
}

// var questionOne = {
//   question: "Where do I live?",
//   answer: "Nagpur"
// }

// var questionTwo = {
//   question: "My favorite superhero would be?",
//   answer: "Super"
// }

// array of objects

var questions = [{
  question: "Where do I live? ",
  answer: "Nagpur"
}, {
  question: "My favorite superhero would be? ",
  answer: "Super"
}];

//loop

for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("YAY! You SCORED: ", score);