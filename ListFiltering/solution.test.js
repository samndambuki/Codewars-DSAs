const {filterList} = require('./solution')

describe('filterList',()=>{
    it('should filter out strings from the list',()=>{
        expect(filterList([1,2,'a','b'])).toEqual([1,2])
        expect(filterList([1,2,'a','b',0,15])).toEqual([1,2,0,15])
    });
    it('should return an empty array if all the elements are strings',()=>{
        expect(filterList(['hello','world','filter'])).toEqual([])
    });
    it('should return an empty array if the input list is empty',()=>{
        expect(filterList([])).toEqual([])
    })
})