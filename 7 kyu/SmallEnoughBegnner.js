function smallEnough(a, limit){
    return a.every((ele) => {
        return ele <= limit
    })
}

console.log(smallEnough([66, 101], 200))
console.log(smallEnough([78, 117, 110, 99, 100, 117, 107, 115], 100))
console.log(smallEnough([101, 45, 75, 105, 99, 107], 107))