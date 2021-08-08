// Given an array of strings, return another array containing all of its longest strings.

// Example
// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

// Approach - 1 but some test case didn't pass
const allLongestStrings = (arr) => {
    const result = []
    let lengthString = arr[0].length 
    arr.forEach((ele) => {
        if(ele.length >= lengthString){
            result.push(ele)
        }
    })
    return result
}


//  approach - 2
const allLongestStringsEs = (arr) => {
    const arrHighestIndex = arr.sort((a,b) => b.length - a.length)
    return arr.filter((ele) => {
        return ele.length >= arrHighestIndex[0].length
    })
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
console.log(allLongestStringsEs(["aba", "aa", "ad", "vcd", "aba"]));
