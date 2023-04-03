/*
5. Write​ ​ a ​ ​ JavaScript​ ​ program​ ​ to​ ​ compute​ ​ the​ ​ union​ ​of​ ​ two​ ​ arrays,​ 
​and​ ​ Write​ ​ a ​ ​ JavaScript function​ ​ to​ ​ find​ ​ the​ ​ difference​ ​ of​ ​ two​ ​ arrays, 
and intersection of two arrays.
*/


// for union
let arr1 = [0,1,2,3];
let arr2 = [3,4,5];

function union(arr1, arr2){
    
    let result = [];
    
    // add elements from arr1 to a result
    for( i = 0; i < arr1.length; i++){
        if(!result.includes(arr1[1])) {
            result.push(arr1[i]);
        }
    }
    
    // add elements from arr2 to a result
    for (let j = 0; j < arr2.length; j++){
        if(!result.includes(arr2[j])){
            result.push(arr2[j])
        }
    }
    return result;
}
console.log(union(arr1,arr2));

// Difference

function difference(arr1, arr2){

    let result = [];
     
    // Add elements from arr1 that are not in arr2
    for (let i = 0; i < arr1.length; i++){
        if(!arr2.includes(arr1[i])){
            result.push(arr1[i]);
        }
    }
    // Add elemnts from arr2 that are not in arr1
    for (let j = 0; j < arr2.length; j++){
        if(!arr1.includes(arr2[j])){
            result.push(arr2[j])
        }
    }

    return result;
}
console.log(difference(arr1,arr2));

//Interaction 

function Interaction(arr1, arr2) {
    let result = [];

    // Add elements from arr1 that also in arr2
    for (let i = 0; i < arr1.length; i++){
        if (arr2.includes(arr1[i])) {
            result.push(arr1[i]);
        }
    }

    return result;
}
console.log(Interaction(arr1,arr2));