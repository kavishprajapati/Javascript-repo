/* 2.
 Write​ ​ a ​ ​ JavaScript​ ​ program​ ​ which​ ​ accepts​ ​ a ​ ​ number​​ as​ ​ input​ ​ and​ 
​ insert​ ​ dashes​ ​ (-) between​ ​ each​ ​ two​ ​ even​ ​ numbers.
 Input = 02544168
 Output = 0-254-416-8
*/

let num = prompt("Enter numbers");
let num1 = num.toString();

let outputresult = "";

for (let i = 0; i < num1.length; i++){
   outputresult = outputresult + num1[i];
   
   if (num1[i] % 2 === 0 && num1[i + 1] % 2 === 0) {
    outputresult = outputresult + "-";
   }
   
}
document.write(outputresult);
