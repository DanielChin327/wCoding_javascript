
// ### Challenges

// Here is a list of challenges you can attempt in order to show your understanding.

// - Remember to use the console log to display each message.
// - Remember to comment out previous working challenges so you don’t have to run through the inputs of EVERY challenge.
// - Don’t forget to parseInt()/parseFloat() when we need an integer or Float!
// 1. **Check if a number is positive:**
//     - Prompt the user to enter a number.
//     - Display a message indicating whether the number is positive or not.

let num1 = 3;
let checkNum1 = (num) => {
  if(num > 0) {
    return true;
  }
};


// 2. **Check if a number is even or odd:**
//     - Prompt the user to enter a number.
//     - Display a message indicating whether the number is even or odd.

let num2 = 6;
const num2B = 3;

let checkNum2 = (num) => {
  if(num % 2 == 0){
    return "even"
  }
  else if(num % 2 != 0) {
    return "odd"
  }
}

// console.log(checkNum2(num2))
// console.log(checkNum2(num2B))


// 3. **Compare two numbers:**
//     - Prompt the user to enter two numbers.
//     - Display a message indicating which number is larger or if they are equal.

let checkNum3 = () => {
let num1 = prompt("Write Num1: ")
let num2 = prompt("Write Num2: ")
  if (num1 == num2) {
    console.log("numbers are equal")
  }
  else {
    console.log("numbers are not equal")
  }
}

// 4. **Check if a number is between two bounds:**
//     - Prompt the user to enter a number.
//     - Check if the number is between 10 and 20 (inclusive).
//     - Display a message accordingly.

let checkNum4 = function() {
  let num = prompt("type a number")
    if (num >= 10 && num <= 20) {
      console.log('inclusive')
    }
    else {
      console.log('not inclusive')
    }
  }


// 5. **Calculate and display grade based on percentage:**
//     - Prompt the user to enter a percentage score (0-100).
//     - Determine and display the corresponding letter grade based on the following scale:
//         - 90-100: A
//         - 80-89: B
//         - 70-79: C
//         - 60-69: D
//         - Below 60: F

let checkNum5 = () => {
  let num = prompt("input a grade")
  if (num > 90 && num < 100) {
    console.log("A")
  }
  else if (num < 90 && num > 80) {
    console.log("B")
  }
  else if (num < 80 && num > 70) {
    console.log("C")
  }
  else if (num < 70 && num > 60) {
    console.log("D")
  }
  else if (num < 60) {
    console.log("F")
  }
  else {
    console.log("Not an accepted Number")
  }
}

// 6. **Determine eligibility for discount:**
//     - Prompt the user to enter their age and whether they are a student (true/false).
//     - If the person is under 18 or a student, offer a discount (display a message).

let checkNum6 = () =>  {
  let age = prompt("How old are you?: ")
  let student = prompt("Are you a student?: ")
  let studentLowerCase = student.toLocaleLowerCase();
  if (age <= 18 || studentLowerCase == "yes") {
    console.log("you are worthy of a discount")
  }
  else {
    console.log("you are unworthy of discount")
  }
}

// 7. **Check eligibility for a driving license:**
//     - Prompt the user to enter their age.
//     - Display a message indicating if they are eligible for a driving license (age >= 18).

let checkNum7 = () => {
  let age = prompt("How old are you: ")
  if (age >= 18) {
    console.log("You are worthy of driving")
  }
  else (
    console.log("You are unworthy of driving")
  )
}

// 8. **Calculate total cost based on quantity and discount:**
//     - Prompt the user to enter the quantity of a product and whether they have a coupon (true/false).
//     - Calculate the total cost:
//         - If quantity > 10 and has a coupon, apply a 10% discount.
//         - Otherwise, display the total cost without discount.


let checkNum8 = () => {
  let productCost = 100
  let quantity = prompt("How many you buying: ")
  let coupon = prompt("You have a coupon? (true/false)").toLowerCase()
  if (quantity > 10 && coupon === "true") {
    let cost = (productCost * quantity * .90)
    console.log(cost)
  }
  else {
    cost = (productCost * quantity)
    console.log(cost)
  }
}

// 9. **Check validity of a password:**
//     - Prompt the user to enter a password.
//     - Validate the password:
//         - Minimum length should be 8 characters.
//         - Should contain at least one uppercase letter and one digit.
//         - Display a message indicating if the password is valid or not.

let checkNum9 = () => {
  let input = prompt("Check Password").split('')
  if (/\d/.test(input) === true && /[A-Z]/.test(input) === true){
    console.log("valid password")
  }
  else {
    console.log("invalid password")
  }
}

// 10. **Determine eligibility for a loan:**
//     - Prompt the user to enter their income and credit score.
//     - Determine if they are eligible for a loan based on the following conditions:
//         - Income > $50,000 and Credit Score > 700.

let checkNum10 = () => {
  let income = prompt("Enter income: ")
  let score = prompt("Enter score: ")
  if (income > 50000 && score > 700) {
    console.log("You are loan worthy")
  }
  else {
    console.log("You are not worthy")
  }
}


// 11. **Validate a date input:**
//     - Prompt the user to enter a date in MM/DD/YYYY format.
//     - Validate if the input is a valid date (consider leap years and month lengths).

let checkNum11 = () => {
  let input = prompt("Write a date:")
  let changeToDateType = new Date(input)
  if (Date(changeToDateType) === true){
    console.log("date is valid")
  }
  else{
    console.log("date is not valid")
  }
}


// 12. **Check multiple conditions with logical operators:**
//     - Prompt the user to enter their age and whether they have a valid ID (true/false).
//     - Determine if they can enter a restricted area:
//         - Age >= 21 AND has a valid ID.

let checkNum12 = () => {
  let age = prompt("Enter age: ")
  let id = prompt("Do you have id? (true/false)")
  if (age >= 21 && id === "true") {
    console.log("You are worthy")
  }
  else{
    console.log("You are not worthy")
  }
}


// 13. **Calculate income tax based on income bracket:**
//     - Prompt the user to enter their annual income.
//     - Calculate and display the income tax based on progressive tax brackets:
//         - 0-10,000: 0% tax
//         - 10,001-50,000: 10% tax
//         - Above 50,000: 20% tax

let checkNum13 = () => {
  let income = prompt("What is your income: ")
  if (income > 0 && income < 10000) {
    console.log((income))
  }
  else if (income >= 10001 && income < 50000) {
    console.log((income * .90))
  }
  else if (income > 50000) {
    console.log((income * .80))
  }
  }


// 14. **Determine eligibility for a scholarship:**
//     - Prompt the user to enter their GPA and whether they have extracurricular activities (true/false).
//     - Determine if they are eligible for a scholarship based on the following conditions:
//         - GPA >= 3.5 OR has extracurricular activities.

let checkNum14 = () => {
  let gpa = prompt("What is your GPA? ")
  let activities = prompt("Do you have extracurricular activities? (true/false)? ")
  if (gpa >= 3.5 || activities === "true") {
    console.log("You are worthy of scholarship")
  }
  else {
    console.log("You are not worthy of scholarship")
  }
}

// 15. **Check validity of a credit card number:**
//     - Prompt the user to enter a credit card number.
//     - Validate if the input is a valid credit card number using Luhn algorithm.



// 16. **Check if a number is positive or negative using a ternary operator:**
//     - Prompt the user to enter a number.
//     - Use a ternary operator to display "Positive" if the number is greater than zero, otherwise "Negative".

let checkNum16 = () => {
  let num = prompt("provide number: ")
  let result = num > 0 ? "positive" : "negative"
  console.log(result)
}


// 17. **Determine eligibility for a discount using a ternary operator:**
//     - Prompt the user to enter their age.
//     - Use a ternary operator to display "Eligible" if age >= 60, otherwise "Not eligible".

let checkNum17 = () => {
  let age = prompt("provide age")
  let result = age >= 60 ? "Eligible" : "Not Eligible"
  console.log(result)
}

// 18. **Calculate discounted price using a ternary operator:**
//     - Prompt the user to enter the original price of a product and whether they have a coupon (true/false).
//     - Use a ternary operator to calculate and display the discounted price:
//         - If has coupon, apply a 10% discount; otherwise, display the original price.

let checkNum18 = () => {
  let price = prompt("enter the price: ")
  let coupon = prompt ("have coupon? (true/false)")
  let result = coupon === 'true'? (price * .9) : (price)
  console.log(result)
}

// 19. **Check eligibility for a job interview using a ternary operator:**
//     - Prompt the user to enter their qualifications (true/false) and years of experience.
//     - Use a ternary operator to determine and display "Qualified" if qualifications are true and experience >= 3, otherwise "Not qualified".

let checkNum19 = () => {
  let qualifications = prompt("are you qualified? (true/false)")
  let years = prompt('years of experience? ')
  let result = qualifications === 'true' && years >= 3? "Qualified":"Not Qualified"
  console.log(result)
}


// 20. **Validate user input using ternaries:**
//     - Prompt the user to enter a number.
//     - Use ternary operators to validate and display "Valid" if the input is a number, otherwise "Invalid".

let checkNum20 = () => {
  let num = prompt("enter number: ")
  num = parseInt(num)
  let result = typeof(num) === "number"? "Valid":"Invalid"
  console.log(result)
}

// 21. **Determine shipping cost based on location and weight:**
// - Prompt the user to enter their shipping location ("domestic" or "international") and the weight of the package.
// - Use nested `if` statements to calculate and display the shipping cost based on the following conditions:
//     - Domestic:
//         - Weight <= 5 lbs: $5
//         - Weight > 5 lbs and <= 10 lbs: $10
//         - Weight > 10 lbs: $15
//     - International:
//         - Weight <= 5 lbs: $15
//         - Weight > 5 lbs and <= 10 lbs: $25
//         - Weight > 10 lbs: $35

let checkNum21 = () => {
  let location = prompt("domestic or international? (domestic/international)")
  let weight = prompt("weight?: ")
  if (location == 'domestic') {
    if (weight <= 5) {
      console.log("$5")
    }
    else if (weight > 5 && weight <= 10) {
      console.log("$10")
    }
    else {
      console.log("$15")
    }
  }
  else if(location == 'international'){
    if (weight <= 5) {
      console.log("$15")
    }
    else if (weight > 5 && weight <= 10) {
      console.log("$25")
    }
    else {
      console.log("$35")
    }
  }
}

// 22. **Classify a triangle based on side lengths:**
//     - Prompt the user to enter three side lengths of a triangle.
//     - Use nested `if` statements to classify and display the type of triangle based on the following conditions:
//         - Equilateral triangle (all sides are equal).
//         - Isosceles triangle (exactly two sides are equal).
//         - Scalene triangle (all sides are different).
//         - Not a triangle (sum of any two sides is less than or equal to the third side).
//
let checkNum22 = () => {
  let side1 = prompt("side1: ")
  let side2 = prompt("side2: ")
  let side3 = prompt("side3: ")
  side1 = parseInt(side1)
  side2 = parseInt(side2)
  side3 = parseInt(side3)
  if((side1+side2)<=side3 || (side1+side3)<=side2 || (side2+side3)<=side1){
    console.log("Not a triangle")
  }
  else if(side1 != side2 && side1 != side3 && side2 != side3) {
    console.log("Scalene Triangle")
  }
  else if(side1 === side2 && side1 === side3 && side2 === side3) {
    console.log("Equaliteral Triangle")
  }
  else{
    console.log("Isosceles Triangle")
  }
}


// 23. **Determine eligibility for a job based on qualifications and experience:**
//     - Prompt the user to enter their qualifications ("Bachelor's", "Master's", "PhD") and years of experience.
//     - Use nested `if` statements to determine and display eligibility for a job based on the following conditions:
//         - PhD with >= 5 years experience: "Eligible for Senior Role"
//         - Master's with 3-5 years experience: "Eligible for Mid-level Role"
//         - Bachelor's with < 3 years experience: "Eligible for Entry-level Role"
//         - Otherwise: "Not Eligible"

let checkNum23 = () => {
  let qual = prompt("What is your degree?: (bachelor/ master/ phd)")
  let years = prompt("What is years of exp?: ")
  years = parseInt(years)
  if (qual == "phd" && years >= 5) {
    console.log("Senior")
  }
  else if(qual == "master" && (years > 3 && years < 5)){
    console.log("Mid-Level")
  }
  else if (qual == "bachelor" && years < 3){
    console.log("Senior")
  }
}

// 24. **Translate a day of the week into a language:**
//     - Prompt the user to enter a day of the week ("Monday" to "Sunday").
//     - Use a `switch` statement to translate and display the day of the week in another language (e.g., English to Spanish):
//         - Monday -> Lunes
//         - Tuesday -> Martes
//         - Wednesday -> Miércoles
//         - Thursday -> Jueves
//         - Friday -> Viernes
//         - Saturday -> Sábado
//         - Sunday -> Domingo

let checkNum24 = () => {
  let month = prompt("enter a day").toLowerCase()

  switch (month) {
    case 'monday':
      console.log('lunes')
      break;
    case 'tuesday':
      console.log('martes')
      break;
    case 'wednesday':
      console.log('miércoles')
      break;
    case 'thursday':
      console.log('jueves')
      break;
    case 'friday':
      console.log('viernes')
      break;
    case 'saturday':
      console.log('sabado')
      break;
    case 'sunday':
      console.log('domingo')
      break;
  }
}

// 25. **Determine the number of days in a month:**
//     - Prompt the user to enter a month (1-12 representing January to December).
//     - Use a `switch` statement to determine and display the number of days in the entered month.
//         - January, March, May, July, August, October, December -> 31 days
//         - April, June, September, November -> 30 days
//         - February -> 28 days
//             - Take it to the next level by also prompting the year for February ONLY
//                 - if it is a leap year display 29 days


let checkNum25 = () => {
  let month = prompt("write a month").toLowerCase()

  switch(month){
    case 'january':
      console.log('31 days')
      break
    case 'march':
      console.log('31 days')
      break
    case 'may':
      console.log('31 days')
      break
    case 'july':
      console.log('31 days')
      break
    case 'august':
      console.log('31 days')
      break
    case 'october':
      console.log('31 days')
      break
    case 'december':
      console.log('31 days')
      break
    case 'april':
      console.log('30 days')
      break
    case 'june':
      console.log('30 days')
      break
    case 'september':
      console.log('30 days')
      break
    case 'november':
      console.log('30 days')
      break
    case 'february':
      let year = prompt("what is the year?: ")
      year = parseInt(year)
      if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
          console.log("29 days")
          break;
      }
      else {
          console.log("28 days")
          break;
      }
    default:
      console.log("invalid input")
      break;
  }
}
