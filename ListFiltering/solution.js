//lst parameter - list of input arrays
function filterList(lst){
    //filter method on list array 
    //use callback function 
    //arrow function syntax
    //check typof x - compare it to string number
    //x is value of input array ie element of an array
    //true - element returned in filtered array
    //false excluded from the filtered array
    return lst.filter((x)=> typeof x === 'number')
}
console.log(filterList([1,2,'a','b']));

module.exports = {filterList}