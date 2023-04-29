// toggle switch
const switchMode = document.getElementById("dn");

// all tags
const p = document.getElementsByTagName("p");
const body = document.getElementsByTagName("body");
const footer = document.getElementsByTagName("footer");

// all divs
const navBar = document.querySelector(".topnav");

//btns
const buttonGen = document.getElementById("gen");

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
  buttonGen.classList.toggle("a_dark");
  footer[0].classList.toggle("dark");
}
