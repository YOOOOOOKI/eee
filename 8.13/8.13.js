'use strict'
module.exports = function findMid(arr)
{   
    arr.sort((a,b)=>a-b);
    if(arr.length%2===0)
        {
           
            return (arr[parseInt((arr.length-1)/2)]+arr[arr.length/2])/2;
        }
        else{
            return arr[parseInt(arr.length/2)];
        }
           
} 
    