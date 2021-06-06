function digitize(n){
    let result = String(n)
    result = result.split('').reverse()
    const res = []
    result.forEach((ele) => {
        res.push(Number(ele))
    })
    return res
}

console.log(digitize(348597))