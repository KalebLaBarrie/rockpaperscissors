function computerPlay() {
  let arr = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * 3);
  return arr[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  let resultText;
  let playerScore = 0;
  let computerScore = 0;

  if (playerSelection === "rock" && computerSelection === "paper") {
    resultText = "You Lose! Paper beats Rock";
    computerScore++;
  }

  if (playerSelection === "paper" && computerSelection === "rock") {
    resultText = "You Win! Paper beats Rock";
    playerScore++;
  }

  if (playerSelection === "paper" && computerSelection === "scissors") {
    resultText = "You Lose! Scissors beats Paper";
    computerScore++;
  }

  if (playerSelection === "scissors" && computerSelection === "paper") {
    resultText = "You Win! Scissors beats Paper";
    playerScore++;
  }

  if (playerSelection === "rock" && computerSelection === "scissors") {
    resultText = "You Win! Rock beats Scissors";
    playerScore++;
  }

  if (playerSelection === "scissors" && computerSelection === "rock") {
    resultText = "You Lose! Rock beats Scissors";
    computerScore++;
  }

  if (playerSelection === "paper" && computerSelection === "paper") {
    resultText = "Draw! Paper ties with Paper";
  }

  if (playerSelection === "rock" && computerSelection === "rock") {
    resultText = "Draw! Rock ties with Rock";
  }

  if (playerSelection === "scissors" && computerSelection === "scissors") {
    resultText = "Draw! Scissors ties with Scissors";
  }

  return {
    result: resultText,
    player: playerScore,
    computer: computerScore,
  };
}

function game() {
  let i = 0;
  let pScore = 0;
  let cScore = 0;
  while (i < 5) {
    const playerSelection = prompt("Please choose your weapon: ");
    const computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    if (result.player === 1) {
      pScore++;
    }

    if (result.computer === 1) {
      cScore++;
    }
    console.log(`${result.result}
    Player Score: ${pScore}
    Computer Score: ${cScore}`);
    i++;
  }
}

game();

// console.log(playRound(playerSelection, computerSelection));
