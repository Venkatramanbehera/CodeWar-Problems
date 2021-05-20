function removeExclamationMarks(s){
    let str = ''
    for(let i = 0; i<s.length; i++){
        if(s[i] === '!'){
            continue
        }
        else{
            str += s[i]
        }
    }
    return str
}

console.log(removeExclamationMarks('Hello World!'))