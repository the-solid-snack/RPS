// DO NOT FORGET Remove console.log so player can't cheat by peeking what's in cpu

// Variables declarations
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
let hmn;
const commentary = document.querySelector(".commentary");
let hmnScore = 0;
let cpuScore = 0;
let roundsPlayed = 10;

// Determines computer's play
function cpuChoice() {
  const move = Math.random(); 
  if (move < .34) {
  return "r";

  } else if (move < .67) {
    return "p";

  } else {
    return "s";
  }
}

// function called when draw
function draw(hmn) {
  roundsPlayed --;
  console.log("roundsPlayed =" + roundsPlayed);
  if (hmn === "r") {
    commentary.innerHTML = "Draw ! You both chose Rock";
  } else if (hmn === "p") {
    commentary.innerHTML = "Draw ! You both chose Paper";
  } else {
    commentary.innerHTML = "Draw ! You both chose Scissors";
  }
  console.log("draw, you both chose " + hmn);
  
  if (roundsPlayed === 0 && hmnScore > cpuScore) {
    finalWin();
  } else if (roundsPlayed === 0  && hmnScore < cpuScore) {
    finalLose();
  }
}

// function called when human wins
function win(hmn,cpu) {
  roundsPlayed --;
  console.log("roundsPlayed =" + roundsPlayed);
  hmnScore ++;
  if (hmn === "r") {
    commentary.innerHTML = "Win ! Rock beats Scissors";
  } else if (hmn === "p") {
    commentary.innerHTML = "Win ! Paper beats Rock";
  } else {
    commentary.innerHTML = "Win ! Scissors beats Paper";
  }
  document.getElementById("hmnScore").innerHTML = hmnScore; // update le score
  console.log("win, " + hmn + " wins over " + cpu);

  if (roundsPlayed === 0 && hmnScore > cpuScore) {
    finalWin();
  } else if (roundsPlayed === 0  && hmnScore < cpuScore) {
    finalLose();
  }
}

// function called when human loses
function lose(hmn, cpu) {
  roundsPlayed --;
  console.log("roundsPlayed =" + roundsPlayed);
  cpuScore ++;
  if (hmn === "r") {
    commentary.innerHTML = "Lose ! Rock gets wrapped by Paper";
  } else if (hmn === "p") {
    commentary.innerHTML = "Lose ! Paper gets cut by Scissors";
  } else {
    commentary.innerHTML = "Lose ! Scissors get crushed by Rock";
  }
  document.getElementById("cpuScore").innerHTML = cpuScore;
  console.log("lose, " + hmn + " is defeated by " + cpu);

  if (roundsPlayed === 0 && hmnScore > cpuScore) {
    finalWin();
  } else if (roundsPlayed === 0  && hmnScore < cpuScore) {
    finalLose();
  }
}

// Determines the result, depending on what the player clicks
function game(hmn) {
  const cpu = cpuChoice();
  const result = hmn+cpu;

  if (result == "rr" || result == "pp" || result == "ss") {
    console.log(result);
    draw(hmn,cpu);
  
  } else if (result == "rs" || result == "pr" || result == "sp") {
    console.log(result);
    win(hmn,cpu);

  } else {
    console.log(result);
    lose(hmn,cpu);
    }
  
}

// main function
function main() {
  rock_div.addEventListener('click', function () {
    game("r");
  })
  paper_div.addEventListener('click', function () {
    game("p");
  })
  scissors_div.addEventListener('click', function () {
    game("s");
  })
}

function finalWin() {
    console.log("YEAH");
}

function finalLose() {
  console.log("NAH");
}

main();


