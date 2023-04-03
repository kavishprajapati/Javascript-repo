/*
13. Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ print​​ an​ ​ integer​ ​ with​ ​ 
commas​ ​ as​ ​ thousands​ ​ separators.
*/

function addCommas(inputNumber) {
    // Convert the number to a string
    let inputString = inputNumber.toString();
    let outputString = "";
  
    // Loop through the string from right to left
    for (let i = inputString.length - 1; i >= 0; i--) {
     
        // Add the current digit to the output string
      outputString = inputString.charAt(i) + outputString;
  
      // If we've reached a multiple of three digits from the right, add a comma
      if ((inputString.length - i) % 3 === 0 && i !== 0) {
        outputString = "," + outputString;
      }
    }
  
    return outputString;
  }

const inputNumber = 1023165454197;
const outputString = addCommas(inputNumber);

console.log(outputString);