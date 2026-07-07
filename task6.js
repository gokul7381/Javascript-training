
// Task 1 - Employee Bonus (Spread Operator)

let employee = {
    name: "Naveen",
    salary: 35000
};

let employeeBonus = {
    ...employee,
    bonus: 5000,
    department: "Developer"
};
console.log(employeeBonus);


// Task 2 - Shopping Cart (Rest Operator)

function calculateBill(...prices) {

    let total = 0;

    for (let i = 0; i < prices.length; i++) {
        total += prices[i];
    }

    console.log("Items :", prices.length);
    console.log("Total :", total);
}
calculateBill(10, 20, 30, 40);


// Task 3 - Student Details (Object Destructuring)

let student = {
    name: "Rahul",
    age: 22,
    course: "MERN",
    city: "Chennai"
};

let { name, age, course, city } = student;

console.log(name);
console.log(age);
console.log(course);
console.log(city);


// Task 4 - Online Food Order 

let foods = [
    "Pizza",
    "Burger",
    "Fries"
];

foods.push("Coke", "Ice Cream");
foods.splice(2, 1);

console.log(foods);


// Task 5 - Bank Transactions

let transactions = [1000, 2000, 3000, 4000];

transactions.shift();
transactions.unshift(500);

console.log(transactions);


// Task 6 - Company Departments

let dept1 = ["HR", "Sales"];
let dept2 = ["Developer", "Testing"];

let departments = dept1.concat(dept2);

console.log(departments);


// Task 7 - Product Search

let products = [
    "Laptop",
    "Mouse",
    "Keyboard",
    "Monitor"
];

if (products.includes("")) {
    console.log("Available");
}
else {
    console.log("Not Available");
}


//  Task 8 - User Login (Callback Function)

function dashboard() {
    console.log("Dashboard Opened");
}

function login(callback) {
    console.log("Login Success");
    callback();
}

login(dashboard);


// Task 9 - Coupon Generator (Generator Function)

function* couponGenerator() {

    yield "WELCOME10";
    yield "SAVE20";
    yield "MEGA50";
    yield "FREE100";

}
let coupon = couponGenerator();

console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);


// Task 10 - Course Registraion (Currying)

function coursen(courseName) {

    return function(batch) {

        return function(room) {

            console.log("Course :", courseName);
            console.log("Batch :", batch);
            console.log("Room :", room);

        };

    };

}

coursen("JavaScript")("Morning")("Batch-36");


// Task 11 - Movie Collection 

let movies = [
    "Leo",
    "GOAT",
    "Dragon",
    "Retro",
    "Coolie"
];

let movieList = movies.slice(2, 4);
console.log(movieList);


// Task 12 - Employee IDs

let ids = [101, 102, 103, 104, 105];
ids.splice(2, 2, 501, 502);

console.log(ids);


// Task 13 - Sort Product Prices

let price = [
    5000,
    250,
    700,
    12000,
    50
];

price.sort(function(a, b) {
    return a - b;
});
console.log(price);


// Task 14 - Nested Categories

let data = ["Electronics",
    [
        "Mobiles",
        [
            "Samsung",
            "Apple"
        ]
    ]
];

let [category, [subCategory, [brand1, brand2]]] = data;

console.log(category);
console.log(subCategory);
console.log(brand1);
console.log(brand2);


// Task 15 - Company Team

let developers = [
    "John",
    "David"
];
let designers = [
    "Ram",
    "Kiran"
];

let team = [...developers, ...designers];
console.log(team);


// Task 16 - Return Function

function calculateSalary() {

    let salary = 30000;
    let bonus = 5000;

    return salary + bonus;
}

let totalSalary = calculateSalary();
console.log(totalSalary);


// Task 17 - Scope Checking

if (true) {

    var company = "Stackly IT";
    let employeeId = 101;
    const password = "stack123";

}

console.log(company);

// console.log(employeeId);

// console.log(password);


// Task 18 - Customer Orders

let orders = [
    "Pizza",
    "Burger",
    "Pizza",
    "Sandwich",
    "Pizza"
];

console.log("First Index :", orders.indexOf("Pizza"));
console.log("Last Index :", orders.lastIndexOf("Pizza"));


// Task 19 - Flatten Product Categories

let items = [
    1,
    2,
    [
        3,
        4,
        [
            5,
            6
        ]
    ]
];
console.log(items.flat(Infinity));


// Task 20 - Mini Shopping Cart Challenge

let cart = [
    "Mouse",
    "Keyboard"
];

cart.push("Monitor");
cart.unshift("Laptop");
cart.splice(2, 1);

if (cart.includes("Mouse")) {
    console.log("Mouse Available");
}
else {
    console.log("Mouse Not Available");
}

let accessories = [
    "Webcam",
    "Speaker"
];

let finalCart = [...cart, ...accessories];
console.log(finalCart);