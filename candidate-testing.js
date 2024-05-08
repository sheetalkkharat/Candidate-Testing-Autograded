const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName ;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let correctAnswer;
let candidateAnswer;


//TODO: Variables for Part 2
let questions = [ 'Who was the first American woman in space? ',
'True or false: 5 kilometer == 5000 meters? ',
'(5 + 3)/2 * 10 = ? ',
"Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
'What is the minimum crew size for the ISS? '];
let correctAnswers = ['Sally Ride','true','40','Trajectory','3'];
let candidateAnswers = ["", "", "", "", ""];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("Enter your Name: ")
console.log("Hi",candidateName,"All the best for your quiz!")
}
function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
//question = "Who was the first American woman in space? " ;

console.log(questions[0]);
candidateAnswers[0] = input.question("Your Answer: ");
console.log(questions[1]);
candidateAnswers[1] = input.question("Your Answer: ");
console.log(questions[2]);
candidateAnswers[2] = input.question("Your Answer: ");
console.log(questions[3]);
candidateAnswers[3] = input.question("Your Answer: ");
console.log(questions[4]);
candidateAnswers[4] = input.question("Your Answer: ");

}

function gradeQuiz(candidateAnswers) {
  let grade = 0;
  //TODO 3.2 use this variable to calculate the candidates score.


  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
if(candidateAnswers[0].toUpperCase() === correctAnswers[0].toUpperCase()) {
   grade = grade + 20 ;
   
}  if (candidateAnswers[1].toUpperCase() === correctAnswers[1].toUpperCase()){
   grade = grade +20 ;
}  if (candidateAnswers[2].toUpperCase() === correctAnswers[2].toUpperCase()){
   grade = grade +20
}  if (candidateAnswers[3].toUpperCase() === correctAnswers[3].toUpperCase()){
   grade = grade +20
}  if (candidateAnswers[4] === correctAnswers[4]){
   grade = grade +20
   console.log(`Your Answer:${candidateAnswers} \n
   Correct Answer: ${correctAnswers}`)
}
return grade
}

runProgram()
function runProgram() {

  askForName();
  // TODO 1.1c:"" Greet candidate using their name //
   console.log("");
  askQuestion();
  grade = gradeQuiz(candidateAnswers);
  console.log("Your grade is ", grade);
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