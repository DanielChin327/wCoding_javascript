const addButton = document.querySelector(".add-new")
const theList = document.querySelector('#theList')


addButton.addEventListener('click', function() {
  let message = prompt("Write a new task: ")
  const newItem = document.createElement('li')
  newItem.innerHTML = message
  theList.appendChild(newItem)

  const deleteButton = document.createElement('button')
  deleteButton.type="button"
  deleteButton.textContent='delete'
  newItem.appendChild(deleteButton)

  deleteButton.addEventListener('click', function() {
    theList.removeChild(newItem)
  })
})
