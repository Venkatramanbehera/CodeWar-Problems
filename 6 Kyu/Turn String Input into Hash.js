function strToHash(str){
    if(str.length === 0){
        return {}
    }
    const result = {}
    str = str.split(', ')
    str.forEach((ele) => {
        const i =ele.indexOf('=')
        result[ele.slice(0,i)] = Number(ele.slice(i+1))
    })
    return result
}

console.log( strToHash("a=1, b=2, c=3, d=4") )
console.log( strToHash("C=752, d=162, fG=308, tUv=682") )
console.log( strToHash("") )