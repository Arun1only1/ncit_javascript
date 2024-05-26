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

// ? find machines whose price is greater than 900

// const newList = washingMachineList.filter((item, index, array) => {
//   return item.price > 900;
// });

// console.log(newList);
// ? find machine whose brand is Whirlpool
// const requiredMachine = washingMachineList.find((item, index, array) => {
//   return item.brand === 'Whirlpool';
// });

// console.log(requiredMachine);

// ? decrease price of Samsung machine by 15% as festival discount

const newList = washingMachineList.map((item, index, self) => {
  if (item.brand === 'Samsung') {
    return {
      brand: item.brand,
      price: item.price - (15 / 100) * item.price,
    };
  }

  return item;
});

console.log(newList);
