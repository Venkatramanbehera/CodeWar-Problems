function sortTheVowels(s){
    if(s.length == 0 || s === undefined || typeof(s) !== 'string'){
        return ''
    }
    let result = ''
    const vowel = 'aeiou'
    for(let i=0; i<s.length-1; i++){
        if(vowel.includes( s[i].toLowerCase() )){
            // console.log(s[i])
            result += '|'+s[i]+'\n'
        }else{
            result += s[i] + '|'+'\n'
        }
    }
    if(vowel.includes( s[s.length-1].toLowerCase())){
        result += '|'+s[s.length-1]
    }else{
        result += s[s.length-1] + '|'
    }
    return result
}

console.log(sortTheVowels('Codewars'))
console.log(sortTheVowels('Rnd Te5T'))
console.log(sortTheVowels(''))