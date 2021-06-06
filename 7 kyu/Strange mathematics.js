function strangeMath(n,k){
    const numArray = []
    for(let i=1; i<=n; i++){
        numArray.push(i)
    }
    const result =  numArray.sort()
    for(let i=0; i<numArray.length; i++)
    {
        if(numArray[i] === k){
            return i+1
        }
    }
    return -1
}

console.log(strangeMath(11,2))
console.log(strangeMath(15, 5))
console.log(strangeMath(15, 15))

