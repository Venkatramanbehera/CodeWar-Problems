const numInversion = (a) => {
    let count = 0
    for(let i=0; i<a.length; i++){
        for(let j=0; j<a.length - i -1; j++){
            if(a[j+1] < a[j]){
                [a[j+1],a[j]] = [a[j],a[j+1]]
                count++
            }
        }
    }
    return count
}

console.log(numInversion([1,3,2]));
console.log(numInversion([8, 6, 6, 1, 1, 1, 3, 4, 2]));
console.log(numInversion([2,2,1,1]));