// function myFunction(callback) {
// // Do Some work...
// //call the callback function
//   setTimeout(() => {
//      dconstata = { name: "Sakib", age: "21"}
//     callback(data);
//   }, 3000);
// }

// myFunction((data) => {
//   console.log("Data:", data);
// });


// function mydata() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = { name: "Rohit", age : 23 };
//       resolve(data);
//     }, 2000);
//   });

// }


// mydata()
// .then((data) => {
//   console.log("Data:", data);
// })
// .catch((error) => {
//   console.log("Error:", error);
// });

// function fetchData(callback) {
//    return setTimeout((data) => {
//        data = { name: "Sakib" , age: "31"};
//       callback (null, data);
//    }, 1000);
// }

// fetchData((error, data) => {
//   if (error){
//     console.log("Error: " + error);
//   }
//   else{
//     console.log( "Name: " + data.name + " " + "Age: " + data.age);
    
//   }
// });


// const fetchPromise = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
// );

// console.log(fetchPromise);
// fetchPromise.then((response) => {
//   console.log(`Recieved response: ${response.status}`);
// });

// console.log("started request...");


// function resolveAfter2Second() {
//   return new Promise((resolve) => {
//      setTimeout(() => {
//         resolve("resolved")
//      }, 2000); 
//     },2000);  
// } 

// async function  asyncCall () {
//   console.log("Calling");
//   const result =await resolveAfter2Second();
//   console.log(result);
// };

// asyncCall();

