3. /*Write​ ​ a ​ ​ JavaScript​ ​ program​ ​ to​ ​ find​ ​ the​ ​ most
 ​frequent​ ​ item​ ​ of​ ​ an​ ​ array.*/

let arr = [0,1,1,2,3,3,4,5];
let mf = arr[0];
let maxCount = 0;

for (let i = 0; i<arr.length; i++){
    let count = 0;
    
    for(let j = i + 1; j < arr.length; j++ ){
        if(arr[i] == arr[j]) {
            count ++;
        }
    }
    if(maxCount < count){
        maxCount = count;
        mf = arr[i];
    }
}
document.write(mf);

