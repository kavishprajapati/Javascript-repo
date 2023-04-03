/*
10. Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ get​ ​ time​ ​differences​ ​ in​ ​ 
years,​ ​ months,​ ​ weeks,​ ​ days,​ ​ hours and​ ​ minutes​ ​ between​ ​ two​ ​ dates.
*/

// const startDate = new Date('01-07-2018');
// const endDate = new Date('03/05/2020');

function getTimeDifference(startDate, endDate) {
    const diffInMs = Math.abs(endDate - startDate);
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    const years = Math.floor(diffInDays / 365);
    const months = Math.floor((diffInDays - years * 365) / 30);
    const weeks = Math.floor((diffInDays - years * 365 - months * 30) / 7);
    const days = diffInDays - years * 365 - months * 30 - weeks * 7;
    const hours = Math.floor(diffInMs / (1000 * 60 * 60) % 24);
    const minutes = Math.floor(diffInMs / (1000 * 60) % 60);
    
    return {
      years: years,
      months: months,
      weeks: weeks,
      days: days,
      hours: hours,
      minutes: minutes
    }
  }

  const startDate = new Date('01-07-2018');
  const endDate = new Date('03/05/2020');
  const timeDiff = getTimeDifference(startDate, endDate);
  console.log(timeDiff);