function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var ampm = '';
  m = checkTime(m);

  if (h > 12) {
    h = h - 12;
    ampm = ' PM';
  } else if (h == 12) {
    ampm = ' PM';
  } else if (h < 12) {
    ampm = ' AM';
  } else {
    ampm = ' PM';
  }

  if (h == 0) {
    h = 12;
  }

  document.getElementById('display').innerHTML = h + ':' + m + ampm;
  var t = setTimeout(function () {
    startTime();
  }, 500);
}

var quotes = [
  {
    text: 'O son of Kunti, the nonpermanent appearance of happiness and distress, and their disappearance in due course, are like the appearance and disappearance of winter and summer seasons. They arise from sense perception, O scion of Bharata, and one must learn to tolerate them without being disturbed.',
    author: '- Lord Sri Krishna - Bhagavad-gita 2.14',
  },
  {
    text: 'For the soul there is neither birth nor death at any time. He has not come into being, does not come into being, and will not come into being. He is unborn, eternal, ever-existing, and primeval. He is not slain when the body is slain.',
    author: '- Lord Sri Krishna - Bhagavad-gita 2.20',
  },
  {
    text: 'What is night for all beings is the time of awakening for the self-controlled; and the time of awakening for all beings is night for the introspective sage.',
    author: '- Lord Sri Krishna - Bhagavad-gita 2.69',
  },
  {
    text: 'The thoughts of My pue devotee dwell in Me, their lives are fully devoted to My service, and they derive great satisfaction and bliss from always enlightening one another and conversing about Me.',
    author: '- Lord Sri Krishna - Bhagavad-gita 10.9',
  },
  {
    text: 'As a lamp in a windless place does not waver, so the transcendentalist, whose mind is controlled, remains always steady in his meditation on the transcendent self.',
    author: '- Lord Sri Krishna - Bhagavad-gita 6.19',
  },
  {
    text: 'For one who sees me everywhere and sees everything in Me, I am never lost, nor is he ever lost to me.',
    author: '- Lord Sri Krishna - Bhagavad-gita 6.30',
  },
  {
    text: 'There is no truth superior to Me. Everything rests upon Me, as pearls are strung on a thread.',
    author: '- Lord Sri Krishna - Bhagavad gita 7.7',
  },
  {
    text: 'After many births and deaths, he who is actually in knowledge surrenders unto Me, knowing Me to be the cause of all causes and all that is. Such a great soul is very rare.',
    author: '- Lord Sri Krishna - Bhagavad-gita 7.19',
  },
  {
    text: 'A person is said to be elevated in yoga when, having renounced all material desires, he neither acts for sense gratification nor engages in fruitive activities.',
    author: '- Lord Sri Krishna - Bhagavad-gita 6.4',
  },
  {
    text: 'For one who has conquered the mind, the Supersoul is already reached, for he has attained tranquillity. To such a man happiness and distress, heat and cold, honor and dishonor are all the same.',
    author: '- Lord Sri Krishna - Bhagavad-gita 6.7',
  },
  {
    text: 'Acts of sacrifice, charity and penance are not to be given up; they must be performed. Indeed, sacrifice, charity and penance purify even the great souls.',
    author: '- Lord Sri Krishna - Bhagavad-gita 18.5',
  },
  {
    text: 'The five great elements, false ego, intelligence, the unmanifested, the ten senses and the mind, the five sense objects, desire, hatred, happiness, distress, the aggregate, the life symptoms, and convictions – all these are considered, in summary, to be the field of activities and its interactions.',
    author: '- Lord Sri Krishna - Bhagavad-gita 13.6',
  },
  {
    text: 'One who sees the Supersoul equally present everywhere, in every living being, does not degrade himself by his mind. Thus he approaches the transcendental destination.',
    author: '- Lord Sri Krishna - Bhagavad-gita 13.29',
  },
  {
    text: 'Those who are seers of the truth have concluded that of the nonexistent there is no endurance, and of the existent there is no cessation. This seers have concluded by studying the nature of both.',
    author: '- Bhagavad-gita 2.16',
  },
  {
    text: 'The soul can never be cut into pieces by any weapon, nor can he be burned by fire, nor moistened by water, nor withered by the wind.',
    author: '- Bhagavad-gita 2.23',
  },
  {
    text: 'All living bodies subsist on food grains, which are produced from rains. Rains are produced by performance of yajña [sacrifice], and yajña is born of prescribed duties.',
    author: '- Bhagavad-gita 3.14',
  },
  {
    text: 'A self-realized man has no purpose to fulfill in the discharge of his prescribed duties, nor has he any reason not to perform such work. Nor has he any need to depend on any other living being.',
    author: '- Bhagavad-gita 3.18',
  },
  {
    text: 'Whatever action a great man performs, common men follow. And whatever standards he sets by exemplary acts, all the world pursues.',
    author: '- Bhagavad-gita 3.21',
  },
  {
    text: 'The embodied soul is eternal, indestructible, and immeasurable; therefore, you should not grieve for the body.',
    author: '- Lord Sri Krishna - Bhagavad Gita 2.25',
  },
  {
    text: 'The soul is neither born, and nor does it die. It is not that it came into being and will cease to exist. The soul is unborn, eternal, ever-existing, and primeval. It is not slain when the body is slain.',
    author: '- Lord Sri Krishna - Bhagavad Gita 2.20',
  },
  {
    text: 'Those who are seers of the truth have concluded that of the nonexistent, there is no endurance, and of the existent, there is no cessation. This seers have concluded by studying the nature of both.',
    author: '- Bhagavad Gita 2.16',
  },
  {
    text: 'The thoughts of My pure devotees dwell in Me, their lives are fully devoted to My service, and they derive great satisfaction and bliss from always enlightening one another and conversing about Me.',
    author: '- Lord Sri Krishna - Bhagavad Gita 10.9',
  },
  {
    text: "The Supreme Lord is situated in everyone's heart, O Arjuna, and is directing the wanderings of all living entities, who are seated as on a machine, made of the material energy.",
    author: '- Lord Sri Krishna - Bhagavad Gita 18.61',
  },
  {
    text: 'The Supreme Lord said: My dear Arjuna, because you are never envious of Me, I shall impart to you this most secret wisdom, knowing which you shall be relieved of the miseries of material existence.',
    author: '- Lord Sri Krishna - Bhagavad Gita 9.1',
  },
  {
    text: 'My dear Arjuna, O son of Prtha, see now My opulences, hundreds of thousands of varied divine forms, multicolored like the sea.',
    author: '- Lord Sri Krishna - Bhagavad Gita 11.5',
  },
  {
    text: 'The five great elements, false ego, intelligence, the unmanifested, the ten senses and the mind, the five sense objects, desire, hatred, happiness, distress, the aggregate, the life symptoms, and convictions - all these are considered, in summary, to be the field of activities and its interactions.',
    author: '- Lord Sri Krishna Bhagavad Gita 13.6',
  },
  {
    text: 'A person is said to be elevated in yoga when, having renounced all material desires, he neither acts for sense gratification nor engages in fruitive activities.',
    author: '- Lord Sri Krishna Bhagavad Gita 6.4',
  },
  {
    text: 'After many births and deaths, he who is actually in knowledge surrenders unto Me, knowing Me to be the cause of all causes and all that is. Such a great soul is very rare.',
    author: '- Lord Sri Krishna Bhagavad Gita 7.19',
  },
  {
    text: 'For one who sees Me everywhere and sees everything in Me, I am never lost, nor is he ever lost to Me.',
    author: '- Lord Sri Krishna Bhagavad Gita 6.30',
  },
  {
    text: 'As a lamp in a windless place does not waver, so the transcendentalist, whose mind is controlled, remains always steady in his meditation on the transcendent self.',
    author: '- Lord Sri Krishna Bhagavad Gita 6.19',
  },
  {
    text: 'The yogi whose mind is fixed on Me verily attains the highest perfection of transcendental happiness. He is beyond the mode of passion, he realizes his qualitative identity with the Supreme, and thus he is freed from all reactions to past deeds.',
    author: '- Lord Sri Krishna Bhagavad Gita 6.27',
  },
  {
    text: 'All living bodies subsist on food grains, which are produced from rains. Rains are produced by the performance of yajña [sacrifice], and yajña is born of prescribed duties.',
    author: '- Bhagavad Gita 3.14',
  },
  {
    text: 'Acts of sacrifice, charity and penance are not to be given up; they must be performed. Indeed, sacrifice, charity and penance purify even the great souls.',
    author: '- Lord Sri Krishna Bhagavad Gita 18.5',
  },
  {
    text: 'For one who has conquered the mind, the Supersoul is already reached, for he has attained tranquility. To such a man, happiness and distress, heat and cold, honor and dishonor are all the same.',
    author: '- Lord Sri Krishna Bhagavad Gita 6.7',
  },
  {
    text: 'You have the right to perform your prescribed duty, but you are not entitled to the fruits of your actions. Never consider yourself the cause of the results of your activities, and never be attached to not doing your duty.',
    author: '- Lord Sri Krishna Bhagavad Gita 2.47',
  },
];

// LOGIC FOR QUOTES SECTION STARTS
let front = true;

// Getting the front and the back texts
const texts = document.querySelectorAll('.text');

// Getting the front and the back author boxes
const authors = document.querySelectorAll('.author');

// Getting the buttons
const button = document.querySelectorAll('.new-quote');

const blockFront = document.querySelector('.block__front');
const blockBack = document.querySelector('.block__back');

const textFront = texts[0];
const textBack = texts[1];

const authorFront = authors[0];
const authorBack = authors[1];

const buttonFront = button[0];
const buttonBack = button[1];
let quote = '';
let author = '';
const genQuote = () => {
  var randNum = Math.floor(Math.random() * quotes.length);
  // Stores the quote present at the randomly generated index
  quote = quotes[randNum].text;

  // Stores the author of the respective quote
  author = quotes[randNum].author;

  // Making the author anonymous if no author is present
  if (!author) {
    author = 'Anonymous';
  }

  // Replacing the current quote and the author with a new one

  if (front) {
    // Changing the front if back-side is displayed
    textFront.innerHTML = quote;
    authorFront.innerHTML = author;
  } else {
    // Changing the back if front-side is displayed
    textBack.innerHTML = quote;
    authorBack.innerHTML = author;
  }

  front = !front;
};
genQuote();
function newQuote() {
  // Rotating the Quote Box
  blockBack.classList.toggle('rotateB');
  blockFront.classList.toggle('rotateF');

  // Displaying a new quote when the webpage loads
  genQuote();
}
// function to tweet quote
function tweetQuote() {
  let tweetPost = `https://twitter.com/intent/tweet?text="${quote}"%0A${author}`;
  window.open(tweetPost);
}
// LOGIC FOR QUOTE ENDS HERE

function checkTime(i) {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
}

function startDate() {
  var d = new Date();
  var days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  document.getElementById('date').innerHTML =
    days[d.getDay()] +
    ' | ' +
    [d.getMonth() + 1] +
    '/' +
    d.getDate() +
    '/' +
    d.getFullYear();
}
