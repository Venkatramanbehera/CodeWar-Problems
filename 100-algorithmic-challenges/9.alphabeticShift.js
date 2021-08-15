const alphabeticShift = (str) => {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'
    const result = str.split('').map((ele) => {
        if(alphabets.indexOf(ele) === 25){
            return alphabets[0]
        }else{
            return alphabets[alphabets.indexOf(ele) + 1]
        }
    })
    return result.join('')
}

console.log(alphabeticShift('crazy'));