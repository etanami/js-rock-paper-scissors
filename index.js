
const getComputerChoice = () => {
  let randomNum = Math.floor(Math.random() * 3);
  
  if (randomNum === 0) {
    return "rock";
  } else if (randomNum === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}


const playRound = (player, computer) => {
  if(player == "rock" && computer == "scissors") {
    return "You Win! Rock beats Scissors";
  } else if(player == "rock" && computer == "paper") {
    return "You Lose! Paper beats Rock";
  } else {
    return "Draw! No winner";
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));