'use strict';

function rangeOdd(start, end) {
    let arr = [];
    for (let a = start; a <= end; a++ ){
        if ( a % 2 > 0){
            arr.push(a);
        }
    }
    return arr;
}

console.log (rangeOdd (15, 30));