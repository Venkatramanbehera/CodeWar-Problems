function bmi(weight, height){
    let b = weight / (height * height)
    if(b <= 18.5){
        return 'Underweight'
    } else if(b <= 25.0){
        return 'Normal'
    } else if(b <= 30.0){
        return 'Overweigh'
    } else{
        return 'Obese'
    } 
}

console.log(bmi(80,1.80))