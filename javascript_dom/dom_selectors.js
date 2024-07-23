const specialText = document.getElementById('special-item')
const getDivs = document.getElementsByTagName('div')
const getButton = document.getElementsByName('click-me')
const firstIntro = document.querySelector('.intro')
const allHighlight = document.querySelectorAll('.highlight')

console.log(specialText)
console.log(getDivs)
console.log(getButton)
console.log(firstIntro)
console.log(allHighlight)



const myLink = document.querySelector('#myGoogleLink')
let href = myLink.getAttribute("href")

myLink.href = "https://www.wcoding.com"
myLink.innerHTML= "Lets go to wCoding"
myLink.innerHTML = 'Testing out textcontent'



console.log(allHighlight[0].classList)
console.log(allHighlight[0].className)

allHighlight[0].className = "intro"
allHighlight[0].classList.add('Highlight')
// .remove, .toggle

// console.log(getDivs[0].innerHTML)



// href = 'https://www.wcoding.com'
// myLink.setAttribute('href', href)
