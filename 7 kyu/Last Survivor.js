function lastSurvivors(letters,coords){
    letters = letters.split('')
    for(let ele of coords){
        letters.splice(ele,1)
    }
    return letters.join('')

}

console.log(lastSurvivors('abc',[1,1]))
console.log(lastSurvivors('kbc',[0,1]))
console.log(lastSurvivors('zbk',[2,1]))
console.log(lastSurvivors('c',[]))