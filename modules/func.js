// function greet(name) { // name is a parameter = placeholder in a function.
//   console.log("Hello: " + name);
// }

// import { result } from "lodash";

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


// Promise allSettled() Method

// Promise.allSettled([
//   Promise.resolve("Task 1 completed"),
//   Promise.reject("Task 2 failed"),
//   Promise.resolve("Task 3 completed"),
// ])

//  .then((results) => console.log(results));


// Promise.race() Method

// Promise.race([
//   new Promise((resolve) =>
//   setTimeout(() =>
//     resolve("Task 1 finished"), 1000)),
//   new Promise((resolve) => 
//   setTimeout(() =>
//     resolve("Task 2 finished"), 500)),
// ])
// .then((result) =>
//   console.log(result))
// .catch(err => console.error(err));


//Promise.any() Method

// Promise.any([
//   new Promise((reject) =>
//   setTimeout((promise) => {
//       reject("Task 1 failed");
//   }, 100)),

// new Promise((resolve) =>
//   setTimeout((promise) => {
//       resolve("Task 2 completed");
//   }, 3000)),

//   new Promise((resolve) =>
//   setTimeout(() => {
//       resolve("Task 3 completed");
//   }, 50))
// ])

// Promise.any([
//     Promise.reject("Task 1 failed"),
//     Promise.reject("Task 2 failed"),
//     Promise.reject("Task 3 failed") // Aggregate Error;
// ])

// .then((results) => console.log(results))
// .catch((error) => console.log(error));




//Promise.resolve() method

// Promise.resolve("Immedient Success") 
//   .then((value) => console.log(value));


// Promise.reject() method

// Promise.reject("Immediet Failed")
//   .catch((value) => console.log(value));

// Promise.finally() method

// Promise.resolve("Immedietly Successfull")
//    .then((value) => console.log(value))
//    .catch((error) => console.log(error))
//    .finally(() => console.log("Cleanup completed"))


// Promise.resolve(5) 
//     .then((value) => value * 2)
//     .then((value) => value + 3)
//     .then((finalValue) => console.log(finalValue));


// let tasks = [1, 2, 3];
// tasks.reduce((prevPromise, current) => {
//   return prevPromise.then(() => {
//     return new Promise((resolve) => {
//       console.log(`Processing task ${current}`);
//       setTimeout(resolve, 500);
//     });
//   });
// }, Promise.resolve());


//10. Dynamic Promise Creation


// function asyncTask (taskName) {
//     return new Promise((resolve) => {
//       setTimeout(() => 
//         resolve(`${taskName} completed`), 1000);
//     });  
// }
// asyncTask("Download File").then((result) =>
// console.log(result));

//11. Timeout Handling with Promise.race() Method

// let fetchData = new Promise((resolve) => {
//     setTimeout(() => 
//        resolve("Data solved"), 3000)
// });  

// let value = new Promise((_, reject) => {
//     setTimeout(() => {
//         reject("Timeout");
//     }, 1000);
// })

// Promise.race([fetchData, value])
//   .then((results) => console.log(results))
//   .catch((error) => console.log(error));

//12. Promise.allSettled() Method
// // Promise.allSettled([
// //   Promise.resolve("Task 1 done"),
// //   Promise.reject("Task 2 failed"),
// //   Promise.resolve("Task 3 done"),
// // ])

// .then((results) => console.log(results));

//13. Combining promises with parallel and Sequential Execution

// Promise.all([
//    new Promise((resolve) => {
//       setTimeout(() => {
//           resolve("Task A is done.");
//       }, 1000)
//    }),

//    new Promise((resolve) => {
//       setTimeout(() => {
//           resolve("Task B is done.");
//       }, 1000)
//    })
   
// ])

// .then(([resultA, resultB]) => {
//     console.log(resultA, resultB);
//     return new Promise((resolve) => {
//       setTimeout(() => {
//           resolve("Finat task done")
//       }, 700);
//     })
//     .then((finalResult) => {
//       console.log(finalResult);
//     });
// })

