let questions = document.querySelectorAll( '.question' )

for ( let question of questions )
{
  question.onclick = () =>
  {
    let nextElement = question.nextElementSibling
    if ( nextElement.style.maxHeight )
    {
      nextElement.style.maxHeight = null
    }

    else
    {
      let targetNode = question.parentElement.childNodes[ 3 ]
      targetNode.classList.toggle( 'hidden' )
      let arrow = question.parentElement.childNodes[ 1 ].childNodes[ 3 ]
      arrow.classList.toggle( 'rotate-[-180deg]' )

    }
  }

}