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
  let playerSelection;
  let computerSelection;
  let result;
  let playerOne = document.querySelector("#p1Score");
  let playerTwo = document.querySelector("#p2Score");
  let winner = document.querySelector("#winner");
  document.querySelectorAll("a").forEach((el) => {
    el.addEventListener("click", (e) => {
      playerSelection = e.target.parentElement.id;
      result = playRound(playerSelection, computerPlay());
      innerGame();
    });
  });
  let i = 0;
  let pScore = 0;
  let cScore = 0;

  function innerGame() {
    // while (pla < 5) {
    // const playerSelection = prompt("Please choose your weapon: ");
    // const computerSelection = computerPlay();
    // let result = playRound(playerSelection, computerSelection);

    if (result.player === 1) {
      pScore++;
      playerOne.innerText = pScore;
    }

    if (result.computer === 1) {
      cScore++;
      playerTwo.innerText = cScore;
    }

    if (pScore == 5) {
      winner.innerText = "Player One Wins!!";
      setTimeout(newGame, 1000);
    }

    if (cScore == 5) {
      winner.innerText = "Computer Wins!!";
      setTimeout(newGame, 1000);
    }
    console.log(`${result.result}
    Player Score: ${pScore}
    Computer Score: ${cScore}`);
    //   i++;
    // }
  }

  function newGame() {
    let newGameString;

    newGameString = prompt("Play Again?");
    if (newGameString == "y") {
      pScore = 0;
      cScore = 0;

      playerOne.innerText = 0;
      playerTwo.innerText = 0;
      winner.innerText = "";
    }
  }
}

game();

// console.log(playRound(playerSelection, computerSelection));
