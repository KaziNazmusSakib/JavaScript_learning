// let a1 = [1, 2, 3, 4, 5];
// let a2 = [1, 2, 3, 4, 4];

// if (JSON.stringify(a1) == JSON.stringify(a2)) {
//   console.log(true);
// } else {
//   console.log(false);
// }


//2. Using javaScript for loop

// let a = [1, 2, 3, 4, 5];
// let b = [1, 2, 3, 4, 5];

// if (a.length !== b.length) {
//   console.log(false);
// } else {
//   for (let i = 0 ; i <a.length; i++)
//   {
//     if (a[i] !== b[i]) {
//       console.log(false);
//     }
//   }
//   console.log(true);
// }


// 3. String Comparison

// let d = [1, 2, 3, 4, 5];
// let c = [1, 2, 3, 4, 5];

// let res = d.join() == c.join();

// console.log(res);

// 4. Using array every() method

// const compareFunc = (a , b) => 
//     a.length === b.length &&
//     a.every((element, index) => element === b[index]) 

// let a = [1, 2, 3, 4, 5];
// let b = [1, 2, 3, 4, 5];

// console.log(compareFunc(a, b));

// const isBelowThreshold = (currentValue) =>  currentValue < 40;

// let a1 = [10, 30, 39,36] ;

// console.log(a1.every(isBelowThreshold));

// const _= require("lodash");

// let a1 = [1, 2, 3, 4, 5];

// let a2 = [1, 2, 3, 4, 5];

// console.log("The equal value is: " + _.isEqual(a1, a2));


// Using Set

// function compareArrays(a1, a2) {
//     const s1 = new Set(a1);
//     const s2 = new Set(a2);

//     if (s1.size !== s2.size) {
//       return false;
//     }
       
    

//     for(const item of s1) {
//       if(!s2.has(item)) {
//         return false;
//       } 
//     }
    
//     return true;
//   }


// const a1 = [1, 2, 3, 4];
// const a2 = [4, 3, 2, 1];

// console.log(compareArrays(a1, a2));


// let a1 = [1, 2, 3, 4, 5];
// let a2 = [5, 4, 3, 2, 1];
// let a3 = [1, 2, 3, 4, 6];

// console.log(arraysEqual())

function myFunction(callback) {
  setTimeout(() => {
      const data = { name: "Aman", age: 21 };
      callback(data);
  }, 3000);
}

myFunction((data) => {
    console.log("Data:", data);
});


