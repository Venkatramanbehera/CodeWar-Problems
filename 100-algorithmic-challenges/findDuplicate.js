const findDuplicate = (arr) => {
    const result = []
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(arr[i] === arr[j] && i !== j && !result.includes(arr[i])){
                result.push(arr[i]);
            }
        }
    }
    return result
}

console.log(findDuplicate([10,20,30,40,10,40]));