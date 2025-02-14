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

//console.log(getHumanChoice(prompt("Choose! Rock, paper or scissors?")));
// let playerScore = 0;
// let computerScore = 0;


// function playRound(humanChoice,computerChoice){
//     if(humanChoice == "scissors"){
//         if(computerChoice == "paper"){
//             playerScore++;
//             return console.log("You win! Scissors beats paper! :D");
//         }else if(computerChoice == "rock"){
//             computerScore++;
//             return console.log("You lose! Rock beats scissors! D:");
//         }else{
//             return console.log("It's a draw!")
//         }
//     }else if(humanChoice == "paper"){
//         if(computerChoice == "rock"){
//             playerScore++;
//             return console.log("You win! Paper beats rock! :D");
//         }else if(computerChoice == "scissors"){
//             computerScore++;
//             return console.log("You lose! Scissors beats paper! D:");
//         }else{
//             return console.log("It's a draw!")
//         }
//     }else if(humanChoice == "rock"){
//         if(computerChoice == "scissors"){
//             playerScore++;
//             return console.log("You win! Rock beats scissors! :D");
//         }else if(computerChoice == "paper"){
//             computerScore++;
//             return console.log("You lose! Paper beats rock! D:");
//         }else{
//             return console.log("It's a draw!")
//         }
//     }else{
//         return console.log("Erm... What the scallop...");
//     }
// }

// console.log(playRound(getHumanChoice(),getComputerChoice()));
// console.log("Current scores\n" + "Player: " + playerScore + "  |  " + "Computer: " + computerScore);

function playGame(){
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

    for(let i = 0; i < 5; i++){
        console.log("Round: " + (i + 1));
        playRound(getHumanChoice(),getComputerChoice());
        console.log("Current scores\n" + "Player: " + playerScore + "  |  " + "Computer: " + computerScore);
    }

    if(playerScore > computerScore){
        console.log("You did it you win! :DDD");
    }else if(computerScore > playerScore){
        console.log("Oh no! You lost! D:");
    }else{
        console.log("Oh dear... It's a draw! :o");
    }
}

playGame();