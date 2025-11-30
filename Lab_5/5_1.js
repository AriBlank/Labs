'use strict';

const seq =(funk) => {
    let arrayFunks =[]; 
    arrayFunks.push(funk);
    const innerfunk = (x) => {
        if (typeof x === 'number') {
            arrayFunks = arrayFunks.reverse();
            let final = x;
            for(const funk of arrayFunks){
                final = funk(final);
            }
            return (final);
        }
        else {
            arrayFunks.push(x);
            return innerfunk;
        }
    }
    return innerfunk;
}

console.log(seq(x => x + 1)(x => x * 2)(x => x / 3)(x => x - 4)(7));
