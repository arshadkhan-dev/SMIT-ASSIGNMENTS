// Switch Statement

// Employ Role Access System

let role = prompt("Enter your role: (admin/ manager/ developer/ intern)");

switch (role) {
  case "admin":
    alert("Full system access");
    break;
  case "manager":
    alert("Team management access");
    break;
  case "developer":
    alert("Code access");
    break;
    c;
  case "intern":
    alert("Limited access");
    break;
  default:
    alert("invalid input, please try again");
}

// online payment method selection

let paymentMethod = prompt(
  "Enter your payment method: (cridit/ debit/ upi/ cod)",
);

switch (paymentMethod) {
  case "cridit":
    alert("You choose cridit");
    break;
  case "debit":
    alert("You choose debit");
    break;
  case "upi":
    alert("You choose upi");
    break;
  case "cod":
    alert("You choose cod");
    break;
  default:
    alert("invalid input, please try again");
}

// Order status checker

let orderStatus = prompt(
  "Enter order status(placed/ packed/ shipped/ delivered/ cancelled",
);

switch (orderStatus) {
  case "placed":
    alert("Your order has placed");
    break;
  case "packed":
    alert("Your order has packed");
    break;
  case "shipped":
    alert("Your order has shipped");
    break;
  case "delivered":
    alert("Your order has delivered");
    break;
  default:
    alert("invalid input, please try again");
}

// Office working day checker

let day = prompt("Enter day name(Monday - Sunday)");

switch (day) {
  case "monday":
    alert("Working day");
    break;
  case "tuesday":
    alert("Working day");
    break;
  case "wednesday":
    alert("Working day");
    break;
  case "saturday":
    alert("Working day");
    break;
  case "friday":
    alert("Halfday");
    break;
  case "saturday":
    alert("Holy day");
    break;
  case "sunday":
    alert("Holy day");
    break;
  default:
    alert("invalid day, please try again");
}
