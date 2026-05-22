const buttonsWrapper = document.querySelector(".button-wrapper");
const results = document.querySelector(".results");

//get the scores
const humanScoreboard = document.querySelector(".human-score");
const machinesScoreboard = document.querySelector(".machines-score");

// create an array to represent the computer choices
const choices = ["Rock", "Paper", "Scissors"];

let computerChoice = "",
  matchResult = "",
  humanScore = 0,
  computerScore = 0;

// create a function to choose for the computer
const getComputerChoice = () => choices[Math.floor(Math.random() * 3)];


function updateScoreboard() {
  humanScoreboard.textContent = humanScore;
  machinesScoreboard.textContent = computerScore;
}

// play a round of Rock, Paper, Scissors
function playRound(humanSelection) {
  computerChoice = getComputerChoice();

  // decide who would win
  switch (true) {
    case humanSelection === computerChoice:
      matchResult = `Wow, human choose ${humanSelection} and machines choose ${computerChoice} thats a draw`;
      results.textContent = matchResult;
      break;
    case (humanSelection === "Rock" && computerChoice === "Scissors") ||
      (humanSelection === "Paper" && computerChoice === "Rock") ||
      (humanSelection === "Scissors" && computerChoice === "Paper"):
      matchResult = `Congrats, you win! ${humanSelection} beats ${computerChoice}`;
      results.textContent = matchResult;
      humanScore++;
      updateScoreboard()
      break;
    default:
      matchResult = `Too bad, you lost! ${computerChoice} beats ${humanSelection}`;
      results.textContent = matchResult;
      computerScore++;
      updateScoreboard()
      break;
  }

  if (humanScore === 5) {
    results.textContent = `HUMAN wins! Final score: ${humanScore}-${computerScore}!`;
    handleGameEnd();
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  } else if (computerScore === 5) {
    results.textContent = `MACHINES win! Final score: ${computerScore}-${humanScore}!`;
    handleGameEnd();
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  }
}

function handleGameEnd() {
    const replay = document.createElement("button");
    replay.textContent = "Replay ↺";
    buttonsWrapper.appendChild(replay);

    replay.addEventListener("click", () => {
      humanScore = 0;
      computerScore = 0;
            
      humanScoreboard.textContent = 0;
      machinesScoreboard.textContent = 0;
      
      rockBtn.disabled = false;
      paperBtn.disabled = false;
      scissorsBtn.disabled = false;

      replay.remove();
    });
}

const rockBtn = document.querySelector(".rockBtn");
const paperBtn = document.querySelector(".paperBtn");
const scissorsBtn = document.querySelector(".scissorsBtn");

rockBtn.addEventListener("click", () => {
  playRound("Rock");
});

paperBtn.addEventListener("click", () => {
  playRound("Paper");
});

scissorsBtn.addEventListener("click", () => {
  playRound("Scissors");
});
