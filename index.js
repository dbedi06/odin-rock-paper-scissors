let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getHumanChoice() {
  let choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
  while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
    choice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
  }
  return choice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`It's a tie! Both chose ${humanChoice}.`);
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    humanScore++;
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    computerScore++;
  }
}

function playGame() {
  let roundNum = 1;
  while (roundNum <= 5) {
    console.log(`Round ${roundNum}: Start!`);
    console.log(`Current Score - You: ${humanScore}, Computer: ${computerScore}`)
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    roundNum++;
  }
  if (humanScore > computerScore) {
    console.log("Game over. You win!");
  } else if (humanScore < computerScore) {
    console.log("Game over. You lose!");
  } else {
    console.log("Game over. It's a tie!");
  }
  console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
}

playGame();