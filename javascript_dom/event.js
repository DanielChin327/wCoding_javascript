
const mySpan = document.querySelector('#clickme')
const myDiv = document.querySelector("div")
const button = document.querySelector(".button")
const audio = new Audio ("/music/sound.mp3")

mySpan.style.backgroundColor = "red"
myDiv.style.backgroundColor = "green"

mySpan.addEventListener('click', function() {
  console.log("you clicked span")
}
)

mySpan.addEventListener('click', function(){
  console.log("You clicked,", mySpan)
})

myDiv.addEventListener('click', function(){
  console.log("You clicked,", myDiv)
})


button.addEventListener('click', function(){
  button.disabled = true;
  button.innerText = "Bingo";
  audio.play();
})




document.addEventListener("keydown", function(event) {

  if (event.code === "Space") {
    console.log("You pressed space")
  }
  else {
    // console.log("You pressed", event.code)
    console.log("You pressed", event.key)
  }

})
