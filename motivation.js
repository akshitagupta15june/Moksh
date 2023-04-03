

function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    var ampm = "";
    m = checkTime(m);

    if (h > 12) {
    	h = h - 12;
    	ampm = " PM";
    } else if (h == 12){
        h = 12;
    	ampm = " AM";
    } else if (h < 12){
        ampm = " AM";
    } else {
        ampm = "PM";
    };
  
  if(h==0) {
    h=12;
  }
    
    document.getElementById('display').innerHTML = h+":"+m+ampm;
    var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
    if (i<10) {i = "0" + i}; 
    return i;
}

function genQuote() {
  var randNum = Math.floor(Math.random() * 8) + 1;
  document.getElementById('quote').innerHTML = quotes[randNum];
  var tweetQuote = quotes[randNum].split(' ').join('%20');
  tweetQuote = tweetQuote.split('<br>').join('');
  tweetQuote = "https://twitter.com/intent/tweet?text=" + tweetQuote.split('"').join('')
  $('.twitter-share-button').attr('href', tweetQuote);
}




var quotes = ["\"O son of Kunti, the nonpermanent appearance of happiness and distress, and their disappearance in due course, are like the appearance and disappearance of winter and summer seasons. They arise from sense perception, O scion of Bharata, and one must learn to tolerate them without being disturbed.\"<br>-   <small><em>Lord Sri Krsna - Bhagavad-gita 2.14</em></small>", "\"For the soul there is neither birth nor death at any time. He has not come into being, does not come into being, and will not come into being. He is unborn, eternal, ever-existing, and primeval. He is not slain when the body is slain.\"<br> - Lord Sri Krsna - Bhagavad-gita 2.20", "\" What is night for all beings is the time of awakening for the self-controlled; and the time of awakening for all beings is night for the introspective sage.\"<br>- Lord Sri Krsna - Bhagavad-gita 2.69", "\"The thoughts of My pue devotee dwell in Me, their lives are fully devoted to My service, and they derive great satisfaction and bliss from always enlightening one another and conversing about Me.\"<br>- Lord Sri krsna - Bhagavad-gita 10. 9", "\"As a lamp in a windless place does not waver, so the transcendentalist, whose mind is controlled, remains always steady in his meditation on the transcendent self.",
"source\"<br>- Lord Sri Krsna - Bhagavad-gita 6.19", "\" For one who sees me everywhere and sees everything in Me, I am never lost, nor is he ever lost to me.\"<br>- Lord Sri Krsna - Bhagavad-gita 6.30", "\"There is no truth superior to Me. Everything rests upon Me, as pearls are strung on a thread.\"<br>- Lord Sri Krsna - Bhagavad gita 7.7", "\"After many births and deaths, he who is actually in knowledge surrenders unto Me, knowing Me to be the cause of all causes and all that is. Such a great soul is very rare.\"<br>- Lord Sri Krsna - Bhagavad-gita 7.19",];


function startDate() {
  var d = new Date();
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  document.getElementById("date").innerHTML = days[d.getDay()]+" | "+[d.getMonth()+1]+"/"+d.getDate()+"/"+d.getFullYear();
}

