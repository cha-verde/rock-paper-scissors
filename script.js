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

function showResultOfOneRound(result){
        let message = "";
        switch (result) {
            case "draw":
                message = "Draw!";
                break;
            case "win":
                message = "You win!";
                break;
            case "lose":
                message = "You lose!"
                break;
        }
        console.log(message);
        console.log("Your score: " + humanScore);
        console.log("Computer score: " + computerScore);

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