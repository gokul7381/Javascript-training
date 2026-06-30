
// Task 1 - Employee Login Eligibility

let age = Number(prompt("Enter Employee Age: "))
let ID = confirm("Do you have Employee ID? ")
let attendance = Number(prompt("Enter Attendance Percentage: "))

    if(age >= 18 && ID && attendance >= 75){
        console.log("Access Granted");
    } else{
        console.log("Access Denied");
    }

//  Task 2 - Student Grade System

let marks = prompt("Enter your mark: ")

    if(marks >= 90 && marks <=100){
        console.log("Grade A+");
    } 
    else if(marks >= 80){
        console.log("Grade A");
    }
    else if(marks >= 70){
        console.log("Grade B");
    }
    else if(marks >= 60){
        console.log("Grade C");
    }
    else{
        console.log("Fail");
    }

// Task 3 - ATM Withdrawal

let balance = 5000
let withdraw = 3000

    if (withdraw <= balance && withdraw % 100 === 0){
        balance -= withdraw 
        console.log("Transaction Successful");
        console.log("Remaining Balance:",balance);      
    }
    else {
        console.log("Transaction Faild");
        
    }

//  Task 4 - Food Ordering App

let choice = 4

switch (choice) {
    case 1:
        console.log("You Ordered Pizza");
        break;
    case 2:
        console.log("You Ordered Burger");
        break;
    case 3:
        console.log("You Ordered Shawarma");
        break;
    case 4:
        console.log("You Ordered Biryani");
        break;
    case 5:
        console.log("You Ordered Juice");
        break;
    default:
        console.log("Invalid choice");
}

// Task 5 - E-Commerce Discount

let purchase = 6000
let premium = true

let discount

    if (purchase > 5000 && premium) {
        discount = purchase * 0.20;
    }
    else {
        discount = purchase * 0.10;
    }

let finalPrice = purchase - discount

    console.log("Original Price:", purchase);
    console.log("Discount:", discount);
    console.log("Final Price:", finalPrice);
        
//  Task 6 - Attendance Report

for (let day = 1; day <= 30; day++){
    console.log(`Day ${day} Present`);
}

//  Task 7 - Even Number Generator

for (let i = 1; i <= 100; i++){

    if (i % 2 === 0) {
        console.log(i);
    }
}

// Task 8 - Mobile Number Validation

let mobile = prompt("Enter Mobile Number")

    if(
        mobile.length === 10 &&
        (mobile.startsWith("6") ||
            mobile.startsWith("7") ||
            mobile.startsWith("8") ||
            mobile.startsWith("9"))
    ){
        console.log("Valid Mobile Number");
    }
    else{
        console.log("Invalid Mobile Number");
    }

// Task 9 - Shopping Cart

let cart = [
    "Milk",
    "Bread",
    "Egg",
    "Rice",
    "Oil"
]

    console.log("First Item:", cart[0]);
    console.log("Last Item:", cart[cart.length - 1]);
    console.log("Total Items:", cart.length);

//  Task 10 - Employee Database

let employee = {
    name: "Gokul",
    salary: 25000,
    department: "Development",
    experience: 1
}

    console.log("Employee Name:", employee.name);
    console.log("Department:", employee.department);
    console.log("Experience:", employee.experience);

// Task 11 - Company ID Generator

let name = "Naveen"
let id = 1045
let department = "Development"

    console.log(`
    Welcome ${name}
    Your Employee ID is EMP${id}
    Department : ${department}
    `);

// Task 12 - User Registration

let userName = prompt("Enter Name")
let userAge = prompt("Enter Age")
let accept = confirm("Do you accept Terms?")

    if (accept){
        alert("Registered Successfully");
    }
    else{
        alert("Registration Cancelled");
    }

// Task 13 - Salary Increment Calculator

let salary = 35000
let increment = 15

let incrementAmount = salary * increment / 100
let newSalary = salary + incrementAmount

    console.log("Old Salary:", salary);
    console.log("Increment Amount:", incrementAmount);
    console.log("New Salary:", newSalary);

// Task 14 - Restaurant Bill Generator

let burger = 150
let pizza = 300
let juice = 80

let subtotal = burger + pizza + juice
let gst = subtotal * 18 / 100
let grandTotal = subtotal + gst

    console.log("Subtotal:", subtotal);
    console.log("GST:", gst);
    console.log("Grand Total:", grandTotal);

// Task 15 - Company Attendance Dashboard

let employees = [
    { name: "Rahul", status: "Present" },
    { name: "Arun", status: "Absent" },
    { name: "Kamal", status: "Present" },
    { name: "Priya", status: "Present" },
    { name: "Divya", status: "Absent" }
]

let present = 0
let absent = 0

    for (let emp of employees) {

        if (emp.status === "Present") {
            console.log(emp.name, "- Present");
            present++;
        }
        else {
            console.log(emp.name, "- Absent");
            absent++;
        }
    }

    console.log("Total Present:", present);
    console.log("Total Absent:", absent);

// Mini Project (Team Assignment)
    //Employee Management System (Console Version)

let Aemployees = [
    {
        id: 101,
        name: "Rahul",
        department: "Development",
        salary: 30000,
        experience: 2
    },
    {
        id: 102,
        name: "Arun",
        department: "Testing",
        salary: 35000,
        experience: 5
    },
    {
        id: 103,
        name: "Priya",
        department: "HR",
        salary: 40000,
        experience: 7
    }
];

let Achoice = 2

switch (Achoice) {

// 1. Add Employee
    case 1:
        let newEmployee = {
            id: 104,
            name: "Kamal",
            department: "Support",
            salary: 28000,
            experience: 1
        };
        Aemployees.push(newEmployee);
        console.log("Employee Added Successfully");
        console.log(newEmployee);
        break;

// 2. View All Employees
    case 2:

        console.log("Employee List");

        for (let employee of Aemployees) {

            console.log(`
ID          : ${employee.id}
Name        : ${employee.name}
Department  : ${employee.department}
Salary      : ${employee.salary}
Experience  : ${employee.experience} Years
`);
        }
        break;

// 3. Search Employee by ID
    case 3:
        let searchId = 103;
        let found = false;

        for (let employee of Aemployees) {
            if (employee.id === searchId) {
                console.log("Employee Found");
                console.log(employee);

                found = true;
                break;
            }
        }
        if (!found) {
            console.log("Employee Not Found");
        }
        break;

// 4. Calculate Salary with Bonus
    case 4:

        let bonusId = 101;

        for (let employee of Aemployees) {
            if (employee.id === bonusId) {
                let bonus = employee.salary * 0.10;
                let totalSalary = employee.salary + bonus;

                console.log(`Employee : ${employee.name}`);
                console.log(`Salary : ${employee.salary}`);
                console.log(`Bonus : ${bonus}`);
                console.log(`Total Salary : ${totalSalary}`);
            }
        }
        break;

// 5. Check Experience Level
    case 5:
        for (let employee of Aemployees) {

            if (employee.experience >= 5) {
                console.log(`${employee.name} - Senior Employee`);
            }
            else {
                console.log(`${employee.name} - Junior Employee`);
            }
        }
        break;

// 6. Delete Employee
    case 6:
        let deleteId = 103;

        for (let i = 0; i < Aemployees.length; i++) {
            if (Aemployees[i].id === deleteId) {
                Aemployees.splice(i, 1);
                console.log("Employee Deleted Successfully");
                break;
            }
        }
        console.log(Aemployees);
        break;

// 7. Exit
    case 7:
        console.log("Thank You...");
        break;
    default:
        console.log("Invalid Choice");
}

