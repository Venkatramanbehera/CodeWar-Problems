function firstNonConsecutive(arr){
    
    for(let i=1; i<arr.length; i++){
        if(arr[i] - arr[i-1] != 1){
            return arr[i] 
        }
    }
    return null
}

console.log(firstNonConsecutive([1,2,3,4,6,7,8]))
console.log(firstNonConsecutive([ -4, -3, -2, -1, 0, 1, 2, 3, 4, 5 ]))
console.log(firstNonConsecutive([ -4 ]))
console.log(firstNonConsecutive([ ]))