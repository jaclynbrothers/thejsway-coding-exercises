// JavaScript code goes here
// 1. Carousel
//Write a program that launches a carousel for 10 turns, showing the turn number each time.

//When it's done, improve it so that the number of turns is given by the user.

// const turnCount = Number(prompt("How many turns?"));

//solution using a for
// for (let turn = 1; turn <= turnCount; turn++) {
//     console.log(`This is turn number ${turn}`);
// }

// solution using a while
// let turn = 1;

// while (turn <= turnCount) {
//     console.log(`This is turn number ${turn}`);
//     turn++;
// }

// 2. Parity
//Show even and odd numbers
// const number = Number(prompt("Enter the starting number:"));

// Solution using a for
// for (let i = number; i < number + 10; i++) {
//     if (i % 2 === 0) {
//         console.log(`${i} is even`);
//     } else {
//         console.log(`${i} is odd`);
//     }

// Solution using a while
// let i = number;
// while (i < number + 10) {
//     if (i % 2 === 0) {
//         console.log(`${i} is even`);
//     } else {
//         console.log(`${i} is odd`);
//     }
//     i++;
// }

// 3. Input Validation
// Initial value set to enter the loop
// let number = 0;

// while ((number < 50) || (number > 100)) {number = Number(prompt("Enter a number between 50 and 100:"));
// }

// 4. Multiplication table
// let number = 0; // Initial value set to enter the loop

// while (number < 2 || number > 9) {
//     number = Number(prompt("Enter a number between 2 and 9:"));
//   }
  
//   console.log(`Here's the multiplication table for ${number}`);

// Solution using a for
/* for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
} */

// Solution using a while
/* let i = 1;
while (i <= 10) {
    console.log(`${number} x ${i} = ${number * i}`);
    i++;
} */

// 5. Yes or No
// Initial value set to enter the loop
// let input = "";

// while ((input !== "yes") && (input !== "no")) {
//     input = prompt("Do you want to play \"Neither yes, nor no\" with me?");
// }
//     alert("You just lost!");

// 6. FizzBuzz
// Solution using several if/else
// for (let number = 1; number <= 100; number++) {
//     if ((number % 3 === 0) && (number % 5 === 0))
//         console.log("FizzBuzz");
//     else if (number % 3 === 0)
//         console.log("Fizz");
//     else if (number % 5 === 0)
//         console.log("Buzz");
//     else
//         console.log(number);
// }

// Alternative solution building the message by concatenation
/* for (let number = 1; number <= 100; number++) {
  // Initial message is empty
let message = "";
  if (number % 3 === 0) {
    // Add "Fizz" to the message
    message += "Fizz";
  }
  if (number % 5 === 0) {
    // Add "Buzz" to the message
    message += "Buzz";
  }
  if (message === "") {
    // Empty message => the number is neither divisible by 3 nor by 5
    message = number;
  }
  console.log(message);
} */