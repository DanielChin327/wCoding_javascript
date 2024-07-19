
let rpsGame = () => {
  let choices = ['rock', 'paper', 'scissor']
  let randNum = Math.floor((Math.random() * 3))
  let compChoice = choices[randNum]
  let playerChoice;

  let rounds = parseInt(prompt("Play until someone wins to: "))
  while(true) {
    if (isNaN(rounds)) {
      console.log(`Invalid input. You wrote ${rounds}`)
    }
    else {
      break;
    }
  }

  let counter = 0;
  let compWins = 0;
  let playerWins = 0;
  while (counter <= rounds) {
    let playerChoice;

    while(true) {
      playerChoice = (prompt('rock...paper...scissor! (choose)').toLowerCase())
      if ((playerChoice === 'rock') || playerChoice === 'paper' || playerChoice === 'scissor') {
        break;
      }
      else {
        console.log(`Invalid Input. You wrote ${playerChoice}`)
      }
    }

    let randNum = Math.floor((Math.random() * 3))
    let compChoice = choices[randNum]
    if (compChoice === playerChoice) {
      console.log(`TIE \n Both chose ${playerChoice}`)
    }
    else if ((compChoice === 'rock' && playerChoice === 'scissor') || (compChoice === 'paper' && playerChoice === 'rock') || (compChoice === 'scissor' && playerChoice === 'paper')) {
      console.log(`WINNER: Computer \n Computer: ${compChoice} \n Player: ${playerChoice}`)
      counter++
      compWins++
    }
    else if ((compChoice === 'rock' && playerChoice === 'paper') || (compChoice === 'paper' && playerChoice === 'scissor') || (compChoice === 'scissor' && playerChoice === 'rock')){
      console.log(`WINNER: Player \n Computer: ${compChoice} \n Player: ${playerChoice}`)
      counter++
      playerWins++
    }
    else {
      console.log("bug")
    }
  }

  console.log(`Result \n Rounds:${rounds} \n Computer Won: ${compWins}\n Player Won:${playerWins}`)
}

let guessGame = () => {



}
