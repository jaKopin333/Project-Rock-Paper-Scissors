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

    //Images
    const playerImg = document.getElementById("playerImg");
    const computerImg = document.getElementById("computerImg");


//  Play a single round
    function playRound(humanchoice, computerchoice) {
        let resultMessage;

        if (humanScore >= 5 || computerScore >= 5){
            return;
        }

        if (humanchoice === computerchoice) {
            resultMessage = "It's a tie!";
        } else if (humanchoice === "rock" && computerchoice === "scissors") {
            humanScore++;
            resultMessage = "You win! Rock destorys scissors.";
        } else if (humanchoice === "paper" && computerchoice === "rock") {
            humanScore++;
            resultMessage = "You win! Paper covers rock.";
        } else if (humanchoice === "scissors" && computerchoice === "paper") {
            humanScore++;
            resultMessage = ("You win! Scissors cuts paper.")
        } else {
            computerScore++;
            resultMessage = ("You lose!");
        }
        
        document.getElementById("results").innerHTML = resultMessage; //this should display
        document.getElementById("score").innerHTML = 
        `You: ${humanScore} | Computer: ${computerScore}`; // Display Score

        animateChoice(playerImg, humanchoice);
        animateChoice(computerImg, computerchoice);


        // Check for game winner
        if (humanScore === 5) {
            document.getElementById("results").innerHTML = "Hell yeah you won!"
        } else if (computerScore === 5) {
            document.getElementById("results").innerHTML = "Dang you lose!"
        }
    }


    const resetbtn = document.getElementById("reset");
        resetbtn.addEventListener("click", resetGame);

        function resetGame(){
            humanScore = 0;
            computerScore = 0;

            document.getElementById("results").innerHTML = "";
            document.getElementById("score").innerHTML = "You: 0 | Computer: 0";
        }

     const rockbtn = document.getElementById("rock");
        rockbtn.addEventListener("click", () => {
            playRound("rock", getComputerChoice());
        });
        
        const paperbtn = document.getElementById("paper");
        paperbtn.addEventListener("click", () => {
            playRound("paper", getComputerChoice());
        });

        const scissorbtn = document.getElementById("scissors");
        scissorbtn.addEventListener("click", () => {
            playRound("scissors", getComputerChoice());
        });
        


// UI/UX stuff
function animateChoice(imgElement, finalChoice) {
    const imageMap = {
        rock: "./Pictures/rock.jpg",
        paper: "./Pictures/paper.jpg",
        scissors: "./Pictures/scissors.jpg",
    };

    const choices = ["rock", "paper", "scissors"];
    let i = 0;


const interval = setInterval(() => {
    imgElement.src = imageMap[choices[i]];
    i = (i + 1) % choices.length;
}, 400);

setTimeout(() => {
    clearInterval(interval);
    imgElement.src = imageMap[finalChoice];
}, 700);
}