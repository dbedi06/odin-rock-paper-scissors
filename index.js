let humanScore = 0;
let computerScore = 0;

// Get the computer's choice using Math.random
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Called when the player clicks a button
// Plays the round using the player's and computer's choices
// Updates the score and announces the results of the round
function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  let announcement = document.getElementById("announcement");
  if (humanChoice === computerChoice) {
    announcement.innerText = `It's a tie! Both chose ${humanChoice}.`;
  } else if (
    (humanChoice === 'Rock' && computerChoice === 'Scissors') ||
    (humanChoice === 'Paper' && computerChoice === 'Rock') ||
    (humanChoice === 'Scissors' && computerChoice === 'Paper')
  ) {
    announcement.innerText = `You win! ${humanChoice} beats ${computerChoice}.`;
    humanScore++;
    document.getElementById("player").innerText = `Player Score: ${humanScore}`;
    document.getElementById("computer").innerText = `Computer Score: ${computerScore}`;
    checkWinner();
  } else {
    announcement.innerText = `You lose! ${computerChoice} beats ${humanChoice}.`;
    computerScore++;
    document.getElementById("player").innerText = `Player Score: ${humanScore}`;
    document.getElementById("computer").innerText = `Computer Score: ${computerScore}`;
    checkWinner();
  }
}

// Checks for the winner, called whenever the score is updated
// Updates the announcement whenever a winner is found
function checkWinner() {
  const rockBtn = document.getElementById("rock");
  const paperBtn = document.getElementById("paper");
  const scissorsBtn = document.getElementById("scissors");
  const announcement = document.getElementById("announcement");
  if (computerScore == 5 || humanScore == 5) {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;

    if (humanScore > computerScore) {
      announcement.innerText += " Game over. You win!";
    } else {
      announcement.innerText += " Game over. You lose!";
    }
  }
}