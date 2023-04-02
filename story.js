const quizForm = document.querySelector('#quiz-form');
const submitButton = document.querySelector('#submit-button');
const resultsDiv = document.querySelector('#results');

submitButton.addEventListener('click', (event) => {
	event.preventDefault();
	const userAnswers = [];
	let score = 0;

	// get user answers and calculate score
	const question1Answer = quizForm.elements.question1.value;
	userAnswers.push(question1Answer);
	if (question1Answer === 'a') {
		score++;
	}

	const question2Answer = quizForm.elements.question2.value;
	userAnswers.push(question2Answer);
	if (question2Answer === 'a') {
		score++;
	}

	const question3Answer = quizForm.elements.question3.value;
	userAnswers.push(question3Answer);
	if (question3Answer === 'c') {
		score++;
	}

	// display results
	let resultText = `You scored ${score} out of 3.<br>`;
	for (let i = 0; i < userAnswers.length; i++) {
		const questionNumber = i + 1;
		resultText += `Question ${questionNumber}: `;
		if (userAnswers[i] === 'a') {
			resultText += `Correct.<br>`;
		} else {
			resultText += `Incorrect.<br>`;
		}
	}

	resultsDiv.innerHTML = resultText;
});
