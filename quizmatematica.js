const questions = [
    {
        question: "Qual é o resultado de 345 + 678?",
        answers: ["1090", "1.023", "987", "1200"],
        correct: 1
    },
    {
        question: "João tinha R$ 120,00. Ele comprou um brinquedo por R$ 75,00. Quanto sobrou?",
        answers: ["R$ 50,00", "R$ 45,00", "R$ 60,00", "R$ 85,00"],
        correct: 1
    },

    {
        question: " Qual é o valor de 8 x 7?",
        answers: ["36", "49", "64", "56"],
        correct: 3
    },

    {
        question: "Divida 96 por 8. Qual é o resultado??",
        answers: ["12", "5", "15", "24"],
        correct: 0
    },

    {
        question: " Maria cortou uma pizza em 8 pedaços iguais e comeu 3. Que fração da pizza ela comeu?",
        answers: ["8/80", "2/3", "3/18", "3/8"],
        correct: 3
    },
    {
        question: " Qual número completa a sequência: 2, 4, 6, ___, 10, 12?",
        answers: ["7", "8", "9", "11"],
        correct: 1
    },
    {
        question: "  Um retângulo tem 5 cm de largura e 8 cm de comprimento. Qual é a sua área?",
        answers: ["40 cm²", "60 cm²", "45 cm²", "50 cm²"],
        correct: 0
    },
    {
        question: " Escreva o número 3.457 por extenso.",
        answers: ["três mil, quatrocentos e cinquenta e sete", "trêze mil, quatrocentos e cinquenta e sete", "três milhões quatrocentos e cinquenta e sete mil ", "trezentos e quarenta e cinco"],
        correct: 0
    },
    {
        question: " Se um quilo de maçã custa R$ 6,00, quanto custam 3 quilos?",
        answers: ["R$ 30,00", "R$ 49,00", "R$ 18,00", "R$ 20,00"],
        correct: 2
    },
    {
        question: " Qual é o menor número primo maior que 10?",
        answers: ["12", " 11", "9", "8"],
        correct: 1
    },

];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

function showQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    answersEl.innerHTML = "";

    q.answers.forEach((answer, index) => {
        const btn = document.createElement("button");
        btn.textContent = answer;
        btn.onclick = () => selectAnswer(index);
        answersEl.appendChild(btn);
    });

    nextBtn.style.display = "none";
}

function selectAnswer(index) {
    const correct = questions[currentQuestion].correct;
    const buttons = answersEl.querySelectorAll("button");

    buttons.forEach((btn, i) => {
        btn.disabled = true;
        if (i === correct) {
            btn.style.backgroundColor = "#02c40c"; // verde
        } else if (i === index) {
            btn.style.backgroundColor = "#f72601"; // vermelho
        }
    });

    if (index === correct) {
        score++;
    }

    nextBtn.style.display = "inline-block";
}

nextBtn.onclick = () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
};

function showResult() {
    quiz.innerHTML = `
      <h2>Você acertou ${score} de ${questions.length} perguntas!</h2>
      <button onclick="location.reload()">Recomeçar</button>
    `;
}

showQuestion();