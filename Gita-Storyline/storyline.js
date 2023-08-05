const arjunaConversation = document.getElementById("arjuna-conversation");
const krishnaConversation = document.getElementById("krishna-conversation");

const arjunaQuestions = [
  "Arjuna: Who is Krishna?",
  "Arjuna: What is the purpose of life?",
  "Arjuna: How can one attain enlightenment?",
];

const krishnaAnswers = [
  "Krishna: I am the Supreme Personality of Godhead.",
  "Krishna: The purpose of life is to attain self-realization and understand the eternal soul.",
  "Krishna: By practicing meditation and devotional service, one can attain enlightenment.",
];

let arjunaIndex = 0;
let krishnaIndex = 0;

function updateConversationBoxes() {
  arjunaConversation.innerText = arjunaQuestions[arjunaIndex];
  krishnaConversation.innerText = krishnaAnswers[krishnaIndex];
}

function handleKeyPress(event) {
  if (event.key === "ArrowRight") {
    arjunaIndex = (arjunaIndex + 1) % arjunaQuestions.length;
    krishnaIndex = (krishnaIndex + 1) % krishnaAnswers.length;
    updateConversationBoxes();
  } else if (event.key === "ArrowLeft") {
    arjunaIndex = (arjunaIndex - 1 + arjunaQuestions.length) % arjunaQuestions.length;
    krishnaIndex = (krishnaIndex - 1 + krishnaAnswers.length) % krishnaAnswers.length;
    updateConversationBoxes();
  }
}

// Attach event listener for keypress
document.addEventListener("keydown", handleKeyPress);

// Initial update of conversation boxes
updateConversationBoxes();
