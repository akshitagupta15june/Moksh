

const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
const infm=quiz_box.querySelector(".info");
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo");
}

exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); 
}

continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuetions(0); 
    queCounter(1); 
    startTimer(15); 
    startTimerLine(0); 
}
let timeValue =  15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); 
    result_box.classList.remove("activeResult"); 
    timeValue = 15; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); 
    queCounter(que_numb); 
    clearInterval(counter); 
    clearInterval(counterLine); 
    startTimer(timeValue); 
    startTimerLine(widthValue);
    timeText.textContent = "Time Left"; 
    next_btn.classList.remove("show"); 
}

quit_quiz.onclick = ()=>{
    window.location.reload(); 
}

const quit_btn = document.querySelector("footer .quit_btn");
quit_btn.onclick = ()=>{
    quiz_box.classList.remove("activeQuiz"); 
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ 
        que_count++;
        que_numb++; 
        showQuetions(que_count);
        queCounter(que_numb); 
        clearInterval(counter); 
        clearInterval(counterLine); 
        startTimer(timeValue); 
        startTimerLine(widthValue); 
        timeText.textContent = "Time Left"; 
        next_btn.classList.remove("show");
    }else{
        clearInterval(counter);
        clearInterval(counterLine);
        showResult();
    }
    infm.innerHTML="";
}

function showQuetions(index){ 
    const que_text = document.querySelector(".que_text");
    
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; 
    option_list.innerHTML = option_tag; 
    
    const option = option_list.querySelectorAll(".option");
    
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

function optionSelected(answer){
    clearInterval(counter); 
    clearInterval(counterLine); 
    let userAns = answer.textContent; 
    let correcAns = questions[que_count].answer; 
    const allOptions = option_list.children.length; 
    let infor=questions[que_count].inf; 
    
    if(userAns == correcAns){ 
        userScore += 1; 
        answer.classList.add("correct"); 
        answer.insertAdjacentHTML("beforeend", tickIconTag); 
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); 
        answer.insertAdjacentHTML("beforeend", crossIconTag);
        console.log("Wrong Answer");
        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ 
                option_list.children[i].setAttribute("class", "option correct"); 
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); 
                console.log("Auto selected correct answer.");
                infm.innerHTML=infor;
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); 
    }
    next_btn.classList.add("show"); 
}
function showResult(){
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3){ 
       
        let scoreTag = '<span>and congrats! , You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;  
        const attemptSummary = document.createElement('div');
        attemptSummary.innerHTML = `<p>Note: First Load questions then Click The Print Button </p>`;
   scoreText.appendChild(attemptSummary);
    }
    else if(userScore > 1){ 
        let scoreTag = '<span>and nice , You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
        const attemptSummary = document.createElement('div');
        attemptSummary.innerHTML = `<p style="color: red;">Note: First Load questions then Click The Print Button</p>`;

   scoreText.appendChild(attemptSummary);
    }
    else{ 
        let scoreTag = '<span>and sorry , You got only <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
        const attemptSummary = document.createElement('div');
        attemptSummary.innerHTML = `<p style="color: red;">Note: First Load questions then Click The Print Button</p>`;

   scoreText.appendChild(attemptSummary);
    }

  

}
function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if(time < 9){ 
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero;
        }
        if(time < 0){ 
            clearInterval(counter); 
            timeText.textContent = "Time Off"; 
            const allOptions = option_list.children.length;
            let correcAns = questions[que_count].answer; 
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){ 
                    option_list.children[i].setAttribute("class", "option correct"); 
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled");
            }
            next_btn.classList.add("show"); 
        }
    }
}
function startTimerLine(time){
    counterLine = setInterval(timer, 100);
    function timer(){
        time += 4.9;
        time_line.style.width = time + "px"; 
        if(time > 745){ 
            clearInterval(counterLine); 
        }
    }
}
function queCounter(index){
    
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  
}
////////////
document.getElementById("print-btn").onclick = () => {
    // Create a div element to hold the printable content
    const printableContent = document.createElement("div");
    printableContent.id = "printable-content";
    printableContent.style.padding = "20px";
    printableContent.style.fontFamily = "Arial, sans-serif";

    // Loop through each question and create HTML structure
    questions.forEach(question => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");
        questionDiv.style.marginBottom = "20px";

        const questionText = document.createElement("p");
        questionText.textContent = `${question.numb}. ${question.question}`;
        questionDiv.appendChild(questionText);

        question.options.forEach(option => {
            const optionText = document.createElement("p");
            optionText.textContent = option;
            questionDiv.appendChild(optionText);
        });

        const answerText = document.createElement("p");
        answerText.textContent = `Correct Answer: ${question.answer}`;
        questionDiv.appendChild(answerText);

        const infoText = document.createElement("p");
        infoText.textContent = `Info: ${question.inf}`;
        questionDiv.appendChild(infoText);

        printableContent.appendChild(questionDiv);
    });

    // Append the printable content to the body (invisible)
    document.body.appendChild(printableContent);
    
    // Use html2canvas to create a canvas of the printable content
    html2canvas(printableContent).then(canvas => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "pt", "a4");
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("quiz.pdf");

        // Remove the printable content from the body
        document.body.removeChild(printableContent);
    });

     // Initialize variables to count attempted questions and correct answers
   let attemptedQuestions = 0;
   //let correctAnswers = 0;
   

   // Create a variable to store the HTML content for displaying questions, chosen answers, correct answers, and correctness
   let userAnswersHTML = '';

   // Loop through each question
   questions.forEach((question, index) => {
       // Increment attempted questions count
       attemptedQuestions++;

       // Add question text
       userAnswersHTML += `<div class="user-answer"><span>${question.numb}. ${question.question}</span>`;

       // Get the index of the chosen answer
       const selectedOption = option_list.querySelector('.selected');
       let userSelectedAnswer;
       if (selectedOption) {
           const selectedOptionText = selectedOption.textContent.trim();
           const optionIndex = question.options.findIndex(option => option === selectedOptionText);
           userSelectedAnswer = question.options[optionIndex];
          }
    
       userAnswersHTML += `<div class="correct-answer"><span>Correct Answer: ${question.answer}</span></div>`;

       userAnswersHTML += `</div>`; // Close user-answer div
       let total_time=5;
       let msg=document.querySelector(".complete_text");
       msg.innerText=`Congratulations! You've completed the Quiz in Given time`;
   });

   // Display the HTML content
   scoreText.innerHTML = userAnswersHTML;

   // Display the number of attempted questions out of the total
   const attemptSummary = document.createElement('div');
   attemptSummary.innerHTML = `<p>Attempted ${attemptedQuestions} out of ${questions.length} questions.</p>`;
   scoreText.appendChild(attemptSummary);
   
};
