'use strict';
module.exports = 
function findItem(arr,item)
{   
    return   arr.map(function(value,index,arr)
    {
         if(value===item)
            
                return index;
            

    }).join("").split("").join(",");
        
    
    
   
           
                
} 
