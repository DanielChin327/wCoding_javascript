const myDiv = document.querySelector('#myDiv')

console.log(myDiv.firstChild)

let newLink = document.createElement('a')
newLink.id = "myLink"
newLink.href = "https://www.wcoding.com"
newLink.target = "_blank"
newLink.innerHTML = "WCoding" //.innerHTML or textContent is for literal texts
newLink.className = "intro"

const children = myDiv.childNodes

myDiv.appendChild(newLink)


console.log(myDiv)
console.log(myDiv.childNodes)
console.log(newLink.childNodes)
