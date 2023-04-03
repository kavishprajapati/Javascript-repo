/*
 9.Write​ ​a ​JavaScript​ ​ function​ ​ to​ ​ convert​ ​ a ​ ​ Unix​ ​timestamp​ ​ to​ ​ time.
*/

function unixTimestampToDateTime(unixTimestamp) {
    // Convert Unix timestamp to milliseconds
    var milliseconds = unixTimestamp * 1000;
  
    // Create a new Date object with the milliseconds
    var dateObject = new Date(milliseconds);
  
    // Extract date and time components
    var date = dateObject.toLocaleDateString();
    var time = dateObject.toLocaleTimeString();
  
    // Combine date and time components into a single string
    var dateTime = date + ' ' + time;
  
    // Return the date and time string
    return dateTime;
  }
  console.log(unixTimestampToDateTime(1607518718))