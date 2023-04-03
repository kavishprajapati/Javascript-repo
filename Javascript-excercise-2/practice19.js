/*
11. Write​ ​ a ​ ​ JavaScript​ ​function​ ​ to​ ​ insert​ ​ a ​ ​ string​ ​ within​ 
​ a ​ ​ string​ ​ at​ ​ a ​ ​ particular​ ​ position (default​ ​ is​ ​ 1).
*/

function insertString(originalString, stringToInsert, position = 1) {
    const firstPart = originalString.slice(0, position);
    const secondPart = originalString.slice(position);
    return `${firstPart}${stringToInsert}${secondPart}`;
  }

const staticString = "This is a sample string";
const inputString = "Insert me";
const inputPosition = 3;

const outputString = insertString(staticString, inputString, inputPosition);

console.log(outputString);
