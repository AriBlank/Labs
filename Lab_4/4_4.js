'use strict';

function sum(...args){
    let circle = 0;
    let i = 0;
    if (args.length === 0) {
        return 0;
    }
    do {
        circle += args[i];
        i++;
    } while (i < args.length)
    console.log(circle);
    return circle;
}

const a = sum(10, 100, 35, 47);
const f = sum(1, 2, 3); 
const b = sum(0);
const c = sum(); 
const d = sum(1, -1, 1); 
const e = sum(10, -1, -1, -1);