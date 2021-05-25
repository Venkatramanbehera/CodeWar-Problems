function findOdd(A){
    const result = {}
    A.forEach((ele) => {
        if(! result.hasOwnProperty(ele)){
            result[ele] = 1
        }else{
            result[ele] = result[ele] + 1
        }
    })
    for(const e in result){
        if(result[e] % 2 !== 0){
            return Number(e)
        }
    }
    return 0
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))