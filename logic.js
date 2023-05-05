// initial scores
let computerScore = 0;
let playerScore = 0;

// getting computer choice
let computerChoice;
// getting player choice
let playerChoice;


// getting computer choice
computerChoice = generateComputerChoice();
// getting player choice
playerChoice = getPlayerChoice();
console.log(playRound(playerChoice, computerChoice));
if (playerScore === 5 || computerScore === 5)
    console.log(`Your score = ${playerScore}, Computer's score = ${computerScore}`);



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

    // let playerResponse = prompt("Enter your choice");

    // // normalizing the player's choice
    // let playerChoice = playerResponse.toLowerCase();
    // return playerChoice;
    const playerChoices = document.querySelectorAll("button");
    for (playerChoice of playerChoices) {
        playerChoice.addEventListener("click", (e) => {
            console.log(e.target.id);
        })
    }
}

/*-------------------------------------get and validate player choice-------------------------------------*/



/*-------------------------------------play 1 round of game-------------------------------------*/
function playRound(playerChoice, computerChoice) {
    let result = rules(playerChoice, computerChoice);

    if (result === "computerWins") {
        computerScore++;
        return `Lost!, Computer chose ${computerChoice}`;
    }
    else if (result === "tie") {
        return `Tie!, Computer chose ${computerChoice}`;
    }
    else if (result === "playerWins") {
        playerScore++;
        return `Won!, Computer chose ${computerChoice}`;
    }
    else {
        return "Invalid choice!!";
    }
}
/*-------------------------------------play 1 round of game-------------------------------------*/



/*-------------------------------------logic of game-------------------------------------*/
function rules(playerChoice, computerChoice) {

    let result = "computerWins";

    // winning conditions for computer
    if ((playerChoice === "rock" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "scissor") ||
        (playerChoice === "scissor" && computerChoice === "rock")) {
        return result;
    }

    // winning conditions for player
    else if ((playerChoice === "rock" && computerChoice === "scissor") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissor" && computerChoice === "paper")) {
        result = "playerWins";
        return result;

    }
    //tie
    else if (playerChoice === computerChoice) {
        result = "tie";
        return result;
    }
    // if player enters some random text
    else {
        result = "invalid";
        return result
    }

}
// /*-------------------------------------logic of game-------------------------------------*/