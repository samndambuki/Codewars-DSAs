//takes arr as a parameter
function oddNumbers(arr){
    //store XOR result
    let result = 0;
    //iterate through each element of a array using for loop
    //perform XOr beteween the result and the element
    for(let i=0; i<arr.length;i++){
        //XOR or operator 
        result ^= arr[i]
    }
    return result
}

console.log(oddNumbers([1,1,2]))
console.log(oddNumbers([0,1,0,1,0]))
console.log(oddNumbers([5,3]))


