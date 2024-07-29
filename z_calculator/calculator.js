const arithmeticOperations = {
  add: function(num1, num2) {
    return num1 + num2;
  },
  subtract: function(num1, num2) {
    return num1 - num2;
  },
  multiply: function(num1, num2) {
    return num1 * num2;
  },
  divide: function(num1, num2) {
    if (num2 === 0) {
      return "Error: Division by zero";
    }
    return num1 / num2;
  }
};

// Example usage:
console.log(arithmeticOperations.add(10, 5)); // Output: 15
console.log(arithmeticOperations.subtract(10, 5)); // Output: 5
console.log(arithmeticOperations.multiply(10, 5)); // Output: 50
console.log(arithmeticOperations.divide(10, 5)); // Output: 2
console.log(arithmeticOperations.divide(10, 0)); // Output: Error: Division by zero
