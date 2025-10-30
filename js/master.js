// Initialization
const startGameSection = document.getElementsByClassName("startGame")[0];
const startGameButton = document.getElementsByClassName("startGame__button")[0];
const questionSection = document.getElementsByClassName("question")[0];
const questionText = document.getElementsByClassName("question__h1--start")[0];
const questionsNumber = document.getElementsByClassName("question-data__number")[0];
const questionScore = document.getElementsByClassName("question-data__score")[0];
const answersContainer = document.getElementsByClassName("answers-container")[0];
const resultSection = document.getElementsByClassName("resultGame")[0];
const userAnswers = document.getElementsByClassName("resultBox__user-answers")[0];
const userBiggestScore = document.getElementsByClassName("resultBox__user-score")[0];
const restGameButton = document.getElementsByClassName("resultGame__button--startAgain")[0];
const correctSound = document.getElementById("correct-sound");
const incorrectSound = document.getElementById("incorrect-sound");
const finishSound = document.getElementById("finish-sound");
const quiz = {
    score: 0,
    questionNumber: 1,
    progressBar: 20,
    reset: function () {
        this.score = 0;
        this.questionNumber = 1;
        this.progressBar = 20;
    }
}
let isClicked = false;
let questionsLength;
let questionsGenerator;

function nextSection(button, currentPage, nextPage) {
    try {


        button.addEventListener("click", _ => {
            !isClicked ? fetchQuestions() : null;
            isClicked = true;


            if (button == restGameButton) {
                soundManagement({ stopSound: true })
                quiz.reset();
            }
            setTimeout(() => {

                currentPage.style.display = "none";
                nextPage.style.display = "flex";

            }, 1000);


        });
    } catch (error) {
        currentPage.style.display = "none";
        nextPage.style.display = "flex";
    }

}

function soundManagement({ p = null, question = null, stopSound = false } = {}) {

    if (stopSound) {
        finishSound.pause();
        return
    }

    if (p == null & question == null) {
        finishSound.currentTime = 0
        finishSound.play();
        return
    }

    if (p.innerText === question.correct_answer) {
        correctSound.pause();
        correctSound.currentTime = 0;
        correctSound.play();
    } else {
        incorrectSound.pause();
        incorrectSound.currentTime = 0.5;
        incorrectSound.play();
    }
}
// Initialization

// StartGame Section
nextSection(startGameButton, startGameSection, questionSection);
// StartGame Section

// Question Section
async function fetchQuestions() {
    try {
        const response = await fetch("https://opentdb.com/api.php?amount=5&category=27&type=multiple");
        if (!response.ok) throw new Error("Failed to fetch questions");
        const data = [{
            question: "فَخَلَقَ اللهُ الإِنسَانَ عَلَى صُورَتِهِ، عَلَى صُورَةِ اللهِ خَلَقَهُ، ___ (تكوين 1:27)",
            correct_answer: "ذكراً وأنثى خَلَقَهُمَا",
            difficulty: "صعب",
            incorrect_answers: [
                "ذكراً وأنثى كوَّنهما ليعمرا الأرض",
                "وجعل لهما سلطاناً على كل حي",
                "وأعطاهما نسلاً ليملأا الأرض"
            ],
            type: "multiple"
        },
        {
            question: "فَقَالَ لآدَمَ: لأَنَّكَ سَمِعْتَ لِقَوْلِ امْرَأَتِكَ... ___؛ وَشَوْكًا وَحَسَكًا تُنْبِتُ لَكَ. (تكوين 3:17–18)",
            correct_answer: "مَلْعُونَةٌ الأَرْضُ بِسَبَبِكَ",
            difficulty: "صعب",
            incorrect_answers: [
                "مَنْعُونٌ أَنْتَ فِي كُلِّ عَمَلِكَ",
                "مُعَاقَبَةٌ الأَرْضُ مِنْ أَجْلِكَ",
                "سَأَجْعَلُ الأَرْضَ تُنْتِجُ عَنَاءً"
            ],
            type: "multiple"
        },
        {
            question: "إِنْ أَحْسَنْتَ أَفَلاَ رَفْعٌ؟ وَإِنْ لَمْ تُحْسِنْ فَعِنْدَ الْبَابِ خَطِيَّةٌ رَابِضَةٌ... وَإِلَيْكَ اشْتِيَاقُهَا، وَأَنْتَ ___. (تكوين 4:7)",
            correct_answer: "تَسُودُ عَلَيْهَا",
            difficulty: "صعب",
            incorrect_answers: [
                "تُسْلِمُ لَهَا",
                "تَتَغَلَّبُ عَلَى رَغْبَتِهَا",
                "تَغْلِبُ الشَّرَّ بِالْخَيْرِ"
            ],
            type: "multiple"
        },
        {
            question: "إِنْ أَرَادَ أَحَدٌ أَنْ يَأْتِيَ وَرَائِي، فَلْيُنْكِرْ نَفْسَهُ وَيَحْمِلْ صَلِيبَهُ ___. (لوقا 9:23)",
            correct_answer: "كُلَّ يَوْمٍ",
            difficulty: "صعب",
            incorrect_answers: [
                "فِي كُلِّ وَقْتٍ",
                "مَرَّةً فِي الأُسْبُوعِ",
                "عِنْدَ الضِّيقِ وَالتَّجْرِبَةِ"
            ],
            type: "multiple"
        },
        {
            question: "وَلاَ تُشَاكِلُوا هذَا الدَّهْرَ، بَلِ تَغَيَّرُوا عَنْ شَكْلِكُمْ بِتَجْدِيدِ ___، لِتَمْتَحِنُوا مَا هُوَ إِرَادَةُ اللهِ الصَّالِحَةُ الْمَرْضِيَّةُ الْكَامِلَةُ. (رومية 12:2)",
            correct_answer: "أَفْكَارِكُمْ",
            difficulty: "صعب",
            incorrect_answers: [
                "أَرْوَاحِكُمْ",
                "قُلُوبِكُمْ",
                "نُفُوسِكُمْ"
            ],
            type: "multiple"
        }
        ];

        questionsGenerator = getQuestion(data);
        questionsLength = data.length;
        updateQuestion(questionsGenerator.next().value);
    } catch (error) {
        console.error("Error fetching questions:", error);

    }
}

function* getQuestion(questions) {
    for (const question of questions) {
        yield question
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function updateQuestion(question) {
    questionText.innerHTML = question.question;
    questionsNumber.innerText = `سؤال ${quiz.questionNumber} من ${questionsLength}`;
    questionScore.innerText = `${quiz.score} :النتيجة`;
    document.documentElement.style.setProperty('--bar-width', `${quiz.progressBar}` + "%");

    quiz.questionNumber++;
    quiz.progressBar += 20;
    updateAnswers(question)

}

function updateAnswers(question) {
    let allAnswers = [...question.incorrect_answers, question.correct_answer];

    allAnswers = shuffle(allAnswers);
    answersContainer.innerHTML = "";

    for (const answer of allAnswers) {
        let p = document.createElement("p");
        p.innerHTML = answer;
        p.dataset.answer = answer;
        p.setAttribute("role", "button")
        p.setAttribute("tabindex", "0")
        p.classList.add("answer");

        const handler = (e) => answerEvent(question, e);
        p.addEventListener("click", handler);
        p._handler = handler;
        answersContainer.append(p);
    }
}

function answerEvent(question, e) {
    const p = e.target;
    const selectedAnswer = p.dataset.answer;
    p.classList.add("answer--active");

    soundManagement({ p: p, question: question })

    answersContainer.querySelectorAll(".answer:not(.answer--false):not(.answer--right)").forEach((e) => {
        const eAnswer = e.dataset.answer;
        if (eAnswer === question.correct_answer) {
            e.classList.add("answer--right");
            selectedAnswer == eAnswer ? quiz.score += 5 : null;

        } else {
            e.classList.add("answer--false");
        }


        e.removeEventListener("click", e._handler)
    });



    setTimeout(() => {
        const nextQuestion = questionsGenerator.next();

        if (nextQuestion.done) {
            updateResults();
            isClicked = false;
            nextSection(null, questionSection, resultSection);
            soundManagement();
        } else {
            updateQuestion(nextQuestion.value, questionsLength);

        }
    }, 1000);
}


// Question Section

// Results Section
function updateResults() {
    //update the user answers
    userAnswers.innerText = `أجبت عن ${quiz.score / 5} من أصل ${questionsLength}   
`


    //update the biggestScore
    userBiggestScore.innerText = `${quiz.score} :درجتك
`

}
//Reset users answered questions and score

nextSection(restGameButton, resultSection, questionSection)

// Results Section














