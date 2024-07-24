// Exercise 1

// const divEx1 =  document.createElement('div')
// divEx1.id = "divEx1"
// document.body.appendChild(divEx1)
// divEx1.appendChild(document.createTextNode("The "))


// const firstStrong = document.createElement("strong")
// firstStrong.textContent = "World Wide Web Consortium"
// divEx1.appendChild(firstStrong)

// divEx1.appendChild(document.createTextNode(", abbreviated as acronym "))

// const secondStrong = document.createElement("strong")
// secondStrong.textContent = "W3C"
// divEx1.appendChild(document.createTextNode(" is an "))

// let firstLink = document.createElement('a')
// firstLink.href = "https://en.wikipedia.org/wiki/Standards_organization"
// firstLink.title = "standards organization"
// firstLink.textcontent = "standards organization"

// divEx1.appendChild(document.createTextNode("non-profit organization responsible for promoting the compatibility of the "))

// let secondLink = document.createElement('a')
// secondLink.href = "https://en.wikipedia.org/wiki/World_Wide_Web_Consortium"
// secondLink.title = "World Wide Web"
// secondLink.textContent = "World Wide Web"
// divEx1.appendChild(secondLink)

// divEx1.appendChild(document.createTextNode(" ."))


// Exercise 2
// const theArray = ["Javascript", "Node", "Vue","React"]

// const divEx2 =  document.createElement('div')
// divEx2.id = "divEx1"
// document.body.appendChild(divEx2)


// let pTag = document.createElement('p')
// pTag.textContent = "Languages based on ECMAScript ;"
// divEx2.appendChild(pTag)

// const unList = document.createElement('ul')
// for (let text of theArray) {
//   temp = unList.appendChild(document.createElement('li'))
//   temp.textContent = text
// }

// divEx2.appendChild(unList)


// Exercise 3

// const array3 = []
// array3.push(ecmaLanguage("JavaScript", "JavaScript is a scripting language mainly used in interactive web pages but also server-side."))
// array3.push(ecmaLanguage("Node", "Node is a low level backend server based on the javascript language"))
// array3.push(ecmaLanguage("Vue","Vue.js is a framework for JavaScript used to build web interfaces and one-page applications"))
// array3.push(ecmaLanguage("React", "ReactJS is a declarative, efficient, and flexible JavaScript library for building user interfaces"))

// function ecmaLanguage(name, descripition) {
//   const newLanguage = {};
//   newLanguage.name = name
//   newLanguage.descripition = descripition
//   return newLanguage
// }

// const divEx3 =  document.createElement('div')
// divEx3.id = "divEx1"
// document.body.appendChild(divEx3)

// let pTag3 = document.querySelector('p')



// let pTag = document.createElement('p')
// pTag.textContent = "Languages based on ECMAScript :"
// divEx3.appendChild(pTag)

// const unList = document.createElement('ul')
// for (let element of array3) {
//   tempDT = unList.appendChild(document.createElement('dt'))
//   tempDD = unList.appendChild(document.createElement('dd'))
//   tempDT.textContent = element.name
//   tempDD.textContent = element.descripition
// }

// divEx3.appendChild(unList)


// Exercise 4

// const divEx4 =  document.createElement('div')
// divEx4.id = "EX4"
// document.body.appendChild(divEx4)

// const theForm4 = document.createElement('form')
// theForm4.enctype = "multipart/form-data";
// theForm4.method = "post"
// theForm4.action = "upload.php"
// divEx4.appendChild(theForm4)

// const theFieldSet4 = document.createElement('fieldset')
// theForm4.appendChild(theFieldSet4)

// const theLegend4 = document.createElement('legend')
// theFieldSet4.appendChild(theLegend4)
// theLegend4.textContent = "Upload an image"

// const divEx4p2 = document.createElement('div')
// divEx4p2.style.textAlign = "center"
// theFieldSet4.appendChild(divEx4p2)

// const label4 = document.createElement('label')
// label4.htmlFor = "inputUpload"
// label4.textContent = "Image to Upload: "
// divEx4p2.appendChild(label4)

// const input1 = document.createElement('input')
// input1.type = 'file'
// input1.id = "inputUpload"
// input1.name = 'inputUpload'
// divEx4p2.appendChild(input1)

// const br1 = document.createElement('br')
// divEx4p2.appendChild(br1)
// divEx4p2.appendChild(br1)

// const input = document.createElement('input')
// input.type = 'submit'
// input.value = 'Send'
// divEx4p2.appendChild(input)


// Exercise 5
//   const martinArray =[
// "Martine is at the farm",
// "Martine is at school",
// "Martine is at the beach",
// "Martine goes skiing in the winter",
// "Martine starts to work",
// "Martine is unemployed"
// ]

// const divEx5 = document.createElement('div')
// divEx5.id = "output1"
// document.body.appendChild(divEx5)

// const ordList = document.createElement('ol')
// ordList.id = "martine-books"
// divEx5.appendChild(ordList)

// for (let activity of martinArray) {
//   temp = ordList.appendChild(document.createElement('li'))
//   temp.textContent = activity
// }

// divEx5.appendChild(ordList)


//
