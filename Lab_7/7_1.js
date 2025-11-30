'use strict';
const array = [1, 2, 3, 4, 5, 6, 7];
function removeElement(arr, y){
    arr = arr.filter(arr => arr !== y);
    return arr;
}
console.log(removeElement(array, 7));