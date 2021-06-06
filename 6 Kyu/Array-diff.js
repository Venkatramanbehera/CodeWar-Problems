function arrayDiff(a, b){
    return a.filter( ele => !b.includes(ele))
}

console.log(arrayDiff([1,2],[1]))
console.log(arrayDiff([1,2,2,2,3],[2]))
console.log(arrayDiff([1,2,3],[1,2]))