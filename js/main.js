var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();

// defining the computer chice
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if(computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
} console.log("Computer: " + computerChoice);