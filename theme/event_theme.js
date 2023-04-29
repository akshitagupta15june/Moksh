// toggle switch
const switchMode = document.getElementById("dn");

// all tags
const h1 = document.getElementsByTagName("h1");
const h3 = document.getElementsByTagName("h3");
const p = document.getElementsByTagName("p");
const li = document.getElementsByTagName("li");
const body = document.getElementsByTagName("body");
const footer = document.getElementsByTagName("footer");

// all divs
const navBar = document.querySelector(".topnav");
const cardDiv = document.getElementsByClassName("cardDiv");

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
  for (let i = 0; i < li.length; i++) {
    li[i].classList.toggle("secondDark");
  }
  for (let i = 0; i < h1.length; i++) {
    h1[i].classList.toggle("dark");
  }
  for (let i = 0; i < h3.length; i++) {
    h3[i].classList.toggle("dark");
  }
  for (let i = 0; i < cardDiv.length; i++) {
    cardDiv[i].classList.toggle("dark");
  }
  footer[0].classList.toggle("dark");
}
