// toggle switch
const switchMode = document.getElementById("dn");

// all tags
// const p = document.getElementsByTagName("p");
const button = document.getElementsByTagName("button");
const body = document.getElementsByTagName("body");
const footer = document.getElementsByTagName("footer");
const header = document.getElementsByTagName("header");
const section = document.getElementsByTagName("section");

// all divs
const navBar = document.querySelector(".topnav");
const infoBox = document.getElementsByClassName("info_box");
const resultBox = document.getElementsByClassName("result_box");
const queText = document.getElementsByClassName("title");
const totalQue = document.getElementsByClassName("title");

//others
const navLink = document.getElementsByClassName("nav_link");

if (JSON.parse(localStorage.getItem("theme"))) {
  switchMode.checked = true;
  changes();
}

switchMode.addEventListener("click", () => {
  if (switchMode.checked === true) {
    localStorage.setItem("theme", JSON.stringify(true));
    changes();
  } else {
    localStorage.removeItem("theme");
    changes();
  }
});

function changes() {
  navBar.classList.toggle("dark");
  body[0].classList.toggle("secondDark");
  for (let i = 0; i < navLink.length; i++) {
    navLink[i].classList.toggle("a_dark");
  }
  for (let i = 0; i < button.length; i++) {
    button[i].classList.toggle("a_dark");
  }
  header[0].classList.toggle("dark");
  section[0].classList.toggle("secondDark");
  totalQue[0].classList.toggle("dark");
  queText[0].classList.toggle("dark");
  infoBox[0].classList.toggle("dark");
  resultBox[0].classList.toggle("dark");
  footer[0].classList.toggle("dark");
}
