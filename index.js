// i created a funtion distinct() and gave it parameters
function distinct(arr1, arr2) {
    // then i declared a variable sum = 0 
    let sum = 0;
    // i made use of the 'for loop' to check through all characters in array1
    for (let char of arr1){
        // so if any character in array 2 doesnt appear in array 1 you add that paticular character to the sum variable
        if(!arr2.includes(char)) {
            sum = sum + char
        }
    }
    // i made use of the 'for loop' to check through all characters in array2
    for (let char of arr2){
         // so if any character in array 1 doesnt appear in array 2 you add that paticular character to the sum variable
        if(!arr1.includes(char)) {
            sum = sum + char
        }
    }
    // then i return sum
    return sum;

}
console.log(distinct([3,1,7,9], [2,4,1,9,3]));












// first of all we are checking through two similar vectors which means they should have the same length
function dotProduct(vec1, vec2) {
    // then i declared a variable ps = 0 
    let ps = 0;
    // we have a condition here that if vector 1 length isnt equals to vector 2 length javascript should return a message 
    if(vec1.length !== vec2.length) {
        return "Cannot Multiply Vectors of Different Dimensions"
    }
    // this loops through the first vector where i is the index and checks if i is leser that the vector length and adds 1 if i is lesser it also follows the same process for j
    for(let i = 0; i < vec1.length; i++) {
        for(let j = 0; j < vec2.length; j++) {
            if(i == j) {
                ps += vec1[i] * vec2[j];
            } else {
                continue;
            }
        }
    }

    return ps;
}

console.log(dotProduct([1,2,3], [4,-5,6]))