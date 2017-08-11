"use strict";
module.exports = function deleteStr(str,val){
    let num=val.toString();

    for(let i =0;i<str.length;i++)
        {
            if(i%3===0)
                {
                    if(str[i]===num)
                        {
                            if(i===str.length-1)
                                {
                                    str=str.replace(str.substring(i-2,i+1),"");
                                }
                           str= str.replace(str.substring(i,i+3),"");
                            i=i-1;
                        }
                }
        }
    return str;


};