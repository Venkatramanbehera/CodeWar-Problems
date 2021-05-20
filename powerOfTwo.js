function powerOfTwo(n){
    const result = []
    if(n === 0){
        return [1]
    }
    for(let i=0; i<=n; i++){
        result.push(Math.pow(2,i))
    }
    return result
}

console.log(powerOfTwo(0))
console.log(powerOfTwo(1))
console.log(powerOfTwo(2))