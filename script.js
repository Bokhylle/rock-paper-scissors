console.log("hi")
function computerPlay() {
    let randomChoiceNo = Math.floor(Math.random()*3) + 1
    //create three outcomes rock paper and scissors
    if (randomChoiceNo === 1) {
       return "Rock" 
    } else if (randomChoiceNo === 2) {
        return "Paper" 
     } else 
        return "Scissors"
    //pick one by random and return the result
}
function playerSelection(selection) {
    choice = `${selection}`
    return choice
}
function rockPaperScissorsSingleRound(choice) {
    let playerSelection =  playerSelection(choice).toLowerCase();
    let computerSelection = computerPlay().toLowerCase();
    let victoryMessage = "You win! " + playerSelection + " beats " + computerSelection + "!";
    let lossMessage = "You lose :( " + computerSelection + " beats " + playerSelection + "!";
    let drawMessage = "It's a draw! " + playerSelection + " and " + computerSelection + " is obviously the same!";
    console.log("You chose: " + playerSelection);
    console.log("The computer picked: " + computerSelection);
    // define two choices, one for computer and one for player
    if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            return victoryMessage
        } else if (computerSelection == "rock") {
            return drawMessage
        } else if (computerSelection == "paper") {
            return lossMessage
        }

    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return victoryMessage
        } else if (computerSelection == "paper") {
            return drawMessage
        } else if (computerSelection == "scissors") {
            return lossMessage
        }

    } else if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            return victoryMessage
        } else if (computerSelection == "scissors") {
            return drawMessage
        } else if (computerSelection == "rock") {
            return lossMessage
        }

    }
    // define victory conditions eg paper beats rock
    // print win or lose message
        // include value of selections for clarity
        // include draw eventuality
}