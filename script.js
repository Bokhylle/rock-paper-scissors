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
    return selection
}
function rockPaperScissorsSingleRound() {
    const playerSelection =  prompt("Make your pick! (rock paper scissors)").toLowerCase();
    const computerSelection = computerPlay().toLowerCase();
    const victoryMessage = "You win! " + playerSelection + " beats " + computerSelection + "!";
    const lossMessage = "You lose :( " + computerSelection + " beats " + playerSelection + "!";
    const drawMessage = "It's a draw! " + playerSelection + " and " + computerSelection + " are obviously the same!";
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
    return playerSelection + " is not included as an option in this game yet. Please submit a ticket and we might consider adding " + playerSelection + " as an option at a later date"
    // define victory conditions eg paper beats rock
    // print win or lose message
        // include value of selections for clarity
        // include draw eventuality
}

function game() {
    //create a loop that plays 5 single games
    // store wins in two variables, one for computer and one for player
    // compare the two variables and declare the largest winner and return results
        // add draw option
}