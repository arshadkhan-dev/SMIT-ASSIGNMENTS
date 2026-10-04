// Operators and Expressions

// Arithmetic Operators
// Assignment Operators
// Comparison Operators
// Expressions
// Final Task

// Arithmetic Operators

let a = 10;
let b = 20;

// Addition (+)
let add = a + b;
console.log("The Sum is " + add);

// Subtraction (-)
let subtract = a - b;
console.log("The Subtraction is " + subtract);

// Division (/)
let division = a / b;
console.log("The Division is " + division);

// Multiplication (*)
let multiply = a * b;
console.log("Multiplication is " + multiply);

// Modulus Operator (%)
let reminder = 15 % 2;
console.log("The result is " + reminder);

// Assignment Operators

//  =
let number = 5;
console.log(number);

// +=
number += 3;
console.log(number);

// -=
number -= 2;
console.log(number);

// *=
number *= 3;
console.log(number);

// /=
number /= 3;
console.log(number);

// Comparison Operators
let num_1 = 10;
let num_2 = 12;

// Equal to (==) just check the value
console.log(num_1 == num_2);
console.log(5 == 5);
console.log(5 == "5");

// Strict Equal to (===) check both value and data type
console.log(num_1 === num_2);
console.log(5 === 5);
console.log(5 === "5");

// Not Equal (!)
console.log(num_1 != num_2);

// Greater Than (>)
if (num_1 > num_2) {
  console.log(`${num_1} is greater than ${num_2}`);
} else {
  console.log(`${num_2} is greater than ${num_1}`);
}

// Less Than (<)
if (num_1 < num_2) {
  console.log(`${num_1} is less than ${num_2}`);
} else {
  console.log(`${num_2} is less than ${num_1}`);
}

// Greater Than or Equal to (>=)
if (num_1 >= num_2) {
  console.log(`First number is greater or equal to second`);
} else {
  console.log(`first number is less than second one`);
}

// less Than or Equal to (<=)
if (num_1 <= num_2) {
  console.log(`First number is less or equal to second`);
} else {
  console.log(`first number is greater than second one`);
}

// Expressions

let price = 300;
let quantity = 5;

let total = price * quantity;
console.log("The Total Price is " + total);

let mark1 = 98;
let mark2 = 85;
let mark3 = 78;

let finalMarks = mark1 + mark2 + mark3;
console.log(finalMarks);

// Practice Task
// comparing a number and a string using == and ===

console.log(10 == "10");
console.log(10 === "10");

// == check only values
// === check both values and data types of both the values

// THE END
