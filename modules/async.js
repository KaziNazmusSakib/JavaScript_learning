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

// const p = new Promise((res, rej) => {
//   res(1);
// });

// async function asyncReturn() {
//     return p;
// }

// function basicReturn() {
//    return Promise.resolve(p);
// }

// console.log(p === basicReturn());
// console.log(p === asyncReturn());


// why the output is not shown 
// async function foo() {
//     const result1 = await new Promise((resolve) => 
//       setTimeout(() => resolve("1")),
//     );
//     return result1;
//     const result2 = await new Promise((resolve) => 
//     setTimeout(() => resolve("1")),
//   );
// }

// foo();
// console.log(foo());

// async function foo() {
//     const p1 = new Promise((resolve) => 
//     setTimeout(() => resolve("1"), 1000));
//      p2 = new Promise((_, reject) =>
//     setTimeout(() => reject(new Error("failed")), 500));

//     const results = [await p1, await p2];
// }

// foo().catch(() => {});


const fetchPromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",);

fetchPromise
      .then((response) =>{
        if(!response.ok){
          throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data[3].name);
      });


