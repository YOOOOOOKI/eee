'use strict'
module.exports = function findItem(arr,item)
{   
    let newArr=arr.filter(x=>(x===item));
    return newArr.length;
           
} 
    