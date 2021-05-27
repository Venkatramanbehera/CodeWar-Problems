var moveZeros = function (arr){
    const result = []
    for(let i=0; i<arr.length; i++){
        if(arr[i] !== 0){
            result.push(arr[i])
        }
    }
    // console.log(arr.length)
    for(let i=result.length; i <arr.length; i++){
        result.push(0)
    }
    return result
}

console.log( moveZeros([1,2,0,1,0,1,0,3,0,1]) )
console.log( moveZeros([false,1,0,1,2,0,1,3,"a"]) )