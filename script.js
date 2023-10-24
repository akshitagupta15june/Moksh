let dropMenuLinks = document.querySelector('.dropMenuLinks');
let indexOpenDropDown = document.querySelector('.indexOpenDropDown');
let closeDropDown = document.querySelector('.closeDropDown');
var icon=document.getElementById("icon");
icon.onclick=function(){
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    icon.src="sun.png";
  }
  else{
    icon.src="moon.png"
  }
}

indexOpenDropDown.onclick = () => {
  dropMenuLinks.style.right = 0;
}

closeDropDown.onclick = () => {
  dropMenuLinks.style.right = '-2000px';
}
