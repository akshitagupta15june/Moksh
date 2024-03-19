let dropMenuLinks = document.querySelector('.dropMenuLinks');
let indexOpenDropDown = document.querySelector('.indexOpenDropDown');
let closeDropDown = document.querySelector('.closeDropDown');

indexOpenDropDown.onclick = () => {
  dropMenuLinks.style.right = 0;
}

closeDropDown.onclick = () => {
  dropMenuLinks.style.right = '-2000px';
}

function subscribe() {
  var email = document.getElementById('email').value;
  
  // Validate email address
  if (!validateEmail(email)) {
    showPopup('Please enter a valid email address.');
    return;
  }
  
  // send the email address to the admin
  // For demonstration, let's just show a confirmation message
  showPopup('You have successfully subscribed with email: ' + email);
}

function validateEmail(email) {
  // Basic email validation
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function showPopup(message) {
  var popup = document.getElementById('popup');
  var popuptext = document.getElementById('popuptext');
  popuptext.textContent = message;
  popup.classList.add('show');
  setTimeout(function() {
    popup.classList.remove('show');
  }, 3000); // Hide popup after 3 seconds
}
