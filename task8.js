// Task 1 - Employee Age Calculator

let dob = new Date("2002-07-10");
let currentDate = new Date();
let age = currentDate.getFullYear() - dob.getFullYear();

console.log("Employee Age :", age, "Years");


// Task 2 - Online Appointment Scheduler

let appointment = new Date();

appointment.setFullYear(2027);
appointment.setMonth(11);
appointment.setDate(15);
appointment.setHours(10);
appointment.setMinutes(30);
   
console.log("Updated Appointment :", appointment);


// Task 3 - Multi-Country Meeting Time

let meeting = new Date();

console.log("India :", meeting.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata"
}));

console.log("New York :", meeting.toLocaleString("en-US", {
    timeZone: "America/New_York"
}));

console.log("Tokyo :", meeting.toLocaleString("en-JP", {
    timeZone: "Asia/Tokyo"
}));


// Task 4: Product Warranty Expiry

let purchaseDate = new Date();
let warranty = new Date();

warranty.setFullYear(warranty.getFullYear() + 2);

console.log("Purchase Date :", purchaseDate.toLocaleDateString());
console.log("Warranty Expiry :", warranty.toLocaleDateString());


// Task 5 - Digital Clock

setInterval(() => {

    let clock = new Date();

    console.log(clock.toLocaleTimeString());

}, 1000);