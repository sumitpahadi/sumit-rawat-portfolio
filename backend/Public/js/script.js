let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

var string = "I Am a Mern Stack Developer";
var str = string.split("");
var el = document.getElementById('str');

function animate() {
  str.length > 0 ? el.innerHTML += str.shift() : resetAnimation();
}

function resetAnimation() {
  el.innerHTML = ""; // Clear the displayed text
  str = string.split(""); // Reset the array of characters
}

var animationInterval = setInterval(animate, 250);