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

//console.log(getComputerChoice() + " and " + getComputerChoice() + " and " + getComputerChoice());

function getHumanChoice(userInput){
    userInput = String(userInput).toLowerCase();
    if(userInput == "scissors"){
        return "scissors";
    }else if(userInput == "paper"){
        return "paper";
    }else if(userInput == "rock"){
        return "rock";
    }else{
        return "Invalid input :c";
    }
}

//console.log(getHumanChoice(prompt("Choose! Rock, paper or scissors?")));
let playerScore = 0;
let computerScore = 0;


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

console.log(playRound(getHumanChoice(prompt("Choose! Rock, paper or scissors?")),getComputerChoice()));
console.log("Current scores\n" + "Player: " + playerScore + "  |  " + "Computer: " + computerScore);