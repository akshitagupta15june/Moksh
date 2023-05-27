const audioContainer=document.querySelector(".audio-container");

const audios=[
  {
    title: "Deep meditation Music",
    path:"../Images/deep-music.mp3",
    thumbnail:"../Images/Deep_meditation.jpg"
  },
  {
    title: "Krishna Flute meditation music",
    path:"../Images/krishna.mp3",
    thumbnail:"../Images/Krishna.jpg"
  },
  {
    title: "River meditation music",
    path:"../Images/river-music.mp3",
    thumbnail:"../Images/River.jpg"
  },
  {
    title: "Piano meditation music",
    path:"../Images/piano-music.mp3",
    thumbnail:"../Images/Piano.jpg"
  },
  {
    title: "Himalayas meditation music",
    path:"../Images/himalaya-music.mp3",
    thumbnail:"../Images/Himalayas.jpg"
  }
]


const audioToInsert = audios.map((item,index)=>{
  return `<div class="col-12 p-0 col-sm-12 col-lg-5 mx-auto glassmorphism">
  <div
       id="player"
       class="d-flex align-items-center rounded-4 justify-content-between p-3 text-uppercase text-white fw-medium">
    <img
         src="${item.thumbnail}"
         alt=""
         height="80px"
         style="border-radius: 16px" />
    <p id="music" class="m-0">${item.title}</p>
    <button class="icons bg-transparent border-0 text-danger-emphasis fs-2 play-pause-btn" data-id="${index}">
      <i class="bi bi-play-circle-fill" data-id="${index}"></i>
    </button>
  </div>
</div>`
}).join("");
audioContainer.innerHTML=audioToInsert;

let currentAudio={
  isPlaying:false,
  audioId:"",
  audioPath:""
};
const playPauseBtns=document.querySelectorAll(".play-pause-btn");
playPauseBtns.forEach(playPauseBtn=>{
  playPauseBtn.addEventListener("click",(e)=>{
    if(currentAudio.isPlaying && currentAudio.audioId === playPauseBtn.dataset.id){ // pause btn pressed
      playPauseBtns.forEach((btn,index)=>{
        btn.innerHTML=`<i class="bi bi-play-circle-fill" data-id=${index}></i>`;
      });
      currentAudio.audio.pause();
      currentAudio={
        isPlaying:false,
        audioId:"",
        audioPath:""
      };
      console.log("Hi..");
      return;
    }
    else if(currentAudio.isPlaying){ // new audio needs to be played, pause the current audio
      playPauseBtns.forEach((btn,index)=>{
        btn.innerHTML=`<i class="bi bi-play-circle-fill" data-id=${index}></i>`;
      });
      currentAudio.audio.pause();
      currentAudio={
        isPlaying:false,
        audioId:"",
        audioPath:""
      };
    }
    // play the audio
    playPauseBtn.innerHTML='<i class="bi bi-pause-circle-fill"></i>';
    currentAudio.audioId = playPauseBtn.dataset.id;
    currentAudio.isPlaying=true;
    currentAudio.audio = new Audio(audios[playPauseBtn.dataset.id].path);
    currentAudio.audio.play();


  });
})