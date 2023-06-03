let customFooter = document.querySelector( ".customFooter" );

( () =>
{
  let dropMenuLinksContent = `
     <!-- Row - 1  -->
        <div class="row-1 flex items-center justify-between">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
            class="w-6 h-6 closeDropDown cursor-pointer ease-in-out duration-300 hover:text-indigo-600">
            <path fill-rule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z"
              clip-rule="evenodd" />
          </svg>
          <h1 class="text-xs uppercase font-semibold tracking-widest">Menu</h1>
        </div>

        <img src="../Images/moksh.png" alt="" class="h-36 w-36 mx-auto">

        <!-- Row - 2  -->
        <div class="navLinks">

          <a class="flex items-center font-semibold ease-in-out duration-300 p-2 hover:text-white rounded-md hover:bg-indigo-500"
            href="../index.html">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-3 w-3">
              <path fill-rule="evenodd"
                d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z"
                clip-rule="evenodd" />
            </svg>
            <span class="text-sm ml-2">Home</span>

          </a>

          <a class="flex items-center my-2 font-semibold ease-in-out duration-300 p-2 hover:text-white rounded-md hover:bg-indigo-500"
            href="../Blogs/Blog.html">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-3 w-3">
              <path fill-rule="evenodd"
                d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z"
                clip-rule="evenodd" />
            </svg>
            <span class="text-sm ml-2">Blog</span>
          </a>


          <div class="features flex flex-col">
            <a href="#" class="flex items-center font-semibold ease-in-out duration-300 p-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-3 w-3">
                <path fill-rule="evenodd"
                  d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z"
                  clip-rule="evenodd" />
              </svg>
              <span class="text-sm ml-2">Features</span>
            </a>

            <!-- Nested Links for features  -->
            <div class="nestedLinks flex flex-col ml-4">

              <a class="flex my-2 items-center capitalize font-semibold ease-in-out duration-300 p-2 hover:text-white rounded-md hover:bg-indigo-500"
                href="../AR_Meditate/meditation.html">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-3 w-3">
                  <path fill-rule="evenodd"
                    d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                    clip-rule="evenodd" />
                </svg>
                <span class="text-xs ml-2">Augmented Reality Meditation</span>
              </a>

              <a class="flex my-2 items-center capitalize font-semibold ease-in-out duration-300 p-2 hover:text-white rounded-md hover:bg-indigo-500"
                href="../Iskcon/event.html">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-3 w-3">
                  <path fill-rule="evenodd"
                    d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                    clip-rule="evenodd" />
                </svg>
                <span class="text-xs ml-2">Iskon Events</span>
              </a>

              <a class="flex my-2 items-center capitalize font-semibold ease-in-out duration-300 p-2 hover:text-white rounded-md hover:bg-indigo-500"
                href="../Divine_page/story.html">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-3 w-3">
                  <path fill-rule="evenodd"
                    d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                    clip-rule="evenodd" />
                </svg>
                <span class="text-xs ml-2">Divine Activities for all Generation </span>
              </a>

              <a class="flex my-2 items-center capitalize font-semibold ease-in-out duration-300 p-2 hover:text-white rounded-md hover:bg-indigo-500"
                href="../Pomodro_page/reward.html">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-3 w-3">
                  <path fill-rule="evenodd"
                    d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                    clip-rule="evenodd" />
                </svg>
                <span class="text-xs ml-2">Pomodoro Spiritual Break</span>
              </a>

              <a class="flex my-2 items-center capitalize font-semibold ease-in-out duration-300 p-2 hover:text-white rounded-md hover:bg-indigo-500"
                href="../shlok_page/motivation.html">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-3 w-3">
                  <path fill-rule="evenodd"
                    d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                    clip-rule="evenodd" />
                </svg>
                <span class="text-xs ml-2">Read a Shlok</span>
              </a>

              <a class="flex my-2 items-center capitalize font-semibold ease-in-out duration-300 p-2 hover:text-white rounded-md hover:bg-indigo-500"
                href="../Rejuvenate_page/rejuvenate.html">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-3 w-3">
                  <path fill-rule="evenodd"
                    d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                    clip-rule="evenodd" />
                </svg>
                <span class="text-xs ml-2">Rejuvenate</span>
              </a>
              <div id="google_translate_element" class=""></div>
            </div>

       
          </div>

        </div>
  `

  dropMenuLinks.innerHTML = dropMenuLinksContent

  let footerContent = `
  <!-- Row - 1  -->
          <div class="row-1 flex items-center justify-center sm:justify-between">

            <div class="flex flex-col sm:flex-row items-center justify-center">
              <img src="../Images/moksh.png" alt="Moksh Logo" class='w-32 h-32 my-2'/>
              <div class="flex flex-col px-4 sm:pl-8 w-full sm:w-1/2">
                <span class="w-fit text-center italic font-bold text-indigo-600 mb-1 sm:border-double sm:border-b-4 sm:border-indigo-600">
                  A Spiritual Productivity Tool for Mental Wellness
                </span>
                <span class="text-md mt-1 sm:text-xs font-semibold text-justify">
                  Moksh is a spiritual productivity tool designed for individuals who
                  want to unlock their potential and achieve true balance in life.
                </span>
              </div>
            </div>
          </div>

          <!-- Row - 2 Footer Socials  -->
          <div class="socials my-8 row-2 flex justify-between sm:w-1/2 w-full px-4 capitalize font-semibold text-md  sm:text-[11px]">
            <a href="#" class="ease-in-out duration-300 hover:text-indigo-600">Twitter</a>
            <a href="#" class="ease-in-out duration-300 hover:text-indigo-600">Facebook</a>
            <a href="#" class="ease-in-out duration-300 hover:text-indigo-600">Instagram</a>
            <a href="#" class="ease-in-out duration-300 hover:text-indigo-600">Github</a>
          </div>

          <!-- Row - 3  -->
          <div class="row-3 copyright text-center font-semibold text-md sm:text-xs px-4">
            <p>
              Made with ❤️ by Akshita during XPRESSION'23
            </p>
            <p class='text-rose-600 text-xs'>
              &copy; 2023 Moksh. All rights reserved.
            </p>
          </div>
  `
  customFooter.innerHTML = footerContent
} )()
