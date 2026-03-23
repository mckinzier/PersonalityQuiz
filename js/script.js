console.log("script.js connected");

let userAnswers = {};
let answerButtons = document.querySelectorAll(".answer-btn");
answerButtons.forEach(function(button) 
{
    button.addEventListener("click", function() 
    {
        let parent = button.closest(".question-block");
        let buttonInBlock = ProgressEvent.querySelectorAll(".answer-btn");
        buttonsInBlock.forEach(function(btn) 
        {
            btn.classList.remove("selected");
        });

        button.classList.add("selected");

        let questionID = button.dataset.questionId;
        let pet = button.dataset.pet;
        userAnswers[questionID] = pet;
    });
});

function displayResults() 
{
    let counts = {};
    for (let key in userAnswers) 
    {
        let pet = userAnswers[key];
        counts[pet] = counts[pet] ? counts[pet] + 1 : 1;
    }
    let finalPet = "No answer yet";
    let maxCount = 0;
    for (let pet in counts) 
    {
        if (counts[pet] > maxCount) 
        {
            maxCount = counts[pet];
            finalPet = pet;
        }
    }

    let resultContainer = document.getElementById("result-container");
    let resultText = document.getElementById("result-text");
    resultText.textContent = `You are a ${finalPet}!`;
    resultContainer.style.display = "block";
}

document.getElementById("show-result").addEventListener("click", displayResults);
  