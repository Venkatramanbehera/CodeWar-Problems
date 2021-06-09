function nthSmallest(arr, pos){
    arr = arr.sort(function(a,b){
        return a-b
    })
    return arr[pos-1]
}

console.log(nthSmallest([3,1,2],2))
console.log(nthSmallest([15,20,7,10,4,3],3))