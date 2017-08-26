function left_pad(str,length,tag) {
    let strlen=str.length;
    let result='';
    while(result.length+strlen<length){
        result+=tag;
    }
    return result+str;
}

console.log(left_pad('hello',20,'1'));