function take(arr,n){
    if(arr.length === 0){
        return []
    }else if(n > arr.length){
        return arr
    }
    const result = []
    for(let i=0; i<n; i++){
        result.push(arr[i])
    }
    return result
}