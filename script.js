let dropMenuLinks = document.querySelector('.dropMenuLinks');
let indexOpenDropDown = document.querySelector('.indexOpenDropDown');
let closeDropDown = document.querySelector('.closeDropDown');

indexOpenDropDown.onclick = () => {
  dropMenuLinks.style.right = 0;
}

closeDropDown.onclick = () => {
  dropMenuLinks.style.right = '-2000px';
}
