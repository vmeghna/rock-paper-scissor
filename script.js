//select html element in js//
//practice//
// console.log(document.querySelector(".score"));
// console.log(document.querySelectorAll(".score"));
// console.log(document.querySelector("#user-score"));
// console.log(document.querySelector("#computer-score"));
// console.log(document.getElementById("user-score"));

//revise//
//modify//
// userScoreEl.innerText = "10";
// userScoreEl.textContent("10");
//style//
// gameResultEl.style.width = "8rem";
// gameResultEl.style.margin = "0 auto";
// gameResultEl.style.backgroundColor = "#12cd33";
// gameResultEl.style.padding = "1rem";
// gameResultEl.style.textTransform = "uppercase";
// gameResultEl.style.color = "blue";
// console.log(gameResultEl.classList);
// gameResultEl.classList.add("won");
// userChoiceEl.classList.remove("score");
//start//
const userScoreEl = document.getElementById("user-score");
const compScoreEl = document.getElementById("comp-score");
const userChoiceEl = document.getElementById("user-choice");
const compChoiceEl = document.getElementById("comp-choice");
const gameResultEl = document.getElementById("game-result");
const resultContainer = document.querySelector(".result-container");
//global variable//
let result = " ";
let userScore = 0;
let compScore = 0;
//get user choice//

//generate computer choice//
function getComputerChoice() {
  const weapons = ["rock", "paper", "scissors"];
  const randomNumber = Math.trunc(Math.random() * weapons.length);
  return weapons[randomNumber];
}
//get result//

//get user choice//
function playGame(userChoice) {
  const compChoice = getComputerChoice();
  if (userChoice === compChoice) {
    result = "DRAW";
  } else if (
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "paper" &&
      compChoice === "rock" &&
      userChoice === "scissors" &&
      compChoice === "paper")
  ) {
    result = "WON";
  } else {
    result = "LOST";
  }
  resultContainer.style.display = "flex";
  userChoiceEl.innerText = userChoice;
  compChoiceEl.innerText = compChoice;
  gameResultEl.innerText = `GAME  ${result}`;
  if (result === "WON") {
    gameResultEl.className = "game-result won";
    userScore = userScore + 1;
    userScoreEl.innerText = userScore;
  } else if (result === "LOST") {
    gameResultEl.className = "game-result lost";
    compScore = compScore + 1;
    compScoreEl.innerText = compScore;
  } else if (result === "DRAW") {
    gameResultEl.className = "game-result draw";
  }
}
