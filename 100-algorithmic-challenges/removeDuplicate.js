const removeDuplicate = (arr) => {
    const arrObj = {}
    for(let i=0; i<arr.length; i++){
        if(arrObj.hasOwnProperty(arr[i])){
            arrObj[arr[i]] = arrObj[arr[i]] + 1
        }
        else{
            arrObj[arr[i]] = 1
        }
    }
    let count = 0
    for(let val in arrObj){
        if(arrObj[val] > 2){
            count = count + 2
        }
        else{
            count = count + arrObj[val]
        }
    }
    return count
}

console.log(removeDuplicate([1, 1, 1, 2, 2, 3]));
console.log(removeDuplicate([2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5]));