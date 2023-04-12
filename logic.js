// initial scores
let computerScore = 0;
let playerScore = 0;
// getting computer choice
let computerChoice = generateComputerChoice();
// getting player choice
let playerChoice = getPlayerChoice();


console.log(playRound(playerChoice, computerChoice));
console.log(playerScore, computerScore);

/*-------------------------------------function to generate computer choice-------------------------------------*/
function generateComputerChoice() {

    // below line generates a random number between 1 and 3, but the number is not rounded off it is a float
    let nonRoundedOffcomputerChoice = Math.random() * 3 + 1;

    // below line rounds off the previously generated number, in other words converts float to int
    let roundedOffComputerChoice = Math.floor(nonRoundedOffcomputerChoice);

    // return roundedOffComputerChoice;
    if (roundedOffComputerChoice === 1)
        return "rock";
    else if (roundedOffComputerChoice === 2)
        return "paper";

    return "scissor";
}
/*-------------------------------------function to generate computer choice-------------------------------------*/



/*-------------------------------------get and validate player choice-------------------------------------*/
function getPlayerChoice() {
    let playerResponse = prompt("Please enter your choice");
    if (playerResponse != null)
        return playerResponse;

}
/*-------------------------------------get and validate player choice-------------------------------------*/



/*-------------------------------------play 1 round of game-------------------------------------*/
function playRound(playerChoice, computerChoice) {
    let playerLost = rules(playerChoice, computerChoice);

    if (playerLost === 1) {
        computerScore++;
        return `Lost!, Computer chose ${computerChoice}`;
    }
    else if (playerLost === 2) {
        return `Tie!, Computer chose ${computerChoice}`;
    }
    else if (playerLost === 0) {
        playerScore++;
        return `Won!, Computer chose ${computerChoice}`;
    }
}
/*-------------------------------------play 1 round of game-------------------------------------*/



/*-------------------------------------logic of game-------------------------------------*/
function rules(playerChoice, computerChoice) {

    let playerLost = 1;

    if (playerChoice === "rock" && computerChoice === "paper") {
        return playerLost;
    }
    else if (playerChoice === "paper" && computerChoice === "scissor") {
        return playerLost;
    }
    else if (playerChoice === "scissor" && computerChoice === "rock") {
        return playerLost;
    }
    else if (playerChoice === computerChoice) {
        playerLost = 2;
        return playerLost;
    }
    else if (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissor") {
        alert("Please enter a valid choice");
    }
    else {
        playerLost = 0;
        return playerLost
    }

}
/*-------------------------------------logic of game-------------------------------------*/