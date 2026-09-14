// Data types in JS
// Premitive data types
// string, number, boolean, null, undefined, symbol.

// String : store text in single quotes or double quotes
// Number : stores numeric values (integer,decimal,signed, unsigned)
// boolean: it holds true or false
// Symbol: it is used when variables are not equal.
// undefined : when a value is not assigned to a variable
// null : assigning null to a variable means a variable is empty.
// Type of a variable having stored null  is an object.

let Name = "Ahmad";
let age = 20;
let student = true;
let address;
let grade = null;
let sym = Symbol("Testing");

console.log(typeof Name);
console.log(typeof age);
console.log(typeof student);
console.log(typeof address);
console.log(typeof grade);
console.log(typeof sym);

// Types Conversion
console.log("");
console.log("Types Conversion".toUpperCase());
console.log("");
// String to Number
let str = "Apple";
console.log(str + ", type after conversion: " + typeof Number(str));

// Number to String
let value = 50;
console.log(value + ", type after conversion: " + typeof String(value));

// String to Boolean
let fruit = "Mango";
console.log(fruit + ", type after conversion: " + typeof Boolean(fruit));

// Important task

// let example_1 = "123";
// console.log(typeof example_1);
// // type is string
// console.log(typeof Number(example_1));
// // after conversion type is a number

// let example_2 = 0;
// console.log(typeof example_2);
// console.log(typeof Boolean(example_2));

// let example_3 = 1;
// console.log(typeof Boolean(example_3));
