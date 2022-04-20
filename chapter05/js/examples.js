// JavaScript code goes here

//1. Improved hello 

// Say hello to the user
// function sayHello(firstName, lastName) {
//     const message = `Hello, ${firstName} ${lastName}!`;
//     return message;
//   }
  
  // TODO: ask user for first and last name

  // TODO: call sayHello() and show its result

// Alternative solution using a function declaration
// function sayHello(firstName, lastName) {
//   return `Hello, ${firstName} ${lastName}!`;
// }

// const firstName = prompt("Enter your first name:");
// const lastName = prompt("Enter your last name:");
// console.log(sayHello(firstName, lastName));

  // Alternative solution using an arrow function
// const sayHello = (firstName, lastName) => `Hello, ${firstName} ${lastName}!`;

// const fn = prompt("Enter your first name:");
// const ln = prompt("Enter your last name:");
// alert(sayHello(fn, ln));


// 2. Number squaring
// Square the given number x
// function square1(x) {
    // TODO: complete the function code
    //return x * x;
 // };
  
  // Square the given number x
//  const square2 = x => x * x;
  
  //const square2 = x => {return x * x; 
  //Or: Math.pow(x,2);
  //};

 // console.log(square1(0)); // Must show 0
//  console.log(square1(2)); // Must show 4
 // console.log(square1(5)); // Must show 25

//console.log(square2(0)); // Must show 0
//console.log(square2(2)); // Must show 4
//console.log(square2(5)); // Must show 25

// When it's done, update the program so that it shows the square of every number between 0 and 10.

//3. Minimum of two numbers

// TODO: write the min() function

// function min(a, b) {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// };

// OR

// const min = (a, b) => {
//   if (a < b) {
//     return a;
//   } return b;
// };

// console.log(min(4.5, 5)); // Must show 4.5
// console.log(min(19, 9));  // Must show 9
// console.log(min(1, 1));   // Must show 1


// 4. Calculator - didn't work, will have to ask how to fix it

//function calculate(leftNumber, operation, rightNumber) {
  //return result;
 // }

//console.log(calculate(4, "+", 6));  // Must show 10
//console.log(calculate(4, "-", 6));  // Must show -2
//console.log(calculate(2, "*", 0));  // Must show 0
//console.log(calculate(12, "/", 0)); // Must show Infinity

//5. Circumference and area of a circle
// const circumference = radius => 2 * radius * Math.PI;

// const area = radius => Math.pow(radius, 2) * Math.PI;

// const r = Number(prompt("Enter the circle radius:"));
// console.log(`Its circumference is ${circumference(r)}`);

// console.log(2 ** 3); // 8: 2 * 2 * 2
// console.log(3 ** 2); // 9: 3 * 3

// OR 

// Alternative solution using a function declaration

// function circumference(radius) {
//     return 2 * radius * Math.PI;
// }

// function area(radius) {
//     return Math.pow(radius, 2) * Math.PI;
// }

// const r = Number(prompt("Enter the circle radius:"));
// console.log(`Its circumference is ${circumference(r)}`);

// console.log(2 ** 3); // 8: 2 * 2 * 2
// console.log(3 ** 2); // 9: 3 * 3