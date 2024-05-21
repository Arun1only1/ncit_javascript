//? primitive data types => string, number, boolean, null, undefined

// ? non-primitive => object

// ? mutable => changeable
// ? immutable => unchangeable

// constant => which cannot be re-assigned
// ? primitive data types are immutable
// ? non-primitive data types are mutable

// const nation = 'Nepal';

// nation = 'India';

// console.log(nation);

const nationDetail = {
  name: 'Nepal',
  population: '3 crore',
  isDeveloping: true,
};

// nationDetail = {
//   name: 'India',
// };

nationDetail.name = 'India';
console.log(nationDetail);
