'use strict';
const findMid = require('./8.13');

describe('中位数', () => {
    const arr1= [1,2,3,4,5,6,7,8];
    const arr2= [1,2,3,4,5,6,7,8,9]

    it('1.中位数偶数', () => {
        const result =findMid(arr1);
        expect(result).toEqual(4.5);
    })
    it('1.中位数奇数', () => {
        const result =findMid(arr2);
        expect(result).toEqual(5);
    })


    
})