// Setting vars
let pcResult;
let playerChoice;

// Random number to support computer choice
function randomizer() {
    let randomic = Math.floor(Math.random() * 3);
    return randomic;
}

// Function to actually make a choice for computer
function getComputerChoice() {
    let result;
    if (randomizer() === 0) {
        result = 'Rock';
    } else if (randomizer() === 1) {
        result = 'Paper';
    } else {
        result = 'Scissors';
    }
    return result;
}

// Function to get player's choice
function getPlayerChoice(callback) {
    const buttonRock = document.querySelector('#buttonRock');
    const buttonPaper = document.querySelector('#buttonPaper');
    const buttonScissors = document.querySelector('#buttonScissors');

    buttonRock.addEventListener('click', () => {
        callback('Rock');
    });
    
    buttonPaper.addEventListener('click', () => {
        callback('Paper');
    });

    buttonScissors.addEventListener('click', () => {
        callback('Scissors');
    });
}

document.addEventListener('DOMContentLoaded', function() {
    getPlayerChoice(function(choice) {
        // Defining results after playerChoice is set
        playerChoice = choice;
        pcResult = getComputerChoice();

        // Playing game
        let message = playGame(playerChoice, pcResult);
        console.log("PC plays: " + pcResult + " and you play: " + playerChoice + " so, the result is " + message);
    });
});

// Game scope
function playGame(playerChoice, pcResult) {
    let message = "";
    if (playerChoice === pcResult) {
        message = 'It is a draw!';
    } else if ((playerChoice === 'Rock' && pcResult === 'Scissors') ||
               (playerChoice === 'Paper' && pcResult === 'Rock') ||
               (playerChoice === 'Scissors' && pcResult === 'Paper')) {
        message = 'You win!';
    } else {
        message = 'You lose!';
    }
    return message;
}
