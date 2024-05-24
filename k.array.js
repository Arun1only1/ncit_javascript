// array => collection of data
//  can contain mixed data types

// ? static language => array is collection of similar typed data

// ?dynamic language => array is collection of mixed data type

// let temperatureList = [4, 15, 28, 32, 20, 15];

// console.log(typeof temperatureList);

// let mixedArray = [
//   1,
//   'nepal',
//   true,
//   0,
//   null,
//   undefined,
//   { name: 'Rakesh' },
//   [1, 2, 3],
// ];

// console.log(mixedArray);
// console.log(typeof mixedArray);

let students = ['Rohan', 'Milan', 'Aayush', 'Nabina', 'Reena', 'Prajita'];

// console.log(students);
// ? array has index as key
// ? index always starts with zero
// ? order is preserved in array

// ? to get length of array
// console.log(students.length);

// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);
// console.log(students[3]);
// console.log(students[4]);
// console.log(students[5]);

// for (let i = 0; i <= students.length - 1; i++) {
//   console.log(students[i]);
// }

// ? array methods

// ? push, pop, shift ,unshift,reverse,sort

let numList = [200, 300, 500];

// ? push => to add items to end of array
// numList.push(700);

// ? pop => removes last item from array
// numList.pop();

// ? shift => removes first item from array
// numList.shift();

// ? unshift => to add items to start of array
// numList.unshift(50, 100);

// ? reverse => reverses order of array
// numList.reverse();

// ? more methods
// ? array  loop
// ? map, filter, find, reduce

// const priceList = [100, 200, 300, 400, 500];

// ? map
// ? returns new array
// ? original array size === returned array size
// ? to change array data

// const newPriceList = priceList.map((item, index, array) => {
//   return item + 50;
// });

// console.log(newPriceList);

// const words = ['apple', 'ball', 'cat'];

// const newWords = words.map((item, index, array) => {
//   const upperCaseWord = item.toUpperCase();

//   return upperCaseWord;
// });

// console.log(newWords);

const washingMachineList = [
  {
    brand: 'LG',
    price: 999,
  },

  {
    brand: 'Samsung',
    price: 899,
  },

  {
    brand: 'Whirlpool',
    price: 1199,
  },
];
// ? increase price of each item by 50
const newList = washingMachineList.map((item, index, array) => {
  let newPrice = item.price + 50;

  return { brand: item.brand, price: newPrice };
});

console.log(newList);
