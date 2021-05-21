function first(arr, n = 1){
    const result = []
    if(n>arr.length){
        n = arr.length
    }
    for(let i = 0; i < n; i++){
        result.push(arr[i])
    }
    return result
}
var arr = ['a', 'b', 'c', 'd', 'e'];
console.log(first(arr))
console.log(first(arr,2))
console.log(first(arr,3))
console.log(first(arr,0))
console.log(first(arr,9))