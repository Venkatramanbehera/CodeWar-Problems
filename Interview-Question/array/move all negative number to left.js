// approach - 1
const moveAllNegativeNumber = (arr) => {
    for( let i = 0; i<arr.length; i++){
        for( let j = 0; j < arr.length; j++){
            if(arr[j+1] < arr[j]){
                [ arr[j+1], arr[j]] = [arr[j], arr[j+1]]
            }
        }
    }
    return arr
}

const arr = [-12, 11, -13, -5, 6, -7, 5, -3, -6]
console.log(moveAllNegativeNumber(arr));

// approach - 2
const moveAll = (arr) => {
    let j = 0
    for(let i=0; i<arr.length; i++){
        if(arr[i] < 0 ){
            if( i != j){
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
            j++
        }
    }
    return arr
}

console.log(moveAll(arr));