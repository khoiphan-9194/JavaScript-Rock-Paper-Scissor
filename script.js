/*
The completed application should meet the following criteria:


As a user, I want to play Rock, Paper, Scissors against an automated opponent.


As a user, I can enter R, P, or S to signify my choice of rock, paper, or scissors.


As a user, I expect the computer to choose R, P, or S in return.


As a user, I want the option to play again whether I win or lose.


As a user, I want to see my total wins, ties, and losses after each round.



Specifications


Must use the alert(), confirm(), and prompt() methods to collect user input and display information to the user.


The computer's selection must be random to ensure a fair game.
*/

//start my code here:

var options = ["R", "P", "S"]; //create an array for options

//an array of object that hold results and how many time the results occured
let resultArr = [
  {
    result: "Won",
    timesCount: 0,
  },
  {
    result: "Tie",
    timesCount: 0,
  },
  {
    result: "Lost",
    timesCount: 0,
  },
];

// create a function
var startGame = function () {
  //use window object to prompt user input
  var userChoice = window.prompt("Enter R, P, or S:");
  // Convert to uppercase to make comparisons easier
  userChoice = userChoice.toUpperCase();

  // check for validation if user input the invalid value, the application will ask user re-input
  while (userChoice !== "R" && userChoice !== "P" && userChoice !== "S") {
    window.alert(userChoice + " invalid");
    userChoice = window.prompt("Please re-enter R or P or S");
    userChoice = userChoice.toUpperCase();
  }

  const randomIndex = Math.floor(Math.random() * options.length); // Get random index from array of options

  var computerChoice = options[randomIndex];
  window.alert(
    "User chose " + userChoice + "\nComputer chose " + computerChoice
  );

  playGame(computerChoice, userChoice);

  // Print stats with line breaks
  window.alert(
    "Stats:\nWins: " +
      resultArr[0].timesCount +
      "\nLosses: " +
      resultArr[2].timesCount +
      "\nTies: " +
      resultArr[1].timesCount
  );

  // Ask user to play again
  var playAgain = window.confirm("Play again?");

  // If user pressed OK, run the function again
  if (playAgain) {
    startGame();
  }
};

//this function will check who wins the game
function playGame(computerChoice, userChoice) {
  if (computerChoice === userChoice) {
    window.alert("It's a " + resultArr[1].result);
    resultArr[1].timesCount++;
  } else if (
    (userChoice === "R" && computerChoice === "S") ||
    (userChoice === "P" && computerChoice === "R") ||
    (userChoice === "S" && computerChoice === "P")
  ) {
    window.alert("User " + resultArr[0].result);
    resultArr[0].timesCount++;
  } else {
    window.alert("User " + resultArr[2].result);
    resultArr[2].timesCount++;
  }
}

startGame();
