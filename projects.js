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

function speak() {
    
}

////////////////////////
// INFO BOX FUNCTIONS //
////////////////////////

let pacmanInfoBox = document.getElementsByClassName('pacman-info')
let eyesInfoBox = document.getElementsByClassName('eyes-info')
let busInfoBox = document.getElementsByClassName('bus-info')
let githubIcon = document.getElementsByClassName('github-icon')


// PACMAN INFO
function givePacmanInfo() {
    pacmanInfoBox[0].style.display= 'block';
    githubIcon[0].style.display= 'block'
}

function hidePacmanInfo() {
    pacmanInfoBox[0].style.display= 'none';
    githubIcon[0].style.display= 'none';
}

// EYES INFO
function giveEyesInfo() {
    eyesInfoBox[0].style.display= 'block';
    githubIcon[1].style.display= 'block';
}

function hideEyesInfo() {
    eyesInfoBox[0].style.display= 'none';
    githubIcon[1].style.display= 'none';
}

// BUS INFO
function giveBusInfo() {
    busInfoBox[0].style.display= 'block';
    githubIcon[2].style.display= 'block';
}

function hideBusInfo() {
    busInfoBox[0].style.display= 'none';
    githubIcon[2].style.display= 'none';
}