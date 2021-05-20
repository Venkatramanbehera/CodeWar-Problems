function multiTable(number){
    let result = ''
    for(let i=1; i<=9; i++){
        result +=`${i} * ${number} = ${i*number} \n`
    }
    result += `${'10'} * ${number} = ${10*number} \n`
    return result
}

console.log(multiTable(5))