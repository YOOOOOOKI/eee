function jiaoji(arr1,arr2){
    if(arr1.length>arr2.length){
        return jiaoji(arr2,arr1);
    }
    return arr1.filter(value=>arr2.includes(value));
}

console.log(jiaoji([1,2],[1,2,2]));
console.log(jiaoji([1,1,2,1,2,2],[1,2,2]));
console.log(jiaoji([1,2,2,1],[2,2]));