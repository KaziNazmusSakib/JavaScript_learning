// let a1 = [1, 2, 3, 4, 5];
// let a2 = [1, 2, 3, 4, 4];

// if (JSON.stringify(a1) == JSON.stringify(a2)) {
//   console.log(true);
// } else {
//   console.log(false);
// }



let a = [1, 2, 3, 4, 5];
let b = [1, 2, 3, 4, 5];

if (a.length !== b.length) {
  console.log(false);
} else {
  for (let i = 0 ; i <a.length; i++)
  {
    if (a[i] !== b[i]) 
      console.log(false);
     ;
      console.log(true);
    
  }
}