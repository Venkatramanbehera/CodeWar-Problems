// You are given a two-digit integer n. Return the sum of its digits.
// eg. For n = 29, the output should be addTwoDigits(n) = 11.

const addTwoDigit = (num) => {
    let strNum = num.toString()
    let result = 0
    for(let i=0; i<strNum.length; i++){
        result += Number( strNum[i] )
    }
    return result
}

console.log(addTwoDigit(29));