"use strict";
module.exports =function findNum(arr) {

let sumarr=[];
sumarr[0]=arr[0];
for(let i =0;i<arr.length;i++)
    {
        for(var j =0;j<sumarr.length;j++)
            {
                if(arr[i]===sumarr[j])
                    {
                         sumarr.splice(j,1);
                         break;
                    }

            }
        if(j===arr.length)
            {
                sumarr.push(arr[i]);
            }
    }
return arr[0];
}
