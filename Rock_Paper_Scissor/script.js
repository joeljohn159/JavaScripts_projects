/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/
console.log("HELLO")
let totalScore = {personScore : 0}
// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
  RPS_comp = ["Rock","Paper","Scissors"];
  const getComputerChoice = Math.floor(Math.random()*3);
  return RPS_comp[getComputerChoice]; 
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {

  // return the result of score based on if you won, drew, or lost
  
  

  // All situations where human draws, set `score` to 0
  

  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here
  

  // Otherwise human loses (aka set score to -1)
  let score = 0;

  // return score
  if(playerChoice== "Rock" && computerChoice== "Paper"){
    score = -1;
    return score;
  }else if(playerChoice== "Rock" && computerChoice== "Scissors"){
    score = 1;
    return score;
  }else if(playerChoice== "Paper" && computerChoice== "Scissors"){
    score = -1;
    return score;
  }else if(playerChoice== "Paper" && computerChoice== "Rock"){
    score = 1;
    return 1;
  }else if(playerChoice== "Scissors" && computerChoice== "Paper"){
    score = 1;
    return score;
  }else if(playerChoice== "Scissors" && computerChoice== "Rock"){
    score = -1;
    return score;
  }else if(playerChoice== "Rock" && computerChoice== "Rock"){
    score = 0;
    return score;
  }else if(playerChoice== "Scissors" && computerChoice== "Scissors"){
    score = 0;
    return score;
  }else{
    score = 0;
    return score;
  }
  
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'

  const result = document.getElementById("result");
  const playerScore = document.getElementById("player-score");
  const hands = document.getElementById("hands");

  if(score == 1){   
    result.innerText = "You Win!";
  }else if(score == -1){
    result.innerText = "You lose!";
  }else{
    result.innerText = "DRAWWW";
  }
  playerScore.innerText = totalScore['personScore'];
  hands.innerText = `(ME) ${playerChoice} V/S (BOT) ${computerChoice}`
  // Don't forget to grab the div with the 'result' id!
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  
  const computerChoice = getComputerChoice();
  const score = getResult(playerChoice, computerChoice);
  totalScore['personScore'] += score;
  showResult(score,playerChoice,computerChoice)

}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  const rpsButtons =  document.querySelectorAll(".rpsButton");
  
 

  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *

  rpsButtons.forEach(rpsButton => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value)
  })

  const end = document.getElementsById("endGameButton")
  end.onclick = () => endGame()
      
   
  
  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument

 

  // Add a click listener to the end game button that runs the endGame() function on click
  
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  const result = document.getElementById("result");
  const playerScore = document.getElementById("player-score");
  const hands = document.getElementById("hands");

  totalScore[personScore] = ''
  result.innerText = ''
  playerScore.innerText = ''
  hands.innerText = ''

}

playGame()