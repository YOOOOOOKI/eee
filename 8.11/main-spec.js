'use strict';
const deleteStr = require('./8.11');

describe('替换链表', () => {
    const str01 = '1->2->3->3->4->5->3';
    const str02 = '1->2->4->3->6->5->3'
    const str03 = '1->1->1->1->1->1->1';
    const val01=3;
    const val02=4; 
    const val03=1;
    

    it('1.替换链表普通', () => {
        const result =  deleteStr(str01,val01);
        expect(result).toEqual('1->2->4->5');
    })

    it('2.替换链表此数只有一个', () => {
        const result =  deleteStr(str02,val02);
        expect(result).toEqual("1->2->3->6->5->3");
    })
     it('3.替换链表链表本身只有一个数', () => {
        const result =  deleteStr(str03,val03);
        expect(result).toEqual("");
    })
})