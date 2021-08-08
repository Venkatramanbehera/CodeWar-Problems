const doUnion = (arr1, arr2) => {
    const result = new Set(arr1)
    const resultArray = []
    for( let num of result){
        resultArray.push(num)
    }
    arr2.forEach((ele) => {
        if( !resultArray.includes(ele) ){
            resultArray.push(ele)
        }
    })
    return  resultArray
}

console.log(doUnion([1,2,3,4,5],[1,2,3]))
console.log(doUnion([1,2,3,4,5],[1,2,3,6,2]))

const r = new Set([1,2,3,4,5].concat([1,2,3,4,5]))
const result = []
for(let num of r){
    result.push(num)
}

console.log(result)