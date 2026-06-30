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

// 29/06/26

// Type Casting
    
    // 1. Implicit 

            console.log(typeof("hello" + 12));

        // String - string anything string

            console.log("string type casting");
            
            console.log(typeof("hello" + "hello"));
            console.log(typeof("hello" + 12));
            console.log(typeof("hello" + true));
            console.log(typeof("hello" + undefined));
            console.log(typeof("hello" + null));

            console.log(typeof("hello" + [1,2]));
            console.log(typeof("hello" + {k:4}));

        
        // Number

            console.log("number type casting");

            console.log(typeof(12 + "hi"));
            console.log(typeof(12 + 12));
            console.log(typeof(12 + true));
            console.log(typeof(12 + undefined));
            console.log(typeof(12 + null));

            console.log(typeof(12 + [1,2]));
            console.log(typeof(12 + {h:5}));

        // Boolean

            console.log("boolean type casting");

            console.log(typeof(true + "hello"));
            console.log(typeof(true + 5));
            console.log(typeof(true + true));
            console.log(typeof(true + undefined));
            console.log(typeof(true + null));

            console.log(typeof(true + [1,2]));
            console.log(typeof(true + {k:5}));



    // 2. Explicit
            
        // Constractor - Number

            console.log(11 + Number("11"));

            console.log(Number());
            console.log(Number(""));
            console.log(Number("hi"));
            console.log(Number("1234"));
            console.log(Number(1));
            console.log(Number(true));
            console.log(Number(false));
            console.log(Number(undefined));
            console.log(Number(null));
            console.log(Number([123,67]));
            console.log(Number({j:8}));
            

        // Boolean constractor

            console.log(Boolean());
            console.log(Boolean(""));
            console.log(Boolean("abc"));
            console.log(Boolean("1234"));
            console.log(Boolean(0));
            console.log(Boolean(-1));
            console. log(Boolean(778));
            console.log(Boolean(true));
            console.log(Boolean(false));
            console.log(Boolean(undefined));
            console.log(Boolean(null));

            console. log(Boolean([1,2]));
            console.log(Boolean({h:4}));


// Flow Control Statement

    // 1. Conditional Statement 

        // if Statement 

         //if(condition){Statement}

         // if inside you gave the condition if true = allow code, 
         // condition if false = not allow inside

            if(!5){
               console.log("welcome");
            }
               console.log("hello everyone");

    // if else statement

        // if(condition){statement} else{statement}

        // condition = true allow the code in if inside.
        // condition = false allow the code in else inside.
        
            let voteAge = 17
                if(voteAge>=18){
                    console.log("we can vote");
                }
                else{
                    console.log("we can't vote");
                }
    
    // else if statement 
        
        let hour = 28
            if(hour>=1 && hour <= 6){
                console.log("early morning");
            }
            else if(hour >=7 && hour <= 12){
                console.log("good morning");
            }
            else if(hour >= 13 && hour <= 16){
                console.log("good afternoon");
            }
            else if(hour >= 17 && hour <= 19){
                console.log("good evening");
            }
            else if(hour >= 20 && hour <= 24){
                console.log("good night");
            }
            else{
                console.log("time invalid");
                }

    // Nested if statement
    // Army selection application

        let age = prompt("enter your age")
        let height = prompt("enter your height givecm value")
        let weight = prompt("enter your weight givekg value")

            if(age>=18){
                if(height >= 175){
                    if(weight >= 75){
                        console.log("your selected congradulation");
                    }
                    else{
                        console.log("your weight is not enough");
                    }
                }
                else{
                    console.log("your height is not enough");
                }
            }
            else{
                console.log("your age is not enough");
                
            }


    // Switch statement

        // switch (condition){ 
        //  case value: statement 
        //      break; 
        //  default: statement   
        //      break;
        //  }

        let dayNumber = 50
            switch(dayNumber) {
                case 1 : console.log("monday"); break;
                case 2 : console.log("tuesday"); break;
                case 3 : console.log("wednesday"); break;
                case 4 : console.log("thursaday"); break;
                case 5 : console.log("friday"); break;
                case 6 : console.log("saturday"); break;
                case 7 : console.log("sunday"); break;

                default: console.log("check your number");

                }


    // 2. Looping statement 

        // for loop
            // for(intialization ; condition ; iteration){
            //    statement
            // }

            for(let a=1; a <= 5; a++){
            console.log("for loop",a); // 1, 2 ,3, 4,5
            }
            // a =1;1 <= 5 = true ; 1++= 2
            // a = 2 ;2 <= 5 = true ; 2++ = 3
            // a = 3;3 <= 5 = true ; 3++ = 4
            // a = 4; 4 <= 5 = true ; 4++ = 5
            // a =5;5 <= 5 = true ; 5++ = 6
            // a = 6 ; 6 <= 5 = false.


        // while loop

            let val1 = 5        // 5 // 4 // 3 // 2 // 1 // 0 // -1
                while(val1 >= 10){ //-1 >= 0, = false
                    console.log("while loop" ,val1); // 5 , 4 , 3 , 2 , 1 , 0
                    val1--; // 5 -- = 4, 4 -- = 3 , 3 -- = 2 , 2 -- = 1, 1 -- = 0, 0 --= - 1
                }


        // do while loop 

            let val2 = 5

                do{
                    console.log("do while ",val2);
                    val2--;
                }
                while(va12>=10)

        // for of loop - string , array , function

        //  for(declration of variable){
        //     console.log(declration name);

            let str = "javascript"
            let arr = ["hello","hi","welcome","namaste"]

                for(let a of arr){
                    console.log(a);
                }

        // for in loop - object

            let obj = {
                name1 : "kamal",
                role : "trainer",
                sub : "react js"
            }

                for(let b in obj){
                    console. log(b , obj[b]);
                }
                