
  let contentWrapper = document.querySelector( '.contentWrapper' );

  let navbar = document.querySelector( '.navbar' );

  let navbarContent = `
       <div class="leftSection">
              <a class="flex items-center" href="../index.html">
                <img src="../Images/logoBgRemoved.webp" alt="Moksh Logo" class="w-12 h-12 hover:animate-spin " />
                <span
                  class="ml-3 text-base lg:text-2xl uppercase font-semibold projectName tracking-widest ease-in-out duration-300 hover:text-indigo-600">Moksh</span>
              </a>

            </div>

            <div class="rightSection pr-4">

              <div>
                <ul class="hidden md:flex items-center gap-10 uppercase text-xs font-semibold tracking-wider ">
                  <li>
                    <a href="../index.html"
                      class="pb-3 cursor-pointer hover:no-underline hover:text-indigo-600 relative font-semibold after:content-[''] after:bottom-0 after:h-1 after:w-0 after:left-0 after:absolute after:bg-indigo-600 hover:after:w-full after:ease-in-out after:duration-300 ">Home</a>
                  </li>
                  <li>
                    <a href="../Blogs/Blog.html"
                      class="pb-3 cursor-pointer hover:no-underline hover:text-indigo-600 relative font-semibold after:content-[''] after:bottom-0 after:h-1 after:w-0 after:left-0 after:absolute after:bg-indigo-600 hover:after:w-full after:ease-in-out after:duration-300 ">Power
                      of
                      Knowledge Blogs </a>
                  </li>

                  <li class="relative group">
                    <a href="#" class="pb-3 cursor-pointer hover:no-underline mt-3 group-hover:text-indigo-600 relative font-semibold after:content-[''] after:bottom-0 after:h-1 after:w-0 after:left-0 after:absolute after:bg-indigo-600 group-hover:after:w-full after:ease-in-out after:duration-300 flex items-center">
                      <span>Features</span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="ml-2 w-3 h-3 group-hover:rotate-180 ease-in-out group-hover:text-indigo-600 duration-300 ">
                        <path fill-rule="evenodd" d="M20.03 4.72a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 11.69l6.97-6.97a.75.75 0 011.06 0zm0 6a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06L12 17.69l6.97-6.97a.75.75 0 011.06 0z" clip-rule="evenodd"></path>
                      </svg>

                    </a>
                    <div class="absolute hidden group-hover:flex bg-white text-indigo-600 p-4 w-80  shadow-2xl right-0 top-10 flex-col">
                      <a href="../AR_Meditate/meditation.html" class="relative cursor-pointer hover:no-underline pt-3 pb-1 font-semibold after:content-[''] after:bottom-0 after:h-1 after:w-0 after:left-0 after:absolute after:bg-indigo-600 hover:after:w-full after:ease-in-out after:duration-300 ">Augmented
                        Reality
                        Meditation</a>
                      <a href="../Iskcon/event.html" class="relative cursor-pointer hover:no-underline pt-3 pb-1 font-semibold after:content-[''] after:bottom-0 after:h-1 after:w-0 after:left-0 after:absolute after:bg-indigo-600 hover:after:w-full after:ease-in-out after:duration-300 ">Iskcon
                        Events</a>
                      <a href="../Divine_page/story.html" class="relative cursor-pointer hover:no-underline pt-3 pb-1 font-semibold after:content-[''] after:bottom-0 after:h-1 after:w-0 after:left-0 after:absolute after:bg-indigo-600 hover:after:w-full after:ease-in-out after:duration-300 ">Divine
                        Activities for all Generation</a>
                      <a href="../Pomodro_page/reward.html" class="relative cursor-pointer hover:no-underline pt-3 pb-1 font-semibold after:content-[''] after:bottom-0 after:h-1 after:w-0 after:left-0 after:absolute after:bg-indigo-600 hover:after:w-full after:ease-in-out after:duration-300 ">Pomodoro
                        Spiritual Break</a>
                      <a href="../shlok_page/motivation.html" class="relative cursor-pointer hover:no-underline pt-3 pb-1 font-semibold after:content-[''] after:bottom-0 after:h-1 after:w-0 after:left-0 after:absolute after:bg-indigo-600 hover:after:w-full after:ease-in-out after:duration-300 ">Read
                        a
                        Shlok</a>
                      <a href="../Rejuvenate_page/rejuvenate.html" class="relative cursor-pointer hover:no-underline pt-3 pb-1 font-semibold after:content-[''] after:bottom-0 after:h-1 after:w-0 after:left-0 after:absolute after:bg-indigo-600 hover:after:w-full after:ease-in-out after:duration-300 ">Rejuvenate</a>
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

  contentWrapper.onscroll = () =>
{
  contentWrapper.scrollTop > 5 ? navbar.classList.add( 'bg-slate-100', 'shadow-2xl' ) : navbar.classList.remove( 'bg-slate-100', 'shadow-2xl' )
}