// right side angled triangle
let rows = 5;

for (let n = 1; n <= rows - 1; n++) {
   for (let num = 1; num <= n; num++) {
     document.write("o");
   }
   document.write(" &nbsp ");
   document.write("<br>");
}


for (let n = 1; n <= rows; n++) {
   for (let num = 1; num <= 6 - n; num++) {
    document.write("o");
   }
   document.write(" &nbsp ");
   document.write("<br>");
}




