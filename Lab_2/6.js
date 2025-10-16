'use strict';

function average (a, b) {
    return (a+b)/2;
}

function square (x) {
    return x*x;
}

function cube (x) {
   return x*x*x;
}

function calculate () {
    let arr = [];
    for(let a = 0; a <= 9; a++ ){
        let avg = average(square(a), cube(a));
        arr.push(avg);
    }
    return arr;
}
console.log(calculate());
