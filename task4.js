
// Task 1 - Comapny Welcome Function

    function welcome() {
        console.log("Welcome to Stackly IT");
}
welcome();


// Task 2 - Employee Details

    function employee(name, department, salary) {
        console.log("Employee Name :", name);
        console.log("Department :", department);
        console.log("Salary :", salary);
}
employee("Naveen", "Developer", 30000);


// Task 3 - Calculate Bonus

    function bonus(salary, bonusAmount) {
        console.log("Total Salary :", salary + bonusAmount);
}
bonus(40000, 5000);


// Task 4 - Student Result

    function result(marks) {
        if (marks >= 35) {
            console.log("Pass");
        }
        else {
            console.log("Fail");
        }
}
result(35);


// Task 5 - Return Employee Name

    function employeeName() {
    return "Gokul";
}
let name = employeeName();
    console.log(name);


// Task 6 - Product price 

    function price() {
    return 25000;
}

let productPrice = price();

let gst = productPrice * 18 / 100;

    console.log("Price :", productPrice);
    console.log("GST :", gst);
    console.log("Total :", productPrice + gst);


//  Task 7 - Scope

    function demo(){

    if(true){
        var a = 10;
        let b = 20;
        const c = 30;
            console.log(b);
            console.log(c);
    }
        console.log(a);
}
demo();


// Task 8 - Hoisting

    console.log(a);
    var a = 100;

        // OP : undefined

    // console.log(b);
    // let b = 200;

        // OP : ReferenceError: Cannot access 'b' before initialization



// Task 9 - Named Function

    function morning() {
        console.log("Good Morning");
}
morning();


// Task 10 - Anonymous Function

    let afternoon = function() {
        console.log("Good Afternoon");
}   
afternoon();


// Task 11 - Arrow Function

    let evening = () => {
        console.log("Good Evening");
}
evening();


// Task 12 - Return Function

    function company() {
        return "Stackly IT";
}
let print = company();
    console.log("Welcome", print);


// Task 13 - Higher Order Function

    function dashboard() {
        console.log("Dashboard Loaded");
    }
    
    function login(callback) {
        console.log("Login Successful");
        callback();
    }
login(dashboard);


// Task 14 - Callback Function

    function delivered(){
        console.log("Delivered");
    }

    function preparing(callback){
        console.log("Preparing Food");
        callback();
    }

    function order(callback){
        console.log("Order Received");
        callback(delivered);
    }

    order(preparing);


// Task 15 - Generator Function

    function* coupon() {

        yield "10% OFF";
        yield "20% OFF";
        yield "30% OFF";
        yield "Better Luck Next Time";
    }

    let offer = coupon();

        console.log(offer.next().value);
        console.log(offer.next().value);
        console.log(offer.next().value);
        console.log(offer.next().value);


// Task 16 - Return + Generator

    function* fruits() {
        yield "Apple";
        yield "Orange";
        yield "Banana";
    }

    let fruit = fruits();

        console.log(fruit.next().value);
        console.log(fruit.next().value);
        console.log(fruit.next().value);


// Task 17 - Currying

function discount(price) {
    return function(discountPercent){
        let finalPrice = price - (price * discountPercent / 100);
            console.log("Final Price :", finalPrice);
    }
}

discount(1000)(10);


// Task 18 - Company Salary 

function salary(salaryAmount){
    return function(bonus){

        return function(allowance){
            console.log(salaryAmount + bonus + allowance);
        }
    }
}

salary(30000)(5000)(2000);


// Task 19 - Real-Time Login System

    function dashboard() {
        console.log("Load Dashboard");
}
    
    function login() {
        console.log("Login Successful");
    dashboard();
}

    function password() {
        console.log("Verify Password");
    login();
}

    function username() {
        console.log("Enter Username");
    password();
}

username();



console.log("-------------------------------------------------------------");


// Mini Project
    // Employee Salary Management System 


// Employee Object
let employeeData = {
    id: 101,
    name: "Gokul",
    department: "Developer",
    salary: 25000,
    bonus: 5000
};

// Arrow Function
const startProject = () => {
    console.log("Welcome to Employee Salary Management System");
};

startProject();

// Display Employee Details
console.log("Employee Details");
console.log("ID :", employeeData.id);
console.log("Name :", employeeData.name);
console.log("Department :", employeeData.department);
console.log("Salary :", employeeData.salary);

// Function + Return
function calculateSalary(salary, bonusAmount) {
    return salary + bonusAmount;
}

let totalSalary = calculateSalary(employeeData.salary, employeeData.bonus);

console.log("Bonus :", employeeData.bonus);
console.log("Total Salary :", totalSalary);

// Anonymous Function
let printDepartment = function () {
    console.log("Department :", employeeData.department);
};

printDepartment();

// Callback Function
function employeeDashboard() {
    console.log("Employee Dashboard Loaded");
}

// Higher Order Function
function employeeLogin(callback) {
    console.log("Login Successful");
    callback();
}

employeeLogin(employeeDashboard);

// Generator Function
function* monthlyBonus() {
    yield "10% Bonus Coupon";
    yield "20% Bonus Coupon";
    yield "30% Bonus Coupon";
}

let bonusOffer = monthlyBonus();

console.log("Monthly Bonus Coupons");
console.log(bonusOffer.next().value);
console.log(bonusOffer.next().value);
console.log(bonusOffer.next().value);

// Currying
function taxCalculator(totalSalary) {

    return function (taxPercentage) {

        let taxAmount = totalSalary * taxPercentage / 100;

        return totalSalary - taxAmount;

    };

}

let salaryAfterTax = taxCalculator(totalSalary)(10);

console.log("Salary After Tax :", salaryAfterTax);

// Final Employee Report
console.log("Employee Report");
console.log("Employee ID :", employeeData.id);
console.log("Employee Name :", employeeData.name);
console.log("Department :", employeeData.department);
console.log("Basic Salary :", employeeData.salary);
console.log("Bonus :", employeeData.bonus);
console.log("Total Salary :", totalSalary);
console.log("Salary After Tax :", salaryAfterTax);
console.log("Thank You");