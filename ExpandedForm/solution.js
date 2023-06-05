function expandedForm(num){
    var stringNumber = num.toString()
    var resultArray = []
    for(var i=0;i<stringNumber.length;i++){
        if(stringNumber[i] !== '0'){
            resultArray.push(stringNumber[i] + '0'.repeat(stringNumber.length - i -1))
        }
    }
    var result = resultArray.join(' + ')
    return result
}

console.log(expandedForm(12))