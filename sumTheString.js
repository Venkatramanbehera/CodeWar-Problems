function sumTheString(a,b){
   
    if(a.length === 0){
        a = '0'
    }
    if(b.length === 0){
        b = '0'
    }
    let result = parseInt(a) + parseInt(b)
    return result.toString()
}

console.log(sumTheString('4',''))
console.log(sumTheString('34','5'))