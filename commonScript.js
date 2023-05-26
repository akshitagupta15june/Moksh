const customNavbar = document.querySelector( ".customNavbar" )
const customFooter = document.querySelector( ".customFooter" );
( () =>
{
  let navbarContent = `
    <nav class="navbar navbar-expand-sm" style="background-color: #2980b9;">
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
                    <a class="dropdown-item dropItem text-white fw-semibold text-uppercase border border-white py-3 px-4" href="../Iskcon/event.html">Iskcon Events</a>
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
  customNavbar.innerHTML = navbarContent

  let footerContent = `
     <!-- Row 1  -->
        <div class="container-fluid d-flex align-items-center px-0 justify-content-sm-between flex-column flex-sm-row">

          <div class='d-flex align-items-center justify-content-center'>
            <img class="logo" src="../Images/moksh.png" alt="Moksh Logo" style="
                                  height: 60px;
                                  width: 60px;
                                  margin-right: 10px;
                                  filter: invert(84%) sepia(28%) saturate(30%) hue-rotate(195deg)
                                    brightness(97%) contrast(99%);
                                " />

            <h1 class="title text-white" class="fs-1">
              Moksh
            </h1>
          </div>

          <div class="tagline text-white text-center my-3 my-sm-0 text-sm-end d-flex flex-column sm-w-50 ">
            <p class="fw-semibold m-0 fs-5">
              A Spiritual Productivity Tool for Mental Wellness
            </p>
            <p class="intro fw-medium smallerFontSize text-sm-end fst-italic m-0 ps-sm-3">
              Moksh is a spiritual productivity tool designed for individuals who
              want to unlock their potential and achieve true balance in life.
            </p>
          </div>

        </div>

        <!-- Row 2  -->
        <div
          class="copyright d-flex align-items-center mt-5 flex-column flex-sm-row justify-content-sm-between justify-content-center text-center smallerFontSize fw-semibold">
          <p class="m-0">
            Made with ❤️ by Akshita during XPRESSION'23
          </p>
          <p class="m-0">
            &copy; 2023 Moksh. All rights reserved.
          </p>
        </div>
  `
  customFooter.innerHTML = footerContent
} )()
