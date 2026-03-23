console.log("script.js connected");

let userAnswers = {};
let answerButtons = document.querySelectorAll(".answer-btn");

answerButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        let parent = button.closest(".question-block");
        let buttonsInBlock = parent.querySelectorAll(".answer-btn");
        buttonsInBlock.forEach(function(btn) {
            btn.classList.remove("selected");
        });
        button.classList.add("selected");

        let questionID = button.dataset.questionId;
        userAnswers[questionID] = {
            cat: parseInt(button.dataset.pointsCat),
            dog: parseInt(button.dataset.pointsDog),
            bird: parseInt(button.dataset.pointsBird),
            fish: parseInt(button.dataset.pointsFish)
        };
    });
});

function displayResults() {
    let totals = { cat: 0, dog: 0, bird: 0, fish: 0 };

    for (let key in userAnswers) {
        totals.cat += userAnswers[key].cat;
        totals.dog += userAnswers[key].dog;
        totals.bird += userAnswers[key].bird;
        totals.fish += userAnswers[key].fish;
    }

    let maxPoints = 0;
    let finalPet = "No answer yet";

    for (let pet in totals) {
        if (totals[pet] > maxPoints) {
            maxPoints = totals[pet];
            finalPet = pet;
        }
    }

    let resultContainer = document.getElementById("result-container");
    let resultText = document.getElementById("result-text");
    resultText.textContent = `You are a ${finalPet}!`;
    resultContainer.style.display = "block";
}

document.getElementById("show-result").addEventListener("click", displayResults);