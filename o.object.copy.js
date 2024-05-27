// ? object copy

// let x = 5;

// let y = x;

// x = 7;
// console.log(y);

// ? object

let studentDetails = {
  fName: 'Sushil',
  lName: 'Mishra',
  address: {
    permanent: 'A',
  },
};

// ? shallow copy (= , spread)
// let studentDetails2 = studentDetails;

// studentDetails2.fName = 'Rabin';
// console.log(studentDetails);

// ?  ...
// ? spread operator

// let studentDetails2 = { ...studentDetails };

// studentDetails2.address.permanent = 'B';
// console.log(studentDetails);

// ? structuredClone
// ? deep copy
// let studentDetails2 = structuredClone(studentDetails);

// studentDetails2.address.permanent = 'Z';
// console.log(studentDetails);
