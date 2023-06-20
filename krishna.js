window.addEventListener('DOMContentLoaded', (event) => {
    const audio = new Audio('river-music.mp3'); // Replace 'river-music.mp3' with the path to your audio file
    audio.loop = true;
    audio.autoplay = true;
  
    document.addEventListener('DOMContentLoaded', () => {
      audio.play();
    });
  });
  
  
  