// Task 1 - Employee Name

let empName = prompt("Enter Employee Name");

console.log("Employee Name : " + empName);

document.writeln("Welcome " + empName);
document.writeln("<br><br>");

// Task 2 - Company Entry Confirmation

let answer = confirm("Are you ready to join today's JavaScript training?");

console.log(answer);

// Task 3 - Customer Greeting

alert("Welcome to Stackly Solutions!");

console.log("Customer entered the website.");

// Task 4 - Student Details

let sName = prompt("Enter Student Name");
let sAge = prompt("Enter Student Age");

console.log("Student Name : " + sName);
console.log("Student Age : " + sAge);

// Task 5 - Product Price

let productprice = 500
productprice = 750

console.log("Updated Price : " + productprice);

// Task 6 - Login Validation

let user = prompt("Enter Username");

if (user == "") {
    console.warn("Warning : Username is empty.");
}
else {
    console.log("Login Successful : " + user);
}

// Task 7 - Website Maintenance

alert("Website is under maintenance.");

console.error("Error : Website is currently unavailable.");

// Task 8 - Feedback Collection

let review = prompt("How was today's JavaScript session?");

console.log("Feedback : " + review);

document.writeln("Thank you for your feedback!");
document.writeln("<br><br>");

// Task 9 - Profile Information

let userName = prompt("Enter Your Name");
let userCity = prompt("Enter Your City");
let favLanguage = prompt("Enter Your Favorite Programming Language");

console.log("Name : " + userName);
console.log("City : " + userCity);
console.log("Favorite Language : " + favLanguage);

// Task 10 - Mini Registration Form

let regName = prompt("Enter Full Name");
let regEmail = prompt("Enter Email");
let regMobile = prompt("Enter Mobile Number");

console.log("===== Registration Details =====");
console.log("Name   : " + regName);
console.log("Email  : " + regEmail);
console.log("Mobile : " + regMobile);

alert("Registration Successful!");