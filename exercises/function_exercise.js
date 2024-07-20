
// let rpsGameProto = () => {
//   let choices = ['rock', 'paper', 'scissor']
//   let randNum = Math.floor((Math.random() * 3))
//   let compChoice = choices[randNum]
//   let rounds;

//   while(true) {
//     rounds =  parseInt(prompt("Play until someone wins to: "))
//     if (isNaN(rounds)) {
//       console.log(`Invalid input. You wrote ${rounds}`)
//     }
//     else {
//       break;
//     }
//   }

//   let counter = 0;
//   let compWins = 0;
//   let playerWins = 0;

//   while (counter < rounds) {
//     while(true) {
//       playerChoice = (prompt('rock...paper...scissor! (choose)').toLowerCase())
//       if ((playerChoice === 'rock') || playerChoice === 'paper' || playerChoice === 'scissor') {
//         break;
//       }
//       else {
//         console.log(`Invalid Input. You wrote ${playerChoice}`)
//       }
//     }

//     randNum = Math.floor((Math.random() * 3))
//     compChoice = choices[randNum]
//     if (compChoice === playerChoice) {
//       console.log(`TIE \n Both chose ${playerChoice}`)
//     }
//     else if ((compChoice === 'rock' && playerChoice === 'scissor') || (compChoice === 'paper' && playerChoice === 'rock') || (compChoice === 'scissor' && playerChoice === 'paper')) {
//       console.log(`Round: ${counter + 1}\n Winner: Computer \n Computer: ${compChoice} \n Player: ${playerChoice}`)
//       counter++
//       compWins++
//     }
//     else if ((compChoice === 'rock' && playerChoice === 'paper') || (compChoice === 'paper' && playerChoice === 'scissor') || (compChoice === 'scissor' && playerChoice === 'rock')){
//       console.log(`Round: ${counter + 1}\n Winner: Player \n Computer: ${compChoice} \n Player: ${playerChoice}`)
//       counter++
//       playerWins++
//     }
//     else {
//       console.log("bug")
//     }
//   }

//   console.log(`HERE ARE THE RESULTS \n Rounds Played:${rounds} \n Computer Won: ${compWins}\n Player Won:${playerWins}`)
//   inviteGame()
// }

// Rock Paper Scissor: Function Version:

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissor'];
  const randNum = Math.floor(Math.random() * 3);
  return choices[randNum];
}

function getPlayerChoice() {
  let playerChoice;
  while (true) {
    playerChoice = prompt('rock...paper...scissor! (choose)').toLowerCase();
    if (['rock', 'paper', 'scissor'].includes(playerChoice)) {
      break;
    } else {
      console.log(`Invalid Input. You wrote ${playerChoice}`);
    }
  }
  return playerChoice;
}

function compareChoices(playerChoice, compChoice) {
  if (compChoice === playerChoice) {
    return 'tie';
  } else if (
    (compChoice === 'rock' && playerChoice === 'scissor') ||
    (compChoice === 'paper' && playerChoice === 'rock') ||
    (compChoice === 'scissor' && playerChoice === 'paper')
  ) {
    return 'computer';
  } else {
    return 'player';
  }
}

function rpsGame() {
  let rounds;
  while (true) {
    rounds = parseInt(prompt("Play until someone wins to: "));
    if (!isNaN(rounds)) {
      break;
    } else {
      console.log(`Invalid input. You wrote ${rounds}`);
    }
  }

  let counter = 0;
  let compWins = 0;
  let playerWins = 0;

  while (counter < rounds) {
    const playerChoice = getPlayerChoice();
    const compChoice = getComputerChoice();
    const winner = compareChoices(playerChoice, compChoice);

    if (winner === 'tie') {
      console.log(`Round: ${counter + 1}\n TIE \n Both chose ${playerChoice}`);
    } else if (winner === 'computer') {
      console.log(`Round: ${counter + 1}\n Winner: Computer \n Computer: ${compChoice} \n Player: ${playerChoice}`);
      compWins++;
    } else {
      console.log(`Round: ${counter + 1}\n Winner: Player \n Computer: ${compChoice} \n Player: ${playerChoice}`);
      playerWins++;
    }
    counter++;
  }

  console.log(`HERE ARE THE RESULTS \n Rounds Played: ${rounds} \n Computer Won: ${compWins}\n Player Won: ${playerWins}`);
  inviteGame();
}

// let guessGameProto= () => {
//   let randomNum = Math.floor((Math.random()* 10) + 1)
//   while(true){
//     let playerGuess;
//     playerGuess = (prompt("Guess a number"))
//       if (isNaN(playerGuess)) {
//         console.log(`Invalid Input. You typed in ${playerGuess}`)
//       }
//       else {
//         playerGuess = parseInt(playerGuess)
//         if (playerGuess === randomNum) {
//           console.log(`Correct! the number was ${randomNum}`)
//           break;
//         }
//         else if (playerGuess < randomNum) {
//           console.log(`Your guess was too low`)
//         }
//         else if (playerGuess > randomNum) {
//           console.log(`Your guess was too high`)
//         }
//       }
//   }
//   inviteGame()
// }

let chooseDifficulty = (choice) => {
  choice = prompt("Choose difficulty -> (easy / mid / hard)")
  return choice;
}

let getRandNum = (difficulty) => {
  let randomNum;
  if(difficulty === 'easy') {
    randomNum = ((Math.random()* 10) + 1)
  }
  return randomNum;
}

let playerChoose = (guess) => {
  guess = parseInt(prompt("What is your guess?: "))
  return guess
}

let guessGame = (choice) => {
  let randomNum = getRandNum();
  let playerGuess = playerChoose();

}

let inviteGame = () => {
  let accept = prompt('Play a Game?: y/n').toLowerCase()
  if (accept === 'y') {
    let choose
    while(true) {
      choose = prompt('Which game: rps or num')
      if (choose === 'rps') {
        rpsGame()
        break
      }
      else if(choose === 'num') {
        guessGame()
        break
      }
      else {
        console.log(`Invalid input. You wrote ${choose}`)
      }
    }
  }
}
