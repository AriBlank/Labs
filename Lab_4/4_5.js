'use strict';

function sum(...args){
    const summar = args.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
    }, 0);
    console.log(summar);
    return summar;
}
const a = sum(10, 100, 35, 47);
const f = sum(1, 2, 3); 
const b = sum(0);
const c = sum(); 
const d = sum(1, -1, 1); 
const e = sum(10, -1, -1, -1);