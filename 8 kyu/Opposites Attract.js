function loveFunc(flower1,flower2){
    if(flower1 % 2 === 0 && flower2 % 2 !== 0){
        return true
    } else if(flower1 % 2 !== 0 && flower2 % 2 === 0){
        return true
    }
    return false
}

console.log(loveFunc(1,4))
console.log(loveFunc(2,2))
console.log(loveFunc(0,1))
console.log(loveFunc(0,0))