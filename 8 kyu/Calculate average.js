function findAverage(array){
    let sum = 0
    array.forEach((ele) => {
        sum += ele
    })
    return sum / array.length
}

console.log(findAverage([1,1,1]))