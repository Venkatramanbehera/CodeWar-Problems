function largestPairSum(numbers){
    let sum = numbers[0] + numbers[1]
    for(let i=1; i<numbers.length; i++){
        for(let j=i+1; j<numbers.length; j++){
            if(numbers[i] + numbers[j] > sum){
                sum = numbers[i] + numbers[j]
            }
        }
    }
    return sum
}

console.log( largestPairSum([10,14,2,23,19]) )
console.log( largestPairSum([99, 2, 2, 23, 19]) )
console.log( largestPairSum([-10, -8, -16, -18, -19]) )