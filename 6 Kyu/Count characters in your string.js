function count(string){
    const result = {}
    for(const ele of string){
        if(!result.hasOwnProperty(ele)){
            result[ele] = 1
        }else{
            result[ele] = result[ele] + 1
        }
    }
    return result
}

console.log(count("aba"))