const areaOfParameter = function(l,w){
    if(l === w){
        return l*l
    }
    return 2 * (l + w)
}

console.log(areaOfParameter(6,10))
console.log(areaOfParameter(4,4))