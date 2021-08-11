const sortAdd = (arr) => {
    const odd = arr.filter((ele) => {
        return ele % 2 !== 0
    }).sort()
    const result = []
    let i = 0
    for(let ele of arr){
        if(ele % 2 !== 0){
            result.push(odd[i++])
        }else{
            result.push(ele)
        }
    }
    return result
}

console.log(sortAdd([5, 3, 2, 8, 1, 4]))