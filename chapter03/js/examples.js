// JavaScript code goes here
// 1. Following day

//Write a program that accepts a day name from the user, then shows the name of the following day. Incorrect inputs must be taken into account.

// const day = prompt("Enter a day of the week:");
// if (day === "monday") {
//     console.log("Tomorrow is tuesday");
// } else if (day === "tuesday") {
//     console.log("Tomorrow is wednesday");
// } else if (day === "wednesday") {
//     console.log("Tomorrow is thursday");
// } else if (day === "thursday") {
//     console.log("Tomorrow is friday");
// } else if (day === "friday") {
//     console.log("Tomorrow is saturday");
// } else if (day === "saturday") {
//     console.log("Tomorrow is sunday");
// } else if (day === "sunday") {
//     console.log("Tomorrow is monday");
// } else {
//     console.log("Unrecognized day!");
// }

//with switch
// switch (day) {
//     case "monday":
//         console.log("Tomorrow is tuesday");
//         break;
//     case "tuesday":
//         console.log("Tomorrow is wednesday");
//         break;
//     case "wednesday":
//         console.log("Tomorrow is thursday");
//         break;
//     case "thursday":
//         console.log("Tomorrow is friday");
//         break;
//     case "friday":
//         console.log("Tomorrow is saturday");
//         break;
//     case "saturday":
//         console.log("Tomorrow is sunday");
//         break;
//     case "sunday":
//         console.log("Tomorrow is monday");
//         break;
//     default: 
//         console.log("Unrecognized day!");
// }

// 2. Number comparison

//Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases.
//accepts two nums
// const number1 = Number(prompt("Enter number 1:"));
// const number2 = Number(prompt("Enter number 2:"));
//compare their values
// if (number1 < number2) {
//     alert(`${number1} is less than ${number2}`);
// } else if (number1 > number2) {
//     alert(`${number1} is greater than ${number2}`);
// } else {
//     alert(`${number1} and ${number2} are equal`)
// }

//Final values
// let nb1 = Number(prompt("Enter nb1:"));
// let nb2 = Number(prompt("Enter nb2:"));
// let nb3 = Number(prompt("Enter nb3:"));

// if (nb1 > nb2) {
//     nb1 = nb3 * 2;
//   } else {
//     nb1++;
//     if (nb2 > nb3) {
//       nb1 += nb3 * 3;
//     } else {
//       nb1 = 0;
//       nb3 = nb3 * 2 + nb2;
//     }
//   }
//   console.log(nb1, nb2, nb3);

// nb1=nb2=nb3=4
// nb1 = 0
// nb2 = 4
// nb3 = 12

// nb1=4,nb2=3,nb3=2
// nb1 = 4
// nb2 = 3
// nb3 = 2

// nb1=2,nb2=4,nb3=0
// nb1 = 3
// nb2 = 4
// nb3 = 0

//Number of days in a month

//Write a program that accepts a month number (between 1 and 12), then shows the number of days of that month. Leap years are excluded. Incorrect inputs must be taken into account.

// const month = Number(prompt("Enter a month number:"));
//solution using if
// if (
//     month === 1 ||
//     month === 3 ||
//     month === 5 ||
//     month === 7 ||
//     month === 8 ||
//     month === 10 ||
//     month === 12
// ) {
//     alert("This month has 31 days");
// } else if (
//     month === 4 ||
//     month === 6 || 
//     month === 9 || 
//     month === 11
// ) { 
//     alert("This month has 30 days");
// } else if (month === 2) {
//     alert("This month has 28 days");
// } else {
//     alert("Unknown month!");
// }

//solution using a switch
// switch (month) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         alert("This month has 31 days");
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         alert("This month has 30 days");
//         break;
//     case 2:
//         alert("This month has 28 days");
//         break;
//     default:
//         alert("Unknown month!")
// }

//Following second
//Write a program that asks for a time under the form of three information (hours, minutes, seconds). The program calculates and shows the time one second after. Incorrect inputs must be taken into account.

//display the time one second later
let seconds = Number(prompt("Enter the seconds:"));

//we start by testing errors cases
if (
    hours >= 0 &&
    hours <= 23 &&
    minutes >= 0 &&
    minutes <= 59 &&
    seconds >= 0 &&
    seconds <= 59
) {
    seconds++; //incrementing the seconds
    if (seconds === 60) {
        //next minute: seconds are reset to 0
        seconds = 0;
        minutes++;
    if (minutes === 60) {
        //next hour: minutes are reset to 0
        minutes = 0;
        hours++;
    if (hours === 24) {
        //next second is midnight
        hours = 0;
        }
    }
}
    console.log (
        `In a second, time will be ${hours} hours, ${minutes} minutes et ${seconds} seconds`
    );
} else {
    console.log("Incorrect hour!");
}