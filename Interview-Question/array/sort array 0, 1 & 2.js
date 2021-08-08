// solution 1 with O(n^2) Time complexity
const sortAnArrayOf = (arr) => {
    for( let i=0; i<arr.length;i++){
        for( let j=0; j < arr.length; j++){
            if( arr[j+1] <= arr[j]){
                [ arr[j+1], arr[j]] = [ arr[j],arr[j+1] ]
            }
        }
    }
    return arr
}

console.log(sortAnArrayOf([0,2,1,2,0]))

// 