function isAnagram( string1, string2){
    const alphabets = {}
    if( string1.length !== string2.length){
        return false
    }
    for(let letter of string1){
        // if(!alphabets.hasOwnProperty(letter)){
        //     alphabets[letter] = 1
        // }else{
        //     alphabets[letter] = alphabets[letter] + 1
        // }
        alphabets[letter] = (alphabets[letter] || 0) + 1
    }
    for( let letter of string2){
        if(!alphabets[letter]){
            return false
        }
        alphabets[letter] -= 1
    }
    return true
}

console.log(isAnagram('hello','llheo'))
console.log(isAnagram('ajay','aaaj'))