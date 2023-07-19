const choice = ["Rock", "Paper", "Scissors"];
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;


const getComputerChoice = () => {
  let randomNum = Math.floor(Math.random() * 3);
  return choice[randomNum];
}


const playRound = (playerSelection, computerSelection) => {

  playerSelection = prompt("Pick your weapon of choice").toLowerCase();
  computerSelection = getComputerChoice().toLowerCase();

  console.log(computerSelection);

  if(
    (playerSelection == "rock" && computerSelection == "paper") || 
    (playerSelection == "scissors" && computerSelection == "rock") || 
    (playerSelection == "paper" && computerSelection == "scissors")) {
    computerScore++;
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else if(playerSelection == computerSelection) {
    return "Tie! No winner";
  } else {
    playerScore++;
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  }
}



const game = () => {

  for(let i = 0; i < 5; i++) {
    let result = playRound(playerSelection, computerSelection);
    console.log(result);
  }

  console.log(`playerScore: ${playerScore} - computerScore: ${computerScore}`)
  if(playerScore > computerScore) {
    return "I win!"
  } else {
    return "Computer wins!"
  }
}

console.log(game())