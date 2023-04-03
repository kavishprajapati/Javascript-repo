/* 
4. Write​ ​a ​JavaScript​ ​program​ ​to​ ​shuffle​ ​an​ ​array.
*/

let arr = [0,1,2,3,4,5,6];
len = arr.length;

for (i = 0; i < len-1; i++){
    let j = Math.floor(Math.random() * (i+1));
    let temp = arr[i];

    arr[i] = arr[j];
    arr[j] = temp;
}
console.log(arr);


