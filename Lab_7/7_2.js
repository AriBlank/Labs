'use strict';
const array = [1, 2, 3, 4, 5, 6, 7];
function removeElement(arr, ...arg){
    arr = arr.filter(everyy => !arg.includes(everyy));
    console.log(arr);

    return arr;
}
console.log(removeElement(array, 7, 5));