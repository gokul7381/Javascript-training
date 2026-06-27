//23/06/26

// javascript

// script writing

// synchronous

// Variables
    // var
    // let
    // const

//RULES :
    // var

        // 1.Declaration    2.initialization   

        var a = 20

        // 3.reuse     4.reinialization
        a = 30

        //  5.redeclaration
        var a = 40

        console.log(a);


    //let
    
        // 1.Declaration    2.initialization

        let b = 50

        // 3.reuse     4.reinialization

        b = 60

        console.log(b);


    //const

        // 1.Declaration    2.initialization

        const c = 80

        console.log(c);



// printing statement

    // 1. console.log()

        let a = 10
        console.log(a);
        console.log("100");

    // 2. alert()

        let b = 20  
        alert(b);

    // 3. confirm()

        let c = "did you know js"
        confirm(c);

    // 4. prompt()

        let d = "what is your name"
        prompt(d);

    // 5. document.write()

        document.writeln(345);


// questions

        console.log("hello world");

        alert("good morning");

        let userinfo = confirm("did you complete degree")
        console.log(userinfo);

        let userage = prompt("what is your age?")
        console.log("user age : ",userage);

        let username = prompt("what is your name?")
        document.writeln("user name : ",username);




// console methods()

    console.log(100);

    console.warn(100);

    console.error(100);

    console.clear();


//task 1  Completed


//25/06/25

//Datatype

// 1.Primitive DataType
    
    // Types 
        // 1.String  - "123"
            let one = "javascript"
            console.log(one);
            //console.log(typeof(one));
    
        // 2.Number - 123 
            let two = 123
            console.log(two);
            //console.log(typeof(two));

        // 3.Boolean - true-1 , false-0
            let three = true
             console.log(three);
             //console.log(typeo(three));

        // 4.Undefined
            let four ;
            console.log(four);

        // 5.Null
            let five = prompt()
            console.log(five);


// 2. non Primitive DataType

    //Types

        // 1.Array - []
            let number = ["one","two","three","four","five",
                "apple","banana","orange","rc car"]
            console.log(number);
            console.log(number[0]);
            console.log(number[1]);
            console.log(number[2]);

            console.log(number[number.length-1]);


        // 2.Object - {}
            let All = {
                numberval : ["one","two","three","four"],
                friutval : ["apple","banana","orange"],
                thing : "rc car"
            }
            console.log(All);
            console.log(All.fruitval[0]);
            console.log(All.numberval[2]);
            console.log(All.thing);

        // 3. Functions

// operator
            
    // 1. Arithmetic operator 
      
        // addition +
            console.log(10 + 20);
        
        // subtraction -
            console.log(20 - 30);
    
        // multiplication *
            console.log(10 * 2);
    
        // division /
            console.log(10 / 10);
        
        // modules %
            console.log(10 % 10);
        
        // exponencial **
            console.log(5 ** 3);    //5 ^ 3 = 5 * 5 * 5 = 125 
        
        // increment
            // post inc      var ++
            // pre inc       ++ var
                
        // decerement
            // post dec      var --
            // pre dec       -- var

            //example

                let z1 = 5
                ++z1
                console.log(z1);
            
                // your searching element first in variable side means. you can calculate that value side yet variable.
            
                let z2 = 2 //null
                z2 = z2++       // +1+2 = 3
                console.log("z2 :", z2);    
            
                // your searching element first in variable side means. you can calculate that entier value.

                let z3 = 4  //null
                let z4 = ++z3   //
                console.log("z3 :",z3); // 5
                console.log("z4 :",z4); // 5






    // 2. Assignment operator

        let val = 20
        let addtionval = 100

            val = val + additionval
            //val += additionval
            console.log(val);


    
    // 3. Comparision operator
        
        //meaning       operator        example     result

        //lessthan          <           5 < 4       false

        //greaterthan       >           5 > 4       true
        
        //lessthenEq        <=          5 <= 5      true
        
        //greaterthenEq     >=          10 >= 9     true
        
        //loosytypeEq       ==          10 == "10"  true
        
        //lossynotEq        !=          10 != "10"  false
        
        //strictlytypeEq    ===         10 === "10" false
        
        //strictlynotEq     !==         10 !== 10   false

        //example 
            
            console.log(10 == 10);    //true
            console.log(10 !== "10"); //true
            console,log(10 == "10");  //true
            console.log(10 != "10");  //false


    // 4. Logical Operator

        // AND - &&
            //true && true && = true
            //false && true && = false
            
        // OR - ||
            // false || false || false = false
            // true || false || false = true
        
            // NOT - !
            // !(true) = false , !(false) = true

    //examples

    // Question 1
        console.log(25 > 15 && 10 < 20); // true

    // Question 2
        console.log(50 <= 40 || 30 === 30); // true

    // Question 3
        console.log(!(100 > 50)); // false

    // Question 4
        console.log(20 == "20" && 15 !== "15"); // true

    // Question 5
        console.log(45 >= 45 || 10 > 100); // true

    // Question 6
        console.log(75 != "75" || 25 < 30); // true

    // Question 7
        console.log(60 === "60" && 90 >= 90); //false

    // Question 8
        console.log(!(35 <= 35) || 80 > 60); //true

    // Question 9
        console.log((40 > 20 && 15 < 10) || 50 === 50); // true

    // Question 10
        console.log((70 !== "70") && !(25 > 30)); // true



// Concatination  +

    let y1 = "spider"
    let y2 = "man"
    console.log(y1 + y2);

// Template String
    
    console.log(`${y1}${y2}`);