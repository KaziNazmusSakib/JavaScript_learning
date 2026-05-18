// let a = 10;
// let b = 4;
 
 
//  function myFunction(x, y) {
//     return x + y;
// }

// const myFunction = function (x, y) {
//     const c = x + y;
//     console.log(c);
//     return c;
// };

// const myFunction = (x, y) => y - x;

// const myFunction = new Function("x", "y", "return x*y" );


// const obj = {
//   myFunction(x, y){
//     return x * y;
//   },
// };

// const c = o(a, b);
// console.log(c);


// const myFunction = function () {
    
//        return   (e ,f) => {
//             const t = e + f
//            console.log("The sum of the result is " + t) 
//            return (c,d ) => {
//             console.log("the 3rd inner function sum result is " + (c + d ) );
//            }
//       } 
// } 

// myFunction( )(3, 7)(5,7)
// // console.log(d);
    

// const counter = function () { 
//     let count = 0;
//      return    () => {
//           count += 1;
//           console.log("Counts value " + count);
//         }
      


//   // return Inc_count();
// }

// const counter1 = counter();
// counter1() 
// counter1() 

// const counter2 = counter();
// counter2()
// counter2()
// // console.log(counter1(90));

// // Inc_count();
  

// let x = 5;
// let result = x > 8;

// console.log(result);

// let x = 5;
// let y = 2;
// let z = x % y;
// console.log(z);

// let x ,y , z;
// // let z = x ** 2;
// x = 5;
// y = 2;
// z = Math.pow(x,y);
// z = (100 + 50) * 3 + z;
// console.log(z);

// let x = 50; 
// let y = x &&= 10;
// console.log(y);

// let x = 10;
// let y = x ??= 10;
// console.log(y);

// let age = "A"
// let text = "B"
// let result = age <= text  
// console.log(result);

// let age = "s";
// let v;
// age = Number(age);
// if (isNaN(age)) {
//   v = "Input is not a number.";  
// } else {
//   v = (age < 18 ) ? "Too young" : "Old enough";
// }

// console.log(v);

// const prompt = require('prompt-sync')();
// let name;
// const userInput = prompt("What is your name?" )

// if(userInput !== null) {
//   alert("Hello, " + userInput + "!");
// } else {
//   alert("You canceled the input.");
// }

// const age = 0;
// const status = age != 18 ? "Adult" : "Minor";
// console.log(status);

// const  number = 7;
// const type = number % 2 === 0 ? "Even" : "Odd";
// console.log(type);

// const score = 90;

// const grade = score >= 90 ? "A"
//             : score >= 80 ? "B"
//             : score >= 70 ? "C"
//             : "F"
//       console.log(grade);

// var hour = 19 

// if (hour < 12 ) {
//   greeting = "Good day";
// } else if (hour < 18) {
//   greeting = "Good Afternoon"
// } else {
//   greeting = "Good Night"
// }

// console.log(greeting);

// let age = 10;
// let text = "You can drive."

// if ( age >= 18) {
//   text = "You can drive"
// }

// console.log(text)

// nested if

// let age = 16;
// let country = "USA";
// let text = "You can Not drive!";

// // if(country == "USA"){
// //   if(age >= 16){
// //     text = "you can drive!"
// //   }
// // }

// if(country == "USA" && age >=16) {
//   text = "You can drive!";
// }

// console.log(text);


// let time = 29;

// if (time < 10){
//   greeting = "Good morning";
// } else if (time < 20) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }

// console.log(greeting);

// let text;
// if (Math.random() < 0.5) {
//   text =  "<a href='https://w3schools.com'>Visit W3Schools</a>";
// } else {
//   text = "<a href='https://wwf.org'>Visit WWF</a>";
// }

// document.getElementById("demo").innerHTML = text;

// let isMember = false;
// let discount = isMember ? 0.2 : 0;
// console.log(discount);

// let day = 4;
// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   default:
//     day = "Invalid day";
// }

// console.log(day);

// switch (new Date().getDay()) {
//   case 0:
//     text = "Today is Wednesday";
//     break;
    
//     case 1:
//       text = "Today is Sunday";
//       break;

//       default:
//         text = "Looking forward to the Weekend";
//         break;
//     }

// console.log(text);


// switch (new Date().getDay()) {
//   case 4:
//   case 5:
//     text = "Soon it is Weekeend";

//   break;
  
//   case 0:
//   case 6:
//     text = "It is Weekend";
//     break;
//   default:
//     text = "Looking forward to the Weekend";
// }

// console.log(text);

// let x = 2;

// if (x == 8)
// console.log(x);

// else if (x <= 8)
//   console.log(x);
// else {
//   if(x <= 4)
//   console.log(x)
// }

// let text = "";

// let i = 1
// while (i < 10) {
//   text += i;
//   i++;
//   console.log(text);

// }

// let x = ""|null|undefined|NaN|0|-0|false;
// let s = Boolean(x);
// console.log(s);


// let x = Boolean(false);
// //boolean defined as a object
// let y = new Boolean(false);

// // (x == y)
// //   return console.log(true);

// (x === y)
//   return console.log(false);  


// let x = 6;
// let y = 3;
// let z = (x < 10 && y > 1);

// console.log(z);

// let Cars = ["Volvo", "BMW", "Toyota", "Supra", "Wagon", "Marcedes"];
// let text = " ";
// for (let i = 0; i < Cars.length; i++) {
//   text += Cars[i] + " "
// }
// console.log(text);

// for (let i = 0; i < 5; i++) {
//     let text = "";
//     text += "The number is " + i  
//     console.log(text);
//   }

// let i = 0;
// do {
//   let text = "";
//   text += "The number is " + i
//   i++;
//   console.log(text)
// }  
// while (i < 5)

//var i = 5;

// for (let i = 0; i < 5; i++) {
//   if (i % 2 === 0) {
//     console.log("The even number is :" + i)
//   }
//   else {
//     console.log("The odd number is :" + i)
//   }
// }

// let text = "";
// for (let i = 0; i < 10; i++){
//   if(i === 3)
//   {break};
//   text += "The number is " + i + " " ;
//   console.log(text);
// }

// let text = "";

// loop1: for (let j = 1; j < 5; j++) {
//   loop2: for (let i = 1; i < 5; i++) {
//     if (i === 3) { 
//       break loop1; }
//       text += i;
//       console.log( text);
//   }
//   // console.log(text);
// }



// import { arrayExamples } from "./arrays";
// arrayExamples();

// let a = ["apple", "banana", "cherry"];
// console.log(a);
 