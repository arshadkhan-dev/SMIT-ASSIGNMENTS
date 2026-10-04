// Logical Operators

// logical AND  (&&)
// Task

let age = 20;
// let feePaid = false;
let feePaid = true;
if (age >= 18 && feePaid == true) {
  console.log("Allowed");
} else {
  console.log("Not Allowed");
}

// Logical OR (||)
// Task

let email = true;
let phoneNumber = false;

if (email || phoneNumber) {
  console.log("Login Seccessfully");
} else {
  console.log("Wrong email and phone number");
}

// Logical NOT (!)
// Task

let isBlocked = true;

if (!isBlocked) {
  console.log("Access Allowed");
} else {
  console.log("Access denied");
}

// Combining Logical Operators
// Task

let isLoggedin = true;
let isPremium = false;
let hasCoupon = true;

if (isLoggedin && (isPremium || hasCoupon)) {
  console.log("You get discount");
} else {
  console.log("No discount");
}

// Practice Task

// let value = 10;
let value = -10;
console.log(value >= 1 && value <= 100);
//  AND check if both the codition is true, it will print true otherwise false

let number = 20;
let name = "Ahmad";
// let name = "Ali";

if (name == "Ahmad" || age > 25) {
  console.log("Allowed");
} else {
  console.log("Not Allowed");
}
// OR check if one of all the condition is true, the result will be true otherwise false

// NOT:  it convert true to false and false to true
