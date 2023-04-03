// Empty square pattern (refer practice6.js)

for (let i = 1; i <= 5; i++){
    for (let j = 1; j <= 5; j++){
    
        if (i == 1 || i == 5 || j == 1 || j == 5){
            document.write("o ");
        }
        else{
            document.write(" &nbsp;&nbsp ");
        }
    }
    document.write("<br>");
}
