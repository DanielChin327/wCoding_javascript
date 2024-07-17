// ## 1. The Guessing Game - While practice

// In this you will have the computer generate a random number between 1 - 100 **(not including 0)**, the player will then input their guess and the computer will provide feedback until they guess the correct number. The computer will then output how many attempts the user took.

// For this I will provide basic algorithmic thinking and design process so you understand what you should do before starting any actual coding project.

// 1. Setup Initial Variable (need at least 2 Numbers and one Boolean) DONE
// 2. Generate the random target number.
// 3. Start the game loop
// 4. Prompt for the guess
//     1. Validate if the guess is a number
// 5. Compare the guess to target number
// 6. Provide feedback to user
// 7. Increase the # of attempts

// Once you finish all 3 assignments you can take this further by

// - Having a play again option
// - Setting up extra validations for user input (within the correct range)
// - Creating a different set of difficulties and a prompt for difficulty level

let guessGame = () => {
let randNum = Math.floor(((Math.random() * 100) + 1))
  while(true){
    let guess = parseInt(prompt("Guess a number from 1 to 100: "))
    if (isNaN(guess)) {
      console.log(`Invalid input. You need to use a number.`)
    }
    else if (randNum === guess) {
      console.log(`Correct! the number was ${randNum}!`)
      break;
    }
    else if (randNum > guess) {
      console.log(`Incorrect. Your guess was too low.`)
    }
    else if (randNum < guess) {
      console.log(`Incorrect. Your guess was too high.`)
    }
  }
}





// ## Rock Paper Scissors - For Practice

// In this you will have the user enter either “rock”, “paper” or “scissors”, the computer will then randomly choose between rock paper or scissors. You will display to the user, their own choice, the computers choice and the outcome.

// Once you have the core game working, you can then add a loop to make the game best out of X where X is a number of the users choice when the game begins.

// - Once you have completed all 3, you can extend this program by adding an unlimited mode, that continues until the user enters a certain word. The program will then output, the number of times the player won, the number of times the computer won, and the number of ties.

// - You could also choose to extend the program to include other options such as Rock, Paper, Scissors, Lizard, Spock

// ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/97a49e10-c263-4b0e-8110-2e9e07526e7f/a8d047d9-2fe2-4fd2-b24c-c5e7526974ad/Untitled.png)




let game = () => {
let numOfGames = prompt('Best out of how many games? ')
numOfGames = parseInt(numOfGames)
let choices = ['rock', 'paper', 'scissors']
let computerCounter = 0;
let playerCounter = 0;

while (computerCounter < numOfGames && playerCounter < numOfGames) {
let randNum = Math.floor((Math.random() * 3))
let compChoice = choices[randNum]
let playerChoice = prompt("rock, paper, or scissors")
  if (playerChoice !== 'rock' && playerChoice !=='paper' && playerChoice !== 'scissors') {
    console.log(`not accepted input. you put in ${playerChoice}.\n`)
  }
  else if (compChoice === playerChoice) {
    console.log(`Tie. Both chose ${playerChoice}.`)
  }
  else if ((compChoice === 'rock' && playerChoice === 'scissors')||(compChoice === 'paper' && playerChoice === 'rock') || (compChoice === 'scissors' && playerChoice === 'paper')) {
    console.log(`Computer Wins. Computer chose ${compChoice}. Player chose ${playerChoice}.\n`)
    computerCounter += 1;
  }
  else if ((compChoice === 'scissors' && playerChoice === 'rock')||(compChoice === 'rock' && playerChoice === 'paper') || (compChoice === 'paper' && playerChoice === 'scissors')) {
    console.log(`Player Wins. Computer chose ${compChoice}. Player chose ${playerChoice}.\n`)
    playerCounter += 1;
  }
  else{
    console.log(`Computer Choice: ${compChoice} / Player Choice: ${playerChoice}`)
  }
}
console.log(`Scores-> Computer:${computerCounter} and Player:${playerCounter}.\n`)

while(true){
  let playGame = prompt("Play Game? (yes/no)")
  if (playGame === 'no'){
    break;
  }
  else {
    game();
  }
}
}

// game();
//   ## Drawing a Pyramid  - Nested For Loop practice

// This is a VERY common challenge in coding to test the understanding of loops/logic and how it works.

// - The player enters the height of the pyramid.
// - The application then prints out in the command line a pyramid of that height.
//     - With an input of 6, this would be the output.

// ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/97a49e10-c263-4b0e-8110-2e9e07526e7f/c4c3e8d2-a4d8-4b3d-a045-08d7c85fd8fd/Untitled.png)

// This requires MULTIPLE nested loops.

// - If you want a real challenge, have it output a diamond instead.


// let result = ''
// for (let i = 0; i < 5; i ++) {
//   result += "x"
//   console.log(result)
// }
