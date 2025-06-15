const quizes = [
  {
    id: 1,
    question: "1 + 1 = ?",
    answers: [1, 2, 3, 4],
  },
  {
    id: 2,
    question: "2 + 2 = ?",
    answers: [2, 3, 4, 5],
  },
  {
    id: 3,
    question: "3 + 3 = ?",
    answers: [3, 4, 5, 6],
  },
  {
    id: 4,
    question: "4 + 4 = ?",
    answers: [3, 5, 7, 8],
  },
];

const quizContainer = document.querySelector("#quiz-container");
const randomAnswer = document.querySelector("#btn");

const renderQuizzes = () => {
  quizContainer.innerHTML = "";
  quizes.forEach((quiz, index) => {
    const quizDiv = document.createElement("div");
    quizDiv.classList.add("quiz");

    const questionEl = document.createElement("div");
    questionEl.classList.add("question");
    questionEl.textContent = `Câu ${index + 1} : ${quiz.question}`;

    const answersEl = document.createElement("div");
    answersEl.classList.add("answers");

    quiz.answers.forEach((ans, i) => {
      const label = document.createElement("label");
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = `quiz-${quiz.id}`;
      radio.value = ans;
      label.appendChild(radio);
      label.appendChild(document.createTextNode(" " + ans));
      answersEl.appendChild(label);
      answersEl.appendChild(document.createElement("br"));
    });

    quizDiv.appendChild(questionEl);
    quizDiv.appendChild(answersEl);
    quizContainer.appendChild(quizDiv);
  });
};

// Gọi ngay khi trang load
renderQuizzes();

// Random chọn 1 đáp án cho mỗi câu
randomAnswer.addEventListener("click", () => {
  quizes.forEach((quiz) => {
    const radios = document.getElementsByName(`quiz-${quiz.id}`);
    const randomIndex = Math.floor(Math.random() * radios.length);
    radios[randomIndex].checked = true;
  });
});
