//  practic =1
// <--------><--------->
// let randomNumber = Math.floor(Math.random() * 100) + 1;

// console.log(randomNumber);

// --------++++-------------------------------->>>>>
// practic = 2
//          <-------><---------->

//   let min = parseInt(document.getElementById('min').value);
//   let max = parseInt(document.getElementById('max').value);

//   if (isNaN(min) || isNaN(max) || min > max) {
//    document.getElementById('result').innerText = 'Please enter valid numbers, with min less than or equal to max.';
//   return;
//     }

// let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
// document.getElementById('result').innerText = 'Random Number: ' + randomNumber;

// <-------><-----------------><----------------><---------------------------->
// practic = 3
// < --------------->< ------------------>

//   let randomNumber = Math.floor(Math.random() * 2);
//   let result = randomNumber === 0 ? "Heads" : "Tails";

// document.getElementById('result').innerText = result;
// <----------><-----------------><---------------->
// practic = 4
//         <------------------><------------------->
// let str = "123";
// let integerValue = parseInt(str);
// console.log(integerValue);

// <----------------><------------------->

// practic = 5

// let str = "123.45";

// let decimalValue = parseFloat(str);

// console.log(decimalValue);

// <-------><-------------------->
// practic = 6

// if (input.includes('.')) {
//     return parseFloat(input);
// } else {
//     return parseInt(input, 10);
// }

// <---------------------><-------------->
// practic = 7

// let str = "123";
// let numberValue = parseInt(str, 10);
// console.log(numberValue);
// <---------------------><----------------------->
// practics = 8
// function convert(input) {
//   if (typeof input === "string") {
//     // Convert string to number
//     let number = parseFloat(input);
//     if (isNaN(number)) {
//       return "Invalid number string";
//     }
//     return number;
//   } else if (typeof input === "number") {
//     // Convert number to string
//     return input.toString();
//   } else {
//     return "Input must be a string or number";
//   }
// }
// < --------------------------------->< -------------------->
// let number = 123.45678;
// let formattedNumber = number.toFixed(2);
// console.log(formattedNumber);
// <---------------------------><------------------------------->
// let number = 123.45678;
// let formattedNumber = number.toFixed(4);
// console.log(formattedNumber);
// <------------------------><---------------------->
// let number = 123.45678;
// let formattedNumber = number.toFixed(4);
// console.log(formattedNumber);
// <-------------------------><----------------------------->
// function formatNumber(number, decimalPlaces) {
//   if (
//     typeof number !== "number" ||
//     typeof decimalPlaces !== "number" ||
//     decimalPlaces < 0
//   ) {
//     return "Invalid input: Please provide a valid number and a non-negative integer for decimal places.";
//   }

//   return number.toFixed(decimalPlaces);
// }

// console.log(formatNumber(123.45678, 2));
// console.log(formatNumber(123.45678, 4));
// console.log(formatNumber(123.45678, 0));
// console.log(formatNumber(123.45678, -1));
// console.log(formatNumber("123.45678", 2));
// <-------------------------------------><------------------------------->
// let currentDate = new Date();
// console.log(currentDate);
// <_---------------------------------></_--------------------------------->
// function getCurrentDateTimeFormatted() {
//   let currentDate = new Date();

//   let year = currentDate.getFullYear();
//   let month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
//   let day = currentDate.getDate().toString().padStart(2, "0");

//   let hours = currentDate.getHours().toString().padStart(2, "0");
//   let minutes = currentDate.getMinutes().toString().padStart(2, "0");
//   let seconds = currentDate.getSeconds().toString().padStart(2, "0");

//   return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
// }

// console.log(getCurrentDateTimeFormatted());
// <_------------------------------------------><</_------------------------------------------>
// function getCurrentDateTime() {
//   let currentDate = new Date();

//   let year = currentDate.getFullYear();
//   let month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
//   let day = currentDate.getDate().toString().padStart(2, "0");

//   let hours = currentDate.getHours().toString().padStart(2, "0");
//   let minutes = currentDate.getMinutes().toString().padStart(2, "0");
//   let seconds = currentDate.getSeconds().toString().padStart(2, "0");

//   return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
// }

// let currentDateTime = getCurrentDateTime();
// console.log(currentDateTime);
// <-------------------------------><------------------------------------>
// function calculateAge(birthdate) {
//   let birthDate = new Date(birthdate);
//   let today = new Date();

//   let yearsDifference = today.getFullYear() - birthDate.getFullYear();
//   let monthsDifference = today.getMonth() - birthDate.getMonth();
//   let daysDifference = today.getDate() - birthDate.getDate();

//   // Adjust yearsDifference if the current month and day are before the birth month and day
//   if (monthsDifference < 0 || (monthsDifference === 0 && daysDifference < 0)) {
//     yearsDifference--;
//   }

//   return yearsDifference;
// }

// // Example usage
// let birthdate = '1990-07-16'; // YYYY-MM-DD format
// let age = calculateAge(birth
// <------------------------------------------><--------------------------------->
