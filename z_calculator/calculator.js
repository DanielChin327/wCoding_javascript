let operator = ''
let previousValue = ''
let currentValue = ''
let lastOperator = ''

document.addEventListener('DOMContentLoaded', () => {
  const screen = document.querySelector('.screen');

  // Select all the buttons
  const buttons = document.querySelectorAll('.btn');
  const numbers = document.querySelectorAll('.number');
  const operators = document.querySelectorAll('.operator');
  const clear = document.querySelector('.clear');
  const decimal = document.querySelector('.decimal');
  const negative = document.querySelector('.negative');
  const percentage = document.querySelector('.percentage');
  const equal = document.querySelector('.equal');

  // Add event listeners to number buttons
  numbers.forEach((number) => {
    number.addEventListener('click', function (e) {
      handleNumber(e.target.textContent);
      screen.textContent = currentValue; // Update screen with current value
    });
  });

  // Add event listeners to operator buttons
  operators.forEach((op) => op.addEventListener('click', function (e) {
    handleOperator(e.target.textContent);
    screen.textContent = previousValue + ' ' + operator; // Display previous value and operator on the screen
  }));

  // Add event listener to decimal button
  decimal.addEventListener('click', function (e) {
    if (!currentValue.includes('.')) {
      handleNumber(e.target.textContent);
      screen.textContent = currentValue; // Update screen with current value
    }
  });

  // Add event listener to clear button
  clear.addEventListener('click', function () {
    clearScreen();
    screen.textContent = '0'; // Reset screen to 0
  });

  // Add event listener to equal button
  equal.addEventListener('click', function () {
    if (currentValue !== '' && previousValue !== '') {
      calculate();
      screen.textContent = currentValue; // Display the result
      previousValue = currentValue; // Reset previous value
      currentValue = ''; // Reset current value to allow chaining
      operator = ''; // Reset operator
    }
  });

  // Add event listener to negative button
  negative.addEventListener('click', function () {
    if (currentValue !== '') {
      currentValue = (parseFloat(currentValue) * -1).toString(); // Flip the sign
      screen.textContent = currentValue; // Update screen with current value
    } else if (previousValue !== '' && currentValue === '') {
      previousValue = (parseFloat(previousValue) * -1).toString(); // Flip the sign of previous value if no current value
      screen.textContent = previousValue; // Update screen with previous value
    }
  });

  // Add event listener to percentage button
  percentage.addEventListener('click', function () {
    if (currentValue !== '') {
      currentValue = (parseFloat(currentValue) / 100).toString(); // Convert to percentage
      screen.textContent = currentValue; // Update screen with current value
    } else if (previousValue !== '' && currentValue === '') {
      previousValue = (parseFloat(previousValue) / 100).toString(); // Convert previous value to percentage if no current value
      screen.textContent = previousValue; // Update screen with previous value
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Backspace') {
        // Your code to handle the Backspace key press
        if (currentValue.length == 1) {
          currentValue = 0
          screen.textContent = 0
        }
        else if (currentValue !== 0 || currentValue != '') {
          currentValue = currentValue.toString();
          let currentValueArr = currentValue.split('')
          currentValueArr.pop();
          let result = currentValueArr.join('')
          screen.textContent = parseInt(result)
          currentValue = result;
        }
        else {
          event.preventDefault(); // Prevent default action if no other condition is met
        }
    }
  });

  // FUNCTIONS

  // Function to handle number input
  function handleNumber(num) {
    currentValue += num; // Append the number to currentValue
  }

  // Function to handle operator input
  function handleOperator(op) {
    if (currentValue === '' && previousValue === '') {
      return; // If both currentValue and previousValue are empty, do nothing
    }
    if (currentValue === '' && previousValue !== '') {
      operator = op; // If currentValue is empty but previousValue is not, just change the operator
      screen.textContent = previousValue + ' ' + operator; // Display previous value and new operator
      return;
    }
    if (previousValue !== '') {
      calculate(); // Perform any pending calculations
      screen.textContent = currentValue; // Display intermediate result
    }
    operator = op; // Store the new operator
    previousValue = currentValue; // Move current value to previousValue
    currentValue = ''; // Reset currentValue
    screen.textContent = previousValue + ' ' + operator; // Display previous value and operator on the screen
  }

  // Function to clear the screen and reset values
  function clearScreen() {
    currentValue = ''; // Reset currentValue
    previousValue = ''; // Reset previousValue
    operator = ''; // Reset operator
  }

  // Function to perform calculation
  function calculate() {
    let result;
    const prev = parseFloat(previousValue); // Convert previousValue to float
    const current = parseFloat(currentValue); // Convert currentValue to float

    // Perform calculation based on the operator
    if (operator === '+') {
      result = prev + current;
    } else if (operator === '-') {
      result = prev - current;
    } else if (operator === 'x') {
      result = prev * current;
    } else if (operator === '/') {
      result = prev / current;
    } else {
      return;
    }

    currentValue = result.toString(); // Convert result to string
    previousValue = ''; // Reset previous value
    operator = ''; // Reset operator
  }
});
