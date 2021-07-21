function sumEvenNumber(input){
    let result = 0
    input.forEach((inp) => {
        if(inp % 2 === 0){
            result += inp
        }
    })
    return result
}

console.log(sumEvenNumber([4, 3, 1, 2, 5, 10, 6, 7, 9, 8]))
console.log(sumEvenNumber([]))