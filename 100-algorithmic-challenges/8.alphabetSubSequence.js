const alphabetSubSequence = (str) => {
    for(let i=0; i<str.length; i++){
        for(let j=i+1; j<str.length; j++){
            if(str[i].charCodeAt() >= str[j].charCodeAt()){
                return false
            }
        }
    }
    return true
}

console.log(alphabetSubSequence('ace'));
console.log(alphabetSubSequence('bxz'));
console.log(alphabetSubSequence('effg'));
console.log(alphabetSubSequence('cdce'));