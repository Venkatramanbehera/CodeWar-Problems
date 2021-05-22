function validBraces(braces){
    const result = []
    for(let i=0; i<braces.length; i++){
        // console.log(braces[i] === '[')
        let char = result[result.length - 1]
        if(braces[i] === '(' || braces[i] === '{' || braces[i] === '['){
            result.push(braces[i])
        }
        else if((braces[i] === ')' && char === '(') || (braces[i] === ']' && char === '[') || (braces[i] === '}' && char === '{')){
            result.pop()
        }
        else{
            result.push(braces[i])
        }
    }
    return result.length === 0
}

console.log(validBraces("(){}[][]{}"))
console.log(validBraces("({})"))
console.log(validBraces("(}"))
console.log(validBraces("[(])"))
console.log(validBraces("[({})](]"))