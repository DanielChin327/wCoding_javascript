const button = document.querySelector('.button')
const audio = new Audio("/music/sound.mp3");

button.classList.add('zelda-noise')

const activate = document.querySelector('.zelda-noise')

activate.addEventListener("click", (event) => {
  audio.play();
});


// button.addEventListener('click', (event) =>{
//   audio.play();

// })
