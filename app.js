// Variables declarations
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const commentary = document.querySelector(".commentary");
let hmnScore = 0;
let cpuScore = 0;

let hmn;


const interface = document.querySelector(".interface");

const gagne = document.getElementById("boutonGagne");
const hmnOptions = document.querySelector(".hmnOptions");
const vs = document.querySelector(".vs");
const cpuOptions = document.querySelector(".cpuOptions");

boutonGagne.addEventListener("click", function () {

  console.log("j'ai entendu un click");
interface.removeChild(hmnOptions);
interface.removeChild(vs);
interface.removeChild(cpuOptions);

})

// Determines computer's action
function cpuChoice() {
  const move = Math.random(); 
  
  return move < 0.34 ? "rock"
         : move < 0.67 ? "paper"
         : "scissors";

}

// Looking to determine the player's action
for (let roundsPlayed = 10;roundsPlayed > 0; roundsPlayed--) {} 

rock_div.addEventListener('click', function () {game("rock");})
paper_div.addEventListener('click', function () {game("paper");})
scissors_div.addEventListener('click', function () {game("scissors");})


// Determines the result, depending on what the player clicks

function game(hmn) {
  const cpu = cpuChoice();
  const result = hmn+cpu;

  if (result == "rockrock" || result == "paperpaper" || result == "scissorsscissors") {
    console.log(result);
    draw(hmn,cpu);
  
  } else if (result == "rockscissors" || result == "paperrock" || result == "scissorspaper") {
    console.log(result);
    win(hmn,cpu);

  } else {
    console.log(result);
    lose(hmn,cpu);
    }
  }
  
  

// function called when draw
function draw(hmn) {
  if (hmn === "rock") {
    commentary.innerHTML = "Draw ! You both chose Rock";
  } else if (hmn === "paper") {
    commentary.innerHTML = "Draw ! You both chose Paper";
  } else {
    commentary.innerHTML = "Draw ! You both chose Scissors";
  }
  console.log("draw, you both chose " + hmn);
 
}

// function called when human wins
function win(hmn,cpu) {
  hmnScore ++;
  if (hmn === "rock") {
    commentary.innerHTML = "Win ! Rock beats Scissors";
  } else if (hmn === "paper") {
    commentary.innerHTML = "Win ! Paper beats Rock";
  } else {
    commentary.innerHTML = "Win ! Scissors beats Paper";
  }
  document.getElementById("hmnScore").innerHTML = hmnScore; // update le score
  console.log("win, " + hmn + " wins over " + cpu);
}

// function called when human loses
function lose(hmn, cpu) {
  cpuScore ++;
  if (hmn === "rock") {
    commentary.innerHTML = "Lose ! Rock gets wrapped by Paper";
  } else if (hmn === "paper") {
    commentary.innerHTML = "Lose ! Paper gets cut by Scissors";
  } else {
    commentary.innerHTML = "Lose ! Scissors get crushed by Rock";
  }
  document.getElementById("cpuScore").innerHTML = cpuScore;
  console.log("lose, " + hmn + " is defeated by " + cpu);
}



