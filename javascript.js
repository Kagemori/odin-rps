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