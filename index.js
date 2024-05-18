// console.log('start');

// adding questions array

const questions = [
  {
    question: 'What is a Variable in JavaScript?',
    answers: [
      { text: 'A section of the webpage', correct: false },
      { text: 'A container for storing data values', correct: true },
      { text: 'A type of JavaScript function', correct: false },
      { text: 'An operation in mathematics', correct: false },
    ],
  },
  // Add more questions in the same format
  {
    question: 'What is a Variable in JavaScript?',
    answers: [
      { text: 'A section of the webpage', correct: false },
      { text: 'A container for storing data values', correct: true },
      { text: 'A type of JavaScript function', correct: false },
      { text: 'An operation in mathematics', correct: false },
    ],
  },
  {
    question: 'What is a Variable in JavaScript?',
    answers: [
      { text: 'A section of the webpage', correct: false },
      { text: 'A container for storing data values', correct: true },
      { text: 'A type of JavaScript function', correct: false },
      { text: 'An operation in mathematics', correct: false },
    ],
  },
];

// capturing the elements
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonElement = document.getElementById('answer-buttons');

document.addEventListener('DOMContentLoaded', () => {
  nextButton.classList.add('hide');
});

let shuffledQuestions;
let currentQuestionsIndex;

// adding eventListener to Start Button

startButton.addEventListener('click', startGame);

function startGame() {
  startButton.classList.add('hide');
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionsIndex = 0;
  questionContainer.classList.remove('hide');
}
