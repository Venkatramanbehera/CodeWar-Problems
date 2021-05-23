function quaterOf(month){
    if(month >= 1 && month <= 3){
        return 1
    }
    else if(month >= 4 && month <= 6){
        return 2
    }
    else if(month >= 7 && month <= 9){
        return 3
    }
    if(month >= 10 && month <= 12){
        return 4
    }
}

console.log(quaterOf(11))
console.log(quaterOf(8))