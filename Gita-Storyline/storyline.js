const arjunaConversation = document.querySelector(".arjuna-conversation");   // making this two classes arjuna and krishna
const krishnaConversation = document.querySelector(".krishna-conversation");

const question = [
  {
    Arjuna: "What should one do when parents don't understand him/her? ",
    Krishna: "You should always respect your parents, even if they don't understand you. You should try to explain your actions and thoughts to them and listen to their advice. But ultimately, you need to follow your own conscience. As Krishna says in the Bhagavad Gita, It is better to live your own destiny imperfectly than to live an imitation of somebody else's life with perfection."
  },
  {
    Arjuna: "What is the role of Love in life & why is it so important?",
    Krishna: "My dear Arjuna, love is the essence of all existence. It is the force that binds all beings, for as I have said, I am the taste of water, the light of the sun and the moon, the syllable Om in the Vedic mantras, the sound in ether, and the ability in man. (BG 7.8) All manifestations of love, whether for oneself, others, or for Me, lead us to a state of union with the Divine. Love is the key to unlocking the doors of our hearts, for as I have said, Whosoever offers to Me with devotion a leaf, a flower, a fruit, or water, that offering of love, of the pure-hearted is accepted by Me. (BG 9.26) So, dear Arjuna, love unconditionally and without judgment, for in doing so, you will come to realize the divine love that is within you and all around you, leading you to a state of eternal bliss."
  },
  {
    Arjuna: "Dear Krishna, I want to give time to my study as well as my loved ones too but I'm not able to manage time for all the things, Please tell me how can I do that?",
    Krishna: "Oh Arjuna, the key to managing time is to prioritize your tasks and activities. You must first determine what is most important to you and allocate your time accordingly. It is important to be mindful of the present moment and not to waste time on unproductive activities. As Lord Krishna said in Chapter 2, Verse 47 of the Bhagavad Gita, Your right is to work only, but never to the fruit thereof. Let not the fruits of action be your motive, nor let your attachment be to inaction. By focusing on the task at hand and letting go of attachment to the outcome, you can make the most of your time and be present with your loved ones while also pursuing your studies. Remember to also take breaks and practice self-care to avoid burnout."
  },
  {
    Arjuna: " Oh Dear Krishna, Please tell me how can I deal with self-doubt?",
    Krishna: "Arjuna, self-doubt is a common obstacle in one's spiritual journey. But one should not let it impede their progress. The mind is restless and can create doubts, but one can overcome it with determination and surrender to the divine. In Chapter 6, verse 3 of the Bhagavad Gita, I spoke about the importance of discipline and self-control. By controlling the mind, one can overcome self-doubt. Also, in Chapter 2, verse 48, I said that one should perform their duty without attachment to the outcome. This implies being confident in one's actions without worrying about the results. Furthermore, in Chapter 9, verse 22, I explained that those who surrender to me with devotion are freed from doubt. So, Arjuna, if you surrender to me with devotion and have faith in my teachings, self-doubt will cease to exist. Focus on the present moment, perform your duty diligently with a calm mind, and surrender to me."
  },
  {
    Arjuna: "How can I achieve mental peace Krishna?",
    Krishna: "The best way to achieve mental peace is by following the path of Dharma. Dharma is the path of righteousness and living in accordance with one's natural tendencies. By following Dharma, one can find inner peace and contentment. The Bhagavad Gita teaches that Dharma is the foundation of all things and is the key to achieving liberation from suffering. Dharma is the foundation of all things, Arjuna. It is the foundation of the universe. It is the foundation of your own self. Dharma is the foundation of all things, and it is the key to achieving liberation from suffering. - Bhagavad Gita 2:31-32"
  },
  {
    Arjuna: "Is being kind to everyone worthy in this Kaliyug?",
    Krishna: "Dear Arjuna, being kind to everyone is certainly a noble quality even in Kaliyug. However, it is important to remember that kindness alone cannot lead one to ultimate enlightenment. The path of devotion, karma, and knowledge must be followed with true intent and understanding. As stated in the Bhagavad Gita, Perform your duty with equanimity, O Arjuna, abandoning all attachment to success or failure. Such evenness of mind is called Yoga. (2.48) It is important to act with detachment and without desire for personal gain, for this is the key to spiritual growth and ultimate liberation. So, by all means, be kind, but also strive to deepen your understanding and practice of the teachings of the Gita."
  },
  {
    Arjuna: "What is the ultimate goal of human life?",
    Krishna: "The ultimate goal of human life is to attain liberation from the cycle of birth and death. This can be achieved by following the path of Dharma, or righteous living."
  },
  {
    Arjuna: "How can I overcome my attachment to status and reputation?",
    Krishna: "One way to overcome attachment to status and reputation is to remember that they are temporary and do not last forever. Another way is to focus on your inner self and your own spiritual development, rather than what others think of you. Finally, you can also remember that your true worth is not based on your status or reputation, but on your character and actions."
  },
  {
    Arjuna: "How to deal with anxiety, Krishna?",
    Krishna: "When you are feeling stressed, remember that you are not alone. I am always with you, and I will never leave you. Take a deep breath and relax. Close your eyes and focus on your breath. Listen to the silence around you. Focus on the present moment and let go of your worries. Remember that I am always with you, and I will never leave you."
  },
  {
    Arjuna: "Is there any place for anger in a love bond?",
    Krishna: "My dear Arjuna, anger arises from attachment and desire, which are both illusions of the material world. As stated in the Bhagavad Gita, from anger comes delusion; from delusion, confusion of memory; and from confusion of memory, loss of intelligence and destruction of one's life (2.63). Therefore, anger has no place in a love bond, as love is based on selflessness and detachment. One must strive to overcome anger by cultivating detachment and by becoming equipoised in happiness and distress. As I have said, one is said to be in full knowledge whose every act is devoid of desire for sense gratification. He is such that he does not rejoice or hate or grieve or desire; his senses are always under control (BG 4.19). Thus, to maintain a pure and loving relationship, it is essential to transcend anger and cultivate a mindset of selflessness and detachment. Only then can one experience the true nature of love, which transcends all worldly experiences."
  },
  {
    Arjuna:"How to be free from the cycle of birth & death?",
    Krishna:"The cycle of birth and death can only be broken by attaining knowledge of the Self. Once the Self is realized, the individual soul becomes free from the limitations of the body and mind and is no longer subject to the cycle of birth and death."
  },
  {
    Arjuna: "What should I do when anyone threatens me?",
    Krishna: "If someone threatens you, the best thing to do is to remain calm and try to reason with the person. If that doesn't work, then you can use force if necessary to protect yourself. However, you should only use as much force as is necessary and not go overboard. Remember that violence is never the answer and should only be used as a last resort. Even if you are considered to be the most sinful of all sinners, you can still cross over the ocean of sin by taking refuge in Me. So do not despair. - Bhagavad Gita 9.33"
  },
  {
    Arjuna:"What is Soul?",
    Krishna:"The soul is the true self of each individual. It is the immortal essence of who we are, and it is not subject to the changes and vicissitudes of this world. The soul is our innermost being, our true nature. It is the source of our consciousness and our individuality."
  }
]

let currentQuestionIndex=0;
function showQuestion(){
  let currentQuestion = question[currentQuestionIndex];
  arjunaConversation.innerText = currentQuestion.Arjuna;
  krishnaConversation.innerText = currentQuestion.Krishna;
}

document.addEventListener('keydown',(e)=>{
  if(e.keyCode == 37) {
    currentQuestionIndex = (currentQuestionIndex - 1 + question.length) % question.length;
    showQuestion();
  }
  else if(e.keyCode == 39) {
    currentQuestionIndex = (currentQuestionIndex + 1) % question.length;
    showQuestion();
  }
})

let left=document.getElementById("left")
let right=document.getElementById('right')

left.addEventListener("click", () => {
  currentQuestionIndex = (currentQuestionIndex - 1 + question.length) % question.length;
  showQuestion();
});

right.addEventListener("click", () => {
  currentQuestionIndex = (currentQuestionIndex + 1) % question.length;
  showQuestion();
});

showQuestion();
function toggleAudio() {
  var audioElement = document.getElementById('player')
  var soundOn = document.getElementById('play')
  var soundOff = document.getElementById('pause')
  if (audioElement.paused) {
    audioElement.play();
    $(soundOn).show();
    $(soundOff).hide();
  } else {
    audioElement.pause();
    $(soundOn).hide();
    $(soundOff).show();
  }
} 