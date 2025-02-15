function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    if (choice == 2){
        return "scissors";
    }else if (choice == 1){
        return "paper";
    }else if (choice == 0){
        return "rock";
    }else{
        return "It shouldn't return this";
    }
}

function getHumanChoice(){
    let userInput = prompt("Choose! Rock, paper or scissors?");
    userInput = String(userInput).toLowerCase();
    if(userInput == "scissors"){
        return "scissors";
    }else if(userInput == "paper"){
        return "paper";
    }else if(userInput == "rock"){
        return "rock";
    }else{
        console.log("Invalid input :c");
        return getHumanChoice();
    }
}

function playRound(humanChoice,computerChoice){
    if(humanChoice == "scissors"){
        if(computerChoice == "paper"){
            playerScore++;
            return console.log("You win! Scissors beats paper! :D");
        }else if(computerChoice == "rock"){
            computerScore++;
            return console.log("You lose! Rock beats scissors! D:");
        }else{
            return console.log("It's a draw!")
        }
    }else if(humanChoice == "paper"){
        if(computerChoice == "rock"){
            playerScore++;
            return console.log("You win! Paper beats rock! :D");
        }else if(computerChoice == "scissors"){
            computerScore++;
            return console.log("You lose! Scissors beats paper! D:");
        }else{
            return console.log("It's a draw!")
        }
    }else if(humanChoice == "rock"){
        if(computerChoice == "scissors"){
            playerScore++;
            return console.log("You win! Rock beats scissors! :D");
        }else if(computerChoice == "paper"){
            computerScore++;
            return console.log("You lose! Paper beats rock! D:");
        }else{
            return console.log("It's a draw!")
        }
    }else{
        return console.log("Erm... What the scallop...");
    }
}

let playerScore = 0;
let computerScore = 0;

const scoreboard = document.querySelector("#scoreboard");
const roundResults = document.querySelector("#roundResults");
const playerChoices = document.querySelector("#playerChoices");

const score = document.createElement("div");
score.classList.add("score");
score.textContent = "Player Wins: " + playerScore + " --- Computer Wins: " + computerScore;
scoreboard.appendChild(score);

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id,getComputerChoice())
    });
});