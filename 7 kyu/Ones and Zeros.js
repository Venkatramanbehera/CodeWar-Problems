const binaryArrayToNumber = arr =>{
    let result = ''
    for(let i=0; i<arr.length; i++){
        result += String(arr[i])
    }
    return parseInt(result,2)
}

console.log(binaryArrayToNumber([0, 0, 0, 1]))
console.log(binaryArrayToNumber([0, 0, 1, 1]))
console.log(binaryArrayToNumber([1, 0, 0, 1]))
console.log(binaryArrayToNumber([1,1,1,0,1,0]))

// console.log(parseInt(111010,2))