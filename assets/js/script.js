/**
 * create variables for elements from the DOM
*/

const playerScore = document.getElementById('your-score');
const computerScore = document.getElementById('computer-score');
const resultMessage = document.getElementById('result-message');
const rockChoice = document.getElementById('rock');
const paperChoice = document.getElementById('paper');
const scissorsChoice = document.getElementById('scissors');
let thePlayerScore = 0;
let theComputerScore = 0;

/**
 * create a function with event listener to listen for click of all buttons
 */

function game() {
     rockChoice.addEventListener('click', function(){
        startGame('rock');
    });
    
    paperChoice.addEventListener('click', function(){
        startGame('paper');
    });
    
    scissorsChoice.addEventListener('click', function(){
        startGame('scissors');
    });
    }
    
    game();
    
/***
 * player choice function choice between rock,paper,scissors.
 */
function startGame(playerChoice) {
    const computersChoice = theComputersChoice();
    switch (playerChoice + computersChoice) {
        case 'rockscissors':
        case 'scissorspaper':
        case 'paperrock':
            win();
            break;
            case 'scissorsrock':
            case 'paperscissors':
            case 'rockpaper':
                lose();
                break; 
                case 'rockrock':
                case 'paperpaper':
                case 'scissorsscissors':
                draw();
                break; 
    }
    }

    startGame();

 /**
 * computer choice function, random number between 1 and 3
*/

function theComputersChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}
 /**
  * functions for win loose and draw and screen messages
  */

 function win() {
    thePlayerScore++;
    playerScore.innerHTML = thePlayerScore;
    theComputerScore.innerHTML = computerScore;
    resultMessage.innerHTML = "You won this round!";
 }

 function lose() {
 theComputerScore++;
 computerScore.innerHTML = theComputerScore;
 thePlayerScore.innerHTML = playerScore;
 resultMessage.innerHTML = "Oh no, the computer won this round!";
 }

 function draw() {
    resultMessage.innerHTML = "It's a draw!";
 }