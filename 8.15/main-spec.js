'use strict';
const findItem = require('./8.15');

describe('item出现的次数', () => {
    const arr1= [1,3,7,1,4];
    const item1=1;
    const arr2= [1,2,3,4,5,6,7,8,9]
    const item2=0;

    it('1.item出现的次数,普通的状况', () => {
        const result =findItem(arr1,item1);
        expect(result).toEqual(2);
    })
    it('2.item出现的次数,没有item的状况', () => {
        const result =findItem(arr2,item2);
        expect(result).toEqual(0);
    })


    
})