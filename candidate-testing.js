const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let correctAnswer;
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions;
let correctAnswers;
let candidateAnswers;


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("Enter your Name: ")
console.log("Hi",candidateName,"All the best for your quiz!")
}
function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
question = "Who was the first American woman in space? " ;
console.log(question);
candidateAnswer = input.question("Your Answer: ");
correctAnswer = "Sally Ride"
}

function gradeQuiz(candidateAnswers) {
  let grade = 0;  //TODO 3.2 use this variable to calculate the candidates score.


  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
if (candidateAnswer === correctAnswer){
  console.log("Correct Answer! ")
  grade = 100
} else {
  console.log("Wrong Answer!")
}
console.log('Your grade is ', grade);
}

runProgram()
function runProgram() {
  askForName();
  // TODO 1.1c:"" Greet candidate using their name //
   console.log("");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};