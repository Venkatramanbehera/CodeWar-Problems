function addUserName(list){
    const date = new Date()
    const year = date.getFullYear()
    list.forEach((ele) => {
        ele.username = `${ele.firstName.toLowerCase()}${ele.lastName[0].toLowerCase()}${year-ele.age}`
    })
    return list
}

var list1 = [
    { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
    { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
];

console.log(addUserName(list1))

