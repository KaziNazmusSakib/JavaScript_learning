//export function arrayExamples() {
//   let Cars = ["Volvo", "BMW", "Toyota", "Supra", "G-Wagon", "Marcedes"];
//   let text = " ";
//   for (let i = 0; i < Cars.length; i++) {
//     text += Cars[i] + " ";
//   }
//   console.log(text);

//   for (let i = 0; i < 5; i++) {
//     let text = "";
//     text += "The number is " + i;
//     console.log(text);
//   }

//   let i = 0;
//   do {
//     let text = "";
//     text += "The number is " + i;
//     i++;
//     console.log(text);
//   } while (i < 5);

//   var i = 5;

//   for (let i = 0; i < 5; i++) {
//     if (i % 2 === 0) {
//       console.log("The even number is :" + i);
//     } else {
//       console.log("The odd number is :" + i);
//     }
//   }

//   let text = "";
//   for (let i = 0; i < 10; i++) {
//     if (i === 3) {
//       break;
//     }
//     text += "The number is " + i + " ";
//     console.log(text);
//   }

//   let text = "";

//   loop1: for (let j = 1; j < 5; j++) {
//     loop2: for (let i = 1; i < 5; i++) {
//       if (i === 3) {
//         break loop1;
//       }
//       text += i;
//       console.log(text);
//     }
//     // console.log(text);
//   }


// let a = ["apple", "banana", "cherry"];
// console.log(a);

//delete the array element

let arrs = [1, 2, 3, 4, 5, 6]

// find out indices that sums up to 7

const targetsum = 7;
let hasGotAns = false;

for ( let i = 0 ;  i < arrs.length; i++ )
{
     for ( let j = i + 1; j < arrs.length ; j++){
         if(arrs[i] + arrs[j] === targetsum){
             hasGotAns = true
             console.log(i, j)
             break;
         }
         
     }
     if (hasGotAns){
         break;
     }
     
} 