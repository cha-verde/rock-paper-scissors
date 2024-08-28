let humanScore = 0;
let computerScore = 0;

const humanScoreElement = document.querySelector("#humanScore");
const computerScoreElement = document.querySelector("#computerScore");

humanScoreElement.textContent = humanScore;
computerScoreElement.textContent = computerScore;

const rockInvert = "rocks-invert.svg";
const paperInvert = "paper-invert.svg";
const scissorsInvert = "scissors-invert.svg";

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

const rockImage = document.querySelector(".rockImage");
const paperImage = document.querySelector(".paperImage");
const scissorsImage = document.querySelector(".scissorsImage");

const head = document.getElementsByTagName('head')[0];

const fakeBorder = document.querySelector(".fake-border");
let style = document.createElement('STYLE');

const resultElement = document.querySelector("#result");

const choiceButtons = document.querySelectorAll(".choiceButton");

const resetButton = document.querySelector(".resetButton");

const winnerElement = document.querySelector("#winner");

rockButton.addEventListener('mouseover', () => {
    rockButton.style.backgroundColor = 'black';
    rockImage.src = 'rocks-invert.svg';
});

rockButton.addEventListener('mouseout', () => {
    rockButton.style.backgroundColor = 'white';
    rockImage.src = 'rocks.svg';
});

paperButton.addEventListener('mouseover', () => {
    paperButton.style.backgroundColor = 'black';
    paperImage.src = 'paper-invert.svg';
});

paperButton.addEventListener('mouseout', () => {
    paperButton.style.backgroundColor = 'white';
    paperImage.src = 'paper.svg';
});

scissorsButton.addEventListener('mouseover', () => {
    scissorsButton.style.backgroundColor = 'black';
    scissorsImage.src = 'scissors-invert.svg';
});

scissorsButton.addEventListener('mouseout', () => {
    scissorsButton.style.backgroundColor = 'white';
    scissorsImage.src = 'scissors.svg';
});



function getComputerChoice() {
    let randomValue = Math.floor(Math.random() * 3) + 1;
    switch (randomValue) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors"
    }
}


function playRound(humanChoice, computerChoice) {
    console.log("test");
    if (humanChoice == computerChoice) {
        showResultOfOneRound("draw")
        return;
    }
    else if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            computerScore++;
            showResultOfOneRound("lose");
        }
        else if (computerChoice == "scissors") {
            humanScore++;
            showResultOfOneRound("win");
        }

    }
    else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            humanScore++;
            showResultOfOneRound("win");

        }
        else if (computerChoice == "scissors") {
            computerScore++;
            showResultOfOneRound("lose");
        }

    }
    else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            computerScore++;
            showResultOfOneRound("lose");
        }
        else if (computerChoice == "paper") {
            humanScore++;
            showResultOfOneRound("win");
        }

    }

}

function showResultOfOneRound(result) {

    humanScoreElement.textContent = humanScore;
    computerScoreElement.textContent = computerScore;

    resultElement.textContent = result;

    if (result == "lose") {
        let loseKeyframes =
            `@keyframes lose {
    0%   {background-color: red;}
    50%  {background-color: coral;}
    100% {background-color: red;}
  }`
        style.innerHTML = loseKeyframes;
        head.appendChild(style);

        fakeBorder.style.animationName = 'lose';
    }
    else if (result == "win"){
            let winKeyframes =
                `@keyframes win {
        0%   {background-color: green;}
        50%  {background-color: lightgreen;}
        100% {background-color: green;}
      }`
            style.innerHTML = winKeyframes;
            head.appendChild(style);
    
            fakeBorder.style.animationName = 'win'; 
    }

    else if (result == "draw"){
        fakeBorder.style.animationName = 'example'; 
}



    if (humanScore == 5 || computerScore == 5) {
        choiceButtons.forEach((button) => {
            button.disabled = true;
        })
        resetButton.style.display = "block";
    }

    if (humanScore == 5) {
        winnerElement.textContent = "You win!"
    }
    else if (computerScore == 5) {
        winnerElement.textContent = "You lose!"
    }

}


choiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id, getComputerChoice());
    });
})

resetButton.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    choiceButtons.forEach((button) => {
        button.disabled = false;
    });
    fakeBorder.style.animationName = ''; 
    humanScoreElement.textContent = humanScore;
    computerScoreElement.textContent = computerScore;
    winnerElement.textContent = '';
    resultElement.textContent = '';
    resetButton.style.display = 'none';
})

document.title = "Rock, Paper, Scissors";