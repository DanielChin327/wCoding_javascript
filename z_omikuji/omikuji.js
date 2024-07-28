const fortunes = [
  { japanese: "大吉", english: "Great Blessing" },
  { japanese: "中吉", english: "Middle Blessing" },
  { japanese: "小吉", english: "Small Blessing" },
  { japanese: "吉", english: "Blessing" },
  { japanese: "半吉", english: "Half Blessing" },
  { japanese: "末吉", english: "Future Blessing" },
  { japanese: "末小吉", english: "Future Small Blessing" },
  { japanese: "凶", english: "Curse" },
  { japanese: "小凶", english: "Small Curse" },
  { japanese: "半凶", english: "Half Curse" },
  { japanese: "末凶", english: "Future Curse" },
  { japanese: "大凶", english: "Great Curse" }
];

const theContainer = document.querySelector(".container")
const fortuneButton = document.querySelector("#fortune-button")


fortuneButton.addEventListener('click', () =>{
  let randomNum = Math.floor(Math.random()* fortunes.length)
  let chosenFortuneObj = fortunes[randomNum]
  let eng;
  let jap;
  for (let lang in chosenFortuneObj) {
    if (lang === 'japanese') {
      jap = chosenFortuneObj.japanese
    }
    if (lang === 'english') {
      eng = chosenFortuneObj.english
    }
  }
  let theMessage = document.createElement('p')
  theMessage.innerHTML = `Japanese: ${jap} / English: ${eng}`
  theContainer.appendChild(theMessage)

  fortuneButton.disabled = true;
})
