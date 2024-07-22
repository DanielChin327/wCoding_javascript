// # Exercises on Arrays

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// You will have to look up and read some of the methods that you can use on arrays.
// ### **Array Initialization and Basic Operations**

// - **Objective**: Create an array of numbers and perform basic operations.
// - **Instructions**:
//     1. Create an array of 5 numbers.
//     2. Add a new number to the end of the array.
//     3. Remove the first number from the array.
//     4. Calculate and print the sum of all numbers in the array.

const arrOfNum = [1,2,3,4,5]

arrOfNum.push(6)
console.log(arrOfNum)
arrOfNum.shift();
console.log(arrOfNum)

let sumArr = (arr) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i]
  }
  return result;
}

let sumArrv2 = (arr) => {
  let sum = 0;
  for (number of arr) {
    sum += number
  }
  return sum;
}

// ### **Array Filtering and Mapping**

// - **Objective**: Use array methods `filter` and `map`.
// - **Instructions**:
//     1. Create an array of 10 random integers.
//     2. Use `filter` to create a new array containing only even numbers.
//         1. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//     3. Use `map` to create a new array where each number is squared.
//         1. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

let arrOfNum2 = [13,12,52,27,19,29,12,18,19,25]

let evenNum = (arr) => {
  let resultArr = arr.filter((number) => {
    return number % 2 === 0
  })
  return resultArr;
}

let squareNum = (arr) => {
  let squaredArr = arr.map((number) => {
    return number * number;
  })
  return squaredArr;
}
// ### **Array Sorting and Reversing**

// - **Objective**: Sort and reverse an array.
// - **Instructions**:
//     1. Create an array of strings.
//     2. Sort the array alphabetically.
//     3. Reverse the sorted array.

const letters = ['a','p','p','l','e']

let sortArr = (str) => {
  let result = str.sort();
  return result;
}

let reverseSortArr = (str) => {
  let result = sortArr(str);
  return result.reverse();
}


// ### **2D Array Manipulation**

// - **Objective**: Work with a 2D array.
// - **Instructions**:
//     1. Create a 2D array (an array of arrays) representing a grid of numbers.
//     2. Print each row of the grid.
//     3. Calculate the sum of all elements in the grid.

// ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/97a49e10-c263-4b0e-8110-2e9e07526e7f/a770f05d-c8ab-4339-b1cd-241a84a3bdae/Untitled.png)

let arrOfArr = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

console.log(arrOfArr);

let sumGrid = (arr) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) { // each arr[i] is a separate array
    let rowSum = 0;
      for (let j = 0; j < arr[i].length; j++) {
        rowSum += arr[i][j];
      }
    result += rowSum
  }
  return result;
}




// # Exercises on Objects

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

// ### **Object Creation and Property Access**

// - **Objective**: Create an object and access its properties.
// - **Instructions**:
//     1. Create an object representing a book with properties: `title`, `author`, and `year`.
//     2. Access and print each property.

const bookOne = {
  title: 'Lord of the Rings',
  author: 'JR Tolkien',
  year: 1954
}

let printValues = (object) =>  {
  let result = [];
  for (let keys in object) {
    result.push(object[keys])
  }
  return result;
}

// ### **Object Methods**

// - **Objective**: Add methods to an object.
// - **Instructions**:
//     1. Create an object representing a person with properties: `firstName` and `lastName`.
//     2. Add a method to the object that prints a greeting message including the person's names together.

const personOne = {
  firstName: "Dan",
  lastName: "Chin",
  greetings: function() {
    console.log(`Hi there ${this.firstName} ${this.lastName}!`)
  }
}


// ## Exercises Combining Arrays and Objects

// ### **Array of Objects**

// - **Objective**: Create and manipulate an array of objects.
// - **Instructions**:
//     1. Create an array of 3 objects representing books, each with properties:
//         1. `title`, `author`, and `year`.
//     2. Print the titles and authors of all books using a loop.

const books = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    year: 1997
  }
];

let bookInfo = (arr) => {
  for (let i = 0; i < arr.length; i++) { // arr[i] are objects
    for(let keys in arr[i]){
      if (keys === 'title' || keys === 'author') {
        console.log(arr[i][keys])
      }
    }
  }
}
// ### **Object in an Array**

// - **Objective**: Modify objects within an array.
// - **Instructions**:
//     1. Create an array of objects where each object represents a product with properties:
//         1. `name`, `price`, and `quantity`.
//     2. Calculate and print the total value of each product (`price` multiplied by `quantity`).

const rpgProducts = [
  {
    name: "Potion",
    price: 100,
    quantity: 10
  },
  {
    name: "Antidote",
    price: 50,
    quantity: 5
  },
  {
    name: "Phoenix Down",
    price: 500,
    quantity: 2
  }
];

let totalCost = (arr) => {
  let result = 0;
  for (let products of arr) {
    let costs = 0;
    let price = 0;
    let quantity = 0;
    for (let keys in products) {
      if (keys === 'price') {
        price = products[keys] //Grab the Value
      }
      else if (keys === 'quantity') {
        quantity = products[keys] // Grab the Value
      }

    }
    costs = price * quantity
    result += costs
  }
  return result
}

console.log(totalCost(rpgProducts))

// ### Object in an Array in an Object + Methods

// **Objective**: Work with nested objects.

// - **Instructions**:
//     1. Create an object representing a `student` with properties: `name`, `age`, and `grades`
//         1. where `grades` is an array filled with at least 4 `subject`objects
//             1. where each `subject`has a name and a score as a %.
//     2. Access and print the student's grades, showing each subject and its score.
//     3. Create a method for the `student`that calculates and displays their average score.
