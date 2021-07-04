function DNAStrand(dna){
    let result = ''
    for( let char of dna){
        if( char === 'A'){
            result += 'T'
        }else if( char === 'T'){
            result += 'A'
        }else if( char === 'G'){
            result += 'C'
        }else if( char === 'C'){
            result += 'G'
        }
    }
    return result
}

console.log(DNAStrand('ATTGC'))
console.log(DNAStrand('GTAT'))
console.log(DNAStrand('AAAA'))