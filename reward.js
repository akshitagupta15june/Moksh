const timer = document.querySelector('.time-left');
const startButton = document.querySelector('.start');
const resetButton = document.querySelector('.reset');
let defaultTime = 25 * 60;
const breakTime = 5 * 60;
let cycleCount = 0;
let countdown;

function timerDisplay(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  timer.textContent = display;
  document.title = display;
}

function startTimer() {
  console.log('start button clicked!!!');
  timerDisplay(defaultTime);
  countdown = setInterval(() => {
    defaultTime <= 0 ? clearInterval(countdown) : defaultTime--;
    timerDisplay(defaultTime);
    if (defaultTime === 0) {
      clearInterval(countdown);
      if (cycleCount < 3) {
        cycleCount++;
        startBreakTimer();
      } else {
        cycleCount = 0;
        defaultTime = 25 * 60;
        timerDisplay(defaultTime);
        alert('Congratulations! You have completed four cycles.');
      }
    }
  }, 1000);
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
      defaultTime = 25 * 60;
      startTimer();
    }
  }, 1000);
}

function resetTimer() {
  console.log('reset clicked!!!!');
  defaultTime = 25 * 60;
  cycleCount = 0;
  clearInterval(countdown);
  timerDisplay(defaultTime);
}

startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);
