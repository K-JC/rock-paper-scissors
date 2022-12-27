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
    