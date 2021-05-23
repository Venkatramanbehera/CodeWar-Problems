function check(str){
    const result = {}
    for(let i=0; i<str.length; i++){
        if(! result.hasOwnProperty(str[i])) result[str[i]] = 1
        else{
            result[str[i]] = result[str[i]] + 1
        }
    }
    let res = 1
    let ans
    for(const ele in result){
        if(result[ele] > res){
            // res.push(ele)
            res = result[ele]
            ans = ele
        }
    }
    return ans
}

// function check(str){
//     str = str.split('')

//     return str
// }

const s = 'ddt academy'
console.log(check(s))