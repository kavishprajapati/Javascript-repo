/*
 8. Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ get​ ​ difference​ ​between​ ​ two​ ​ dates,​ ​
 from​ ​ maximum​ ​ unit​ ​ to minimum​ ​ unit.
*/
const date1 = new Date('01/07/2018');
const date2 = new Date('01/07/2019');

function dateDiff(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000; // milliseconds in one day
    const diffInMs = Math.abs(date1 - date2); // absolute difference in milliseconds
    const diffInDays = Math.round(diffInMs / oneDay); // round to nearest whole day
    
    const years = Math.floor(diffInDays / 365); // number of whole years
    const months = Math.floor((diffInDays % 365) / 30); // number of whole months
    const days = diffInDays % 30; // number of days
    
    return `${years} years, ${months} months, ${days} days`;
  }

  console.log(dateDiff(date1, date2));
