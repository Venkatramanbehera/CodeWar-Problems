function countLanguages(list){
    const result = {}
    list.forEach((ele) => {
        if(!result.hasOwnProperty(ele.language)){
            result[ele.language] = 1
        }else{
            result[ele.language] = result[ele.language] + 1
        }
    })
    return result
}

var list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
    { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];

console.log(countLanguages(list1))
