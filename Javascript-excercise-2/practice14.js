/*
6.Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ fill​ ​ an​ ​ array​ ​with​ ​ values​ ​ 
(either numeric or​ string​ ​ with​ ​ one character)​ ​ on​ ​ supplied​ ​ bounds.
*/

function num_range(start, end, step) {
    let arr = [];
    let static_array = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let start_index = static_array.indexOf(start);
    let end_index = static_array.indexOf(end);
  
    for (var i = start_index; i <= end_index; i += step) {
      arr.push(static_array[i]);
    }
  
    return arr;
  }
  console.log(num_range('a','z',2));
