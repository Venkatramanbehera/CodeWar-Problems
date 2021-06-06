function createPhoneNumber(number){
    let result = '('
    for(let i=0; i<3; i++){
        result += number[i]
    }
    result += ') '
    for(let i=3; i<6; i++){
        result += number[i]
    }
    result += '-'
    for(let i=6; i<number.length; i++){
        result += number[i]
    }
    return result
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))