// Rock Paper Scissors Project

// Give computer choice


// Get human choice
// Ask user for rock, paper, scissors
// return the user's answer

// Declare Scores
      function getComputerChoice () {
        const items = ["rock","paper", "scissors"];
        const randomIndex = Math.floor(Math.random() * items.length);
        return items[randomIndex];
      }

    function getHumanChoice () {
        let human = prompt("Rock, Paper, or Scissors?");
        return human;
      }

    let humanScore = 0;
    let computerScore = 0;

//  Play a single round
    function playRound(humanchoice, computerchoice) {
        humanchoice = humanchoice.toLowerCase();

        if (humanchoice === computerchoice) {
            console.log("It's a Tie!");
        } else if (humanchoice === "rock" && computerchoice === "scissors") {
            humanScore++;
            console.log("You win! Rock destorys scissors.");
        } else if (humanchoice === "paper" && computerchoice === "rock") {
            humanScore++;
            console.log("You win! Paper covers rock.");
        } else if (humanchoice === "scissors" && computerchoice === "paper") {
            humanScore++;
            console.log("You win! Scissors cuts paper.")
        } else {
            computerScore++;
            console.log("You lose!");
        }
    } 
    
// playGame 5 rounds keep track of score and declare a winner at the end
function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }


// Print winner
console.log("Final Scores:");
console.log("Human:", humanScore);
console.log("Computer:", computerScore);

}

playGame();