
var playPauseButton = document.getElementById("play-pause0");
var playPauseButton1 = document.getElementById("play-pause1");
var riverSound = document.getElementById("river-sound");
var birdsSound = document.getElementById("birds-sound");


playPauseButton.innerHTML = "Play deep meditation Music";
playPauseButton1.innerHTML = "Play Krishna Flute meditation music";
riverSound.volume = 0.5;
birdsSound.volume = 0.5;


playPauseButton.addEventListener("click", function() {
  
  if (riverSound.paused) {
    playPauseButton.innerHTML = "Pause";
    riverSound.play();
    
  } else {
    playPauseButton.innerHTML = "Play";
    riverSound.pause();
    
  }
});
playPauseButton1.addEventListener("click", function() {
  
    if (birdsSound.paused) {
      playPauseButton1.innerHTML = "Pause";
      
      birdsSound.play();
    } else {
      playPauseButton1.innerHTML = "Play";
      
      birdsSound.pause();
    }
  });
  