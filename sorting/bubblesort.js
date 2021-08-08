// approach 1
const bubbleSort = (arr) => {
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length-i-1; j++){
            if(arr[j+1] < arr[j]){
                // Es6 way swapping 2 number
                [arr[j+1], arr[j]] = [arr[j],arr[j+1]]
            }
        }
    }
    return arr
}

console.log(bubbleSort([39,2,24,98,1,45]))

// approach 2 of optimsed solution

const bubbleSortApproach2 = (arr) => {
    let noSwaps;
    for(let i=0; i<arr.length; i++){
        noSwaps = true
        for(let j=0; j < arr.length-i-1; j++){
            if( arr[j+1] < arr[j]){
                [arr[j+1], arr[j]] = [arr[j],arr[j+1]]
                noSwaps = false
            }
        }
        if(noSwaps){
            break
        }
    }
    return arr
}

console.log(bubbleSortApproach2([39,2,24,98,1,45]))