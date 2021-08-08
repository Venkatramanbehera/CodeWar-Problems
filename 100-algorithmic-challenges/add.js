// Write a function that returns the sum of two numbers.
// Write a function that returns the sum of all numbers regardless of # of params.

const sumOfAll = (...arguments) => {
    let result = 0
    arguments.forEach((ele) => {
        result += ele
    })
    return result
}


console.log(sumOfAll(10,20,30,50));