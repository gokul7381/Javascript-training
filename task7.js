// Task 1 - Employee Salary Dashboard

    let employee = [
        { name: "Naveen", salary: 45000 },
        { name: "Rahul", salary: 70000 },
        { name: "Kumar", salary: 120000 },
        { name: "Arun", salary: 55000 }
    ];

    // map()
    let employeeNames = employee.map((emp) => {
        return emp.name;
    });

        console.log(employeeNames);

    // filter()
    let highSalary = employee.filter((emp) => {
        return emp.salary > 50000;
    });

        console.log(highSalary);

    // find()
    let firstEmployee = employee.find((emp) => {
        return emp.salary > 100000;
    });

        console.log(firstEmployee);

    // reduce()
    let totalSalary = employee.reduce((total, emp) => {
        return total + emp.salary;
    }, 0);

        console.log("Total Salary :", totalSalary);


    console.log("-------------------------------------------------");
    

// Task 2: E-Commerce Cart Management

    let cart1 = [
        "Laptop",
        "Mouse"
    ];

    let cart2 = [
        "Keyboard",
        "Monitor"
    ];

    // Spread Operator
    let allProducts = [...cart1, ...cart2];

        console.log(allProducts);

    let updatedCart = [...allProducts, "Webcam"];

        console.log(updatedCart);

    // Rest Operator
    function checkout(...products) {

        console.log(products);
        console.log("Total Products :", products.length);
    }

    checkout("Laptop", "Mouse", "Keyboard", "Monitor", "Webcam");


        console.log("-------------------------------------------------");


// Task 3: Student Report Card

    let student = {
        name: "Rahul",
        department: "MERN",
        marks: [90, 80, 85, 75]
    };

    // Object Destructuring
    let { name, department, marks } = student;

    // Array Destructuring
    let [m1, m2, m3] = marks;

    let total = m1 + m2 + m3;
    let average = total / 3;

        console.log("Student Name :", name);
        console.log("Department :", department);
        console.log("Total Marks :", total);
        console.log("Average Marks :", average);


    console.log("------------------------------------------------");


// Task 4 - Product Search System

    let product = "   Gaming Laptop   ";

    let search = product.trim();

        console.log(search);

    let lowerCase = search.toLowerCase();

        console.log(lowerCase);
        console.log(lowerCase.includes("laptop"));
        console.log(search.replace("Laptop", "*****"));


    console.log("------------------------------------------------");


// Task 5: Movie Collection Manager

    let movies = [
        "Leo",
        "GOAT",
        "Dragon"
    ];

    // push()
    movies.push("Retro");
        console.log(movies);

    // pop()
    movies.pop();
        console.log(movies);

    // shift()
    movies.shift();
        console.log(movies);

    // unshift()
    movies.unshift("Coolie");
        console.log(movies);

    // splice()
    movies.splice(1, 1, "Vikram");
        console.log(movies);

    // Sort Ratings
    let ratings = [4.5, 3.8, 5.0, 4.2];
    ratings.sort((a, b) => {
        return b - a;
    });
        console.log(ratings);

    // includes()
        console.log(movies.includes("Coolie"));


    console.log("------------------------------------------------");
    console.log("------------------------------------------------");