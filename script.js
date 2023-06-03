function googleTranslateElementInit ()
{
  new google.translate.TranslateElement(
    { pageLanguage: 'en' },
    'google_translate_element'
  )
}

let openDropDown = document.querySelector( '.openDropDown' ),
  dropMenuLinks = document.querySelector( '.dropMenuLinks' ),
  contentWrapper = document.querySelector( '.contentWrapper' ),
  navbar = document.querySelector( '.navbar' ),
  cardAr = document.querySelector( '.cardAr' ),
  cardIskon = document.querySelector( '.cardIskon' ),
  cardStory = document.querySelector( '.cardStory' ),
  cardClock = document.querySelector( '.cardClock' ),
  cardShlok = document.querySelector( '.cardShlok' ),
  cardRejuvenate = document.querySelector( '.cardRejuvenate' )


contentWrapper.onscroll = () =>
{
  contentWrapper.scrollTop > 5 ? navbar.classList.add( 'bg-white' ) : navbar.classList.add( 'transparent' )
  contentWrapper.scrollTop > 1100 ? cardAr.classList.add( 'right-0' ) : ''
  contentWrapper.scrollTop > 1600 ? cardIskon.classList.add( 'left-0' ) : ''
  contentWrapper.scrollTop > 2300 ? cardStory.classList.add( 'right-0' ) : ''
  contentWrapper.scrollTop > 3100 ? cardClock.classList.add( 'left-0' ) : ''
  contentWrapper.scrollTop > 3850 ? cardShlok.classList.add( 'right-0' ) : ''
  contentWrapper.scrollTop > 4500 ? cardRejuvenate.classList.add( 'left-0' ) : ''

}

openDropDown.onclick = () =>
{
  dropMenuLinks.style.right = 0

}

let closeDropDown = document.querySelector( ".closeDropDown" )
closeDropDown.onclick = () =>
{
  dropMenuLinks.style.right = '-2000px'
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


