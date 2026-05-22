const buttonsWrapper = document.querySelector(".button-wrapper");
const results = document.querySelector(".results");

//get the scores
const humanScoreboard = document.querySelector(".human-score");
const machinesScoreboard = document.querySelector(".machines-score");

// create an array to represent the computer choices
const choices = ["Rock", "Paper", "Scissors"];

let humanChoice = "",
  computerChoice = "",
  matchResult = "",
  humanScore = 0,
  computerScore = 0;

// create a function to choose for the computer
const getComputerChoice = () =>
  (computerChoice = choices[Math.floor(Math.random() * 3)]);

// play a round of Rock, Paper, Scissors
function playRound(humanChoice) {
  getComputerChoice();

  // decide who would win
  switch (true) {
    case humanChoice === computerChoice:
      matchResult = `Wow, human choose ${humanChoice} and machines choose ${computerChoice} thats a draw`;
      results.textContent = matchResult;
      humanScoreboard.textContent = humanScore;

      machinesScoreboard.textContent = computerScore;
      break;
    case (humanChoice == "Rock" && computerChoice == "Scissors") ||
      (humanChoice == "Paper" && computerChoice == "Rock") ||
      (humanChoice == "Scissors" && computerChoice == "Paper"):
      matchResult = `Congrats, you win! ${humanChoice} beats ${computerChoice}`;
      results.textContent = matchResult;
      humanScore++;
      humanScoreboard.textContent = humanScore;
      machinesScoreboard.textContent = computerScore;
      break;
    default:
      matchResult = `Too bad, you lost! ${computerChoice} beats ${humanChoice}`;
      results.textContent = matchResult;
      computerScore++;
      humanScoreboard.textContent = humanScore;

      machinesScoreboard.textContent = computerScore;
      break;
  }

  if (humanScore === 5) {
    results.textContent = `HUMAN wins! Final score: ${humanScore}-${computerScore}!`;
    resetScoreboard();
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  } else if (computerScore === 5) {
    results.textContent = `MACHINES win! Final score: ${computerScore}-${humanScore}!`;
    resetScoreboard();
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  }

  function resetScoreboard() {
    ((humanScore = 0), (computerScore = 0));

    const replay = document.createElement("button");
    replay.textContent = "Replay ↺";
    buttonsWrapper.appendChild(replay);

    replay.addEventListener("click", () => {
      ((humanScore = 0), (computerScore = 0));
            
      humanScoreboard.textContent = 0;

      machinesScoreboard.textContent = 0;
      
      rockBtn.disabled = false;
      paperBtn.disabled = false;
      scissorsBtn.disabled = false;

      replay.remove();
    });

    return;
  }
}

const rockBtn = document.querySelector(".rockBtn");
const paperBtn = document.querySelector(".paperBtn");
const scissorsBtn = document.querySelector(".scissorsBtn");

rockBtn.addEventListener("click", () => {
  humanChoice = "Rock";
  playRound(humanChoice);
});

paperBtn.addEventListener("click", () => {
  humanChoice = "Paper";
  playRound(humanChoice);
});

scissorsBtn.addEventListener("click", () => {
  humanChoice = "Scissors";
  playRound(humanChoice);
});
