// Random number to support computer choice */
function randomizer() {
    let randomic = Math.floor(Math.random() * 3);
    return randomic;
}
// Function to actually make a choice for computer */
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
let pcResult = getComputerChoice(),
plSelect = prompt('Choose your destiny (Rock/Paper/Scissors):')
plSelect = plSelect.charAt(0).toUpperCase() + plSelect.slice(1).toLowerCase();
    function playGame(playerSelection = plSelect, computerSelection = pcResult) {
        let message = "";
        if (playerSelection === computerSelection) {
            message = 'It is a draw!';
        } else if ((playerSelection === 'Rock' && computerSelection === 'Scissors') ||
                   (playerSelection === 'Paper' && computerSelection === 'Rock') ||
                   (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
            message = 'You win!';
        } else {
            message = 'You lose!';
        }
        return message;
    }
// Show results in console
    console.log("Your call: " + plSelect + " PC Call: " + pcResult + " | Result: " + playGame());