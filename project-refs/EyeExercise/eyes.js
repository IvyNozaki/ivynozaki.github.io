///////////////
// VARIABLES //
///////////////

var balls = document.getElementsByClassName("ball");

const leftLid = document.getElementById("left-lid");
const leftEye = document.getElementById("left-eye");

const rightLid = document.getElementById("right-lid");
const rightEye = document.getElementById("right-eye");

const mouth = document.getElementById("mouth");

let leftEyeClosed = false;
let rightEyeClosed = false;

///////////////////////////
// EYE MOVEMENT FUNCTION //
///////////////////////////

document.onmousemove = () => {
  var x = (event.clientX * 100) / window.innerWidth + "%";
  var y = (event.clientY * 100) / window.innerHeight + "%";

  for (let i = 0; i < 2; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].transform = "translate(-" + x + ",-" + y + ")";
  }
};

////////////////////////
// LEFT EYE FUNCTIONS //
////////////////////////

// onmouseover
function closeLeftLid() {
  leftEyeClosed = true;
  leftLid.classList.replace("lids", "left-lid-midway");
  leftEye.classList.replace("eye", "sore-eye");
  setTimeout(() => {
    leftLid.classList.replace("left-lid-midway", "left-lid-closed");
  }, 100);
  mouth.classList.replace("happy", "uncomfy");
}

// onmouseout
function openLeftEye() {
  setTimeout(() => {
    leftLid.classList.replace("left-lid-closed", "lids");
    leftEye.classList.replace("sore-eye", "eye");
    leftEyeClosed = false;
    checkBothEyes();
  }, 2500);
}

////////////////////////
// RIGHT EYE FUNCTION //
////////////////////////

// onmouseover
function closeRightLid() {
  rightEyeClosed = true;
  rightLid.classList.replace("lids", "right-lid-midway");
  rightEye.classList.replace("eye", "sore-eye");
  setTimeout(() => {
    rightLid.classList.replace("right-lid-midway", "right-lid-closed");
  }, 100);
  mouth.classList.replace("happy", "uncomfy");
}

// onmouseout
function openRightEye() {
  setTimeout(() => {
    rightLid.classList.replace("right-lid-closed", "lids");
    rightEye.classList.replace("sore-eye", "eye");
    rightEyeClosed = false;
    checkBothEyes();
  }, 2500);
}

// checks if eye/s are closed for mouth to change
function checkBothEyes() {
  if(leftEyeClosed === false && rightEyeClosed === false) {
    mouth.classList.replace("uncomfy", "happy");
  }
}