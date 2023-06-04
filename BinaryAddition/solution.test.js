const {addBinary} = require('./solution') 

describe('add Binary tets',()=>{
    it('should take two parameters',()=>{
        expect(addBinary(1,2)).toEqual(addBinary(1,2))
    })
    it('should return a binary output',()=>{
        expect(addBinary(1,1)).toBe('10')
    })
})