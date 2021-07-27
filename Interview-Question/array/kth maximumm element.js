// approach - 1

let kthMaxElement = (arr,k) => {
    arr.sort((a,b) => {
        if(a < b){
            return -1
        }else{
            return 1
        }
    })
    return arr[k-1]
}

console.log(kthMaxElement([20,8,88,2,5],3))