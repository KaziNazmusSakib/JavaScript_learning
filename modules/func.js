// function greet(name) { // name is a parameter = placeholder in a function.
//   console.log("Hello: " + name);
// }

// greet("Alice"); // Alice is a Argument = actual value in the function.


// Default parameter

// function greet(name = "Guest") {
//   console.log("Hello: " + name);
// }


// greet();
// greet("Aman");

//Return Statement

// function add(a , b) {
//   return a + b; 
// }

// let b = 10.3
// let a = add(5, b);
// console.log(a);


// Types of Functions
// 1. Named function

// function greet() {
//   return "Hello";
// }

// console.log(greet());


// 2. Anonymous Function

// const greet = function(){
//   return "Hello!";
// }

// console.log(greet());


//3. Function expression
//  const  v = function add(a , b) {
//   return a + b; 
// }

// let b = 10.3
// console.log(v(5, b));

// 4. Arrow Function(ES6)

// const value =  n => n * n;

// console.log(value(4));

//5. Immediately Invoked Function Expression (IIFE)

// (function() {
//   console.log("The function execute immediately.")
// })();


//6. Callback Functions

// function num(n, callback) {
//     return callback(n);  
// }

// const double = n => n * 2;
 
// console.log(num(5,double));


// function person(name = "Saheen" , age = 23 ) {
//   this.name = name;
//   this.age = age;
// }

// const user = new person("Agha", 11);
// const user1 = new person();
// console.log(user.name + " " + user.age);
// console.log(user1.name + " " + user1.age);

// function step1() {
//   return Promise.resolve("A");
// }

// function step2(value) {
//   return Promise.resolve(value + "B");
// }

// function step3(value) {
//   return Promise.resolve(value + "C");
// }

// step1() 
//  .then(function(value){
//     return step2(value);
// })

//  .then(function(value){
//     return step3(value)
// })

//  .then(function(value){ 
//   console.log(value);
// });


// Javascript Promise

// let checkEven = new Promise((resolve, reject) => {
//   let number = 3;
//   if (number % 2 === 0) resolve("The number is even!");
//   else reject("The number is odd!");
// });
// checkEven
//     .then((message) => console.log(message))
//     .catch((error) => console.log(error));


// Promise.all([
//   Promise.resolve("Task 1 completed"),
//   Promise.resolve("Task 2 completed"),
//   Promise.reject("Task 3 failed"),
// ])

// .then((results)=> console.log(results))
// .catch((error) => console.log(error));


