function inArray(array1, array2){
    const result = []
    for(let i=0; i<array1.length; i++){
        for( let j =0; j<array2.length; j++){
            if(array2[j].includes(array1[i]) && !result.includes(array1[i])){
                // console.log(array1[i])
                result.push(array1[i])
            }
        }
    }
    return result.sort()
}

// es6 aproach

function inArray(a1,a2){
    return a1.filter( sub => a2.some( whole => whole.includes(sub))).sort();
}
let a1 = ["arp", "live", "strong"]
let a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
console.log(inArray(a1,a2))
console.log(inArray(["tarp", "mice", "bull"],["lively", "alive", "harp", "sharp", "armstrong"]))
