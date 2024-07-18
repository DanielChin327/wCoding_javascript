// ## 1. The Guessing Game - While practice

// In this you will have the computer generate a random number between 1 - 100 **(not including 0)**, the player will then input their guess and the computer will provide feedback until they guess the correct number. The computer will then output how many attempts the user took.

// For this I will provide basic algorithmic thinking and design process so you understand what you should do before starting any actual coding project.

// 1. Setup Initial Variable (need at least 2 Numbers and one Boolean) DONE (The Random Number and the User Guess Number)
// 2. Generate the random target number. DONE
// 3. Start the game loop DONE
// 4. Prompt for the guess
//     1. Validate if the guess is a number DONE (isNan(Guess))
// 5. Compare the guess to target number DONE (Too high. Too low)
// 6. Provide feedback to user DONE()
// 7. Increase the # of attempts

// Once you finish all 3 assignments you can take this further by

// - Having a play again option DONE
// - Setting up extra validations for user input (within the correct range)
// - Creating a different set of difficulties and a prompt for difficulty level

let guessGame = () => {
let difficultChoice;
let validAnswer = false;

while (validAnswer === false) {
  difficultChoice = prompt("Choose difficulty : (easy/mid/hard)");
  if (difficultChoice === 'easy' || difficultChoice === 'mid' || difficultChoice === 'hard'){
    validAnswer = true;
  }
  else {
    console.log("Invalid Input. Choose easy, mid, or hard")
  }
}

let randNum;
let counter = 0;
if (difficultChoice === "easy"){
  randNum = Math.floor(((Math.random() * 10) + 1))
}
else if(difficultChoice === 'mid') {
  randNum = Math.floor(((Math.random() * 50) + 1))
}
else if(difficultChoice === 'hard') {
  randNum = Math.floor(((Math.random() * 100) + 1))
}

while(true){
  let guess = parseInt(prompt("Guess a number: "))
  if (isNaN(guess)) {
    console.log(`Invalid input. You need to use a number.`)
  }
  else if (randNum === guess) {
    console.log(`Correct! the number was ${randNum}! It took you ${counter} tries!`)
    break;
  }
  else if (randNum > guess) {
    console.log(`Incorrect. Your guess was too low.`)
    counter++;
  }
  else if (randNum < guess) {
    console.log(`Incorrect. Your guess was too high.`)
    counter++;
  }
}
while(true){
  let input = confirm("Play again? ")
  if (input === true) {
    guessGame();
  }
  else{
    break;
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
let choices = ['rock', 'paper', 'scissor']
let computerCounter = 0;
let playerCounter = 0;


while (computerCounter < numOfGames && playerCounter < numOfGames) {
let randNum = Math.floor((Math.random() * 3))
let compChoice = choices[randNum]
let playerChoice = prompt("rock, paper, or scissor")
  if (playerChoice !== 'rock' && playerChoice !=='paper' && playerChoice !== 'scissor') {
    console.log(`not accepted input. you put in ${playerChoice}.\n`)
  }
  else if (compChoice === playerChoice) {
    console.log(`Tie. Both chose ${playerChoice}.`)
  }
  else if ((compChoice === 'rock' && playerChoice === 'scissor')||(compChoice === 'paper' && playerChoice === 'rock') || (compChoice === 'scissor' && playerChoice === 'paper')) {
    console.log(`Computer Wins. Computer chose ${compChoice}. Player chose ${playerChoice}.\n`)
    computerCounter += 1;
  }
  else if ((compChoice === 'scissor' && playerChoice === 'rock')||(compChoice === 'rock' && playerChoice === 'paper') || (compChoice === 'paper' && playerChoice === 'scissor')) {
    console.log(`Player Wins. Computer chose ${compChoice}. Player chose ${playerChoice}.\n`)
    playerCounter += 1;
  }
}

while(true){
  let playGame = prompt("Play Game? (yes/no)")
  if (playGame === 'no'){
    console.log(`Computer won games. Player won games.`)
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

// let height = parseInt(prompt("Provide a number: "))

// let height = 25;
// for (let i = 1; i <= height; i++) {
//   let result = '';

//   // White Spaces
//   // For each i(line), add whitespace
//   // ex. line 2, j = 2; j < 3 - 1; j++
//   for (let j = 0; j < height - i; j++) {
//   result += ' ';
//   }

//   // Adding stars
//   for (let k = 0; k < (2 * i - 1); k++) {
//   result += 'X';
//   }

//   console.log(result);
//   }
// for (let i = height - 1; i >= 1; i--) {
//   let result = '';

//   // Adding the white spaces
//   for (let j = 0; j < height - i; j++) {
//       result += ' ';
//   }

//   // Adding stars
//   for (let k = 0; k < (2 * i - 1); k++) {
//       result += 'X';
//   }

//   console.log(result);
// }





// Exercise 1: Print the first 10 multiples of 3 using a `for` loop.

let exerciseOne = () => {
  for (let i = 1; i < 10; i++){
    console.log(i * 3);
  }
}

// Exercise 2: Use a `while` loop to print all the numbers from 10 down to 1.

let exerciseTwo = () => {
  let x = 10
  while (x >= 1) {
    console.log(x);
    x--
  }
}


// Exercise 3: Given an object and an array, use `for...in` to iterate over the object properties and `for...of` to iterate over the array elements.
