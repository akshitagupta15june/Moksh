function googleTranslateElementInit ()
{
  new google.translate.TranslateElement(
    { pageLanguage: 'en' },
    'google_translate_element'
  )

}
// Get the "return to top" button element
let returnToTopButton = document.getElementById( 'returnToTop' )

// Function to scroll to the top of the page
function scrollToTop ()
{
  window.scrollTo( {
    top: 0,
    behavior: 'smooth'
  } )
}

// Function to toggle the visibility of the "return to top" button
function toggleReturnToTopButton ()
{
  if ( window.scrollY > 200 )
  {
    returnToTopButton.classList.add( 'active' )
  } else
  {
    returnToTopButton.classList.remove( 'active' )
  }
}

// Add event listeners
window.addEventListener( 'scroll', toggleReturnToTopButton )
// returnToTopButton.addEventListener('click', scrollToTop);

let contentWrapper = document.querySelector( '.contentWrapper' ),
  dropMenuLinks = document.querySelector( '.dropMenuLinks' ),
  openDropDown = document.querySelector( '.openDropDown' ),
  closeDropDown = document.querySelector( '.closeDropDown' ),
  navbar = document.querySelector( '.navbar' )

contentWrapper.onscroll = () =>
{
  contentWrapper.scrollTop > 5 ? navbar.classList.add( 'bg-indigo-600', 'text-white' ) : navbar.classList.remove( 'bg-indigo-600', 'text-white' )
  contentWrapper.scrollTop > 5 ? openDropDown.classList.add( 'text-white' ) : ''
}

openDropDown.onclick = () =>
{
  dropMenuLinks.classList.add( 'right-0' )
  dropMenuLinks.classList.remove( 'sm:-right-[2000px]' )
}

closeDropDown.onclick = () =>
{
  dropMenuLinks.classList.remove( 'right-0' )
  dropMenuLinks.classList.add( 'sm:-right-[2000px]' )
}