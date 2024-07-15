
// 1. Declare this number : 5
let five = 5;

// 2. Declare this string : Hello
let greetings = "Hello";

// 3. Declare these 2 numbers : 3 and 4 in just one line
let numberThree = 3; let numberFour = 4;

// 4. Declare these 2 strings : ”Hello.” and “My name is Tarn” in one line. (Replace Tarn with your name)
let greetingsAgain = "Hello"; let greetingsName = "My name is Dan"

// 5. Declare 3 numbers: 2, 5, and 3 in one line and then get the sum (result = 10)
let numberTwo = 2; let numberFive = 5; let numberThreeAgain = 3;
let sumForProblemFive = numberTwo + numberFive + numberThreeAgain;


// 6. Declare 3 strings: “Hello!”, “My”, and “name is Tarn ” in one line, then add each string to have this result “Hello! My name is Tarn” (replace Tarn with your name)
// -> Check Number 4.
let greetingsForProblemSix = `${greetingsAgain} ${greetingsName}`;


// 7. Declare a boolean with its value instantiated as true
let itsTrue = true;

// 8. Declare a number and two strings in order to display “There are 9 people in this class”
let stringForProbEight = "There are"
let stringForProbEightAgain = "people in this class"
let studentNumbers = 7
let answerForProbEight = `${stringForProbEight} ${studentNumbers} ${stringForProbEightAgain}`

// 9. For every variable created before, test what type of value they are holding using typeof.
// console.log(typeof(stringForProbEight));
// console.log(typeof(studentNumbers));

// 10. Declare variables and do an example for each type of arithmetical operation that we saw in the presentation ( + – * / % )
let resultAddTen = 2 + 2;
let resultSubTen = 3 - 2;
let resultProTen = 3 * 3;
let resultDivTen = 10 / 2;
let resultRemTen = 6 % 3;

// 11. Do these operations by declaring variables and using the correct arithmetical operation:
//     1. result1 is the addition of 32 and 8, divided by 6 minus 1
//     2. result2 is my result1 divided by the number 5
//     3. result3 is the remainder when result1 is divided by 5
let result1 = 32 + 8;
let result2 = result1 / 5;
let result3 = result1 % 5;

// 12. Do an example for each operation : “+=”, “-=”, “*=”, “/=”, “%=”
//     1. You can declare new variables to do this, or you can reuse your previous variables. You can choose.
let numFor12 = 8;
numFor12 += 2;
numFor12 -= 10;
numFor12 *= 2;
numFor12 /= 2;
numFor12 %= 3;

// 13. By using the function which asks the user to input text, get this result “Here is a number : 84”
//     1. 84 is the number I want. Your prompt should include a question that gets the user to enter that number.
let userInput13 = function(){
  let result = prompt("Type the Number 84: ");
  console.log(result);
}

// 14. By using the function which asks the user to input 2 different numbers, then get the result “42”
//     1. I want the type of your variable to be display as a number by using a function that you’ve learned.
//     2. 42 is the number I want. Your prompt should include a question that gets the user to enter that number.

let userInput14Function = () => {
let userInput14First = prompt("Type First Number: ")
let userInput14Second = prompt("Type Second Number: ")
console.log(parseInt(userInput14First) + parseInt(userInput14Second));
}
// 15. By using the function which asks the user to input 2 different numbers, get the result “42”
//     1. I want the type of your variable to be displayed as a string by using a function that you’ve learned.
let userInput15Function = () => {
  let userInput14First = prompt("Type First Number: ")
  let userInput14Second = prompt("Type Second Number: ")
  console.log(typeof(parseInt(userInput14First) + parseInt(userInput14Second) + ""));
  }


// 16. translate into code the following operation and display :
//     1. x=1
//     2. y=3
//     3. z=4
//     4. result = z-y*x
//     5. display → “My result is <put your result here> and the type of my result variable is <put the type of your variable here>”.
let x = 1;
let y = 3;
let z = 4;
let result16 = z-y*x
// console.log(`My result is ${result16} and the type of my result variable is ${typeof(result16)}`)

// 17. Do the same thing as question 16, but this time use the function to interact with a user to ask them to input numbers x, y and z.


// 18. Try to do the following sentence/conversation by using the function to interact with a user :
//     1. What is your name? the user will have to type his/her name
//     2. What is your age? the user will have to type his/her age
//     3. Where are you from? the user will have to type his/her home country
//     4. Display the result as : “Hello! Your name is <name>, you’re <age> years old and you come from <country>”.
// 19. Do the same thing as question 18 but try to display their age into [Korean Age](https://www.omnicalculator.com/everyday-life/korean-age):
//     1. What is your name ? the user will have to type his/her name
//     2. What is your age ? the user will have to type his/her age
//     3. Where are you from ? the user will have to type his/her home country
//     4. Display a result as : “Hello! Your name is <name>, you’re <age> years old and you come from <country>, but in Korea your age is <Korean Age>…. Sorry you’re older here ! :)” .
