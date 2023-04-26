// toggle switch
const switchMode = document.getElementById("dn");

// all tags
const h1 = document.getElementsByTagName("h1");
const p = document.getElementsByTagName("p");
const body = document.getElementsByTagName("body");
const footer = document.getElementsByTagName("footer");

// all divs
const navBar = document.querySelector(".topnav");
const container = document.getElementsByClassName("container");

//remove dark css
const contentHeader = document.getElementsByClassName("content-header");
const containerPara = document.getElementsByClassName("container_para");

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
  for (let i = 0; i < container.length; i++) {
    container[i].classList.toggle("secondDark");
  }
  for (let i = 0; i < contentHeader.length; i++) {
    contentHeader[i].classList.remove("dark");
    contentHeader[i].classList.toggle("singleLine_dark");
  }
  for (let i = 0; i < containerPara.length; i++) {
    containerPara[i].classList.remove("dark");
    containerPara[i].classList.toggle("secondDark");
  }
  footer[0].classList.toggle("dark");
}
