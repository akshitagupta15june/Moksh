const carousel = document.querySelector(".carousel"),
    firstIframe = carousel.querySelectorAll("iframe")[0],
    arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false,
    isDragging = false,
    prevPageX,
    prevScrollLeft,
    positionDiff;

const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display =
        carousel.scrollLeft == scrollWidth ? "none" : "block";
};

arrowIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
        let firstIframeWidth = firstIframe.clientWidth + 14; // getting first iframe width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstIframeWidth : firstIframeWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});

const autoSlide = () => {
    // if there is no iframe left to scroll then return from here
    if (
        carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) >
        -1 ||
        carousel.scrollLeft <= 0
    )
        return;

    positionDiff = Math.abs(positionDiff); // making positionDiff value positive
    let firstIframeWidth = firstIframe.clientWidth + 14;
    // getting difference value that needs to be added or reduced from carousel left to take the middle iframe center
    let valDifference = firstIframeWidth - positionDiff;

    if (carousel.scrollLeft > prevScrollLeft) {
        // if user is scrolling to the right
        return carousel.scrollLeft +=
            positionDiff > firstIframeWidth / 3 ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    carousel.scrollLeft -=
        positionDiff > firstIframeWidth / 3 ? valDifference : -positionDiff;
};

const dragStart = (e) => {
    // updating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
    // scrolling images/carousel to the left according to the mouse pointer
    if (!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
};

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if (!isDragging) return;
    isDragging = false;
    autoSlide();
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);