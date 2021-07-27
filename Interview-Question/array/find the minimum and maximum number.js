// approach 1
let maxMin = (arr) => {
    let max  = arr[0], min = arr[0]
    for(let i=0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }else if( arr[i] < min){
            min = arr[i]
        }
    }
    return [max,min]
}

console.log(maxMin([12,5,90,2,85,1]))

// approach 2

let minMax = (arr) => {
    arr.sort((a,b) => {
        if(a>b){
            return -1
        }else{
            return 1
        }
    })
    return [arr[0],arr[arr.length-1]]
}

console.log(minMax([12,5,90,2,85,1]))