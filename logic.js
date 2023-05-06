// initial scores
let computerScore = 0;
let playerScore = 0;


const displayPlayerChoice = document.getElementById("player-selection");
const displayComputerChoice = document.getElementById("computer-selection");

const playerChoices = document.querySelectorAll("button");
for (playerSelection of playerChoices) {
    playerSelection.addEventListener("click", startGame);
}

function startGame(e) {
    addPlayerSelectionToUi(e);
    let playerChoice = `${e.target.id}`;
    let computerChoice = generateComputerChoice();
    addComputerSelectionToUi(computerChoice);
    playRound(playerChoice, computerChoice);
    console.log(playerScore, computerScore);
    if (playerScore === 5 || computerScore === 5) {
        for (playerSelection of playerChoices) {
            playerSelection.removeEventListener("click", startGame);
        }
    }
}

function addPlayerSelectionToUi(e) {
    playerChoiceToAdd = document.createElement("div");
    playerChoiceToAdd.style.cssText = "height: 300px; width:300px; font-size: 200px;";
    playerChoiceToAdd.textContent = e.target.textContent;
    playerChoiceToAdd.setAttribute("data-choice", `${e.target.id}`)
    playerChoiceToAdd.setAttribute("class", `${e.target.id}`)
    displayPlayerChoice.appendChild(playerChoiceToAdd);
    if (displayPlayerChoice.childElementCount > 1) {
        for (child of displayPlayerChoice.children) {
            displayPlayerChoice.removeChild(child);
        }
    }

}

function addComputerSelectionToUi(computerChoice) {
    computerChoiceToAdd = document.createElement("div");
    computerChoiceToAdd.style.cssText = "height: 300px; width:300px; font-size: 200px;";
    if (computerChoice === "rock") computerChoiceToAdd.textContent = "✊";
    if (computerChoice === "paper") computerChoiceToAdd.textContent = "🖐️";
    if (computerChoice === "scissor") computerChoiceToAdd.textContent = "✌️";
    computerChoiceToAdd.setAttribute("data-choice", computerChoice);
    computerChoiceToAdd.setAttribute("class", computerChoice);
    displayComputerChoice.appendChild(computerChoiceToAdd);
    if (displayComputerChoice.childElementCount > 1) {
        for (child of displayComputerChoice.children) {
            displayComputerChoice.removeChild(child);
        }
    }

}


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