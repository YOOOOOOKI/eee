'use strict';
const judgeNum = require('./8.12');

describe('水仙花', () => {
    

    it('1.水仙花普通', () => {
        const result =judgeNum();
        expect(result).toEqual([153,370,371,407]);
    })

    
})