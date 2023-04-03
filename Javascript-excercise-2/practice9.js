/* 1 
Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ get​ ​the​ ​ first​ ​ and​ ​ last​ ​ element
​of​ ​ an​ ​ array.​ ​ Passing​ ​ a parameter​ ​ 'n'​ ​ will​ ​ return​ ​ the​ ​ first​ ​ 
'n'​ ​ elements​ ​ of​ ​ the​ ​ array​ ​ and​ ​last​ ​ ‘n’​ ​ elements​ ​ of​ ​ the array. */
// output 
//Input = 3 // Output = First 3 element : [0,1,2,] , Last 3 element : [7,8,9]

let arr = [0,1,2,3,4,5,6,7,8,9];

n = Number(prompt("Enter number"));

let first = arr.slice(0,n);
document.write(`First ${n} elements is: ${first}`);
document.write("<br>")
let last = arr.slice(arr.length - n);
document.write(`Last ${n} elements is: ${last}`);