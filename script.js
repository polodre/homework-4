let currentIndex = 0;
var quizQuestions = [
    {
        question: 'How long to pitbulls live ?',
        choice: ['11 years', '8 years', '22 years', '22 years',],
        answer: 'a'
    },
    
    {
        question: 'How many passengers does a 7 passenger truck seat?',
        hoice: ['11 passengers', '7 passengers', '22 passengers', '22 passengers',],
        answer: 'b'
    },
    {
        question: 'Mow many wheels does a 4 wheeler have?',
        hoice: ['11 wheels', '8 wheels', '4 wheels', '22 wheels',],
        answer: 'c'
    }
]




let startBtn = document.getElementById('start-btn');
let quizArea = document.getElementById('question-container');
let quizChoice = document.getElementById('answer-buttons');
let goToNext = document.getElementById('goToNext');

let startQuiz = function() {
    //console.log("quiz question function")
    var firstQuestion = quizQuestions[0].question;
    quizArea.innerHTML = firstQuestion
    
    var firstChoice = quizQuestions[0].choice;
    quizChoice.innerHTML = firstChoice   
         
    };

            
startBtn.addEventListener('click', function () {
    // console.log("Button's clicked");
    startQuiz();
});
