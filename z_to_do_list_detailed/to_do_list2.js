const addButton = document.querySelector('.add-new')
const theList = document.querySelector('#theList')

addButton.addEventListener('click', function(){
  let message = prompt("Write a task: ")
  let newItem = document.createElement('li')
  newItem.innerText = message
  theList.appendChild(newItem)

  let deleteButton = document.createElement('button')
  deleteButton.type = 'button'
  deleteButton.innerText = 'Delete'
  deleteButton.id = 'delete-button'
  newItem.appendChild(deleteButton)

  deleteButton.addEventListener('click', function() {
    theList.removeChild(newItem)
  })
})
