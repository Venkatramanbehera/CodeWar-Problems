const bubbleSort = (arr) => {
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length - i -1; j++){
            if(arr[j+1] < arr[j]){
                [arr[j+1], arr[j]] = [arr[j],arr[j+1]]
            }
        }
    }
    return arr
}

const selectionSort = (arr) => {
    for(let i=0; i<arr.length-1; i++){
        let minIndex = i
        for(let j=i+1; j<arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
    return arr
}

const insertionSort = (arr) => {
    for(let i= 1; i<arr.length; i++){
        for(let j = i + 1; j > -1; j--){
            if( arr[j+1] < arr[j]){
                [arr[j+1] , arr[j]] = [arr[j] , arr[j+1]]
            }
        }
    }
    return arr
}


console.log(bubbleSort([2,7,4,1,5,3]))
console.log(selectionSort([2,7,4,1,5,3]))
console.log(insertionSort([2,7,4,1,5,3]))