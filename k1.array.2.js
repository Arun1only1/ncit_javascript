// filter
//  loop
// ? returns new array
// ? more possibility that original array size and
// ? returned array size is different

// ? function => filters out items

// const priceList = [45, 55, 65, 75, 85, 95, 105];

// const newPriceList = priceList.filter((item, index, array) => {
//   return item > 60;
// });

// console.log(newPriceList);

//?  example 2
// const numList = [52, 63, 75, 89, 91, 103, 204, 500];

// ? only even numbers from numList array

// const newNumList = numList.filter((item, index, self) => {
//   let remainder = item % 2;

//   if (remainder === 0) {
//     return item;
//   }
// });

// const newNumList2 = numList.filter((element) => element % 2 === 0);

// console.log(newNumList2);

// ? find
// ? loop
// ? find return value
// ? function => to find specific value

// const numList = [52, 63, 75, 89, 91, 103, 204, 500];

// const value = numList.find((item, index, array) => {
//   if (item === 91) {
//     return item;
//   }
// });

// const value2 = numList.find((item) => item === 204);
// console.log(value);

// const sthg = [10, 0, 45, 65];

// const value = sthg.find((item) => {
//   return item === 0;
// });

// console.log(value);

// ? reduce

// ?forEach
// ? loop
// ? does not return anything

// const mileageList = [45, 35, 50, 20, 11, 6];

// let total = 0;

// mileageList.forEach((item, index, array) => {
//   total = total + item;
// });

// console.log(total);

// const mileageList = [45, 35, 50, 20, 11, 6];

// ? reduce
// const value = mileageList.reduce((total, item, index, self) => {
//   return total + item;
// }, 0);

// console.log(value);

// ? sort

// const nameList = [
//   'Sushil',
//   'Naresh',
//   'Yunika',
//   'Shreya',
//   'Rajiv',
//   'Raj Dev',
//   'Naresh',
// ];

// const sortedArray = nameList.toSorted();

// console.log(sortedArray);
// nameList.sort().reverse();
// console.log(nameList);

const marks = [45, 55, 75, 28, 32, 11, 101, 200, 20];

// ? a-b => ascending sort
// ? b-a => descending sort

marks.sort((a, b) => {
  return b - a;
});

console.log(marks);
