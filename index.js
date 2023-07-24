const choice = ["Rock", "Paper", "Scissors"];
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;


let playerScoreEl = document.querySelector(".player-score");
let compScoreEl = document.querySelector(".computer-score");
const result = document.querySelector(".results");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
  button.addEventListener("click", event => {
    event.preventDefault();
    playerSelection = button.textContent;
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection)
  });
})



const getComputerChoice = () => {
  let randomNum = Math.floor(Math.random() * 3);
  return choice[randomNum];
}


const playRound = (playerSelection, computerSelection) => {

  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  console.log(computerSelection, playerSelection);

  if(
    (playerSelection == "rock" && computerSelection == "paper") || 
    (playerSelection == "scissors" && computerSelection == "rock") || 
    (playerSelection == "paper" && computerSelection == "scissors")) {
    computerScore++;
    console.log("comp", computerScore)
    compScoreEl.innerHTML = `<p>Computer: ${computerScore}</p>`;
    if (computerScore == 5) {
      return result.textContent = `You Lose! Computer is the winner`;
    }
  } else if(playerSelection == computerSelection) {
    console.log("Tie! No winner");
  } else {
    playerScore++;
    console.log("player", playerScore)
    playerScoreEl.innerHTML = `<p>Player: ${playerScore}</p>`;
    if (playerScore == 5) {
      computerScore = 0;
      playerScore = 0;
      return result.textContent = `You Win! Let's goo`;
    }
  }
}

