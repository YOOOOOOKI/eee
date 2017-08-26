function flatArr(arr){
    return arr.join('').split(',').map(value=>+value);
}

console.log(flatArr([[1,2,[1,2]]]));