let array =[0, 1];


for (let i = 2; i < 20; i++) {
  array.push(array[i] = array[i - 2] + array[i - 1])
  console.log(array)
}

console.log(array)
// What do you want the third number to be?
// Take the number two numbers before (0)
// Take the number one before (1)

// function fib (num) {
//   let array = [0, 1];
//   for (let i = 2; i < num; i++) {
//     array.push(array[i] = array[i - 2] + array[i - 1])
//   }
//   return array;
// }
