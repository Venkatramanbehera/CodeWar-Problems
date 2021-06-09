function minSum(arr){
    arr = arr.sort(function(a,b)  {
        return a-b
    })
    let sum = 0, j=arr.length-1
    for(let i=0; i<arr.length/2; i++){
        sum += arr[i] * arr[j]
        console.log(sum,arr[i],arr[j])

        j--
    }
    return sum
}
console.log(minSum([5,4,2,3]))
console.log(minSum([9,2,8,7,5,4,0,6]))
console.log(minSum([12,6,10,26,3,24]))