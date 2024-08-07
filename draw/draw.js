

let arrayOne = []
let message;
document.addEventListener('DOMContentLoaded', function() {

})

function getMessage() {
  while (message !== 'stop') {
  message = prompt("What do you want to write?")
  arrayOne.push(message)
  }

}

function storeArray(){
  localStorage.setItem('message', JSON.stringify(arrayOne))
  let stringed = localStorage.getItem('message')
  console.log(stringed)
  console.log(typeof(stringed))

  let parsed = JSON.parse(stringed)
  console.log(parsed)
  console.log(Array.isArray(parsed))
}
