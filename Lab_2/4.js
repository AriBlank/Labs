'use strict';

function range(start, end) {
    let arr = [];
    for (let a = start; a <= end; a++ ){
        arr.push(a);
    }
    return arr;
}

console.log (range (15, 30));