function abbr(name){
    name = name.toUpperCase()
    name = name.split(' ')
    // const result = name.filter(function(ele){
    //     console.log(ele[0])
    //     return ele[0]
    // })
    // return result

    const arr = []
    for(const ele of name){
        console.log(ele[0])
        arr.push(ele[0])
    }
    return `${arr[0]}.${arr[1]}`
}

console.log(abbr('Sam Harris'))
console.log(abbr('Patrick Feeney'))