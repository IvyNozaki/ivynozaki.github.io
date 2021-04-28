//////////////////////
// AVATAR FUNCTIONS //
//////////////////////


function speakNow() {
    let avatarGirl = document.getElementById('avatar-girl');
    avatarGirl.style.display = 'block';
}

function justSmile() {
    let avatarGirl = document.getElementById('avatar-girl');
    avatarGirl.style.display = 'none';
}

////////////////////////
// NAV BAR FUNCTIONS //
////////////////////////
var navCloud = document.getElementById('contact-section');
var contactIcons = document.getElementsByClassName('contact-info')

function showCloud () {
  navCloud.style.width = '200px';
  navCloud.style.height = '500px';
  navCloud.style.right = '0px';
  navCloud.style.backgroundImage = 'url("assets/nav-thought-1.png")';
  navCloud.style.color = 'black';
  contactIcons[0].style.display = "block";
  document.getElementsByClassName("exit")[0].style.display = "block";
}

function hideCloud () {
  navCloud.style.width = "160px";
  navCloud.style.height = "150px";
  navCloud.style.backgroundImage = 'url("assets/thought.png")';
  navCloud.style.color = 'transparent';
  contactIcons[0].style.display = "none";
  console.log('hide cloud');
  document.getElementsByClassName("exit")[0].style.display = "none";
}

////////////////////////
// INFO BOX FUNCTIONS //
////////////////////////

let pacmanInfoBox = document.getElementsByClassName('pacman-info')
let eyesInfoBox = document.getElementsByClassName('eyes-info')
let busInfoBox = document.getElementsByClassName('bus-info')
let githubIcon = document.getElementsByClassName('github-icon')
let playDemoIcon = document.getElementsByClassName('play-demo-icon')


// PACMAN INFO
function givePacmanInfo() {
    pacmanInfoBox[0].style.display= 'block';
    githubIcon[0].style.display= 'block';
    playDemoIcon[0].style.display= 'block';
}

function hidePacmanInfo() {
    pacmanInfoBox[0].style.display= 'none';
    githubIcon[0].style.display= 'none';
    playDemoIcon[0].style.display= 'none';
}

// EYES INFO
function giveEyesInfo() {
    eyesInfoBox[0].style.display= 'block';
    githubIcon[1].style.display= 'block';
    playDemoIcon[1].style.display= 'block';
}

function hideEyesInfo() {
    eyesInfoBox[0].style.display= 'none';
    githubIcon[1].style.display= 'none';
    playDemoIcon[1].style.display= 'none';
}

// BUS INFO
function giveBusInfo() {
    busInfoBox[0].style.display= 'block';
    githubIcon[2].style.display= 'block';
    playDemoIcon[2].style.display= 'block';
}

function hideBusInfo() {
    busInfoBox[0].style.display= 'none';
    githubIcon[2].style.display= 'none';
    playDemoIcon[2].style.display= 'none';
}