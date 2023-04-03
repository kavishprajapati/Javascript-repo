/*
14. Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ print​​ array​ ​ of​ ​ object​ 
​ in​ ​ ascending​ ​ order​ ​ of​ ​ age, & descending​ ​ order​ ​ of​ ​ name.​ 
​ Make​ ​ array​ ​ of​ ​ object​ ​ with​ ​ three​ ​ fields​ ​which are​​:
*/

function sortArray(arr) {
    arr.sort(function(a, b) {
      // Sort by age in ascending order
      if (a.age < b.age) {
        return -1;
      } else if (a.age > b.age) {
        return 1;
      }
  
      // If ages are equal, sort by name in descending order
      if (a.name < b.name) {
        return 1;
      } else if (a.name > b.name) {
        return -1;
      }
  
      return 0;
    });
  
    return arr;
  }

  const arr = [
    { id: 1, name: "Alice", age: 30 },
    { id: 2, name: "Bob", age: 25 },
    { id: 3, name: "Charlie", age: 40 },
    { id: 4, name: "David", age: 25 },
    { id: 5, name: "Emily", age: 35 },
    { id: 6, name: "Frank", age: 30 },
    { id: 7, name: "George", age: 20 },
    { id: 8, name: "Hannah", age: 35 },
    { id: 9, name: "Isabelle", age: 25 },
    { id: 10, name: "John", age: 40 },
  ];
  
  console.log(sortArray(arr));