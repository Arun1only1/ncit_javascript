// function
// block of code organized together to perform specific action

//  to make code reusable and less redundant
// DRY => Do not Repeat Yourself

// ?syntax

// function function_name() {
// some code here
// }

// function addNumbers(num1, num2) {
//   let sum = num1 + num2;

//   return sum;
// }

// let a = addNumbers(9, 2);

// console.log(a);
// ? hoisting => pull up

// sayHello();

// function sayHello() {
//   console.log('Hello');
// }
// var x;
// console.log(x);
// x = 5;

// console.log(x);
// let x = 5;

// ? arrow function

// const greetUser = (userName) => {
//   console.log(`Good afternoon ${userName}`);
// };

// greetUser('Enish');

// const calculateProduct = (x, y) => {
//   let product = x * y;

//   return product;
// };

// const result = calculateProduct(5, 6);
// console.log(result);

// ? WAF that calculates whether given number is odd or even

// const checkOddEven = (num) => {
//   let remainder = num % 2;

//   let result;

//   if (remainder === 0) {
//     result = 'even';
//   } else {
//     result = 'odd';
//   }

//   return result;
// };

// const result = checkOddEven(50);
// console.log(result);

// WAF that returns division result

// const doDivide = (x, y) => x / y;

// const division = doDivide(10, 5);
// console.log(division);

// const checkOddEven = (num) => (num % 2 === 0 ? 'even' : 'odd');

// const result = checkOddEven(201);
// const result2 = checkOddEven(500);

// console.log(result, result2);

// ? WAF that accepts first name and last name as input
// ? and returns full name

const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;

const result = getFullName('Ram', 'Yadav');
console.log(result);
