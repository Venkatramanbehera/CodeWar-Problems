const alternatingSums =(arr) => {
    let count1 = 0, count2 = 0
    for(let i=0; i<arr.length; i++){
        if(i % 2 === 0){
            count1 += arr[i]
        }else{
            count2 += arr[i]
        }
    }
    return [count1,count2]
}

console.log(alternatingSums([50,60,60,45,70]));