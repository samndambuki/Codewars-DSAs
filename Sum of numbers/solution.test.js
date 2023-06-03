const {sumAll} = require('./solution')

//describe it expect
describe('sumAll',()=>{
    it('returns the sum of all integers between and including the given values',()=>{
        expect(sumAll(1,0)).toBe(1);
        expect(sumAll(1,2)).toBe(3);
        expect(sumAll(-1,0)).toBe(-1);
        expect(sumAll(5,-1)).toBe(14);
    })
})