// object => contains other primary data types
// complex data type

//object => key value pair

// student1

// let firstName = 'Rohan';
// let lastName = 'Bhandari';
// let email2 = 'rabin@gmail.com';
// let email = 'rohan@gmail.com';

// let student1 = {
//   firstName: 'Rohan',
//   lastName: 'Bhandari',
//   address: 'Baneswor',
//   email: 'rohan@gmail.com',
// };

// let student2 = {
//   firstName: 'Rabin',
//   lastName: 'Joshi',
//   address: 'Nakhipot',
//   email: 'rbn@gmail.com',
// };
// console.log(student1);

// ?CRUD
//? C => Create/Add
//? R => Retrieve/Read
//? U=> Update/Edit
//? D => Delete/Remove

// let animalDetails = {
//   name: 'Tiger',
//   avgAge: 30,
// };

// console.log(animalDetails);
// console.log(animalDetails);

// ? dot (.) operator
// ? square ([]) operator

// ? add
// animalDetails.weight = '200kg';
// animalDetails['weight'] = '300kg';

// ?read
// console.log(animalDetails.name);
// console.log(animalDetails['name']);
// console.log(animalDetails.avgAge);

// ? upsert (update or insert)
// ? update
// animalDetails.name = 'Lion';
// animalDetails['avgAge'] = 35;
// console.log(animalDetails);

// ? delete
// delete animalDetails.name;
// delete animalDetails['avgAge'];

//? =============== Example 2 ===================================

// ? nested object

// let studentDetails = {
//   firstName: 'Amisha',
//   lastName: 'K.C.',
//   address: {
//     permanent: 'A',
//     temporary: 'B',
//   },

//   isGraduated: false,
//   image: null,
// };

// studentDetails.address.temporary = 'Z';
// studentDetails.address.ghumnaJaneAddress = 'Pokhara';

// delete studentDetails.address.temporary;
// console.log(studentDetails);

// console.log(studentDetails.address.permanent);
// console.log(studentDetails['address']['permanent']);
// console.log(studentDetails.address['permanent']);
// console.log(studentDetails['address'].permanent);

//?  ==============example 3 ====================================

// let laptopDetails = {
//   name: 'GF63',
//   brand: 'MSI',
//   ram: 24,
//   ssd: 512,
// };

// let fieldName = 'ssd';

// console.log(laptopDetails[fieldName]);
