let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
    let choice = window.prompt("Choose rock, paper or scissors")
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    
    if (humanChoice == computerChoice) {
        console.log("Draw!");
        console.log("Your score: " + humanScore);
        console.log("Computer score: " + computerScore);
        return;
    }
    else if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            console.log("You lose!");
            computerScore++;
            console.log("Your score: " +humanScore);
            console.log("Computer score: " +computerScore);            
        }
        else if (computerChoice == "scissors") {
            console.log("You win!");
            humanScore++;
            console.log("Your score: " +humanScore);
            console.log("Computer score: " +computerScore);
        }

    }
    else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            console.log("You win!");
            humanScore++;
            console.log("Your score: " +humanScore);
            console.log("Computer score: " +computerScore);
        }
        else if (computerChoice == "scissors") {
            console.log("You lose!");
            computerScore++;
            console.log("Your score: " +humanScore);
            console.log("Computer score: " +computerScore);
        }

    }
    else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            console.log("You lose!");
            computerScore++;
            console.log("Your score: " +humanScore);
            console.log("Computer score: " +computerScore);
        }
        else if (computerChoice == "paper") {
            console.log("You win!");
            humanScore++;
            console.log("Your score: " +humanScore);
            console.log("Computer score: " +computerScore);
        }

    }

}

function playGame() {

    for (let i = 0; i < 5; i++) {

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        if(i == 4){
            if(humanScore > computerScore){
                console.log("Congratulations, you win the game!");
            }
            else if(humanScore < computerScore){
                console.log("You lose the game!");
            }
            else{
                console.log("The results are draw!");
            }
            
        }
    }
}

playGame();