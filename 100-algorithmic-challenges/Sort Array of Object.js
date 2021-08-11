const sortArrayObject = (a) => {
    for(let i=0; i<a.length; i++){
        for(let j=0; j<a.length-i-1; j++){
            if(a[j+1].title.charCodeAt(0) < a[j].title.charCodeAt(0)){
                [ a[j+1], a[j]] = [a[j], a[j+1]]
            }
        }
    }
    return a
}

console.log(sortArrayObject([ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ]));