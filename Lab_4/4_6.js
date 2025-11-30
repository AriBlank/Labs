'use strict';

const arrayM = ([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
let max = -Infinity;

for (let i = 0; i < arrayM.length; i++){
    for(let j = 0; j < arrayM[i].length; j++) {
        if (arrayM[i][j] > max) {
            max = arrayM[i][j];
        }
    }
}
console.log(max);