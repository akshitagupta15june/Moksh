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

  //display pause instead of start
  startButton.textContent = 'Pause';
  startButton.removeEventListener('click', startTimer);

  timerDisplay(defaultTime);
  countdown = setInterval(() => {
    defaultTime <= 0 ? clearInterval(countdown) : defaultTime--;
    timerDisplay(defaultTime);
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
