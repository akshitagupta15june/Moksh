// toggle switch
const switchMode = document.getElementById("dn");

// all tags
const h1 = document.getElementsByTagName("h1");
const h2 = document.getElementsByTagName("h2");
const p = document.getElementsByTagName("p");
const body = document.getElementsByTagName("body");
const footer = document.getElementsByTagName("footer");

// dark mode removed with some tags
const cardHeader = document.getElementsByClassName("cardHeader");
const cardPara = document.getElementsByClassName("cardPara");

// all divs
const navBar = document.querySelector(".topnav");
const aboutHeader = document.getElementsByClassName("header");
const content = document.getElementsByClassName("d-block");

//others
const textContainer = document.getElementsByClassName("text-container");
const navLink = document.getElementsByClassName("nav_link");
const cardLink = document.getElementsByClassName("cardLink");

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
  textContainer[0].classList.toggle("dark");
  for (let i = 0; i < p.length; i++) {
    p[i].classList.toggle("dark");
  }
  for (let i = 0; i < h2.length; i++) {
    h2[i].classList.toggle("dark");
  }
  for (let i = 0; i < h1.length; i++) {
    h1[i].classList.toggle("dark");
  }
  for (let i = 0; i < cardPara.length; i++) {
    cardPara[i].classList.remove("dark");
  }
  for (let i = 0; i < cardLink.length; i++) {
    cardLink[i].classList.toggle("dark");
  }
  aboutHeader[0].classList.toggle("dark");
  content[0].classList.toggle("dark");
  footer[0].classList.toggle("dark");
  cardHeader[0].classList.remove("dark");
  cardPara[0].classList.remove("dark");
}
