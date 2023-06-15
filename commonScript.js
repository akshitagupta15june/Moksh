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

        <img src="../Images/moksh.png" alt="" class="h-36 w-36 mx-auto" />

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
              <a class="flex items-center" href="./index.html">
                <img src="../Images/moksh.png" alt="Moksh Logo" class="lg:w-14 lg:h-14 w-12 h-12 hover:animate-spin " />
                <span
                  class="ml-3 text-base lg:text-2xl uppercase font-semibold projectName tracking-widest ease-in-out duration-300 hover:text-indigo-600">Moksh</span>
              </a>

            </div>

            <div class="rightSection pr-4">

              <div>
                <ul class="hidden md:flex items-center gap-10 uppercase text-xs font-semibold tracking-wider ">
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
  <div class="footerWrapper w-full p-12 lg:px-0 lg:w-2/3 ">
              <!-- Row - 1  -->
              <div class="row-1 flex w-full items-center justify-center sm:justify-between flex-col">
                <div class="flex flex-col w-full sm:flex-row items-center justify-between">
                  <img src="../Images/moksh.png" alt="Moksh Logo" class="w-32 h-32 my-2" />

                  <div class="flex flex-col px-4 items-center sm:px-0 w-full sm:w-2/3">
                    <span
                      class="text-center italic font-bold text-indigo-600 mb-1 sm:border-double sm:border-b-4 sm:border-indigo-600">
                      A Spiritual Productivity Tool for Mental Wellness
                    </span>

                    <div class="mt-1 w-full font-semibold flex items-center justify-center flex-col">
                      <span class="sm:text-xs text-md text-justify">
                        Moksh is a spiritual productivity tool designed for
                        individuals who want to unlock their potential and
                        achieve true balance in life.
                      </span>

                    </div>

                    <!-- Copyright  -->
                    <div
                      class="row-3 copyright flex items-center flex-col text-center font-semibold text-md sm:text-xs mt-4">
                      <!-- Footer Socials  -->
                      <div
                        class="socials my-4 row-2 w-full flex justify-between capitalize font-semibold text-md sm:text-[11px]">
                        <a href="https://twitter.com/ExperienceMoksh"
                          class="ease-in-out duration-300 hover:text-indigo-600"><svg xmlns="http://www.w3.org/2000/svg"
                            data-name="Layer 1" viewBox="0 0 24 24" id="twitter" width="40px" fill=" rgb(6, 6, 104)">
                            <path
                              d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z">
                            </path>
                          </svg></a>
                        <a href="https://github.com/akshitagupta15june/Moksh"
                          class="ease-in-out duration-300 hover:text-indigo-600"><svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16" id="github" width="40px" fill="rgb(51, 51, 51)">
                            <path
                              d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z">
                            </path>
                          </svg></a>
                      </div>
                      <div class="copyright">
                        <p>Made with ❤️ by Akshita during XPRESSION'23</p>
                        <p class="text-rose-600 text-xs font-bold">
                          &copy; 2023 Moksh. All rights reserved.
                        </p>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  `
  customFooter.innerHTML = footerContent

} )()

contentWrapper.onscroll = () =>
{
  contentWrapper.scrollTop > 5 ? navbar.classList.add( 'bg-slate-900', 'shadow-2xl' ) : navbar.classList.remove( 'bg-slate-900', 'shadow-2xl' )
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


