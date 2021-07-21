function squareDigits(num){
    let result = ''
    const strNum = num.toString()
    for(let char of strNum){
        result += char*char
    }
    return Number(result)
}

console.log(squareDigits(3212))
console.log(squareDigits(2112))
console.log(squareDigits(9119))