// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

// approach - 1
const adjacentElementsProduct = (arr) => {
    let product = 0
    for(let i=1; i<arr.length; i++){
        if(arr[i]*arr[i-1] > product){
            product = arr[i] * arr[i-1]
        }
    }
    return product
}
// Es - 6

const adjacentElementsProductEs = (arr) => {
    let largestProduct = arr[0] * arr[1] 
    arr.map((ele,i) => {
        largestProduct = ele * arr[i+1] > largestProduct ? ele * arr[i+1] : largestProduct
    })
    return largestProduct
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]))
console.log(adjacentElementsProductEs([3, 6, -2, -5, 7, 3]))