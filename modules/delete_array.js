//1. Delete from a 1st position
// let a = [10, 20 ,30, 40, 50];
// let res = a.shift();
// console.log(res);

//2. Delete element from specific position

// let a = [10, 20 , 30, 40, 50];
// let idx = 2;
// let res = a.splice(idx, 1);
// console.log(a);


//3. Delete end element from the array

// let a = [10, 20, 30, 40];
// let res = a.pop();
// console.log(res);

//4. Delete 1st occurance from the array

// let a = [10, 20, 30, 40, 20];
// let r = 20;
// let s = a.indexOf(r);
// if(s !== -1){ 
//    a.splice(s , 1);
// }
// console.log(a);

//5. Delete last occurance from the array

// let a = [10, 20, 30, 40, 20];
// let t = 20;
// let p = a.lastIndexOf(t);

// if (p !== -1) {
//   a.splice(p , 1); 
// }
// console.log(a);

//6. Delete last occurance from the array

// let a = [10, 20, 30, 40, 20, 50];
// let t = 20;
// let res = a.filter( e => e !== t)
// console.log(res);

