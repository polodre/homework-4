

const startButton = document.getElementById('start-btn');
const questionContainer = document.getElementById('question-container');
let shuffledQuestions, currentQuestionIndex
const nextButton = document.getElementById('next-btn');
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const startingMinutes = 10;
let time = startingMinutes * 60;
const constcountdownEl = document.getElementById('countdown');


startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    constcountdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
}

function startGame() {
    // console.log('Game Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainer.classList.remove('hide')
    setNextQuestion()
}


function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}



function selectAnswer(event) {
    const selectedButton = event.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}
    



    function setStatusClass(element, correct) {
        clearStatusClass(element)
        if (correct) {
            element.classList.add('correct')
        } else {
            element.classList.add('wrong')
        }
    }

    function clearStatusClass(element) {
        element.classList.remove('correct')
        element.classList.remove('wrong')
    }

    const questions = [
        {
            question: 'A _____ is an object that waits for an event to occur and respond in some way when it does.',
            answers: [
                { text: 'GUI', correct: false },
                { text: 'component', correct: false },
                { text: 'event', correct: false },
                { text: 'listener', correct: true }
            ]
        },
        {
            question: 'How many days are in a year?',
            answers: [
                { text: '486', correct: false },
                { text: '542', correct: false },
                { text: '365', correct: true },
                { text: '10,000', correct: false }
            ]
        },
        {
            question: 'When year was the first Moon landing?',
            answers: [
                { text: '2002', correct: false },
                { text: '1842', correct: false },
                { text: '1969', correct: true },
                { text: '200 B.C.', correct: false }
            ]
        },
        {
            question: 'How many squares of toilet tissue on a roll?',
            answers: [
                { text: '1500', correct: false },
                { text: '1000', correct: true },
                { text: '1850', correct: false },
                { text: '742', correct: false }
            ]
        }
    ]

