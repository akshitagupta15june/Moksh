const timer = document.querySelector('.time-left');
const startButton = document.querySelector('.start');
const resetButton = document.querySelector('.reset');
let defaultTime = 25 * 60;
const breakTime = 5 * 60;
let cycleCount = 0;
let countdown;
const FULL_DASH_ARRAY = 283;
//for colour change of timer
const WARNING_THRESHOLD = 15*60;
const ALERT_THRESHOLD = 5*60;

const COLOR_CODES = {
  info: {
    color: "green"
  },

  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
}
let remainingPathColor = COLOR_CODES.info.color;

function timerDisplay(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  timer.textContent = display;
  document.title = display;
  document.getElementById("app").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45" />
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">
    ${display}
  </span>
</div>
`;
}

function startTimer() {
  console.log('start button clicked!!!');

  //display pause instead of start
  startButton.textContent = 'Pause';
  startButton.removeEventListener('click', startTimer);

  timerDisplay(defaultTime);
  countdown = setInterval(() => {
    defaultTime <= 0 ? clearInterval(countdown) : defaultTime--;
   timerDisplay(defaultTime);
   setCircleDasharray();
   setRemainingPathColor(defaultTime);
    if (defaultTime === 0) {
      clearInterval(countdown);
      playSpiritualSound();
      if (cycleCount < 1) {
        cycleCount++;
        startBreakTimer();
      } else {
        cycleCount = 0;
        defaultTime = 25 * 60;
        timerDisplay(defaultTime);
        alert('Congratulations! You have completed four cycles.');
        startButton.textContent = 'Start';
      }
    }
  }, 1000);

  startButton.addEventListener('click', pauseTimer);
}

function playSpiritualSound()
{
  console.log('Playing spiritual sound'); 
  const audio = new Audio("sounds/bell-sound-timer-end.mp3")
  audio.play()
}

function pauseTimer() {
  console.log('pause button clicked!!!');
  startButton.textContent = 'Start';
  startButton.removeEventListener('click', pauseTimer);
  clearInterval(countdown);
  startButton.addEventListener('click', startTimer);
}

function startBreakTimer() {
  console.log('break timer started!!!');
  defaultTime = breakTime;
  timerDisplay(defaultTime);
  countdown = setInterval(() => {
    defaultTime <= 0 ? clearInterval(countdown) : defaultTime--;
    timerDisplay(defaultTime);
    
    if (defaultTime === 0) {
      clearInterval(countdown);
      defaultTime = 1 * 1;
      startTimer();
    }
  }, 1000);
}

function resetTimer() {
    console.log('reset clicked!!!!');
    startButton.textContent = 'Start';
    startButton.addEventListener('click', startTimer);
    defaultTime = 25*60; // Set defaultTime to 0
    cycleCount = 0;
    clearInterval(countdown);
    timerDisplay(defaultTime);
  }

startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;

  // If the remaining time is less than or equal to 5 mins, remove the "warning" class and apply the "alert" class.
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);

  // If the remaining time is less than or equal to 15 mins, remove the base color and apply the "warning" class.
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  }
}

function calculateTimeFraction() {

  const rawTimeFraction = defaultTime / (25*60);
  return rawTimeFraction - (1 / (25 * 60)) * (1 - rawTimeFraction);
}
    
// Update the dasharray value as time passes, starting with 283
function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}
