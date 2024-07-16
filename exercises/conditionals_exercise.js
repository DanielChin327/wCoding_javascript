
// ### Challenges

// Here is a list of challenges you can attempt in order to show your understanding.

// - Remember to use the console log to display each message.
// - Remember to comment out previous working challenges so you don’t have to run through the inputs of EVERY challenge.
// - Don’t forget to parseInt()/parseFloat() when we need an integer or Float!
// 1. **Check if a number is positive:**
//     - Prompt the user to enter a number.
//     - Display a message indicating whether the number is positive or not.
// 2. **Check if a number is even or odd:**
//     - Prompt the user to enter a number.
//     - Display a message indicating whether the number is even or odd.
// 3. **Compare two numbers:**
//     - Prompt the user to enter two numbers.
//     - Display a message indicating which number is larger or if they are equal.
// 4. **Check if a number is between two bounds:**
//     - Prompt the user to enter a number.
//     - Check if the number is between 10 and 20 (inclusive).
//     - Display a message accordingly.
// 5. **Calculate and display grade based on percentage:**
//     - Prompt the user to enter a percentage score (0-100).
//     - Determine and display the corresponding letter grade based on the following scale:
//         - 90-100: A
//         - 80-89: B
//         - 70-79: C
//         - 60-69: D
//         - Below 60: F
// 6. **Determine eligibility for discount:**
//     - Prompt the user to enter their age and whether they are a student (true/false).
//     - If the person is under 18 or a student, offer a discount (display a message).
// 7. **Check eligibility for a driving license:**
//     - Prompt the user to enter their age.
//     - Display a message indicating if they are eligible for a driving license (age >= 18).
// 8. **Calculate total cost based on quantity and discount:**
//     - Prompt the user to enter the quantity of a product and whether they have a coupon (true/false).
//     - Calculate the total cost:
//         - If quantity > 10 and has a coupon, apply a 10% discount.
//         - Otherwise, display the total cost without discount.
// 9. **Check validity of a password:**
//     - Prompt the user to enter a password.
//     - Validate the password:
//         - Minimum length should be 8 characters.
//         - Should contain at least one uppercase letter and one digit.
//         - Display a message indicating if the password is valid or not.
// 10. **Determine eligibility for a loan:**
//     - Prompt the user to enter their income and credit score.
//     - Determine if they are eligible for a loan based on the following conditions:
//         - Income > $50,000 and Credit Score > 700.
// 11. **Validate a date input:**
//     - Prompt the user to enter a date in MM/DD/YYYY format.
//     - Validate if the input is a valid date (consider leap years and month lengths).
// 12. **Check multiple conditions with logical operators:**
//     - Prompt the user to enter their age and whether they have a valid ID (true/false).
//     - Determine if they can enter a restricted area:
//         - Age >= 21 AND has a valid ID.
// 13. **Calculate income tax based on income bracket:**
//     - Prompt the user to enter their annual income.
//     - Calculate and display the income tax based on progressive tax brackets:
//         - 0-10,000: 0% tax
//         - 10,001-50,000: 10% tax
//         - Above 50,000: 20% tax
// 14. **Determine eligibility for a scholarship:**
//     - Prompt the user to enter their GPA and whether they have extracurricular activities (true/false).
//     - Determine if they are eligible for a scholarship based on the following conditions:
//         - GPA >= 3.5 OR has extracurricular activities.
// 15. **Check validity of a credit card number:**
//     - Prompt the user to enter a credit card number.
//     - Validate if the input is a valid credit card number using Luhn algorithm.
// 16. **Check if a number is positive or negative using a ternary operator:**
//     - Prompt the user to enter a number.
//     - Use a ternary operator to display "Positive" if the number is greater than zero, otherwise "Negative".
// 17. **Determine eligibility for a discount using a ternary operator:**
//     - Prompt the user to enter their age.
//     - Use a ternary operator to display "Eligible" if age >= 60, otherwise "Not eligible".
// 18. **Calculate discounted price using a ternary operator:**
//     - Prompt the user to enter the original price of a product and whether they have a coupon (true/false).
//     - Use a ternary operator to calculate and display the discounted price:
//         - If has coupon, apply a 10% discount; otherwise, display the original price.
// 19. **Check eligibility for a job interview using a ternary operator:**
//     - Prompt the user to enter their qualifications (true/false) and years of experience.
//     - Use a ternary operator to determine and display "Qualified" if qualifications are true and experience >= 3, otherwise "Not qualified".
// 20. **Validate user input using ternaries:**
//     - Prompt the user to enter a number.
//     - Use ternary operators to validate and display "Valid" if the input is a number, otherwise "Invalid".
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
// 1. **Classify a triangle based on side lengths:**
//     - Prompt the user to enter three side lengths of a triangle.
//     - Use nested `if` statements to classify and display the type of triangle based on the following conditions:
//         - Equilateral triangle (all sides are equal).
//         - Isosceles triangle (exactly two sides are equal).
//         - Scalene triangle (all sides are different).
//         - Not a triangle (sum of any two sides is less than or equal to the third side).
//         2. **Determine eligibility for a job based on qualifications and experience:**
//     - Prompt the user to enter their qualifications ("Bachelor's", "Master's", "PhD") and years of experience.
//     - Use nested `if` statements to determine and display eligibility for a job based on the following conditions:
//         - PhD with >= 5 years experience: "Eligible for Senior Role"
//         - Master's with 3-5 years experience: "Eligible for Mid-level Role"
//         - Bachelor's with < 3 years experience: "Eligible for Entry-level Role"
//         - Otherwise: "Not Eligible"
// 3. **Translate a day of the week into a language:**
//     - Prompt the user to enter a day of the week ("Monday" to "Sunday").
//     - Use a `switch` statement to translate and display the day of the week in another language (e.g., English to Spanish):
//         - Monday -> Lunes
//         - Tuesday -> Martes
//         - Wednesday -> Miércoles
//         - Thursday -> Jueves
//         - Friday -> Viernes
//         - Saturday -> Sábado
//         - Sunday -> Domingo
// 4. **Determine the number of days in a month:**
//     - Prompt the user to enter a month (1-12 representing January to December).
//     - Use a `switch` statement to determine and display the number of days in the entered month.
//         - January, March, May, July, August, October, December -> 31 days
//         - April, June, September, November -> 30 days
//         - February -> 28 days
//             - Take it to the next level by also prompting the year for February ONLY
//                 - if it is a leap year display 29 days

// 1. Go back through your challenges, and see if you can add `typeof` or `isNaN()` (is not a number) check if statements to inputs to see if they have inputted any invalid types. Though normally you will actually use the `try/catch error` handling.
