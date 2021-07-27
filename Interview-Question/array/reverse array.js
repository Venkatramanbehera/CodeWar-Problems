// approach - 1
function reverse(arr){
    const result = []
    for( let i=arr.length - 1; i>=0; i--){
        result.push(arr[i])
    }
    return result
}

console.log(reverse([12,3,67,2,88]))

// approach - 2
let reverseArray = (arr, n) => {
    if( n === 0){
        return []
    }
    return [arr[n-1]].concat(reverseArray(arr,--n))
}

console.log(reverseArray([12,3,67,2,88],5))

// approach - 3

console.log([12,3,67,2,88].reverse())
