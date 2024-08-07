document.addEventListener("DOMContentLoaded", function(){
  const calcButton = document.querySelector("#calculate-button")

  calcButton.addEventListener('click', calculate)


})

function calculate(event) {
  event.preventDefault();
  let input = document.querySelector('#input').value
  input = parseInt(input)
  for(let i = 1; i <= input; i++) {
    const list = document.querySelector('.results')
    let newNum = document.createElement('li')
    if (i % 3 == 0 && i % 5 == 0) {
      newNum.innerText = "Fizz Buzz"
    }
    else if (i % 3 == 0) {
      newNum.innerText = "Fizz"
    }
    else if (i % 5 == 0) {
      newNum.innerText = "Buzz"
    }
    else {
      newNum.innerText = i
    }
    list.appendChild(newNum)
  }
}
