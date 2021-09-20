console.log("hi")
let playerScoreCount = 0
let computerScoreCount = 0
let victoryMessage;
let drawMessage;
let lossMessage;

const helpBtn = document.querySelector(".help");
const scissorsBtn = document.querySelector(".scissors");
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const playerScore = document.querySelector(".player");
const computerScore = document.querySelector(".computer");
const gameInfo = document.querySelector(".game-info");
const playerChoiceButtons = document.querySelectorAll(".button");

//Created elements
const infoBox = document.createElement('div');
const backgroundShadow = document.createElement('div');
const infoText = document.createElement('p')
// animation
const playerHand = document.createElement('img');
const computerHand = document.createElement('img');
const playerHandResult = document.createElement('img');
const computerHandResult = document.createElement('img');

playerScore.innerText = playerScoreCount;
computerScore.innerText = computerScoreCount;
function win() {
    ++playerScoreCount
    if (playerScoreCount > 4) {
       return winMessage()
    }
    return playerScore.innerText = playerScoreCount;
}
function loss() {
    ++computerScoreCount
    if (computerScoreCount > 4) {
       return lossMessage()
    }
    return computerScore.innerText = computerScoreCount;
}
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
}

function rockPaperScissorsSingleRoundMouseClick() {
        const playerSelection = this.getAttribute('id')
        const computerSelection = computerPlay().toLowerCase();
              victoryMessage = "You win! " + playerSelection + " beats " + computerSelection + "!";
              lossMessage = "You lose :( " + computerSelection + " beats " + playerSelection + "!";
              drawMessage = "It's a draw! " + playerSelection + " and " + computerSelection + " are obviously the same!";
        console.log("You chose: " + playerSelection);
        console.log("The computer picked: " + computerSelection);
        // define two choices, one for computer and one for player
        if (playerSelection == "rock") {
            if (computerSelection == "scissors") {
                console.log(victoryMessage);
                gameInfo.innerText = victoryMessage;
                return win();
            } else if (computerSelection == "rock") {
                console.log(drawMessage);
                gameInfo.innerText = drawMessage;
                return "draw"
            } else if (computerSelection == "paper") {
                console.log(lossMessage);
                gameInfo.innerText = lossMessage;
                return loss();
            }
    
        } else if (playerSelection == "paper") {
            if (computerSelection == "rock") {
                console.log(victoryMessage);
                gameInfo.innerText = victoryMessage;
                return win();
            } else if (computerSelection == "paper") {
                console.log(drawMessage);
                gameInfo.innerText = drawMessage;
                return "draw"
            } else if (computerSelection == "scissors") {
                console.log(lossMessage);
                gameInfo.innerText = lossMessage;
                return loss();
            }
    
        } else if (playerSelection == "scissors") {
            if (computerSelection == "paper") {

                console.log(victoryMessage);
                gameInfo.innerText = victoryMessage;
                return win();
            } else if (computerSelection == "scissors") {

                console.log(drawMessage);
                gameInfo.innerText = drawMessage;
                return "draw"
            } else if (computerSelection == "rock") {

                console.log(lossMessage);
                gameInfo.innerText = lossMessage;
                return loss();
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
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('clicked');
}
playerChoiceButtons.forEach(button => button.addEventListener('transitionend', removeTransition));
function clicker() {
    this.classList.add("clicked");
}

paperBtn.onclick = clicker;
scissorsBtn.onclick = clicker;
rockBtn.onclick = clicker;
playerChoiceButtons.forEach(button => button.addEventListener('click', rockPaperScissorsSingleRoundMouseClick));
/*
playerChoiceButtons.forEach(button => button.addEventListener('click', function() {
    console.log(ape);
    
}));
scissorsBtn.onclick = function() {
    ape = this.getAttribute('id');
};
if (ape == "scissors"){ 
    alert("YAYYY");} */