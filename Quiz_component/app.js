const data = [
  {
    dataQuestion: "What is the best programming language for web development?",
    choices: {
      Python: "",
      Java: "",
      Javascript: "correct",
      Assembly: "",
    },
  },
  {
    dataQuestion: "Which of the following is a Non-linear data structure?",
    choices: {
      Array: "correct",
      Stack: "",
      Queue: "",
      Heap: "",
    },
  },
  {
    dataQuestion:
      "Which of the following statements about classes and objects in JavaScript is true?",
    choices: {
      "JavaScript classes strictly follow classical inheritance.": "",
      "JavaScript objects cannot have methods.": "",
      "JavaScript objects can be created using both literal notation and constructor functions.":
        "correct",
      "JavaScript classes cannot have private instance variables.": "",
    },
  },
  {
    dataQuestion: "What does the term 'DRY' stand for in software development?",
    choices: {
      "Don't Repeat Yourself": "correct",
      "Design, Review, Yield": "",
      "Define, Refactor, Yield": "",
      "Dynamic, Recursive, Yield": "",
    },
  },
];

let questionIndex = 0;

function loadQuestion() {
  const choicesContainer = document.getElementById("choicesContainer");
  const questionPlaceHolder = document.getElementById("question");

  choicesContainer.textContent = "";

  //load qustion
  let currentQuestion = data[questionIndex];
  questionPlaceHolder.textContent = currentQuestion.dataQuestion;

  const options = Object.keys(currentQuestion.choices);

  options.forEach((option) => {
    const choiceContainer = document.createElement("div");
    const input = document.createElement("input");
    const label = document.createElement("label");
    input.type = "radio";
    input.name = "options";
    label.textContent = option;
    input.value = currentQuestion.choices[option];

    //first append
    choiceContainer.appendChild(input);
    choiceContainer.appendChild(label);

    //second append
    choicesContainer.appendChild(choiceContainer);
  });
}

const quizForm = document.getElementById("quizForm");

quizForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const selectedAnswer = quizForm.querySelector("input[type='radio']:checked");

  if (selectedAnswer.value) {
    alert("correct!");
  } else {
    alert("Wrong!");
  }

  questionIndex++;

  if (questionIndex >= data.length) {
    alert("Quiz is finished!");
    questionIndex = 0;
  }

  loadQuestion();
});

loadQuestion();
