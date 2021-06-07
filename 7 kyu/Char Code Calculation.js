function calc(x){
    let str = ''
    for(let i=0; i<x.length; i++){
        str += x.charCodeAt(i)
    }
    let str2 = ''
    for(let i=0; i<str.length; i++){
        if(str[i] === "7"){
            str2 += '1'
        }else{
            str2 += str[i]
        }
    }
    let total1 = 0, total2 = 0
    for(let i=0, j=0; i<str.length, j<str2.length; i++, j++){
        total1 += Number(str[i])
        total2 += Number(str2[j])
    }
    return total1 - total2
}

console.log(calc('ABC'))
console.log(calc('abcdef'))
console.log(calc('ifkhchlhfd'))
console.log(calc('aaaaaddddr'))
console.log(calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'))

// console.log(typeof(1+5))