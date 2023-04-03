/*
12. Write​ a ​JavaScript​ function​ to​ chop​ a​ string​ ​into​ chunks​​ of​ a​ given length.
*/
function stringChop(inputString, inputLength) {
    const resultArray = [];
    let i = 0;
  
    while (i < inputString.length) {
      resultArray.push(inputString.slice(i, i + inputLength));
      i += inputLength;
    }
  
    return resultArray;
  }

const inputString = "RapidOpsSolution";
const inputLength = 2;
const outputArray = stringChop(inputString, inputLength);

console.log(outputArray);