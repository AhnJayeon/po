const quizData = [
    {
        question: "All the _____ for the laboratory technician position possess the necessary training but Mr. Kim has the most experience.",
        a: "application",
        b: "applicants",
        c: "applies",
        d: "applying",
        correct: "b",
    },
    // {
    //     question: "Most of the new houses for sale on Seed Island are _____ priced and in excellent condition.",
    //     a: "moderate",
    //     b: "moderated",
    //     c: "moderately",
    //     d: "moderation",
    //     correct: "c",
    // },
    // {
    //     question: "The quality of the products _____ depending on when they were manufactured.",
    //     a: "to vary",
    //     b: "varying",
    //     c: "varies",
    //     d: "vary",
    //     correct: "c",
    // },
    // {
    //     question: "The president strives to make the new branch in London _____.",
    //     a: "competitively",
    //     b: "compete",
    //     c: "competitive",
    //     d: "competition",
    //     correct: "c",
    // },
    // {
    //     question: "Solo Business is a weekly magazine which is devoted to _____ the small business owner.",
    //     a: "serve",
    //     b: "serves",
    //     c: "serving",
    //     d: "be served",
    //     correct: "c",
    // },
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