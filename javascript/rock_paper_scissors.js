// create an array to represent the computer choices
const choices = ["Rock", "Paper", "Scissors"];

let humanChoice = "",
  computerChoice = "",
  humanScore = 0,
  computerScore = 0;

// create a function to choose for the computer
const getComputerChoice = () =>
  (computerChoice = choices[Math.floor(Math.random() * 3)]);

// get the human choice
function getHumanChoice() {
  // ask the human what he would choose
  let choice = prompt("Choose between: Rock, Paper or Scissors");
  if (!choice) {
    console.log(`Humans gave up, Machines win`);
    throw new Error("Game Forfeited");
  }

  // turn the human choice into case sensitive
  return (humanChoice =
    choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase());
}

// play a round of Rock, Paper, Scissors
function playRound() {
  getHumanChoice();
  getComputerChoice();

  // decide who would win
  switch (true) {
    case humanChoice === computerChoice:
      console.log(
        `Wow, human choose ${humanChoice} and machines choose ${computerChoice} thats a draw`
      );
      console.log(
        `The score is ${humanScore} for Humans and ${computerScore} for the Machines!`
      );
      break;
    case (humanChoice == "Rock" && computerChoice == "Scissors") ||
      (humanChoice == "Paper" && computerChoice == "Rock") ||
      (humanChoice == "Scissors" && computerChoice == "Paper"):
      console.log(`Congrats, you win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
      console.log(
        `The score is ${humanScore} for Humans and ${computerScore} for the Machines!`
      );
      break;
    default:
      console.log(`Too bad, you lost! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
      console.log(
        `The score is ${humanScore} for Humans and ${computerScore} for the Machines!`
      );
      break;
  }
}

// create a function to repeat the game for five rounds.
function playGame() {
  for (let i = 0; i < 5; i++) {
    console.log(`GAME: ${i + 1}`);
    playRound();
  }

  // declare the winner!
  return console.log(
    humanScore > computerScore
      ? `HUMAN wins! Final score: ${humanScore}-${computerScore}!`
      : humanScore < computerScore
      ? `MACHINES win! Final score: ${computerScore}-${humanScore}!`
      : `IT'S A DRAW! A tight game ending in ${humanScore}-${computerScore}`
  );
}

// play the game
playGame();
