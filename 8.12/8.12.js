'use strict'
 function judgeNum()
{   
    let arr=[];
    for (let i=100;i<=999;i++)
    {
        let a=parseInt(i/100);
        let b=parseInt(i%100/10);
        let c=parseInt(i%100%10);
       
        if(a*a*a+b*b*b+c*c*c===i)
            {
                arr.push(i);
            }
           
           
} 
        return arr;
    }
   console.log(judgeNum()) ;
   
    