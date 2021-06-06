function insideOut(x){
    const arr = x.split(' ')
    const result = []
    for(let i=0; i<arr.length; i++){
        let word = arr[i]
        if(word.length > 3 && word.length % 2 === 0){
            let res = word.slice(0,word.length/2).split('').reverse().join('') + word.slice(word.length/2).split('').reverse().join('')
            result.push(res)
        }else if(word.length > 3 && word.length % 2 !== 0){
            result.push(word.slice(0,word.length/2).split('').reverse().join('') + word[(word.length -1 )/2] + word.slice(word.length/2+1).split('').reverse().join(''))
        }
        else{
            result.push(word)
        }
    }
    return result.join(' ')
}



console.log(insideOut('man i need a taxi up to ubud'))
console.log(insideOut('what time are we climbing up the volcano'))
console.log(insideOut('take me to semynak'))


const word = 'neaed'
console.log(word[word.length - 1])
// console.log(word.slice(0,word.length/2).split('').reverse().join('') + word.slice(word.length/2).split('').reverse().join(''))