'use strict'
module.exports = 
function findItem(arr)
{   
            let result='';
           let calNum=new Map();
           calNum.set(arr[0],1);
           
           for(let i=1;i<arr.length;i++)
            {   let num=0;
                for(let [key, value] of calNum.entries())
                    {   
                        
                         if(arr[i]===key)
                            {
                                
                            calNum.set(arr[i],value+1);

                                    num=1;
                            }
                        
                    }
               if(num===0)
                {
                    calNum.set(arr[i],1);
                }
            }
           
            for (let [key, value] of calNum) 
                {
                    if(value>=2)
                        {
                            result=result+key;
                        }
                }
                    return result;
} 
