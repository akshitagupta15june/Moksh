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

let customFooter = document.querySelector( ".customFooter" ),
  dropMenuLinks = document.querySelector( '.dropMenuLinks' ),
  contentWrapper = document.querySelector( '.contentWrapper' ),
  navbar = document.querySelector( '.navbar' );

( () =>
{
  let dropMenuLinksContent = `
     <!-- Row - 1  -->
        <div class="row-1 flex items-center justify-between text-indigo-600 ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
            class="w-6 h-6 closeDropDown cursor-pointer ease-in-out duration-300 hover:text-indigo-600">
            <path fill-rule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z"
              clip-rule="evenodd" />
          </svg>
          <h1 class="text-xs uppercase font-semibold tracking-widest">Menu</h1>
        </div>

        <img src="../Images/logoBgRemoved.avif" alt="" class="h-36 w-36 mx-auto" />

        <!-- Row - 2  -->
        <div class="">

          <a class="flex group items-center relative font-semibold ease-in-out duration-300 pb relative after:content-[''] after:bottom-0 after:h-1 after:w-0 after:left-0 after:absolute after:bg-indigo-600 hover:after:w-full after:ease-in-out after:duration-300 "
            href="../index.html">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
              class="h-3 w-3 group-hover:text-indigo-600">
              <path fill-rule="evenodd"
                d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z"
                clip-rule="evenodd" />
            </svg>
            <span class="text-md p-3 group-hover:text-indigo-600">Home</span>
          </a>

          <a class="flex group items-center relative font-semibold ease-in-out duration-300 pb relative after:content-[''] after:bottom-0 after:h-1 after:w-0 after:left-0 after:absolute after:bg-indigo-600 hover:after:w-full after:ease-in-out after:duration-300 "
            href="../Blogs/Blog.html">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
              class="h-3 w-3 group-hover:text-indigo-600">
              <path fill-rule="evenodd"
                d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z"
                clip-rule="evenodd" />
            </svg>
            <span class="text-md p-3 group-hover:text-indigo-600">Power of Knowledge Blogs</span>
          </a>

          <div class="features flex flex-col">
            <a href="#" class="flex items-center font-semibold ease-in-out duration-300 p-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-3 w-3">
                <path fill-rule="evenodd"
                  d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z"
                  clip-rule="evenodd" />
              </svg>
              <span class="text-md p-3">Features</span>
            </a>

            <!-- Nested Links for features  -->
            <div class="nestedLinks flex flex-col ml-4">
              <a class="flex group items-center relative font-semibold ease-in-out duration-300 pb relative after:content-[''] after:bottom-0 after:h-1 after:w-0 after:left-0 after:absolute after:bg-indigo-600 hover:after:w-full after:ease-in-out after:duration-300 "
                href="../AR_Meditate/meditation.html">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                  class="h-3 w-3 group-hover:text-indigo-600">
                  <path fill-rule="evenodd"
                    d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                    clip-rule="evenodd" />
                </svg>
                <span class="text-sm p-3 group-hover:text-indigo-600">Augmented Reality Meditation</span>
              </a>

              <a class="flex group items-center relative font-semibold ease-in-out duration-300 pb relative after:content-[''] after:bottom-0 after:h-1 after:w-0 after:left-0 after:absolute after:bg-indigo-600 hover:after:w-full after:ease-in-out after:duration-300 "
                href="../Iskcon/event.html">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                  class="h-3 w-3 group-hover:text-indigo-600">
                  <path fill-rule="evenodd"
                    d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                    clip-rule="evenodd" />
                </svg>
                <span class="text-sm p-3 group-hover:text-indigo-600">Iskon Events</span>
              </a>

              <a class="flex group items-center relative font-semibold ease-in-out duration-300 pb relative after:content-[''] after:bottom-0 after:h-1 after:w-0 after:left-0 after:absolute after:bg-indigo-600 hover:after:w-full after:ease-in-out after:duration-300 "
                href="../Divine_page/story.html">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                  class="h-3 w-3 group-hover:text-indigo-600">
                  <path fill-rule="evenodd"
                    d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                    clip-rule="evenodd" />
                </svg>
                <span class="text-sm p-3 group-hover:text-indigo-600">Divine Activities for all Generation
                </span>
              </a>

              <a class="flex group items-center relative font-semibold ease-in-out duration-300 pb relative after:content-[''] after:bottom-0 after:h-1 after:w-0 after:left-0 after:absolute after:bg-indigo-600 hover:after:w-full after:ease-in-out after:duration-300 "
                href="../Pomodro_page/reward.html">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                  class="h-3 w-3 group-hover:text-indigo-600">
                  <path fill-rule="evenodd"
                    d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                    clip-rule="evenodd" />
                </svg>
                <span class="text-sm p-3 group-hover:text-indigo-600">Pomodoro Spiritual Break</span>
              </a>

              <a class="flex group items-center relative font-semibold ease-in-out duration-300 pb relative after:content-[''] after:bottom-0 after:h-1 after:w-0 after:left-0 after:absolute after:bg-indigo-600 hover:after:w-full after:ease-in-out after:duration-300 "
                href="../shlok_page/motivation.html">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                  class="h-3 w-3 group-hover:text-indigo-600">
                  <path fill-rule="evenodd"
                    d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                    clip-rule="evenodd" />
                </svg>
                <span class="text-sm p-3 group-hover:text-indigo-600">Read a Shlok</span>
              </a>

              <a class="flex group items-center relative font-semibold ease-in-out duration-300 pb relative after:content-[''] after:bottom-0 after:h-1 after:w-0 after:left-0 after:absolute after:bg-indigo-600 hover:after:w-full after:ease-in-out after:duration-300 "
                href="../Rejuvenate_page/rejuvenate.html">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                  class="h-3 w-3 group-hover:text-indigo-600">
                  <path fill-rule="evenodd"
                    d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                    clip-rule="evenodd" />
                </svg>
                <span class="text-sm p-3 group-hover:text-indigo-600">Rejuvenate</span>
              </a>
              <div id="google_translate_element" class=""></div>
            </div>
          </div>
        </div>
  `
  dropMenuLinks.innerHTML = dropMenuLinksContent

  let navbarContent = `
       <div class="leftSection">
              <a class="flex items-center pb-3 " href="../index.html">
                <img src="../Images/logoBgRemoved.webp" alt="Moksh Logo" class="w-12 h-12 hover:animate-spin " />
                <span
                  class="ml-3 text-base lg:text-2xl uppercase font-semibold projectName tracking-widest ease-in-out duration-300 hover:text-indigo-600">Moksh</span>
              </a>

            </div>

            <div class="rightSection pr-4">

              <div>
                <ul class="hidden md:flex items-center gap-10 uppercase text-xs font-semibold tracking-wider text-indigo-600 ">
                  <li>
                    <a href="../index.html"
                      class="pb-3 hover:text-indigo-600 relative font-semibold after:content-[''] after:bottom-0 after:h-1 after:w-0 after:left-0 after:absolute after:bg-indigo-600 hover:after:w-full after:ease-in-out after:duration-300 ">Home</a>
                  </li>
                  <li>
                    <a href="../Blogs/Blog.html"
                      class="pb-3 hover:text-indigo-600 relative font-semibold after:content-[''] after:bottom-0 after:h-1 after:w-0 after:left-0 after:absolute after:bg-indigo-600 hover:after:w-full after:ease-in-out after:duration-300 ">Power
                      of
                      Knowledge Blogs </a>
                  </li>

                  <li class="relative group">
                    <a href="#"
                      class="pb-3 mt-3 group-hover:text-indigo-600 relative font-semibold after:content-[''] after:bottom-0 after:h-1 after:w-0 after:left-0 after:absolute after:bg-indigo-600 group-hover:after:w-full after:ease-in-out after:duration-300 flex items-center">
                      <span>Features</span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        class="ml-2 w-3 h-3 group-hover:rotate-180 ease-in-out group-hover:text-indigo-600 duration-300 ">
                        <path fill-rule="evenodd"
                          d="M20.03 4.72a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 11.69l6.97-6.97a.75.75 0 011.06 0zm0 6a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06L12 17.69l6.97-6.97a.75.75 0 011.06 0z"
                          clip-rule="evenodd" />
                      </svg>

                    </a>
                    <div
                      class="absolute hidden group-hover:flex bg-white text-indigo-600 p-4 w-80  shadow-2xl right-0 top-10 flex-col">
                      <a href="../AR_Meditate/meditation.html"
                        class="relative pt-5 pb-1 font-semibold after:content-[''] after:bottom-0 after:h-1 after:w-0 after:left-0 after:absolute after:bg-indigo-600 hover:after:w-full after:ease-in-out after:duration-300 ">Augmented
                        Reality
                        Meditation</a>
                      <a href="../Iskcon/event.html"
                        class="relative pt-5 pb-1 font-semibold after:content-[''] after:bottom-0 after:h-1 after:w-0 after:left-0 after:absolute after:bg-indigo-600 hover:after:w-full after:ease-in-out after:duration-300 ">Iskcon
                        Events</a>
                      <a href="../Divine_page/story.html"
                        class="relative pt-5 pb-1 font-semibold after:content-[''] after:bottom-0 after:h-1 after:w-0 after:left-0 after:absolute after:bg-indigo-600 hover:after:w-full after:ease-in-out after:duration-300 ">Divine
                        Activities for all Generation</a>
                      <a href="../Pomodro_page/reward.html"
                        class="relative pt-5 pb-1 font-semibold after:content-[''] after:bottom-0 after:h-1 after:w-0 after:left-0 after:absolute after:bg-indigo-600 hover:after:w-full after:ease-in-out after:duration-300 ">Pomodoro
                        Spiritual Break</a>
                      <a href="../shlok_page/motivation.html"
                        class="relative pt-5 pb-1 font-semibold after:content-[''] after:bottom-0 after:h-1 after:w-0 after:left-0 after:absolute after:bg-indigo-600 hover:after:w-full after:ease-in-out after:duration-300 ">Read
                        a
                        Shlok</a>
                      <a href="../Rejuvenate_page/rejuvenate.html"
                        class="relative pt-5 pb-1 font-semibold after:content-[''] after:bottom-0 after:h-1 after:w-0 after:left-0 after:absolute after:bg-indigo-600 hover:after:w-full after:ease-in-out after:duration-300 ">Rejuvenate</a>
                    </div>
                  </li>
                </ul>
              </div>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor"
                class="indexOpenDropDown md:hidden h-6 w-6 text-indigo-600 cursor-pointer ease-in-out duration-300 hover:text-indigo-600">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
              </svg>
            </div>
  `
  navbar.innerHTML = navbarContent

  let footerContent = `
  <!-- NewsLetter  -->
  <div
  class="mt-8 newsLetter text-slate-300 flex text-xs flex-col justify-center lg:flex-row lg:justify-between items-center">

    <div class="mb-1 lg:text-left">
    <p class="capitalize text-[11px] font-semibold tracking-wider" style="color:grey">Sign Up for our newsletter:</p>
    <p style = "color:white">Get weekly updates regarding Moksh.</p>
    </div>


    <div class="newsLetter flex group ease-in-out duration-300 lg:w-1/2">
      <div class="flex group ease-in-out duration-300 w-full lg:w-2/3">
      <input type="email" name="email" id="" placeholder="your email"
      class="bg-transparent border border-emerald-600 py-2 rounded-l-md placeholder:text-slate-300 placeholder:text-xs w-full group-hover:border-indigo-600 ease-in-out duration-300 text-sm outline-0">
<button
       class="bg-emerald-600 text-slate-300 rounded-r-md px-4 py-2 text-white uppercase subscribeBtn tracking-wider ease-in-out duration-300 group-hover:bg-indigo-600">Subscribe</button>
      </div>
    </div>

  </div>

  <!-- Site Nav  -->

  <div class="mt-8 siteNav flex flex-col lg:flex-row ">

    <div class="flex flex-col lg:flex-row items-center text-center lg:text-left lg:w-1/2">
      <!-- <img src="../Images/New_Logo.svg" alt="Moksh Logo" class="h-24 w-24 lg:mr-4" /> -->
      <img src="../Images/logoBgRemoved.webp" alt="Moksh Logo" class="h-24 w-24 lg:mr-4 rounded-full" />

      <div class="py-3 font-medium text-white w-2/3 flex flex-col text-xs lg:text-left ">
        <h1 class="text-3xl projectName ">Moksh</h1>
        <span class="text-sm">
          It is a spiritual productivity tool designed for
          individuals who want to unlock their potential and
          achieve true balance in life. Join us on our journey to empower the world with spiritual knowledge.
        </span>

        <div class="social flex justify-center lg:justify-start items-center gap-x-4 mt-4">
          <a href="https://github.com/akshitagupta15june/Moksh">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
              class="bi bi-github text-slate-300 ease-in-out duration-300 hover:text-indigo-600"
              viewBox="0 0 16 16">
              <path
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
          <a href="https://twitter.com/ExperienceMoksh">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
              class="bi bi-twitter text-slate-300 ease-in-out duration-300 hover:text-indigo-600"
              viewBox="0 0 16 16">
              <path
                d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
            </svg>
          </a>
        </div>

      </div>


    </div>

    <div
      class="site--links capitalize text-xs text-slate-300 grid sm:grid-cols-1 lg:grid-cols-2 mt-4 gap-y-4 lg:w-1/2">

      <a href="../index.html" class="w-full lg:text-left text-left">
      <span
      class="relative font-semibold ease-in-out duration-300 pb-1 relative after:content-[''] after:bottom-0 after:h-[2px] after:w-0 after:left-0 after:absolute after:bg-indigo-600 hover:text-indigo-600 hover:after:w-full after:ease-in-out after:duration-300">Home</span>
      </a>

      <a href="../Blogs/Blog.html" class="w-full lg:text-right text-right">
      <span
      class="relative font-semibold ease-in-out duration-300 pb-1 relative after:content-[''] after:bottom-0 after:h-[2px] after:w-0 after:left-0 after:absolute after:bg-indigo-600 hover:text-indigo-600 hover:after:w-full after:ease-in-out after:duration-300">Power
  of Knowledge blogs</span>
      </a>

      <a href=" ../AR_Meditate/meditation.html" class="w-full lg:text-left text-left">
      <span
      class="relative font-semibold ease-in-out duration-300 pb-1 relative after:content-[''] after:bottom-0 after:h-[2px] after:w-0 after:left-0 after:absolute after:bg-indigo-600 hover:text-indigo-600 hover:after:w-full after:ease-in-out after:duration-300">Augmented
  Reality
  Meditation</span>
      </a>

      <a href=" ../Iskcon/event.html" class="w-full lg:text-right text-right">
      <span
      class="relative font-semibold ease-in-out duration-300 pb-1 relative after:content-[''] after:bottom-0 after:h-[2px] after:w-0 after:left-0 after:absolute after:bg-indigo-600 hover:text-indigo-600 hover:after:w-full after:ease-in-out after:duration-300">Iskon
  Events</span>
      </a>

      <a href=" ../Divine_page/story.html" class="w-full lg:text-left text-left">
      <span
      class="relative font-semibold ease-in-out duration-300 pb-1 relative after:content-[''] after:bottom-0 after:h-[2px] after:w-0 after:left-0 after:absolute after:bg-indigo-600 hover:text-indigo-600 hover:after:w-full after:ease-in-out after:duration-300">Divine
  Activities for all
  Generation
</span>
      </a>

      <a href=" ../Pomodro_page/reward.html" class="w-full lg:text-right text-right">
      <span
      class="relative font-semibold ease-in-out duration-300 pb-1 relative after:content-[''] after:bottom-0 after:h-[2px] after:w-0 after:left-0 after:absolute after:bg-indigo-600 hover:text-indigo-600 hover:after:w-full after:ease-in-out after:duration-300">Pomodoro
  Spiritual
  Break</span>
      </a>

      <a href=" ../shlok_page/motivation.html" class="w-full lg:text-left text-left">
      <span
      class="relative font-semibold ease-in-out duration-300 pb-1 relative after:content-[''] after:bottom-0 after:h-[2px] after:w-0 after:left-0 after:absolute after:bg-indigo-600 hover:text-indigo-600 hover:after:w-full after:ease-in-out after:duration-300">Read
  a Shlok</span> </a>

      <a href=" ../Rejuvenate_page/rejuvenate.html" class="w-full lg:text-right text-right"><span
      class="relative font-semibold ease-in-out duration-300 pb-1 relative after:content-[''] after:bottom-0 after:h-[2px] after:w-0 after:left-0 after:absolute after:bg-indigo-600 hover:text-indigo-600 hover:after:w-full after:ease-in-out after:duration-300">Rejuvenate</span></a>

    </div>

  </div>

  <!-- Copyright  -->
          <div class="mt-8 copyRight flex items-center justify-center text-xs text-slate-300 flex-col">
            <p class='text-center' style = "color:white;" >Made with ❤️ by Akshita during XPRESSION'23</p>
            <p class="text-indigo-900 font-bold">
              &copy; <span id="copyright-year"></span> Moksh. All rights reserved.
            </p>
          </div>
</div>
</footer>
  `
  customFooter.innerHTML = footerContent;
  let copyRightYear = document.getElementById("copyright-year");
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  copyRightYear.innerText = currentYear;

} )()

contentWrapper.onscroll = () =>
{
  contentWrapper.scrollTop > 5 ? navbar.classList.add( 'bg-slate-100', 'shadow-2xl' ) : navbar.classList.remove( 'bg-slate-100', 'shadow-2xl' )
}

let subscribeBtn = document.querySelector( '.subscribeBtn' )
subscribeBtn.onclick = () =>
{
  alert( 'It will be functional soon!!' )
}

let indexOpenDropDown = document.querySelector( '.indexOpenDropDown' )
indexOpenDropDown.onclick = () =>
{
  dropMenuLinks.style.right = 0
}

let closeDropDown = document.querySelector( ".closeDropDown" )
closeDropDown.onclick = () =>
{
  dropMenuLinks.style.right = '-2000px'
}

