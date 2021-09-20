console.log("hi")
let playerScoreCount = 0
let computerScoreCount = 0
let victoryMessage;
let drawMessage;
let lossMessage;
let playerSelection;
let computerSelection;

const html = document.querySelector('html');
const helpBtn = document.querySelector(".help");
const scissorsBtn = document.querySelector(".scissors");
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const playerScore = document.querySelector(".player");
const computerScore = document.querySelector(".computer");
const gameInfo = document.querySelector(".game-info");
const playerChoiceButtons = document.querySelectorAll(".button");
const animationBox = document.querySelector('.animation-container');
//Created elements
const infoBox = document.createElement('div');
const backgroundShadow = document.createElement('div');
const infoText = document.createElement('p')
const replayBtn = document.createElement('div');
const exitBtn = document.createElement('div');
// animation
const playerHand = document.createElement('img');
const computerHand = document.createElement('img');
const playerHandResult = document.createElement('img');
const computerHandResult = document.createElement('img');

playerScore.innerText = playerScoreCount;
computerScore.innerText = computerScoreCount;
function win() {
    ++playerScoreCount
    if (playerScoreCount > 2) {
       return gameEnd("win");
    }
    return playerScore.innerText = playerScoreCount;
}
function loss() {
    ++computerScoreCount
    if (computerScoreCount > 2) {
       return gameEnd("loss");
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
        return "Pistol"
    //pick one by random and return the result
}
function gameEnd(result) {
    if (result == 'win') {
        finalMessage = `<h1>You Win!</h1><br>Amazing, you just won ${playerScoreCount} to ${computerScoreCount}`
    }
    if (result == 'loss') {
        finalMessage = `<h1>You Lose :(</h1><br>Aww shucks, you just lost ${playerScoreCount} to ${computerScoreCount}`
    }
    backgroundShadow.classList.add('background-shadow');
    infoBox.classList.add('info-box');
    infoText.classList.add('info-text');
    infoText.innerHTML = finalMessage;
    replayBtn.classList.add('button');
    replayBtn.innerText = 'Play Again?'
    html.appendChild(infoBox);
    infoBox.appendChild(infoText);
    infoBox.appendChild(replayBtn)
    html.appendChild(backgroundShadow);
}
function helpBox() {
    backgroundShadow.classList.add('background-shadow');
    infoBox.classList.add('info-box');
    infoText.classList.add('info-text', 'help');
    infoText.innerHTML = '<h1>Welcome to Rock Pistol Paper</h1><br>Playing is simple! Just choose your move with the buttons on the bottom of the screen. Your result will display on the screen and you can monitor your score with the central counter.<br>First to 5 wins is the victor.. Good Luck!';
    exitBtn.classList.add('button', 'exit');
    exitBtn.innerText = 'click to return'
    html.appendChild(infoBox);
    infoBox.appendChild(infoText);
    infoBox.appendChild(exitBtn)
    html.appendChild(backgroundShadow);
}
function unClickTest() {
    playerChoiceButtons.forEach(buttonz => buttonz.removeEventListener('click', animationRound));
}
function restoreClickTest() {
    playerChoiceButtons.forEach(buttonz => buttonz.addEventListener('click', animationRound));
}
playerHand.addEventListener('animationend', () => {
    playHand();
    restoreClickTest();
    rockPaperScissorsSingleRoundMouseClick();
});
function gameAnimation() {
    if (animationBox.contains(playerHandResult)) {
        animationBox.removeChild(playerHandResult);
        animationBox.removeChild(computerHandResult);
    }
    playerHand.classList.add('playerhand', 'animation-hand')
    computerHand.classList.add('computerhand', 'animation-hand')
    playerHand.setAttribute('src', './img/noun_Hand_edit rock.png')
    computerHand.setAttribute('src', './img/noun_Hand_edit rock.png')
    animationBox.appendChild(playerHand);
    animationBox.appendChild(computerHand);
}
function animationRound() {
    playerSelection = this.getAttribute('id')
    computerSelection = computerPlay().toLowerCase();
    victoryMessage = "You win! " + playerSelection + " beats " + computerSelection + "!";
    lossMessage = "You lose :( " + computerSelection + " beats " + playerSelection + "!";
    drawMessage = "It's a draw! " + playerSelection + " and " + computerSelection + " are obviously the same!";
    if (playerSelection == 'pistol') {
        playerHandResult.setAttribute('src', './img/noun_Hand_pistol.png')
    }
    if (playerSelection == 'rock') {
        playerHandResult.setAttribute('src', './img/noun_Hand_edit rock.png')
    }
    if (playerSelection == 'paper') {
        playerHandResult.setAttribute('src', './img/noun_Hand_paper.png')
    }
    if (computerSelection == 'pistol') {
        computerHandResult.setAttribute('src', './img/noun_Hand_pistol.png')
    }
    if (computerSelection == 'rock') {
        computerHandResult.setAttribute('src', './img/noun_Hand_edit rock.png')
    }
    if (computerSelection == 'paper') {
        computerHandResult.setAttribute('src', './img/noun_Hand_paper.png')
    }
    gameAnimation();
    unClickTest();
}
function playHand() {
    animationBox.removeChild(playerHand);
    animationBox.removeChild(computerHand);
    playerHandResult.classList.add('playerhand')
    computerHandResult.classList.add('computerhand')
    animationBox.appendChild(playerHandResult)
    animationBox.appendChild(computerHandResult)
}
function resetGame() {
    playerScoreCount = 0;
    computerScoreCount = 0;
    playerScore.innerText = playerScoreCount;
    computerScore.innerText = computerScoreCount;
    infoBox.classList.remove('info-box');
    infoText.classList.remove('info-text');
    html.removeChild(backgroundShadow);
    html.removeChild(infoBox);
    infoBox.removeChild(replayBtn)
    gameInfo.innerText = 'Make your pick!'
}
function exitBox() {
    html.removeChild(backgroundShadow);
    html.removeChild(infoBox);
    infoBox.removeChild(exitBtn)
    infoBox.classList.remove('info-box');
    infoText.classList.remove('info-text', 'help');
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
        if (computerSelection == "pistol") {
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
        } else if (computerSelection == "pistol") {
            alert(lossMessage);
            console.log(lossMessage);
            return "loss"
        }

    } else if (playerSelection == "pistol") {
        if (computerSelection == "paper") {
            alert(victoryMessage);
            console.log(victoryMessage);
            return "win"
        } else if (computerSelection == "pistol") {
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
        if (playerSelection == "rock") {
            if (computerSelection == "pistol") {
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
            } else if (computerSelection == "pistol") {
                console.log(lossMessage);
                gameInfo.innerText = lossMessage;
                return loss();
            }
    
        } else if (playerSelection == "pistol") {
            if (computerSelection == "paper") {

                console.log(victoryMessage);
                gameInfo.innerText = victoryMessage;
                return win();
            } else if (computerSelection == "pistol") {

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
helpBtn.onclick = helpBox;
exitBtn.onclick = exitBox
replayBtn.onclick = resetGame;
paperBtn.onclick = clicker;
scissorsBtn.onclick = clicker;
rockBtn.onclick = clicker;
playerChoiceButtons.forEach(buttonz => buttonz.addEventListener('click', animationRound));
/*
playerChoiceButtons.forEach(button => button.addEventListener('click', function() {
    console.log(ape);
    
}));
scissorsBtn.onclick = function() {
    ape = this.getAttribute('id');
};
if (ape == "scissors"){ 
    alert("YAYYY");} */