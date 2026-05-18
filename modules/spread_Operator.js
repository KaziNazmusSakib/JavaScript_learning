//1. destrucring array element
// let s = new Set(['sakib', 'Js']);
// let a = [...s];

// console.log(a);

//2. Using Array.from()

// const s = new Set([1,1,2,2,3,4,4,5,4,6,7,7]);
// let a = Array.from(s);

// console.log(a);


// 3.Using forEach() Method

// let s = new Set(['GFG', 'JS']); 
// let a = [];

// let fun = function (val1) {
//       a.push(val1)
// }

// s.forEach(fun);

// console.log(a);


//4. Using loadash library

//ES module
import _ from "lodash";

let a = new Set(["Welcome", "To", "GFG"]);

console.log(_.toArray(a));




