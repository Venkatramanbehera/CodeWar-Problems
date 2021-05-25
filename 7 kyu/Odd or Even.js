function oddOrEven(array){
    // console.log(array)
    if(array.length === 0){
        return 'even'
    }
    let result = 0
    array.forEach((ele) => {
        result += ele
    })
    return Math.abs(result) % 2 == 0 ? 'even' : 'odd'
}

console.log(oddOrEven([1]))
console.log(oddOrEven([]))
console.log(oddOrEven([0]))
console.log(oddOrEven([0, -1, -5]))