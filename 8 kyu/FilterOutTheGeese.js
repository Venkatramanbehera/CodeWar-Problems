function gooseFilter(birds){
    const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
    const result = birds.filter((ele) => {
        return !geese.includes(ele)
    })
    return result
}

console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))