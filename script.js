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
            alert(victoryMessage);
            console.log(victoryMessage);
            return "win"
        } else if (computerSelection == "rock") {
            alert(drawMessage);
            console.log(drawMessage);
            return "draw"
        } else if (computerSelection == "paper") {
            alert(lossMessage);
            console.log(lossMessage);
            return "loss"
        }

    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            alert(victoryMessage);
            console.log(victoryMessage);
            return "win"
        } else if (computerSelection == "paper") {
            alert(drawMessage);
            console.log(drawMessage);
            return "draw"
        } else if (computerSelection == "scissors") {
            alert(lossMessage);
            console.log(lossMessage);
            return "loss"
        }

    } else if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            alert(victoryMessage);
            console.log(victoryMessage);
            return "win"
        } else if (computerSelection == "scissors") {
            ;alert(drawMessage);
            console.log(drawMessage);
            return "draw"
        } else if (computerSelection == "rock") {
            alert(lossMessage);
            console.log(lossMessage);
            return "loss"
        }

    }
    alert(playerSelection + " is not included as an option in this game yet. Please submit a ticket and we might consider adding " + playerSelection + " as an option at a later date.. Unfortunately this will count as a loss as you did not understand the game. Please try again and enter rock paper or scissors this time ;)")
    return "loss" 
    // define victory conditions eg paper beats rock
    // print win or lose message
        // include value of selections for clarity
        // include draw eventuality
}

function game(n = 5) {
let finalPlayerWin;
let finalComputerWin;
let playerWin = 0;
let computerWin = 0;
    for (i = 1; i <= n; i++) {
        let roundResult = rockPaperScissorsSingleRound();
        if (roundResult == "loss") {
            computerWin++
            console.log(computerWin)
        } else if (roundResult == "win") {
            playerWin++
            console.log(playerWin)
        }
    finalPlayerWin = playerWin;    
    finalComputerWin = computerWin;
    }
    let winMessage = "Congratulations! You have won this " + n + " round battle " + finalPlayerWin + " to " + finalComputerWin + "! sick";
    let lossMessage = "I regret to inform you that you have lost this " + n + " round battle " + finalComputerWin + " to " + finalPlayerWin + ".. Better luck next time!";
    let drawMessage = "Wow, you and the computer drew at " + finalPlayerWin + "! What are the odds? -\\(o_O)/-";    
    if (playerWin > computerWin) {
        alert(winMessage)
        return "win"
    } else if (playerWin < computerWin) {
        alert(lossMessage)
        return "loss"
    }
    alert(drawMessage);
    return "draw"
    //create a loop that plays 5 single games
    // store wins in two variables, one for computer and one for player
    // compare the two variables and declare the largest winner and return results
        // add draw option
}