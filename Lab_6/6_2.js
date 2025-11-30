'use strict';

function check(...args) {
  if (!args.every(fn => typeof fn === 'function')) {
    throw new TypeError('not a function');
  }

  let errorr = null;

  const compfunk = (initialValue) => {
    let result = initialValue;
    for (let i = args.length - 1; i >= 0; i--) {
      try {
        result = args[i](result);
      } catch (e) {
        if (errorr) errorr(e);
        return undefined; 
      }
    }
    return result; 
  };

  compfunk.on = (event, callback) => {
    if (event === 'error') errorr = callback;
    return compfunk; 
  };

  return compfunk;
}

const inc = x => x + 1;
const twice = x => x * 2;
const risky = x => { if (x > 10) throw new Error('big number'); return x; };

const f = check(inc, twice, risky);
f.on('error', e => console.log('error:', e.message));

console.log(f(4));   
console.log(f(6));   
console.log(f(11));  
