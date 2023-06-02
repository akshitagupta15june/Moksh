function googleTranslateElementInit ()
{
  new google.translate.TranslateElement(
    { pageLanguage: 'en' },
    'google_translate_element'
  )

}

// All pages menu interaction 
let openDropDown = document.querySelector( '.openDropDown' ),
  dropMenuLinks = document.querySelector( '.dropMenuLinks' ),
  contentWrapper = document.querySelector( '.contentWrapper' ),
  navbar = document.querySelector( '.navbar' )


contentWrapper.onscroll = () =>
{
  contentWrapper.scrollTop > 5 ? navbar.classList.add( 'bg-white' ) : navbar.classList.remove( 'bg-white' )
}

openDropDown.onclick = () =>
{
  dropMenuLinks.style.right = 0
}



// Ends all pages menu interaction 

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
window.addEventListener( 'scroll', toggleReturnToTopButton );
// returnToTopButton.addEventListener( 'click', scrollToTop );


