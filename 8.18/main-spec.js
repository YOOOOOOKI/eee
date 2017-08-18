'use strict';
const findItem = require('./8.18');

describe('找索引和元素相等', () => {
    
    const arr1 = [1, 3, 7, 1 ,4,];
   let  item=1;
    

  

    it('1.找索引和元素相等,普通的状况', () => {
        const result =findItem(arr1,item);
        expect(result).toEqual("0,3");
    })
   
        
})