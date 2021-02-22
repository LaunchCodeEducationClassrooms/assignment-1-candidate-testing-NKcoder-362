const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["Who was the first American woman in space? ", "True or false: 5000 meters = 5 kilometers. ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "True", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
}
candidateName = input.question("Enter Candidate Name: ");
function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
//candidateAnswer = input.question(question)//

for (let i = 0; i<questions.length; i++) {
  candidateAnswers.push(input.question(questions[i]));
}
numCorrectAnswers = 0
numQuizQuestions = 0
for (let i = 0; i < correctAnswers.length; i++){
    if(correctAnswers[i]===candidateAnswers[i]){
      numCorrectAnswers = numCorrectAnswers + 1;
    }
    numQuizQuestions = numQuizQuestions + 1
}
//console.log(numCorrectAnswers, numQuizQuestions)//

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
/*if(correctAnswer.toLowerCase === candidateAnswer.toLowerCase) {
  console.log("Your answer to the question is correct.")
} else {
  console.log("Your answer to the question is incorrect.")
}*/
console.log ("Candidate Name: ", candidateName);
let lnNumber = 1;
for(let i = 0; i < questions.length; i++ ){
  console.log(lnNumber+") ", questions[i]);
  console.log("Your answer: ", candidateAnswers[i])
  console.log("Correct answer: ", correctAnswers[i])
  lnNumber = lnNumber + 1
}
let calGrade = (numCorrectAnswers/numQuizQuestions)*100

console.log(">>> Overall Grade: ", calGrade+"%" , "("+ numCorrectAnswers, "of", numQuizQuestions, "responses correct) <<<")
if(calGrade >= 80){
  console.log(">>> Status: PASSED <<<");
}else{
  console.log(">>> Status: FAILED <<<");
}


  let grade = (numCorrectAnswers/numQuizQuestions)*100;

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  console.log("Welcome " + candidateName + " to the Astronaut Training Program.")


  askQuestion();
  gradeQuiz(this.candidateAnswers);
}


// Don't write any code below this line //
// And don't change these or your program will not run as expected //
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