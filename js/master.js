// Initialization
const startGameSection = document.getElementsByClassName("startGame")[0];
const startGameButton = document.getElementsByClassName("startGame__button")[0];
const questionSection = document.getElementsByClassName("question")[0];
const question = document.getElementsByClassName("question__h1--start")[0];
const questionsNumber = document.getElementsByClassName("question-data__number")[0];
const questionScore = document.getElementsByClassName("question-data__score")[0];
const answersContainer = document.getElementsByClassName("answers-container")[0];
const progressBar = document.getElementsByClassName("qurstion__progressbar")[0];
const resultSection = document.getElementsByClassName("resultGame")[0];
const userScore = document.getElementsByClassName("resultBox__user-score")[0];
const userResultMessage = document.getElementsByClassName("resultBox__message")[0];
const restGameButton = document.getElementsByClassName("resultGame__button--startAgain")[0];

function nextSection(button, currentPage, nextPage) {

    button.addEventListener("click", _ => {
        currentPage.style.display = "none";
        nextPage.style.display = "flex";
    });
}

// Initialization

// StartGame Section
nextSection(startGameButton, startGameSection, questionSection);

// StartGame Section

// Question Section

async function getQuestions() {

    await fetch("https://opentdb.com/api.php?amount=5&type=multiple").then((results) => {
        if (results.ok) {
            const data = results.json();
            return data;
        } else {
            console.error("nothing");
        }
    }).then((data) => {
        const questions = getQuestion(data.results)
        


    })
}
getQuestions();

function* getQuestion(questions) {
    for (const question of questions) {
        yield question
    }
}


// Question Section


















// async function getQuestions() {
//     const response = await fetch("https://opentdb.com/api.php?amount=5&type=multiple");
//     if (response.ok) {
//         const data = await response.json();
//     }

// }