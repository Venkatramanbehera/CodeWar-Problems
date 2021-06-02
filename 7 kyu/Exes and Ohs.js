function XO(str){
    const result = {
        x : 0,
        o : 0
    }
    for(let i=0; i<str.length; i++){
        if(str[i].toLowerCase() === 'x' || str[i].toLowerCase() === 'o'){
            result[str[i].toLowerCase()] = result[str[i].toLowerCase()] + 1
        }
    }
    return result.x === result.o ? true : false
}

console.log(XO("ooxx"))
console.log(XO("xoXo"))
console.log(XO("xoXo"))
console.log(XO("xoX"))