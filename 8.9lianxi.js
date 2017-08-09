"use strict";
module.exports =function decompose(num) {
let num1=0,num2=1,sum;
if(num===1)
    {
        return 0;
    }
if (num===2)
    {
        return 1;
    }
for(let i=3;i<=num;i++)
    {
     sum=num1+num2;
    num1=num2;
    num2=sum;
    }
return sum;
};