// declare variables
let story = document.getElementById("MartianStory");
let siteFooter = document.getElementById("siteFooter");
let question = document.getElementById("question");
let answer = document.getElementById("answer");
let yourAnswer = document.getElementById("yourAnswer");
let submit = document.getElementById("submit");
let answers = [];

/* listen for clicks on the submit button and call the getAnswer() function when they happen. */
submit.addEventListener("click", getAnswer);

// call the function to ask the first question.
askQuestion(0); 

/* askQuestion() asks a question, based on the number passed to it. */
function askQuestion(questionNumber) {
    answer.style.display = "block";


    answers.length = questionNumber;

    switch (questionNumber) {
        case 0:
            question.innerHTML = "Вы готовы поиграть?";
            break;
        case 1:
            question.innerHTML = "Отправляемся домой или остаемся дома?";
            break;
        case 2:
            question.innerHTML = "Рискни или иди домой.";
            break;
        case 3:
            question.innerHTML = "Выбросить кота или нет?"
        default:
            break;
    }

}

/* getAnswer() gets the answer from the text field and pushes it into the answers array, then calls the continueStory function */
function getAnswer() {
    cleanInput = yourAnswer.value.toUpperCase();
    answers.push(cleanInput);
    yourAnswer.value = "";
    continueStory(answers.length - 1);
}

/* continueStory() displays part of the story or an error based on the value of an item in the answers array. */
function continueStory(answerNumber) {
    switch (answerNumber) {
        case 0:
            if (answers[0] === "ДА") {
                MartianStory.innerHTML = document.getElementById("answer01").innerHTML;
                askQuestion(1);
            } else if (answers[0] === "НЕТ") {
                MartianStory.innerHTML = document.getElementById("answer02").innerHTML;
                askQuestion(0);
            } else {
                MartianStory.innerHTML = document.getElementById("err0").innerHTML;
                askQuestion(0);
            }
            break;
        case 1:
            if (answers[1] === "ОТПРАВЛЯЕМСЯ НА МАРС") {
                MartianStory.innerHTML = document.getElementById("answer11").innerHTML;
                askQuestion(2);
            } else if (answers[1] === "ОСТАЕМСЯ ДОМА") {
                MartianStory.innerHTML = document.getElementById("answer12").innerHTML;
                theEnd();
            } else {
                MartianStory.innerHTML = document.getElementById("err1").innerHTML;
                askQuestion(1);
            }
            break;
        case 2:
            if (answers[2] === "РИСКНУТЬ") {
                MartianStory.innerHTML = document.getElementById("answer21").innerHTML;
                askQuestion(3);
            } else if (answers[2] === "ОСТАТЬСЯ ДОМА") {
                MartianStory.innerHTML = document.getElementById("answer22").innerHTML;
                askQuestion(3);
            } else {
                MartianStory.innerHTML = document.getElementById("err2").innerHTML;
                askQuestion(2);
            }
            break;
        case 3: 
        if (answers[3] === "ВЫБРОСИТЬ") {
            MartianStory.innerHTML = document.getElementById("answer31").innerHTML;
                theEnd();
        } else if (answers[3] === "ОСТАВИТЬ") {
            MartianStory.innerHTML = document.getElementById("answer32").innerHTML;
            theEnd();
        } else { 
            MartianStory.innerHTML = document.getElementById("err3").innerHTML;
            askQuestion(3);
        }
        break;

        default:
            MartianStory.innerHTML = "ИСТОРИЯ ОКОНЧЕНА!";
            break;
    }
}

/* theEnd() ends the story and hides the input field */
function theEnd() {
    MartianStory.innerHTML += "<p>The End.</p>";
    question.innerHTML = "";
    answer.style.display = "none";
}
