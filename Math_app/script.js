let firstNumber, seconsNumber, options, firstTaskNumber, secondTaskNumber, task
let rightAnswers = [], wrongAnswers = [];


// Створення умов
$('.save-button').click((event) => {
	event.preventDefault();
	firstNumber = $('.first-number').val();
	secondNumber = $('.second-number').val();
	options = $('.select-form').val()
	sessionStorage.setItem('firstNumber', firstNumber);
	sessionStorage.setItem('secondNumber', secondNumber);
	sessionStorage.setItem('options', options);
});

// Створення завдань

// // Виведення змінних із sessionStorage
firstNumber = +sessionStorage.getItem('firstNumber');
secondNumber = +sessionStorage.getItem('secondNumber')
options = sessionStorage.getItem('options')
options = options.split(',');

if (localStorage.getItem('rightAnswers') !== null) {
	rightAnswers = localStorage.getItem('rightAnswers');
	//console.log(rightAnswers)
}

if (localStorage.getItem('wrongAnswers') !== null) {
	wrongAnswers = localStorage.getItem('wrongAnswers');
	//console.log(wrongAnswers)
}

// // Виведення інформації про умови завдання
$('.task-description').append(`<p>Будуть виконуватись операції ${options} у проміжку між ${firstNumber} та ${secondNumber}</p>`)

// // Функція, яка генерує завдання
function taskGenerator() {
	firstTaskNumber = Math.floor(Math.random() * (secondNumber - firstNumber + 1) + firstNumber);
	secondTaskNumber = Math.floor(Math.random() * (secondNumber - firstNumber + 1) + firstNumber);
	optionTask = options[Math.floor(Math.random() * (options.length))];
	if (firstTaskNumber >= secondTaskNumber) {
		if (optionTask === '/' && firstTaskNumber % secondTaskNumber !== 0) {
			while (firstTaskNumber % secondTaskNumber !== 0) {
				firstTaskNumber = firstTaskNumber - 1;
			}
			task = `${firstTaskNumber} ${optionTask} ${secondTaskNumber}`;
		} else {
			task = `${firstTaskNumber} ${optionTask} ${secondTaskNumber}`;
		}
	} else {
		if (optionTask === '/' && secondTaskNumber % firstTaskNumber !== 0) {
			while (secondTaskNumber % firstTaskNumber !== 0) {
				secondTaskNumber = secondTaskNumber - 1;
			}
			task = `${secondTaskNumber} ${optionTask} ${firstTaskNumber}`;
		} else {
			task = `${secondTaskNumber} ${optionTask} ${firstTaskNumber}`;
		}
	}
}

$('.start-generation').click(() => {
	for (let i = 1; i <= 5; i++) {
		taskGenerator()
		$(`.task${i}`).text(task);
		$(`#answer${i}`).val('');
		$(`.right-star`).remove();
	}
})

$('.answer-check').click(() => {
	for (let i = 1; i <= 5; i++)
		if (eval($(`.task${i}`).text()) === eval($(`#answer${i}`).val())) {
			rightAnswers = rightAnswers + `${$(`.task${i}`).text()} = ${$(`#answer${i}`).val()},`
			$(`.mark${i}`).append(`<img src="src/img/right-star.png" alt="" class="right-star">`)
		} else {
			wrongAnswers = wrongAnswers + `${$(`.task${i}`).text()} = ${$(`#answer${i}`).val()},`
			$(`.mark${i}`).append(`<img src="src/img/wrong-star.png" alt="" class="right-star">`)
		}

	localStorage.setItem('rightAnswers', rightAnswers)
	localStorage.setItem('wrongAnswers', wrongAnswers)
});

// Статистика

rightAnswersStat = localStorage.getItem('rightAnswers');
rightAnswersStat = rightAnswersStat.split(',');
wrongAnswersStat = localStorage.getItem('wrongAnswers');
wrongAnswersStat = wrongAnswersStat.split(',');
//console.log(wrongAnswersStat)
let rightAnswerPersent = Math.round((rightAnswersStat.length - 1) / ((rightAnswersStat.length - 1 + wrongAnswersStat.length - 1) / 100))
let wrongAnswerPersent = 100 - rightAnswerPersent;
$('.rightAnswers').append(`<p>${rightAnswersStat.length - 1} (${rightAnswerPersent}%)<p>`)
$('.wrongAnswers').append(`<p>${wrongAnswersStat.length - 1} (${wrongAnswerPersent}%)<p>`)

$('.btn-right-answers-list').click(() => {
	for (let i = 0; i < rightAnswersStat.length; i++) {
		$('.main').css('height', "auto")
		$('.right-answers-list-print').append(`<p>${rightAnswersStat[i]}<p>`)
	}
});

$('.btn-wrong-answers-list').click(() => {
	for (let i = 0; i < wrongAnswersStat.length; i++) {
		$('.main').css('height', "auto")
		$('.wrong-answers-list-print').append(`<p>${wrongAnswersStat[i]}<p>`)
	}
});

$('.btn-remove-result').click(() => {
	localStorage.clear();
	location.reload();
})
