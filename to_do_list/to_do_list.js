const newItem = document.querySelector("#add-new")
const theList = document.querySelector("#the-list")



newItem.addEventListener('click', function(){
  let message = prompt("Write a new message: ")
  let newList = document.createElement('li')
  newList.innerHTML = message
  newList.id = "item"
  theList.appendChild(newList)

  newList.addEventListener('click', function(){
    if(confirm("remove this task? ")){
      newList.remove();
    }
  })
})
