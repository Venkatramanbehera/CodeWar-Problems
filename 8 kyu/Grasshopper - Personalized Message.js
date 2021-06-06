function greet(name,owner){
    if( name === owner){
        return 'Hello boss'
    }
    return 'Hello guest'
}

console.log(greet('Daniel', 'Daniel'))
console.log(greet('Daniel', 'sam'))