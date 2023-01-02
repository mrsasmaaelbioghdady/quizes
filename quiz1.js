const quizData = [
    {
        question: "Question 1",
        a: "...",
        b: "..",
        c: "...",
        d: "..",
        correct: "d",
    },
    {
        question: "Question 2",
        a: "...",
        b: "..",
        c: "...",
        d: "..",
        correct: "b",
    },
    {
        question: "Question 3",
        a: "...",
        b: "..",
        c: "...",
        d: "..",
        correct: "a",
    },
    {
        question: "Question 4",
        a: "...",
        b: "..",
        c: "...",
        d: "..",
        correct: "b",
    },
    {
        question: "Question 5",
        a: "...",
        b: "..",
        c: "...",
        d: "..",
        correct: "b",
    },
    {
        question: "Question 6",
        a: "...",
        b: "..",
        c: "...",
        d: "..",
        correct: "b",
    },
    {
        question: "Question 7",
        a: "...",
        b: "..",
        c: "...",
        d: "..",
        correct: "b",
    },
    {
        question: "Question 8",
        a: "...",
        b: "..",
        c: "...",
        d: "..",
        correct: "b",
    },
    {
        question: "Question 9",
        a: "...",
        b: "..",
        c: "...",
        d: "..",
        correct: "b",
    },
    {
        question: "Question 10",
        a: "...",
        b: "..",
        c: "...",
        d: "..",
        correct: "b",
    },
    {
        question: "Question 11",
        a: "...",
        b: "..",
        c: "...",
        d: "..",
        correct: "b",
    },
    {
        question: "Question 12",
        a: "...",
        b: "..",
        c: "...",
        d: "..",
        correct: "b",
    },
    {
        question: "Question 13",
        a: "...",
        b: "..",
        c: "...",
        d: "..",
        correct: "b",
    },
    {
        question: "Question 14",
        a: "...",
        b: "..",
        c: "...",
        d: "..",
        correct: "b",
    },
    {
        question: "Question 15",
        a: "...",
        b: "..",
        c: "...",
        d: "..",
        correct: "b",
    },
    {
        question: "Question 16",
        a: "...",
        b: "..",
        c: "...",
        d: "..",
        correct: "b",
    },
    {
        question: "Question 17",
        a: "...",
        b: "..",
        c: "...",
        d: "..",
        correct: "b",
    },
    {
        question: "Question 18",
        a: "...",
        b: "..",
        c: "...",
        d: "..",
        correct: "b",
    },
    {
        question: "Question 19",
        a: "...",
        b: "..",
        c: "...",
        d: "..",
        correct: "b",
    },
    {
        question: "Question 20",
        a: "...",
        b: "..",
        c: "...",
        d: "..",
        correct: "b",
    },
    {
        question: "Question 21",
        a: "...",
        b: "..",
        c: "...",
        d: "..",
        correct: "b",
    },
    {
        question: "Question 22",
        a: "...",
        b: "..",
        c: "...",
        d: "..",
        correct: "b",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})