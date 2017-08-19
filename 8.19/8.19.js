"use strict";
function deleteEle(arr)
{
    let setArr=new Set(arr);
    return [...setArr];
}
console.log(deleteEle(["s","a","s","b","a",1,"1",1]));