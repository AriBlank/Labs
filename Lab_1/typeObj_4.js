'use strict'

const arr = [true, 'hello', 5, 12, -200, false, false, 'word', 'league', 12445, 14, 55, 'applePay', 'appleJack'];
let counter = {};

for (let item of arr) {
    let type = typeof item;
    if (counter[type]) {
        counter[type]++;
    }
    else {
        counter [type] = 1;
    }
}
console.log(counter);