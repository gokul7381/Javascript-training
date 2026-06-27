// Task 1 - User Introduction

let name = prompt("Enter your Name :")
let age = prompt("Enter your Age :")

    console.log("Nmae : "+ name);
    console.log("Age : "+ age);


// Task 2 - Degree Confirmation

let degree = confirm("Did you complete degree?")
if(degree == true) {
    console.log("Degree Completed");
}
    else {
    console.log("Degree not Completed");
}


// Task 3 - Mobile Price

let mobileprice = 15000
let discount = 2000

let finalprice = mobileprice - discount;
    console.log("Final Price : "+ finalprice);


// Task 4 - Age Eligibility

let vote = prompt("Enter your Age :")
if (vote >= 18){
    console.log("Eligible for Vote");
}
else{
    console.log("Not Eligible");
}


// Task 5 - Shopping Cart

let cart=["Rice","Milk",
    "Sugar","Tea Powder"];

    console.log("First Product : "+ cart[0]);
    console.log("Last Product : "+ cart[3]);
    console.log("Total Products : "+ cart.length);


//Task 6 - Student Details

let student = {
name : "Gokul",
age : "18",
course : "Full Stack"
}
 
    console.log("Student Name: " + student.name);
    console.log("Student Course: " + student.course);


// Task 7 - Employee Salary Calculator

let salary = 25000
let bonus = 5000

let totalsalary = salary + bonus ;

    console.log("Total Salary : "+ totalsalary);


// Task 8 - Website Login Check

let username = "admin"
let password = "7381"

let user = prompt("Enter Username")
let pass = prompt("Enter passwaord")

    if(user == username && pass == password) {
        console.log("Login Successful");
    }
    else {
        console.log("Invalid Credentials");
    }

// Task 9 - Food Delivery App

let foodPrice = 350
let deliveryCharge = 50

let totalBill = foodPrice + deliveryCharge
let gst = totalBill * 5 / 100

let grandTotal = totalBill + gst

    console.log("Total Bill : " + totalBill);
    console.log("GST : " + gst);
    console.log("Grand Total : " + grandTotal);

// Task 10 - E-Commerce Product Details

let product = {
    name: "Laptop",
    price: 50000,
    brand: "ASUS",
    stock: true
}

    console.log("Product Name : " + product.name);
    console.log("Brand : " + product.brand);
    console.log("Price : " + product.price);
    console.log("Stock Available : " + product.stock);

// Task 11 - Attendance System

let present = confirm("Present?");
    if (present == true) {
        console.log("Attendance Marked");
}
    else {
        console.log("Absent");
}

// Task 12 - Banking Application

let balance = prompt("Enter Current Balance");
let withdraw = prompt("Enter Withdraw Amount");

    if (withdraw <= balance) {
        let remaining = balance - withdraw;
            console.log("Transaction Successful");
            console.log("Remaining Balance : " + remaining);
}
    else {
        console.log("Insufficient Balance");
}

// Challenge Task
    //Mini Employee Management System

let employee = {
    name: prompt("Enter Employee Name"),
    age: prompt("Enter Employee Age"),
    department: prompt("Enter Department"),
    salary: prompt("Enter Salary")
};
    console.log("Employee Name : " + employee.name);
    console.log("Employee Age : " + employee.age);
    console.log("Department : " + employee.department);
    console.log("Annual Salary : " + employee.salary * 12);

        if (employee.salary > 30000) {
            console.log("Senior Employee");
}
else {
    console.log("Junior Employee");
}