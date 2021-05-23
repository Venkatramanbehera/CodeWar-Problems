function alternativeVowel(str){
    str = str.split('')
    const odd = []
    const even = []
    const vowels = 'aeiou'
    for(let i=0; i < str.length; i++){
        if(i % 2 === 0){
            even.push(str[i])
        }else{
            odd.push(str[i])
        }
    }
    const oddResult = odd.every(function(ele){
        return vowels.includes(ele)
    })
    const evenResult = even.every(function(ele){
        return vowels.includes(ele)
    })
    if( oddResult || evenResult){
        return true
    }
    return false
}


console.log(alternativeVowel('amazon'))
console.log(alternativeVowel('chiku'))
console.log(alternativeVowel('eaeaea'))