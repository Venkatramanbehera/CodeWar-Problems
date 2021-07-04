function getAverage(marks){
    let result = 0
    marks.forEach((ele) => {
        result += ele
    })
    return Math.floor(result/marks.length)
}

console.log(getAverage([2,2,2,2]))