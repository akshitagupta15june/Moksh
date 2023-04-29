// toggle switch
const switchMode = document.getElementById("dn");

// all tags
const h1 = document.getElementsByTagName("h1");
const h2 = document.getElementsByTagName("h2");
const h4 = document.getElementsByTagName("h4");
const p = document.getElementsByTagName("p");
const body = document.getElementsByTagName("body");
const footer = document.getElementsByTagName("footer");
const button = document.getElementsByTagName("button");

// all divs
const navBar = document.querySelector(".topnav");
const header = document.getElementsByClassName("header");
const content = document.getElementsByClassName("content");
const timer_t = document.getElementsByClassName("timer");

//others
const navLink = document.getElementsByClassName("nav_link");
const topHeading = document.getElementsByClassName("top_heading");
const listParagraph = document.getElementsByClassName("list-paragraph");
const aboutMokshDiv = document.getElementsByClassName("aboutMoksh");

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
  for (let i = 0; i < p.length; i++) {
    p[i].classList.toggle("dark");
  }
  for (let i = 0; i < h2.length; i++) {
    h2[i].classList.toggle("dark");
  }
  for (let i = 0; i < h1.length; i++) {
    h1[i].classList.toggle("dark");
  }
  for (let i = 0; i < h4.length; i++) {
    h4[i].classList.toggle("singleLine_dark");
  }
  for (let i = 0; i < listParagraph.length; i++) {
    listParagraph[i].classList.toggle("singleLine_dark");
  }
  topHeading[0].classList.toggle("singleLine_dark");
  timer_t[0].classList.toggle("secondDark");
  content[0].classList.toggle("secondDark");
  header[0].classList.toggle("dark");
  aboutMokshDiv[0].classList.toggle("dark");
  footer[0].classList.toggle("dark");
}
