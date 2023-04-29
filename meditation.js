
var playPauseButton = document.getElementById("play-pause0");
var playPauseButton1 = document.getElementById("play-pause1");
var playPauseButton2 = document.getElementById("play-pause2");
var playPauseButton3 = document.getElementById("play-pause3");
var playPauseButton4 = document.getElementById("play-pause4");
var riverSound = document.getElementById("river-sound");
var himalayasSound = document.getElementById("himalayas-sound");
var fluteSound = document.getElementById("flute-sound");
var deepSound = document.getElementById("deep-music");
var pianoSound = document.getElementById("piano-sound");



riverSound.volume = 0.5;
pianoSound.volume = 0.5;
himalayasSound.volume = 0.5;
fluteSound.volume = 0.5;
deepSound.volume = 0.5;

playPauseButton.addEventListener("click", function() {
  
  if (deepSound.paused) {
    playPauseButton.innerHTML = '<i class="bi bi-pause-circle-fill"></i>';
      
    deepSound.play();
  } else {
    playPauseButton.innerHTML = '<i class="bi bi-play-circle-fill"></i>';
      
    deepSound.pause();
  }
});  

playPauseButton1.addEventListener("click", function() {
  
  if (fluteSound.paused) {
    playPauseButton1.innerHTML = '<i class="bi bi-pause-circle-fill"></i>';
      
    fluteSound.play();
  } else {
    playPauseButton1.innerHTML = '<i class="bi bi-play-circle-fill"></i>';
      
    fluteSound.pause();
  }
});

playPauseButton2.addEventListener("click", function() {
  
  if (riverSound.paused) {
    playPauseButton2.innerHTML = '<i class="bi bi-pause-circle-fill"></i>';
    riverSound.play();
    
  } else {
    playPauseButton2.innerHTML = '<i class="bi bi-play-circle-fill"></i>';
    riverSound.pause();
    
  }
});

playPauseButton3.addEventListener("click", function() {
  
  if (pianoSound.paused) {
    playPauseButton3.innerHTML = '<i class="bi bi-pause-circle-fill"></i>';
      
    pianoSound.play();
  } else {
    playPauseButton3.innerHTML = '<i class="bi bi-play-circle-fill"></i>';
      
    pianoSound.pause();
  }
});

playPauseButton4.addEventListener("click", function() {
  
  if (himalayasSound.paused) {
    playPauseButton4.innerHTML = '<i class="bi bi-pause-circle-fill"></i>';
      
    himalayasSound.play();
  } else {
    playPauseButton4.innerHTML = '<i class="bi bi-play-circle-fill"></i>';      
    himalayasSound.pause();
  }
});

