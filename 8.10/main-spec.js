'use strict';
const decompose = require('./lianxi3');

describe('找不重复的数', () => {
    const arr01 = [1,2,2];
    const arr02 = [1];
    const arr03 = [2,3,3,6,6,10,10,5,5];

    it('1.找不重复的数普通', () => {
        const result = decompose(arr01);
        expect(result).toEqual(1);
    })

    it('2.找不重复的数边界条件只有一个数', () => {
        const result = decompose(arr02);
        expect(result).toEqual(1);
    })
     it('3.找不重复的数较多数', () => {
        const result = decompose(arr03);
        expect(result).toEqual(2);
    })
})