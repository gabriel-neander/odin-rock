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
    let matchCount = 0; // Variável para contar as partidas
    getPlayerChoice(function(choice) {
        // Defining results after playerChoice is set
        playerChoice = choice;
        pcResult = getComputerChoice();

        // Playing game
        let message = playGame(playerChoice, pcResult);

        // Update results
        const resultElement = document.querySelector('#result');
        
        const boldText = document.createElement('strong');
        boldText.textContent = "👤: " + playerChoice + " vs " + " 💻: " + pcResult + " ➞ ";
        
        resultElement.innerHTML = '';
        resultElement.appendChild(boldText);
        resultElement.appendChild(document.createTextNode(message));
        
        matchCount++; // Incrementar o contador de partidas

        // Check for the end of five games
        if (matchCount === 5) {
            setTimeout(() => {
                if (playerCount > pcCount) {
                    alert('You win! Congrats!');
                    location.reload();
                } else {
                    alert('You lose, try again!');
                    location.reload();
                }
            }, 300); // Atraso de 1 segundo (1000 milissegundos)
        }
    });
});


let playerCount = 0,
    pcCount = 0;

function playGame(playerChoice, pcResult) {
    let message = "";

    if (playerChoice === pcResult) {
        message = 'it is a draw!';
    } else if ((playerChoice === 'Rock' && pcResult === 'Scissors') ||
               (playerChoice === 'Paper' && pcResult === 'Rock') ||
               (playerChoice === 'Scissors' && pcResult === 'Paper')) {
        message = 'You win!';
        playerCount += 1;
        pcCount -= 1;
    } else {
        message = 'You lose!';
        playerCount -= 1;
        pcCount += 1;
    }

    console.log(playerCount + " " + pcCount);
    return message;
}

