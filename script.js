let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let randomValue = Math.floor(Math.random() * 3) + 1;
    switch(randomValue){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissor"
    }
}

function getHumanChoice(){
    let choice = window.prompt("Choose rock, paper or scissor")
    return choice;
}


