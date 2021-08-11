// approach - 1
const almostIncreasingSequence = (arr) => {
    let count = 0
    for(let i=0; i<arr.length; i++){
        if(arr[i] < arr[i-1] ){
            count++
            if(arr[i] <= arr[i-2] && arr[i+1] <= arr[i-1]){
                count++
            }
        }
    }
    if(count >= 2){
        return false
    }
    return true
}

// approach - 2 (ES-6)

const almostIncreasingSequenceEs = (arr) => {
    let count = 0
    arr.map((num,i) => {
        if(num <= arr[i-1]){
            count++
            if(num <= arr[i-2] && arr[i+1] <= arr[i-1]){
                return false
            }
        }
    }
    )
    return count <= 1
}

console.log(almostIncreasingSequence([1,3,2]));
console.log(almostIncreasingSequence([1,3,2,4,7]));
console.log(almostIncreasingSequence([1,3,1,2,3]));
console.log(almostIncreasingSequenceEs([1,3,1,2,3]));


console.log(isNaN('hello'))
