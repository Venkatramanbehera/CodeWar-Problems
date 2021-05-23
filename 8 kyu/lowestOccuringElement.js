// function check(str){
//     const result = {}
//     for(let i=0; i<str.length; i++){
//         if(! result.hasOwnProperty(str[i])) result[str[i]] = 1
//         else{
//             result[str[i]] = result[str[i]] + 1
//         }
//     }
//     return result
// }

function check(str){
    const result = []
    for(let i=0; i<str.length; i++){
        if(!result.includes(str[i])){
            result.push(str[i])
        }else{
            result.splice(result.indexOf(str[i]),1)
        }
    }
    return result
}

const s = 'dct academy'
console.log(check(s))