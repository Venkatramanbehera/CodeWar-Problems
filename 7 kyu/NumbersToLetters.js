function switcher(x){
    const alphabets = 'zyxwvutsrqponmlkjihgfedcba!? '
    // console.log(alphabets.indexOf(' ') + 1)
    // console.log(alphabets.charAt(12-1))
    let result = ''
    for(let i=0; i<x.length; i++){
        result += alphabets.charAt(x[i]-1)
    }
    return result
}

console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8']))
console.log(switcher(['25','7','8','4','14','23','8','25','23','29','16','16','4']))