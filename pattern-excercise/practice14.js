// cross diagonal pattern
n = 5;
for (let i=1; i<=n; i++){
    for (let j=1; j<=n; j++){

        if ( i == j || j == ((n-i)+1) ){
            document.write("o");
        } 
        else{
            document.write(" &nbsp ")
        }
    }
    document.write("<br>")
}

