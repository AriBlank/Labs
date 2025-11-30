'use strict';

function pipe(...args) {
    for(const funk of args){
        if (typeof funk !== 'function'){
            throw new Error("not a function");
        }
    }
    function composition (x){
        return args.reduce((a, f) => f(a),x);
    }
    return composition;
}

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;
const comp = pipe(inc, twice, cube);

console.log(comp(5));
