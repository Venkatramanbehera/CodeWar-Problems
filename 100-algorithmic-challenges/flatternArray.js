const flattenArray = (arr) => {
    const result = [...arr.toString('')]
    const resultArray = []
    result.forEach((ele) => {
        if(Number(ele)){
            resultArray.push(ele)
        }
    })
    return resultArray
}

console.log(flattenArray([1, [2], [3, [4,5]]]))
