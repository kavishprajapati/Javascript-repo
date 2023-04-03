/*
7. Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ get​ ​ the​ ​ month​ ​name​ ​ 
from​ ​ a ​ ​ particular​ ​ date.
*/

var month_name = function(dt){
  mlist = [ "January", "February", "March", "April", "May", "June", "July", 
  "August", "September", "October", "November", "December" ];
    return mlist[dt.getMonth()];
  };
  console.log(month_name(new Date("11/11/2023")));
  console.log(month_name(new Date("12/13/2014")));
  
