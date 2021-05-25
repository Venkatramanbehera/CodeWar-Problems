function shorter_reverse_longer(a,b){
    // a= a.split('').reverse().join('')
    if(a.length >= b.length){
        let rev = a.split('').reverse().join('')
        return `${b}${rev}${b}`
    }else{
        let rev = b.split('').reverse().join('')
        return `${b}${a}${b}`
    }
}

console.log(shorter_reverse_longer("first","hello"))
console.log(shorter_reverse_longer("cpm","u"))
console.log(shorter_reverse_longer("","xmqimow"))

