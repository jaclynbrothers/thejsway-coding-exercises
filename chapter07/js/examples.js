// JavaScript code goes here
// 1. Musketeers
// Write a program that:

// Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
// Shows each array element using a for loop.
// Adds the "D'Artagnan" value to the array.
// Shows each array element using the forEach() method.
// Remove poor Aramis.
// Shows each array element using a for-of loop.

// // Solution

// const musketeers = ["Athos", "Porthos", "Aramis"];

// console.log("Here are the three musketeers:");
// for (let i = 0; i < musketeers.length; i++) {
//   console.log(musketeers[i]);
// }

// musketeers.push("D'Artagnan");
// console.log("Now there are four of them:");
// musketeers.forEach(musketeer => {
//   console.log(musketeer);
// });

// musketeers.splice(2, 1);
// console.log("Poor Aramis has died!");
// for (const musketeer of musketeers) {
//   console.log(musketeer);
// }

// 2. Sum of values
// Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).

// const values = [3, 11, 7, 2, 9, 10];

// Solution

// let sum = 0;

// Solution using a for-of loop
// for (const value of values) {
//   sum += value;
// }

// Solution using a forEach method
/*values.forEach(value => {
    sum += value;
});*/

// console.log(sum); 

// 3. Array maximum
// Write a program that creates the following array, then calculates and shows the array's maximum value.

// const values = [3, 11, 7, 2, 9, 10];

// Solution

// const values = [3, 11, 7, 2, 9, 10];

// let max = values[0];

// // First index is 1 since max is initialized with value at index 0
// for (let i = 1; i < values.length; i++) {
//   if (values[i] > max) {
//     max = values[i];
//   }
// }

// console.log(max); 

// 4. List of words
// Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".

// Solution

const words = [];

let word = "";
while (word !== "stop") {
    word = prompt("Enter a word or stop to quit:");
    if (word !== "stop") {
        words.push(word);
    }
}

console.log("You have entered the following words:");
words.forEach(word => {
    console.log(word);
});