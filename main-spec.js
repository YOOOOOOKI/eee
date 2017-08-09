'use strict';
const decompose = require('./8.9lianxi');

describe('斐波纳契数列', () => {
    const num01 = 10;
    const num02 = 1;
    const num03 = 21;

    it('1.斐波纳契数列普通', () => {
        const result = decompose(num01);
        expect(result).toEqual(34);
    })

    it('2.斐波纳契数列边界条件', () => {
        const result = decompose(num02);
        expect(result).toEqual(0);
    })
     it('3.斐波纳契数列较大数字', () => {
        const result = decompose(num03);
        expect(result).toEqual(6765);
    })
})