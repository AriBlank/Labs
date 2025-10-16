'use strict'

function inc(x) {
    x.n = x.n + 1;
}

const obj = {n: 100}
inc (obj);
console.log(obj);