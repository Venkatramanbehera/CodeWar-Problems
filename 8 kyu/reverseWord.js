function reverseWord(str){
    str = str.split(' ')
    return str.reverse().join(' ')
}

console.log(reverseWord('The greatest victory is that which requires no battle'))