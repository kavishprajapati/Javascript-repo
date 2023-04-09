let input = '<p><strong><em>Javascript Exercises</em></strong></p>'


function removetag(str){

    let result = '';
    let count = 0;

    for (let i = 0; i < str.length; i++){
        if (str[i] === '<') {
            count++;
        }
        else if (str[i] === '>'){
            count--;
        }
        else if (count === 0){
            result = result + str[i];
        }
    }
    return result;
}

let output = removetag(input);
console.log(output);