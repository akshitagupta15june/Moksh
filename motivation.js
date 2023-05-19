function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var ampm = "";
  m = checkTime(m);

  if (h > 12) {
    h = h - 12;
    ampm = " PM";
  } else if (h == 12) {
    ampm = " PM";
  } else if (h < 12) {
    ampm = " AM";
  } else {
    ampm = " PM";
  }

  if (h == 0) {
    h = 12;
  }
  

  document.getElementById("display").innerHTML = h + ":" + m + ampm;
  var t = setTimeout(function () {
    startTime();
  }, 500);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function genQuote() {
  var randNum = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerHTML = quotes[randNum];
  var tweetQuote = quotes[randNum].split(" ").join("%20");
  tweetQuote = tweetQuote.split("<br>").join("");
  console.log(tweetQuote);
  tweetQuote =
    "https://twitter.com/intent/tweet?text=" + tweetQuote.split('"').join("");
  document
    .getElementById("twitter-share-button")
    .setAttribute("href", tweetQuote);
}

var quotes = [
  '"O son of Kunti, the nonpermanent appearance of happiness and distress, and their disappearance in due course, are like the appearance and disappearance of winter and summer seasons. They arise from sense perception, O scion of Bharata, and one must learn to tolerate them without being disturbed."<br>-   <small><em>Lord Sri Krishna - Bhagavad-gita 2.14</em></small>',
  '"For the soul there is neither birth nor death at any time. He has not come into being, does not come into being, and will not come into being. He is unborn, eternal, ever-existing, and primeval. He is not slain when the body is slain."<br> - Lord Sri Krishna - Bhagavad-gita 2.20',
  '" What is night for all beings is the time of awakening for the self-controlled; and the time of awakening for all beings is night for the introspective sage."<br>- Lord Sri Krishna - Bhagavad-gita 2.69',
  '"The thoughts of My pue devotee dwell in Me, their lives are fully devoted to My service, and they derive great satisfaction and bliss from always enlightening one another and conversing about Me."<br>- Lord Sri Krishna - Bhagavad-gita 10. 9',
  '"As a lamp in a windless place does not waver, so the transcendentalist, whose mind is controlled, remains always steady in his meditation on the transcendent self."<br>- Lord Sri Krishna - Bhagavad-gita 6.19',
  '" For one who sees me everywhere and sees everything in Me, I am never lost, nor is he ever lost to me."<br>- Lord Sri Krishna - Bhagavad-gita 6.30',
  '"There is no truth superior to Me. Everything rests upon Me, as pearls are strung on a thread."<br>- Lord Sri Krishna - Bhagavad gita 7.7',
  '"After many births and deaths, he who is actually in knowledge surrenders unto Me, knowing Me to be the cause of all causes and all that is. Such a great soul is very rare."<br>- Lord Sri Krishna - Bhagavad-gita 7.19',
  '"A person is said to be elevated in yoga when, having renounced all material desires, he neither acts for sense gratification nor engages in fruitive activities."<br> - Lord Sri Krishna - Bhagavad-gita 6.4',
  '"For one who has conquered the mind, the Supersoul is already reached, for he has attained tranquillity. To such a man happiness and distress, heat and cold, honor and dishonor are all the same."<br>- Lord Sri Krishna - Bhagavad-gita 6.7',
  '"Acts of sacrifice, charity and penance are not to be given up; they must be performed. Indeed, sacrifice, charity and penance purify even the great souls."<br>- Lord Sri Krishna - Bhagavad-gita 18.5 ',
  '"The five great elements, false ego, intelligence, the unmanifested, the ten senses and the mind, the five sense objects, desire, hatred, happiness, distress, the aggregate, the life symptoms, and convictions – all these are considered, in summary, to be the field of activities and its interactions."<br>- Lord Sri Krishna - Bhagavad-gita 13.6',
  '"One who sees the Supersoul equally present everywhere, in every living being, does not degrade himself by his mind. Thus he approaches the transcendental destination."<br>- Lord Sri Krishna - Bhagavad-gita 13.29',
  '"Those who are seers of the truth have concluded that of the nonexistent there is no endurance, and of the existent there is no cessation. This seers have concluded by studying the nature of both."<br>- Bhagavad-gita 2.16',
  '"The soul can never be cut into pieces by any weapon, nor can he be burned by fire, nor moistened by water, nor withered by the wind."<br>- Bhagavad-gita 2.23',
  '"All living bodies subsist on food grains, which are produced from rains. Rains are produced by performance of yajña [sacrifice], and yajña is born of prescribed duties."<br>- Bhagavad-gita 3.14',
  '"A self-realized man has no purpose to fulfill in the discharge of his prescribed duties, nor has he any reason not to perform such work. Nor has he any need to depend on any other living being."<br>- Bhagavad-gita 3.18',
  '"Whatever action a great man performs, common men follow. And whatever standards he sets by exemplary acts, all the world pursues."<br>- Bhagavad-gita 3.21',
  '"The embodied soul is eternal, indestructible, and immeasurable; therefore, you should not grieve for the body."<br>- Lord Sri Krishna - Bhagavad Gita 2.25 ',
  '"The soul is neither born, and nor does it die. It is not that it came into being and will cease to exist. The soul is unborn, eternal, ever-existing, and primeval. It is not slain when the body is slain."<br>- Lord Sri Krishna - Bhagavad Gita 2.20',
  '"Those who are seers of the truth have concluded that of the nonexistent, there is no endurance, and of the existent, there is no cessation. This seers have concluded by studying the nature of both." - Bhagavad Gita 2.16',
  '"The thoughts of My pure devotees dwell in Me, their lives are fully devoted to My service, and they derive great satisfaction and bliss from always enlightening one another and conversing about Me."<br> - Lord Sri Krishna - Bhagavad Gita 10.9',
  '"The Supreme Lord is situated in everyone\'s heart, O Arjuna, and is directing the wanderings of all living entities, who are seated as on a machine, made of the material energy."<br>- Lord Sri Krishna - Bhagavad Gita 18.61',
  '"The Supreme Lord said: My dear Arjuna, because you are never envious of Me, I shall impart to you this most secret wisdom, knowing which you shall be relieved of the miseries of material existence."<br>- Lord Sri Krishna - Bhagavad Gita 9.1',
  '"My dear Arjuna, O son of Prtha, see now My opulences, hundreds of thousands of varied divine forms, multicolored like the sea."<br>- Lord Sri Krishna - Bhagavad Gita 11.5',
  '"The five great elements, false ego, intelligence, the unmanifested, the ten senses and the mind, the five sense objects, desire, hatred, happiness, distress, the aggregate, the life symptoms, and convictions - all these are considered, in summary, to be the field of activities and its interactions."<br>- Lord Sri Krishna Bhagavad Gita 13.6',
  '"A person is said to be elevated in yoga when, having renounced all material desires, he neither acts for sense gratification nor engages in fruitive activities."<br> - Lord Sri Krishna Bhagavad Gita 6.4',
  '"After many births and deaths, he who is actually in knowledge surrenders unto Me, knowing Me to be the cause of all causes and all that is. Such a great soul is very rare."<br> - Lord Sri Krishna Bhagavad Gita 7.19',
  '"For one who sees Me everywhere and sees everything in Me, I am never lost, nor is he ever lost to Me."<br> - Lord Sri Krishna Bhagavad Gita 6.30',
  '"As a lamp in a windless place does not waver, so the transcendentalist, whose mind is controlled, remains always steady in his meditation on the transcendent self."<br> - Lord Sri Krishna Bhagavad Gita 6.19',
  '"The yogi whose mind is fixed on Me verily attains the highest perfection of transcendental happiness. He is beyond the mode of passion, he realizes his qualitative identity with the Supreme, and thus he is freed from all reactions to past deeds."<br> - Lord Sri Krishna Bhagavad Gita 6.27',
  '"All living bodies subsist on food grains, which are produced from rains. Rains are produced by the performance of yajña [sacrifice], and yajña is born of prescribed duties."<br> - Bhagavad Gita 3.14',
  '"Acts of sacrifice, charity and penance are not to be given up; they must be performed. Indeed, sacrifice, charity and penance purify even the great souls."<br> - Lord Sri Krishna Bhagavad Gita 18.5',
  '"For one who has conquered the mind, the Supersoul is already reached, for he has attained tranquility. To such a man, happiness and distress, heat and cold, honor and dishonor are all the same."<br> - Lord Sri Krishna Bhagavad Gita 6.7',
  '"You have the right to perform your prescribed duty, but you are not entitled to the fruits of your actions. Never consider yourself the cause of the results of your activities, and never be attached to not doing your duty."<br> - Lord Sri Krishna Bhagavad Gita 2.47'

];

function startDate() {
  var d = new Date();
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  document.getElementById("date").innerHTML =
    days[d.getDay()] +
    " | " +
    [d.getMonth() + 1] +
    "/" +
    d.getDate() +
    "/" +
    d.getFullYear();
}
