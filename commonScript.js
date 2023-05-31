// const customNavbar = document.querySelector( ".customNavbar" )
const customFooter = document.querySelector( ".customFooter" );
( () =>
{
  let navbarContent = `
    <nav class="navbar navbar-expand-sm" style="background-color: transparent;">
        <div class="container-fluid">
          <a class="navbar-brand text-white p-0" href="../index.html">
            <img src="../Images/moksh.png" alt="Moksh Logo" class="logo" />
            <span class="fw-semibold text-uppercase">Moksh</span>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="collapsibleNavbar">
            <ul class="navbar-nav w-100 ">
              <li class="nav-item ms-auto ">
                <a class="nav-link text-white text-uppercase fw-semibold fs-6" href="../index.html">Home</a>
              </li>
              <li class="nav-item  ms-auto">
                <a class="nav-link text-white text-uppercase fs-6 fw-semibold" href="../Blogs/Blog.html">Blog</a>
              </li>

              <li class="nav-item dropdown ms-auto">

                <a class="nav-link text-end text-white text-uppercase fw-semibold fs-6 dropdown-toggle" href="#" role="button"
                   data-bs-toggle="dropdown">Features</a>

                <ul class="dropdown-menu dropdown-menu-start p-0 mx-0 my-2 w-auto" style="background-color:#2980b9;">
                  <li>
                    <a class="dropdown-item dropItem text-white fw-semibold text-uppercase border border-white py-3 px-4" href="../AR_Meditate/meditation.html">Augmented
                      Reality
                      Meditation</a>
                  </li>
                  <li>
                    <a class="dropdown-item dropItem text-white fw-semibold text-uppercase border border-white py-3 px-4" href="../Iskcon/event.html">Iskon Events</a>
                  </li>
                  <li>
                    <a class="dropdown-item dropItem text-white fw-semibold text-uppercase border border-white py-3 px-4" href="../Divine_page/story.html">Divine Activities
                      for all
                      Generation</a>
                  </li>
                  <li>
                    <a class="dropdown-item dropItem text-white fw-semibold text-uppercase border border-white py-3 px-4" href="../Pomodro_page/reward.html">Pomodoro
                      Spiritual Break</a>
                  </li>
                  <li>
                    <a class="dropdown-item dropItem text-white fw-semibold text-uppercase border border-white py-3 px-4" href="../shlok_page/motivation.html">Read a
                      Shlok</a>
                  </li>
                  <li>
                    <a class="dropdown-item dropItem text-white fw-semibold text-uppercase border border-white py-3 px-4"
                       href="../Rejuvenate_page/rejuvenate.html">Rejuvenate</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item ms-auto">
                <div id="google_translate_element" class=""></div>
              </li>
            </ul>
          </div>
        </div>
      </nav> 
    `
  // customNavbar.innerHTML = navbarContent

  let footerContent = `
  <!-- Row - 1  -->
          <div class="row-1 flex items-center justify-center">

            <div class="flex items-center justify-center">
              <img src="../Images/moksh.png" alt="Moksh Logo" />
              <div class="flex flex-col pl-8 w-1/2">
                <span class="w-fit italic font-bold text-indigo-600 mb-1 border-double border-b-4 border-indigo-600">
                  A Spiritual Productivity Tool for Mental Wellness
                </span>
                <span class="text-xs font-semibold text-justify">
                  Moksh is a spiritual productivity tool designed for individuals who
                  want to unlock their potential and achieve true balance in life.
                </span>
              </div>
            </div>
          </div>

          <!-- Row - 2 Footer Socials  -->
          <div class="socials my-8 row-2 flex justify-between sm:w-1/2 capitalize font-semibold  text-[11px]">
            <a href="#" class="ease-in-out duration-300 hover:text-indigo-600">Twitter</a>
            <a href="#" class="ease-in-out duration-300 hover:text-indigo-600">Facebook</a>
            <a href="#" class="ease-in-out duration-300 hover:text-indigo-600">Instagram</a>
            <a href="#" class="ease-in-out duration-300 hover:text-indigo-600">Github</a>
          </div>

          <!-- Row - 3  -->
          <div class="row-3 copyright text-center font-semibold text-xs ">
            <p>
              Made with ❤️ by Akshita during XPRESSION'23
            </p>
            <p>
              &copy; 2023 Moksh. All rights reserved.
            </p>
          </div>
  `
  customFooter.innerHTML = footerContent
} )()
