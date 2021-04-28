///////////////
// VARIABLES //
///////////////

let scoreBoard = document.getElementById("score-count");
let game = document.getElementById("game");
let snacksHTML = document.getElementsByClassName('snack');

let pos = 0;
let focus = 0;
let direction = 0;
let counter = 0;
let ntime = 200;
let score = 0;

const pacMen = [];
const snack = [];

const pacArray = [
  [
    "/project-refs/PacMenExercise/images/PacMan1.png", 
    "/project-refs/PacMenExercise/images/PacMan2.png"
  ],
  [
    "/project-refs/PacMenExercise/images/PacMan3.png", 
    "/project-refs/PacMenExercise/images/PacMan4.png"
  ]
];

scoreBoard.innerHTML = score;
///////////////
// FUNCTIONS //
///////////////

function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale
  };
};

//////////////////////
// PACMAN FUNCTIONS //
//////////////////////

// Make a PacMan
function makePac() {
  let velocity = setToRandom(10);
  let position = setToRandom(200);
  let newImg = document.createElement("img");
  newImg.style.position = "absolute";
  newImg.src = pacArray[0][0];
  newImg.width = 50;
  newImg.style.left = position.x + "px";
  newImg.style.top = position.y + "px";
  newImg.classList.add('pacman');
  game.appendChild(newImg);
  return {
    position,
    velocity,
    newImg,
  };
};

function checkCollisions(item) {
  //left and right border
  if (item.position.x + item.velocity.x + item.newImg.width > 900 ||
      item.position.x + item.velocity.x < 0){
        item.velocity.x = -item.velocity.x;
        direction = (direction + 1) % 2;
      }

  //top and bottom border
  if (item.position.y + item.velocity.y + item.newImg.height > 400 ||
      item.position.y + item.velocity.y < 0){
        item.velocity.y = -item.velocity.y
      }
};

// Moves PacMan
function update() {
  pacMen.forEach((item) => {
    checkCollisions(item);
    item.position.y += item.velocity.y;
    item.position.x += item.velocity.x;
    item.newImg.style.left = item.position.x + "px";
    item.newImg.style.top = item.position.y + "px";

    counter++;

    if(counter === 5) {
      focus = (focus + 1) % 2;
      item.newImg.src = pacArray[direction][focus];
      counter = 0;
    }
  })
  setTimeout(update, 50);
};

//////////////////////
// BUTTON FUNCTIONS //
//////////////////////

function startGame() {
  if(pacMen.length < 1){ //simplified to just one pacman
    pacMen.push(makePac()); // add PacMan
  }
  update();
  throwPellet();
};

function endGame() {
  location.reload(); // reloads browser window
}

function feedPacman() {
  for(let i = 0; i < snacksHTML.length; i++) {
    let snackLeft = snacksHTML[i].style.left.slice(0, -2);
    let snackTop = snacksHTML[i].style.top.slice(0, -2);

    // set collision parameters
    if (pacMen[0].position.x < snackLeft + 20 &&
      pacMen[0].position.x + 50 > snackLeft 
      && pacMen[0].position.y < snackTop + 20 &&
      pacMen[0].position.y + 50 > snackTop
      ) {
        console.log("YUM!");
        snacksHTML[i].remove(); // removes the snack from game
        score += 1; // adds 1 for each snack pellet eaten
        scoreBoard.innerHTML = score; // updates score board
    }
  }
}

/////////////////////
// SNACK FUNCTIONS //
/////////////////////

function addSnack() {
    let position = {
      x: Math.random() * 879,
      y: 0
    };

    let velocity = 10;

    let newSnack = document.createElement("div");
    newSnack.classList = "snack";
    newSnack.style.left = position.x + "px";
    newSnack.style.top = position.y + "px";
    game.appendChild(newSnack);
    return {
      position,
      velocity,
      newSnack
    };
}

// Moves snack pellets along the y axis
function drop() {
  
  snack.forEach((ball, index) => {
    if(ball.position.y === 380) {
      ball.newSnack.style.display = "none";
      // sets the bottom snack pellets' display to none so we can remove them
    } else {
      ball.position.y += ball.velocity;
      ball.newSnack.style.top = ball.position.y + "px";
    }

    ntime += 50;

  })
  setTimeout(drop, ntime);
}

// removes snack pellets by checking display
function checkDisplay() {
  for(let i = 0; i < snacksHTML.length; i++) {
    if(snacksHTML[i].style.display === "none") {
      snacksHTML[i].remove();
    }
  }
}

function throwPellet() {
  setInterval(() => {
    snack.push(addSnack()); // add snack pellet
    drop();
    checkDisplay(); // keeps array tidy
  }, 4000);
}