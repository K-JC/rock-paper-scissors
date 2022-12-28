/**
 * create variables for elements from the DOM
*/

const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const resultMessage = document.getElementById('result-message');
const rockChoice = document.getElementById('rock');
const paperChoice = document.getElementById('paper');
const scissorsChoice = document.getElementById('scissors');
/**
 * create a function with event listener to listen for click of all buttons
 */

function game() {
    rockChoice.addEventListener('click', function(){
        startGame('rock');
    })
    
    paperChoice.addEventListener('click', function(){
        startGame('paper');
    })
    
    scissorsChoice.addEventListener('click', function(){
        startGame('scissors');
    })
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
        console.log('You win yay!'); 
        break;
        case 'scissorsrock':
        case 'paperscissors':
        case 'rockpaper':
            console.log('oh no the computer wins this time!');
             break; 
            case 'rockrock':
            case 'paperpaper':
            case 'scissorsscissors':
                console.log('awwh man it is a draw!');
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
