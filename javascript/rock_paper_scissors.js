const choices = ["Rock", "Paper", "Scissors"];

let humanChoice = 0,
  computerChoice = 0,
  humanScore = 0,
  computerScore = 0;

const getComputerChoice = () =>
  (computerChoice = choices[Math.floor(Math.random() * (3 - 0) + 0)]);

function getHumanChoice() {
  choice = prompt("Choose between: Rock, Paper or Scissors");

  return (humanChoice =
    choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase());
}

function playRound() {
  getHumanChoice();
  getComputerChoice();

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

function playGame() {
  for (let i = 0; i < 5; i++) {
    console.log(`GAME: ${i + 1}`)
    playRound();
  }

  return console.log(
    humanScore > computerScore
      ? `HUMAN wins! Final score: ${humanScore}-${computerScore}!`
      : humanScore < computerScore
      ? `MACHINES win! Final score: ${computerScore}-${humanScore}!`
      : `IT'S A DRAW! A tight game ending in ${humanScore}-${computerScore}`
  );
}

playGame();
