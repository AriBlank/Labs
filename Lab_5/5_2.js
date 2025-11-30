'use strict';

function array() {
    const mass = [];

    function acc(index) {
        return mass[index];
    }

    acc.push = function (v){
        mass.push(v);
    }

    acc.pop = function() {
        return mass.pop();
    }

    return acc;
}
const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0)); 
console.log(arr(1)); 

console.log(arr.pop()); 
console.log(arr.pop()); 
console.log(arr.pop()); 

console.log(arr.pop()); 