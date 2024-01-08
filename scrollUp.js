const topButton = document.getElementById("bttbutton");
const contentWrapper = document.querySelector(".contentWrapper");

function scrollUp() {
  topButton.style.display = contentWrapper.scrollTop > 100 ? "block" : "none";
}

function scrollToTop() {
  contentWrapper.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

contentWrapper.addEventListener("scroll", scrollUp);
topButton.addEventListener("click", scrollToTop);
