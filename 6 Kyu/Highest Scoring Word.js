function high(x){
    const alpahabets = 'abcdefghijklmnopqrstuvwxyz'
    x = x.split(' ')
    let result 
    console.log(x)
    let prevLength = 0
    for(let i=0; i<x.length; i++){
        const word = x[i]
        let sum = 0
        for(let j=0; j<word.length; j++){
            sum += alpahabets.indexOf(word[j]) + 1
        }
        if(sum > prevLength){
            prevLength = sum
            result = word
        }
        
    }
    return result
}

console.log(high('man i need a taxi up to ubud')) // taxi