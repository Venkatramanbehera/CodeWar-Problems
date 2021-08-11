const merge = (left, right) => {
    const array = []
    while(left.length && right.length){
        if(left[0] < right[0]){
            array.push(left.shift())
        }else{
            array.push(right.shift())
        }
    }
    // console.log([...array, ...left, ...right]);
    return [ ...array, ...left, ...right ]
}

const mergeSortAlgorithm = (array) => {
    const mid = array.length / 2

    if(array.length < 2) {
        return array
    }

    const left = array.splice(0,mid)
    return merge(mergeSortAlgorithm(left), mergeSortAlgorithm(array))
}

console.log(mergeSortAlgorithm([2,7,3,6]));