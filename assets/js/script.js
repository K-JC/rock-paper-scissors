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
 * player choice function choice between rock,paper,scissors
 */
function startGame(playerChoice) {
    const computerResult = computersChoice();
    }

    startGame('rock');

 /**
 * computer choice function, random number between 1 and 3
*/

function computersChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}
