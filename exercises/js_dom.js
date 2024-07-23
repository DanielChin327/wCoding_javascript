const greet = document.getElementById('myDiv')


greet.innerHTML = "<p class = 'main-text'>Hello World</p>"
greet.innerHTML += `<img src='/images/moon.jpg' id = 'moon' >'`


const image = document.querySelector('#moon')
let moon = image.getAttribute('src')
image.src = `/images/sun.jpg`



greet.classList.add('container')
const pTags = document.querySelector('p')
pTags.classList.remove('main-text')
pTags.style.backgroundColor = 'black';
pTags.style.color = 'white';
