// toggle switch
const switchMode = document.getElementById("dn");

// all tags
const h1 = document.getElementsByTagName("h1");
const p = document.getElementsByTagName("p");
const body = document.getElementsByTagName("body");
const footer = document.getElementsByTagName("footer");

// all divs
const navBar = document.querySelector(".topnav");
const footerDiv = document.getElementsByClassName("footer_div");

//remove dark css
const topHeader = document.getElementsByClassName("top-header");
const bottomHeader = document.getElementsByClassName("bottom-header");

// btns
const quizBtn = document.getElementsByClassName("quizBtn");

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
  for (let i = 0; i < p.length; i++) {
    p[i].classList.toggle("dark");
  }
  for (let i = 0; i < h1.length; i++) {
    h1[i].classList.toggle("dark");
  }
  for (let i = 0; i < footerDiv.length; i++) {
    footerDiv[i].classList.toggle("dark");
  }
  for (let i = 0; i < bottomHeader.length; i++) {
    bottomHeader[i].classList.remove("dark");
    bottomHeader[i].classList.toggle("singleLine_dark");
  }
  topHeader[0].classList.remove("dark");
  topHeader[0].classList.toggle("singleLine_dark");
  quizBtn[0].classList.toggle("a_dark");
  footer[0].classList.toggle("dark");
}
