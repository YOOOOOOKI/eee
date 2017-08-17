'use strict';
const findItem = require('./8.17');

describe('每个元素平方', () => {
    const arr1=  [5, 3, 7, 1];;
    

  

    it('1.每个元素平方,普通的状况', () => {
        const result =findItem(arr1);
        expect(result).toEqual([25, 9, 49, 1]);
    })
})