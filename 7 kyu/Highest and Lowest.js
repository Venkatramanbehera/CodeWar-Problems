function highAndLow(tStr){
   const arr = tStr.split(' ')
    let low = tStr[0], high = tStr[0]
    arr.forEach((a) => {
        if( Number(a) > high){
            high = a
        }else if( Number(a) < low){
            low = a
        }
    })
   return `${high} ${low}`
}

console.log(highAndLow("1 2 3 4 5"))
console.log(highAndLow("1 2 -3 4 5"))
console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"))