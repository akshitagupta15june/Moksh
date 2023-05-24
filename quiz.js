const startBtn = document.querySelector(".start_btn button");
const infoBox = document.querySelector(".info_box");
const exitBtn = infoBox.querySelector(".buttons .quit");
const continueBtn = infoBox.querySelector(".buttons .restart");
const quizBox = document.querySelector(".quiz_box");
const resultBox = document.querySelector(".result_box");
const optionList = document.querySelector(".option_list");
const timeLine = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
const restartQuiz = resultBox.querySelector(".buttons .restart");
const quitQuiz = resultBox.querySelector(".buttons .quit");
const nextBtn = document.querySelector("footer .next_btn");
const bottomQuesCounter = document.querySelector("footer .total_que");

let timeValue = 15;
let queCount = 0;
let queNumb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

// Event handlers
startBtn.onclick = () => {
  infoBox.classList.add("activeInfo");
};

exitBtn.onclick = () => {
  infoBox.classList.remove("activeInfo");
};

continueBtn.onclick = () => {
  infoBox.classList.remove("activeInfo");
  quizBox.classList.add("activeQuiz");
  showQuestions(0);
  queCounter(1);
  startTimer(timeValue);
  startTimerLine(0);
};

restartQuiz.onclick = () => {
  quizBox.classList.add("activeQuiz");
  resultBox.classList.remove("activeResult");
  timeValue = 15;
  queCount = 0;
  queNumb = 1;
  userScore = 0;
  widthValue = 0;
  showQuestions(queCount);
  queCounter(queNumb);
  clearInterval(counter);
  clearInterval(counterLine);
  startTimer(timeValue);
  startTimerLine(widthValue);
  timeText.textContent = "Time Left";
  nextBtn.classList.remove("show");
};

quitQuiz.onclick = () => {
  window.location.reload();
};

nextBtn.onclick = () => {
  if (queCount < questions.length - 1) {
    queCount++;
    queNumb++;
    showQuestions(queCount);
    queCounter(queNumb);
    clearInterval(counter);
    clearInterval(counterLine);
    startTimer(timeValue);
    startTimerLine(widthValue);
    timeText.textContent = "Time Left";
    nextBtn.classList.remove("show");
  } else {
    clearInterval(counter);
    clearInterval(counterLine);
    showResult();
  }
};

// Function to display questions
function showQuestions(index) {
  const queText = document.querySelector(".que_text");

  let queTag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>';
  let optionTag = '';
  for (let i = 0; i < questions[index].options.length; i++) {
    optionTag += `<div class="option"><span>${questions[index].options[i]}</span></div>`;
  }
  queText.innerHTML = queTag;
  optionList.innerHTML = optionTag;

  const option = optionList.querySelectorAll(".option");

  for (let i = 0; i < option.length; i++) {
    option[i].addEventListener("click", function () {
      optionSelected(this);
    });
  }
}

// Function to handle option selection
function optionSelected(answer) {
  clearInterval(counter);
  clearInterval(counterLine);
  const userAns = answer.textContent;
  const correctAns = questions[queCount].answer;
  const allOptions = optionList.children.length;

  if (userAns === correctAns) {
    userScore += 1;
    answer.classList.add("correct");
    answer.insertAdjacentHTML("beforeend", '<div class="icon tick"><i class="fas fa-check"></i></div>');
    console.log("Correct Answer");
    console.log("Your correct answers = " + userScore);
  } else {
    answer.classList.add("incorrect");
    answer.insertAdjacentHTML("beforeend", '<div class="icon cross"><i class="fas fa-times"></i></div>');
    console.log("Wrong Answer");
    for (let i = 0; i < allOptions; i++) {
      if (optionList.children[i].textContent === correctAns) {
        optionList.children[i].setAttribute("class", "option correct");
        optionList.children[i].insertAdjacentHTML("beforeend", '<div class="icon tick"><i class="fas fa-check"></i></div>');
        console.log("Auto selected correct answer.");
      }
    }
  }

  for (let i = 0; i < allOptions; i++) {
    optionList.children[i].classList.add("disabled");
  }
  nextBtn.classList.add("show");
}

// Function to show the quiz result
function showResult() {
  infoBox.classList.remove("activeInfo");
  quizBox.classList.remove("activeQuiz");
  resultBox.classList.add("activeResult");
  const scoreText = resultBox.querySelector(".score_text");
  let scoreTag = "";
  if (userScore > 3) {
    scoreTag = `<span>and congrats! , You got <p>${userScore}</p> out of <p>${questions.length}</p></span>`;
  } else if (userScore > 1) {
    scoreTag = `<span>and nice , You got <p>${userScore}</p> out of <p>${questions.length}</p></span>`;
  } else {
    scoreTag = `<span>and sorry , You got only <p>${userScore}</p> out of <p>${questions.length}</p></span>`;
  }
  scoreText.innerHTML = scoreTag;
}

// Function to start the timer
function startTimer(time) {
  counter = setInterval(timer, 1000);
  function timer() {
    timeCount.textContent = time;
    time--;
    if (time < 9) {
      timeCount.textContent = "0" + timeCount.textContent;
    }
    if (time < 0) {
      clearInterval(counter);
      timeText.textContent = "Time Off";
      const allOptions = optionList.children.length;
      const correctAns = questions[queCount].answer;
      for (let i = 0; i < allOptions; i++) {
        if (optionList.children[i].textContent === correctAns) {
          optionList.children[i].setAttribute("class", "option correct");
          optionList.children[i].insertAdjacentHTML("beforeend", '<div class="icon tick"><i class="fas fa-check"></i></div>');
          console.log("Time Off: Auto selected correct answer.");
        }
      }
      for (let i = 0; i < allOptions; i++) {
        optionList.children[i].classList.add("disabled");
      }
      nextBtn.classList.add("show");
    }
  }
}

// Function to start the timer line animation
function startTimerLine(time) {
  counterLine = setInterval(timer, 29);
  function timer() {
    time += 1;
    timeLine.style.width = time + "px";
    if (time > 549) {
      clearInterval(counterLine);
    }
  }
}

// Function to update the question counter
function queCounter(index) {
  const totalQueCountTag = `<span><p>${index}</p> of <p>${questions.length}</p> Questions</span>`;
  bottomQuesCounter.innerHTML = totalQueCountTag;
}
