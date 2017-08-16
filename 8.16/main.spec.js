'use strict';
const findItem = require('./8.16');

describe('重复的元素', () => {
    const arr1=  ['a','b','c','d','a'];
    
    const arr2= [1,2,3,4,5,6,7,8,9,8,8]
  

    it('1.重复的元素,普通的状况', () => {
        const result =findItem(arr1);
        expect(result).toEqual("a");
    })
    it('2.重复的元素,重复多次', () => {
        const result =findItem(arr2);
        expect(result).toEqual("8");
    })


    
})