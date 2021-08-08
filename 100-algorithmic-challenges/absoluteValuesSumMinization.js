const absoluteValue = (arr) => {
    if(arr.length % 2 === 0){
        return arr[arr.length / 2 - 1]
    }else{
        return arr[Math.floor(arr.length / 2)]
    }
}

console.log(absoluteValue([2,4,7]));
console.log(absoluteValue([2,4,7,6]));
console.log(absoluteValue([2,4,7,6,6]));
console.log(absoluteValue([2,4,7,6,6,8]));