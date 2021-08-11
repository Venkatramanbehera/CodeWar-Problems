const ranking = (arr) => {
    const resultArray = [...arr] 
    const sortArr = arr.sort((a,b)=> b - a)
    const result = []
    resultArray.forEach((ele) => {
        result.push(sortArr.indexOf(ele) + 1)
    })
    return result
}

console.log(ranking([10,5,20]));
console.log(ranking([6, 8, 1, 12, 4, 3, 9]));
console.log(ranking([4,3,2,1]));
console.log(ranking([100]));