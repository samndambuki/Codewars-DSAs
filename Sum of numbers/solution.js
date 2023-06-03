// //for loop
// for(let i = 0; i<=5;i++){
//     console.log(i)
// }

function sumAll(a,b){

    //determine minimum and maximum values among a and b
    const minimumValue = Math.min(a,b)
    const maximumValue = Math.max(a,b)

    //initialize sum to 0 . it will be used to store the corresponding values of the added sums
    let sum = 0
    //iterate over min and max value
    for(let i = minimumValue; i<=maximumValue; i++ ){
        sum+=i
    }
    return sum
}

console.log(sumAll(1,2))

module.exports = {sumAll}