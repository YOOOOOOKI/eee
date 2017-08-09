"use strict";
module.exports =function decompose(num) {
    let prime_number=[];//素数矩阵
    let final_number=[];
    for(let i=2;i<=num;i++)//求num以内的素数矩阵
    {
        let judge=1;
        for(let j=2;j<i;j++)
        {
            if(i%j===0)
            {
                judge=0;//不是素数
                break;
            }
        }
        if(judge)
        {
            prime_number.push(i);
        }
    }
   while(num!==1){
       for(let i of prime_number)
       {
           if(num%i===0)
           {
               final_number.push(i);

               num=num/i;
           }

       }
   }
  final_number.sort(function (a,b) {
      return a-b;
  });
    let str='';
    for(let i of final_number)
        {
            str=str+String(i);
        }
   return (str);
};
// decompose(45);
// decompose(90);

