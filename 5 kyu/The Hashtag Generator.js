function generateHashtag(str){
    if(str.length === 0){
        return false
    }
    const result = str.split(' ')
    const resultArray = result.filter((ele) => {
        return ele !== ''
    })
    let resultString = '#'
    for(let i=0; i<resultArray.length; i++){
        resultString += resultArray[i][0].toUpperCase() + resultArray[i].slice(1)
    }
    console.log(resultString)
    if(resultString === '#'){
        return false
    }
    return resultString.length > 140 ? false : resultString
    // if(str.length > 140 || str === ' '){
    //     return false
    // }
    // let result = "#"+str.split(' ').map(ele => {
    //     return ele.charAt(0).toUpperCase()+ele.slice(1)
    // }).join('')
    // return result
}

// console.log(generateHashtag(""))
// console.log(generateHashtag("Do We have A Hashtag"))
// console.log(generateHashtag("Codewars"))
// console.log(generateHashtag("Codewars Is Nice"))
console.log(generateHashtag("Codewars is nice"))
console.log(generateHashtag("a".repeat(139)))
// console.log(generateHashtag(" ".repeat(200)))
console.log(generateHashtag("code"+" ".repeat(139)+"wars"))
