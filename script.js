window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

var navCloud = document.getElementById('contact-section');
var contactIcons = document.getElementsByClassName('contact-info')

function showCloud () {
  navCloud.style.width = '200px';
  navCloud.style.height = '500px';
  navCloud.style.backgroundImage = 'url("assets/nav-thought-1.png")';
  navCloud.style.color = 'black';
  contactIcons[0].style.display = "block";
  document.getElementsByClassName("exit")[0].style.display = "block";
}

function hideCloud () {
  navCloud.style.width = "150px";
  navCloud.style.height = "150px";
  navCloud.style.backgroundImage = 'url("assets/thought.png")';
  navCloud.style.color = 'transparent';
  contactIcons[0].style.display = "none";
  console.log('hide cloud');
  document.getElementsByClassName("exit")[0].style.display = "none";
}