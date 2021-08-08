// Given a rectangular matrix of characters, add a border of asterisks(*) to it.
/*
o/p - ['*****','*abc*','*ded*','*****']
*/

const addBorder = (picture) => {
    const result = []
    result.unshift('*'.repeat(picture[0].length + 2))
    picture.forEach((pic) => {
        result.push(`*${pic}*`)
    })
    result.push('*'.repeat(picture[0].length + 2))
    return result
}

const picture = ["abc","ded"]

console.log(addBorder(picture));