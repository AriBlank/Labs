'use strict'

const a = 10;
function inc (x){
    x += 1;
    return x;
}
const b = inc(a);
console.log({a, b})