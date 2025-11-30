'use strict';

function contract(fn, ...types) {
    return function(...args) {
        for (let i = 0; i < args.length; i++) {
            const typeExpect = types[i];
            if (!(args[i] instanceof typeExpect) && typeof args[i] !== typeExpect.name.toLowerCase()) {
                throw new TypeError(`expected type ${typeExpect.name}`);
            }
        }
        const result = fn(...args);
        const typeResult = types[types.length - 1];
        if (!(result instanceof typeResult) && typeof result !== typeResult.name.toLowerCase()) {
            throw new TypeError(`expected type ${typeResult.name}`);
        }

        return result;
    };
}
const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const ress = addNumbers(2, 3);
console.dir(ress);

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res = concatStrings('Hello ', 'world!');
console.dir(res);