function equalize(array){
    // const result = array.map((ele) => {
    //     // return (ele-10).toString()
    //     if(ele-10 >= 0){
    //         return '+'+(ele-10)
    //     }else{
    //         return (ele-10).toString()
    //     }
    // })
    // return result
    const result = []
    for(let i=0; i<array.length; i++){
        if(array[i] - array[0] >= 0){
            result.push(`+${array[i]-array[0]}`)
        }else{
            result.push(`${array[i]-array[0]}`)
        }
    }
    return result
}

console.log(equalize([10,20,25,0]))