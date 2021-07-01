function squareSum(numbers){
    let amount = 0
    numbers.forEach((num) => {
        amount += num * num
    })
    return amount
}

console.log(squareSum([1,2,2]))
console.log(squareSum([0, 3, 4, 5]))