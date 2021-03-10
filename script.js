var quizQuestions = [
    {
        question: "Question 1",
        options: ["A", "B", "C", "D"],
        answer: "A"
    },
    {
        question: "Question 2",
        options: ["A", "B", "C", "D"],
        answer: "A"
    },
    {
        question: "Question 3",
        options: ["A", "B", "C", "D"],
        answer: "A"
    }
]


let startBtn = document.getElementById('start');
let quizArea = document.getElementById('quizArea');
let quizChoice = document.getElementById('quizChoice');

let startQuiz = function() {
    console.log("quiz question function")
    //go into question array
    //grab first question
    //display the question
    var firstQuestion = quizQuestions[0].question;
    quizArea.innerHTML = firstQuestion

    var firstChoice = quizQuestions[0].options
    quizChoice.innerHTML = firstChoice
}

startBtn.addEventListener('click', function () {
    // console.log("Button's clicked");
    startQuiz();
});
