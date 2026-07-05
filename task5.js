// 1. Employee Login (Scope)

function employeeLogin() {
    if (true) {
        var companyName = "Stackly IT";
        let employeeId = 101;
        const password = "stack123";

            console.log(employeeId);
            console.log(password);
    }
        console.log(companyName);

        // console.log(employeeId);
        // console.log(password);
}
employeeLogin();


// Task 2 - ATM Machine (Hoisting)

    console.log(accountBalance);
        var accountBalance = 5000;

    // console.log(balance);
        let balance = 10000;
    // console.log(amount);
        const amount = 15000;


// Task 3 - Food Delivery App (Named Function)

function orderFood(foodname) {
    console.log("Order placed :", foodname);
}

orderFood("chicken biryani");


// Task 4 - WhatsApp Status (Anonymous Function)

let status = function (message) {
    console.log("Status Updated :", message);
}
status("Busy in Meeting");


// task 5 - Weather App (Arrow Function)

let weather = (city, temperature) => {
    console.log(city + " Temperature is " + temperature + "°C");
}
weather("Chennai", 36);


// Task 6 - Flipkart Offer (IIFE)

(function () {
    console.log("Today's offer");
    console.log("Flat 60% Discount");
})();



// Task 7 - Online payment (Higher Order + Callback)

function paymentSuccess() {
    console.log("Payment Successful");
}

function makePayment(callback) {
    console.log("Payment processing...");
    callback();
}
makePayment(paymentSuccess);


// Task 8 - Youtube Playlist (Generator)

function* playlist() {

    yield "Video 1";
    yield "Video 2";
    yield "Video 3";
    yield "Video 4";
    return "Playlist Completed";
}

let video = playlist();

    console.log(video.next().value);
    console.log(video.next().value);
    console.log(video.next().value);
    console.log(video.next().value);
    console.log(video.next().value);


// Task 9 - Student Result (Return)

function calculateTotal() {
    return 485;
}

let totalMarks = calculateTotal();
    console.log("Total Marks :", totalMarks);


// Task 10 - Shopping Cart (REturn)

function cartTotal(price1, price2, price3){
    return price1 + price2 + price3;
} 

let total = cartTotal(500, 1000, 1500);
    console.log("Total Amount:", total);


// Task 11 - Salary Calculator (Uncurrying)

function salary(basic, hra, bouns){
    console.log("Total salary :", basic + hra + bouns);
}
salary(50000 , 5000, 3000);


// Task 12 - Food Bill (Currying)

function foodbill(food){
    return function(drinks){
        return function(dessert){
            console.log(food + drinks + dessert);
        };
    };
}
foodbill(200)(100)(80);


// Task 13 - E-Commerce Coupon Generator

function* coupon(){

    yield "WELCOME10";
    yield "SAVE20";
    yield "SUPER30";
    yield "MEGA50";
    return "No More Coupons";
}

let offer = coupon();

    console.log(offer.next().value);
    console.log(offer.next().value);
    console.log(offer.next().value);
    console.log(offer.next().value);
    console.log(offer.next().value);


// Task 14 - Bank Transaction (Higher Oreder + Callback)

function transaction() {
    console.log("Transaction Successful");
}

function withdraw(callback) {
    console.log("Processing...");
    callback();
}

withdraw(transaction);


//Task 15 - Employee Profile (scope)

function profile() {
    if (true) {
        
        var company = "Stackly";
        let designation = "MERN Developer";
        const salary = 50000;
            
            console.log(designation);
            console.log(salary);
    }

        console.log(company);
}
profile();