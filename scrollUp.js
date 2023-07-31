const topButton = document.getElementById("bttbutton");
const contentWrapper = document.querySelector(".contentWrapper");

function scrollUp() {
  if (contentWrapper.scrollTop > 100) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

function getTop() {
  contentWrapper.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

contentWrapper.addEventListener("scroll", scrollUp);
topButton.addEventListener("click", getTop);
